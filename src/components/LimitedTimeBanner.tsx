import React from 'react';

const LimitedTimeBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 text-center text-sm font-medium shadow-md">
      🎉 Limited Time Offer: Free lifetime subscription for first 25 people that sign up, provide feedback, and testimonials.
    </div>
  );
};

export default LimitedTimeBanner; 