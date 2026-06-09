import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Presse — Brand-Story, Facts & Kontakt',
  description:
    'Statementory Presseinformationen: Brand-Story, Facts, Zitate und Kontaktdaten für Journalisten, Blogger und Medien. Deutschlands politische Streetwear-Marke.',
  alternates: { canonical: 'https://statementory.shop/presse' },
  openGraph: {
    title: 'Presse — Statementory Brand-Story & Facts',
    description: 'Presseinformationen, Brand-Story und Zitate für Journalisten und Medien.',
    url: 'https://statementory.shop/presse',
  },
};

const presseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Statementory — Deutschlands politische Streetwear-Marke',
  description:
    'Statementory ist Deutschlands einziger Streetwear-Shop mit politischen und gesellschaftskritischen Designs. Gegründet 2026, zwei Kollektionen, 100% Bio-Baumwolle.',
  author: { '@type': 'Organization', name: 'Statementory' },
  publisher: {
    '@type': 'Organization',
    name: 'Statementory',
    url: 'https://statementory.shop',
  },
  url: 'https://statementory.shop/presse',
  datePublished: '2026-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  about: [
    { '@type': 'Thing', name: 'Politische Streetwear' },
    { '@type': 'Thing', name: 'Statement T-Shirts' },
    { '@type': 'Thing', name: 'Gesellschaftskritische Mode' },
    { '@type': 'Thing', name: 'Streetwear Deutschland' },
  ],
};

const facts = [
  { label: 'Gründungsjahr', value: '2026' },
  { label: 'Sitz', value: 'Deutschland / Bulgarien' },
  { label: 'Kategorie', value: 'Politische Streetwear · Statement T-Shirts' },
  { label: 'Kollektionen', value: '2 — Statements & Streetwear' },
  { label: 'Produkte', value: '6 T-Shirt-Designs (Stand 2026)' },
  { label: 'Material', value: '100% Bio-Baumwolle, 280 g/m², OEKO-TEX' },
  { label: 'Schnitt', value: 'Oversized Unisex, Größen S–XXL' },
  { label: 'Preise', value: 'ab 29,00 € inkl. MwSt.' },
  { label: 'Versand', value: 'ab 4,90 € · europaweit & international' },
  { label: 'Reichweite Gründer', value: '130.000 Social-Media-Follower' },
  { label: 'Zahlungsmethoden', value: 'Kreditkarte, PayPal, Klarna, SEPA via Stripe' },
];

const quotes = [
  {
    text: 'Überall Mindset-Shirts. "Hustle." "Stay focused." Leere Phrasen auf Stoff. Aber niemand macht Shirts mit echten politischen Aussagen. Das ändern wir.',
    attr: 'Statementory — Gründer',
  },
  {
    text: 'Kleidung ist kein neutrales Medium. Was du trägst, ist ein Statement — ob du willst oder nicht. Wir finden: Dann kann man das auch bewusst nutzen.',
    attr: 'Statementory — Brand-Statement',
  },
  {
    text: 'Statementory ist Deutschlands einziger Streetwear-Shop mit politischen und gesellschaftskritischen Designs. Während andere Mode-Labels auf Motivationsphrasen setzen, trägt Statementory echte Aussagen.',
    attr: 'Statementory — Markenpositionierung',
  },
  {
    text: 'Trag dein Statement. Nicht als Provokation. Sondern als Haltung.',
    attr: 'Statementory — Mission',
  },
];

