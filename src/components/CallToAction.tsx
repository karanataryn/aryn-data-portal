
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-aryn-blue to-aryn-blue-light text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Document Workflow?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Join thousands of users who are already discovering insights from their documents with Aryn's platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-aryn-blue hover:bg-gray-100">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
