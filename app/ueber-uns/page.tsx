import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Über uns — Die Story hinter Statementory',
  description:
    'Statementory entstand aus einer einfachen Beobachtung: Jeder trägt Mindset-Shirts, aber niemand macht Shirts mit echten politischen Aussagen. Das ändern wir. Trag dein Statement.',
  alternates: { canonical: 'https://statementory.shop/ueber-uns' },
  openGraph: {
    title: 'Über uns — Die Story hinter Statementory',
    description:
      'Kleidung als Haltung, nicht nur als Mode. Gesellschaftskritische Streetwear, designed in Germany.',
    url: 'https://statementory.shop/ueber-uns',
  },
};

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <section className="flex flex-col items-center justify-center min-h-screen text-center px-8 pt-20">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">Die Story</p>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-none mb-8">
          Wear your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            Statement.
          </span>
        </h1>
        <div className="w-8 border-t border-white/10 mx-auto" />
      </section>

      <section className="px-8 pb-32 max-w-2xl mx-auto">

        <div className="flex flex-col gap-16">

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
