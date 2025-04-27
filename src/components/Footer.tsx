import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint as Paw, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Paw className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold">PetPalace Kenya</span>
            </div>
            <p className="text-gray-300 mb-4">Your one-stop shop for all pet needs in Kenya. Quality products for your beloved companions at affordable prices.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Mobile Accordion for Shop */}
          <div className="md:hidden">
            <button 
              className="flex items-center justify-between w-full py-2 border-b border-gray-700"
              onClick={() => toggleSection('shop')}
              aria-expanded={expandedSection === 'shop'}
            >
              <h3 className="text-lg font-semibold">Shop</h3>
              {expandedSection === 'shop' ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {expandedSection === 'shop' && (
              <ul className="space-y-2 mt-3 pl-2">
                <li><Link to="/shop" className="text-gray-300 hover:text-emerald-400 transition-colors">Shop by Pet</Link></li>
                <li><Link to="/deals" className="text-gray-300 hover:text-emerald-400 transition-colors">Deals & Promotions</Link></li>
                <li><Link to="/new" className="text-gray-300 hover:text-emerald-400 transition-colors">New Arrivals</Link></li>
                <li><Link to="/bestsellers" className="text-gray-300 hover:text-emerald-400 transition-colors">Best Sellers</Link></li>
              </ul>
            )}
          </div>
          
          {/* Mobile Accordion for Customer Service */}
          <div className="md:hidden">
            <button 
              className="flex items-center justify-between w-full py-2 border-b border-gray-700"
              onClick={() => toggleSection('customer')}
              aria-expanded={expandedSection === 'customer'}
            >
              <h3 className="text-lg font-semibold">Customer Service</h3>
              {expandedSection === 'customer' ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {expandedSection === 'customer' && (
              <ul className="space-y-2 mt-3 pl-2">
                <li><Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-emerald-400 transition-colors">FAQs</Link></li>
                <li><Link to="/shipping" className="text-gray-300 hover:text-emerald-400 transition-colors">Shipping Policy</Link></li>
                <li><Link to="/returns" className="text-gray-300 hover:text-emerald-400 transition-colors">Returns & Refunds</Link></li>
              </ul>
            )}
          </div>
          
          {/* Mobile Accordion for Contact Us */}
          <div className="md:hidden">
            <button 
              className="flex items-center justify-between w-full py-2 border-b border-gray-700"
              onClick={() => toggleSection('contact')}
              aria-expanded={expandedSection === 'contact'}
            >
              <h3 className="text-lg font-semibold">Contact Us</h3>
              {expandedSection === 'contact' ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {expandedSection === 'contact' && (
              <ul className="space-y-3 mt-3 pl-2">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Ngong Road, Nairobi, Kenya</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">+254 712 345 678</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">support@petpalacekenya.co.ke</span>
                </li>
              </ul>
            )}
          </div>
          
          {/* Desktop Columns */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-300 hover:text-emerald-400 transition-colors">Shop by Pet</Link></li>
              <li><Link to="/deals" className="text-gray-300 hover:text-emerald-400 transition-colors">Deals & Promotions</Link></li>
              <li><Link to="/new" className="text-gray-300 hover:text-emerald-400 transition-colors">New Arrivals</Link></li>
              <li><Link to="/bestsellers" className="text-gray-300 hover:text-emerald-400 transition-colors">Best Sellers</Link></li>
            </ul>
          </div>
          
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-emerald-400 transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-emerald-400 transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-emerald-400 transition-colors">Returns & Refunds</Link></li>
            </ul>
          </div>
          
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Ngong Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">+254 712 345 678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">support@petpalacekenya.co.ke</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-10 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates on new products and special promotions.</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 w-full sm:w-64"
                />
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PetPalace Kenya. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-emerald-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;