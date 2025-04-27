import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag, Percent, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface DealProduct {
  id: string;
  name: string;
  category: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  description: string;
  discountPercentage: number;
  endDate: string;
}

const dealProducts: DealProduct[] = [
  {
    id: "deal-1",
    name: "Premium Dog Food Bundle",
    category: "dogs",
    originalPrice: 5999,
    discountedPrice: 4499,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Get 5kg of premium dry dog food plus 3 cans of wet food at a special bundle price. Limited time offer!",
    discountPercentage: 25,
    endDate: "2025-06-30"
  },
  {
    id: "deal-2",
    name: "Cat Grooming Kit",
    category: "cats",
    originalPrice: 3499,
    discountedPrice: 2499,
    image: "https://images.unsplash.com/photo-1604054094723-3a949e4a8d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Complete grooming kit including brush, nail clippers, and shampoo. Perfect for keeping your feline friend looking their best!",
    discountPercentage: 30,
    endDate: "2025-06-15"
  },
  {
    id: "deal-3",
    name: "Deluxe Bird Cage with Stand",
    category: "birds",
    originalPrice: 12999,
    discountedPrice: 8999,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Spacious cage with multiple perches, feeding stations, and a sturdy stand. Limited stock available!",
    discountPercentage: 30,
    endDate: "2025-07-10"
  },
  {
    id: "deal-4",
    name: "Aquarium Starter Bundle",
    category: "fish",
    originalPrice: 8999,
    discountedPrice: 6499,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Complete 20-liter aquarium setup including tank, filter, heater, LED lighting, and starter fish food.",
    discountPercentage: 28,
    endDate: "2025-06-20"
  },
  {
    id: "deal-5",
    name: "Reptile Heat Rock & Lamp Combo",
    category: "reptiles",
    originalPrice: 4999,
    discountedPrice: 3499,
    image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Essential heating combo for reptile habitats. Includes heat rock, lamp fixture, and UVB bulb.",
    discountPercentage: 30,
    endDate: "2025-07-05"
  },
  {
    id: "deal-6",
    name: "Small Pet Habitat & Accessories",
    category: "small-pets",
    originalPrice: 9999,
    discountedPrice: 6999,
    image: "https://images.unsplash.com/photo-1591561582301-7ce6587cc286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Deluxe habitat for rabbits, guinea pigs, or hamsters. Includes water bottle, food dish, and exercise wheel.",
    discountPercentage: 30,
    endDate: "2025-06-25"
  }
];

const Deals: React.FC = () => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (deal: DealProduct) => {
    const product = {
      id: deal.id,
      name: deal.name,
      category: deal.category,
      subcategory: 'accessories' as 'food' | 'toys' | 'accessories' | 'health',
      price: deal.discountedPrice,
      image: deal.image,
      description: deal.description,
      rating: 4.8,
      inStock: true
    };
    
    addToCart(product);
  };
  
  const calculateDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Limited Time Offers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing deals on premium pet products. These special offers won't last long!
          </p>
        </div>
        
        {/* Featured Deal Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl overflow-hidden shadow-xl mb-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                FLASH SALE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">50% OFF All Dog Toys</h2>
              <p className="text-white text-opacity-90 mb-6">
                For this week only, enjoy half price on our entire collection of durable, interactive dog toys. 
                Keep your furry friend entertained and active!
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-white">
                  <Clock className="inline-block mr-2 h-5 w-5" />
                  <span>Ends in 3 days</span>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-white">
                  <Percent className="inline-block mr-2 h-5 w-5" />
                  <span>Save 50%</span>
                </div>
              </div>
              <Link 
                to="/category/toys" 
                className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors"
              >
                <Tag className="mr-2 h-5 w-5" />
                Shop Dog Toys
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1546975490-e8b92a360b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Dog with toys" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Deal Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealProducts.map((deal) => (
            <div 
              key={deal.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={deal.image} 
                  alt={deal.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg font-bold">
                  {deal.discountPercentage}% OFF
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center text-white">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      {calculateDaysRemaining(deal.endDate) > 0 
                        ? `${calculateDaysRemaining(deal.endDate)} days left` 
                        : 'Last day!'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{deal.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{deal.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-emerald-600">KSh {deal.discountedPrice.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">KSh {deal.originalPrice.toLocaleString()}</span>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                    Save KSh {(deal.originalPrice - deal.discountedPrice).toLocaleString()}
                  </span>
                </div>
                
                <button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md flex items-center justify-center transition-colors"
                  onClick={() => handleAddToCart(deal)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 bg-emerald-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-emerald-800 mb-2">Get Exclusive Deals</h2>
          <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about flash sales, special offers, and limited-time deals.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;