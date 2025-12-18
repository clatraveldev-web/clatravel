"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";

export function Navbar() {
    const t = useTranslations("nav");
    const tCommon = useTranslations("common");

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: t("home") },
        { href: "/#destinations", label: t("destinations") },
        { href: "/#packages", label: t("packages") },
        { href: "/#about", label: t("about") },
        { href: "/#contact", label: t("contact") },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
                    : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <Image
                                src="/clalogo.png"
                                alt="ClaTravel Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto transition-all duration-300"
                                style={isScrolled
                                    ? { mixBlendMode: 'multiply' }
                                    : { filter: 'brightness(0) invert(1)' }
                                }
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Button
                                className={`transition-all ${isScrolled
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "bg-white text-primary hover:bg-white/90"
                                    }`}
                                asChild
                            >
                                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    {tCommon("bookNow")}
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`md:hidden ${isOpen ? "text-foreground" : (isScrolled ? "text-foreground" : "text-white")}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </nav>
                </div>
            </header>

            {/* Full Screen Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-background transition-all duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full">
                    {/* Navigation Links */}
                    <nav className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <Button className="mt-10 px-10 py-6 text-lg" asChild>
                        <Link
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                        >
                            {tCommon("bookNow")}
                        </Link>
                    </Button>

                    {/* Logo at bottom */}
                    <div className="absolute bottom-10 flex items-center">
                        <Image
                            src="/clalogo.png"
                            alt="ClaTravel Logo"
                            width={100}
                            height={33}
                            className="h-8 w-auto"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