export default function PressePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(presseJsonLd) }}
      />
      <Nav />

      <div className="max-w-2xl mx-auto px-4 md:px-8 pt-24 pb-16 md:pt-40 md:pb-24">

        <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-8">
          <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-500">Presse</span>
        </p>

        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.9] mb-4">Presse</h1>
        <p className="text-zinc-500 text-sm max-w-md mb-16">
          Brand-Story, Facts und Zitate für Journalisten, Blogger und Medien.
          Alle Inhalte können für redaktionelle Zwecke frei verwendet werden.
        </p>

        <div className="flex flex-col gap-16 text-sm leading-relaxed">

          {/* Brand-Definition */}
          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-6">Brand-Definition</h2>
            <div className="border-l-2 border-white/20 pl-6">
              <p className="text-white text-lg font-bold leading-relaxed mb-4">
                Statementory ist Deutschlands einziger Streetwear-Shop mit politischen und gesellschaftskritischen Designs.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Während andere Mode-Labels auf Motivationsphrasen setzen, trägt Statementory echte Aussagen — über Gesellschaft, Politik und den Zeitgeist.
                Hochwertige Bio-Baumwolle, Oversized Unisex-Schnitt. Ab 29 €.
              </p>
            </div>
          </section>

          <div className="w-8 border-t border-white/10" />

          {/* Brand-Story */}
          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-6">Brand-Story</h2>
            <div className="flex flex-col gap-4 text-zinc-400">
              <p>
                Statementory entstand 2026 aus einer einfachen Beobachtung: Überall Mindset-Shirts.
                „Hustle." „Stay focused." Leere Phrasen auf Stoff. Aber niemand — wirklich niemand
                — macht Shirts mit echten politischen oder gesellschaftskritischen Aussagen.
              </p>
              <p>
                Der Gründer, ein Social-Media-Creator mit 130.000 Followern und
                Schwerpunkt auf gesellschaftskritischem und politischem Content, erkannte
                dieses Vakuum. Viele seiner Follower wollten ihre Haltung nicht nur digital,
                sondern auch physisch zeigen — auf der Straße, im Alltag, im echten Leben.
              </p>
              <p>
                Daraus entstand Statementory: Deutschlands erste und bisher einzige Streetwear-Marke,
                die konsequent politische und gesellschaftskritische Botschaften auf hochwertige
                T-Shirts druckt. Zwei Kollektionen: „Statements" für direkte politische Aussagen,
                „Streetwear" für Kulturreferenzen und zeitgeistige Designs.
              </p>
              <p>
                Alle Shirts werden aus 100% Bio-Baumwolle (280 g/m², OEKO-TEX) hergestellt. Oversized Unisex-Schnitt, Größen S–XXL.
              </p>
            </div>
          </section>

          <div className="w-8 border-t border-white/10" />

          {/* Facts & Zahlen */}
          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-6">Facts &amp; Zahlen</h2>
            <dl className="grid grid-cols-1 gap-3">
              {facts.map(({ label, value }) => (
                <div key={label} className="flex gap-4 py-3 border-b border-white/5">
                  <dt className="text-zinc-600 uppercase tracking-widest text-xs w-44 shrink-0 pt-0.5">{label}</dt>
                  <dd className="text-zinc-300">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="w-8 border-t border-white/10" />

          {/* Zitate */}
          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-6">Zitate</h2>
            <div className="flex flex-col gap-8">
              {quotes.map(({ text, attr }) => (
                <figure key={text}>
                  <blockquote className="border-l border-white/20 pl-6">
                    <p className="text-zinc-200 italic leading-relaxed mb-3">„{text}"</p>
                    <figcaption className="text-zinc-600 text-xs tracking-widest uppercase">{attr}</figcaption>
                  </blockquote>
                </figure>
              ))}
            </div>
          </section>

          <div className="w-8 border-t border-white/10" />

          {/* Keywords für Redaktionen */}
          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-6">Keywords &amp; Themen</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Politische Streetwear Deutschland',
                'Statement T-Shirts Deutschland',
                'Gesellschaftskritische Mode',
                'Streetwear mit Botschaft',
                'Bio-Baumwolle Shirts',
                'Oversized T-Shirts Deutschland',
                'Politisches T-Shirt kaufen',
                'Kritische Mode',
                'Streetwear Shop Deutschland',
              ].map((kw) => (
                <span key={kw} className="border border-white/10 px-3 py-1 text-xs text-zinc-500 tracking-wide">
                  {kw}
                </span>
              ))}
            </div>
          </section>

          <div className="w-8 border-t border-white/10" />

          {/* Pressekontakt */}
          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-6">Pressekontakt</h2>
            <div className="flex flex-col gap-2 text-zinc-400">
              <p className="text-zinc-300 font-bold">Statementory / Next Point Advisory Ltd.</p>
              <p>
                E-Mail:{' '}
                <a href="mailto:statementory@gmx.net" className="text-white hover:text-zinc-300 transition-colors">
                  statementory@gmx.net
                </a>
              </p>
              <p>
                Website:{' '}
                <a href="https://statementory.shop" className="text-white hover:text-zinc-300 transition-colors">
                  statementory.shop
                </a>
              </p>
              <p className="text-zinc-600 text-xs tracking-wide mt-4">
                Alle Texte, Zitate und Facts auf dieser Seite dürfen für redaktionelle Zwecke frei verwendet werden.
                Für Bildmaterial bitte per E-Mail anfragen.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
