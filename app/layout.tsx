import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollRevealInit from "@/components/ui/ScrollRevealInit";
import JsonLd from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: "#9775FF",
};

export const metadata: Metadata = {
  title: "Vyuhon — AI-First Business Transformation Partner",
  description: "Vyuhon partners with organisations to imagine, design, build, implement, and continuously optimise intelligent businesses — from strategy to scale.",
  metadataBase: new URL("https://vyuhon.com"),
  openGraph: {
    title: "Vyuhon — AI-First Business Transformation Partner",
    description: "From Strategy to Scale. One Trusted Partner.",
    url: "https://vyuhon.com",
    siteName: "Vyuhon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyuhon — AI-First Business Transformation Partner",
    description: "From Strategy to Scale. One Trusted Partner.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* TODO: Add font preloads once licensed fonts land
        <link rel="preload" href="/fonts/SeasonMix-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/SeasonMix-Medium.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Matter-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Matter-Medium.woff2" as="font" type="font/woff2" crossOrigin="" />
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <JsonLd data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://vyuhon.com/#organization",
              "name": "Vyuhon",
              "url": "https://vyuhon.com",
              "logo": "https://vyuhon.com/favicon.svg",
              "email": "hello@vyuhon.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressCountry": "IN"
              },
              "sameAs": [
                // TODO: Add social URLs
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://vyuhon.com/#website",
              "url": "https://vyuhon.com",
              "name": "Vyuhon",
              "publisher": {
                "@id": "https://vyuhon.com/#organization"
              }
            }
          ]
        }} />
        <ScrollRevealInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
