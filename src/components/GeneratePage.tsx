import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GenerationProgress, GenerationStep } from './LinkedInUpload';

const GENERATION_STEPS: GenerationStep[] = [
  { id: 'education', label: 'Getting your education...', status: 'pending' },
  { id: 'companies', label: 'Getting your companies...', status: 'pending' },
  { id: 'roles', label: 'Getting your desired roles...', status: 'pending' },
  { id: 'connections', label: 'Finding connections with common ground...', status: 'pending' },
  { id: 'jobs', label: 'Finding active jobs from your connections...', status: 'pending' },
  { id: 'messages', label: 'Generating personalized messages...', status: 'pending' },
  { id: 'csv', label: 'Generating CSV...', status: 'pending' },
];

const GeneratePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [steps, setSteps] = useState(GENERATION_STEPS);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    if (!location.state?.file) {
      navigate('/upload');
      return;
    }

    const generateReferrals = async () => {
      // Simulate processing each step
      for (let i = 0; i < steps.length; i++) {
        setSteps(prevSteps => 
          prevSteps.map((step, index) => ({
            ...step,
            status: index === i ? 'in-progress' : 
                   index < i ? 'completed' : 'pending'
          }))
        );
        
        // Simulate processing time for each step
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Mark the final step as completed
      setSteps(prevSteps => 
        prevSteps.map((step, index) => ({
          ...step,
          status: index === steps.length - 1 ? 'completed' : step.status
        }))
      );
      
      setIsGenerating(false);
    };

    generateReferrals();
  }, []);

  const handleDownload = () => {
    // TODO: Implement actual file download
    console.log('Downloading file...');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Generating Your Referral Requests</h2>
          <p className="text-gray-600">We're analyzing your LinkedIn data to find the best opportunities.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <GenerationProgress steps={steps} />

          {!isGenerating && (
            <div className="mt-8 text-center">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Download Referral Requests
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneratePage; 