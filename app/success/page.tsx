import Link from 'next/link';
import Nav from '../components/Nav';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-md">
          <div className="w-8 border-t border-green-400/40 mx-auto mb-12" />
          <p className="text-xs tracking-[0.4em] uppercase text-green-400 mb-6">✓ Zahlung erfolgreich</p>
          <h1 className="text-5xl font-black uppercase tracking-tight leading-[0.9] mb-4">Danke für deine Bestellung.</h1>
          <p className="text-zinc-500 text-sm tracking-widest uppercase mb-2">Dein Statement wird produziert und bald verschickt.</p>
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-12">Bestätigung per E-Mail</p>
          <div className="w-8 border-t border-white/10 mx-auto mb-12" />
          <Link href="/"
            className="inline-block text-xs tracking-[0.3em] uppercase text-zinc-400 hover:text-white transition-colors">
            ← Zurück zum Shop
          </Link>
        </div>
      </div>
    </main>
  );
}
