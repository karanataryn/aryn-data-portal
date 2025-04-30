
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-aryn-blue">
            <span className="text-aryn-purple">Aryn</span>Data
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-8 text-gray-600">
          <a href="#features" className="hover:text-aryn-blue transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-aryn-blue transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-aryn-blue transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-aryn-blue transition-colors">Documentation</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-aryn-blue text-aryn-blue hover:bg-aryn-blue hover:text-white">
            Sign In
          </Button>
          <Button className="bg-aryn-blue hover:bg-aryn-blue-light text-white transition-colors">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
