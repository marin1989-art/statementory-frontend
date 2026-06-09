import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error 404 Diese Regierung — Statement T-Shirt | 29 €',
  description:
    'Statement T-Shirt "Error 404 — Diese Regierung befindet sich derzeit außer Betrieb". Gesellschaftskritische Streetwear. Oversized Unisex, 100% Bio-Baumwolle. 29 €.',
  alternates: {
    canonical: 'https://statementory.shop/produkte/error-404-diese-regierung',
  },
  openGraph: {
    title: '"Error 404 Diese Regierung" Statement T-Shirt — Statementory',
    description:
      'Politisches Statement T-Shirt "Error 404 — Diese Regierung außer Betrieb". Oversized, 100% Bio-Baumwolle. 29 €.',
    url: 'https://statementory.shop/produkte/error-404-diese-regierung',
    images: [
      {
        url: 'https://statementory.shop/error.png',
        width: 306,
        height: 471,
        alt: 'Error 404 Diese Regierung — Statement T-Shirt Mockup',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '"Error 404 Diese Regierung" Statement T-Shirt',
    description: 'Oversized Unisex, 100% Bio-Baumwolle. 29 €.',
    images: ['https://statementory.shop/error.png'],
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Error 404 — Diese Regierung befindet sich derzeit außer Betrieb (T-Shirt)',
  description:
    'Gesellschaftskritisches Statement T-Shirt "Error 404 — Diese Regierung befindet sich derzeit außer Betrieb". Oversized Unisex, 100% Bio-Baumwolle.',
  image: 'https://statementory.shop/error.png',
  url: 'https://statementory.shop/produkte/error-404-diese-regierung',
  brand: { '@type': 'Brand', name: 'Statementory' },
  category: 'Bekleidung > T-Shirts',
  material: '100% Bio-Baumwolle',
  offers: {
    '@type': 'Offer',
    price: '29.00',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2027-12-31',
    seller: { '@type': 'Organization', name: 'Statementory', url: 'https://statementory.shop' },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: '4.90', currency: 'EUR' },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'DE' },
    },
  },
};


const productFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Aus welchem Material besteht das T-Shirt?', acceptedAnswer: { '@type': 'Answer', text: '100% Bio-Baumwolle, 280 g/m², OEKO-TEX zertifiziert. Oversized Unisex-Schnitt. Vegan.' } },
    { '@type': 'Question', name: 'Welche Größen gibt es?', acceptedAnswer: { '@type': 'Answer', text: 'S, M, L, XL, XXL und 3XL. Der Schnitt ist Oversized Unisex — bei normalem Fit eine Größe kleiner wählen.' } },
    { '@type': 'Question', name: 'Was kostet der Versand?', acceptedAnswer: { '@type': 'Answer', text: 'Ab 4,90 € nach Deutschland. Lieferung europaweit und international. Lieferzeit ca. 5–10 Werktage.' } },
    { '@type': 'Question', name: 'Ist eine Rückgabe möglich?', acceptedAnswer: { '@type': 'Answer', text: 'Da jedes Shirt auf Bestellung produziert wird (Print-on-Demand), sind Rückgaben nur bei Produktionsfehlern oder falscher Lieferung möglich. Kontakt: statementory@gmx.net.' } },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productFaqJsonLd) }}
      />
      {children}
    </>
  );
}
