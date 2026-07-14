import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollRevealInit from "@/components/ui/ScrollRevealInit";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <ScrollRevealInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
