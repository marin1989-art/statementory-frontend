'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/Nav';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'] as const;
type Size = typeof SIZES[number];

export default function DenkenStattFolgenPage() {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState('');

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Bitte wähle eine Größe aus.');
      return;
    }
    setError('');
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <main className="min-h-screen bg-black text-white">

      <Nav />

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

        <div className="md:sticky md:top-0 md:h-screen flex items-center justify-center bg-zinc-950 border-r border-white/5 p-12 pt-24">
          <div className="w-full max-w-md aspect-square relative overflow-hidden">
            <img
              src="/denkenstattfolgen.png"
              alt="Denken statt Folgen — T-Shirt Mockup"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center px-12 pt-32 pb-24 max-w-xl">

          <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-6">
            <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-500">Denken statt Folgen</span>
          </p>

          <h1 className="text-6xl font-black uppercase tracking-tight leading-[0.9] mb-2">
            Denken
          </h1>
          <h1 className="text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
            statt Folgen.
          </h1>

          <p className="text-3xl font-bold tracking-wide mb-1">39,90 €</p>
          <p className="text-xs text-zinc-600 tracking-widest uppercase mb-10">
            inkl. MwSt. · Versand ab 4,90 €
          </p>

          <div className="w-8 border-t border-white/10 mb-10" />

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs tracking-[0.3em] uppercase text-zinc-400">Größe</p>
              {selectedSize && (
                <p className="text-xs tracking-widest uppercase text-zinc-500">
                  Gewählt: <span className="text-white">{selectedSize}</span>
                </p>
              )}
            </div>
            <div className="flex gap-2">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => { setSelectedSize(size); setError(''); }}
                  className={`
                    flex-1 py-4 text-xs font-bold tracking-widest uppercase border transition-all duration-150
                    ${selectedSize === size
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-zinc-500 border-white/15 hover:border-white/50 hover:text-zinc-200'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
            {error && (
              <p className="text-red-400 text-xs tracking-widest uppercase mt-3">{error}</p>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`
              w-full py-5 font-black uppercase tracking-widest text-sm transition-all duration-300 active:scale-[0.98]
              ${added
                ? 'bg-zinc-900 text-green-400 border border-green-400/40'
                : 'bg-white text-black hover:bg-zinc-100'
              }
            `}
          >
            {added ? `✓ Im Warenkorb — Größe ${selectedSize}` : 'In den Warenkorb'}
          </button>

          <div className="w-8 border-t border-white/10 mt-12 mb-10" />

          <div className="grid grid-cols-2 gap-6 text-xs tracking-widest uppercase">
            <div>
              <p className="text-zinc-600 mb-1">Material</p>
              <p className="text-zinc-400">100% Bio-Baumwolle</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-1">Gewicht</p>
              <p className="text-zinc-400">280 g/m²</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-1">Schnitt</p>
              <p className="text-zinc-400">Oversized Unisex</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-1">Druck</p>
              <p className="text-zinc-400">Made in Germany</p>
            </div>
          </div>

        </div>
      </div>

      <footer className="border-t border-white/10 px-8 py-8 text-center text-zinc-700 text-xs tracking-widest uppercase">
        © 2026 Statementory — statementory.shop
      </footer>
    </main>
  );
}
