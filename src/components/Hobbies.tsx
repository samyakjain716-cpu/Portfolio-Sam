import React, { useEffect, useRef } from 'react';
import { Camera, Music, Plane, Book, Gamepad2, Mountain, Palette, Code } from 'lucide-react';

const Hobbies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.hobby-card');
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

  const hobbies = [
    {
      title: "Photography",
      icon: Camera,
      description: "Capturing engineering marvels and industrial landscapes. Specialized in architectural and mechanical photography.",
      color: "blue",
      achievements: ["500+ engineering photos", "Featured in tech magazines", "Industrial photography portfolio"]
    },
    {
      title: "Music Production",
      icon: Music,
      description: "Creating electronic music and sound design. Combining technical precision with creative expression.",
      color: "purple",
      achievements: ["Home studio setup", "10+ original compositions", "Sound engineering knowledge"]
    },
    {
      title: "Travel & Culture",
      icon: Plane,
      description: "Exploring different countries and their engineering achievements. Passionate about German culture and engineering heritage.",
      color: "green",
      achievements: ["15+ countries visited", "German cultural immersion", "Engineering site visits"]
    },
    {
      title: "Technical Reading",
      icon: Book,
      description: "Staying updated with latest engineering trends, German industrial practices, and technological innovations.",
      color: "orange",
      achievements: ["50+ technical books/year", "Industry publications", "Research paper reviews"]
    },
    {
      title: "Gaming & Strategy",
      icon: Gamepad2,
      description: "Strategic thinking through complex simulation games and engineering puzzles. Enhances problem-solving skills.",
      color: "red",
      achievements: ["Strategy game enthusiast", "Engineering simulations", "Problem-solving games"]
    },
    {
      title: "Hiking & Outdoors",
      icon: Mountain,
      description: "Mountain hiking and outdoor adventures. Appreciating natural engineering and geological formations.",
      color: "teal",
      achievements: ["20+ mountain peaks", "Nature photography", "Geological observations"]
    },
    {
      title: "Digital Art",
      icon: Palette,
      description: "Creating technical illustrations and engineering visualizations. Combining art with engineering concepts.",
      color: "pink",
      achievements: ["Technical illustrations", "CAD art projects", "Engineering visualizations"]
    },
    {
      title: "Programming",
      icon: Code,
      description: "Developing automation tools and engineering applications. Bridging mechanical engineering with software.",
      color: "indigo",
      achievements: ["Python automation tools", "CAD scripting", "Data analysis programs"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', hover: 'hover:border-blue-500' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300', hover: 'hover:border-purple-500' },
      green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300', hover: 'hover:border-green-500' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300', hover: 'hover:border-orange-500' },
      red: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300', hover: 'hover:border-red-500' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-700', border: 'border-teal-300', hover: 'hover:border-teal-500' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-300', hover: 'hover:border-pink-500' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-300', hover: 'hover:border-indigo-500' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="hobbies" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
              Hobbies & Interests
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Personal interests that complement my professional skills and demonstrate a well-rounded personality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => {
            const colorClasses = getColorClasses(hobby.color);
            return (
              <div 
                key={index} 
                className={`hobby-card bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 group opacity-0 translate-y-8 border-4 ${colorClasses.border} ${colorClasses.hover}`}
              >
                <div className={`${colorClasses.bg} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <hobby.icon className={`w-8 h-8 ${colorClasses.text}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {hobby.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-4 leading-relaxed">
                  {hobby.description}
                </p>
                
                <div className="space-y-2">
                  {hobby.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 ${colorClasses.bg} rounded-full mr-2 flex-shrink-0`}></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Personal Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-xl border-4 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Personal Philosophy</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              "I believe that a well-rounded engineer draws inspiration from diverse experiences. My hobbies not only provide 
              balance to my technical work but also enhance my creativity, problem-solving abilities, and cultural understanding."
            </p>
            <p className="text-gray-600">
              These interests have shaped my perspective on engineering, design, and innovation, making me a more effective 
              collaborator and creative problem-solver in professional environments.
            </p>
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

export default Hobbies;