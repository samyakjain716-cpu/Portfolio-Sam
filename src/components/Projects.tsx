import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar, Users, Wrench, TrendingUp } from 'lucide-react';

const Projects = ({ onProjectSelect }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Automated Assembly Line Optimization",
      description: "Designed and implemented an automated assembly line system that reduced production time by 35% and improved quality consistency. Utilized CAD software for system design and conducted FEA analysis for structural integrity.",
      technologies: ["SolidWorks", "AutoCAD", "ANSYS", "PLC Programming"],
      duration: "6 months",
      team: "5 engineers",
      impact: "35% reduction in production time, 20% improvement in quality metrics",
      category: "Manufacturing",
      highlight: "35% efficiency gain",
      images: [
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      videos: ["https://example.com/assembly-line-demo.mp4"],
      detailedDescription: "This comprehensive project involved redesigning the entire assembly line workflow for automotive components. The project spanned 6 months and included detailed analysis of existing processes, identification of bottlenecks, implementation of automated systems, and extensive testing phases. Key innovations included robotic arm integration, quality control sensors, and real-time monitoring systems.",
      documentation: [
        { name: "Project Report", url: "#", type: "PDF" },
        { name: "Technical Specifications", url: "#", type: "PDF" },
        { name: "CAD Files", url: "#", type: "ZIP" }
      ],
      challenges: [
        "Integration with existing legacy systems",
        "Minimizing production downtime during implementation",
        "Training workforce on new automated systems"
      ],
      results: [
        "35% reduction in production time",
        "20% improvement in quality metrics",
        "15% reduction in material waste",
        "Improved worker safety conditions"
      ]
    },
    {
      title: "Heat Exchanger Design & Analysis",
      description: "Developed a high-efficiency heat exchanger for industrial applications using advanced thermal analysis. Project included material selection, thermal modeling, and performance optimization.",
      technologies: ["ANSYS Fluent", "SolidWorks", "MATLAB", "Thermal Analysis"],
      duration: "4 months",
      team: "3 engineers",
      impact: "25% improvement in heat transfer efficiency",
      category: "Thermal Systems",
      highlight: "25% efficiency boost",
      images: [
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      videos: [],
      detailedDescription: "Advanced thermal analysis and design optimization project focusing on industrial heat exchanger systems. Utilized computational fluid dynamics and thermal modeling to achieve significant efficiency improvements.",
      documentation: [
        { name: "Thermal Analysis Report", url: "#", type: "PDF" },
        { name: "CFD Simulation Results", url: "#", type: "PDF" }
      ],
      challenges: [
        "Complex thermal boundary conditions",
        "Material selection for high-temperature applications"
      ],
      results: [
        "25% improvement in heat transfer efficiency",
        "Reduced energy consumption",
        "Enhanced system reliability"
      ]
    },
    {
      title: "Robotic Arm Control System",
      description: "Designed and programmed a 6-DOF robotic arm for precision manufacturing tasks. Implemented advanced control algorithms and safety systems for industrial use.",
      technologies: ["Solidworks Software", "C++", "ROS", "Control Systems"],
      duration: "8 months",
      team: "4 engineers",
      impact: "Achieved positioning accuracy of ±0.1mm",
      category: "Robotics",
      highlight: "±0.1mm precision",
      images: [
        "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      videos: ["https://example.com/robotic-arm-demo.mp4"],
      detailedDescription: "Development of a high-precision 6-DOF robotic arm control system for manufacturing applications. The project involved advanced control algorithms, safety systems, and real-time feedback mechanisms.",
      documentation: [
        { name: "Control System Documentation", url: "#", type: "PDF" },
        { name: "Safety Analysis", url: "#", type: "PDF" }
      ],
      challenges: [
        "Real-time control requirements",
        "Safety system integration",
        "Precision calibration"
      ],
      results: [
        "±0.1mm positioning accuracy achieved",
        "Improved manufacturing precision",
        "Enhanced safety protocols"
      ]
    },
    {
      title: "Sustainable Manufacturing Process",
      description: "Developed an eco-friendly manufacturing process that reduced waste by 40% and energy consumption by 30%. Project focused on lean manufacturing principles and environmental sustainability.",
      technologies: ["Lean Manufacturing", "Process Optimization", "Statistical Analysis"],
      duration: "5 months",
      team: "6 engineers",
      impact: "40% waste reduction, 30% energy savings",
      category: "Sustainability",
      highlight: "40% waste reduction",
      images: [
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      videos: [],
      detailedDescription: "Comprehensive sustainability initiative focusing on waste reduction and energy efficiency in manufacturing processes. Implemented lean manufacturing principles and environmental best practices.",
      documentation: [
        { name: "Sustainability Report", url: "#", type: "PDF" },
        { name: "Process Optimization Guide", url: "#", type: "PDF" }
      ],
      challenges: [
        "Balancing efficiency with sustainability",
        "Cost-effective implementation",
        "Stakeholder buy-in"
      ],
      results: [
        "40% waste reduction achieved",
        "30% energy savings",
        "Improved environmental compliance"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
              Projects
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            A showcase of engineering projects demonstrating technical expertise, innovation, and practical problem-solving skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 group opacity-0 translate-y-8 border-4 border-transparent hover:border-blue-200"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold flex items-center">
                    <TrendingUp size={12} className="mr-1" />
                    {project.highlight}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  <Calendar size={16} className="mr-2 text-blue-600" />
                  <span className="text-sm font-medium">Duration: {project.duration}</span>
                </div>
                <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  <Users size={16} className="mr-2 text-blue-600" />
                  <span className="text-sm font-medium">Team: {project.team}</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-700 mb-6 group-hover:border-blue-800 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <Wrench size={16} className="mr-2 text-blue-700" />
                  <span className="font-semibold text-gray-900">Key Impact</span>
                </div>
                <p className="text-gray-600 font-medium">{project.impact}</p>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center text-blue-700 hover:text-blue-800 transition-all duration-300 font-medium group-hover:scale-105">
                  onClick={() => onProjectSelect(project)}
                  <ExternalLink size={16} className="mr-1" />
                  View Details
                </button>
                <button className="flex items-center text-blue-700 hover:text-blue-800 transition-all duration-300 font-medium group-hover:scale-105">
                  <Github size={16} className="mr-1" />
                  Documentation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These projects represent my commitment to engineering excellence and innovation. 
              I'm excited to bring this expertise to German engineering companies.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Let's Discuss Opportunities
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;