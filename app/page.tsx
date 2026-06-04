import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';
import WaitlistItem from './components/WaitlistItem';
import ProductCard from './components/ProductCard';

export const metadata: Metadata = {
  title: 'Statementory — Politische Streetwear & Statement T-Shirts aus Deutschland',
  description:
    'Statement T-Shirts mit Haltung. Gesellschaftskritische Streetwear, designed in Germany. Bio-Baumwolle, Oversized Unisex. Neue Kollektion 2026 — jetzt entdecken.',
  alternates: {
    canonical: 'https://statementory.shop',
  },
  openGraph: {
    title: 'Statementory — Politische Streetwear & Statement T-Shirts',
    description:
      'Statement T-Shirts mit Haltung. Gesellschaftskritische Streetwear, designed in Germany.',
    url: 'https://statementory.shop',
  },
};

const shopJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Statement T-Shirts — Statementory',
  description: 'Politische Streetwear und Statement T-Shirts aus Deutschland',
  numberOfItems: 6,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      url: 'https://statementory.shop/produkte/alles-ist-gut',
      name: 'Alles ist gut — Statement T-Shirt',
    },
    {
      '@type': 'ListItem',
      position: 2,
      url: 'https://statementory.shop/produkte/denken-statt-folgen',
      name: 'Denken statt Folgen — Statement T-Shirt',
    },
    {
      '@type': 'ListItem',
      position: 3,
      url: 'https://statementory.shop/produkte/make-men-men-again',
      name: 'Make Men Men Again — Statement T-Shirt',
    },
    {
      '@type': 'ListItem',
      position: 4,
      url: 'https://statementory.shop/produkte/error-404-diese-regierung',
      name: 'Error 404 Diese Regierung — Statement T-Shirt',
    },
    {
      '@type': 'ListItem',
      position: 5,
      url: 'https://statementory.shop/produkte/not-a-muse-a-mood',
      name: 'Not A Muse. A Mood. — Streetwear T-Shirt',
    },
    {
      '@type': 'ListItem',
      position: 6,
      url: 'https://statementory.shop/produkte/good-morning-friends-and-haters',
      name: 'Good Morning, Friends And Haters — Streetwear T-Shirt',
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopJsonLd) }}
      />
      <Nav />

      <section
        className="flex flex-col items-center justify-center min-h-screen text-center px-8 pt-20"
        aria-label="Willkommen bei Statementory"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">Neue Kollektion 2026</p>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-none mb-6">
          Trag deine<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            Haltung.
          </span>
        </h1>
        <p className="text-zinc-400 max-w-md mb-10 text-lg">
          Streetwear mit Aussage. T-Shirts, Hoodies &amp; Caps — designed in Germany.
        </p>
        <div className="flex gap-4">
          <Link
            href="/statements"
            className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors"
          >
            Jetzt shoppen
          </Link>
          <Link
            href="/streetwear"
            className="border border-white/30 px-8 py-3 uppercase tracking-widest text-sm hover:border-white transition-colors"
          >
            Kollektionen
          </Link>
        </div>
      </section>

      <section className="px-8 py-24 max-w-6xl mx-auto" aria-label="Neue Drops — Statements Kollektion">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-2">Verfügbar</p>
        <h2 className="text-3xl font-black uppercase mb-12">Neue Drops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <ProductCard href="/produkte/alles-ist-gut" src="/allesistgut.png" alt="Alles ist gut — Statement T-Shirt, Oversized Unisex" name="Alles ist gut" price="29,00 €" />
          <ProductCard href="/produkte/denken-statt-folgen" src="/denkenstattfolgen.png" alt="Denken statt Folgen — Statement T-Shirt, Oversized Unisex" name="Denken statt Folgen" price="29,00 €" />
          <ProductCard href="/produkte/make-men-men-again" src="/makemenmenagain.png" alt="Make Men Men Again — Statement T-Shirt, Oversized Unisex" name="Make Men Men Again" price="29,00 €" />
          <ProductCard href="/produkte/error-404-diese-regierung" src="/error.png" alt="Error 404 Diese Regierung außer Betrieb — Statement T-Shirt" name="Error 404 — Diese Regierung befindet sich derzeit außer Betrieb" price="29,00 €" />

          <WaitlistItem produkt="hoodie" label="Hoodie" />
          <WaitlistItem produkt="cap" label="Cap" />

        </div>
      </section>

      <section className="px-8 py-24 max-w-6xl mx-auto border-t border-white/5" aria-label="Streetwear Kollektion">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-2">Kollektion</p>
        <h2 className="text-3xl font-black uppercase mb-12">Streetwear</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <ProductCard href="/produkte/not-a-muse-a-mood" src="/monalisa.png" alt="Not A Muse. A Mood. — Streetwear T-Shirt mit Mona Lisa Print" name="Not A Muse. A Mood." price="39,00 €" bg="bg-zinc-100" />
          <ProductCard href="/produkte/good-morning-friends-and-haters" src="/goodmorning.png" alt="Good Morning, Friends And Haters — Streetwear T-Shirt" name="Good Morning, Friends And Haters" price="39,00 €" bg="bg-zinc-100" />

        </div>
      </section>

      <Footer />
    </main>
  );
}
