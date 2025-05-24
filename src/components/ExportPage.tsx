import React from 'react';

function ExportPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Export your LinkedIn data
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Download your LinkedIn profile data in a format that's easy to use and share
      </p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        onClick={() => {
          // TODO: Implement export functionality
          console.log('Export clicked');
        }}
      >
        Export Data
      </button>
    </div>
  );
}

export default ExportPage; 