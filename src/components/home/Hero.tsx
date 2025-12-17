"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80')`,
                }}
            />

            {/* Overlay */}
            <div className="hero-overlay absolute inset-0" />

            {/* Animated particles/dots effect */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-100" />
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200" />
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-16 text-center">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white/90">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                        </span>
                        <span className="text-sm font-medium">Discover 8+ Amazing Destinations</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                        Explore the World with{" "}
                        <span className="text-secondary">Extraordinary</span>{" "}
                        Journeys
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        From the bustling streets of Singapore to the spiritual paths of Umrah,
                        we craft unforgettable travel experiences tailored to your dreams.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
                            asChild
                        >
                            <Link href="#packages">
                                Explore Packages
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="#contact">
                                Contact Us
                            </Link>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-4 md:pt-8 pb-6 md:pb-4">
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <p className="text-2xl font-bold">8+</p>
                                <p className="text-sm text-white/70">Destinations</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg">
                                <Users className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <p className="text-2xl font-bold">10K+</p>
                                <p className="text-sm text-white/70">Happy Travelers</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg">
                                <Calendar className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <p className="text-2xl font-bold">15+</p>
                                <p className="text-sm text-white/70">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
