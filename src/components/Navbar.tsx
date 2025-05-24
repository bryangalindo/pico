import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <Zap className={`w-6 h-6 ${isScrolled ? 'text-blue-500' : 'text-blue-400'}`} />
            <span className="font-bold text-xl text-white">PicoAI</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="https://docs.google.com/forms/d/1Tr0YK5m_4sMcbHf6KOEGINdK2v7CkbUh8zrQSavi2V8/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300"
            >
              Join waitlist
            </a>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-4 py-5 space-y-4">
            <a 
              href="#" 
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#" 
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#" 
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="https://docs.google.com/forms/d/1Tr0YK5m_4sMcbHf6KOEGINdK2v7CkbUh8zrQSavi2V8/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;