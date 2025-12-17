"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Phone, MessageCircle } from "lucide-react";
import { formatIDR, WHATSAPP_LINK } from "@/lib/utils";

interface PricingOption {
    name: string;
    price: number;
    description: string;
    features: string[];
}

interface PricingCardProps {
    options: PricingOption[];
    currency: string;
}

export function PricingCard({ options }: PricingCardProps) {
    const [selectedOption, setSelectedOption] = useState(0);

    return (
        <Card className="border-0 shadow-xl sticky top-24 p-0 gap-0 overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground px-6 py-4">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Book This Package</CardTitle>
                    <Badge className="bg-secondary text-secondary-foreground">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        4.9
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                {/* Price Options */}
                <div className="space-y-3">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedOption(index)}
                            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${selectedOption === index
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                                }`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-foreground">{option.name}</span>
                                <span className="text-lg font-bold text-primary">
                                    {formatIDR(option.price)}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                        </button>
                    ))}
                </div>

                {/* Selected Option Features */}
                <div className="space-y-3 pt-4 border-t">
                    <p className="text-sm font-medium text-foreground">
                        {options[selectedOption].name} Package Includes:
                    </p>
                    <ul className="space-y-2">
                        {options[selectedOption].features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Total Price */}
                <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-muted-foreground">Total Price</span>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-primary">
                                {formatIDR(options[selectedOption].price)}
                            </p>
                            <p className="text-xs text-muted-foreground">per person</p>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                    <Button className="w-full" size="lg" asChild>
                        <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Book via WhatsApp
                        </Link>
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="tel:+622122045054">
                                <Phone className="h-4 w-4 mr-2" />
                                Call
                            </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                WhatsApp
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Free cancellation up to 7 days before</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Best price guarantee</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
