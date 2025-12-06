'use client';

import React, { useState } from 'react';
import { PROJECTS } from '../data/constants';
import { Project, FilterType } from '../data/types';
import { Play } from 'lucide-react';

interface VideoGridProps {
  onVideoClick: (project: Project) => void;
}

const ProjectCard: React.FC<{ project: Project; onClick: (p: Project) => void }> = ({ project, onClick }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer bg-gray-900 border border-white/5 mb-6"
      onClick={() => onClick(project)}
    >
      {/* Container - relative positioning for overlays */}
      <div className="relative w-full">
        
        {!hasError ? (
          <img 
            src={project.thumbnailUrl} 
            alt={project.title}
            // Fit width to column, height adjusts automatically to preserve aspect ratio
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            onLoad={() => {
              console.log(`[Image Loaded] Successfully loaded thumbnail for "${project.title}" (${project.thumbnailUrl})`);
            }}
            onError={(e) => {
              const target = e.currentTarget;
              console.error(`[Image Load Error]
                Project: "${project.title}"
                Configured URL: "${project.thumbnailUrl}"
                Resolved URL: "${target.src}"
                Natural Width: ${target.naturalWidth}
                Natural Height: ${target.naturalHeight}
                Timestamp: ${new Date().toISOString()}
              `);
              setHasError(true);
            }}
          />
        ) : (
          // Fallback: Use fixed aspect ratio if image fails to load so layout doesn't collapse
          <div className={`w-full flex flex-col items-center justify-center bg-zinc-800 p-4 text-center border-2 border-red-500/20 ${
            project.aspectRatio === 'portrait' ? 'aspect-[9/16]' : 
            project.aspectRatio === 'square' ? 'aspect-square' : 'aspect-video'
          }`}>
             <span className="text-red-400 font-bold text-xs uppercase mb-2">Image Not Found</span>
             <code className="text-[10px] text-gray-400 break-all bg-black/50 p-2 rounded w-full font-mono">
               {project.thumbnailUrl}
             </code>
          </div>
        )}
        
        {/* Overlay - Only show if no error or on top of image */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
           <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
             <Play fill="white" className="text-white ml-1" />
           </div>
        </div>

        {/* Info Badge (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 block">
            {project.client}
          </span>
          <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
          <p className="text-sm text-gray-300 mt-1 line-clamp-2">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

const VideoGrid: React.FC<VideoGridProps> = ({ onVideoClick }) => {
  const [filter, setFilter] = useState<FilterType>('All');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
            <p className="text-gray-400">A curated selection of commercial and creative projects.</p>
          </div>
          
        </div>

        {/* Masonry Layout Simulation using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={onVideoClick} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;