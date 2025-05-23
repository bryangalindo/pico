import React from 'react';
import { AlertCircle } from 'lucide-react';

const OldWaySection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          The <span className="line-through">old</span> <span className="text-red-500">painful</span> way
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Job hunting is broken</h3>
              <p className="text-gray-700 mb-6">
                The traditional approach to job hunting leaves candidates frustrated, 
                overwhelmed, and without strategic direction.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Time-consuming research</h4>
                  <p className="text-gray-600">Spending countless hours manually searching through job boards with no system.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Generic applications</h4>
                  <p className="text-gray-600">Submitting the same resume to dozens of positions without strategic customization.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Missing hidden opportunities</h4>
                  <p className="text-gray-600">Failing to identify patterns in job requirements or uncover unadvertised positions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-first md:order-last">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-gray-100 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="p-8 border-4 border-dashed border-gray-300 w-full h-full flex items-center justify-center">
                  <p className="text-gray-500 text-lg font-medium">Frustration & Inefficiency</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldWaySection;