import React from 'react';
import { SKILLS } from '../data/constants';
import { Sparkles, Bot, Scissors, Aperture, Image, Smartphone } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sparkle: Sparkles,
  Bot: Bot,
  Scissors: Scissors,
  Aperture: Aperture,
  Image: Image,
  Smartphone: Smartphone
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black/95 relative border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-xl">
            Leveraging industry-standard tools and cutting-edge AI to deliver premium visual content.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill) => {
            const Icon = iconMap[skill.iconName] || Sparkles;
            return (
              <div 
                key={skill.name} 
                className="group relative p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className={`p-3 rounded-xl bg-white/5 text-white group-hover:bg-white/10 transition-colors`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium text-sm md:text-base text-gray-200">{skill.name}</h3>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{skill.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;