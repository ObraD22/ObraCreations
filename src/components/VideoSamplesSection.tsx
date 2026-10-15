import React, { useState, useEffect } from 'react';
import {
  Film,
  Sparkles,
  ExternalLink,
  Play,
  Volume2,
  Video,
  Clapperboard,
  Compass,
  ArrowRight,
  Copy,
  Check,
  FolderOpen,
  Tv,
  LayoutGrid,
  ShieldCheck,
  LogOut,
  User as UserIcon,
} from 'lucide-react';
import { BIO_DATA } from '../data/portfolioData';
import {
  DriveVideoFile,
  PRESET_DRIVE_VIDEOS,
  DRIVE_FOLDER_URL,
  DRIVE_FOLDER_ID,
  fetchDriveFolderFiles,
} from '../services/googleDriveService';
import {
  initAuth,
  googleSignIn,
  logout,
} from '../services/googleAuth';
import type { User } from 'firebase/auth';

export const VideoSamplesSection: React.FC = () => {
  const [videos, setVideos] = useState<DriveVideoFile[]>(PRESET_DRIVE_VIDEOS);
  const [activeVideoId, setActiveVideoId] = useState<string>(PRESET_DRIVE_VIDEOS[0].id);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'theater' | 'grid' | 'folder'>('theater');
  
  // Google Auth states for Google Workspace integration
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, accessToken) => {
        setUser(currentUser);
        setToken(accessToken);
        if (accessToken) {
          fetchDriveFolderFiles(accessToken).then((files) => {
            if (files && files.length > 0) setVideos(files);
          });
        }
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        const files = await fetchDriveFolderFiles(res.accessToken);
        if (files && files.length > 0) setVideos(files);
      }
    } catch (err) {
      console.error('Sign in failed:', err);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setVideos(PRESET_DRIVE_VIDEOS);
  };

  const activeVideo =
    videos.find((v) => v.id === activeVideoId) || videos[0];

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  return (
    <section
      id="video-samples"
      className="py-24 px-6 bg-[#090b10] border-y border-white/10 relative overflow-hidden"
    >
      {/* Background atmospheric ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-sky-400 font-mono mb-3">
              <Film className="w-4 h-4" />
              <span>Cinematic Video Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-normal leading-tight">
              Cinematography & Storytelling in Motion
            </h2>
            <p className="text-stone-400 font-sans-clean text-sm sm:text-base mt-3 max-w-2xl font-light leading-relaxed">
              Every video we produce is a custom piece of storytelling. We believe that a great film requires a natural rhythm, which is why our editing is meticulously tailored to match the beat of the music, the pacing of the event, and the overall visual flow. While we pride ourselves on this polished look, the heart of our work will always be the people in front of the lens. We are committed to preserving real memories, stepping back to cherish genuine interactions and showcasing the true, candid moments exactly as they unfold.
            </p>
          </div>

          {/* Right controls: Google Workspace Auth & Drive Hub */}
          
        </div>

        {/* View Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center p-1 bg-[#13151f] border border-white/10 rounded-xl">
            <button
              onClick={() => setViewMode('theater')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                viewMode === 'theater'
                  ? 'bg-sky-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Theater Screen</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-sky-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Side-by-Side Grid</span>
            </button>

          </div>

          <div className="text-xs font-mono text-stone-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>High-Speed Google Drive Video Streaming</span>
          </div>
        </div>

        {/* MODE 1: Theater Cinema Screen View */}
        {viewMode === 'theater' && (
          <div className="space-y-8">
            <div className="bg-[#12141c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Google Drive Embedded Video Player */}
                <div className="lg:col-span-7 bg-black flex flex-col justify-center relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
                  <div className="relative w-full h-full aspect-video lg:aspect-auto lg:h-[530px] overflow-hidden bg-black flex items-center justify-center">
                    <iframe
                      title={activeVideo.title}
                      src={activeVideo.previewUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 'none' }}
                      allow="autoplay; fullscreen"
                      allowFullScreen={true}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Player Control Bar */}
                  <div className="p-3.5 bg-[#0e1017] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-stone-300 font-mono">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      <span className="font-semibold text-white">{activeVideo.name}</span>
                      <span className="text-stone-500">·</span>
                      <span className="text-stone-400">{activeVideo.specs.source}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Storytelling & Cinematography Breakdown */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-[#13151f] border-t lg:border-t-0 lg:border-l border-white/10">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                        <span className="px-2.5 py-1 rounded bg-sky-400/10 text-sky-300 border border-sky-400/20 uppercase tracking-wider font-semibold">
                          {activeVideo.category}
                        </span>
                        <span className="text-stone-500">·</span>
                        <span className="text-stone-400 font-sans-clean">{activeVideo.couple}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white leading-snug">
                        {activeVideo.title}
                      </h3>
                    </div>

                    {/* Storytelling Capability Highlight */}
                    <div className="space-y-2 rounded-xl bg-white/[0.03] p-4 border border-white/5">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                        <Clapperboard className="w-3.5 h-3.5" />
                        <span>Storytelling Philosophy</span>
                      </div>
                      <p className="text-stone-300 font-sans-clean text-xs sm:text-sm leading-relaxed font-light">
                        {activeVideo.storytellingCaption}
                      </p>
                    </div>

                    {/* Cinematography & Technical Excellence */}
                    <div className="space-y-2 rounded-xl bg-white/[0.03] p-4 border border-white/5">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">
                        <Video className="w-3.5 h-3.5" />
                        <span>Cinematography & Sound Craft</span>
                      </div>
                      <p className="text-stone-300 font-sans-clean text-xs sm:text-sm leading-relaxed font-light">
                        {activeVideo.cinematographyCaption}
                      </p>
                    </div>

                    {/* Signature Pillars */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 block">
                        Signature Narrative Elements
                      </span>
                      <ul className="space-y-1.5">
                        {activeVideo.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs text-stone-300 font-sans-clean"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technical Spec Strip */}
                  <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-[11px] font-mono text-stone-400">
                    <div>
                      <span className="text-stone-500 block text-[10px]">RESOLUTION</span>
                      <span className="text-stone-200">{activeVideo.specs.resolution}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px]">TIMING</span>
                      <span className="text-stone-200">{activeVideo.specs.framerate}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px]">AUDIO MIX</span>
                      <span className="text-stone-200">{activeVideo.specs.audio}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px]">DELIVERABLE</span>
                      <span className="text-stone-200">{activeVideo.specs.source}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Film Selector Buttons */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-mono text-stone-400">
                  Select Video to Stream in Cinema Theater:
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  {videos.length} Direct Google Drive 4K Master Films
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {videos.map((vid, idx) => {
                  const isCurrent = vid.id === activeVideoId;
                  return (
                    <button
                      key={vid.id}
                      onClick={() => setActiveVideoId(vid.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? 'bg-[#151824] border-sky-400 shadow-lg shadow-sky-500/10'
                          : 'bg-[#10121a] border-white/10 hover:border-white/20 hover:bg-[#131520]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono text-sky-300 uppercase tracking-wider font-semibold">
                          Film 0{idx + 1} · {vid.couple}
                        </span>
                        {isCurrent ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-sky-400 text-slate-950 font-semibold">
                            Streaming Now
                          </span>
                        ) : (
                          <span className="text-stone-400 text-xs font-mono flex items-center gap-1">
                            <Play className="w-3 h-3 text-sky-400" />
                            <span>Load Film</span>
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-serif-luxury text-white font-medium line-clamp-1 mb-1">
                        {vid.title}
                      </h4>
                      <p className="text-[11px] text-stone-400 font-sans-clean line-clamp-1 font-light">
                        {vid.name} · {vid.specs.resolution}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: Side-by-Side Responsive Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((vid, idx) => (
              <div
                key={vid.id}
                className="bg-[#12141c] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300"
              >
                <div>
                  {/* Google Drive Preview Player Embed */}
                  <div className="relative aspect-video bg-black overflow-hidden border-b border-white/10">
                    <iframe
                      title={vid.title}
                      src={vid.previewUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 'none' }}
                      allow="autoplay; fullscreen"
                      allowFullScreen={true}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Content Breakdown */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded bg-sky-400/10 text-sky-300 border border-sky-400/20 font-semibold">
                          {vid.category}
                        </span>
                        <span className="text-[11px] font-mono text-stone-400">
                          {vid.name}
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif-luxury text-white leading-snug">
                        {vid.title}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1 font-mono">
                        {vid.specs.resolution} · {vid.specs.framerate} · {vid.specs.audio}
                      </p>
                    </div>

                    {/* Storytelling Caption */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                        <Clapperboard className="w-3.5 h-3.5" />
                        <span>Storytelling Approach</span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-300 font-sans-clean leading-relaxed font-light">
                        {vid.storytellingCaption}
                      </p>
                    </div>

                    {/* Cinematography Caption */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">
                        <Video className="w-3.5 h-3.5" />
                        <span>Cinematography & Audio Master</span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-300 font-sans-clean leading-relaxed font-light">
                        {vid.cinematographyCaption}
                      </p>
                    </div>

                    {/* Pillars */}
                    <div className="space-y-1.5 pt-1">
                      {vid.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-stone-300 font-sans-clean"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="p-6 sm:p-8 pt-0 border-t border-white/5 mt-4 flex items-center justify-end">

                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODE 3: Full Google Drive Folder Vault View */}
        {viewMode === 'folder' && (
          <div className="bg-[#12141c] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-sky-400 font-mono block mb-1">
                  Google Drive Cloud Vault
                </span>
                <h3 className="text-2xl font-serif-luxury text-white">
                  Obra Creations Master Deliverables Folder
                </h3>
                <p className="text-xs text-stone-400 font-mono mt-1">
                  Folder ID: {DRIVE_FOLDER_ID}
                </p>
              </div>

              <a
                href={DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs rounded-xl shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Folder in New Tab</span>
              </a>
            </div>

            {/* Embedded Folder View */}
            <div className="relative w-full h-[550px] rounded-xl overflow-hidden bg-black/50 border border-white/10">
              <iframe
                title="Google Drive Folder Vault"
                src={`https://drive.google.com/embeddedfolderview?id=${DRIVE_FOLDER_ID}#grid`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Video Services Booking Strip */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#121520] via-[#141724] to-[#10131d] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>Full Same-Day Edit (SDE) & 4K Cinema Coverage</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-serif-luxury text-white font-normal">
              Want your celebration crafted into an unforgettable film?
            </h4>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              Every video project includes dedicated multi-angle coverage, drone aerial perspectives, live vow audio capture, and master deliverables stored securely in private Google Drive client galleries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs  tracking-wider rounded-xl transition-all shadow-md shadow-sky-500/20 cursor-pointer"
            >
              <span>Inquire for Video Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${BIO_DATA.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 text-xs font-mono rounded-xl transition-colors"
            >
              <span>Call: {BIO_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
