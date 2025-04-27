import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Settings, Shield, Bell, Lock, LogOut, Save, Loader } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const { user, updateProfile, logout } = useAuth();
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false);
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [promotions, setPromotions] = useState(false);
  const [isSubmittingNotifications, setIsSubmittingNotifications] = useState(false);
  const [notificationSuccess, setNotificationSuccess] = useState<string | null>(null);
  
  // Privacy settings
  const [shareData, setShareData] = useState(false);
  const [isSubmittingPrivacy, setIsSubmittingPrivacy] = useState(false);
  const [privacySuccess, setPrivacySuccess] = useState<string | null>(null);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(null);
    setIsSubmittingPassword(true);
    
    // Validate passwords
    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords don't match");
      setIsSubmittingPassword(false);
      return;
    }
    
    if (newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters");
      setIsSubmittingPassword(false);
      return;
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // This is a demo, so we'll just show success
    setPasswordSuccess("Password updated successfully");
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setIsSubmittingPassword(false);
  };
  
  const handleNotificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotificationSuccess(null);
    setIsSubmittingNotifications(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setNotificationSuccess("Notification preferences updated");
    setIsSubmittingNotifications(false);
  };
  
  const handlePrivacySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPrivacySuccess(null);
    setIsSubmittingPrivacy(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setPrivacySuccess("Privacy settings updated");
    setIsSubmittingPrivacy(false);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Settings className="h-8 w-8 text-emerald-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Account Settings</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="h-5 w-5 text-emerald-600 mr-2" />
                Security Settings
              </h2>
              
              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => setIsChangingPassword(!isChangingPassword)}
                  className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
                >
                  {isChangingPassword ? 'Cancel' : 'Change Password'}
                </button>
                
                {isChangingPassword && (
                  <form onSubmit={handlePasswordSubmit} className="mt-4">
                    {passwordError && (
                      <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                        {passwordError}
                      </div>
                    )}
                    
                    {passwordSuccess && (
                      <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
                        {passwordSuccess}
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input
                        id="current-password"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                        minLength={6}
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmittingPassword}
                      className="bg-emerald-600 text-white py-2 px-4 rounded-md font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-70 flex items-center"
                    >
                      {isSubmittingPassword ? (
                        <>
                          <Loader className="animate-spin h-4 w-4 mr-2" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Update Password
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Bell className="h-5 w-5 text-emerald-600 mr-2" />
                Notification Preferences
              </h2>
              
              <form onSubmit={handleNotificationSubmit}>
                {notificationSuccess && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
                    {notificationSuccess}
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="email-notifications"
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                      Email notifications
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="order-updates"
                      type="checkbox"
                      checked={orderUpdates}
                      onChange={(e) => setOrderUpdates(e.target.checked)}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="order-updates" className="ml-3 text-sm text-gray-700">
                      Order status updates
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="promotions"
                      type="checkbox"
                      checked={promotions}
                      onChange={(e) => setPromotions(e.target.checked)}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="promotions" className="ml-3 text-sm text-gray-700">
                      Promotions and deals
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmittingNotifications}
                  className="mt-6 bg-emerald-600 text-white py-2 px-4 rounded-md font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-70 flex items-center"
                >
                  {isSubmittingNotifications ? (
                    <>
                      <Loader className="animate-spin h-4 w-4 mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="h-5 w-5 text-emerald-600 mr-2" />
                Privacy Settings
              </h2>
              
              <form onSubmit={handlePrivacySubmit}>
                {privacySuccess && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
                    {privacySuccess}
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="share-data"
                      type="checkbox"
                      checked={shareData}
                      onChange={(e) => setShareData(e.target.checked)}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="share-data" className="ml-3 text-sm text-gray-700">
                      Share my shopping data to improve recommendations
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmittingPrivacy}
                  className="mt-6 bg-emerald-600 text-white py-2 px-4 rounded-md font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-70 flex items-center"
                >
                  {isSubmittingPrivacy ? (
                    <>
                      <Loader className="animate-spin h-4 w-4 mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Settings
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Actions</h2>
              
              <div className="space-y-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-600 hover:text-red-800"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign Out of Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;