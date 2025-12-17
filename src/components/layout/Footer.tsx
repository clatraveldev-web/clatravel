"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const destinations = [
    { href: "/packages/singapore", label: "Singapore" },
    { href: "/packages/thailand", label: "Thailand" },
    { href: "/packages/malaysia", label: "Malaysia" },
    { href: "/packages/korea", label: "South Korea" },
    { href: "/packages/japan", label: "Japan" },
    { href: "/packages/australia", label: "Australia" },
    { href: "/packages/schengen", label: "Europe" },
    { href: "/packages/umrah", label: "Umrah" },
];

const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Youtube, label: "Youtube" },
];

export function Footer() {
    const t = useTranslations("footer");
    const tNav = useTranslations("nav");

    const quickLinks = [
        { href: "/", label: tNav("home") },
        { href: "/#destinations", label: tNav("destinations") },
        { href: "/#packages", label: tNav("packages") },
        { href: "/#about", label: tNav("about") },
        { href: "/#contact", label: tNav("contact") },
    ];

    return (
        <footer id="contact" className="bg-foreground text-background">
            {/* Newsletter Section */}
            <div className="bg-primary py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                                {t("newsletterTitle")}
                            </h3>
                            <p className="text-primary-foreground/80">
                                {t("newsletterDescription")}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-stretch">
                            <input
                                type="email"
                                placeholder={t("emailPlaceholder")}
                                className="h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[280px]"
                            />
                            <Button className="h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6">
                                {t("subscribe")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Company Info */}
                        <div className="space-y-6">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="p-2 rounded-lg bg-primary">
                                    <Plane className="h-6 w-6 text-primary-foreground" />
                                </div>
                                <span className="text-xl font-bold">ClaTravel</span>
                            </Link>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {t("tagline")}
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:text-primary-foreground transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Destinations */}
                        <div>
                            <h4 className="font-semibold text-lg mb-6">{tNav("destinations")}</h4>
                            <ul className="space-y-3">
                                {destinations.map((dest) => (
                                    <li key={dest.href}>
                                        <Link
                                            href={dest.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                        >
                                            {dest.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold text-lg mb-6">{tNav("home")}</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-semibold text-lg mb-6">{t("contactUs")}</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground text-sm">
                                        JL. Manunggal XVII No. 35<br />
                                        Cipayung, Jakarta Timur 13810
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-primary shrink-0" />
                                    <div className="flex flex-col text-sm">
                                        <a
                                            href="tel:+622122045054"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            (021) 22045054
                                        </a>
                                        <a
                                            href="https://wa.me/6285714707483"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            085714707483
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-primary shrink-0" />
                                    <a
                                        href="mailto:hello@clatravel.com"
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        hello@clatravel.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="bg-white/10" />

            {/* Copyright */}
            <div className="py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <p>{t("copyright")}</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-primary transition-colors">
                                {t("privacyPolicy")}
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                {t("termsConditions")}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
