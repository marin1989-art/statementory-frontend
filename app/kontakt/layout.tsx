import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt — Statementory',
  description: 'Fragen, Feedback oder Kooperationsanfragen — schreib uns über das Kontaktformular.',
  alternates: { canonical: 'https://statementory.shop/kontakt' },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
