import React from 'react';
import { ArrowRight, Camera, Sparkles, Film, Heart } from 'lucide-react';

interface WelcomeViewProps {
  onProceed: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onProceed }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#090a0d] text-white flex flex-col justify-between overflow-hidden">
      {/* Background cinematic imagery with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/WelcomeBG.jpg"
          alt="Obra Creations Cinematic Photography"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-110 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Subtle gradient vignette to maximize contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a0d]/90 via-[#090a0d]/75 to-[#090a0d]/95 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#090a0d]/50 to-[#090a0d]" />
      </div>

      {/* Top bar branding */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-sky-400/40 bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
            <img src="/src/assets/images/Logo.png" alt="Obra Creations Logo" className="w-full h-full object-contain p-1" style={{ backgroundColor: '#FFFFFF' }}/>
          </div>
          <div>
            <h1 className="text-xl font-serif-luxury tracking-widest uppercase text-white font-semibold">
              Obra Creations
            </h1>
            <p className="text-[11px] tracking-widest uppercase text-stone-400 font-sans-clean">
              Photo & Video Services by Daniel Obra
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-xs uppercase tracking-widest text-stone-400 font-sans-clean">
          <span>Est. 2019</span>
          <span className="w-1 h-1 rounded-full bg-sky-400/60" />
          <span>Weddings · Prenup · Debuts · Events</span>
        </div>
      </header>

      {/* Main welcome statement container */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 md:py-16 my-auto">
        <div className="bg-[#12141a]/85 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          {/* Kicker badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sky-400 text-xs uppercase tracking-[0.25em] font-semibold">
              Welcome to the Studio
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-serif-luxury text-stone-100 font-normal leading-tight mb-8">
            Where your most cherished moments are transformed into{' '}
            <span className="italic text-sky-200">timeless visual masterpieces</span>.
          </h2>

          {/* Exact User Text Divided by Paragraphs for Beautiful Editorial Flow */}
          <div className="space-y-6 text-stone-300 font-sans-clean text-base md:text-lg leading-relaxed font-light">
            <p>
              Welcome to <span className="font-bold text-white">Obra Creations</span>, where your most cherished moments are transformed into timeless visual masterpieces. As a premier photo and video studio, we specialize in capturing the authentic emotion, beauty, and energy of your unique story. Whether it is the quiet intimacy of a prenuptial session, the grand celebration of a wedding, or the vibrant atmosphere of a special event, our goal is to frame your memories with artistic precision and creative flair.
            </p>

            <p>
              With years of dedicated experience behind the lens, we seamlessly blend technical expertise with cinematic storytelling. From breathtaking aerial drone shots to compelling same-day edit videos, we utilize modern techniques to deliver visual narratives that truly stand out. We don’t just take photos or record videos; we craft immersive, high-quality media that allows you to relive your most precious milestones for years to come.
            </p>

            <p>
              At <span className="font-bold text-white">Obra Creations</span>, we believe that every client has a story waiting to be beautifully told. We pride ourselves on a personalized, tailored approach, ensuring you feel completely relaxed and confident in front of the camera. Let us turn your fleeting moments into a lasting obra—a true work of art.
            </p>

            <p className="font-normal text-sky-100/90 pt-2 border-t border-white/10">
              Let's collaborate to bring your vision to life. Connect with us today, and let's start creating together.
            </p>
          </div>

          {/* Primary Action Button & Quick Contacts */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={onProceed}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-medium text-sm md:text-base rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Proceed to Main Portfolio</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-300">
              <a
                href="tel:+639764585099"
                className="hover:text-sky-300 transition-colors"
              >
                +639764585099
              </a>
              <span className="text-stone-600">•</span>
              <a
                href="https://www.facebook.com/ObraCreations2019"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors"
              >
                fb/ObraCreations2019
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer preview strip */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 border-t border-white/10 text-stone-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 font-sans-clean">
        <p>© {new Date().getFullYear()} Obra Creations by Daniel Obra. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-3 text-stone-400 text-xs font-mono">
          <a href="tel:+639764585099" className="hover:text-white transition-colors">
            +639764585099
          </a>
          <span>•</span>
          <a
            href="https://www.facebook.com/ObraCreations2019"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Facebook
          </a>
          <span>•</span>
          <a href="mailto:obracreations2022@gmail.com" className="hover:text-white transition-colors">
            obracreations2022@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};
