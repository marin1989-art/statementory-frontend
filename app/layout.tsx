import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  "@type": "Organization",
  name: "Statementory",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  email: "statementory@gmx.net",
  description:
    "Statement Streetwear mit Haltung — gesellschaftskritische T-Shirts, designed in Germany.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BG",
  },
  sameAs: [],
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
      </body>
    </html>
  );
}
