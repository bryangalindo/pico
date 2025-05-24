import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OldWaySection from './components/OldWaySection';
import NewWaySection from './components/NewWaySection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import LimitedTimeBanner from './components/LimitedTimeBanner';
import './animations.css';

function Home() {
  return (
    <>
      <HeroSection />
      {/* <OldWaySection />
      <NewWaySection />
      <TestimonialsSection />
      <CallToAction /> */}
    </>
  );
}

function Repo() {
  React.useEffect(() => {
    window.location.href = 'https://github.com/bryangalindo/pico';
  }, []);
  
  return null;
}

function Demo() {
  React.useEffect(() => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }, []);
  
  return null;
}

function Waitlist() {
  React.useEffect(() => {
    window.location.href = 'https://forms.gle/giZWwVWfJStoW7gVA';
  }, []);
  
  return null;
}

function App() {
  return (
    <Router>
      <div className="font-sans">
        <LimitedTimeBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repo" element={<Repo />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;