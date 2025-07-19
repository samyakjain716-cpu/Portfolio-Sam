import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import WorkExperience from './components/WorkExperience';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import Endorsements from './components/Endorsements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedProject, setSelectedProject] = React.useState(null);

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Projects onProjectSelect={setSelectedProject} />
        <WorkExperience />
        <Achievements />
        <Hobbies />
        <Endorsements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;