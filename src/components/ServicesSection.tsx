import React from 'react';
import { Camera, Film, Compass, Sparkles, Check, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Camera,
      title: 'Full Wedding Photography',
      subtitle: 'From preparations to reception dance',
      features: [
        'Lead photographer Daniel Obra + personal assistant',
        'High-resolution photos',
        'Online private digital gallery on Google Drive',
        'Same-day teaser photos for social sharing',
      ],
      tag: 'Most Cherished',
    },
    {
      icon: Film,
      title: 'Cinematic Same-Day Edit (SDE)',
      subtitle: 'Premier wedding film screened live at your dinner reception',
      features: [
        'Dedicated video editing suite on-site on the wedding day',
        'Polished cinematic film',
        'Drone establishing shots & high-fidelity audio vows capture',
        'Full ceremony and speeches documentary cut included',
      ],
      tag: 'Studio Signature',
    },
    {
      icon: Sparkles,
      title: 'Prenuptial & Creative Sessions',
      subtitle: 'Intimate, relaxed pre-wedding editorial shoot',
      features: [
        'Personalized location scouting (beaches, forests, studios)',
        'Styling consultation and moodboard alignment',
        'Relaxed pacing to capture natural chemistry & laughter',
        'Signature portraits ready for wedding displays',
      ],
      tag: 'Romantic Chemistry',
    },
    {
      icon: Compass,
      title: 'Debuts & Milestone Events',
      subtitle: '18th birthdays, galas, and bespoke gatherings',
      features: [
        'Comprehensive photo and video coverage',
        'Pre-debut creative glamour portrait session',
        'Fast turnaround highlight film',
        'Aerial drone venue and establishing footage',
      ],
      tag: 'Grand Milestones',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
          <Film className="w-4 h-4" />
          <span>Bespoke Coverage & Services</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-normal leading-tight">
          Visual Narratives Tailored to Your Milestone
        </h2>
        <p className="text-stone-400 font-sans-clean text-sm sm:text-base mt-3 font-light">
          We blend technical expertise with cinematic storytelling, utilizing modern 4K cinema gear, aerial drones, and heartfelt documentary approaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-[#12141c] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300 hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-300 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-serif-luxury text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-stone-400 mb-6 leading-relaxed font-light">
                  {service.subtitle}
                </p>

                <ul className="space-y-3 pt-4 border-t border-white/5">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors group-hover:bg-sky-400 group-hover:text-slate-950"
                >
                  <span>Inquire for Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
