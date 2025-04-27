import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { LogIn, Mail, User, Phone, MapPin, LogOut } from 'lucide-react';
import AuthModal from '../components/AuthModal';

const AccountPage: React.FC = () => {
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: ''
  });
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccessMessage(null);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real app, you would save to the backend here
    setSuccessMessage('Profile updated successfully!');
    setIsEditing(false);
    setIsSaving(false);
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <LogIn className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign In Required</h1>
          <p className="text-gray-600 mb-6">
            Please sign in to access your account settings and manage your profile.
          </p>
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            Sign In
          </button>

          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            initialMode="login"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 bg-emerald-600 text-white">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Account</h1>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-2 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>

            <div className="p-6">
              {successMessage && (
                <div className="mb-6 bg-green-100 text-green-700 p-4 rounded-md">
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    {isEditing ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSaving}
                          className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-50"
                        >
                          {isSaving ? 'Saving...' : 'Save Changes'}
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;