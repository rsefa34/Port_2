'use client';

import React, { useState } from 'react';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Services from '../components/Services';
import Skills from '../components/Skills';
import VideoGrid from '../components/VideoGrid';
import About from '../components/About';
import VideoModal from '../components/VideoModal';
import { Project } from '../data/types';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleVideoClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Hero />
      <Introduction />
      <VideoGrid onVideoClick={handleVideoClick} />
      <About />
      <Services />
      <Skills />
      <VideoModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}