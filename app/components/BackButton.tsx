'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/shop');
    }
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-[4.5rem] left-0 z-40 md:hidden flex items-center gap-2 bg-black/95 backdrop-blur-sm border-r border-b border-white/10 px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-white hover:border-white/30 active:scale-95 transition-all"
      aria-label="Zurück"
    >
      <span aria-hidden="true">←</span>
      <span>Zurück</span>
    </button>
  );
}
