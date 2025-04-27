import React from 'react';
import { Link } from 'react-router-dom';
import { petCategories } from '../data/pets';
import { ArrowRight } from 'lucide-react';

const ShopByPet: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Shop by Pet</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect products for your furry, feathery, or scaly friends. We carry premium supplies for all types of pets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {petCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link 
                  to={`/shop/${category.id}`}
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
                >
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByPet;