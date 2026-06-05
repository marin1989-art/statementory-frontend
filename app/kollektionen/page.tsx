import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Kollektionen — Statements & Streetwear',
  description:
    'Zwei Kollektionen, eine Haltung. Statements: politische T-Shirts mit Aussage. Streetwear: Kulturreferenzen neu gedacht. Statementory — designed in Germany.',
  alternates: { canonical: 'https://statementory.shop/kollektionen' },
  openGraph: {
    title: 'Kollektionen — Statements & Streetwear | Statementory',
    description: 'Zwei Kollektionen, eine Haltung. Politische Streetwear aus Deutschland.',
    url: 'https://statementory.shop/kollektionen',
  },
};

export default function KollektionenPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <section className="pt-24 pb-16 px-4 md:pt-40 md:pb-24 md:px-8 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">Übersicht</p>
        <h1 className="text-5xl font-black uppercase tracking-tight leading-none mb-4">Kollektionen</h1>
        <p className="text-zinc-500 text-sm max-w-md mb-16">
          Zwei Kollektionen. Eine Haltung.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Link href="/statements" className="group relative overflow-hidden aspect-[4/5] bg-zinc-950 border border-white/5 hover:border-white/20 transition-all">
            <Image
              src="/allesistgut.png"
              alt="Statements Kollektion — Politische T-Shirts"
              fill
              className="object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-3">01</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none mb-4">Statements</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
                Politisch. Gesellschaftskritisch. Unbequem. Shirts die etwas sagen.
              </p>
              <span className="text-xs tracking-[0.3em] uppercase text-zinc-400 group-hover:text-white transition-colors border-b border-zinc-700 group-hover:border-white pb-0.5">
                Kollektion ansehen →
              </span>
            </div>
          </Link>

          <Link href="/streetwear" className="group relative overflow-hidden aspect-[4/5] bg-zinc-100 border border-white/5 hover:border-white/20 transition-all">
            <Image
              src="/monalisa.png"
              alt="Streetwear Kollektion — Kulturreferenzen neu gedacht"
              fill
              className="object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-3">02</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none mb-4">Streetwear</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
                Kunst trifft Street. Kulturreferenzen neu gedacht — für alle.
              </p>
              <span className="text-xs tracking-[0.3em] uppercase text-zinc-400 group-hover:text-white transition-colors border-b border-zinc-700 group-hover:border-white pb-0.5">
                Kollektion ansehen →
              </span>
            </div>
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}
