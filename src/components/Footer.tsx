
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-aryn-blue mb-4">
              <span className="text-aryn-purple">Aryn</span>Data
            </h3>
            <p className="text-gray-600 mb-4">
              Transforming documents into actionable insights with our unified data platform.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">DocSets</a></li>
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">Workspaces</a></li>
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">DocParse</a></li>
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-aryn-blue">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} ArynData. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
