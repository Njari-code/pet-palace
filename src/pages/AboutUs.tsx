import React from 'react';
import { PawPrint, Users, Award, Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Dr. Wanjiku Kamau",
    role: "Founder & Head Veterinarian",
    bio: "Dr. Wanjiku founded PetPalace Kenya in 2018 with a vision to provide high-quality pet care products and services to Kenyan pet owners. With over 15 years of veterinary experience, she ensures all our products meet the highest standards.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "member-2",
    name: "James Odhiambo",
    role: "Operations Manager",
    bio: "James oversees the day-to-day operations of PetPalace, ensuring smooth logistics, inventory management, and customer satisfaction. His background in retail management has been instrumental in our growth across Kenya.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "member-3",
    name: "Amina Hassan",
    role: "Pet Nutrition Specialist",
    bio: "Amina is our expert in pet nutrition, providing personalized dietary recommendations for pets with various health needs. Her passion for animal welfare drives her to continuously research the latest in pet nutrition science.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "member-4",
    name: "Daniel Mwangi",
    role: "Head of Grooming Services",
    bio: "Daniel leads our professional grooming team with over a decade of experience working with all breeds of dogs and cats. His gentle approach and attention to detail have made our grooming services highly sought after.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-emerald-600 rounded-xl overflow-hidden shadow-xl mb-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
              <h1 className="text-4xl font-bold mb-4">Our Story</h1>
              <p className="mb-6 text-emerald-50">
                Founded in 2018, PetPalace Kenya began as a small pet shop in Nairobi with a mission to provide 
                high-quality products and expert care for pets across Kenya. What started as a passion project 
                by Dr. Wanjiku Kamau has grown into the country's leading pet care destination.
              </p>
              <div className="flex items-center">
                <PawPrint className="h-10 w-10 text-emerald-300 mr-4" />
                <div>
                  <h2 className="text-xl font-bold">PetPalace Kenya</h2>
                  <p className="text-emerald-100">Your one-stop shop for all pet needs</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Happy dogs and owner" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At PetPalace Kenya, we're committed to enhancing the lives of pets and their owners through quality products, 
              expert advice, and compassionate service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="bg-emerald-100 rounded-full p-4 inline-flex mb-6">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                We treat every pet as if they were our own, providing products and services that prioritize their health, 
                comfort, and happiness above all else.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="bg-emerald-100 rounded-full p-4 inline-flex mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality & Excellence</h3>
              <p className="text-gray-600">
                We carefully select every product we offer, ensuring they meet the highest standards of quality, 
                safety, and effectiveness for your beloved companions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="bg-emerald-100 rounded-full p-4 inline-flex mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We're proud to be a Kenyan business serving Kenyan pet owners. We actively support local animal welfare 
                initiatives and strive to make pet care accessible to all.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Journey */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
            
            {/* Timeline Items */}
            <div className="relative z-10">
              {/* 2018 */}
              <div className="mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-emerald-600 text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center">
                    2018
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">The Beginning</h3>
                  <p className="text-gray-600">
                    PetPalace Kenya opened its first store in Ngong Road, Nairobi. Starting with a small selection of 
                    pet food and accessories, we quickly gained a reputation for quality and expert advice.
                  </p>
                </div>
              </div>
              
              {/* 2020 */}
              <div className="mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-emerald-600 text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center">
                    2020
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Expansion & Online Store</h3>
                  <p className="text-gray-600">
                    We launched our e-commerce platform to serve pet owners across Kenya. Despite the challenges of the 
                    pandemic, we expanded our product range and introduced home delivery services.
                  </p>
                </div>
              </div>
              
              {/* 2022 */}
              <div className="mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-emerald-600 text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center">
                    2022
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Service Expansion</h3>
                  <p className="text-gray-600">
                    We introduced our comprehensive pet services including grooming, veterinary consultations, and 
                    training classes. We also opened our second physical location in Westlands, Nairobi.
                  </p>
                </div>
              </div>
              
              {/* 2025 */}
              <div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-emerald-600 text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center">
                    2025
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Today & Beyond</h3>
                  <p className="text-gray-600">
                    Today, PetPalace Kenya operates 5 stores across the country and serves thousands of pet owners 
                    through our online platform. We continue to expand our services and product offerings while 
                    maintaining our commitment to quality and compassionate care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Visit Us */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Main Store & Headquarters</h3>
                    <p className="text-gray-600">Ngong Road, Opposite Junction Mall, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Westlands Branch</h3>
                    <p className="text-gray-600">Sarit Centre, 2nd Floor, Westlands, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Contact Numbers</h3>
                    <p className="text-gray-600">+254 712 345 678 / +254 733 987 654</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">support@petpalacekenya.co.ke</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Store Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9am - 7pm<br />Sunday: 10am - 5pm</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                Get Directions
              </button>
            </div>
            
            <div className="lg:w-1/2 h-96 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="PetPalace Kenya store" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;