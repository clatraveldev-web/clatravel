import { Hero } from "@/components/home/Hero";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { PackagesOverview } from "@/components/home/PackagesOverview";
import { Testimonials } from "@/components/home/Testimonials";

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
