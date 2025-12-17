"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Dewi Anggraini",
        location: "Jakarta, Indonesia",
        avatar: "https://ui-avatars.com/api/?name=Dewi+Anggraini&background=1a5d4a&color=fff&size=100",
        rating: 5,
        destination: "Japan",
        text: "Tour Jepang 10 hari bersama ClaTravel benar-benar magical! Dari menginap di ryokan hingga upacara minum teh, semuanya diatur dengan sempurna. Setiap detail dipikirkan dengan baik. Sangat recommended!",
    },
    {
        id: 2,
        name: "Ahmad Rizki",
        location: "Surabaya, Indonesia",
        avatar: "https://ui-avatars.com/api/?name=Ahmad+Rizki&background=1a5d4a&color=fff&size=100",
        rating: 5,
        destination: "Umrah",
        text: "Paket Umrah melebihi ekspektasi. Pembimbing sangat berpengalaman dan perhatian, hotel dekat dengan Haram, semuanya terorganisir dengan baik. Perjalanan spiritual yang nyaman dan berkesan.",
    },
    {
        id: 3,
        name: "Sinta Maharani",
        location: "Bandung, Indonesia",
        avatar: "https://ui-avatars.com/api/?name=Sinta+Maharani&background=1a5d4a&color=fff&size=100",
        rating: 5,
        destination: "Thailand",
        text: "Dari kuil Bangkok sampai pantai Phuket, petualangan Thailand kami luar biasa! Floating market dan kelas memasak jadi highlight. Value for money dan pengalaman yang amazing.",
    },
    {
        id: 4,
        name: "Budi Santoso",
        location: "Yogyakarta, Indonesia",
        avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=1a5d4a&color=fff&size=100",
        rating: 5,
        destination: "South Korea",
        text: "Sebagai K-pop fan, trip Korea ini impian jadi kenyataan! Tim ClaTravel bahkan dapat tiket konser K-pop. Pengalaman hanbok dan tour istana tidak terlupakan. Absolutely perfect!",
    },
    {
        id: 5,
        name: "Ratna Kusuma",
        location: "Semarang, Indonesia",
        avatar: "https://ui-avatars.com/api/?name=Ratna+Kusuma&background=1a5d4a&color=fff&size=100",
        rating: 5,
        destination: "Europe",
        text: "Tour Schengen multi-negara adalah trip of a lifetime! 14 hari, 6 negara, kenangan tak terhitung. Pengalaman Eurail dan skip-the-line bikin semuanya lancar dan menyenangkan.",
    },
];

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const t = useTranslations("testimonials");

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                        {t("badge")}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        {t("title")} <span className="text-primary">{t("titleHighlight")}</span> {t("titleEnd")}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t("description")}
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main Testimonial Card */}
                        <Card className="border-0 shadow-xl bg-card">
                            <CardContent className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Quote Icon */}
                                    <div className="shrink-0">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                            <Quote className="h-8 w-8 text-primary" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-6">
                                        {/* Stars */}
                                        <div className="flex gap-1">
                                            {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                            ))}
                                        </div>

                                        {/* Text */}
                                        <p className="text-lg md:text-xl text-foreground leading-relaxed">
                                            &ldquo;{testimonials[activeIndex].text}&rdquo;
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-4 pt-4 border-t border-border">
                                            <div className="relative w-14 h-14 rounded-full overflow-hidden">
                                                <Image
                                                    src={testimonials[activeIndex].avatar}
                                                    alt={testimonials[activeIndex].name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground">
                                                    {testimonials[activeIndex].name}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {testimonials[activeIndex].location} • {testimonials[activeIndex].destination} Trip
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prevSlide}
                                className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            {/* Dots */}
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === activeIndex
                                            ? "w-8 bg-primary"
                                            : "bg-border hover:bg-muted-foreground"
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 pt-16 border-t border-border">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-foreground">10K+</p>
                            <p className="text-sm text-muted-foreground">{t("stats.travelers")}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-foreground">15+</p>
                            <p className="text-sm text-muted-foreground">{t("stats.years")}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-foreground">4.9</p>
                            <p className="text-sm text-muted-foreground">{t("stats.rating")}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-foreground">24/7</p>
                            <p className="text-sm text-muted-foreground">{t("stats.support")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
