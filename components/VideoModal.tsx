'use client';

import React, { useEffect, useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { Project } from '../data/types';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
      // Reset error state when project opens
      setVideoError(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className={`relative w-full max-w-6xl mx-auto flex flex-col max-h-[90vh] ${
        project.aspectRatio === 'portrait' ? 'max-w-md' : ''
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4 relative z-10">
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.client} • {project.category}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Container */}
        <div className={`relative bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 ${
          project.aspectRatio === 'portrait' ? 'aspect-[9/16]' : 
          project.aspectRatio === 'square' ? 'aspect-square' : 'aspect-video'
        }`}>
          {!videoError ? (
            <video 
              src={project.videoUrl} 
              poster={project.thumbnailUrl}
              controls 
              autoPlay 
              className="w-full h-full object-contain"
              onError={() => setVideoError(true)}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 p-8 text-center">
              <AlertTriangle className="text-yellow-500 mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">Video Unavailable</h3>
              <p className="text-gray-400 mb-4">Could not load the media file from the path below:</p>
              <div className="bg-black/50 p-4 rounded-lg border border-white/10 max-w-full overflow-x-auto">
                <code className="text-sm font-mono text-red-400">{project.videoUrl}</code>
              </div>
              <p className="text-sm text-gray-500 mt-4">Please check if the file exists in your project folder.</p>
            </div>
          )}
        </div>

        {/* Footer/Details */}
        <div className="mt-6 bg-zinc-900/50 p-6 rounded-xl border border-white/5">
          <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">Project Details</h4>
          <p className="text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;