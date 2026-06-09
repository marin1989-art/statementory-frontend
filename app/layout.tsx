import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://statementory.shop";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Statementory — Politische Streetwear & Statement T-Shirts aus Deutschland",
    template: "%s | Statementory",
  },
  description:
    "Statement T-Shirts mit Haltung. Gesellschaftskritische Streetwear, designed in Germany. Bio-Baumwolle, Oversized Unisex-Schnitt. Versand ab 4,90 €.",
  keywords: [
    "politische Streetwear",
    "Statement T-Shirts Deutschland",
    "gesellschaftskritische Mode",
    "Streetwear mit Botschaft",
    "Statement Shirts kaufen",
    "politische T-Shirts",
    "Bio-Baumwolle T-Shirt",
    "Oversized T-Shirt Deutschland",
    "Streetwear Shop Deutschland",
  ],
  authors: [{ name: "Statementory" }],
  creator: "Statementory",
  publisher: "Next Point Advisory Ltd.",
  alternates: {
    canonical: BASE_URL,
    languages: { "de-DE": BASE_URL },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Statementory",
    title: "Statementory — Politische Streetwear & Statement T-Shirts",
    description:
      "Statement T-Shirts mit Haltung. Gesellschaftskritische Streetwear, designed in Germany. Bio-Baumwolle, Oversized Unisex-Schnitt.",
    images: [
      {
        url: "/allesistgut.png",
        width: 640,
        height: 952,
        alt: "Statementory — Statement T-Shirts mit Haltung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Statementory — Politische Streetwear & Statement T-Shirts",
    description:
      "Statement T-Shirts mit Haltung. Gesellschaftskritische Streetwear, designed in Germany.",
    images: ["/allesistgut.png"],
  },
  verification: {
    google: 'Y0It4bnl-ocEuJqaEAhiVbb0oWkRM_LjBClw1Wuc5U8',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ClothingStore"],
  name: "Statementory",
  alternateName: "Statementory Shop",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  email: "statementory@gmx.net",
  description:
    "Statementory ist Deutschlands einziger Streetwear-Shop mit politischen und gesellschaftskritischen Designs. 100% Bio-Baumwolle, ab 29 €.",
  slogan: "Trag dein Statement.",
  foundingDate: "2026",
  knowsAbout: [
    "Politische Streetwear",
    "Statement T-Shirts",
    "Gesellschaftskritische Mode",
    "Streetwear Deutschland",
    "Bio-Baumwolle T-Shirts",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Statementory Kollektionen",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Statements",
        description: "Politische und gesellschaftskritische T-Shirts",
        url: `${BASE_URL}/statements`,
      },
      {
        "@type": "OfferCatalog",
        name: "Streetwear",
        description: "Kulturreferenzen neu gedacht — Kunst trifft Street",
        url: `${BASE_URL}/streetwear`,
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "BG",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Statementory",
  url: BASE_URL,
  description:
    "Statement T-Shirts und politische Streetwear aus Deutschland. Bio-Baumwolle, Oversized Unisex.",
  inLanguage: "de-DE",
  publisher: {
    "@type": "Organization",
    name: "Statementory",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','1537717031482759');
              fbq('track','PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1537717031482759&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
