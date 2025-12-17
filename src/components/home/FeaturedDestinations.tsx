"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { packages } from "@/lib/data/packages";
import { formatIDR } from "@/lib/utils";

const featuredDestinations = packages.slice(0, 6);

export function FeaturedDestinations() {
    const t = useTranslations("featured");
    const tCommon = useTranslations("common");

    return (
        <section id="destinations" className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                        {t("badge")}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        {t("title")}{" "}
                        <span className="text-primary">{t("titleHighlight")}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t("description")}
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr stagger-children">
                    {featuredDestinations.map((destination, index) => (
                        <Link
                            key={destination.id}
                            href={`/packages/${destination.slug}`}
                            className={`group relative overflow-hidden rounded-2xl card-hover block ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                                }`}
                        >
                            {/* Image Container */}
                            <div className={`relative overflow-hidden h-full ${index === 0 ? "min-h-[400px] md:min-h-[500px]" : "min-h-[280px]"}`}>
                                <Image
                                    src={destination.heroImages[0]}
                                    alt={destination.title}
                                    fill
                                    className="object-cover img-zoom"
                                    sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="space-y-2">
                                        <span className="inline-block px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-medium rounded-full">
                                            {destination.duration}
                                        </span>
                                        <h3 className={`font-bold text-white ${index === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
                                            {destination.title}
                                        </h3>
                                        <p className="text-white/80 text-sm line-clamp-2">
                                            {destination.tagline}
                                        </p>
                                        <div className="flex items-center justify-between pt-2">
                                            <div>
                                                <span className="text-white/60 text-sm">{tCommon("startingFrom")}</span>
                                                <p className="text-white font-bold text-lg">
                                                    {formatIDR(destination.startingPrice)}
                                                </p>
                                            </div>
                                            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                <ArrowRight className="h-5 w-5 text-white group-hover:text-primary-foreground" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        href="#packages"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                        {tCommon("viewAllDestinations")}
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
