import React from 'react';
import { MapPin, Mail, Phone, Download, ExternalLink, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
              <span className="text-4xl font-bold text-blue-700 group-hover:scale-110 transition-transform duration-300">SJ</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              <span className="inline-block animate-slide-in-left">Samyak</span>{' '}
              <span className="inline-block animate-slide-in-right text-blue-700">Jain</span>
            </h1>
            <div className="relative inline-block">
              <p className="text-xl md:text-2xl text-blue-700 font-semibold mb-6 animate-fade-in-up animation-delay-300">
                Mechanical Engineer
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full animate-expand-width"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
              Experienced mechanical engineer with expertise in design, manufacturing, and project management. 
              Seeking opportunities with leading German engineering companies to contribute to innovative 
              mechanical solutions and sustainable manufacturing processes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up animation-delay-700">
            <div className="flex items-center text-gray-600 hover:text-blue-700 transition-colors duration-300 group">
              <MapPin size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>India (Open to relocation to Germany)</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center text-gray-600 hover:text-blue-700 transition-colors duration-300 group">
              <Mail size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>samyak.engineer@email.com</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center text-gray-600 hover:text-blue-700 transition-colors duration-300 group">
              <Phone size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>+91 XXXXX XXXXX</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-900">
            <button className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-900 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 group">
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download CV
            </button>
            <button className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-105 group">
              <ExternalLink size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              LinkedIn Profile
            </button>
          </div>

          {/* Key Skills Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Design & Analysis",
                description: "CAD, FEA, Product Design, Mechanical Systems",
                delay: "animation-delay-1000"
              },
              {
                title: "Manufacturing",
                description: "Process Optimization, Quality Control, Lean Manufacturing",
                delay: "animation-delay-1200"
              },
              {
                title: "Project Management",
                description: "Team Leadership, Planning, Implementation, Quality Assurance",
                delay: "animation-delay-1400"
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 text-center group hover:scale-105 animate-fade-in-up ${skill.delay}`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToProjects}
            className="animate-bounce hover:animate-none transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-gray-500 hover:text-blue-700 transition-colors duration-300">
              <span className="text-sm font-medium mb-2 group-hover:scale-110 transition-transform duration-300">
                Explore My Work
              </span>
              <ChevronDown size={24} className="group-hover:scale-125 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expand-width {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-expand-width {
          animation: expand-width 1s ease-out 0.5s forwards;
          width: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1400 {
          animation-delay: 1.4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;