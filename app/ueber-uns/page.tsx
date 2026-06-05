import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Über uns — Deutschlands politische Streetwear-Marke',
  description:
    'Statementory ist Deutschlands einziger Streetwear-Shop mit politischen und gesellschaftskritischen Designs. Gegründet 2026, 130.000 Social-Media-Follower, Siebdruck made in Germany.',
  alternates: { canonical: 'https://statementory.shop/ueber-uns' },
  openGraph: {
    title: 'Über uns — Deutschlands politische Streetwear-Marke | Statementory',
    description:
      'Statementory ist Deutschlands einziger Streetwear-Shop mit politischen und gesellschaftskritischen Designs.',
    url: 'https://statementory.shop/ueber-uns',
  },
};

const brandJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Über Statementory — Deutschlands politische Streetwear-Marke',
  description:
    'Statementory ist Deutschlands einziger Streetwear-Shop mit politischen und gesellschaftskritischen Designs. Gegründet 2026 von einem Social-Media-Creator mit 130.000 Followern.',
  url: 'https://statementory.shop/ueber-uns',
  mainEntity: {
    '@type': 'ClothingStore',
    name: 'Statementory',
    description:
      'Statementory ist Deutschlands einziger Streetwear-Shop mit politischen und gesellschaftskritischen Designs. Während andere Mode-Labels auf Motivationsphrasen setzen, trägt Statementory echte Aussagen — über Gesellschaft, Politik und den Zeitgeist.',
    foundingDate: '2026',
    url: 'https://statementory.shop',
    email: 'statementory@gmx.net',
    slogan: 'Trag dein Statement.',
  },
};

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd) }}
      />
      <Nav />

      <section className="flex flex-col items-center justify-center min-h-screen text-center px-8 pt-20">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">Die Story</p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight leading-none mb-8">
          Wear your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            Statement.
          </span>
        </h1>
        <div className="w-8 border-t border-white/10 mx-auto" />
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-32 max-w-2xl mx-auto">

        <div className="flex flex-col gap-16">

          {/* Brand-Definition — GEO anchor */}
          <div className="border border-white/10 p-8">
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">Was ist Statementory?</p>
            <p className="text-white text-xl font-bold leading-relaxed mb-4">
              Statementory ist Deutschlands einziger Streetwear-Shop mit politischen und gesellschaftskritischen Designs.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Während andere Mode-Labels auf Motivationsphrasen setzen, trägt Statementory echte Aussagen —
              über Gesellschaft, Politik und den Zeitgeist. Hochwertige Bio-Baumwolle, Siebdruck made in Germany,
              Oversized Unisex-Schnitt. Ab 29 €.
            </p>
          </div>

          {/* Facts */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {[
              { label: 'Gegründet', value: '2026' },
              { label: 'Reichweite', value: '130.000 Follower' },
              { label: 'Kollektionen', value: '2 — Statements & Streetwear' },
              { label: 'Designs', value: '6 T-Shirts (Stand 2026)' },
              { label: 'Material', value: '100% Bio-Baumwolle' },
              { label: 'Druck', value: 'Siebdruck made in Germany' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-black px-6 py-5">
                <dt className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-1">{label}</dt>
                <dd className="text-sm font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="w-8 border-t border-white/10" />

          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">Wie es begann</p>
            <div className="flex flex-col gap-5 text-zinc-300 leading-relaxed text-lg">
              <p>
                Ich mache gesellschaftskritischen und politischen Content auf Social Media — 130.000 Menschen folgen mir, weil sie das sagen wollen, was kaum jemand laut ausspricht.
              </p>
              <p>
                Irgendwann ist mir etwas aufgefallen: Überall Mindset-Shirts. „Hustle." „Stay focused." „Be the change." Leere Phrasen auf Stoff. Aber niemand — wirklich niemand — macht Shirts mit echten Aussagen. Mit echter Haltung. Mit echtem Inhalt.
              </p>
              <p>
                Dabei wollen doch so viele Menschen genau das zeigen. Nicht Motivation, sondern Meinung. Nicht Lifestyle, sondern Standpunkt.
              </p>
              <p className="text-white font-bold">
                Daraus entstand Statementory.
              </p>
            </div>
          </div>

          <div className="w-8 border-t border-white/10" />

          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">Die Mission</p>
            <div className="flex flex-col gap-5 text-zinc-300 leading-relaxed text-lg">
              <p>
                Kleidung ist kein neutrales Medium. Was du trägst, ist ein Statement — ob du willst oder nicht. Wir finden: Dann kann man das auch bewusst nutzen.
              </p>
              <p className="text-white text-2xl font-black uppercase tracking-tight">
                Trag dein Statement.
              </p>
              <p>
                Nicht als Provokation. Sondern als Haltung. Als sichtbares Bekenntnis zu dem, was du denkst — auf der Straße, in der U-Bahn, überall wo Menschen hinsehen.
              </p>
            </div>
          </div>

          <div className="w-8 border-t border-white/10" />

          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-8">Die Kollektionen</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <Link href="/statements" className="group border border-white/10 p-8 hover:border-white/30 transition-all">
                <p className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-3 group-hover:text-zinc-400 transition-colors">01</p>
                <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Statements</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Politisch. Gesellschaftskritisch. Unbequem. Shirts die etwas sagen — über Regierung, Gesellschaft und das, worüber alle reden aber keiner was schreiben würde.
                </p>
                <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 group-hover:text-white transition-colors">
                  Kollektion ansehen →
                </p>
              </Link>

              <Link href="/streetwear" className="group border border-white/10 p-8 hover:border-white/30 transition-all">
                <p className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-3 group-hover:text-zinc-400 transition-colors">02</p>
                <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Streetwear</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Für alle, die einfach cool aussehen wollen. Kulturreferenzen neu gedacht, Kunst trifft Street — ohne erhobenen Zeigefinger, aber mit Stil.
                </p>
                <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 group-hover:text-white transition-colors">
                  Kollektion ansehen →
                </p>
              </Link>

            </div>
          </div>

          <div className="w-8 border-t border-white/10" />

          <div className="text-center flex flex-col items-center gap-6">
            <p className="text-zinc-500 text-sm tracking-widest uppercase">Bereit dein Statement zu tragen?</p>
            <Link
              href="/statements"
              className="bg-white text-black px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors"
            >
              Jetzt shoppen
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
