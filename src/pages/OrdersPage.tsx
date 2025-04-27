import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useOrders, Order } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Package, Clock, CheckCircle, AlertTriangle, ChevronDown, ChevronUp, Calendar, Truck, MapPin } from 'lucide-react';

const OrdersPage: React.FC = () => {
  const { user } = useAuth();
  const { getOrdersByUser } = useOrders();
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  
  const userOrders = user ? getOrdersByUser(user.id) : [];
  
  const toggleOrderExpand = (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };
  
  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'processing':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-emerald-500" />;
      case 'cancelled':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-emerald-100 text-emerald-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <ShoppingBag className="h-8 w-8 text-emerald-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
          </div>
          
          {userOrders.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex flex-col items-center">
                <Package className="h-16 w-16 text-gray-300 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">No orders yet</h2>
                <p className="text-gray-600 mb-6">
                  You haven't placed any orders yet. Start shopping to place your first order.
                </p>
                <Link 
                  to="/shop"
                  className="bg-emerald-600 text-white px-6 py-2 rounded-md font-medium hover:bg-emerald-700 transition-colors"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {userOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleOrderExpand(order.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center mb-4 md:mb-0">
                        {getStatusIcon(order.status)}
                        <div className="ml-3">
                          <p className="text-sm text-gray-500">Order #{order.id.split('-')[1]}</p>
                          <p className="font-semibold text-gray-900">
                            KSh {order.totalAmount.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between md:justify-end w-full md:w-auto">
                        <div className="flex items-center mr-6">
                          <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">
                            {formatDate(order.orderDate)}
                          </span>
                        </div>
                        
                        <div className="flex items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                          {expandedOrder === order.id ? (
                            <ChevronUp className="h-5 w-5 text-gray-400 ml-2" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 ml-2" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {expandedOrder === order.id && (
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Order Details</h3>
                      
                      <div className="mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Shipping Address</p>
                            <p className="text-sm font-medium text-gray-900 flex items-start">
                              <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-0.5 flex-shrink-0" />
                              {order.shippingAddress || 'No address provided'}
                            </p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Tracking Number</p>
                            <p className="text-sm font-medium text-gray-900">
                              {order.trackingNumber || 'Not available yet'}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="font-medium text-gray-900 mb-3">Items</h4>
                      <ul className="divide-y divide-gray-200">
                        {order.items.map((item) => (
                          <li key={item.product.id} className="py-3 flex">
                            <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="ml-4 flex-1">
                              <div className="flex justify-between">
                                <h5 className="text-sm font-medium text-gray-900">{item.product.name}</h5>
                                <p className="text-sm font-medium text-gray-900">KSh {(item.price * item.quantity).toLocaleString()}</p>
                              </div>
                              <div className="flex justify-between mt-1">
                                <p className="text-sm text-gray-500">{item.product.category}</p>
                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 border-t border-gray-200 pt-4">
                        <div className="flex justify-between text-sm">
                          <p className="text-gray-500">Subtotal</p>
                          <p className="font-medium text-gray-900">KSh {order.totalAmount.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between text-sm mt-2">
                          <p className="text-gray-500">Shipping</p>
                          <p className="font-medium text-gray-900">Free</p>
                        </div>
                        <div className="flex justify-between text-base font-medium mt-4">
                          <p className="text-gray-900">Total</p>
                          <p className="text-gray-900">KSh {order.totalAmount.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;