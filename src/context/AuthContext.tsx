import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Storage keys
const USERS_STORAGE_KEY = 'petpalace_users';
const CURRENT_USER_KEY = 'petpalace_current_user';

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // Check for stored user session
      const storedUser = localStorage.getItem(CURRENT_USER_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error loading auth state:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getStoredUsers = (): User[] => {
    try {
      const users = localStorage.getItem(USERS_STORAGE_KEY);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error('Error loading users:', error);
      return [];
    }
  };

  const login = async (email: string, password: string) => {
    const users = getStoredUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!user) {
      throw new Error('Invalid login credentials');
    }

    setUser(user);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  };

  const signup = async (email: string, password: string, name: string) => {
    const users = getStoredUsers();
    
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('User already registered');
    }

    const newUser = {
      id: `user_${Date.now()}`,
      email: email.toLowerCase(),
      name
    };

    users.push(newUser);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    
    setUser(newUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
  };

  const updateProfile = async (data: Partial<User>) => {
    if (!user) throw new Error('No user logged in');

    const users = getStoredUsers();
    const updatedUsers = users.map(u => 
      u.id === user.id ? { ...u, ...data } : u
    );

    const updatedUser = { ...user, ...data };
    
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));
    
    setUser(updatedUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      signup,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}