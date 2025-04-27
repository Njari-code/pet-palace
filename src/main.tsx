import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './context/CartContext.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { WishlistProvider } from './context/WishlistContext.tsx';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext.tsx';
import { OrderProvider } from './context/OrderContext.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <RecentlyViewedProvider>
              <OrderProvider>
                <App />
              </OrderProvider>
            </RecentlyViewedProvider>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);