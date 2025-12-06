import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Background Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-700 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <a 
          href="#contact"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 animate-fade-in-up hover:bg-white/10 transition-colors cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-gray-300">Available for projects</span>
        </a>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 animate-fade-in-up delay-100">
          Recep Sefa Aktaş -<br />
          AI Director
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          Combining traditional cinematography with advanced <span className="text-white font-medium">VEO 3</span> & <span className="text-white font-medium">Gemini Nano Banana</span> workflows to create flawless commercial narratives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <a href="#work" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Projects <Play size={18} fill="currentColor" />
            </span>
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-medium text-white">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;