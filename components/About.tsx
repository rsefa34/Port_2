import React from 'react';
import { Clapperboard, MonitorPlay, Film } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900/50 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image/Visual Side */}
            <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-800 relative z-10 border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1542206395-9f9947c18c27?q=80&w=1000&auto=format&fit=crop" 
                        alt="Recep Sefa Aktaş - Creative Director"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale group-hover:grayscale-0"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                     <div className="absolute bottom-8 left-8 right-8 text-white">
                        <div className="w-12 h-1 bg-blue-500 mb-4 rounded-full"></div>
                        <p className="font-mono text-sm text-blue-400 mb-2 uppercase tracking-widest">Creative AI Director</p>
                        <h3 className="text-3xl font-bold tracking-tight">Recep Sefa Aktaş</h3>
                     </div>
                </div>
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-50 -z-10 rounded-3xl"></div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                    Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Storytelling</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Intelligence</span>.
                </h2>
                
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light mb-10">
                    <p>
                        I am <strong className="text-white font-semibold">Recep Sefa Aktaş</strong>. I am a Creative AI Director who blends traditional filmmaking disciplines with cutting-edge artificial intelligence technologies.
                    </p>
                    <p>
                        I started my career as a scriptwriter and camera assistant; this gave me a deep understanding of both the narrative structure on paper and the mathematics of lighting and composition on set. Today, I bring this experience into the digital world using tools like <strong className="text-white font-medium">VEO 3 (Flow Interface)</strong>, <strong className="text-white font-medium">Kling AI</strong>, and <strong className="text-white font-medium">RunwayML</strong>.
                    </p>
                    <p>
                        As a result, I have completed over <strong className="text-white font-medium">50 commercial projects</strong> for brands where products remain undistorted, packaging text is clearly legible, and the story flows seamlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <a href="#services" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all flex items-center gap-4 group">
                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                           <Clapperboard size={24} />
                        </div>
                        <span className="font-medium text-white">AI Commercial Films</span>
                     </a>
                     
                     <a href="#services" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all flex items-center gap-4 group">
                        <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                           <MonitorPlay size={24} />
                        </div>
                        <span className="font-medium text-white">Social Media Assets</span>
                     </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;