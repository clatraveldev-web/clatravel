import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { PackagesOverview } from "@/components/home/PackagesOverview";
import { Testimonials } from "@/components/home/Testimonials";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clatravel.com";

export const metadata: Metadata = {
  title: "ClaTravel - Your Gateway to Amazing Destinations",
  description: "Discover extraordinary travel experiences with ClaTravel. Explore curated tour packages to Singapore, Thailand, Malaysia, Korea, Japan, Australia, Europe, and Umrah pilgrimages. Professional travel agency based in Jakarta, Indonesia.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "ClaTravel",
    title: "ClaTravel - Your Gateway to Amazing Destinations",
    description: "Discover extraordinary travel experiences with ClaTravel. 8+ destinations, 10K+ happy travelers. Book your dream vacation today!",
    images: [
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "ClaTravel - Travel Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClaTravel - Your Gateway to Amazing Destinations",
    description: "Discover extraordinary travel experiences. 8+ destinations, 10K+ happy travelers. Book now!",
    images: ["https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <PackagesOverview />
      <Testimonials />
    </>
  );
}
