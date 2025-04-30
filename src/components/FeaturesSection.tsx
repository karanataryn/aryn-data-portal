
import React from 'react';
import FeatureCard from './FeatureCard';
import { Database, File, Search } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aryn-blue mb-4">
            Powerful Features for Your Data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform how you store, query, and parse documents with our integrated platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="DocSets" 
            description="Organize and store your documents in intelligent collections with advanced metadata support." 
            icon={Database}
            color="bg-aryn-blue"
            action="Learn more"
          />
          
          <FeatureCard 
            title="Workspaces" 
            description="Query your data across multiple sources with a powerful, intuitive interface and real-time insights."
            icon={Search}
            color="bg-aryn-purple"
            action="Explore queries"
          />
          
          <FeatureCard 
            title="DocParse" 
            description="Transform unstructured PDFs into structured, queryable data with our advanced parsing technology."
            icon={File}
            color="bg-aryn-teal"
            action="See examples"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
