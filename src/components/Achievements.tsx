import React, { useEffect, useRef } from 'react';
import { Award, AlignCenterVertical as Certificate, Star, Trophy, BookOpen, Users, Medal } from 'lucide-react';

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categories = entry.target.querySelectorAll('.achievement-category');
            categories.forEach((category, index) => {
              setTimeout(() => {
                category.classList.add('animate-in');
              }, index * 300);
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

  const achievements = [
    {
      category: "Professional Certifications",
      icon: Certificate,
      color: "blue",
      items: [
        {
          title: "Six Sigma Green Belt Certification",
          issuer: "American Society for Quality (ASQ)",
          year: "2022",
          description: "Certified in Six Sigma methodology for process improvement and quality management",
          highlight: "Quality Excellence",
          certificateUrl: "https://example.com/certificates/six-sigma.pdf",
          verificationUrl: "https://asq.org/verify/certificate-123456"
        },
        {
          title: "PMP (Project Management Professional)",
          issuer: "Project Management Institute (PMI)",
          year: "2021",
          description: "Globally recognized certification in project management",
          highlight: "Leadership",
          certificateUrl: "https://example.com/certificates/pmp.pdf",
          verificationUrl: "https://pmi.org/verify/certificate-789012"
        },
        {
          title: "AutoCAD Professional Certification",
          issuer: "Autodesk",
          year: "2020",
          description: "Advanced proficiency in AutoCAD for engineering design and drafting",
          highlight: "Design Expertise",
          certificateUrl: "https://example.com/certificates/autocad.pdf",
          verificationUrl: "https://autodesk.com/verify/certificate-345678"
        },
        {
          title: "SolidWorks Certified Professional (CSWP)",
          issuer: "Dassault Systèmes",
          year: "2019",
          description: "Professional-level certification in SolidWorks 3D CAD software",
          highlight: "3D Modeling",
          certificateUrl: "https://example.com/certificates/solidworks.pdf",
          verificationUrl: "https://solidworks.com/verify/certificate-901234"
        }
      ]
    },
    {
      category: "Awards & Recognition",
      icon: Trophy,
      color: "yellow",
      items: [
        {
          title: "Excellence in Innovation Award",
          issuer: "Advanced Manufacturing Solutions",
          year: "2023",
          description: "Recognized for developing innovative automation solutions that improved efficiency by 35%",
          highlight: "Innovation Leader"
        },
        {
          title: "Best Engineering Project Award",
          issuer: "Institution of Engineers India",
          year: "2022",
          description: "Awarded for outstanding contribution to sustainable manufacturing processes",
          highlight: "Sustainability"
        },
        {
          title: "Employee of the Year",
          issuer: "Precision Engineering Works",
          year: "2020",
          description: "Recognized for exceptional performance and leadership in project delivery",
          highlight: "Top Performer"
        }
      ]
    },
    {
      category: "Academic Achievements",
      icon: BookOpen,
      color: "green",
      items: [
        {
          title: "Master of Technology (M.Tech) in Mechanical Engineering",
          issuer: "Indian Institute of Technology (IIT) Delhi",
          year: "2017",
          description: "Specialization in Manufacturing Engineering with CGPA 8.7/10",
          highlight: "IIT Graduate"
        },
        {
          title: "Bachelor of Engineering (B.E.) in Mechanical Engineering",
          issuer: "Visvesvaraya Technological University",
          year: "2015",
          description: "First Class with Distinction, CGPA 8.9/10",
          highlight: "First Class"
        },
        {
          title: "Best Research Paper Award",
          issuer: "National Conference on Advanced Manufacturing",
          year: "2016",
          description: "Research on 'Optimization of Manufacturing Processes using AI'",
          highlight: "Research Excellence"
        }
      ]
    },
    {
      category: "Leadership & Skills",
      icon: Users,
      color: "purple",
      items: [
        {
          title: "Team Leadership",
          issuer: "Professional Experience",
          year: "2017-Present",
          description: "Led cross-functional teams of 8-12 engineers across multiple projects",
          highlight: "Team Leader"
        },
        {
          title: "Technical Training Delivery",
          issuer: "Various Organizations",
          year: "2019-Present",
          description: "Conducted technical training sessions for 200+ engineers on CAD and manufacturing",
          highlight: "Mentor"
        },
        {
          title: "German Language Proficiency (A2 Level)",
          issuer: "Goethe Institute",
          year: "2023",
          description: "Basic proficiency in German language for professional communication",
          highlight: "German Ready"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-700', badge: 'bg-blue-50' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', badge: 'bg-yellow-50' },
      green: { bg: 'bg-green-100', text: 'text-green-700', badge: 'bg-green-50' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-700', badge: 'bg-purple-50' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="achievements" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
              Achievements
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Professional certifications, awards, and achievements that demonstrate continuous learning and excellence in mechanical engineering
          </p>
        </div>

        <div className="space-y-12">
          {achievements.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div 
                key={categoryIndex} 
                className="achievement-category bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 opacity-0 translate-y-8"
              >
                <div className="flex items-center mb-8 group">
                  <div className={`${colorClasses.bg} p-4 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {category.category}
                  </h3>
                  <div className="ml-4 flex items-center">
                    <Medal size={20} className="text-yellow-500" />
                    <span className="ml-1 text-sm font-medium text-gray-600">
                      {category.items.length} achievements
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border-l-4 border-transparent hover:border-blue-500 border-2 border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-900 flex-1 group-hover:text-blue-700 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <div className="flex flex-col items-end space-y-1">
                          <span className="text-sm text-blue-700 font-medium bg-blue-50 px-2 py-1 rounded">
                            {item.year}
                          </span>
                          <span className={`text-xs font-bold ${colorClasses.text} ${colorClasses.badge} px-2 py-1 rounded-full`}>
                            {item.highlight}
                          </span>
                        </div>
                      </div>
                      <p className="text-blue-700 font-medium mb-3 group-hover:scale-105 transition-transform duration-300">
                        {item.issuer}
                      </p>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      
                      {/* Certificate Actions */}
                      <div className="flex space-x-3 pt-3 border-t border-gray-200">
                        <a 
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-700 hover:text-blue-800 transition-all duration-300 font-medium text-sm group-hover:scale-105"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          View Certificate
                        </a>
                        <a 
                          href={item.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-green-700 hover:text-green-800 transition-all duration-300 font-medium text-sm group-hover:scale-105"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Verify
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Skills Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "CAD & Design",
                skills: ["SolidWorks", "AutoCAD", "Inventor", "CATIA"],
                color: "blue"
              },
              {
                title: "Analysis & Simulation",
                skills: ["ANSYS", "MATLAB", "Simulink", "FEA"],
                color: "green"
              },
              {
                title: "Manufacturing",
                skills: ["CNC Programming", "Lean Manufacturing", "Six Sigma", "Quality Control"],
                color: "orange"
              }
            ].map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {skillGroup.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default ${
                        skillGroup.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                        skillGroup.color === 'green' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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

export default Achievements;