import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingBag, User, Menu } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenSearch: () => void;
  onOpenMenu: () => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenSearch, onOpenMenu }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/') ? 'text-emerald-600' : 'text-gray-600'}`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <button 
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center w-full h-full text-gray-600"
        >
          <Search className="h-5 w-5" />
          <span className="text-xs mt-1">Search</span>
        </button>
        
        <Link 
          to="/shop" 
          className={`flex flex-col items-center justify-center w-full h-full ${location.pathname.startsWith('/shop') ? 'text-emerald-600' : 'text-gray-600'}`}
        >
          <ShoppingBag className="h-5 w-5" />
          <span className="text-xs mt-1">Shop</span>
        </Link>
        
        <Link 
          to="/account" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/account') ? 'text-emerald-600' : 'text-gray-600'}`}
        >
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Account</span>
        </Link>
        
        <button 
          onClick={onOpenMenu}
          className="flex flex-col items-center justify-center w-full h-full text-gray-600"
        >
          <Menu className="h-5 w-5" />
          <span className="text-xs mt-1">Menu</span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;