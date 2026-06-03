import Link from 'next/link';
import Nav from '../components/Nav';

export default function StreetwearPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <section className="pt-40 pb-24 px-8 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">Kollektion</p>
        <h1 className="text-5xl font-black uppercase tracking-tight leading-none mb-4">Streetwear</h1>
        <p className="text-zinc-500 text-sm max-w-md mb-16">
          Kulturreferenzen neu gedacht. Kunst trifft Street.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link href="/produkte/not-a-muse-a-mood" className="group cursor-pointer">
            <div className="aspect-square bg-zinc-100 border border-white/5 group-hover:border-white/20 transition-all mb-4 overflow-hidden">
              <img src="/monalisa.png" alt="Not A Muse. A Mood. - T-Shirt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="font-bold uppercase tracking-wider">Not A Muse. A Mood.</p>
            <p className="text-zinc-500 text-sm">39,90 €</p>
          </Link>

          <Link href="/produkte/good-morning-friends-and-haters" className="group cursor-pointer">
            <div className="aspect-square bg-zinc-100 border border-white/5 group-hover:border-white/20 transition-all mb-4 overflow-hidden">
              <img src="/goodmorning.png" alt="Good Morning, Friends And Haters - T-Shirt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="font-bold uppercase tracking-wider">Good Morning, Friends And Haters</p>
            <p className="text-zinc-500 text-sm">39,90 €</p>
          </Link>

        </div>
      </section>

      <footer className="border-t border-white/10 px-8 py-8 text-center text-zinc-700 text-xs tracking-widest uppercase">
        © 2026 Statementory — statementory.shop
      </footer>
    </main>
  );
}
