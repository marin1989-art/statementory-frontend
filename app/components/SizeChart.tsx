interface Measurement {
  size: string;
  laenge: number;
  breite: number;
  aermel: number;
}

export const GILDAN_MEASUREMENTS: Measurement[] = [
  { size: 'S',   laenge: 71,   breite: 45.7, aermel: 39.7 },
  { size: 'M',   laenge: 73.7, breite: 50.8, aermel: 43.2 },
  { size: 'L',   laenge: 76.2, breite: 56,   aermel: 47   },
  { size: 'XL',  laenge: 78.7, breite: 61,   aermel: 50.8 },
  { size: 'XXL', laenge: 81.3, breite: 66,   aermel: 54.6 },
  { size: '3XL', laenge: 83.8, breite: 71,   aermel: 58   },
];

export const STANLEY_STELLA_MEASUREMENTS: Measurement[] = [
  { size: 'S',   laenge: 69, breite: 49.5, aermel: 22.5 },
  { size: 'M',   laenge: 73, breite: 53.5, aermel: 24   },
  { size: 'L',   laenge: 75, breite: 56.5, aermel: 24.5 },
  { size: 'XL',  laenge: 77, breite: 59.5, aermel: 25   },
  { size: 'XXL', laenge: 79, breite: 63.5, aermel: 25.5 },
  { size: '3XL', laenge: 81, breite: 67.5, aermel: 26   },
];

interface SizeChartProps {
  measurements: Measurement[];
}

export default function SizeChart({ measurements }: SizeChartProps) {
  return (
    <div className="mb-8">
      <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">Größentabelle</p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left pb-2 pr-4 text-zinc-600 tracking-widest uppercase font-normal">Gr.</th>
              <th className="text-right pb-2 pr-4 text-zinc-600 tracking-widest uppercase font-normal">Länge</th>
              <th className="text-right pb-2 pr-4 text-zinc-600 tracking-widest uppercase font-normal">Breite</th>
              <th className="text-right pb-2 text-zinc-600 tracking-widest uppercase font-normal">Ärmel</th>
            </tr>
          </thead>
          <tbody>
            {measurements.map(({ size, laenge, breite, aermel }) => (
              <tr key={size} className="border-b border-white/5 last:border-0">
                <td className="py-2 pr-4 text-white font-bold tracking-widest">{size}</td>
                <td className="py-2 pr-4 text-zinc-400 text-right">{laenge}</td>
                <td className="py-2 pr-4 text-zinc-400 text-right">{breite}</td>
                <td className="py-2 text-zinc-400 text-right">{aermel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-zinc-700 text-xs tracking-widest uppercase mt-2">Alle Maße in cm · Flach gemessen</p>
    </div>
  );
}
