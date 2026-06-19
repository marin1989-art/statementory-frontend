import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Statementory — DSGVO-konforme Informationen zu Datenverarbeitung, Stripe, Printful und deinen Rechten.',
  alternates: { canonical: 'https://statementory.shop/datenschutz' },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <div className="max-w-2xl mx-auto px-8 pt-40 pb-24">

        <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-8">
          <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-500">Datenschutz</span>
        </p>

        <h1 className="text-5xl font-black uppercase tracking-tight leading-[0.9] mb-16">Datenschutz&shy;erklärung</h1>

        <div className="flex flex-col gap-12 text-sm leading-relaxed">

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">1. Verantwortlicher</h2>
            <div className="text-zinc-400 flex flex-col gap-1">
              <p className="text-zinc-300 font-bold">Next Point Advisory Ltd.</p>
              <p>ul. Stanyo Vasilev Nr. 43, Dorf Markovo, PLZ 9973</p>
              <p>Gemeinde Kaspitschan, Region Schumen, Bulgarien</p>
              <p className="mt-2">E-Mail: <a href="mailto:statementory@gmx.net" className="text-zinc-300 hover:text-white transition-colors">statementory@gmx.net</a></p>
            </div>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">2. Datenerhebung beim Kauf</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Beim Abschluss einer Bestellung werden folgende personenbezogene Daten erhoben und verarbeitet:
            </p>
            <ul className="text-zinc-400 flex flex-col gap-2 list-none pl-0">
              <li className="flex gap-3"><span className="text-zinc-600">—</span><span>Name und Lieferadresse</span></li>
              <li className="flex gap-3"><span className="text-zinc-600">—</span><span>E-Mail-Adresse (für Bestellbestätigung)</span></li>
              <li className="flex gap-3"><span className="text-zinc-600">—</span><span>Bestelldetails (Produkte, Mengen, Preise)</span></li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Die Daten werden nur so lange gespeichert, wie es zur Abwicklung der Bestellung und zur Erfüllung gesetzlicher Aufbewahrungspflichten erforderlich ist.
            </p>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">3. Stripe — Zahlungsabwicklung</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Für die Zahlungsabwicklung nutzen wir den Dienst <span className="text-zinc-300">Stripe Payments Europe, Ltd.</span>, 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Bei Abschluss einer Zahlung werden deine Zahlungsdaten direkt an Stripe übermittelt. Wir erhalten selbst keine vollständigen Zahlungsdaten (z. B. Kreditkartennummern). Stripe verarbeitet diese Daten gemäß eigener Datenschutzrichtlinie.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Weitere Informationen:{' '}
              <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white transition-colors underline underline-offset-2">
                stripe.com/de/privacy
              </a>
            </p>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">4. Printful — Fulfillment-Partner</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Die Produktion und der Versand deiner Bestellung erfolgt durch <span className="text-zinc-300">Printful, Inc.</span>, 11025 Westlake Dr, Charlotte, NC 28273, USA.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Zur Auftragsabwicklung werden dein Name, deine Lieferadresse sowie die bestellten Artikel an Printful übermittelt. Die Übermittlung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Für die Datenübermittlung in die USA stützen wir uns auf Standardvertragsklauseln gemäß Art. 46 DSGVO.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Weitere Informationen:{' '}
              <a href="https://www.printful.com/policies/privacy" target="_blank" rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white transition-colors underline underline-offset-2">
                printful.com/policies/privacy
              </a>
            </p>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">5. Cookies & lokaler Speicher</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Diese Website verwendet lokalen Browserspeicher (localStorage) zur technisch notwendigen Speicherung des Warenkorbs. Eine Einwilligung ist hierfür nicht erforderlich.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Darüber hinaus wird — nur bei ausdrücklicher Einwilligung — der Meta Pixel eingesetzt (siehe Abschnitt 6). Beim Bezahlvorgang über Stripe können seitens Stripe technisch notwendige Cookies gesetzt werden. Diese unterliegen der Datenschutzrichtlinie von Stripe.
            </p>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">6. Meta Pixel (Facebook)</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Mit deiner Einwilligung setzen wir den <span className="text-zinc-300">Meta Pixel</span> der Meta Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland, ein.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Der Meta Pixel ist ein Analyse- und Werbewerkzeug, das erfasst, wie Besucher mit unserer Website interagieren (z. B. Seitenaufrufe). Diese Daten werden an Server von Meta übertragen und können zur Messung der Werbewirksamkeit sowie zur Aussteuerung personalisierter Werbung auf Facebook und Instagram genutzt werden. Dabei können auch Daten in die USA übermittelt werden.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Rechtsgrundlage ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft widerrufen werden — über den Link <span className="text-zinc-300">„Cookie-Einstellungen"</span> im Footer dieser Seite.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Weitere Informationen zur Datenverarbeitung durch Meta:{' '}
              <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white transition-colors underline underline-offset-2">
                facebook.com/privacy/policy
              </a>
            </p>
          </section>

          <div className="w-8 border-t border-white/10" />

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">7. Deine Rechte</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Du hast gemäß DSGVO folgende Rechte bezüglich deiner personenbezogenen Daten:
            </p>
            <ul className="text-zinc-400 flex flex-col gap-2 list-none pl-0">
              <li className="flex gap-3"><span className="text-zinc-600">—</span><span><span className="text-zinc-300">Auskunft</span> (Art. 15 DSGVO)</span></li>
              <li className="flex gap-3"><span className="text-zinc-600">—</span><span><span className="text-zinc-300">Berichtigung</span> (Art. 16 DSGVO)</span></li>
              <li className="flex gap-3"><span className="text-zinc-600">—</span><span><span className="text-zinc-300">Löschung</span> (Art. 17 DSGVO)</span></li>
              <li className="flex gap-3"><span className="text-zinc-600">—</span><span><span className="text-zinc-300">Einschränkung der Verarbeitung</span> (Art. 18 DSGVO)</span></li>
              <li className="flex gap-3"><span className="text-zinc-600">—</span><span><span className="text-zinc-300">Datenübertragbarkeit</span> (Art. 20 DSGVO)</span></li>
              <li className="flex gap-3"><span className="text-zinc-600">—</span><span><span className="text-zinc-300">Widerspruch</span> gegen die Verarbeitung (Art. 21 DSGVO)</span></li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Zur Ausübung deiner Rechte wende dich an:{' '}
              <a href="mailto:statementory@gmx.net" className="text-zinc-300 hover:text-white transition-colors">statementory@gmx.net</a>
            </p>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. In Deutschland ist die jeweils zuständige Landesbehörde zuständig.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
