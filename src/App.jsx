import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import Modal from './components/Modal';

const AppContent = () => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const bgGradient = theme === 'dark'
    ? 'from-gray-900 via-purple-900/20 to-gray-900'
    : 'from-blue-50 via-purple-50 to-pink-50';
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient} transition-colors duration-500`}>
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        <Card title="Buttons" className="mb-8">
          <p className="mb-6">Interactive button components with multiple variants and sizes.</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </Card>
        

        <Card title="Cards" className="mb-8">
          <p className="mb-6">Beautiful card components with gradient overlays and smooth animations.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Feature Card">
              <p>A beautiful card component with gradient overlays and smooth animations.</p>
            </Card>
            <Card title="Analytics">
              <p className="mb-4">Track your metrics in real-time with our dashboard.</p>
              <Button variant="outline" size="sm">View Details</Button>
            </Card>
            <Card title="Settings">
              <p className="mb-4">Customize your experience with advanced options.</p>
              <Button variant="primary" size="sm">Configure</Button>
            </Card>
          </div>
        </Card>
        
        
        <Card title="Modal">
          <p className="mb-6">Elegant modal dialogs with backdrop blur and smooth animations.</p>
          <Button onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
          
          <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title="Beautiful Modal"
          >
            <p className="mb-4">
              This is a minimalistic modal component with smooth animations and backdrop blur effects.
            </p>
            <p className="mb-6">
              It automatically adapts to the current theme and provides an excellent user experience.
            </p>
            <div className="flex gap-3 justify-end">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </Modal>
        </Card>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
