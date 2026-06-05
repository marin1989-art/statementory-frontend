'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

type FormState = { name: string; email: string; betreff: string; nachricht: string };
type Status = 'idle' | 'loading' | 'success' | 'error';

const INPUT_CLASS =
  'w-full bg-transparent border border-white/15 px-4 py-3 text-white text-sm tracking-wide placeholder:text-zinc-700 focus:border-white/50 focus:outline-none transition-colors';

export default function KontaktPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', betreff: '', nachricht: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('https://api.statementory.shop/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', betreff: '', nachricht: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <div className="max-w-xl mx-auto px-8 pt-40 pb-24">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-8">
          <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-500">Kontakt</span>
        </p>

        <h1 className="text-5xl font-black uppercase tracking-tight leading-[0.9] mb-4">Kontakt</h1>
        <p className="text-zinc-500 text-sm tracking-wide mb-16">
          Fragen, Feedback, Kooperationen — wir lesen alles.
        </p>

        {status === 'success' ? (
          <div className="border border-white/10 p-8">
            <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">Nachricht gesendet</p>
            <p className="text-white font-bold text-lg mb-2">Danke.</p>
            <p className="text-zinc-400 text-sm">Wir melden uns so schnell wie möglich.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="text-xs tracking-[0.3em] uppercase text-zinc-500 block mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={INPUT_CLASS}
                placeholder="Dein Name"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.3em] uppercase text-zinc-500 block mb-2">E-Mail</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className={INPUT_CLASS}
                placeholder="deine@email.de"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.3em] uppercase text-zinc-500 block mb-2">Betreff</label>
              <input
                type="text"
                name="betreff"
                required
                value={form.betreff}
                onChange={handleChange}
                className={INPUT_CLASS}
                placeholder="Worum geht es?"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.3em] uppercase text-zinc-500 block mb-2">Nachricht</label>
              <textarea
                name="nachricht"
                required
                rows={6}
                value={form.nachricht}
                onChange={handleChange}
                className={`${INPUT_CLASS} resize-none`}
                placeholder="Deine Nachricht..."
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-xs tracking-widest uppercase">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-5 font-black uppercase tracking-widest text-sm bg-white text-black hover:bg-zinc-100 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden'}
            </button>
          </form>
        )}
      </div>

      <Footer />
    </main>
  );
}
