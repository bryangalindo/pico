import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { useNavigate } from 'react-router-dom';

function ExportPage() {
  const [isExporting, setIsExporting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: number;
    if (showSuccess && countdown > 0) {
      timer = window.setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (showSuccess && countdown === 0) {
      navigate('/upload');
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showSuccess, countdown, navigate]);

  const handleExport = async () => {
    try {
      setIsExporting(true);
      
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

      // Show success message
      setShowSuccess(true);
    } catch (error) {
      console.error('Error creating zip file:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleContinue = () => {
    navigate('/upload');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Export your LinkedIn data
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Download your LinkedIn profile data in a format that's easy to use and share
      </p>
      
      {!showSuccess ? (
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleExport}
          disabled={isExporting}
        >
          {isExporting ? 'Preparing Download...' : 'Export Data'}
        </button>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="text-green-600 text-lg font-medium">
            ✓ Download started successfully!
          </div>
          <div className="text-gray-600">
            Redirecting you to the upload page in {countdown} seconds...
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            onClick={handleContinue}
          >
            Continue Now
          </button>
        </div>
      )}
    </div>
  );
}

export default ExportPage; 