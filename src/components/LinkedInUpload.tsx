import React, { useState } from 'react';

const LinkedInUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'uploaded'>('idle');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/zip') {
      setSelectedFile(file);
      setUploadStatus('uploading');
      // Simulate upload delay
      setTimeout(() => {
        setUploadStatus('uploaded');
      }, 1000);
    } else {
      alert('Please upload a ZIP file');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === 'application/zip') {
      setSelectedFile(file);
      setUploadStatus('uploading');
      // Simulate upload delay
      setTimeout(() => {
        setUploadStatus('uploaded');
      }, 1000);
    } else {
      alert('Please upload a ZIP file');
    }
  };

  const getStatusColor = () => {
    switch (uploadStatus) {
      case 'uploading':
        return 'border-blue-500 bg-blue-50';
      case 'uploaded':
        return 'border-green-500 bg-green-50';
      default:
        return 'border-gray-300 hover:border-gray-400';
    }
  };

  const getStatusText = () => {
    switch (uploadStatus) {
      case 'uploading':
        return 'Uploading...';
      case 'uploaded':
        return 'File uploaded successfully!';
      default:
        return 'or drag and drop your LinkedIn data export ZIP file here';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Upload Your LinkedIn Data</h2>
          <p className="text-gray-600">Generate personalized referral requests from your LinkedIn connections</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ease-in-out ${getStatusColor()}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="space-y-4">
              <div className="flex justify-center">
                <svg 
                  className={`w-12 h-12 transition-colors duration-200
                    ${uploadStatus === 'uploaded' ? 'text-green-500' : 'text-gray-400'}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>

              <div>
                <input
                  type="file"
                  accept=".zip"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  disabled={uploadStatus === 'uploading'}
                />
                <label
                  htmlFor="file-upload"
                  className={`cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white 
                    ${uploadStatus === 'uploading' 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'} 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                >
                  {uploadStatus === 'uploading' ? 'Uploading...' : 'Choose ZIP file'}
                </label>
              </div>

              {selectedFile ? (
                <div className="mt-4">
                  <p className={`text-sm font-medium ${uploadStatus === 'uploaded' ? 'text-green-600' : 'text-blue-600'}`}>
                    {uploadStatus === 'uploading' ? '⏳' : '✓'} {selectedFile.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  {getStatusText()}
                </p>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          🔒 Your data is processed locally and is never stored on our servers
        </p>
      </div>
    </div>
  );
};

export default LinkedInUpload; 