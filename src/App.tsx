import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OldWaySection from './components/OldWaySection';
import NewWaySection from './components/NewWaySection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './animations.css';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <OldWaySection />
      <NewWaySection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;