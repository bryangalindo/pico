import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type GenerationStep = {
  id: string;
  label: string;
  status: 'pending' | 'in-progress' | 'completed' | 'error';
};

export const GenerationProgress: React.FC<{ steps: GenerationStep[] }> = ({ steps }) => {
  return (
    <div className="mt-6 space-y-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-start">
          <div className="flex-shrink-0">
            {step.status === 'completed' ? (
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ) : step.status === 'in-progress' ? (
              <svg className="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <div className="h-6 w-6 rounded-full border-2 border-gray-300"></div>
            )}
          </div>
          <div className="ml-3">
            <p className={`text-sm font-medium ${
              step.status === 'completed' ? 'text-green-600' :
              step.status === 'in-progress' ? 'text-blue-600' :
              'text-gray-500'
            }`}>
              {step.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const LinkedInUpload: React.FC = () => {
  const navigate = useNavigate();
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

  const handleGenerateReferrals = () => {
    if (selectedFile) {
      navigate('/generate', { state: { file: selectedFile } });
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Upload Your LinkedIn Export Data</h2>
          <p className="text-gray-600">Your education, companies, job role alerts, and connections are extracted from this dataset.</p>
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
                      : uploadStatus === 'uploaded'
                      ? 'bg-gray-500 hover:bg-gray-600'
                      : 'bg-blue-600 hover:bg-blue-700'} 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                >
                  {uploadStatus === 'uploading' ? 'Uploading...' : uploadStatus === 'uploaded' ? 'Upload a different file' : 'Choose ZIP file'}
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

        {!selectedFile && (
          <p className="text-center text-sm text-gray-500 mt-8">
            🔒 Your data is processed locally and is never stored on our servers
          </p>
        )}

        {uploadStatus === 'uploaded' && (
          <div className="mt-6 text-center">
            <button
              onClick={handleGenerateReferrals}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              Generate Referral Requests File
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkedInUpload; 