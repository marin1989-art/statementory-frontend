import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not A Muse. A Mood. — Streetwear T-Shirt | 39 €',
  description:
    'Streetwear T-Shirt "Not A Muse. A Mood." — Mona Lisa neu interpretiert. Kunst trifft Street. Oversized Unisex, 100% Bio-Baumwolle, 280 g/m². 39 €, Versand ab 4,90 €.',
  alternates: {
    canonical: 'https://statementory.shop/produkte/not-a-muse-a-mood',
  },
  openGraph: {
    title: '"Not A Muse. A Mood." Streetwear T-Shirt — Statementory',
    description:
      'Streetwear T-Shirt "Not A Muse. A Mood." — Mona Lisa neu interpretiert. Oversized Unisex, 100% Bio-Baumwolle. 39 €.',
    url: 'https://statementory.shop/produkte/not-a-muse-a-mood',
    images: [
      {
        url: 'https://statementory.shop/monalisa.png',
        width: 906,
        height: 842,
        alt: 'Not A Muse. A Mood. — Streetwear T-Shirt mit Mona Lisa Print',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '"Not A Muse. A Mood." Streetwear T-Shirt',
    description: 'Mona Lisa neu interpretiert. Oversized Unisex, 100% Bio-Baumwolle. 39 €.',
    images: ['https://statementory.shop/monalisa.png'],
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Not A Muse. A Mood. — Streetwear T-Shirt',
  description:
    'Streetwear T-Shirt "Not A Muse. A Mood." — die Mona Lisa neu interpretiert. Kunst trifft Street. Oversized Unisex-Schnitt, 100% Bio-Baumwolle, 280 g/m².',
  image: 'https://statementory.shop/monalisa.png',
  url: 'https://statementory.shop/produkte/not-a-muse-a-mood',
  brand: { '@type': 'Brand', name: 'Statementory' },
  category: 'Bekleidung > T-Shirts',
  material: '100% Bio-Baumwolle',
  color: 'Weiß',
  offers: {
    '@type': 'Offer',
    price: '39.00',
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
