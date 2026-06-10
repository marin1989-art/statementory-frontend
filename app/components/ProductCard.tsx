'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  href: string;
  src: string;
  alt: string;
  name: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  bg?: string;
  sizes?: string;
}

export default function ProductCard({
  href,
  src,
  alt,
  name,
  price,
  oldPrice,
  badge,
  bg = 'bg-zinc-900',
  sizes = '(max-width: 768px) 100vw, 33vw',
}: ProductCardProps) {
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

  const parsePrice = (p: string) => parseFloat(p.replace(/[^\d,]/g, '').replace(',', '.'));
  const saving = oldPrice ? parsePrice(oldPrice) - parsePrice(price) : 0;
  const savingLabel = saving > 0
    ? `Du sparst ${Number.isInteger(saving) ? saving : saving.toFixed(2).replace('.', ',')} €`
    : '';

  return (
    <Link href={href} className="group cursor-pointer">
      <div
        ref={containerRef}
        className={`aspect-square ${bg} border border-white/5 group-hover:border-white/20 transition-colors mb-4 overflow-hidden relative`}
        style={{ cursor: 'none' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {badge && (
          <span className="absolute top-3 left-3 z-30 bg-white text-black text-[10px] font-black tracking-[0.15em] uppercase px-2.5 py-1.5">
            {badge}
          </span>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-200 ease-out"
          style={{
            transform: hovered ? 'scale(2)' : 'scale(1)',
            transformOrigin: origin,
          }}
          sizes={sizes}
        />

        {hovered && (
          <div
            className="absolute pointer-events-none z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: lupePos.x, top: lupePos.y }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-2.5 shadow-lg">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <p className="font-bold uppercase tracking-wider">{name}</p>
      {oldPrice ? (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-white text-sm font-bold">{price}</span>
          <span className="text-zinc-600 text-sm line-through decoration-1">{oldPrice}</span>
          {savingLabel && (
            <span className="text-[11px] tracking-wider uppercase text-green-400 border border-green-400/30 px-2 py-0.5">
              {savingLabel}
            </span>
          )}
        </div>
      ) : (
        <p className="text-zinc-500 text-sm">{price}</p>
      )}
    </Link>
  );
}
