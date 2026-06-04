import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

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

          <ProductCard href="/produkte/not-a-muse-a-mood" src="/monalisa.png" alt="Not A Muse. A Mood. — Streetwear T-Shirt mit Mona Lisa" name="Not A Muse. A Mood." price="39,00 €" bg="bg-zinc-100" />
          <ProductCard href="/produkte/good-morning-friends-and-haters" src="/goodmorning.png" alt="Good Morning, Friends And Haters — Streetwear T-Shirt" name="Good Morning, Friends And Haters" price="39,00 €" bg="bg-zinc-100" />

        </div>
      </section>

      <Footer />
    </main>
  );
}
