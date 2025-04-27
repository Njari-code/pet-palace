import React from 'react';
import { Loader } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium',
  fullScreen = false 
}) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12'
  };

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gray-50/80 flex items-center justify-center z-50">
        <Loader className={`${sizeClasses[size]} text-emerald-600 animate-spin`} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Loader className={`${sizeClasses[size]} text-emerald-600 animate-spin`} />
    </div>
  );
};

export default LoadingSpinner;