import React from 'react';
import { ArrowRight } from 'lucide-react';

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
            your multi-agent job hunt <span className="text-blue-500">research team.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          PicoAI uses AI agents to conduct pre-interview research to help you prepare more effectively for your upcoming interview.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in-up">
          <a 
            href="https://docs.google.com/forms/d/1Tr0YK5m_4sMcbHf6KOEGINdK2v7CkbUh8zrQSavi2V8/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Join waitlist
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="#demo" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm"
          >
            See demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;