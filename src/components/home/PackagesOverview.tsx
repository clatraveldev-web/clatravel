"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ArrowRight, Star } from "lucide-react";
import { packages } from "@/lib/data/packages";
import { formatIDR } from "@/lib/utils";

export function PackagesOverview() {
    return (
        <section id="packages" className="py-20 md:py-28 bg-accent/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                        Travel Packages
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Complete Travel{" "}
                        <span className="text-primary">Packages</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        All-inclusive packages designed for hassle-free travel.
                        From accommodations to guided tours, we&apos;ve got everything covered.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg) => (
                        <Card
                            key={pkg.id}
                            className="group overflow-hidden border-0 shadow-lg card-hover bg-card p-0"
                        >
                            <CardContent className="p-0">
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={pkg.heroImages[0]}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover img-zoom"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    {/* Country Badge */}
                                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white">
                                        {pkg.country}
                                    </Badge>

                                    {/* Rating */}
                                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                                        <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                                        <span className="text-xs font-semibold text-foreground">4.9</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 space-y-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                                            {pkg.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {pkg.tagline}
                                        </p>
                                    </div>

                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="h-4 w-4" />
                                            <span>{pkg.duration.split("/")[0].trim()}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Users className="h-4 w-4" />
                                            <span>{pkg.groupSize.split("-")[1]?.trim() || pkg.groupSize}</span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                                            <span
                                                key={index}
                                                className="text-xs px-2 py-1 bg-accent rounded-full text-muted-foreground"
                                            >
                                                {highlight.split(" ").slice(0, 2).join(" ")}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Price & CTA */}
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                        <div>
                                            <span className="text-xs text-muted-foreground">Starting from</span>
                                            <p className="text-xl font-bold text-primary">
                                                {formatIDR(pkg.startingPrice)}
                                            </p>
                                        </div>
                                        <Button
                                            size="sm"
                                            className="group/btn"
                                            asChild
                                        >
                                            <Link href={`/packages/${pkg.slug}`}>
                                                View
                                                <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
