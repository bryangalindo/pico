import React from 'react';
import { CheckCircle } from 'lucide-react';

const NewWaySection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          The <span className="text-blue-500">new</span> way
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-last md:order-first">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-gray-900 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="p-8 border-4 border-dashed border-gray-700 w-full h-full flex items-center justify-center">
                  <p className="text-gray-400 text-lg font-medium">Strategic & Efficient</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PicoAI revolutionizes job hunting</h3>
              <p className="text-gray-300 mb-6">
                Our AI-powered research team analyzes thousands of listings to give you a strategic advantage in your job search.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-900 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Intelligent pattern recognition</h4>
                  <p className="text-gray-400">Our AI identifies trends in job requirements across industries and positions.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-900 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Personalized application strategy</h4>
                  <p className="text-gray-400">Tailored recommendations for resume optimization based on specific job targets.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-900 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hidden opportunity alerts</h4>
                  <p className="text-gray-400">Discover unadvertised positions and emerging roles before they hit the market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewWaySection;