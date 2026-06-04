import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Statementory — Next Point Advisory Ltd., Angaben gemäß § 5 TMG.',
  alternates: { canonical: 'https://statementory.shop/impressum' },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <div className="max-w-2xl mx-auto px-8 pt-40 pb-24">

        <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-8">
          <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-500">Impressum</span>
        </p>

        <h1 className="text-5xl font-black uppercase tracking-tight leading-[0.9] mb-16">Impressum</h1>

        <div className="flex flex-col gap-12 text-sm leading-relaxed">

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-zinc-300 flex flex-col gap-1">
              <p className="font-bold text-white">Next Point Advisory Ltd.</p>
              <p className="text-zinc-500 text-xs tracking-widest uppercase">Einpersonengesellschaft mit beschränkter Haftung (E.O.O.D.)</p>
              <p className="mt-3">ul. Stanyo Vasilev Nr. 43</p>
              <p>Dorf Markovo, PLZ 9973</p>
              <p>Gemeinde Kaspitschan, Region Schumen</p>
              <p>Bulgarien</p>
            </div>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">Vertreten durch</h2>
            <p className="text-zinc-300">Marin Möller</p>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">Registrierung</h2>
            <div className="text-zinc-300 flex flex-col gap-1">
              <p>Registriert im bulgarischen Handelsregister</p>
              <p>Registrierungsnummer (EIK): <span className="text-white font-bold">208566753</span></p>
            </div>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">Kontakt</h2>
            <div className="text-zinc-300 flex flex-col gap-1">
              <p>E-Mail: <a href="mailto:statementory@gmx.net" className="text-white hover:text-zinc-300 transition-colors">statementory@gmx.net</a></p>
              <p>Website: <a href="https://statementory.shop" className="text-white hover:text-zinc-300 transition-colors">statementory.shop</a></p>
            </div>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">Hinweis zur EU-Streitschlichtung</h2>
            <p className="text-zinc-400 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white transition-colors underline underline-offset-2">
                https://ec.europa.eu/consumers/odr/
              </a>.
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">Haftung für Inhalte</h2>
            <p className="text-zinc-400 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
