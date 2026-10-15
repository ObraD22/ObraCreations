import React, { useState } from 'react';
import { WelcomeView } from './components/WelcomeView';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioGrids } from './components/PortfolioGrids';
import { VideoSamplesSection } from './components/VideoSamplesSection';
import { MouseTrailGallery } from './components/MouseTrailGallery';
import { BioSection } from './components/BioSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ALL_PHOTOS, PhotoItem } from './data/portfolioData';

export default function App() {
  const [view, setView] = useState<'welcome' | 'main'>('welcome');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const handleOpenPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
  };

  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = ALL_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length;
    setSelectedPhoto(ALL_PHOTOS[prevIndex]);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = ALL_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % ALL_PHOTOS.length;
    setSelectedPhoto(ALL_PHOTOS[nextIndex]);
  };

  if (view === 'welcome') {
    return (
      <WelcomeView
        onProceed={() => {
          setView('main');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e5e7eb] font-sans-clean selection:bg-sky-400 selection:text-slate-950">
      <Navbar onShowWelcome={() => setView('welcome')} />

      <main>
        <HeroSection />
        <PortfolioGrids onSelectPhoto={handleOpenPhoto} />
        <VideoSamplesSection />
        <MouseTrailGallery />
        <BioSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer onShowWelcome={() => setView('welcome')} />

      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          onClose={handleClosePhoto}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
        />
      )}
    </div>
  );
}
