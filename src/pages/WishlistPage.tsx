import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, Trash2, Heart } from 'lucide-react';

const WishlistPage: React.FC = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (productId: string) => {
    const product = wishlistItems.find(item => item.id === productId);
    if (product) {
      addToCart(product);
      // Optionally remove from wishlist after adding to cart
      // removeFromWishlist(productId);
    }
  };

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
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">My Wishlist</h1>
              <p className="text-gray-600">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
              </p>
            </div>
            
            {wishlistItems.length > 0 && (
              <div className="mt-4 md:mt-0 flex space-x-4">
                <button 
                  onClick={() => clearWishlist()}
                  className="text-red-600 hover:text-red-800 flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear Wishlist
                </button>
              </div>
            )}
          </div>
          
          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                    <button 
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-red-50 transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                    </button>
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
                      onClick={() => handleAddToCart(product.id)}
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
              <div className="flex flex-col items-center">
                <Heart className="h-16 w-16 text-gray-300 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h2>
                <p className="text-gray-600 mb-6">
                  Browse our products and add items to your wishlist to save them for later.
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
          
          {wishlistItems.length > 0 && (
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">You might also like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Placeholder for recommended products */}
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-32">
                    <span className="text-gray-500 font-medium">Recommended Product {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;