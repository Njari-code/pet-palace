import React from 'react';
import { Link } from 'react-router-dom';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import { useCart } from '../context/CartContext';
import { Clock, ShoppingCart, Trash2, Eye } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const RecentlyViewedPage: React.FC = () => {
  const { recentlyViewedItems, clearRecentlyViewed } = useRecentlyViewed();

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-emerald-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">Recently Viewed</h1>
            </div>
            
            {recentlyViewedItems.length > 0 && (
              <button 
                onClick={clearRecentlyViewed}
                className="mt-4 md:mt-0 text-red-600 hover:text-red-800 flex items-center"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Clear History
              </button>
            )}
          </div>
          
          {recentlyViewedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentlyViewedItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex flex-col items-center">
                <Eye className="h-16 w-16 text-gray-300 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">No recently viewed items</h2>
                <p className="text-gray-600 mb-6">
                  Browse our products to start building your viewing history.
                </p>
                <Link 
                  to="/shop"
                  className="bg-emerald-600 text-white px-6 py-2 rounded-md font-medium hover:bg-emerald-700 transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedPage;