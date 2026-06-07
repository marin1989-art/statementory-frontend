'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ProductFAQ from '../../components/ProductFAQ';
import SizeChart, { STANLEY_STELLA_MEASUREMENTS } from '../../components/SizeChart';
import ShippingInfo from '../../components/ShippingInfo';
import BackButton from '../../components/BackButton';
import ProductImagePanel from '../../components/ProductImagePanel';
import ProductDetails from '../../components/ProductDetails';
import { useCart } from '../../context/CartContext';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL', '3XL'] as const;
type Size = typeof SIZES[number];

const VARIANT_IDS: Record<Size, string> = {
  S:   '5337245939',
  M:   '5337245940',
  L:   '5337245941',
  XL:  '5337245942',
  XXL: '5337245943',
  '3XL': '5337245944',
};

const IMAGES = [
  { src: '/monalisa-back.png', alt: 'Not A Muse. A Mood. — Rückseite mit Mona Lisa Motiv' },
  { src: '/shirt-white-front.png', alt: 'Not A Muse. A Mood. — Vorderseite' },
];

export default function NotAMuseAMoodPage() {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [sizeError, setSizeError] = useState('');
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError('Bitte wähle eine Größe aus.'); return; }
    setSizeError('');
    addItem({ sync_variant_id: VARIANT_IDS[selectedSize], productName: 'Not A Muse. A Mood.', size: selectedSize, price_cents: 3900, quantity: 1, image: '/monalisa-back.png' });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <BackButton />
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <ProductImagePanel images={IMAGES} bg="bg-zinc-100" />
        <div className="flex flex-col justify-center px-4 pt-8 pb-12 md:px-12 md:pt-32 md:pb-24 max-w-xl">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-6">
            <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <Link href="/streetwear" className="hover:text-zinc-400 transition-colors">Streetwear</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-500">Not A Muse. A Mood.</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8">
            <span className="block mb-1">Not A Muse.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">A Mood.</span>
          </h1>
          <p className="text-3xl font-bold tracking-wide mb-1">39,00 €</p>
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
            {added ? '✓ Im Einkaufswagen' : 'In den Einkaufswagen — 39,00 €'}
          </button>
          {added && (
            <Link href="/warenkorb" className="text-xs text-zinc-500 tracking-widest uppercase hover:text-zinc-300 transition-colors text-center mt-3">
              Zum Warenkorb →
            </Link>
          )}
          <SizeChart measurements={STANLEY_STELLA_MEASUREMENTS} />
          <ShippingInfo />
          <div className="w-8 border-t border-white/10 mt-12 mb-10" />
          <ProductDetails />
        </div>
      </div>
      <ProductFAQ price="39,00 €" />
      <Footer />
    </main>
  );
}
