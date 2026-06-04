'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Nav() {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <Link href="/" className="text-xl font-bold tracking-widest uppercase hover:text-zinc-300 transition-colors">
        Statementory
      </Link>
      <div className="flex gap-8 text-sm tracking-widest uppercase text-zinc-400">
        <Link href="/" className="hover:text-white transition-colors">Shop</Link>
        <Link href="/statements" className="hover:text-white transition-colors">Statements</Link>
        <Link href="/streetwear" className="hover:text-white transition-colors">Streetwear</Link>
        <Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link>
      </div>
      <Link href="/warenkorb"
        className="relative text-sm tracking-widest uppercase border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-all">
        Warenkorb
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-black w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
}
