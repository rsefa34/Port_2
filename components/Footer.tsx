import React from 'react';
import { Mail, Instagram, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Let's work together.</h2>
              <p className="text-gray-400">Reach out for collaborations or freelance projects.</p>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={20} className="text-gray-300 group-hover:text-blue-500" />
                </div>
                <a href="mailto:sirket.rsefa@gmail.com" className="text-lg text-gray-300 hover:text-white transition-colors">
                  sirket.rsefa@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Phone size={20} className="text-gray-300 group-hover:text-green-500" />
                </div>
                <a href="tel:+905399162284" className="text-lg text-gray-300 hover:text-white transition-colors">
                  +90 539 916 22 84
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                   <Instagram size={20} className="text-gray-300 group-hover:text-pink-500" />
                 </div>
                 <a href="https://instagram.com/rsefaaktas" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-white transition-colors">
                   @rsefaaktas
                 </a>
              </div>
              
               <div className="flex items-center gap-4 group">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                   <MapPin size={20} className="text-gray-300 group-hover:text-purple-500" />
                 </div>
                 <span className="text-lg text-gray-300">
                   Istanbul, Turkey
                 </span>
              </div>
            </div>
          </div>

          {/* Bionluk Profile & CTA */}
          <div className="flex flex-col gap-6 md:items-end">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 w-full md:max-w-md hover:border-white/20 transition-colors">
              <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Freelance Services
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Need a custom AI-driven advertising film for your brand? I provide professional video editing and generation services tailored to your company's needs.
              </p>
              <a 
                href="https://bionluk.com/rsefaaktas34/yapay-zeka-reklam-videolarini-firmaniza-uygun-yapiyorum-776276"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-all transform hover:-translate-y-1 group"
              >
                <span className="font-bold text-lg">bionluk</span>
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} R. Sefa Aktaş. All rights reserved.</p>
          <p className="opacity-50">Designed for Impact.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;