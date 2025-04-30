
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Upload Your Documents',
    description: 'Easily upload and organize your documents into DocSets for efficient storage and management.'
  },
  {
    number: '02',
    title: 'Configure Processing',
    description: 'Set up DocParse to extract structured data from your documents using our intelligent parsing.'
  },
  {
    number: '03',
    title: 'Create Workspaces',
    description: 'Build custom workspaces to query and analyze your data with powerful visualization tools.'
  },
  {
    number: '04',
    title: 'Extract Insights',
    description: 'Discover patterns and insights across your documents that were previously hidden in unstructured data.'
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aryn-blue mb-4">
            How Aryn Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple four-step process to transform your documents into actionable insights
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="bg-aryn-blue text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-aryn-blue mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
