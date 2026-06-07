interface ProductFAQProps {
  price: string;
}

const faqs = [
  {
    q: 'Aus welchem Material besteht das T-Shirt?',
    a: '100 % ringgesponnene Bio-Baumwolle, 180 g/m², Single-Jersey. GOTS & OCS zertifiziert, OEKO-TEX STANDARD 100 (Nr. 1112055, Centexbel) und PETA-Approved Vegan. Angenehm zu tragen und nachhaltig produziert.',
  },
  {
    q: 'Welche Größen sind verfügbar?',
    a: 'S, M, L, XL, XXL und 3XL. Der Schnitt ist normale Passform (Unisex).',
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
