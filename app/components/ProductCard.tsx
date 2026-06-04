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
  bg?: string;
  sizes?: string;
}

export default function ProductCard({
  href,
  src,
  alt,
  name,
  price,
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
      <p className="text-zinc-500 text-sm">{price}</p>
    </Link>
  );
}
