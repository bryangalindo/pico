import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-blue-500 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your job search?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join our waitlist today and be among the first to experience the future of strategic job hunting with PicoAI.
        </p>
        
        <button 
          className="px-8 py-4 bg-black hover:bg-gray-900 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 mx-auto group"
        >
          Join waitlist
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;