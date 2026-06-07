'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductImagePanelProps {
  images: ProductImage[];
  bg?: string;
}

export default function ProductImagePanel({ images, bg = 'bg-zinc-950' }: ProductImagePanelProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [origin, setOrigin] = useState('50% 50%');
  const [lupePos, setLupePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLupePos({ x, y });
    setOrigin(`${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`);
  };

  useEffect(() => {
    if (!lightbox) return;
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [lightbox]);

  return (
    <>
      <div className={`md:sticky md:top-0 md:h-screen flex flex-col items-center justify-center ${bg} border-r border-white/5 p-3 pt-16 md:p-4 md:pt-16 gap-3`}>
        <div
          ref={containerRef}
          className="w-full aspect-square relative overflow-hidden"
          style={{ cursor: 'none' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMouseMove}
          onClick={() => setLightbox(true)}
        >
          <Image
            key={images[activeImg].src}
            src={images[activeImg].src}
            alt={images[activeImg].alt}
            fill
            className="object-contain transition-transform duration-200 ease-out"
            style={{
              transform: hovered ? 'scale(2)' : 'scale(1)',
              transformOrigin: origin,
            }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {hovered && (
            <div
              className="absolute pointer-events-none z-20 -translate-x-1/2 -translate-y-1/2"
              style={{ left: lupePos.x, top: lupePos.y }}
            >
              <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-2.5 shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          )}
        </div>
        {images.length > 1 && (
          <div className="flex gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-14 h-14 relative border-2 transition-all ${activeImg === i ? 'border-zinc-800' : 'border-transparent opacity-50 hover:opacity-80'}`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-contain bg-zinc-200" sizes="56px" />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none transition-colors"
            aria-label="Schließen"
          >
            ✕
          </button>
          <div
            className="relative w-full max-w-3xl max-h-[90vh] aspect-square"
            onClick={e => e.stopPropagation()}
          >
            <Image
              key={images[activeImg].src + '-lightbox'}
              src={images[activeImg].src}
              alt={images[activeImg].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 75vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
