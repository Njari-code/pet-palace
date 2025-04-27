import React, { useState } from 'react';
import { Heart, Phone, Mail, MapPin, ArrowRight, X, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

interface AdoptablePet {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: string;
  gender: string;
  image: string;
  description: string;
  location: string;
  personality: string[];
  goodWith: string[];
  health: string[];
  requirements: string[];
  story: string;
}

const adoptablePets: AdoptablePet[] = [
  {
    id: "pet1",
    name: "Luna",
    type: "Dog",
    breed: "German Shepherd Mix",
    age: "2 years",
    gender: "Female",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Luna is a friendly and energetic German Shepherd mix who loves to play and go for long walks. She's great with children and other dogs.",
    location: "Nairobi",
    personality: [
      "Energetic and playful",
      "Intelligent",
      "Loyal",
      "Good with commands"
    ],
    goodWith: [
      "Children",
      "Other dogs",
      "Active families"
    ],
    health: [
      "Vaccinated",
      "Spayed",
      "Microchipped",
      "Regular vet check-ups"
    ],
    requirements: [
      "Secure fenced yard",
      "Active lifestyle",
      "Time for training",
      "Regular exercise"
    ],
    story: "Luna was found as a stray wandering the streets of Nairobi. Despite her rough start, she has blossomed into a loving and loyal companion. She's incredibly smart and has already mastered basic commands. Luna loves nothing more than a good game of fetch and going for long walks. She's looking for an active family who can give her plenty of exercise and continue her training."
  },
  {
    id: "pet2",
    name: "Oliver",
    type: "Cat",
    breed: "Domestic Shorthair",
    age: "1 year",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Oliver is a playful and affectionate cat who loves attention. He's litter trained and gets along well with other cats.",
    location: "Mombasa",
    personality: [
      "Playful",
      "Affectionate",
      "Social",
      "Curious"
    ],
    goodWith: [
      "Other cats",
      "Gentle children",
      "Quiet homes"
    ],
    health: [
      "Vaccinated",
      "Neutered",
      "Dewormed",
      "FIV/FeLV negative"
    ],
    requirements: [
      "Indoor only",
      "Regular playtime",
      "Cat tree or climbing spaces",
      "Patient family"
    ],
    story: "Oliver came to us when his previous family had to relocate overseas. He's a charming young cat with a big personality. Oliver loves to play with toy mice and chase laser pointers. He's also quite the lap cat and will curl up with you while you read or watch TV. He's looking for a family who will give him lots of attention and playtime."
  },
  {
    id: "pet3",
    name: "Max",
    type: "Dog",
    breed: "Labrador Retriever",
    age: "3 years",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1605897472359-85e4b94c6a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Max is a gentle giant who loves swimming and playing fetch. He's well-trained and great with families.",
    location: "Kisumu",
    personality: [
      "Gentle",
      "Friendly",
      "Well-trained",
      "Water-loving"
    ],
    goodWith: [
      "Children of all ages",
      "Other dogs",
      "Cats"
    ],
    health: [
      "Vaccinated",
      "Neutered",
      "Hip score checked",
      "Regular check-ups"
    ],
    requirements: [
      "Access to swimming",
      "Regular exercise",
      "Family time",
      "Secure yard"
    ],
    story: "Max is a classic Labrador who loves nothing more than a good swim and a game of fetch. He was surrendered when his elderly owner could no longer care for him, but he hasn't lost his loving nature. Max is great with kids and other pets, making him the perfect family dog. He's looking for an active family who can give him plenty of exercise and maybe even take him swimming!"
  },
  {
    id: "pet4",
    name: "Bella",
    type: "Cat",
    breed: "Persian Mix",
    age: "4 years",
    gender: "Female",
    image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Bella is a calm and elegant cat who enjoys lounging in sunny spots. She's perfect for a quiet home.",
    location: "Nakuru",
    personality: [
      "Calm",
      "Gentle",
      "Independent",
      "Quiet"
    ],
    goodWith: [
      "Seniors",
      "Quiet homes",
      "Gentle handlers"
    ],
    health: [
      "Vaccinated",
      "Spayed",
      "Dental work done",
      "Regular grooming"
    ],
    requirements: [
      "Daily grooming",
      "Indoor only",
      "Quiet environment",
      "Regular vet care"
    ],
    story: "Bella is a beautiful Persian mix who came to us from a hoarding situation. After lots of care and grooming, she's blossomed into a gorgeous and gentle cat. She loves to find sunny spots to nap in and enjoys gentle pets and brushing sessions. Bella would do best in a quiet home where she can be pampered and loved."
  },
  {
    id: "pet5",
    name: "Rocky",
    type: "Dog",
    breed: "Mixed Breed",
    age: "6 months",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Rocky is a playful puppy who's eager to learn. He's already started basic training and is great with kids.",
    location: "Eldoret",
    personality: [
      "Playful",
      "Smart",
      "Energetic",
      "Loving"
    ],
    goodWith: [
      "Children",
      "Other dogs",
      "Active families"
    ],
    health: [
      "Vaccinated",
      "Dewormed",
      "Microchipped",
      "Puppy check-ups"
    ],
    requirements: [
      "Puppy training",
      "Secure yard",
      "Time for exercise",
      "Patient family"
    ],
    story: "Rocky was found with his siblings under a building site. He's grown into a confident and playful puppy who loves to learn new things. He's already mastering basic commands and is very food motivated, making training a joy. Rocky needs a family who can continue his training and give him plenty of exercise and playtime."
  },
  {
    id: "pet6",
    name: "Milo",
    type: "Cat",
    breed: "Siamese Mix",
    age: "2 years",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Milo is a vocal and affectionate cat who loves to be the center of attention. He's very social and playful.",
    location: "Nairobi",
    personality: [
      "Vocal",
      "Affectionate",
      "Social",
      "Playful"
    ],
    goodWith: [
      "Families",
      "Other cats",
      "Attention givers"
    ],
    health: [
      "Vaccinated",
      "Neutered",
      "Dental cleaning",
      "Regular check-ups"
    ],
    requirements: [
      "Indoor only",
      "Interactive toys",
      "Lots of attention",
      "Cat tree"
    ],
    story: "Milo is a classic Siamese mix with a big personality to match. He loves to 'talk' to his humans and will follow you around the house telling you about his day. He's incredibly social and would do well in a home where someone is around often to give him the attention he craves. Milo enjoys playing with toys and is always up for a good game of chase."
  }
];

interface PetModalProps {
  pet: AdoptablePet;
  isOpen: boolean;
  onClose: () => void;
}

const PetModal: React.FC<PetModalProps> = ({ pet, isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  if (!isOpen) return null;

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const nextStep = () => {
    setStep((prev) => (prev % totalSteps) + 1);
  };

  const getStepStatus = (stepNumber: number) => {
    if (stepNumber === step) return 'current';
    if (stepNumber < step) return 'complete';
    return 'upcoming';
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
      onKeyDown={handleKeyPress}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 
                    id="modal-title" 
                    className="text-2xl font-bold text-gray-900"
                  >
                    Meet {pet.name}
                  </h3>
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      {pet.type}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {pet.location}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-500">Age</p>
                        <p className="text-lg font-medium text-gray-900">{pet.age}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-500">Gender</p>
                        <p className="text-lg font-medium text-gray-900">{pet.gender}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-500">Breed</p>
                        <p className="text-lg font-medium text-gray-900">{pet.breed}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-500">Location</p>
                        <p className="text-lg font-medium text-gray-900">{pet.location}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">About {pet.name}</h4>
                      <p className="text-gray-600">{pet.story}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Personality</h4>
                        <div className="flex flex-wrap gap-2">
                          {pet.personality.map((trait, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Good With</h4>
                        <div className="flex flex-wrap gap-2">
                          {pet.goodWith.map((trait, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Health</h4>
                        <div className="flex flex-wrap gap-2">
                          {pet.health.map((item, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Requirements</h4>
                        <div className="flex flex-wrap gap-2">
                          {pet.requirements.map((req, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h4 
                    id="adoption-process-title" 
                    className="text-lg font-semibold text-gray-900 mb-4"
                  >
                    Adoption Process
                  </h4>
                  <div 
                    role="tablist"
                    aria-label="Adoption process steps"
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    {[
                      {
                        title: "Schedule a Visit",
                        description: `Book a time to meet ${pet.name} in person and learn more about their personality.`,
                        icon: Calendar,
                        stepNumber: 1
                      },
                      {
                        title: "Application Review",
                        description: "Complete our adoption application and home check process.",
                        icon: CheckCircle,
                        stepNumber: 2
                      },
                      {
                        title: "Welcome Home",
                        description: "Once approved, complete the adoption and welcome your new family member home!",
                        icon: Heart,
                        stepNumber: 3
                      }
                    ].map((stepInfo) => (
                      <div
                        key={stepInfo.stepNumber}
                        role="tab"
                        aria-selected={step === stepInfo.stepNumber}
                        aria-controls={`step-content-${stepInfo.stepNumber}`}
                        tabIndex={0}
                        className={`p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                          step === stepInfo.stepNumber 
                            ? 'bg-emerald-100 border-2 border-emerald-500' 
                            : 'bg-gray-50'
                        }`}
                        onClick={() => setStep(stepInfo.stepNumber)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setStep(stepInfo.stepNumber);
                          }
                        }}
                      >
                        <div className="flex items-center mb-2">
                          <stepInfo.icon className="h-5 w-5 text-emerald-600 mr-2" />
                          <h5 className="font-medium">{stepInfo.title}</h5>
                        </div>
                        <p 
                          className="text-sm text-gray-600"
                          id={`step-content-${stepInfo.stepNumber}`}
                        >
                          {stepInfo.description}
                        </p>
                        <div className="sr-only">
                          {getStepStatus(stepInfo.stepNumber) === 'current' && '(Current step)'}
                          {getStepStatus(stepInfo.stepNumber) === 'complete' && '(Completed)'}
                          {getStepStatus(stepInfo.stepNumber) === 'upcoming' && '(Not yet started)'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={nextStep}
              aria-label={`Proceed to ${step === totalSteps ? 'first' : 'next'} step`}
            >
              {step === totalSteps ? 'Start Process Again' : 'Next Step'}
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
              aria-label="Close adoption process"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Adopt: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState<AdoptablePet | null>(null);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-emerald-600 rounded-xl overflow-hidden shadow-xl mb-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Give a Pet a Forever Home
              </h1>
              <p className="text-emerald-100 mb-6">
                Every pet deserves a loving home. Browse our available pets and find your perfect companion. 
                All our pets are vaccinated, spayed/neutered, and ready for adoption.
              </p>
              <div className="flex items-center space-x-4 text-emerald-100">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Vaccinated</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Vet Checked</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Microchipped</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Happy pets" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Adoption Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Adoption Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Browse</h3>
              <p className="text-gray-600">Look through our available pets and find your perfect match</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Meet</h3>
              <p className="text-gray-600">Schedule a visit to meet your potential new family member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Apply</h3>
              <p className="text-gray-600">Complete the adoption application and home check process</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Adopt</h3>
              <p className="text-gray-600">Welcome your new pet into their forever home</p>
            </div>
          </div>
        </div>

        {/* Available Pets */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adoptablePets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={pet.image} 
                    alt={pet.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 rounded-bl-lg">
                    {pet.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
                    <span className="text-sm text-gray-500">{pet.location}</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-2">
                      <span className="font-medium">Breed:</span> {pet.breed}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      <span className="font-medium">Age:</span> {pet.age}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Gender:</span> {pet.gender}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{pet.description}</p>
                  <button 
                    onClick={() => setSelectedPet(pet)}
                    className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center"
                  >
                    Meet {pet.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                Have questions about adoption? Our team is here to help you find your perfect companion.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>+254 712 345 678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>adopt@petpalacekenya.co.ke</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Ngong Road, Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Adoption Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  Visits are by appointment only. Please call or email to schedule a meeting with our adoptable pets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pet Modal */}
        {selectedPet && (
          <PetModal
            pet={selectedPet}
            isOpen={!!selectedPet}
            onClose={() => setSelectedPet(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Adopt;