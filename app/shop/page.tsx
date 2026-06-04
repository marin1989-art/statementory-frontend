import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export const metadata: Metadata = {
  title: 'Shop — Alle Produkte',
  description:
    'Alle Statement T-Shirts und Streetwear von Statementory. Gesellschaftskritische Mode, designed in Germany. Oversized Bio-Baumwolle. Ab 29 €, Versand ab 4,90 €.',
  alternates: { canonical: 'https://statementory.shop/shop' },
  openGraph: {
    title: 'Shop — Alle Produkte | Statementory',
    description: 'Statement T-Shirts und Streetwear. Oversized Bio-Baumwolle. Ab 29 €.',
    url: 'https://statementory.shop/shop',
  },
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <section className="pt-40 pb-24 px-8 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">Alle Produkte</p>
        <h1 className="text-5xl font-black uppercase tracking-tight leading-none mb-4">Shop</h1>
        <p className="text-zinc-500 text-sm max-w-md mb-16">
          Statements trifft Streetwear. Trag deine Haltung.
        </p>

        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-8 flex items-center gap-4">
            <span>Statements</span>
            <span className="flex-1 border-t border-white/10" />
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard
              href="/produkte/alles-ist-gut"
              src="/allesistgut.png"
              alt="Alles ist gut — Statement T-Shirt, Oversized Unisex"
              name="Alles ist gut"
              price="29,00 €"
            />
            <ProductCard
              href="/produkte/denken-statt-folgen"
              src="/denkenstattfolgen.png"
              alt="Denken statt Folgen — Statement T-Shirt, Oversized Unisex"
              name="Denken statt Folgen"
              price="29,00 €"
            />
            <ProductCard
              href="/produkte/make-men-men-again"
              src="/makemenmenagain.png"
              alt="Make Men Men Again — Statement T-Shirt, Oversized Unisex"
              name="Make Men Men Again"
              price="29,00 €"
            />
            <ProductCard
              href="/produkte/error-404-diese-regierung"
              src="/error.png"
              alt="Error 404 Diese Regierung außer Betrieb — Statement T-Shirt"
              name="Error 404 — Diese Regierung befindet sich derzeit außer Betrieb"
              price="29,00 €"
            />
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-8 flex items-center gap-4">
            <span>Streetwear</span>
            <span className="flex-1 border-t border-white/10" />
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard
              href="/produkte/not-a-muse-a-mood"
              src="/monalisa.png"
              alt="Not A Muse. A Mood. — Streetwear T-Shirt mit Mona Lisa Print"
              name="Not A Muse. A Mood."
              price="39,00 €"
              bg="bg-zinc-100"
            />
            <ProductCard
              href="/produkte/good-morning-friends-and-haters"
              src="/goodmorning.png"
              alt="Good Morning, Friends And Haters — Streetwear T-Shirt"
              name="Good Morning, Friends And Haters"
              price="39,00 €"
              bg="bg-zinc-100"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
