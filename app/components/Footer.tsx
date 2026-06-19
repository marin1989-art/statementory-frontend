import Link from 'next/link';
import CookieSettingsLink from './CookieSettingsLink';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-8 py-8 text-zinc-700 text-xs tracking-widest uppercase">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span>© 2026 Statementory — statementory.shop</span>
        <div className="flex gap-8">
          <Link href="/kontakt" className="hover:text-zinc-400 transition-colors">Kontakt</Link>
          <Link href="/impressum" className="hover:text-zinc-400 transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-zinc-400 transition-colors">Datenschutz</Link>
          <CookieSettingsLink />
        </div>
      </div>
    </footer>
  );
}
