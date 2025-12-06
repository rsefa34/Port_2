import React from 'react';
import { SERVICES } from '../constants';
import { Clapperboard, Terminal, SlidersHorizontal, PenLine } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Video: Clapperboard,
  Terminal: Terminal,
  Sliders: SlidersHorizontal,
  Pen: PenLine,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-xl">
            Bridging the gap between creative vision and artificial intelligence to deliver next-generation visual content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || Clapperboard;
            return (
              <div 
                key={service.title} 
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;