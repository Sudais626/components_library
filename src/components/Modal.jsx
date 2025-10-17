import React from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Modal = ({ isOpen, onClose, title, children }) => {
  const { theme } = useTheme();
  
  if (!isOpen) return null;
  
  const modalBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className={`relative ${modalBg} rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 animate-in zoom-in-95`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className={`text-2xl font-bold ${textColor}`}>{title}</h2>
          <button
            onClick={onClose}
            className={`p-1 rounded-lg transition-colors ${
              theme === 'dark' 
                ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <X size={24} />
          </button>
        </div>
        <div className={`p-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;