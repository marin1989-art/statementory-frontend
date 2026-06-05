import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alles ist gut — Statement T-Shirt | 29 €',
  description:
    'Statement T-Shirt "Alles ist gut" — gesellschaftskritische Streetwear. Oversized Unisex, 100% Bio-Baumwolle, 280 g/m², Siebdruck made in Germany. 29 € inkl. MwSt.',
  alternates: {
    canonical: 'https://statementory.shop/produkte/alles-ist-gut',
  },
  openGraph: {
    title: '"Alles ist gut" Statement T-Shirt — Statementory',
    description:
      'Gesellschaftskritisches Statement T-Shirt "Alles ist gut". Oversized Unisex, 100% Bio-Baumwolle. 29 €.',
    url: 'https://statementory.shop/produkte/alles-ist-gut',
    images: [
      {
        url: 'https://statementory.shop/allesistgut.png',
        width: 640,
        height: 952,
        alt: 'Alles ist gut — Statement T-Shirt Mockup',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '"Alles ist gut" Statement T-Shirt',
    description: 'Oversized Unisex, 100% Bio-Baumwolle. 29 €.',
    images: ['https://statementory.shop/allesistgut.png'],
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Alles ist gut — Statement T-Shirt',
  description:
    'Gesellschaftskritisches Statement T-Shirt "Alles ist gut". Oversized Unisex-Schnitt, 100% Bio-Baumwolle, 280 g/m², Siebdruck made in Germany.',
  image: 'https://statementory.shop/allesistgut.png',
  url: 'https://statementory.shop/produkte/alles-ist-gut',
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
    { '@type': 'Question', name: 'Welche Größen gibt es?', acceptedAnswer: { '@type': 'Answer', text: 'S, M, L, XL und XXL. Der Schnitt ist Oversized Unisex — bei normalem Fit eine Größe kleiner wählen.' } },
    { '@type': 'Question', name: 'Wie wird das Design gedruckt?', acceptedAnswer: { '@type': 'Answer', text: 'Siebdruck made in Germany. Langlebig, farbstark und waschbeständig bis 40 °C. Linksherum waschen empfohlen.' } },
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
