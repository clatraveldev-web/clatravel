import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clatravel.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ClaTravel - Gerbang Anda Menuju Destinasi Menakjubkan",
    template: "%s | ClaTravel",
  },
  description: "Temukan pengalaman perjalanan luar biasa bersama ClaTravel. Jelajahi paket wisata ke Singapura, Thailand, Malaysia, Korea, Jepang, Australia, Eropa, dan perjalanan Umrah. Agen perjalanan profesional dari Jakarta, Indonesia.",
  keywords: ["agen perjalanan", "paket wisata", "Singapura", "Thailand", "Malaysia", "Korea", "Jepang", "Australia", "Schengen", "Umrah", "liburan", "travel Jakarta", "tour Indonesia"],
  authors: [{ name: "ClaTravel" }],
  creator: "ClaTravel",
  publisher: "ClaTravel",
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "ClaTravel",
    title: "ClaTravel - Gerbang Anda Menuju Destinasi Menakjubkan",
    description: "Temukan pengalaman perjalanan luar biasa bersama ClaTravel. Jelajahi paket wisata ke Singapura, Thailand, Malaysia, Korea, Jepang, Australia, Eropa, dan Umrah.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClaTravel - Agen Perjalanan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClaTravel - Gerbang Anda Menuju Destinasi Menakjubkan",
    description: "Temukan pengalaman perjalanan luar biasa bersama ClaTravel. Agen perjalanan profesional dari Jakarta, Indonesia.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a5d4a" />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
