import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Skills from './components/Skills';
import VideoGrid from './components/VideoGrid';
import Footer from './components/Footer';
import About from './components/About';
import VideoModal from './components/VideoModal';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleVideoClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <VideoGrid onVideoClick={handleVideoClick} />
        <About />
        <Services />
        <Skills />
      </main>
      <Footer />
      <VideoModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default App;