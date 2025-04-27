import React from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/categories';
import { ArrowRight, Tag } from 'lucide-react';

const PopularCategories: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our most popular product categories and find exactly what your pet needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h2 className="text-white text-xl font-bold p-4">{category.name}</h2>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                <Link 
                  to={`/category/${category.id}`}
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors text-sm"
                >
                  View Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-emerald-100 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-2">Find the Perfect Products</h2>
              <p className="text-emerald-700">
                Our carefully curated categories make it easy to find exactly what your pet needs.
                From essential nutrition to fun toys and accessories, we've got everything covered.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link 
                to="/shop" 
                className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                <Tag className="mr-2 h-5 w-5" />
                Shop All Pets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;