import React from 'react';
import { Camera, Mail, Phone, ArrowUp } from 'lucide-react';
import { BIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onShowWelcome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowWelcome }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080b] border-t border-white/10 text-stone-400 py-16 px-6 font-sans-clean">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-sky-400/40 bg-white/10 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/images/Logo.png" alt="Obra Creations Logo" className="w-full h-full object-contain p-0.5" style={{ backgroundColor: '#FFFFFF' }}/>
              </div>
              <span className="text-xl font-serif-luxury text-white font-semibold tracking-wider">
                Obra Creations
              </span>
            </div>
            <p className="text-xs text-stone-400 font-light max-w-md">
              Visual storytelling by Daniel Obra. Weddings, prenuptial sessions, milestone debuts, and cinematic drone event highlights.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-stone-300">
            <button
              onClick={onShowWelcome}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Welcome Note
            </button>
            <a href="#portfolio" className="hover:text-sky-300 transition-colors">
              Portfolio Grids
            </a>
            <a href="#video-samples" className="hover:text-sky-300 transition-colors">
              Video Samples
            </a>
            <a href="#bio" className="hover:text-sky-300 transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-sky-300 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-sky-300 transition-colors">
              Contact Us
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Obra Creations by Daniel Obra. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BIO_DATA.phone}`}
              className="text-stone-400 hover:text-white transition-colors"
            >
              {BIO_DATA.phone}
            </a>
            <span>•</span>
            <a
              href={`mailto:${BIO_DATA.email}`}
              className="text-stone-400 hover:text-white transition-colors"
            >
              {BIO_DATA.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
