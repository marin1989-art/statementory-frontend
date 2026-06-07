import Image from 'next/image';
import Link from 'next/link';

export default function DemoPage() {
  return (
    <main className="bg-black text-white">

      {/* ── Label bar ── */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10 flex gap-6 px-6 py-3 text-xs tracking-widest uppercase text-zinc-500">
        <span className="text-white font-bold">Hero-Demo</span>
        <a href="#variant-a" className="hover:text-white transition-colors">↓ Variante A — Split-Screen</a>
        <a href="#variant-c" className="hover:text-white transition-colors">↓ Variante C — Shirt als Hintergrund</a>
        <Link href="/" className="ml-auto hover:text-white transition-colors">← Zurück zur echten Startseite</Link>
      </div>

      {/* ════════════════════════════════════════════
          VARIANTE A — Split-Screen
      ════════════════════════════════════════════ */}
      <section
        id="variant-a"
        className="min-h-screen grid grid-cols-1 md:grid-cols-2"
      >
        {/* Left: Text */}
        <div className="flex flex-col justify-center px-10 py-20 md:px-20 bg-black order-2 md:order-1">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">
            Variante A — Split-Screen
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.88] mb-10">
            Trag deine<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
              Haltung.
            </span>
          </h1>
          <p className="text-zinc-400 text-base max-w-sm mb-10 leading-relaxed">
            T-Shirts mit Aussage. Für alle, die nicht schweigen wollen.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-4 bg-white text-black text-sm font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Jetzt entdecken
            </button>
            <button className="px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:border-white/60 transition-colors">
              Alle Produkte
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative min-h-[60vw] md:min-h-screen bg-zinc-100 order-1 md:order-2 overflow-hidden">
          <Image
            src="/monalisa-back.png"
            alt="Not A Muse. A Mood. — Shirt Mockup"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-white/10" />

      {/* ════════════════════════════════════════════
          VARIANTE C — Shirt als Hintergrund
      ════════════════════════════════════════════ */}
      <section
        id="variant-c"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        {/* Split background: left half */}
        <div className="absolute inset-0 flex">
          <div className="relative w-1/2 overflow-hidden">
            <Image
              src="/make-men-back.png"
              alt="Make Men Men Again"
              fill
              className="object-cover object-center"
              style={{ filter: 'grayscale(40%) brightness(0.55)' }}
              priority
              sizes="50vw"
            />
          </div>
          {/* right half */}
          <div className="relative w-1/2 overflow-hidden">
            <Image
              src="/goodmorning-back.png"
              alt="Good Morning Friends And Haters"
              fill
              className="object-cover object-center"
              style={{ filter: 'grayscale(40%) brightness(0.55)' }}
              priority
              sizes="50vw"
            />
          </div>
        </div>
        {/* thin divider line between halves */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/10 z-10" />

        {/* Foreground text */}
        <div className="relative z-10 text-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-6">
            Variante C — Shirt als Hintergrund
          </p>
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tight leading-[0.85] mb-10">
            Trag deine<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
              Haltung.
            </span>
          </h1>
          <p className="text-zinc-300 text-base max-w-md mx-auto mb-10 leading-relaxed">
            T-Shirts mit Aussage. Für alle, die nicht schweigen wollen.
          </p>
          <button className="px-10 py-4 bg-white text-black text-sm font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors">
            Jetzt entdecken
          </button>
        </div>
      </section>

    </main>
  );
}
