const SHIPPING_ROWS = [
  { label: 'Deutschland', value: '3–5 Werktage · ab 4,90 €' },
  { label: 'EU', value: '5–10 Werktage' },
  { label: 'Produktion', value: '+2–5 Werktage (POD)' },
  { label: 'Ab 75 € frei', value: 'Kostenloser Versand' },
];

export default function ShippingInfo() {
  return (
    <div className="mb-8">
      <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">Versand & Lieferung</p>
      <div className="flex flex-col text-xs">
        {SHIPPING_ROWS.map(({ label, value }, i) => (
          <div
            key={label}
            className={`flex justify-between items-baseline py-2 ${i > 0 ? 'border-t border-white/5' : ''}`}
          >
            <span className="text-zinc-600 tracking-widest uppercase">{label}</span>
            <span className="text-zinc-400">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
