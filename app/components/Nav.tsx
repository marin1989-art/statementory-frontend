'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { href: '/', label: 'Shop' },
  { href: '/statements', label: 'Statements' },
  { href: '/streetwear', label: 'Streetwear' },
  { href: '/ueber-uns', label: 'Über uns' },
];

export default function Nav() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <Link
          href="/"
          className="text-xl font-bold tracking-widest uppercase hover:text-zinc-300 transition-colors"
          onClick={() => setOpen(false)}
        >
          Statementory
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-zinc-400">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Cart */}
          <Link
            href="/warenkorb"
            className="relative text-sm tracking-widest uppercase border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-all"
            onClick={() => setOpen(false)}
          >
            <span className="hidden md:inline">Einkaufswagen</span>
            <span className="md:hidden" aria-label="Einkaufswagen">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-black w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          >
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col px-8 pt-28 pb-12 md:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col gap-0">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-3xl font-black uppercase tracking-tight text-white hover:text-zinc-400 transition-colors py-6 border-b border-white/10"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
