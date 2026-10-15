import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, MousePointer2, RefreshCw } from 'lucide-react';

const OBRA_ASSETS = [
  '/src/assets/images/Obra Creations Assets/Weddings/01 - Tobby and MJ/MJ&Tobby214.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/01 - Tobby and MJ/MJ&Tobby135.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/01 - Tobby and MJ/MJ&Tobby195.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/01 - Tobby and MJ/MJ&Tobby368.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/01 - Tobby and MJ/TobbyAndMJ12.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/02 - Malachi and Vash/MalachiAndVash-12.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/02 - Malachi and Vash/MalachiAndVash-7.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/02 - Malachi and Vash/MalachiAndVash-11.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/01 - Tobby and MJ/MJ&Tobby283.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/02 - Malachi and Vash/MalachiAndVash-6.jpg',
  '/src/assets/images/Obra Creations Assets/Birthdays/01 - 86th/Fedy86th-11.jpg',
  '/src/assets/images/Obra Creations Assets/Birthdays/01 - 86th/Fedy86th-4.jpg',
  '/src/assets/images/Obra Creations Assets/Birthdays/01 - 86th/Fedy86th-9.jpg',
  '/src/assets/images/Obra Creations Assets/Birthdays/03 - 7th/Jireh7th-4.jpg',
  '/src/assets/images/Obra Creations Assets/Birthdays/03 - 7th/Jireh7th-8.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/04 - Intimate Wedding/KomangAndMG-3.jpg',
  '/src/assets/images/Obra Creations Assets/Birthdays/03 - 7th/Jireh7th.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/04 - Intimate Wedding/KomangAndMG-8.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/04 - Intimate Wedding/KomangAndMG.jpg',
  '/src/assets/images/Obra Creations Assets/Weddings/03 - Civil Wedding/CivilWedding-6.jpg',
];

