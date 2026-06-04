import Link from 'next/link';
import Nav from '../components/Nav';

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-md">
          <div className="w-8 border-t border-white/10 mx-auto mb-12" />
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">Zahlung abgebrochen</p>
          <h1 className="text-5xl font-black uppercase tracking-tight leading-[0.9] mb-4">Kein Problem.</h1>
          <p className="text-zinc-500 text-sm tracking-widest uppercase mb-12">Deine Bestellung wurde nicht abgeschlossen.</p>
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
