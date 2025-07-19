import React from 'react';
import { ArrowLeft, Calendar, Users, Wrench, TrendingUp, Download, Play, Image as ImageIcon, CheckCircle, AlertTriangle } from 'lucide-react';

const ProjectDetail = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-700 hover:text-blue-800 transition-all duration-300 mb-4 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </button>
          
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border-2 border-blue-200">
                  {project.category}
                </span>
                <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold flex items-center border-2 border-green-200">
                  <TrendingUp size={16} className="mr-1" />
                  {project.highlight}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <div className="bg-white p-8 rounded-xl shadow-md border-4 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{project.description}</p>
              <p className="text-gray-700 leading-relaxed">{project.detailedDescription}</p>
            </div>

            {/* Images and Videos */}
            {(project.images.length > 0 || project.videos.length > 0) && (
              <div className="bg-white p-8 rounded-xl shadow-md border-4 border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Gallery</h2>
                
                {/* Images */}
                {project.images.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <ImageIcon size={20} className="mr-2 text-blue-600" />
                      Project Images
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.images.map((image, index) => (
                        <div key={index} className="relative group border-3 border-gray-300 rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Videos */}
                {project.videos.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Play size={20} className="mr-2 text-blue-600" />
                      Project Videos
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {project.videos.map((video, index) => (
                        <div key={index} className="relative bg-gray-100 rounded-lg p-8 text-center border-3 border-gray-300">
                          <Play size={48} className="mx-auto text-blue-600 mb-4" />
                          <p className="text-gray-600">Video Demo {index + 1}</p>
                          <p className="text-sm text-gray-500 mt-2">Click to play demonstration video</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Challenges & Solutions */}
            <div className="bg-white p-8 rounded-xl shadow-md border-4 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges & Solutions</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start border-l-4 border-orange-500 pl-4 py-2">
                    <AlertTriangle size={20} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results & Impact */}
            <div className="bg-white p-8 rounded-xl shadow-md border-4 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Results & Impact</h2>
              <div className="space-y-4">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start border-l-4 border-green-500 pl-4 py-2">
                    <CheckCircle size={20} className="mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="bg-white p-6 rounded-xl shadow-md border-4 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-3 text-blue-600" />
                  <div>
                    <span className="font-medium">Duration:</span>
                    <p className="text-sm">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users size={16} className="mr-3 text-blue-600" />
                  <div>
                    <span className="font-medium">Team Size:</span>
                    <p className="text-sm">{project.team}</p>
                  </div>
                </div>
                <div className="flex items-start text-gray-600">
                  <Wrench size={16} className="mr-3 text-blue-600 mt-1" />
                  <div>
                    <span className="font-medium">Impact:</span>
                    <p className="text-sm">{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white p-6 rounded-xl shadow-md border-4 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border-2 border-blue-200 hover:bg-blue-200 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-white p-6 rounded-xl shadow-md border-4 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Documentation</h3>
              <div className="space-y-3">
                {project.documentation.map((doc, index) => (
                  <a 
                    key={index}
                    href={doc.url}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 border-2 border-gray-200 hover:border-blue-300 group"
                  >
                    <div className="flex items-center">
                      <Download size={16} className="mr-3 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.type}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;