import Link from 'next/link';
import Nav from '../components/Nav';

export default function StatementsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <section className="pt-40 pb-24 px-8 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">Kollektion</p>
        <h1 className="text-5xl font-black uppercase tracking-tight leading-none mb-4">Statements</h1>
        <p className="text-zinc-500 text-sm max-w-md mb-16">
          Gesellschaftskritische Shirts mit Haltung. Trag deine Meinung.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link href="/produkte/alles-ist-gut" className="group cursor-pointer">
            <div className="aspect-square bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all mb-4 overflow-hidden">
              <img src="/allesistgut.png" alt="Alles ist gut - T-Shirt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="font-bold uppercase tracking-wider">Alles ist gut</p>
            <p className="text-zinc-500 text-sm">29,00 €</p>
          </Link>

          <Link href="/produkte/denken-statt-folgen" className="group cursor-pointer">
            <div className="aspect-square bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all mb-4 overflow-hidden">
              <img src="/denkenstattfolgen.png" alt="Denken statt Folgen - T-Shirt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="font-bold uppercase tracking-wider">Denken statt Folgen</p>
            <p className="text-zinc-500 text-sm">29,00 €</p>
          </Link>

          <Link href="/produkte/make-men-men-again" className="group cursor-pointer">
            <div className="aspect-square bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all mb-4 overflow-hidden">
              <img src="/makemenmenagain.png" alt="Make Men Men Again - T-Shirt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="font-bold uppercase tracking-wider">Make Men Men Again</p>
            <p className="text-zinc-500 text-sm">29,00 €</p>
          </Link>

          <Link href="/produkte/error-404-diese-regierung" className="group cursor-pointer">
            <div className="aspect-square bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all mb-4 overflow-hidden">
              <img src="/error.png" alt="Error 404 - Diese Regierung - T-Shirt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="font-bold uppercase tracking-wider">Error 404 — Diese Regierung befindet sich derzeit außer Betrieb</p>
            <p className="text-zinc-500 text-sm">29,00 €</p>
          </Link>

        </div>
      </section>

      <footer className="border-t border-white/10 px-8 py-8 text-center text-zinc-700 text-xs tracking-widest uppercase">
        © 2026 Statementory — statementory.shop
      </footer>
    </main>
  );
}
