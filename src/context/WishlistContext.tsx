import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../data/products';
import { useAuth } from './AuthContext';

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
  getWishlistCount: () => number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const { user } = useAuth();

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem(`petpalace_wishlist_${user?.id || 'guest'}`);
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Failed to parse wishlist from localStorage:', error);
        localStorage.removeItem(`petpalace_wishlist_${user?.id || 'guest'}`);
      }
    }
  }, [user?.id]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`petpalace_wishlist_${user?.id || 'guest'}`, JSON.stringify(wishlistItems));
  }, [wishlistItems, user?.id]);

  const addToWishlist = (product: Product) => {
    setWishlistItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Item already exists, don't add it again
        return prevItems;
      } else {
        // Item doesn't exist, add it
        return [...prevItems, product];
      }
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearWishlist,
      getWishlistCount
    }}>
      {children}
    </WishlistContext.Provider>
  );
};