interface ProductFAQProps {
  price: string;
}

const faqs = [
  {
    q: 'Aus welchem Material besteht das T-Shirt?',
    a: '100% Bio-Baumwolle, 280 g/m². Der Stoff ist vegan, OEKO-TEX zertifiziert und angenehm schwer — kein billiges Druck-Shirt, sondern ein hochwertiges Kleidungsstück.',
  },
  {
    q: 'Welche Größen sind verfügbar?',
    a: 'S, M, L, XL und XXL. Der Schnitt ist Oversized Unisex — das Shirt fällt bewusst größer aus. Wer einen engeren Fit bevorzugt, sollte eine Größe kleiner wählen.',
  },
  {
    q: 'Wie wird das Design aufgetragen?',
    a: 'Alle Designs werden im hochwertigen Siebdruckverfahren gedruckt — made in Germany. Der Druck ist langlebig, farbstark und waschbeständig bis 40 °C (Linksherum waschen empfohlen).',
  },
  {
    q: 'Was kostet der Versand?',
    a: 'Der Versand nach Deutschland kostet ab 4,90 €. Lieferung ist europaweit und international möglich. Die Lieferzeit beträgt in der Regel 5–10 Werktage nach Zahlungseingang.',
  },
  {
    q: 'Kann ich das Shirt zurückgeben?',
    a: 'Da jedes Shirt auf Bestellung produziert wird (Print-on-Demand), sind Rückgaben nur bei Produktionsfehlern oder falsch gelieferter Ware möglich. Bei Problemen bitte an statementory@gmx.net wenden.',
  },
];

export default function ProductFAQ({ price }: ProductFAQProps) {
  return (
    <section className="px-4 pb-12 md:px-12 md:pb-24 max-w-xl">
      <div className="w-8 border-t border-white/10 mb-10" />
      <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-8">Häufige Fragen</h2>
      <dl className="flex flex-col gap-7">
        {faqs.map(({ q, a }) => (
          <div key={q}>
            <dt className="text-sm font-bold text-white mb-2">{q}</dt>
            <dd className="text-sm text-zinc-400 leading-relaxed">{a}</dd>
          </div>
        ))}
        <div>
          <dt className="text-sm font-bold text-white mb-2">Was kostet das Shirt?</dt>
          <dd className="text-sm text-zinc-400 leading-relaxed">
            {price} inkl. MwSt. Keine versteckten Kosten. Zahlung per Kreditkarte, PayPal und weiteren deutschen Zahlungsmethoden über Stripe.
          </dd>
        </div>
      </dl>
    </section>
  );
}
