import React from 'react';
import { Scissors, Heart, Truck, Award, Calendar, Sparkles, ShieldCheck, Leaf } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
}

const services: Service[] = [
  {
    id: "grooming",
    title: "Professional Pet Grooming",
    description: "Our certified groomers provide bathing, haircuts, nail trimming, ear cleaning, and more for dogs and cats of all breeds and sizes.",
    icon: <Scissors className="h-8 w-8 text-emerald-600" />,
    price: "From KSh 1,500"
  },
  {
    id: "vet-consultation",
    title: "Veterinary Consultation",
    description: "Regular check-ups, vaccinations, and health advice from our experienced veterinarians to keep your pets in optimal health.",
    icon: <Heart className="h-8 w-8 text-emerald-600" />,
    price: "From KSh 2,000"
  },
  {
    id: "delivery",
    title: "Same-Day Delivery",
    description: "Get pet essentials delivered to your doorstep within hours in Nairobi and surrounding areas. Free delivery on orders over KSh 5,000.",
    icon: <Truck className="h-8 w-8 text-emerald-600" />,
    price: "From KSh 250"
  },
  {
    id: "training",
    title: "Pet Training Classes",
    description: "Group and private training sessions for dogs of all ages. From basic obedience to advanced tricks and behavior correction.",
    icon: <Award className="h-8 w-8 text-emerald-600" />,
    price: "From KSh 3,500"
  },
  {
    id: "boarding",
    title: "Pet Boarding & Daycare",
    description: "Safe, comfortable accommodation for your pets while you're away. Daily exercise, feeding, and plenty of attention from our caring staff.",
    icon: <Calendar className="h-8 w-8 text-emerald-600" />,
    price: "From KSh 1,200/day"
  },
  {
    id: "spa",
    title: "Pet Spa Treatments",
    description: "Luxury spa treatments including aromatherapy baths, massage, and special skin treatments for pampered pets.",
    icon: <Sparkles className="h-8 w-8 text-emerald-600" />,
    price: "From KSh 2,500"
  },
  {
    id: "insurance",
    title: "Pet Insurance Advice",
    description: "Consultation on the best pet insurance options available in Kenya to protect your pet and your wallet from unexpected veterinary costs.",
    icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
    price: "Free Consultation"
  },
  {
    id: "nutrition",
    title: "Nutrition Consultation",
    description: "Personalized dietary recommendations from our pet nutrition experts to address specific health concerns or optimize your pet's wellbeing.",
    icon: <Leaf className="h-8 w-8 text-emerald-600" />,
    price: "From KSh 1,800"
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            PetPalace Kenya offers a comprehensive range of services to keep your pets healthy, happy, and looking their best.
          </p>
        </div>
        
        {/* Featured Service */}
        <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Pet grooming service" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                FEATURED SERVICE
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Mobile Grooming Service</h2>
              <p className="text-gray-600 mb-6">
                Our professional groomers come to your home with a fully-equipped mobile grooming van. 
                Enjoy the convenience of having your pet groomed in familiar surroundings, 
                reducing stress and saving you time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Available throughout Nairobi and surrounding counties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Full grooming services including bath, haircut, nail trimming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Experienced groomers specialized in all breeds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Premium, pet-friendly products used</span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-emerald-600">From KSh 2,500</span>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                {service.price && (
                  <span className="text-emerald-600 font-semibold">{service.price}</span>
                )}
                <button className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Service Packages */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Service Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Basic Care Package</h3>
                <p className="text-gray-600">Essential services for your pet's wellbeing</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-800">KSh 5,999</span>
                  <span className="text-gray-500">/year</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>4 basic grooming sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>2 veterinary check-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>10% discount on all products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Free delivery within Nairobi</span>
                  </li>
                </ul>
                <button className="w-full mt-6 bg-emerald-600 text-white py-2 rounded-md font-medium hover:bg-emerald-700 transition-colors">
                  Select Package
                </button>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="bg-white rounded-lg overflow-hidden shadow-xl border-2 border-emerald-500 transform scale-105">
              <div className="bg-emerald-500 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Care Package</h3>
                <p className="text-gray-600">Comprehensive care for pampered pets</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-800">KSh 9,999</span>
                  <span className="text-gray-500">/year</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>6 full grooming sessions with spa treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>4 veterinary check-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>1 training session per month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>15% discount on all products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Priority booking for all services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Free delivery nationwide</span>
                  </li>
                </ul>
                <button className="w-full mt-6 bg-emerald-600 text-white py-2 rounded-md font-medium hover:bg-emerald-700 transition-colors">
                  Select Package
                </button>
              </div>
            </div>
            
            {/* Luxury Package */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Care Package</h3>
                <p className="text-gray-600">The ultimate in pet pampering</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-800">KSh 15,999</span>
                  <span className="text-gray-500">/year</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Monthly full grooming with premium spa treatments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Quarterly comprehensive health check-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Weekly training or exercise sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>20% discount on all products and services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>5 days of premium boarding included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>24/7 emergency vet consultation</span>
                  </li>
                </ul>
                <button className="w-full mt-6 bg-emerald-600 text-white py-2 rounded-md font-medium hover:bg-emerald-700 transition-colors">
                  Select Package
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking CTA */}
        <div className="mt-16 bg-gray-800 text-white rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Book a Service?</h2>
              <p className="text-gray-300 mb-6">
                Our team of pet care professionals is ready to provide the best care for your beloved companions. 
                Book an appointment today or call us to discuss your pet's specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                  Book an Appointment
                </button>
                <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors">
                  Call Us: +254 712 345 678
                </button>
              </div>
            </div>
            <div className="md:w-1/3 bg-emerald-600 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Service Hours</h3>
                <ul className="space-y-1 text-white">
                  <li>Monday - Friday: 8am - 7pm</li>
                  <li>Saturday: 9am - 5pm</li>
                  <li>Sunday: 10am - 3pm</li>
                  <li className="pt-2 font-semibold">Emergency services available 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;