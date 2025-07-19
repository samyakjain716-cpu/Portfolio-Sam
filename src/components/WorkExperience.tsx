import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Building, CheckCircle, Award } from 'lucide-react';

const WorkExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.experience-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 200);
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

  const experiences = [
    {
      title: "Senior Mechanical Engineer",
      company: "Advanced Manufacturing Solutions Pvt. Ltd.",
      location: "Mumbai, India",
      duration: "2021 - Present",
      type: "Full-time",
      description: "Lead mechanical engineer responsible for design, analysis, and implementation of manufacturing systems for automotive and aerospace industries.",
      achievements: [
        "Led a team of 8 engineers in developing automated assembly systems",
        "Reduced production costs by 25% through process optimization",
        "Implemented quality control systems that improved product reliability by 30%",
        "Managed projects worth ₹50+ crores with on-time delivery record of 95%"
      ],
      technologies: ["SolidWorks", "AutoCAD", "ANSYS", "MATLAB", "Six Sigma", "Lean Manufacturing"],
      highlight: "25% cost reduction",
      companyUrl: "https://www.advancedmanufacturing.com",
      linkedinUrl: "https://www.linkedin.com/company/advanced-manufacturing"
    },
    {
      title: "Mechanical Engineer",
      company: "Precision Engineering Works",
      location: "Pune, India",
      duration: "2019 - 2021",
      type: "Full-time",
      description: "Mechanical engineer specializing in precision manufacturing and quality control systems for industrial machinery.",
      achievements: [
        "Designed and developed precision components for CNC machines",
        "Improved manufacturing efficiency by 20% through process improvements",
        "Conducted FEA analysis for structural optimization of mechanical systems",
        "Collaborated with cross-functional teams to deliver complex projects"
      ],
      technologies: ["SolidWorks", "CNC Programming", "GD&T", "Statistical Process Control", "FMEA"],
      highlight: "20% efficiency gain",
      companyUrl: "https://www.precisionengineering.com",
      linkedinUrl: "https://www.linkedin.com/company/precision-engineering"
    },
    {
      title: "Associate Mechanical Engineer",
      company: "Industrial Automation Systems",
      location: "Bangalore, India",
      duration: "2017 - 2019",
      type: "Full-time",
      description: "Junior mechanical engineer working on automation systems and robotics applications for manufacturing industries.",
      achievements: [
        "Developed automation solutions for packaging and material handling",
        "Assisted in design and commissioning of robotic systems",
        "Performed maintenance and troubleshooting of manufacturing equipment",
        "Contributed to cost reduction initiatives saving ₹15 lakhs annually"
      ],
      technologies: ["AutoCAD", "PLC Programming", "Robotics", "Pneumatics", "Hydraulics"],
      highlight: "₹15L annual savings",
      companyUrl: "https://www.industrialautomation.com",
      linkedinUrl: "https://www.linkedin.com/company/industrial-automation"
    },
    {
      title: "Mechanical Engineering Intern",
      company: "Bharat Heavy Electricals Limited (BHEL)",
      location: "Bhopal, India",
      duration: "2016 - 2017",
      type: "Internship",
      description: "Internship program focusing on power plant equipment design and manufacturing processes.",
      achievements: [
        "Gained hands-on experience in heavy machinery manufacturing",
        "Assisted in quality control and testing of turbine components",
        "Learned about power generation systems and thermal engineering",
        "Completed training in welding and fabrication techniques"
      ],
      technologies: ["Technical Drawing", "Manufacturing Processes", "Quality Control", "Welding"],
      highlight: "Foundation experience",
      companyUrl: "https://www.bhel.com",
      linkedinUrl: "https://www.linkedin.com/company/bhel"
    }
  ];

  return (
    <section id="work-experience" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
              Work Experience
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Professional experience spanning various aspects of mechanical engineering, from design and analysis to manufacturing and project management
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 group opacity-0 translate-x-8 relative border-4 border-gray-200 hover:border-blue-200"
            >
              {/* Timeline indicator */}
              <div className="absolute left-0 top-8 w-1 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="ml-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                      {exp.highlight}
                    </div>
                  </div>
                  <div className="flex items-center mb-2 group-hover:scale-105 transition-transform duration-300">
                    <Building size={16} className="mr-2 text-blue-700" />
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-700 hover:text-blue-800 hover:underline transition-all duration-300"
                    >
                      {exp.company}
                    </a>
                    <a 
                      href={exp.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{exp.description}</p>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Award size={20} className="mr-2 text-blue-700" />
                  <h4 className="text-lg font-semibold text-gray-900">Key Achievements</h4>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle size={16} className="mr-3 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 cursor-default transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Progression Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Career Progression</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="text-3xl font-bold text-blue-700 mb-2 group-hover:scale-110 transition-transform duration-300">7+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-blue-700 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-blue-700 mb-2 group-hover:scale-110 transition-transform duration-300">₹65+</div>
              <p className="text-gray-600">Crores Projects Managed</p>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-blue-700 mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <p className="text-gray-600">On-time Delivery</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
          transition: all 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;