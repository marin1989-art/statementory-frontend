import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'FAQ — Häufige Fragen zu Statementory',
  description:
    'Alle Antworten zu Statementory: Was ist politische Streetwear? Welche Designs gibt es? Material, Versand, Rückgabe, Größen — alles auf einen Blick.',
  alternates: { canonical: 'https://statementory.shop/faq' },
  openGraph: {
    title: 'FAQ — Häufige Fragen | Statementory',
    description: 'Antworten zu Produkten, Versand, Material und der Brand Statementory.',
    url: 'https://statementory.shop/faq',
  },
};

const faqSections = [
  {
    title: 'Über die Marke',
    slug: 'marke',
    items: [
      {
        q: 'Was ist Statementory?',
        a: 'Statementory ist Deutschlands einziger Streetwear-Shop mit politischen und gesellschaftskritischen Designs. Gegründet 2026 von einem Social-Media-Creator mit 130.000 Followern, der bemerkte: Es gibt überall Motivations-Shirts, aber niemand macht Shirts mit echten politischen Aussagen. Das ändert Statementory.',
      },
      {
        q: 'Was macht Statementory einzigartig?',
        a: 'Statementory ist die einzige deutsche Streetwear-Marke, die konsequent politische und gesellschaftskritische Botschaften auf hochwertige T-Shirts druckt. Kein "Hustle"-Motivationskitsch — sondern echte Haltung zu Themen, die Menschen bewegen: Regierung, Gesellschaft, Zeitgeist. Alle Shirts aus 100% Bio-Baumwolle.',
      },
      {
        q: 'Wer steckt hinter Statementory?',
        a: 'Statementory wurde 2026 gegründet von einem deutschen Social-Media-Creator mit 130.000 Followern, der gesellschaftskritischen und politischen Content erstellt. Das Label entstand aus der Überzeugung, dass Kleidung kein neutrales Medium ist — und Haltung sichtbar sein sollte. Das Unternehmen ist als Next Point Advisory Ltd. registriert.',
      },
      {
        q: 'Was bedeutet "Trag dein Statement"?',
        a: '"Trag dein Statement" ist die Mission von Statementory. Kleidung ist kein neutrales Medium — was du trägst, sendet immer eine Botschaft. Statementory macht diese Botschaft bewusst und politisch: als sichtbares Bekenntnis zu dem, was du denkst, auf der Straße, in der U-Bahn, überall wo Menschen hinsehen.',
      },
      {
        q: 'Welche Kollektionen gibt es?',
        a: 'Statementory hat zwei Kollektionen: "Statements" mit politischen und gesellschaftskritischen Designs (ab 29 €) und "Streetwear" mit Kulturreferenzen neu gedacht — Kunst trifft Street (ab 39 €). Beide Kollektionen aus 100% Bio-Baumwolle, Oversized Unisex-Schnitt.',
      },
    ],
  },
  {
    title: 'Produkte & Material',
    slug: 'produkte',
    items: [
      {
        q: 'Welche Designs sind verfügbar?',
        a: 'Aktuell sind sechs Designs erhältlich: "Alles ist gut", "Denken statt Folgen", "Error 404 — Diese Regierung befindet sich derzeit außer Betrieb" und "Make Men Men Again" in der Statements-Kollektion; "Not A Muse. A Mood." und "Good Morning, Friends And Haters" in der Streetwear-Kollektion. Neue Drops folgen regelmäßig.',
      },
      {
        q: 'Aus welchem Material bestehen die T-Shirts?',
        a: 'Alle Statementory T-Shirts bestehen aus 100% Bio-Baumwolle mit 280 g/m². Das Gewicht macht sie angenehm schwer und langlebig — kein billiges Druck-Shirt, sondern ein hochwertiges Kleidungsstück. Der Stoff ist vegan und OEKO-TEX zertifiziert.',
      },
      {
        q: 'Was kosten die Shirts?',
        a: 'Die Statements-Kollektion kostet 29,00 € pro Shirt, die Streetwear-Kollektion 39,00 € — jeweils inkl. MwSt. Dazu kommt Versand ab 4,90 €.',
      },
    ],
  },
  {
    title: 'Größen & Passform',
    slug: 'groessen',
    items: [
      {
        q: 'Welche Größen sind verfügbar?',
        a: 'Alle Shirts sind in S, M, L, XL und XXL erhältlich.',
      },
      {
        q: 'Wie fällt die Größe aus?',
        a: 'Der Schnitt ist Oversized Unisex — die Shirts fallen bewusst größer aus als Standard-T-Shirts. Wer einen engeren, körpernaheren Fit bevorzugt, sollte eine Größe kleiner bestellen. Für den klassischen Oversized-Look einfach die eigene Normalgröße wählen.',
      },
      {
        q: 'Sind die Shirts für Männer und Frauen?',
        a: 'Ja. Der Oversized Unisex-Schnitt ist für alle Geschlechter konzipiert. Der weite, kastige Fit funktioniert sowohl als klassisches Herren-T-Shirt als auch als Oversized-Dress oder Crop-Look für Frauen.',
      },
    ],
  },
  {
    title: 'Bestellung & Versand',
    slug: 'versand',
    items: [
      {
        q: 'Was kostet der Versand nach Deutschland?',
        a: 'Der Versand nach Deutschland kostet ab 4,90 €. Zahlung ist sicher über Stripe möglich — per Kreditkarte, PayPal, Klarna und weiteren deutschen Zahlungsmethoden.',
      },
      {
        q: 'Liefert Statementory auch ins Ausland?',
        a: 'Ja. Statementory liefert europaweit und international — u.a. nach Österreich, Schweiz, Frankreich, Niederlande und viele weitere Länder. Die Versandkosten variieren je nach Zielland.',
      },
      {
        q: 'Wie lange dauert die Lieferung?',
        a: 'Da jedes Shirt individuell auf Bestellung produziert wird, beträgt die Lieferzeit in der Regel 5–10 Werktage nach Zahlungseingang. Die Produktion erfolgt über den Fulfillment-Partner Printful.',
      },
      {
        q: 'Wie bezahle ich?',
        a: 'Zahlung erfolgt sicher über Stripe: Kreditkarte (Visa, Mastercard), PayPal, Klarna, SEPA-Lastschrift und weitere Methoden. Die Zahlungsabwicklung ist vollständig verschlüsselt.',
      },
    ],
  },
  {
    title: 'Rückgabe & Reklamation',
    slug: 'rueckgabe',
    items: [
      {
        q: 'Kann ich ein Shirt zurückgeben?',
        a: 'Da jedes Shirt individuell auf Bestellung produziert wird (Print-on-Demand), sind reguläre Rückgaben aus Geschmacksgründen nicht möglich. Bei Produktionsfehlern, Druckfehlern oder falscher Lieferung wird selbstverständlich kulant reagiert.',
      },
      {
        q: 'Was tue ich bei einem Fehler oder Problem?',
        a: 'Bei Problemen mit deiner Bestellung — falsches Produkt, Druckfehler, beschädigte Ware — wende dich an statementory@gmx.net mit deiner Bestellnummer und einem Foto des Problems. Wir finden eine Lösung.',
      },
      {
        q: 'Wie pflege ich das Shirt richtig?',
        a: 'Das Shirt bei 30–40 °C waschen, Linksherum drehen (schützt den Druck), nicht im Trockner trocknen, nicht bügeln auf dem Druck. So bleibt der Druck lange erhalten.',
      },
    ],
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSections.flatMap((section) =>
    section.items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />

      <div className="max-w-2xl mx-auto px-4 md:px-8 pt-24 pb-16 md:pt-40 md:pb-24">

        <p className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-8">
          <Link href="/" className="hover:text-zinc-400 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-500">FAQ</span>
        </p>

        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.9] mb-4">Häufige Fragen</h1>
        <p className="text-zinc-500 text-sm max-w-md mb-16">
          Alles zu Statementory — der Marke, den Produkten, Versand und Rückgabe.
        </p>

        <div className="flex flex-col gap-16">
          {faqSections.map((section) => (
            <section key={section.slug} id={section.slug}>
              <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-8 flex items-center gap-4">
                <span>{section.title}</span>
                <span className="flex-1 border-t border-white/10" />
              </h2>
              <dl className="flex flex-col gap-8">
                {section.items.map(({ q, a }) => (
                  <div key={q} className="border-l border-white/10 pl-6">
                    <dt className="text-sm font-bold text-white mb-3">{q}</dt>
                    <dd className="text-sm text-zinc-400 leading-relaxed">{a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-4">Noch eine Frage?</p>
          <a
            href="mailto:statementory@gmx.net"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            statementory@gmx.net →
          </a>
        </div>

      </div>

      <Footer />
    </main>
  );
}
