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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {children}
    </>
  );
}
