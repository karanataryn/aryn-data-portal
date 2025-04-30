
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aryn-blue mb-6">
              Unify Your Data <br />
              <span className="text-aryn-purple">Transform Knowledge</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Aryn's platform seamlessly integrates document storage, 
              structured querying, and intelligent parsing to transform 
              your unstructured data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-aryn-blue hover:bg-aryn-blue-light text-white text-lg py-6 px-8">
                Get Started Free
              </Button>
              <Button variant="outline" className="border-aryn-blue text-aryn-blue hover:bg-aryn-blue hover:text-white text-lg py-6 px-8">
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200 transform rotate-2 animate-float">
              <div className="bg-gray-100 h-8 w-full rounded-md mb-4"></div>
              <div className="bg-gray-200 h-40 w-full rounded-md mb-4"></div>
              <div className="flex space-x-3">
                <div className="bg-aryn-teal h-6 w-1/3 rounded-md"></div>
                <div className="bg-aryn-purple h-6 w-1/3 rounded-md"></div>
                <div className="bg-aryn-blue h-6 w-1/3 rounded-md"></div>
              </div>
            </div>
            <div className="absolute top-10 right-10 bg-aryn-purple/10 backdrop-blur-sm rounded-full h-20 w-20 z-10"></div>
            <div className="absolute bottom-10 left-10 bg-aryn-teal/10 backdrop-blur-sm rounded-full h-24 w-24 z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
