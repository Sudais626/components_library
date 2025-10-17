import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '' 
}) => {
  const { theme } = useTheme();
  
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: theme === 'dark' 
      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white',
    secondary: theme === 'dark'
      ? 'bg-gray-700 hover:bg-gray-600 text-gray-100'
      : 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: theme === 'dark'
      ? 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
      : 'border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
