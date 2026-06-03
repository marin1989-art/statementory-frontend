'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/Nav';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'] as const;
type Size = typeof SIZES[number];

const VARIANT_IDS: Record<Size, string> = {
  S:   '6a1fa0deb9f098',
  M:   '6a1fa0deb9f101',
  L:   '6a1fa0deb9f154',
  XL:  '6a1fa0deb9f1a2',
  XXL: '6a1fa0deb9f1e5',
};

type Step = 'select' | 'checkout' | 'success' | 'error';

export default function AllesIstGutPage() {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [sizeError, setSizeError] = useState('');
  const [step, setStep] = useState<Step>('select');
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  const [form, setForm] = useState({
    name: '', email: '', address1: '', city: '', zip: '', country_code: 'DE',
  });

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError('Bitte wähle eine Größe aus.'); return; }
    setSizeError('');
    setStep('checkout');
  };

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSize) return;
    setSubmitting(true);
    setApiError('');

    try {
      const res = await fetch('https://api.statementory.shop/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: form,
          items: [{ sync_variant_id: VARIANT_IDS[selectedSize], quantity: 1 }],
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep('success');
      } else {
        setApiError(data.error || 'Unbekannter Fehler');
        setStep('error');
      }
    } catch {
      setApiError('Verbindungsfehler. Bitte versuche es erneut.');
      setStep('error');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = 'w-full bg-zinc-900 border border-white/10 text-white text-sm px-4 py-3 placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors';

  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

        <div className="md:sticky md:top-0 md:h-screen flex items-center justify-center bg-zinc-950 border-r border-white/5 p-12 pt-24">
          <div className="w-full max-w-md aspect-square relative overflow-hidden">
            <img src="/allesistgut.png" alt="Alles ist gut — T-Shirt Mockup" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="flex flex-col justify-center px-12 pt-32 pb-24 max-w-xl">

          <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-6">
            <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-500">Alles ist gut</span>
          </p>

          <h1 className="text-6xl font-black uppercase tracking-tight leading-[0.9] mb-2">Alles</h1>
          <h1 className="text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
            ist gut.
          </h1>

          <p className="text-3xl font-bold tracking-wide mb-1">39,90 €</p>
          <p className="text-xs text-zinc-600 tracking-widest uppercase mb-10">inkl. MwSt. · Versand ab 4,90 €</p>

          <div className="w-8 border-t border-white/10 mb-10" />

          {step === 'success' ? (
            <div className="border border-green-400/30 px-6 py-8 text-center">
              <p className="text-green-400 font-black uppercase tracking-widest text-sm mb-2">✓ Bestellung eingegangen</p>
              <p className="text-zinc-500 text-xs tracking-widest uppercase">Größe {selectedSize} · Bestätigung per Mail</p>
            </div>
          ) : step === 'checkout' ? (
            <form onSubmit={handleOrder} className="flex flex-col gap-4">
              <p className="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-2">
                Lieferadresse — Größe <span className="text-white">{selectedSize}</span>
              </p>
              <input required placeholder="Name" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} />
              <input required type="email" placeholder="E-Mail" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} />
              <input required placeholder="Straße + Hausnummer" value={form.address1}
                onChange={e => setForm({ ...form, address1: e.target.value })} className={inputClass} />
              <div className="flex gap-3">
                <input required placeholder="PLZ" value={form.zip}
                  onChange={e => setForm({ ...form, zip: e.target.value })} className={inputClass} />
                <input required placeholder="Stadt" value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })} className={inputClass} />
              </div>
              <input required placeholder="Ländercode (z.B. DE)" value={form.country_code}
                onChange={e => setForm({ ...form, country_code: e.target.value.toUpperCase() })}
                maxLength={2} className={inputClass} />
              {apiError && <p className="text-red-400 text-xs tracking-widest uppercase">{apiError}</p>}
              <button type="submit" disabled={submitting}
                className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-zinc-100 active:scale-[0.98] transition-all disabled:opacity-50 mt-2">
                {submitting ? 'Wird gesendet …' : 'Jetzt bestellen — 39,90 €'}
              </button>
              <button type="button" onClick={() => setStep('select')}
                className="text-xs text-zinc-600 tracking-widest uppercase hover:text-zinc-400 transition-colors text-center">
                ← Zurück
              </button>
            </form>
          ) : (
            <>
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

              <button onClick={handleAddToCart}
                className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-zinc-100 active:scale-[0.98] transition-all">
                In den Warenkorb
              </button>
            </>
          )}

          <div className="w-8 border-t border-white/10 mt-12 mb-10" />

          <div className="grid grid-cols-2 gap-6 text-xs tracking-widest uppercase">
            <div><p className="text-zinc-600 mb-1">Material</p><p className="text-zinc-400">100% Bio-Baumwolle</p></div>
            <div><p className="text-zinc-600 mb-1">Gewicht</p><p className="text-zinc-400">280 g/m²</p></div>
            <div><p className="text-zinc-600 mb-1">Schnitt</p><p className="text-zinc-400">Oversized Unisex</p></div>
            <div><p className="text-zinc-600 mb-1">Druck</p><p className="text-zinc-400">Made in Germany</p></div>
          </div>

        </div>
      </div>

      <footer className="border-t border-white/10 px-8 py-8 text-center text-zinc-700 text-xs tracking-widest uppercase">
        © 2026 Statementory — statementory.shop
      </footer>
    </main>
  );
}
