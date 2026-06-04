import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Good Morning, Friends And Haters — Streetwear T-Shirt | 39 €',
  description:
    'Streetwear T-Shirt "Good Morning, Friends And Haters" — Kulturreferenz neu interpretiert. Oversized Unisex, 100% Bio-Baumwolle, 280 g/m². 39 €, Versand ab 4,90 €.',
  alternates: {
    canonical: 'https://statementory.shop/produkte/good-morning-friends-and-haters',
  },
  openGraph: {
    title: '"Good Morning, Friends And Haters" Streetwear T-Shirt — Statementory',
    description:
      'Streetwear T-Shirt "Good Morning, Friends And Haters". Oversized Unisex, 100% Bio-Baumwolle. 39 €.',
    url: 'https://statementory.shop/produkte/good-morning-friends-and-haters',
    images: [
      {
        url: 'https://statementory.shop/goodmorning.png',
        width: 898,
        height: 874,
        alt: 'Good Morning Friends And Haters — Streetwear T-Shirt Mockup',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '"Good Morning, Friends And Haters" Streetwear T-Shirt',
    description: 'Oversized Unisex, 100% Bio-Baumwolle. 39 €.',
    images: ['https://statementory.shop/goodmorning.png'],
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Good Morning, Friends And Haters — Streetwear T-Shirt',
  description:
    'Streetwear T-Shirt "Good Morning, Friends And Haters". Kulturreferenz neu interpretiert. Oversized Unisex-Schnitt, 100% Bio-Baumwolle, 280 g/m².',
  image: 'https://statementory.shop/goodmorning.png',
  url: 'https://statementory.shop/produkte/good-morning-friends-and-haters',
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
