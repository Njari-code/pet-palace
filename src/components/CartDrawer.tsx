import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Trash2, Plus, Minus, CheckCircle, Loader } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount, clearCart } = useCart();
  const { addOrder } = useOrders();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      onClose();
      navigate('/');
      return;
    }

    setIsCheckingOut(true);
    setOrderError(null);

    try {
      // Convert cart items to order items
      const orderItems = cartItems.map(item => ({
        product: item.product,
        quantity: item.quantity,
        price: item.product.price
      }));

      // Create the order
      await addOrder(orderItems, getCartTotal());
      
      // Clear the cart
      clearCart();
      
      // Show success message
      setOrderComplete(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setOrderComplete(false);
        onClose();
        navigate('/orders');
      }, 3000);
    } catch (error) {
      setOrderError(error instanceof Error ? error.message : 'An error occurred during checkout');
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900 flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5 text-emerald-600" />
                  Your Cart
                  <span className="ml-2 text-emerald-600 text-sm font-semibold">
                    ({getCartCount()} items)
                  </span>
                </h2>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={onClose}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {orderComplete ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto h-16 w-16 text-emerald-500" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Order Placed Successfully!</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Your order has been placed and is being processed. You will be redirected to your orders page shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mt-8">
                    {cartItems.length === 0 ? (
                      <div className="text-center py-12">
                        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Start shopping to add items to your cart
                        </p>
                        <div className="mt-6">
                          <Link
                            to="/shop"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                            onClick={onClose}
                          >
                            Continue Shopping
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {cartItems.map((item) => (
                            <li key={item.product.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={item.product.image}
                                  alt={item.product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3 className="text-sm">{item.product.name}</h3>
                                    <p className="ml-4">KSh {(item.product.price * item.quantity).toLocaleString()}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                                    {item.product.category}
                                  </p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <div className="flex items-center border rounded-md">
                                    <button
                                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                      className="p-1 text-gray-500 hover:text-emerald-600"
                                    >
                                      <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="px-2 text-gray-900">{item.quantity}</span>
                                    <button
                                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                      className="p-1 text-gray-500 hover:text-emerald-600"
                                    >
                                      <Plus className="h-4 w-4" />
                                    </button>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => removeFromCart(item.product.id)}
                                    className="font-medium text-red-600 hover:text-red-500"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {cartItems.length > 0 && !orderComplete && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                {orderError && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                    {orderError}
                  </div>
                )}
                
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>KSh {getCartTotal().toLocaleString()}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70"
                >
                  {isCheckingOut ? (
                    <>
                      <Loader className="animate-spin h-5 w-5 mr-2" />
                      Processing...
                    </>
                  ) : (
                    'Checkout'
                  )}
                </button>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{' '}
                    <button
                      type="button"
                      className="text-emerald-600 font-medium hover:text-emerald-500"
                      onClick={onClose}
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;