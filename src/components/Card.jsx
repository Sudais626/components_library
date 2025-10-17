import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Card = ({ title, children, className = '' }) => {
  const { theme } = useTheme();
  
  const cardStyles = theme === 'dark'
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';
    
  const gradientOverlay = theme === 'dark'
    ? 'from-purple-900/20 to-pink-900/20'
    : 'from-blue-50 to-purple-50';
  
  return (
    <div className={`relative rounded-xl border backdrop-blur-sm ${cardStyles} ${className} overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientOverlay} opacity-50`}></div>
      <div className="relative p-6">
        {title && (
          <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            {title}
          </h3>
        )}
        <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
