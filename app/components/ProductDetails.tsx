interface ProductDetailsProps {
  variant?: 'stanley-stella' | 'gildan5000';
}

export default function ProductDetails({ variant = 'stanley-stella' }: ProductDetailsProps) {
  if (variant === 'gildan5000') {
    return (
      <>
        <p className="text-sm text-zinc-400 leading-relaxed mb-8">
          Das klassische Gildan 5000 T-Shirt sorgt mit seinem festen Baumwollstoff für eine strukturierte Optik, die dem Basic-Tee ein hochwertiges Upgrade verleiht. Es behält seine Form auch nach vielen Wäschen, lässt sich ideal kombinieren und eignet sich perfekt für zeitlose Streetwear-Looks. Mit deinem Design wird daraus ein langlebiges Statement-Piece.
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-xs tracking-widest uppercase">
          <div>
            <p className="text-zinc-600 mb-1">Modell</p>
            <p className="text-zinc-400">Gildan 5000</p>
          </div>
          <div>
            <p className="text-zinc-600 mb-1">Gewicht</p>
            <p className="text-zinc-400">170–180 g/m²</p>
          </div>
          <div className="col-span-2">
            <p className="text-zinc-600 mb-1">Material</p>
            <p className="text-zinc-400 normal-case">
              100 % Baumwolle
              <span className="block text-zinc-600 mt-1">
                Sport Grey: 90 % Baumwolle, 10 % Polyester · Ash Grey: 99 % Baumwolle, 1 % Polyester · Heather-Farben: 50 % Baumwolle, 50 % Polyester
              </span>
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-zinc-600 mb-1">Verarbeitung</p>
            <p className="text-zinc-400 normal-case">
              Vorgeschrumpftes Jersey · Garn mit offenem Ende · Schlauchware ohne Seitennähte · genähter Nacken- und Schulterbereich · doppelte Nähte an Ärmeln und Saum · Pflegeetikett zum Abreißen
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-zinc-600 mb-1">Herkunft</p>
            <p className="text-zinc-400 normal-case">Rohware aus Honduras, Nicaragua, Haiti, Dominikanische Republik, Bangladesch und Mexiko</p>
          </div>
          <div className="col-span-2">
            <p className="text-zinc-600 mb-1">Hinweise</p>
            <p className="text-zinc-400 normal-case">Weiß kann leicht cremefarben wirken. Bei Natural sind dunkle Farbpunkte im Stoff möglich. Der Hersteller stellt auf eine neue Kragennaht um, daher können Shirts mit doppelter und einfacher Naht gemischt ausgeliefert werden.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="text-sm text-zinc-400 leading-relaxed mb-8">
        Dieses hochwertige T-Shirt besteht aus 100&nbsp;% ringgesponnener Bio-Baumwolle und ist ideal für umweltbewusste Käufer. Es ist besonders angenehm zu tragen&nbsp;– kein Wunder, wenn es schnell zu deinem neuen Lieblingsshirt wird.
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-xs tracking-widest uppercase">
        <div>
          <p className="text-zinc-600 mb-1">Material</p>
          <p className="text-zinc-400 normal-case">100 % ringgesponnene Bio-Baumwolle</p>
        </div>
        <div>
          <p className="text-zinc-600 mb-1">Gewicht</p>
          <p className="text-zinc-400">180 g/m²</p>
        </div>
        <div>
          <p className="text-zinc-600 mb-1">Stoffart</p>
          <p className="text-zinc-400">Single-Jersey</p>
        </div>
        <div>
          <p className="text-zinc-600 mb-1">Passform</p>
          <p className="text-zinc-400">Normale Passform</p>
        </div>
        <div className="col-span-2">
          <p className="text-zinc-600 mb-1">Verarbeitung</p>
          <p className="text-zinc-400 normal-case">Eingesetzte Ärmel · 1×1 Rippstrick am Kragen · breite Doppelnaht an Ärmeln und Saum · Nackenband aus Eigenstoff</p>
        </div>
        <div className="col-span-2">
          <p className="text-zinc-600 mb-1">Zertifizierung</p>
          <p className="text-zinc-400 normal-case">GOTS &amp; OCS zertifiziert · OEKO-TEX STANDARD 100 (Nr.&nbsp;1112055, Centexbel) · PETA-Approved Vegan</p>
        </div>
        <div>
          <p className="text-zinc-600 mb-1">Herkunft</p>
          <p className="text-zinc-400 normal-case">Rohware aus Bangladesch</p>
        </div>
      </div>
    </>
  );
}
