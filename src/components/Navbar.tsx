import React, { useState } from 'react';
import { Camera, Mail, Menu, X, ArrowLeft, Phone, Facebook } from 'lucide-react';

interface NavbarProps {
  onShowWelcome: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onShowWelcome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0d11]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single line */}
        <a
          href="#hero"
          className="flex items-center gap-3 text-lg md:text-xl font-serif-luxury tracking-wider text-white font-semibold whitespace-nowrap shrink-0 group"
        >
          <span className="w-8 h-8 rounded-full border border-sky-400/40 bg-white flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform p-0.5">
            <img src="/src/assets/images/Logo.png" alt="Obra Creations Logo" className="w-full h-full object-contain" />
          </span>
          <span>Obra Creations</span>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          <button
            onClick={onShowWelcome}
            className="text-stone-400 hover:text-sky-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Welcome Note</span>
          </button>
          <a
            href="#portfolio"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Portfolio Grids
          </a>
          <a
            href="#video-samples"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-sky-300"
          >
            Video Samples
          </a>
          <a
            href="#mouse-trail-gallery"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Interactive Trail
          </a>
          <a
            href="#bio"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contact Us
          </a>
        </nav>

        {/* Zone 3: Direct Studio Contact Quick Links */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="tel:+639764585099"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            title="Call Daniel Obra"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>+63 976 458 5099</span>
          </a>

          <a
            href="https://www.facebook.com/ObraCreations2019"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            title="Visit Facebook Page"
          >
            <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm transition-all duration-200 whitespace-nowrap shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Book / Inquire</span>
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12141c] border-b border-white/10 px-6 py-6 space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onShowWelcome();
            }}
            className="w-full text-left py-2 text-sky-300 font-medium text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Read Welcome Note</span>
          </button>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-white text-sm"
          >
            Portfolio Grids
          </a>
          <a
            href="#video-samples"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sky-300 hover:text-white text-sm font-medium"
          >
            Video Samples & Cinema
          </a>
          <a
            href="#mouse-trail-gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-white text-sm"
          >
            Interactive Trail Gallery
          </a>
          <a
            href="#bio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-white text-sm"
          >
            About Daniel Obra
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-white text-sm"
          >
            Services & SDE
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-white text-sm"
          >
            Contact Details & Form
          </a>

          {/* Mobile Direct Contacts */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <a
              href="tel:+639764585099"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 font-mono text-xs rounded-lg"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call: +63 976 458 5099</span>
            </a>

            <a
              href="https://www.facebook.com/ObraCreations2019"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-[#1877F2]/20 hover:bg-[#1877F2]/30 text-blue-200 border border-blue-500/30 text-xs rounded-lg"
            >
              <Facebook className="w-4 h-4 text-blue-400" />
              <span>Facebook: ObraCreations2019</span>
            </a>

            <a
              href="mailto:obracreations2022@gmail.com"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-sky-400 text-slate-950 font-semibold text-xs uppercase tracking-wider rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Email: obracreations2022@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
