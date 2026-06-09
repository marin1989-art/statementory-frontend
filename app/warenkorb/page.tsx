'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

export default function WarenkorbPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://api.statementory.shop/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          line_items: items.map(i => ({
            name: `${i.productName} — Größe ${i.size}`,
            price_cents: i.price_cents,
            quantity: i.quantity,
            image: i.image,
          })),
          metadata: {
            items: JSON.stringify(items.map(i => ({
              sync_variant_id: i.sync_variant_id,
              quantity: i.quantity,
              size: i.size,
            }))),
          },
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Fehler beim Checkout. Bitte versuche es erneut.');
        setLoading(false);
      }
    } catch {
      setError('Verbindungsfehler. Bitte versuche es erneut.');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <div className="max-w-3xl mx-auto px-8 pt-40 pb-24">

        <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-8">
          <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-500">Warenkorb</span>
        </p>

        <h1 className="text-5xl font-black uppercase tracking-tight leading-[0.9] mb-12">Warenkorb</h1>

        {items.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-zinc-600 text-xs tracking-widest uppercase mb-8">Dein Warenkorb ist leer.</p>
            <Link href="/" className="text-xs tracking-[0.3em] uppercase text-zinc-400 hover:text-white transition-colors">
              ← Weiter shoppen
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-0">
              {items.map((item, idx) => (
                <div key={item.sync_variant_id}
                  className={`flex items-center gap-6 py-6 ${idx < items.length - 1 ? 'border-b border-white/10' : ''}`}>

                  <div className="w-20 h-20 bg-zinc-900 flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.productName} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold uppercase tracking-widest truncate">{item.productName}</p>
                    <p className="text-xs text-zinc-500 tracking-widest uppercase mt-1">Größe {item.size}</p>
                    <p className="text-xs text-zinc-400 tracking-widest uppercase mt-1">
                      {(item.price_cents / 100).toFixed(2).replace('.', ',')} €
                    </p>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button onClick={() => updateQuantity(item.sync_variant_id, item.quantity - 1)}
                      className="w-8 h-8 border border-white/20 text-zinc-400 hover:border-white hover:text-white transition-all text-sm font-bold">
                      −
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.sync_variant_id, item.quantity + 1)}
                      className="w-8 h-8 border border-white/20 text-zinc-400 hover:border-white hover:text-white transition-all text-sm font-bold">
                      +
                    </button>
                  </div>

                  <div className="flex-shrink-0 w-24 text-right">
                    <p className="text-sm font-bold tracking-wide">
                      {((item.price_cents * item.quantity) / 100).toFixed(2).replace('.', ',')} €
                    </p>
                  </div>

                  <button onClick={() => removeItem(item.sync_variant_id)}
                    className="flex-shrink-0 text-zinc-600 hover:text-white transition-colors text-xs tracking-widest uppercase ml-2">
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 mt-4 pt-8 flex flex-col items-end gap-6">
              <div className="flex items-center justify-between w-full">
                <p className="text-xs tracking-widest uppercase text-zinc-500">Zwischensumme</p>
                <p className="text-2xl font-black tracking-wide">
                  {(totalPrice / 100).toFixed(2).replace('.', ',')} €
                </p>
              </div>
              <p className="text-xs text-zinc-600 tracking-widest uppercase self-start">
                inkl. MwSt. · Versand wird im Checkout berechnet
              </p>

              {error && <p className="text-red-400 text-xs tracking-widest uppercase self-start">{error}</p>}

              <button onClick={handleCheckout} disabled={loading}
                className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-zinc-100 active:scale-[0.98] transition-all disabled:opacity-50">
                {loading ? 'Weiterleitung …' : `Jetzt kaufen — ${(totalPrice / 100).toFixed(2).replace('.', ',')} €`}
              </button>

              <button onClick={() => { clearCart(); }}
                className="text-xs text-zinc-600 tracking-widest uppercase hover:text-zinc-400 transition-colors">
                Warenkorb leeren
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}
