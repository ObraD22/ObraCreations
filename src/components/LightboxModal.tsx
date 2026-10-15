import React, { useEffect } from 'react';
import { PhotoItem } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Mail, Phone, Facebook } from 'lucide-react';

interface LightboxModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-sky-300 font-mono">
            {photo.folderCategory}
          </span>
          <span className="text-stone-500">·</span>
          <span className="text-xs text-stone-400 font-mono">{photo.location}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close photo view"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next controls */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 hover:border-white/30 transition-all z-20 cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 hover:border-white/30 transition-all z-20 cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main modal container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row bg-[#11131a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo view */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-[500px]">
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-full max-h-[75vh] object-contain"
          />
        </div>

        {/* Info sidebar */}
        <div className="w-full lg:w-80 p-6 flex flex-col justify-between bg-[#11131a] border-t lg:border-t-0 lg:border-l border-white/10 text-white space-y-6 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-mono text-sky-300 uppercase tracking-wider block mb-1">
                {photo.folderCategory}
              </span>
              <h3 className="text-xl font-serif-luxury text-white font-medium">
                {photo.title}
              </h3>
            </div>

            <p className="text-xs text-stone-300 font-sans-clean leading-relaxed font-light">
              {photo.caption}
            </p>

            <div className="space-y-2 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>{photo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Calendar className="w-3.5 h-3.5 text-stone-500" />
                <span>Captured in {photo.year}</span>
              </div>
            </div>

            {/* Camera EXIF Technical Details */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono mb-2">
                <Camera className="w-3.5 h-3.5 text-sky-300" />
                <span>Technical Specifications</span>
              </div>
              <div className="bg-black/40 rounded-lg p-3 text-[11px] font-mono space-y-1 text-stone-300 border border-white/5">
                <div><span className="text-stone-500">Camera:</span> {photo.exif.camera}</div>
                <div><span className="text-stone-500">Glass:</span> {photo.exif.lens}</div>
                <div><span className="text-stone-500">Exposure:</span> {photo.exif.settings}</div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <a
              href={`mailto:obracreations2022@gmail.com?subject=Inquiry regarding ${encodeURIComponent(photo.title)} (${photo.folderCategory})`}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Inquire via Email</span>
            </a>
            <div className="flex gap-2">
              <a
                href="tel:+639764585099"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 font-mono text-xs rounded-lg transition-colors"
              >
                <Phone className="w-3 h-3 text-sky-400" />
                <span>Call Studio</span>
              </a>
              <a
                href="https://www.facebook.com/ObraCreations2019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 text-xs rounded-lg transition-colors"
              >
                <Facebook className="w-3 h-3 text-blue-400" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
