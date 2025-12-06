import React from 'react';
import { Layers, ShieldCheck, Award } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-b border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Main Introduction Text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Where your story begins on the journey from idea to reality.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            I combine the ideas I develop for original and creative projects with <strong className="text-white">Google Gemini (Nano Banana)</strong> and <strong className="text-white">VEO 3</strong> technology. I edit them manually. This way, I produce flawless commercials that maintain brand identity and ensure seamless continuity of characters and locations.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Flawless Consistency</h3>
            <p className="text-gray-400 leading-relaxed">
              100% character consistency between scenes using start/end frame techniques, ensuring your protagonist looks the same in every shot.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Brand Safety</h3>
            <p className="text-gray-400 leading-relaxed">
              Flawless product placement without distortion in typography and logos on packaging. Your brand assets remain protected and clear.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="text-green-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">High-End Production</h3>
            <p className="text-gray-400 leading-relaxed">
              Over 50 commercials completed with the highest positive feedback score on the <a href="https://bionluk.com/rsefaaktas34/yapay-zeka-reklam-videolarini-firmaniza-uygun-yapiyorum-776276" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-green-400 transition-colors underline decoration-white/30 underline-offset-4">Bionluk</a> platform.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Introduction;