export const MouseTrailGallery: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const globalIndex = useRef(0);
  const last = useRef({ x: 0, y: 0 });
  const hasInteractedRef = useRef(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [activeCount, setActiveCount] = useState(0);
  const inactivityTimerRef = useRef<number | null>(null);

  const trailLength = 6;
  const distanceThreshold = 65; // pixels
  const rotationRange = 14; // degrees

  const activate = useCallback(
    (image: HTMLImageElement, x: number, y: number) => {
      const rotation = (Math.random() - 0.5) * rotationRange * 2;
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.style.zIndex = String(globalIndex.current);
      image.style.setProperty('--rotation', `${rotation}deg`);
      image.dataset.status = 'active';
      last.current = { x, y };

      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true;
        setHasInteracted(true);
      }
      setActiveCount((prev) => prev + 1);
    },
    [rotationRange]
  );

  const triggerBurst = useCallback(() => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const images = imagesRef.current;
    if (!images.length) return;

    // Reset all
    images.forEach((img) => {
      if (img) img.dataset.status = 'inactive';
    });

    // Spread 6 images artistically across the canvas
    const points = [
      { x: rect.width * 0.22, y: rect.height * 0.38 },
      { x: rect.width * 0.45, y: rect.height * 0.62 },
      { x: rect.width * 0.68, y: rect.height * 0.35 },
      { x: rect.width * 0.32, y: rect.height * 0.72 },
      { x: rect.width * 0.78, y: rect.height * 0.65 },
      { x: rect.width * 0.52, y: rect.height * 0.28 },
    ];

    points.forEach((pt, i) => {
      setTimeout(() => {
        const img = images[i % images.length];
        if (img) {
          globalIndex.current++;
          activate(img, pt.x, pt.y);
        }
      }, i * 90);
    });
  }, [activate]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const distanceFromLast = (x: number, y: number) =>
      Math.hypot(x - last.current.x, y - last.current.y);

    const resetInactivityTimer = () => {
      if (inactivityTimerRef.current) {
        window.clearTimeout(inactivityTimerRef.current);
      }
      inactivityTimerRef.current = window.setTimeout(() => {
        // Gently retire older images if inactive
        const images = imagesRef.current;
        if (!images) return;
        images.forEach((img) => {
          if (img && img.dataset.status === 'active') {
            img.dataset.status = 'inactive';
          }
        });
      }, 4000);
    };

    const handleOnMove = (clientX: number, clientY: number) => {
      const rect = stage.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Ensure cursor is within stage boundaries
      if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
        return;
      }

      if (distanceFromLast(x, y) > distanceThreshold) {
        const images = imagesRef.current;
        if (!images || images.length === 0) return;

        const lead = images[globalIndex.current % images.length];
        const tail =
          images[(globalIndex.current - trailLength + images.length) % images.length];

        if (lead) activate(lead, x, y);
        if (tail && globalIndex.current >= trailLength) {
          tail.dataset.status = 'inactive';
        }

        globalIndex.current++;
        resetInactivityTimer();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleOnMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        handleOnMove(touch.clientX, touch.clientY);
      }
    };

    stage.addEventListener('mousemove', handleMouseMove);
    stage.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      stage.removeEventListener('mousemove', handleMouseMove);
      stage.removeEventListener('touchmove', handleTouchMove);
      if (inactivityTimerRef.current) {
        window.clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [activate]);

  return (
    <section
      id="mouse-trail-gallery"
      className="relative w-full overflow-hidden bg-[#090a0e] text-white border-y border-white/10 py-16 sm:py-20 select-none"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sky-400 font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Cursor Cascade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury text-white font-normal leading-tight">
            Fleeting Moments, In Motion
          </h2>
          <p className="text-stone-400 font-sans-clean text-sm sm:text-base max-w-xl mt-2 font-light">
            Glide your cursor across the canvas or swipe on mobile to unveil a dynamic trail of curated memories from the Obra archive.
          </p>
        </div>

        {/* Interaction status & burst action */}
        <div className="flex items-center gap-3">
          <button
            onClick={triggerBurst}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-stone-200 transition-all hover:border-sky-400/40 cursor-pointer"
            title="Scatter a spontaneous gallery burst across the canvas"
          >
            <RefreshCw className="w-3.5 h-3.5 text-sky-400" />
            <span>Scatter Gallery</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage with exact requested HTML elements */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={stageRef}
          className="mouse-trail-stage relative w-full h-[520px] sm:h-[620px] md:h-[700px] rounded-2xl bg-[#06070a] border border-white/10 overflow-hidden cursor-crosshair shadow-2xl"
        >
          {/* Subtle background ambient mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.06),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090a0e]/40 via-transparent to-[#090a0e]/40 pointer-events-none" />

          {/* Central invitation indicator (fades out subtly after interaction) */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-700 ${
              hasInteracted ? 'opacity-20 hover:opacity-40' : 'opacity-85'
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-4 animate-pulse">
              <MousePointer2 className="w-6 h-6 transform -rotate-12" />
            </div>
            <p className="text-sm sm:text-base uppercase tracking-[0.25em] font-mono text-stone-300">
              Move Cursor Across Canvas
            </p>
            <p className="text-xs text-stone-500 font-light mt-1">
              or swipe with your finger on touch screens
            </p>
          </div>

          {/* 
            Exact converted HTML code elements requested by user:
            Using the photos in the Obra Creations Assets
          */}
          <img
            ref={(el) => {
              imagesRef.current[0] = el;
            }}
            className="image"
            data-index="0"
            data-status="inactive"
            src={OBRA_ASSETS[0]}
            alt="Obra Creations Wedding Memory 1"
          />
          <img
            ref={(el) => {
              imagesRef.current[1] = el;
            }}
            className="image"
            data-index="1"
            data-status="inactive"
            src={OBRA_ASSETS[1]}
            alt="Obra Creations Wedding Memory 2"
          />
          <img
            ref={(el) => {
              imagesRef.current[2] = el;
            }}
            className="image"
            data-index="2"
            data-status="inactive"
            src={OBRA_ASSETS[2]}
            alt="Obra Creations Wedding Memory 3"
          />
          <img
            ref={(el) => {
              imagesRef.current[3] = el;
            }}
            className="image"
            data-index="3"
            data-status="inactive"
            src={OBRA_ASSETS[3]}
            alt="Obra Creations Wedding Memory 4"
          />
          <img
            ref={(el) => {
              imagesRef.current[4] = el;
            }}
            className="image"
            data-index="4"
            data-status="inactive"
            src={OBRA_ASSETS[4]}
            alt="Obra Creations Wedding Memory 5"
          />
          <img
            ref={(el) => {
              imagesRef.current[5] = el;
            }}
            className="image"
            data-index="5"
            data-status="inactive"
            src={OBRA_ASSETS[5]}
            alt="Obra Creations Wedding Memory 6"
          />
          <img
            ref={(el) => {
              imagesRef.current[6] = el;
            }}
            className="image"
            data-index="6"
            data-status="inactive"
            src={OBRA_ASSETS[6]}
            alt="Obra Creations Wedding Memory 7"
          />
          <img
            ref={(el) => {
              imagesRef.current[7] = el;
            }}
            className="image"
            data-index="7"
            data-status="inactive"
            src={OBRA_ASSETS[7]}
            alt="Obra Creations Wedding Memory 8"
          />
          <img
            ref={(el) => {
              imagesRef.current[8] = el;
            }}
            className="image"
            data-index="8"
            data-status="inactive"
            src={OBRA_ASSETS[8]}
            alt="Obra Creations Wedding Memory 9"
          />
          <img
            ref={(el) => {
              imagesRef.current[9] = el;
            }}
            className="image"
            data-index="9"
            data-status="inactive"
            src={OBRA_ASSETS[9]}
            alt="Obra Creations Wedding Memory 10"
          />
          <img
            ref={(el) => {
              imagesRef.current[10] = el;
            }}
            className="image"
            data-index="10"
            data-status="inactive"
            src={OBRA_ASSETS[10]}
            alt="Obra Creations Birthday Memory 11"
          />
          <img
            ref={(el) => {
              imagesRef.current[11] = el;
            }}
            className="image"
            data-index="11"
            data-status="inactive"
            src={OBRA_ASSETS[11]}
            alt="Obra Creations Birthday Memory 12"
          />
          <img
            ref={(el) => {
              imagesRef.current[12] = el;
            }}
            className="image"
            data-index="12"
            data-status="inactive"
            src={OBRA_ASSETS[12]}
            alt="Obra Creations Birthday Memory 13"
          />
          <img
            ref={(el) => {
              imagesRef.current[13] = el;
            }}
            className="image"
            data-index="13"
            data-status="inactive"
            src={OBRA_ASSETS[13]}
            alt="Obra Creations Birthday Memory 14"
          />
          <img
            ref={(el) => {
              imagesRef.current[14] = el;
            }}
            className="image"
            data-index="14"
            data-status="inactive"
            src={OBRA_ASSETS[14]}
            alt="Obra Creations Birthday Memory 15"
          />
          <img
            ref={(el) => {
              imagesRef.current[15] = el;
            }}
            className="image"
            data-index="15"
            data-status="inactive"
            src={OBRA_ASSETS[15]}
            alt="Obra Creations Wedding Memory 16"
          />
          <img
            ref={(el) => {
              imagesRef.current[16] = el;
            }}
            className="image"
            data-index="16"
            data-status="inactive"
            src={OBRA_ASSETS[16]}
            alt="Obra Creations Birthday Memory 17"
          />
          <img
            ref={(el) => {
              imagesRef.current[17] = el;
            }}
            className="image"
            data-index="17"
            data-status="inactive"
            src={OBRA_ASSETS[17]}
            alt="Obra Creations Wedding Memory 18"
          />
          <img
            ref={(el) => {
              imagesRef.current[18] = el;
            }}
            className="image"
            data-index="18"
            data-status="inactive"
            src={OBRA_ASSETS[18]}
            alt="Obra Creations Wedding Memory 19"
          />
          <img
            ref={(el) => {
              imagesRef.current[19] = el;
            }}
            className="image"
            data-index="19"
            data-status="inactive"
            src={OBRA_ASSETS[19]}
            alt="Obra Creations Wedding Memory 20"
          />

          {/* Bottom subtle metadata tag */}
          <div className="absolute bottom-4 right-6 pointer-events-none flex items-center gap-2 text-xs font-mono text-stone-500">
            <span>Trail Reveal Mode</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>{activeCount > 0 ? `${activeCount} Unveiled` : 'Interactive'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
