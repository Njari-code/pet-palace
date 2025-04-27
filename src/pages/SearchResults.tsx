import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import { Star, ShoppingCart, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchQuery, searchResults, performSearch, setSearchQuery } = useSearch();
  const { addToCart } = useCart();
  
  // Extract query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    
    if (query) {
      setSearchQuery(query);
      performSearch();
    }
  }, [location.search]);
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-yellow-400" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400" />);
    }
    
    return stars;
  };
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Search Results</h1>
          {searchQuery && (
            <p className="text-gray-600">
              {searchResults.length} results for "{searchQuery}"
            </p>
          )}
        </div>
        
        {/* Products Grid */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-[1.02]">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <span className="text-lg font-bold text-emerald-600">KSh {product.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-500">({product.rating.toFixed(1)})</span>
                  </div>
                  <button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md flex items-center justify-center transition-colors"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">No products found matching your search criteria.</p>
            <button 
              onClick={() => navigate('/shop')}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Browse All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;