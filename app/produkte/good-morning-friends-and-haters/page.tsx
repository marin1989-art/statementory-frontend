'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/Nav';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'] as const;
type Size = typeof SIZES[number];

const VARIANT_IDS: Record<Size, string> = {
  S:   '5337208642',
  M:   '5337208643',
  L:   '5337208644',
  XL:  '5337208645',
  XXL: '5337208646',
};

export default function GoodMorningPage() {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [sizeError, setSizeError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!selectedSize) { setSizeError('Bitte wähle eine Größe aus.'); return; }
    setSizeError('');
    setLoading(true);

    try {
      const res = await fetch('https://api.statementory.shop/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          line_items: [{ name: `Good Morning, Friends And Haters — Größe ${selectedSize}`, price_cents: 3900, quantity: 1 }],
          metadata: { sync_variant_id: VARIANT_IDS[selectedSize], quantity: '1', size: selectedSize },
        }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

        <div className="md:sticky md:top-0 md:h-screen flex items-center justify-center bg-zinc-100 border-r border-white/5 p-12 pt-24">
          <div className="w-full max-w-md aspect-square relative overflow-hidden">
            <img src="/goodmorning.png" alt="Good Morning, Friends And Haters — T-Shirt Mockup" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="flex flex-col justify-center px-12 pt-32 pb-24 max-w-xl">

          <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-6">
            <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <Link href="/streetwear" className="hover:text-zinc-400 transition-colors">Streetwear</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-500">Good Morning, Friends And Haters</span>
          </p>

          <h1 className="text-6xl font-black uppercase tracking-tight leading-[0.9] mb-2">Good Morning,</h1>
          <h1 className="text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
            Friends And Haters.
          </h1>

          <p className="text-3xl font-bold tracking-wide mb-1">39,00 €</p>
          <p className="text-xs text-zinc-600 tracking-widest uppercase mb-10">inkl. MwSt. · Versand ab 4,90 €</p>

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
                <button key={size} onClick={() => { setSelectedSize(size); setSizeError(''); }}
                  className={`flex-1 py-4 text-xs font-bold tracking-widest uppercase border transition-all duration-150
                    ${selectedSize === size
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-zinc-500 border-white/15 hover:border-white/50 hover:text-zinc-200'
                    }`}>
                  {size}
                </button>
              ))}
            </div>
            {sizeError && <p className="text-red-400 text-xs tracking-widest uppercase mt-3">{sizeError}</p>}
          </div>

          <button onClick={handleCheckout} disabled={loading}
            className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-zinc-100 active:scale-[0.98] transition-all disabled:opacity-50">
            {loading ? 'Weiterleitung …' : 'Jetzt kaufen — 39,00 €'}
          </button>

          <div className="w-8 border-t border-white/10 mt-12 mb-10" />

          <div className="grid grid-cols-2 gap-6 text-xs tracking-widest uppercase">
            <div><p className="text-zinc-600 mb-1">Material</p><p className="text-zinc-400">100% Bio-Baumwolle</p></div>
            <div><p className="text-zinc-600 mb-1">Gewicht</p><p className="text-zinc-400">280 g/m²</p></div>
            <div><p className="text-zinc-600 mb-1">Schnitt</p><p className="text-zinc-400">Oversized Unisex</p></div>
            <div><p className="text-zinc-600 mb-1">Farbe</p><p className="text-zinc-400">Weiß</p></div>
          </div>

        </div>
      </div>

      <footer className="border-t border-white/10 px-8 py-8 text-center text-zinc-700 text-xs tracking-widest uppercase">
        © 2026 Statementory — statementory.shop
      </footer>
    </main>
  );
}
