import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OldWaySection from './components/OldWaySection';
import NewWaySection from './components/NewWaySection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import LinkedInUpload from './components/LinkedInUpload';
import GeneratePage from './components/GeneratePage';
import ExportPage from './components/ExportPage';
import DocsPage from './components/DocsPage';
import './animations.css';

function Home() {
  React.useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || '/api/ping';
    console.log('Requesting API endpoint:', window.location.origin + apiUrl);
    
    fetch(apiUrl)
      .then(response => {
        console.log('Resolved URL:', response.url);
        return response.text();
      })
      .then(data => console.log('Ping response:', data))
      .catch(error => console.error('Error pinging server:', error));
  }, []);

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

function AppContent() {
  const location = useLocation();
  const showNavbar = !['/upload', '/generate', '/export', '/docs'].includes(location.pathname);

  return (
    <div className="font-sans">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repo" element={<Repo />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/upload" element={<LinkedInUpload />} />
        <Route path="/generate" element={<GeneratePage />} />
        <Route path="/export" element={<ExportPage />} />
        <Route path="/docs" element={<DocsPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;