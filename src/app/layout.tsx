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

export const metadata: Metadata = {
  title: "ClaTravel - Your Gateway to Amazing Destinations",
  description: "Discover extraordinary travel experiences with ClaTravel. Explore curated packages to Singapore, Thailand, Malaysia, Korea, Japan, Australia, Europe, and Umrah pilgrimages.",
  keywords: "travel agency, tour packages, Singapore, Thailand, Malaysia, Korea, Japan, Australia, Schengen, Umrah, vacation, holiday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
