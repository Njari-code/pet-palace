import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, ShoppingBag, Award, Truck, Heart, ArrowRight, LogIn, UserPlus } from 'lucide-react';
import { petCategories } from '../data/pets';
import { products } from '../data/products';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  const { isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-emerald-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Happy pets" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your One-Stop Shop for All Pet Needs in Kenya
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              Quality products, expert advice, and exceptional service for your beloved companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {isAuthenticated ? (
                <Link 
                  to="/shop"
                  className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Start Shopping
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => openAuthModal('login')}
                    className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
                  >
                    <LogIn className="mr-2 h-5 w-5" />
                    Login
                  </button>
                  <button
                    onClick={() => openAuthModal('signup')}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-500 transition-colors inline-flex items-center justify-center"
                  >
                    <UserPlus className="mr-2 h-5 w-5" />
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose PetPalace Kenya</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best products and services for your pets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-emerald-100 rounded-full p-4 inline-flex mb-4">
                <ShoppingBag className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Products</h3>
              <p className="text-gray-600">
                Carefully selected, high-quality products from trusted brands for all your pet needs.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-emerald-100 rounded-full p-4 inline-flex mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Advice</h3>
              <p className="text-gray-600">
                Our team of pet care specialists provides personalized recommendations and guidance.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-emerald-100 rounded-full p-4 inline-flex mb-4">
                <Truck className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Convenient delivery options throughout Kenya, with same-day delivery in Nairobi.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-emerald-100 rounded-full p-4 inline-flex mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pet-Focused Services</h3>
              <p className="text-gray-600">
                From grooming to veterinary consultations, we offer comprehensive pet care services.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shop by Pet Preview */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop by Pet</h2>
              <p className="text-lg text-gray-600">
                Find the perfect products for your furry, feathery, or scaly friends.
              </p>
            </div>
            <Link 
              to="/shop"
              className="mt-4 md:mt-0 inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
            >
              View All Categories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {petCategories.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative"
              >
                <div className="h-32 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800">{category.name}</h3>
                </div>
                <Link 
                  to={`/shop/${category.id}`}
                  className="absolute inset-0"
                  aria-label={`Shop for ${category.name}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Products Preview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
              <p className="text-lg text-gray-600">
                Our most popular and highly recommended pet products.
              </p>
            </div>
            <Link 
              to="/categories"
              className="mt-4 md:mt-0 inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
            >
              Browse All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-emerald-600">KSh {product.price.toLocaleString()}</span>
                    <Link 
                      to={`/shop/${product.category}`}
                      className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Services Overview */}
      <div className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              We offer a comprehensive range of services to keep your pets healthy, happy, and looking their best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-800 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Professional Grooming</h3>
              <p className="text-emerald-100 mb-4">
                Our certified groomers provide bathing, haircuts, nail trimming, ear cleaning, and more for dogs and cats of all breeds and sizes.
              </p>
              <Link 
                to="/services"
                className="inline-flex items-center text-emerald-300 font-medium hover:text-emerald-200 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-emerald-800 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Veterinary Consultation</h3>
              <p className="text-emerald-100 mb-4">
                Regular check-ups, vaccinations, and health advice from our experienced veterinarians to keep your pets in optimal health.
              </p>
              <Link 
                to="/services"
                className="inline-flex items-center text-emerald-300 font-medium hover:text-emerald-200 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-emerald-800 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Pet Training Classes</h3>
              <p className="text-emerald-100 mb-4">
                Group and private training sessions for dogs of all ages. From basic obedience to advanced tricks and behavior correction.
              </p>
              <Link 
                to="/services"
                className="inline-flex items-center text-emerald-300 font-medium hover:text-emerald-200 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/services"
              className="inline-flex items-center bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what pet owners across Kenya have to say about PetPalace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Sarah Kimani</h3>
                  <p className="text-sm text-gray-500">Dog Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I've been shopping at PetPalace for over a year now, and I'm consistently impressed by their product quality and customer service. My dog loves their premium food, and the grooming services are excellent!"
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">David Ochieng</h3>
                  <p className="text-sm text-gray-500">Cat & Fish Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The variety of products available at PetPalace is impressive. I have both cats and an aquarium, and I can find everything I need in one place. Their same-day delivery in Nairobi has been a lifesaver many times!"
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Amina Hassan</h3>
                  <p className="text-sm text-gray-500">Bird Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The staff at PetPalace are knowledgeable and always willing to help. They provided excellent advice when I was setting up my bird's habitat, and the products they recommended have been perfect."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-emerald-600 rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Start Shopping Today</h2>
                <p className="text-emerald-100 mb-6">
                  Browse our wide selection of premium pet products and find everything your pet needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/shop"
                    className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Start Shopping
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Happy pet owner" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
};

export default Home;