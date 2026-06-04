'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { useCart } from '../../context/CartContext';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'] as const;
type Size = typeof SIZES[number];

const VARIANT_IDS: Record<Size, string> = {
  S:   '5337002651',
  M:   '5337002652',
  L:   '5337002653',
  XL:  '5337002654',
  XXL: '5337002655',
};

export default function Error404Page() {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [sizeError, setSizeError] = useState('');
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError('Bitte wähle eine Größe aus.'); return; }
    setSizeError('');
    addItem({ sync_variant_id: VARIANT_IDS[selectedSize], productName: 'Error 404 — Diese Regierung', size: selectedSize, price_cents: 2900, quantity: 1, image: '/error.png' });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="md:sticky md:top-0 md:h-screen flex items-center justify-center bg-zinc-950 border-r border-white/5 p-12 pt-24">
          <div className="w-full max-w-md aspect-square relative overflow-hidden">
            <Image src="/error.png" alt="Error 404 Diese Regierung — Statement T-Shirt Mockup" fill className="object-contain" priority sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
        <div className="flex flex-col justify-center px-12 pt-32 pb-24 max-w-xl">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-6">
            <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <Link href="/statements" className="hover:text-zinc-400 transition-colors">Statements</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-500">Error 404</span>
          </p>
          <h1 className="text-5xl font-black uppercase tracking-tight leading-[0.9] mb-8">
            <span className="block mb-1">Error 404 —</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">Diese Regierung befindet sich derzeit außer Betrieb.</span>
          </h1>
          <p className="text-3xl font-bold tracking-wide mb-1">29,00 €</p>
          <p className="text-xs text-zinc-600 tracking-widest uppercase mb-10">inkl. MwSt. · Versand ab 4,90 €</p>
          <div className="w-8 border-t border-white/10 mb-10" />
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs tracking-[0.3em] uppercase text-zinc-400">Größe</p>
              {selectedSize && <p className="text-xs tracking-widest uppercase text-zinc-500">Gewählt: <span className="text-white">{selectedSize}</span></p>}
            </div>
            <div className="flex gap-2">
              {SIZES.map((size) => (
                <button key={size} onClick={() => { setSelectedSize(size); setSizeError(''); }}
                  className={`flex-1 py-4 text-xs font-bold tracking-widest uppercase border transition-all duration-150 ${selectedSize === size ? 'bg-white text-black border-white' : 'bg-transparent text-zinc-500 border-white/15 hover:border-white/50 hover:text-zinc-200'}`}>
                  {size}
                </button>
              ))}
            </div>
            {sizeError && <p className="text-red-400 text-xs tracking-widest uppercase mt-3">{sizeError}</p>}
          </div>
          <button onClick={handleAddToCart}
            className={`w-full py-5 font-black uppercase tracking-widest text-sm active:scale-[0.98] transition-all ${added ? 'bg-zinc-800 text-green-400 border border-green-400/30' : 'bg-white text-black hover:bg-zinc-100'}`}>
            {added ? '✓ Im Warenkorb' : 'In den Warenkorb — 29,00 €'}
          </button>
          {added && (
            <Link href="/warenkorb" className="text-xs text-zinc-500 tracking-widest uppercase hover:text-zinc-300 transition-colors text-center mt-3">
              Zum Warenkorb →
            </Link>
          )}
          <div className="w-8 border-t border-white/10 mt-12 mb-10" />
          <div className="grid grid-cols-2 gap-6 text-xs tracking-widest uppercase">
            <div><p className="text-zinc-600 mb-1">Material</p><p className="text-zinc-400">100% Bio-Baumwolle</p></div>
            <div><p className="text-zinc-600 mb-1">Gewicht</p><p className="text-zinc-400">280 g/m²</p></div>
            <div><p className="text-zinc-600 mb-1">Schnitt</p><p className="text-zinc-400">Oversized Unisex</p></div>
            <div><p className="text-zinc-600 mb-1">Farbe</p><p className="text-zinc-400">Schwarz</p></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
