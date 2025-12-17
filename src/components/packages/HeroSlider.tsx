"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeroSliderProps {
    images: string[];
    title: string;
    tagline: string;
    country: string;
    duration: string;
    groupSize: string;
}

export function HeroSlider({
    images,
    title,
    tagline,
    country,
    duration,
    groupSize,
}: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
            {/* Image Slides */}
            <div className="relative h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`${title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="100vw"
                        />
                    </div>
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end">
                <div className="container mx-auto px-4 pl-16 md:pl-20 pb-16 md:pb-24">
                    <div className="max-w-3xl animate-fade-in">
                        {/* Country Badge */}
                        <Badge className="bg-secondary text-secondary-foreground mb-4">
                            <MapPin className="h-3 w-3 mr-1" />
                            {country}
                        </Badge>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            {title}
                        </h1>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl text-white/90 mb-6">
                            {tagline}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-white/80">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5" />
                                <span>{duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5" />
                                <span>{groupSize}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-6 w-6 text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full transition-colors"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-6 w-6 text-white" />
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? "w-8 bg-white"
                                : "bg-white/40 hover:bg-white/60"
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
