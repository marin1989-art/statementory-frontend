'use client';

import { useState } from 'react';

export default function Home() {
  const [emails, setEmails] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<{ [key: string]: string }>({});

  const handleWaitlist = async (produkt: string) => {
    const email = emails[produkt];
    if (!email) return;

    try {
      const res = await fetch('https://statementory.shop/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, produkt }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ...status, [produkt]: 'success' });
      } else if (res.status === 409) {
        setStatus({ ...status, [produkt]: 'exists' });
      } else {
        setStatus({ ...status, [produkt]: 'error' });
      }
    } catch {
      setStatus({ ...status, [produkt]: 'error' });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <span className="text-xl font-bold tracking-widest uppercase">Statementory</span>
        <div className="flex gap-8 text-sm tracking-widest uppercase text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Shop</a>
          <a href="#" className="hover:text-white transition-colors">Kollektionen</a>
          <a href="#" className="hover:text-white transition-colors">Über uns</a>
        </div>
        <button className="text-sm tracking-widest uppercase border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-all">
          Warenkorb
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center min-h-screen text-center px-8 pt-20">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">Neue Kollektion 2026</p>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-none mb-6">
          Trag deine<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            Haltung.
          </span>
        </h1>
        <p className="text-zinc-400 max-w-md mb-10 text-lg">
          Streetwear mit Aussage. T-Shirts, Hoodies & Caps — designed in Germany.
        </p>
        <div className="flex gap-4">
          <a href="#" className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors">
            Jetzt shoppen
          </a>
          <a href="#" className="border border-white/30 px-8 py-3 uppercase tracking-widest text-sm hover:border-white transition-colors">
            Mehr erfahren
          </a>
        </div>
      </section>

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-2">Verfügbar</p>
        <h2 className="text-3xl font-black uppercase mb-12">Neue Drops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="group cursor-pointer">
            <div className="aspect-square bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all flex items-center justify-center mb-4">
              <span className="text-zinc-700 text-sm uppercase tracking-widest">T-Shirt</span>
            </div>
            <p className="font-bold uppercase tracking-wider">T-Shirt</p>
            <p className="text-zinc-500 text-sm">Ab 29,99 €</p>
          </div>

          <div className="group">
            <div className="aspect-square bg-zinc-900 border border-white/5 relative flex items-center justify-center mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 z-10">
                <span className="text-xs tracking-[0.3em] uppercase text-zinc-400 border border-zinc-700 px-3 py-1">Demnächst</span>
                {status['hoodie'] === 'success' ? (
                  <p className="text-green-400 text-xs tracking-widest uppercase">✓ Du wirst benachrichtigt</p>
                ) : status['hoodie'] === 'exists' ? (
                  <p className="text-yellow-400 text-xs tracking-widest uppercase">Bereits registriert</p>
                ) : (
                  <div className="flex flex-col items-center gap-2 px-4 w-full">
                    <input
                      type="email"
                      placeholder="deine@email.de"
                      value={emails['hoodie'] || ''}
                      onChange={(e) => setEmails({ ...emails, hoodie: e.target.value })}
                      className="w-full bg-black/80 border border-zinc-700 text-white text-xs px-3 py-2 text-center placeholder:text-zinc-600 focus:outline-none focus:border-white"
                    />
                    <button
                      onClick={() => handleWaitlist('hoodie')}
                      className="text-xs tracking-widest uppercase border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-all w-full"
                    >
                      Benachrichtige mich
                    </button>
                  </div>
                )}
              </div>
              <span className="text-zinc-800 text-sm uppercase tracking-widest">Hoodie</span>
            </div>
            <p className="font-bold uppercase tracking-wider text-zinc-600">Hoodie</p>
            <p className="text-zinc-700 text-sm">Bald verfügbar</p>
          </div>

          <div className="group">
            <div className="aspect-square bg-zinc-900 border border-white/5 relative flex items-center justify-center mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 z-10">
                <span className="text-xs tracking-[0.3em] uppercase text-zinc-400 border border-zinc-700 px-3 py-1">Demnächst</span>
                {status['cap'] === 'success' ? (
                  <p className="text-green-400 text-xs tracking-widest uppercase">✓ Du wirst benachrichtigt</p>
                ) : status['cap'] === 'exists' ? (
                  <p className="text-yellow-400 text-xs tracking-widest uppercase">Bereits registriert</p>
                ) : (
                  <div className="flex flex-col items-center gap-2 px-4 w-full">
                    <input
                      type="email"
                      placeholder="deine@email.de"
                      value={emails['cap'] || ''}
                      onChange={(e) => setEmails({ ...emails, cap: e.target.value })}
                      className="w-full bg-black/80 border border-zinc-700 text-white text-xs px-3 py-2 text-center placeholder:text-zinc-600 focus:outline-none focus:border-white"
                    />
                    <button
                      onClick={() => handleWaitlist('cap')}
                      className="text-xs tracking-widest uppercase border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-all w-full"
                    >
                      Benachrichtige mich
                    </button>
                  </div>
                )}
              </div>
              <span className="text-zinc-800 text-sm uppercase tracking-widest">Cap</span>
            </div>
            <p className="font-bold uppercase tracking-wider text-zinc-600">Cap</p>
            <p className="text-zinc-700 text-sm">Bald verfügbar</p>
          </div>

        </div>
      </section>

      <footer className="border-t border-white/10 px-8 py-8 text-center text-zinc-600 text-xs tracking-widest uppercase">
        © 2026 Statementory — statementory.shop
      </footer>
    </main>
  );
}