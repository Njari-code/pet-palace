import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Loader } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isMobile = false, onClose }) => {
  const { 
    searchQuery, 
    searchResults, 
    isSearching, 
    setSearchQuery, 
    performSearch, 
    clearSearch 
  } = useSearch();
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch();
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsResultsOpen(false);
      if (onClose) onClose();
    }
  };

  const handleClear = () => {
    clearSearch();
    setIsResultsOpen(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleResultClick = (productId: string) => {
    // In a real app, navigate to the product detail page
    console.log(`Navigate to product: ${productId}`);
    setIsResultsOpen(false);
    if (onClose) onClose();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsResultsOpen(false);
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.length > 2) {
      performSearch();
      setIsResultsOpen(true);
    } else if (searchQuery.length === 0) {
      setIsResultsOpen(false);
    }
  }, [searchQuery]);

  return (
    <div ref={searchRef} className={`relative ${isMobile ? 'w-full' : 'w-auto'}`}>
      <form 
        onSubmit={handleSubmit} 
        className={`relative transition-all duration-200 ${isFocused ? 'scale-105' : ''}`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          className={`py-2 px-4 pr-10 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
            isMobile ? 'w-full' : 'w-48 md:w-64 lg:w-72'
          } ${isFocused ? 'shadow-md' : ''}`}
          aria-label="Search products"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center">
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-400 hover:text-gray-600 mr-1"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {isSearching ? (
            <Loader className="h-4 w-4 text-emerald-500 animate-spin" />
          ) : (
            <button type="submit" className="text-gray-500" aria-label="Submit search">
              <Search className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>

      {isResultsOpen && searchResults.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
          <div className="p-2">
            <p className="text-xs text-gray-500 mb-2">
              {searchResults.length} results found
            </p>
            {searchResults.map((product) => (
              <div
                key={product.id}
                className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={() => handleResultClick(product.id)}
              >
                <div className="w-12 h-12 flex-shrink-0 rounded overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3 flex-grow">
                  <p className="text-sm font-medium text-gray-800">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>
                <div className="text-sm font-bold text-emerald-600">
                  KSh {product.price.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isResultsOpen && searchQuery && searchResults.length === 0 && !isSearching && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg p-4 text-center">
          <p className="text-gray-500">No products found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;