import React from 'react';
import { ArrowRight } from 'lucide-react';
import WaitlistCounter from './WaitlistCounter';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 md:px-8 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-white/20"></div>
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight">
            Unlock job referrals from your entire <span className="text-blue-500">network</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          Pico analyzes your LinkedIn connections, finds job openings at their companies, and writes personalized referral messages.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 pt-6 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/waitlist"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Join waitlist
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="/export" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Start demo
            </a>
          </div>
          <WaitlistCounter />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;