import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Trash2, Edit, Search, X, Shield, AlertTriangle } from 'lucide-react';

const AdminPage: React.FC = () => {
  const { getAllUsers, user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Check if current user is admin (for demo purposes, we'll consider the test user as admin)
  const isAdmin = user?.email === 'test@example.com';
  
  if (!isAdmin) {
    return (
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Access Denied</h1>
            <p className="text-lg text-gray-600 mb-6">
              You don't have permission to access this page. This area is restricted to administrators only.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-emerald-600 text-white px-6 py-2 rounded-md font-medium hover:bg-emerald-700 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  const allUsers = getAllUsers();
  
  // Filter users based on search term
  const filteredUsers = allUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-emerald-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">User Management</h2>
              
              <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                <User className="h-6 w-6 text-emerald-600" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 text-gray-400 mr-2" />
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{user.id}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{user.phone || 'Not provided'}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-emerald-600 hover:text-emerald-900 mr-3">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                          No users found matching your search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 text-sm text-gray-500">
                Total users: {allUsers.length}
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <h3 className="text-lg font-semibold text-emerald-800 mb-2">Admin Notes</h3>
            <p className="text-emerald-700 mb-4">
              This is a demo admin page. In a real application, you would have more functionality:
            </p>
            <ul className="list-disc pl-5 text-emerald-700 space-y-1">
              <li>User management (edit, delete, suspend accounts)</li>
              <li>Product management (add, edit, remove products)</li>
              <li>Order management and fulfillment</li>
              <li>Analytics and reporting</li>
              <li>Content management for the website</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;