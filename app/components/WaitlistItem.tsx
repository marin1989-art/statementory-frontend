'use client';

import { useState } from 'react';

interface WaitlistItemProps {
  produkt: string;
  label: string;
}

export default function WaitlistItem({ produkt, label }: WaitlistItemProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'exists' | 'error'>('idle');

  const handleWaitlist = async () => {
    if (!email) return;
    try {
      const res = await fetch('https://api.statementory.shop/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, produkt }),
      });
      if (res.ok) setStatus('success');
      else if (res.status === 409) setStatus('exists');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="group">
      <div className="aspect-square bg-zinc-900 border border-white/5 relative flex items-center justify-center mb-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 z-10">
          <span className="text-xs tracking-[0.3em] uppercase text-zinc-400 border border-zinc-700 px-3 py-1">
            Demnächst
          </span>
          {status === 'success' ? (
            <p className="text-green-400 text-xs tracking-widest uppercase">✓ Du wirst benachrichtigt</p>
          ) : status === 'exists' ? (
            <p className="text-yellow-400 text-xs tracking-widest uppercase">Bereits registriert</p>
          ) : (
            <div className="flex flex-col items-center gap-2 px-4 w-full">
              <input
                type="email"
                placeholder="deine@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/80 border border-zinc-700 text-white text-xs px-3 py-2 text-center placeholder:text-zinc-600 focus:outline-none focus:border-white"
              />
              <button
                onClick={handleWaitlist}
                className="text-xs tracking-widest uppercase border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-all w-full"
              >
                Benachrichtige mich
              </button>
            </div>
          )}
        </div>
        <span className="text-zinc-800 text-sm uppercase tracking-widest">{label}</span>
      </div>
      <p className="font-bold uppercase tracking-wider text-zinc-600">{label}</p>
      <p className="text-zinc-700 text-sm">Bald verfügbar</p>
    </div>
  );
}
