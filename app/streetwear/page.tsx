import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Streetwear — Kulturreferenzen neu gedacht',
  description:
    'Streetwear T-Shirts von Statementory. Kunst trifft Street — Mona Lisa, Kulturreferenzen, Oversized Bio-Baumwolle. Ab 39 €, Versand ab 4,90 €.',
  alternates: {
    canonical: 'https://statementory.shop/streetwear',
  },
  openGraph: {
    title: 'Streetwear — Kulturreferenzen neu gedacht | Statementory',
    description:
      'Streetwear T-Shirts — Kunst trifft Street. Oversized Bio-Baumwolle. Ab 39 €.',
    url: 'https://statementory.shop/streetwear',
  },
};

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
            <div className="aspect-square bg-zinc-100 border border-white/5 group-hover:border-white/20 transition-all mb-4 overflow-hidden relative">
              <Image src="/monalisa.png" alt="Not A Muse. A Mood. — Streetwear T-Shirt mit Mona Lisa" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <p className="font-bold uppercase tracking-wider">Not A Muse. A Mood.</p>
            <p className="text-zinc-500 text-sm">39,00 €</p>
          </Link>

          <Link href="/produkte/good-morning-friends-and-haters" className="group cursor-pointer">
            <div className="aspect-square bg-zinc-100 border border-white/5 group-hover:border-white/20 transition-all mb-4 overflow-hidden relative">
              <Image src="/goodmorning.png" alt="Good Morning, Friends And Haters — Streetwear T-Shirt" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <p className="font-bold uppercase tracking-wider">Good Morning, Friends And Haters</p>
            <p className="text-zinc-500 text-sm">39,00 €</p>
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}
