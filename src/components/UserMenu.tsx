import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Heart, ShoppingBag, Clock, User, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const UserMenu: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <Link 
        to="/wishlist" 
        className="text-white hover:text-emerald-200 transition-colors"
        aria-label="Wishlist"
      >
        <Heart className="h-5 w-5" />
      </Link>
      
      <Link 
        to="/orders" 
        className="text-white hover:text-emerald-200 transition-colors"
        aria-label="Orders"
      >
        <ShoppingBag className="h-5 w-5" />
      </Link>
      
      <Link 
        to="/recent" 
        className="text-white hover:text-emerald-200 transition-colors"
        aria-label="Recently Viewed"
      >
        <Clock className="h-5 w-5" />
      </Link>
      
      {isAuthenticated ? (
        <Link 
          to="/settings" 
          className="text-white hover:text-emerald-200 transition-colors"
          aria-label="Settings"
        >
          <Settings className="h-5 w-5" />
        </Link>
      ) : (
        <button
          onClick={() => setIsAuthModalOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
        >
          <LogIn className="h-4 w-4 mr-2" />
          <span className="font-medium">Login</span>
        </button>
      )}

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode="login"
      />
    </div>
  );
};

export default UserMenu;