import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../data/products';
import { useAuth } from './AuthContext';

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  shippingAddress?: string;
  trackingNumber?: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (items: OrderItem[], totalAmount: number) => Promise<Order>;
  getOrdersByUser: (userId: string) => Order[];
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

interface OrderProviderProps {
  children: ReactNode;
}

const ORDERS_STORAGE_KEY = 'petpalace_orders';

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { user } = useAuth();

  // Load orders from localStorage on initial render
  useEffect(() => {
    const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders));
      } catch (error) {
        console.error('Failed to parse orders from localStorage:', error);
        localStorage.removeItem(ORDERS_STORAGE_KEY);
      }
    }
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  const addOrder = async (items: OrderItem[], totalAmount: number): Promise<Order> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (!user) {
      throw new Error('User must be logged in to place an order');
    }

    const newOrder: Order = {
      id: `order-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      userId: user.id,
      items,
      totalAmount,
      status: 'processing',
      orderDate: new Date().toISOString(),
      shippingAddress: user.address,
    };

    setOrders(prevOrders => [...prevOrders, newOrder]);
    return newOrder;
  };

  const getOrdersByUser = (userId: string): Order[] => {
    return orders.filter(order => order.userId === userId);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <OrderContext.Provider value={{
      orders,
      addOrder,
      getOrdersByUser,
      updateOrderStatus
    }}>
      {children}
    </OrderContext.Provider>
  );
};