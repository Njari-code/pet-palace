import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { petCategories } from '../data/pets';
import { productCategories } from '../data/categories';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('pets');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div ref={menuRef} className="container mx-auto px-4 py-6">
        <div className="flex">
          {/* Navigation Tabs */}
          <div className="w-1/4 pr-6 border-r border-gray-200">
            <ul className="space-y-1">
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'pets' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('pets')}
                >
                  Shop by Pet
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'categories' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('categories')}
                >
                  Shop by Category
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'brands' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('brands')}
                >
                  Popular Brands
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'deals' ? 'bg-emerald-100 text-emerald-700 font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('deals')}
                >
                  Deals & Offers
                </button>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link 
                to="/services" 
                className="flex items-center px-4 py-2 text-emerald-600 font-medium hover:bg-gray-100 rounded-md"
                onClick={onClose}
              >
                Our Services
                <ChevronRight className="ml-auto h-5 w-5" />
              </Link>
              <Link 
                to="/about" 
                className="flex items-center px-4 py-2 text-emerald-600 font-medium hover:bg-gray-100 rounded-md"
                onClick={onClose}
              >
                About Us
                <ChevronRight className="ml-auto h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="w-3/4 pl-6">
            {activeTab === 'pets' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Shop by Pet Type</h3>
                <div className="grid grid-cols-3 gap-6">
                  {petCategories.map((pet) => (
                    <Link 
                      key={pet.id}
                      to={`/shop/${pet.id}`}
                      className="group"
                      onClick={onClose}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden mb-2">
                        <img 
                          src={pet.image} 
                          alt={pet.name}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-medium text-gray-800 group-hover:text-emerald-600 transition-colors">{pet.name}</h4>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    to="/shop" 
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800"
                    onClick={onClose}
                  >
                    View All Pet Categories
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
            
            {activeTab === 'categories' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Shop by Product Category</h3>
                <div className="grid grid-cols-4 gap-6">
                  {productCategories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="group"
                      onClick={onClose}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden mb-2">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-medium text-gray-800 group-hover:text-emerald-600 transition-colors">{category.name}</h4>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    to="/categories" 
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800"
                    onClick={onClose}
                  >
                    View All Product Categories
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
            
            {activeTab === 'brands' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Brands</h3>
                <div className="grid grid-cols-4 gap-6">
                  {/* Placeholder for brands */}
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                      <span className="text-gray-500 font-medium">Brand {index + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    to="/brands" 
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800"
                    onClick={onClose}
                  >
                    View All Brands
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
            
            {activeTab === 'deals' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Deals & Promotions</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">FLASH SALE</span>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">50% OFF All Dog Toys</h4>
                    <p className="text-gray-600 mb-4">For this week only, enjoy half price on our entire collection of durable, interactive dog toys.</p>
                    <Link 
                      to="/category/toys" 
                      className="text-emerald-600 font-medium hover:text-emerald-800"
                      onClick={onClose}
                    >
                      Shop Now →
                    </Link>
                  </div>
                  
                  <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                    <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">BUNDLE DEAL</span>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Cat Essentials Kit</h4>
                    <p className="text-gray-600 mb-4">Get everything your new cat needs: food, litter box, toys, and more at a special bundle price.</p>
                    <Link 
                      to="/deals" 
                      className="text-emerald-600 font-medium hover:text-emerald-800"
                      onClick={onClose}
                    >
                      Shop Now →
                    </Link>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    to="/deals" 
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800"
                    onClick={onClose}
                  >
                    View All Deals
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;