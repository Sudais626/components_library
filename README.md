Installation

Clone the repository

bashgit clone https://github.com/yourusername/component-library.git
cd component-library

Install dependencies

bashnpm install

Run the development server

bashnpm run dev

Build for production

bashnpm run build

📖 Usage
Button Example
jsximport Button from './components/Button';

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
Card Example
jsximport Card from './components/Card';

<Card title="My Card">
  <p>Card content goes here</p>
  <Button variant="outline">Learn More</Button>
</Card>
Modal Example
jsximport Modal from './components/Modal';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  <p>Modal content here</p>
</Modal>
