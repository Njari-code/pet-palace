import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopByPet from './pages/ShopByPet';
import ProductListing from './pages/ProductListing';
import PopularCategories from './pages/PopularCategories';
import CategoryProducts from './pages/CategoryProducts';
import Deals from './pages/Deals';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import SearchResults from './pages/SearchResults';
import { SearchProvider } from './context/SearchContext';
import Home from './pages/Home';
import MobileBottomNav from './components/MobileBottomNav';
import AccountPage from './pages/AccountPage';
import WishlistPage from './pages/WishlistPage';
import ProtectedRoute from './components/ProtectedRoute';
import OrdersPage from './pages/OrdersPage';
import RecentlyViewedPage from './pages/RecentlyViewedPage';
import SettingsPage from './pages/SettingsPage';
import AdminPage from './pages/AdminPage';
import Adopt from './pages/Adopt';

function App() {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileSearch = () => {
    setIsMobileSearchOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setIsMobileSearchOpen(false);
  };

  return (
    <SearchProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main id="main-content" className="flex-grow pb-16 lg:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopByPet />} />
              <Route path="/shop/:categoryId" element={<ProductListing />} />
              <Route path="/categories" element={<PopularCategories />} />
              <Route path="/category/:categoryId" element={<CategoryProducts />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/adopt" element={<Adopt />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/recent" element={<RecentlyViewedPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
          <MobileBottomNav 
            onOpenSearch={handleOpenMobileSearch} 
            onOpenMenu={handleOpenMobileMenu} 
          />
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;