import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Samyak Jain</h3>
            <p className="text-gray-400 mb-4">
              Experienced Mechanical Engineer seeking opportunities with leading German engineering companies.
            </p>
            <p className="text-sm text-gray-400">
              Ready to contribute to innovative engineering solutions and sustainable manufacturing processes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#work-experience" className="hover:text-white transition-colors duration-200">Work Experience</a></li>
              <li><a href="#achievements" className="hover:text-white transition-colors duration-200">Achievements</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Areas of Expertise</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Mechanical Design & Analysis</li>
              <li>• Manufacturing Process Optimization</li>
              <li>• Project Management</li>
              <li>• Quality Control Systems</li>
              <li>• Automation & Robotics</li>
              <li>• Sustainable Manufacturing</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Samyak Jain. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>and</span>
              <Code className="w-4 h-4 mx-1 text-blue-500" />
              <span>for German engineering excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;