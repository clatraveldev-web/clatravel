import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPackageBySlug, getAllPackageSlugs, packages } from "@/lib/data/packages";
import { HeroSlider } from "@/components/packages/HeroSlider";
import { PackageDetails } from "@/components/packages/PackageDetails";
import { PricingCard } from "@/components/packages/PricingCard";
import { ItinerarySection } from "@/components/packages/ItinerarySection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { formatIDR } from "@/lib/utils";

interface PackagePageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all packages
export async function generateStaticParams() {
    return getAllPackageSlugs().map((slug) => ({
        slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
    const { slug } = await params;
    const pkg = getPackageBySlug(slug);

    if (!pkg) {
        return {
            title: "Package Not Found",
            description: "The requested travel package could not be found.",
        };
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clatravel.com";
    const pageUrl = `${siteUrl}/packages/${slug}`;
    const formattedPrice = formatIDR(pkg.startingPrice);

    return {
        title: pkg.title,
        description: `${pkg.description} Mulai dari ${formattedPrice}. ${pkg.duration}, ${pkg.groupSize}.`,
        keywords: [
            `paket wisata ${pkg.country}`,
            `tour ${pkg.country}`,
            pkg.title,
            "liburan",
            "travel",
            "agen perjalanan Indonesia",
            ...pkg.highlights,
        ],
        openGraph: {
            type: "website",
            locale: "id_ID",
            url: pageUrl,
            siteName: "ClaTravel",
            title: `${pkg.title} - Travel Package | ClaTravel`,
            description: `${pkg.tagline}. ${pkg.description.slice(0, 150)}...`,
            images: [
                {
                    url: pkg.heroImages[0],
                    width: 1200,
                    height: 630,
                    alt: pkg.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${pkg.title} - ClaTravel`,
            description: `${pkg.tagline}. Mulai dari ${formattedPrice}. Pesan sekarang!`,
            images: [pkg.heroImages[0]],
        },
        alternates: {
            canonical: pageUrl,
        },
    };
}

export default async function PackagePage({ params }: PackagePageProps) {
    const { slug } = await params;
    const pkg = getPackageBySlug(slug);

    if (!pkg) {
        notFound();
    }

    // Get other packages for recommendations
    const otherPackages = packages.filter((p) => p.slug !== slug).slice(0, 4);

    return (
        <>
            {/* Hero Slider */}
            <HeroSlider
                images={pkg.heroImages}
                title={pkg.title}
                tagline={pkg.tagline}
                country={pkg.country}
                duration={pkg.duration}
                groupSize={pkg.groupSize}
            />

            {/* Main Content */}
            <section className="py-12 md:py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left Content - 2/3 width */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Package Details */}
                            <PackageDetails
                                description={pkg.description}
                                highlights={pkg.highlights}
                                included={pkg.included}
                                excluded={pkg.excluded}
                            />

                            <Separator />

                            {/* Itinerary */}
                            <ItinerarySection itinerary={pkg.itinerary} />
                        </div>

                        {/* Right Sidebar - 1/3 width */}
                        <div className="lg:col-span-1">
                            <PricingCard
                                options={pkg.pricingOptions}
                                currency={pkg.currency}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Packages */}
            <section className="py-16 md:py-24 bg-accent/30">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Jelajahi Destinasi Lainnya
                            </h2>
                            <p className="text-muted-foreground mt-2">
                                Temukan lebih banyak pengalaman perjalanan menakjubkan
                            </p>
                        </div>
                        <Link
                            href="/#packages"
                            className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                        >
                            Lihat Semua
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {otherPackages.map((otherPkg) => (
                            <Link
                                key={otherPkg.id}
                                href={`/packages/${otherPkg.slug}`}
                                className="group"
                            >
                                <Card className="overflow-hidden border-0 shadow-lg card-hover bg-card p-0 gap-0">
                                    <CardContent className="p-0">
                                        <div className="relative w-full h-48 overflow-hidden">
                                            <Image
                                                src={otherPkg.heroImages[0]}
                                                alt={otherPkg.title}
                                                fill
                                                className="object-cover object-center img-zoom"
                                                sizes="(max-width: 768px) 100vw, 25vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <Badge className="absolute top-3 left-3 bg-white/90 text-foreground">
                                                {otherPkg.country}
                                            </Badge>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {otherPkg.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {otherPkg.duration}
                                            </p>
                                            <p className="text-lg font-bold text-primary mt-2">
                                                {formatIDR(otherPkg.startingPrice)}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-8 md:hidden">
                        <Link
                            href="/#packages"
                            className="inline-flex items-center gap-2 text-primary font-semibold"
                        >
                            Lihat Semua Paket
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
