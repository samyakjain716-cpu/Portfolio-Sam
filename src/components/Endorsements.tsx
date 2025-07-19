import React, { useEffect, useRef } from 'react';
import { Quote, Star, Linkedin, Building } from 'lucide-react';

const Endorsements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.endorsement-card');
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

  const endorsements = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Senior Engineering Manager",
      company: "Advanced Manufacturing Solutions",
      photo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      message: "Samyak is an exceptional mechanical engineer with outstanding technical skills and leadership qualities. His innovative approach to automation systems resulted in significant productivity improvements. He consistently delivers high-quality work and is an excellent team player.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/rajesh-kumar-eng",
      relationship: "Direct Manager"
    },
    {
      name: "Prof. Dr. Michael Weber",
      designation: "Professor of Mechanical Engineering",
      company: "Technical University of Munich",
      photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      message: "I had the pleasure of collaborating with Samyak on a research project. His analytical thinking and problem-solving abilities are remarkable. His understanding of German engineering principles and dedication to precision make him an ideal candidate for German companies.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/michael-weber-tum",
      relationship: "Research Collaborator"
    },
    {
      name: "Priya Sharma",
      designation: "Project Director",
      company: "Precision Engineering Works",
      photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      message: "Samyak's expertise in precision manufacturing and quality control is impressive. He successfully led multiple complex projects and consistently exceeded expectations. His attention to detail and commitment to excellence align perfectly with German engineering standards.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/priya-sharma-eng",
      relationship: "Former Colleague"
    },
    {
      name: "Thomas Mueller",
      designation: "Senior Consultant",
      company: "German Engineering Consultancy",
      photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      message: "Samyak demonstrated exceptional technical competence during our consulting engagement. His ability to adapt to German engineering methodologies and his proactive approach to learning German culture impressed our entire team. Highly recommended for German engineering roles.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/thomas-mueller-gec",
      relationship: "Client"
    },
    {
      name: "Arun Patel",
      designation: "Lead Design Engineer",
      company: "Industrial Automation Systems",
      photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300",
      message: "Working with Samyak was a great experience. His innovative solutions for automation challenges and his collaborative approach made our projects successful. He has the technical depth and cultural adaptability needed for international engineering roles.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/arun-patel-automation",
      relationship: "Team Lead"
    },
    {
      name: "Lisa Schmidt",
      designation: "HR Director - Engineering",
      company: "German Automotive Group",
      photo: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
      message: "Samyak's profile stood out during our talent assessment. His technical qualifications, combined with his genuine interest in German engineering culture and basic German language skills, make him an excellent fit for our international engineering teams.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/lisa-schmidt-hr",
      relationship: "Recruiter Assessment"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={`${index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="endorsements" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
              Professional Endorsements
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Testimonials from colleagues, managers, and industry professionals who have worked with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {endorsements.map((endorsement, index) => (
            <div 
              key={index} 
              className="endorsement-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 group opacity-0 translate-y-8 border-4 border-gray-200 hover:border-blue-200"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <Quote className="w-6 h-6 text-blue-700" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {renderStars(endorsement.rating)}
                </div>
              </div>

              {/* Message */}
              <blockquote className="text-gray-700 text-center mb-6 leading-relaxed italic">
                "{endorsement.message}"
              </blockquote>

              {/* Profile */}
              <div className="flex items-center space-x-4 pt-4 border-t-2 border-gray-200">
                <div className="relative">
                  <img 
                    src={endorsement.photo} 
                    alt={endorsement.name}
                    className="w-16 h-16 rounded-full object-cover border-3 border-blue-200 group-hover:border-blue-400 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {endorsement.name}
                  </h4>
                  <p className="text-sm text-blue-700 font-medium">{endorsement.designation}</p>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Building size={12} className="mr-1" />
                    <span>{endorsement.company}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{endorsement.relationship}</p>
                </div>

                <a 
                  href={endorsement.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300 group-hover:scale-110 transform"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-xl border-4 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Add Your Endorsement?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Have you worked with me? I'd appreciate your professional endorsement and feedback about our collaboration.
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
              Get in Touch
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

export default Endorsements;