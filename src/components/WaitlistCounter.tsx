import React from 'react';

const WaitlistCounter: React.FC = () => {
  return (
    <div className="text-center py-4">
      <p className="text-lg font-medium text-gray-400">
        <span className="font-bold text-blue-500">13</span> people on the waitlist
      </p>
    </div>
  );
};

export default WaitlistCounter; 