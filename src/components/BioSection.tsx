import React from 'react';
import { BIO_DATA } from '../data/portfolioData';
import { Camera, Mail, Phone, CheckCircle2, Film, Sparkles } from 'lucide-react';

export const BioSection: React.FC = () => {
  return (
    <section id="bio" className="py-24 px-6 bg-[#0e1017] border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photographer Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 via-transparent to-white/5 rounded-2xl transform -rotate-1" />

              {/* Main portrait image */}
              <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-stone-900 aspect-[4/5]">
                <img
                  src={BIO_DATA.portraitSrc}
                  alt="Daniel Obra - Founder & Principal Artist of Obra Creations"
                  className="w-full h-full object-cover object-center filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-sky-300 font-mono block mb-1">
                    Founder & Lead Cinematographer
                  </span>
                  <h3 className="text-2xl font-serif-luxury font-medium">Daniel Obra</h3>
                  <p className="text-xs text-stone-300 font-light mt-0.5">
                    Behind the lens since 2019
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
                <Sparkles className="w-4 h-4" />
                <span>The Story Behind Obra Creations</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-normal leading-tight">
                Crafting Timeless Heirlooms from Fleeting Moments
              </h2>
            </div>

            {/* Exact Required User Bio Text */}
            <div className="space-y-5 text-stone-300 font-sans-clean text-base sm:text-lg leading-relaxed font-light">
              <p className="border-l-2 border-sky-400/60 pl-5 text-stone-200">
                {BIO_DATA.exactBioTextParagraph1}
              </p>

              <p className="pl-5">
                {BIO_DATA.exactBioTextParagraph2}
              </p>
            </div>

            {/* Credentials / Pillars */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {BIO_DATA.credentials.map((cred, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-stone-400">{cred.label}</div>
                  <div className="text-base font-serif-luxury text-sky-200 font-semibold mt-0.5">
                    {cred.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Connect CTA with updated contact details */}
            <div className="pt-4 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BIO_DATA.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs tracking-wider rounded-xl transition-all shadow-md shadow-sky-500/20"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BIO_DATA.phone}</span>
                </a>

                <a
                  href={BIO_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 text-xs font-medium rounded-xl transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-blue-400" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Personal Facebook Page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
