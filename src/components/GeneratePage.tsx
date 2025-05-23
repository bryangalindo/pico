import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GenerationProgress, GenerationStep } from './LinkedInUpload';

const GENERATION_STEPS: GenerationStep[] = [
  { id: 'education', label: 'Getting your profile...', status: 'pending' },
  { id: 'companies', label: 'Getting profiles from your connections...', status: 'pending' },
  { id: 'connections', label: 'Finding connections with shared experiences...', status: 'pending' },
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
    // Create CSV header row
    const headers = [
      'connection_profile_url',
      'referral_request_message'
    ].join(',');

    // Create CSV content with headers and one row
    const csvContent = `${headers}\n` +
      'https://www.linkedin.com/in/brian-garcia-a878092b5/,' +
      '"Hi Brian,\n\n' +
      'Hope you\'re well!\n\n' +
      'I\'m reaching out because I\'m applying for a Software Engineer role [1] at your company that seems like a great fit, ' +
      'especially given my experience with Python.\n\n' +
      'Given our connection at CompanyFooBar [1], I was hoping you might be willing to take a quick look at the job description ' +
      'and let me know if you think a referral would be appropriate.\n\n' +
      'No worries if you\'re too busy, but I appreciate your consideration. (Go BazQux!)\n\n' +
      'Best regards,\n\n' +
      'John Doe\n\n' +
      '[1]: https://www.linkedin.com/jobs/1234567890"';

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Create a download link
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    // Set up the download link
    link.setAttribute('href', url);
    link.setAttribute('download', 'pico_referral_requests.csv');
    link.style.visibility = 'hidden';
    
    // Add link to document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Generating Your Referral Requests File</h2>
          <p className="text-gray-600">We're analyzing your LinkedIn data to find the best opportunities.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <GenerationProgress steps={steps} />
        </div>

        {!isGenerating && (
          <div className="mt-8 text-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Download Referral Requests File
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratePage; 