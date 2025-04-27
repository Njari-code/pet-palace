import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../data/products';
import { useAuth } from './AuthContext';

interface RecentlyViewedContextType {
  recentlyViewedItems: Product[];
  addToRecentlyViewed: (product: Product) => void;
  clearRecentlyViewed: () => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined);

export const useRecentlyViewed = () => {
  const context = useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error('useRecentlyViewed must be used within a RecentlyViewedProvider');
  }
  return context;
};

interface RecentlyViewedProviderProps {
  children: ReactNode;
}

export const RecentlyViewedProvider: React.FC<RecentlyViewedProviderProps> = ({ children }) => {
  const [recentlyViewedItems, setRecentlyViewedItems] = useState<Product[]>([]);
  const { user } = useAuth();
  const storageKey = `petpalace_recently_viewed_${user?.id || 'guest'}`;

  // Load recently viewed items from localStorage on initial render
  useEffect(() => {
    const savedItems = localStorage.getItem(storageKey);
    if (savedItems) {
      try {
        setRecentlyViewedItems(JSON.parse(savedItems));
      } catch (error) {
        console.error('Failed to parse recently viewed items from localStorage:', error);
        localStorage.removeItem(storageKey);
      }
    }
  }, [storageKey, user?.id]);

  // Save recently viewed items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(recentlyViewedItems));
  }, [recentlyViewedItems, storageKey]);

  const addToRecentlyViewed = (product: Product) => {
    setRecentlyViewedItems(prevItems => {
      // Remove the product if it already exists
      const filteredItems = prevItems.filter(item => item.id !== product.id);
      
      // Add the product to the beginning of the array
      return [product, ...filteredItems].slice(0, 20); // Keep only the 20 most recent items
    });
  };

  const clearRecentlyViewed = () => {
    setRecentlyViewedItems([]);
  };

  return (
    <RecentlyViewedContext.Provider value={{
      recentlyViewedItems,
      addToRecentlyViewed,
      clearRecentlyViewed
    }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};