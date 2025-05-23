import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add scroll reveal functionality
document.addEventListener('DOMContentLoaded', () => {
  // Function to check if element is in viewport
  const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  };

  // Function to reveal elements when scrolled into view
  const revealOnScroll = () => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  };

  // Add scroll event listener
  window.addEventListener('scroll', revealOnScroll);
  
  // Initial check
  revealOnScroll();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);