import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint as Paw, ShoppingCart, Menu, X, ChevronDown, Home, Tag, Gift, Briefcase, Info, Search, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import MegaMenu from './MegaMenu';
import CartDrawer from './CartDrawer';

const Header: React.FC = () => {
  const { getCartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSearchOpen(false);
    setActiveDropdown(null);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileSearchOpen) setIsMobileSearchOpen(false);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-40 bg-emerald-600 text-white transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Paw className="h-8 w-8" />
              <span className="text-2xl font-bold">PetPalace</span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md flex items-center hover:bg-emerald-700 transition-colors ${isActive('/') ? 'bg-emerald-700 font-medium' : ''}`}
            >
              <Home className="h-4 w-4 mr-1" />
              <span>Home</span>
            </Link>
            
            <button 
              onClick={toggleMegaMenu}
              className={`px-3 py-2 rounded-md flex items-center hover:bg-emerald-700 transition-colors ${isMegaMenuOpen ? 'bg-emerald-700 font-medium' : ''}`}
            >
              <Tag className="h-4 w-4 mr-1" />
              <span>Shop</span>
              <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <Link 
              to="/adopt" 
              className={`px-3 py-2 rounded-md flex items-center hover:bg-emerald-700 transition-colors ${isActive('/adopt') ? 'bg-emerald-700 font-medium' : ''}`}
            >
              <Heart className="h-4 w-4 mr-1" />
              <span>Adopt</span>
            </Link>
            
            <Link 
              to="/deals" 
              className={`px-3 py-2 rounded-md flex items-center hover:bg-emerald-700 transition-colors ${isActive('/deals') ? 'bg-emerald-700 font-medium' : ''}`}
            >
              <Gift className="h-4 w-4 mr-1" />
              <span>Deals</span>
            </Link>
            
            <Link 
              to="/services" 
              className={`px-3 py-2 rounded-md flex items-center hover:bg-emerald-700 transition-colors ${isActive('/services') ? 'bg-emerald-700 font-medium' : ''}`}
            >
              <Briefcase className="h-4 w-4 mr-1" />
              <span>Services</span>
            </Link>
            
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md flex items-center hover:bg-emerald-700 transition-colors ${isActive('/about') ? 'bg-emerald-700 font-medium' : ''}`}
            >
              <Info className="h-4 w-4 mr-1" />
              <span>About Us</span>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            
            <UserMenu />
            
            <button 
              onClick={toggleCart}
              className="hover:text-emerald-200 relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-emerald-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden"
              onClick={toggleMobileSearch}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <button 
              className="lg:hidden"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileSearchOpen && (
          <div className="md:hidden mt-4 pb-4">
            <SearchBar 
              isMobile={true} 
              onClose={() => setIsMobileSearchOpen(false)} 
            />
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-emerald-500 pt-4">
            <nav className="flex flex-col space-y-1">
              <Link 
                to="/" 
                className={`flex items-center px-3 py-2 rounded-md ${isActive('/') ? 'bg-emerald-700 font-medium' : 'hover:bg-emerald-700'}`}
              >
                <Home className="h-5 w-5 mr-2" />
                Home
              </Link>
              
              <div className="space-y-1">
                <button 
                  onClick={() => toggleDropdown('mobileShop')}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${location.pathname.startsWith('/shop') ? 'bg-emerald-700 font-medium' : 'hover:bg-emerald-700'}`}
                >
                  <div className="flex items-center">
                    <Tag className="h-5 w-5 mr-2" />
                    Shop by Pet
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobileShop' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'mobileShop' && (
                  <div className="pl-10 space-y-1 mt-1 border-l-2 border-emerald-500 ml-4">
                    <Link 
                      to="/shop/dogs" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Dogs
                    </Link>
                    <Link 
                      to="/shop/cats" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Cats
                    </Link>
                    <Link 
                      to="/shop/fish" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Fish
                    </Link>
                    <Link 
                      to="/shop/birds" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Birds
                    </Link>
                    <Link 
                      to="/shop/small-pets" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Small Pets
                    </Link>
                    <Link 
                      to="/shop/reptiles" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Reptiles
                    </Link>
                    <Link 
                      to="/shop" 
                      className="block px-3 py-1 rounded-md font-medium hover:bg-emerald-700"
                    >
                      View All Pets
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/adopt" 
                className={`flex items-center px-3 py-2 rounded-md ${isActive('/adopt') ? 'bg-emerald-700 font-medium' : 'hover:bg-emerald-700'}`}
              >
                <Heart className="h-5 w-5 mr-2" />
                Adopt
              </Link>
              
              <div className="space-y-1">
                <button 
                  onClick={() => toggleDropdown('mobileCategories')}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${location.pathname.startsWith('/categor') ? 'bg-emerald-700 font-medium' : 'hover:bg-emerald-700'}`}
                >
                  <span>Categories</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobileCategories' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'mobileCategories' && (
                  <div className="pl-10 space-y-1 mt-1 border-l-2 border-emerald-500 ml-4">
                    <Link 
                      to="/category/food" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Pet Food
                    </Link>
                    <Link 
                      to="/category/toys" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Toys & Enrichment
                    </Link>
                    <Link 
                      to="/category/beds" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Beds & Furniture
                    </Link>
                    <Link 
                      to="/category/grooming" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Grooming Supplies
                    </Link>
                    <Link 
                      to="/category/health" 
                      className="block px-3 py-1 rounded-md hover:bg-emerald-700"
                    >
                      Health & Wellness
                    </Link>
                    <Link 
                      to="/categories" 
                      className="block px-3 py-1 rounded-md font-medium hover:bg-emerald-700"
                    >
                      View All Categories
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/deals" 
                className={`flex items-center px-3 py-2 rounded-md ${isActive('/deals') ? 'bg-emerald-700 font-medium' : 'hover:bg-emerald-700'}`}
              >
                <Gift className="h-5 w-5 mr-2" />
                Deals
              </Link>
              
              <Link 
                to="/services" 
                className={`flex items-center px-3 py-2 rounded-md ${isActive('/services') ? 'bg-emerald-700 font-medium' : 'hover:bg-emerald-700'}`}
              >
                <Briefcase className="h-5 w-5 mr-2" />
                Services
              </Link>
              
              <Link 
                to="/about" 
                className={`flex items-center px-3 py-2 rounded-md ${isActive('/about') ? 'bg-emerald-700 font-medium' : 'hover:bg-emerald-700'}`}
              >
                <Info className="h-5 w-5 mr-2" />
                About Us
              </Link>
            </nav>
          </div>
        )}
      </div>

      <div className="relative">
        <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;