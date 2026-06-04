import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Denken statt Folgen — Statement T-Shirt | 29 €',
  description:
    'Statement T-Shirt "Denken statt Folgen" — politische Streetwear für kritische Köpfe. Oversized Unisex, 100% Bio-Baumwolle, 280 g/m², Siebdruck made in Germany. 29 €.',
  alternates: {
    canonical: 'https://statementory.shop/produkte/denken-statt-folgen',
  },
  openGraph: {
    title: '"Denken statt Folgen" Statement T-Shirt — Statementory',
    description:
      'Politisches Statement T-Shirt "Denken statt Folgen". Oversized Unisex, 100% Bio-Baumwolle. 29 €.',
    url: 'https://statementory.shop/produkte/denken-statt-folgen',
    images: [
      {
        url: 'https://statementory.shop/denkenstattfolgen.png',
        width: 574,
        height: 875,
        alt: 'Denken statt Folgen — Statement T-Shirt Mockup',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '"Denken statt Folgen" Statement T-Shirt',
    description: 'Oversized Unisex, 100% Bio-Baumwolle. 29 €.',
    images: ['https://statementory.shop/denkenstattfolgen.png'],
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Denken statt Folgen — Statement T-Shirt',
  description:
    'Politisches Statement T-Shirt "Denken statt Folgen". Oversized Unisex-Schnitt, 100% Bio-Baumwolle, 280 g/m², Siebdruck made in Germany.',
  image: 'https://statementory.shop/denkenstattfolgen.png',
  url: 'https://statementory.shop/produkte/denken-statt-folgen',
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
