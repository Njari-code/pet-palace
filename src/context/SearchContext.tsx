import React, { createContext, useContext, useState, ReactNode } from 'react';
import { products, Product } from '../data/products';

interface SearchContextType {
  searchQuery: string;
  searchResults: Product[];
  isSearching: boolean;
  setSearchQuery: (query: string) => void;
  performSearch: () => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const performSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API delay
    setTimeout(() => {
      const query = searchQuery.toLowerCase().trim();
      
      const results = products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query)
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      searchResults,
      isSearching,
      setSearchQuery,
      performSearch,
      clearSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};