import React, { useState } from 'react';
import {
  PORTFOLIO_CATEGORIES,
  PhotoItem,
  PortfolioCategory,
} from '../data/portfolioData';
import { Maximize2, Folder, Camera, MapPin, Calendar, SlidersHorizontal } from 'lucide-react';

interface PortfolioGridsProps {
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const PortfolioGrids: React.FC<PortfolioGridsProps> = ({ onSelectPhoto }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const visibleCategories =
    selectedFilter === 'all'
      ? PORTFOLIO_CATEGORIES
      : PORTFOLIO_CATEGORIES.filter((c) => c.slug === selectedFilter);

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
            <Camera className="w-4 h-4" />
            <span>Curated Portfolio Collections</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-normal leading-tight">
            Capturing the Essence of Every Milestone
          </h2>
          <p className="text-stone-400 font-sans-clean text-sm sm:text-base mt-2 max-w-2xl font-light">
            Organized across our primary studio focus areas. Each collection features a curated 4-photo grid showcasing emotional authenticity, cinematic light, and heirloom quality.
          </p>
        </div>


      </div>

      {/* Render Each Category with its Dedicated 4-Photo Grid */}
      <div className="space-y-24">
        {visibleCategories.map((category: PortfolioCategory, catIndex: number) => (
          <div
            key={category.id}
            className="space-y-8"
          >
            {/* Category Banner / Folder Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-white/5">
              <div>
                {/* Clean unboxed metadata separator */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5 font-mono">
                  <span className="flex items-center gap-1 text-sky-300/80">
                    <Folder className="w-3.5 h-3.5" />
                    <span>{category.folderName}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Collection {String(catIndex + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                  {category.title}
                </h3>
                <p className="text-stone-300 text-sm font-sans-clean mt-1 italic">
                  "{category.subtitle}"
                </p>
              </div>

              <p className="text-stone-400 text-xs sm:text-sm font-sans-clean max-w-md font-light leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* The 4-Photo Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.photos.map((photo, photoIndex) => (
                <div
                  key={photo.id}
                  onClick={() => onSelectPhoto(photo)}
                  className="group relative bg-[#13151c] rounded-xl overflow-hidden border border-white/10 hover:border-sky-400/50 transition-all duration-300 shadow-md hover:shadow-2xl cursor-pointer flex flex-col"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-stone-900">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Quick Lightbox Action Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <span className="text-xs text-sky-200 font-mono flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View High-Res</span>
                      </span>
                      <span className="text-[11px] text-stone-300 font-mono">
                        #{photoIndex + 1}
                      </span>
                    </div>

                    {/* Camera Badge in Top Right */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[10px] font-mono text-stone-200 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                        {photo.exif.camera}
                      </span>
                    </div>
                  </div>

                  {/* Photo Details & Typography */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="text-base font-serif-luxury text-white group-hover:text-sky-200 transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-stone-400 line-clamp-2 mt-1 font-light leading-relaxed">
                        {photo.caption}
                      </p>
                    </div>

                    {/* Unboxed Metadata Line with subtle separators */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-stone-500 font-sans-clean">
                      <span className="flex items-center gap-1 truncate max-w-[140px]">
                        <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                        <span className="truncate">{photo.location}</span>
                      </span>
                      <span className="font-mono text-stone-400 shrink-0">
                        {photo.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
