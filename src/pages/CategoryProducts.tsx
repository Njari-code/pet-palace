import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products, Product } from '../data/products';
import { productCategories } from '../data/categories';
import { Star, ShoppingCart, Filter, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const CategoryProducts: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [petFilter, setPetFilter] = useState<string>('all');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const category = productCategories.find(cat => cat.id === categoryId);
  
  useEffect(() => {
    if (categoryId) {
      const categoryProducts = products.filter(product => product.subcategory === categoryId);
      setFilteredProducts(categoryProducts);
    }
  }, [categoryId]);
  
  const handlePetFilterChange = (filter: string) => {
    setPetFilter(filter);
    
    if (filter === 'all') {
      const categoryProducts = products.filter(product => product.subcategory === categoryId);
      setFilteredProducts(categoryProducts);
    } else {
      const filtered = products.filter(
        product => product.subcategory === categoryId && product.category === filter
      );
      setFilteredProducts(filtered);
    }
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);
    
    let sortedProducts = [...filteredProducts];
    
    switch (sortValue) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        sortedProducts.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
        break;
    }
    
    setFilteredProducts(sortedProducts);
  };
  
  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };
  
  const handleWishlistToggle = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
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
  
  if (!category) {
    return <div className="container mx-auto px-4 py-12">Category not found</div>;
  }
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Filter by Pet</h2>
              <ul className="space-y-2">
                <li>
                  <button 
                    className={`w-full text-left py-1 px-2 rounded ${petFilter === 'all' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handlePetFilterChange('all')}
                  >
                    All Pets
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left py-1 px-2 rounded ${petFilter === 'dogs' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handlePetFilterChange('dogs')}
                  >
                    Dogs
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left py-1 px-2 rounded ${petFilter === 'cats' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handlePetFilterChange('cats')}
                  >
                    Cats
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left py-1 px-2 rounded ${petFilter === 'fish' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handlePetFilterChange('fish')}
                  >
                    Fish
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left py-1 px-2 rounded ${petFilter === 'birds' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handlePetFilterChange('birds')}
                  >
                    Birds
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left py-1 px-2 rounded ${petFilter === 'small-pets' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handlePetFilterChange('small-pets')}
                  >
                    Small Pets
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left py-1 px-2 rounded ${petFilter === 'reptiles' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handlePetFilterChange('reptiles')}
                  >
                    Reptiles
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <button 
                className="flex items-center space-x-2 bg-white rounded-lg shadow px-4 py-2 text-gray-700"
                onClick={toggleFilterMenu}
              >
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
              
              <div className="relative">
                <select 
                  className="bg-white rounded-lg shadow px-4 py-2 text-gray-700 appearance-none pr-8"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Mobile Filter Menu */}
            {isFilterMenuOpen && (
              <div className="lg:hidden bg-white rounded-lg shadow-md p-4 mb-4">
                <h2 className="text-lg font-semibold mb-2">Filter by Pet</h2>
                <div className="flex flex-wrap gap-2">
                  <button 
                    className={`py-1 px-3 rounded-full text-sm ${petFilter === 'all' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => handlePetFilterChange('all')}
                  >
                    All
                  </button>
                  <button 
                    className={`py-1 px-3 rounded-full text-sm ${petFilter === 'dogs' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => handlePetFilterChange('dogs')}
                  >
                    Dogs
                  </button>
                  <button 
                    className={`py-1 px-3 rounded-full text-sm ${petFilter === 'cats' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => handlePetFilterChange('cats')}
                  >
                    Cats
                  </button>
                  <button 
                    className={`py-1 px-3 rounded-full text-sm ${petFilter === 'fish' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => handlePetFilterChange('fish')}
                  >
                    Fish
                  </button>
                  <button 
                    className={`py-1 px-3 rounded-full text-sm ${petFilter === 'birds' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => handlePetFilterChange('birds')}
                  >
                    Birds
                  </button>
                  <button 
                    className={`py-1 px-3 rounded-full text-sm ${petFilter === 'small-pets' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => handlePetFilterChange('small-pets')}
                  >
                    Small Pets
                  </button>
                  <button 
                    className={`py-1 px-3 rounded-full text-sm ${petFilter === 'reptiles' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => handlePetFilterChange('reptiles')}
                  >
                    Reptiles
                  </button>
                </div>
              </div>
            )}
            
            {/* Sort and Results Count - Desktop */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredProducts.length} products</p>
              
              <div className="relative">
                <select 
                  className="bg-white rounded-lg shadow px-4 py-2 text-gray-700 appearance-none pr-8"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600">No products found in this category. Please try another filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;