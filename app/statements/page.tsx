import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export const metadata: Metadata = {
  title: 'Statements — Politische T-Shirts mit Haltung',
  description:
    'Gesellschaftskritische Statement T-Shirts aus Deutschland. Trag deine Meinung — Oversized Bio-Baumwolle, Siebdruck made in Germany. Ab 29 €.',
  alternates: {
    canonical: 'https://statementory.shop/statements',
  },
  openGraph: {
    title: 'Statements — Politische T-Shirts mit Haltung | Statementory',
    description:
      'Gesellschaftskritische Statement T-Shirts. Oversized Bio-Baumwolle, Siebdruck made in Germany.',
    url: 'https://statementory.shop/statements',
  },
};

export default function StatementsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <section className="pt-24 pb-16 px-4 md:pt-40 md:pb-24 md:px-8 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">Kollektion</p>
        <h1 className="text-5xl font-black uppercase tracking-tight leading-none mb-4">Statements</h1>
        <p className="text-zinc-500 text-sm max-w-md mb-16">
          Gesellschaftskritische Shirts mit Haltung. Trag deine Meinung.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <ProductCard href="/produkte/alles-ist-gut" src="/alles-ist-gut-back.png" alt="Alles ist gut — Statement T-Shirt, Oversized Unisex" name="Alles ist gut" price="29,00 €" />
          <ProductCard href="/produkte/denken-statt-folgen" src="/denken-statt-folgen-back.png" alt="Denken statt Folgen — Statement T-Shirt, Oversized Unisex" name="Denken statt Folgen" price="29,00 €" />
          <ProductCard href="/produkte/make-men-men-again" src="/make-men-back.png" alt="Make Men Men Again — Statement T-Shirt, Oversized Unisex" name="Make Men Men Again" price="29,00 €" />
          <ProductCard href="/produkte/error-404-diese-regierung" src="/error-404-back.png" alt="Error 404 Diese Regierung außer Betrieb — Statement T-Shirt" name="Error 404 — Diese Regierung befindet sich derzeit außer Betrieb" price="29,00 €" />

        </div>
      </section>

      <Footer />
    </main>
  );
}
