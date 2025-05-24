import React from 'react';
import JSZip from 'jszip';

function ExportPage() {
  const handleExport = async () => {
    try {
      // Create a new zip file
      const zip = new JSZip();
      
      // Add a dummy text file to the zip
      zip.file("readme.txt", "This is a sample LinkedIn data export file.");
      
      // Generate the zip file
      const content = await zip.generateAsync({ type: "blob" });
      
      // Create the filename with today's date
      const today = new Date();
      const dateStr = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      const filename = `Basic_LinkedInDataExport_${dateStr}.zip`;
      
      // Create a download link and trigger the download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error creating zip file:', error);
    }
  };

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
        onClick={handleExport}
      >
        Export Data
      </button>
    </div>
  );
}

export default ExportPage; 