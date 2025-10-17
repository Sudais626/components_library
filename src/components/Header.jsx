import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  const headerBg = theme === 'dark'
    ? 'bg-gray-800/80 border-gray-700'
    : 'bg-white/80 border-gray-200';
  
  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b ${headerBg} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className={`text-2xl font-bold bg-gradient-to-r ${
          theme === 'dark' 
            ? 'from-purple-400 to-pink-400' 
            : 'from-blue-600 to-purple-600'
        } bg-clip-text text-transparent`}>
          Component Library
        </h1>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;