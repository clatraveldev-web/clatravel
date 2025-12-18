"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Coffee, Camera, Utensils } from "lucide-react";

interface ItineraryDay {
    day: number;
    title: string;
    description: string;
    activities: string[];
}

interface ItinerarySectionProps {
    itinerary: ItineraryDay[];
}

const activityIcons = [MapPin, Coffee, Camera, Utensils];

export function ItinerarySection({ itinerary }: ItinerarySectionProps) {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Jadwal Perjalanan</h2>
                <p className="text-muted-foreground">
                    Intip apa saja yang bakal kamu lakukan setiap harinya.
                </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
                {itinerary.map((day, index) => (
                    <AccordionItem
                        key={day.day}
                        value={`day-${day.day}`}
                        className="border rounded-xl overflow-hidden shadow-sm bg-card"
                    >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                            <div className="flex items-center gap-4 text-left">
                                <Badge
                                    variant="outline"
                                    className="shrink-0 h-10 w-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground border-0"
                                >
                                    {day.day}
                                </Badge>
                                <div>
                                    <h3 className="font-semibold text-foreground">
                                        Hari {day.day}: {day.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-0.5">
                                        {day.activities.length} aktivitas direncanakan
                                    </p>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                            <div className="pt-4 border-t space-y-4">
                                <p className="text-muted-foreground">{day.description}</p>

                                <div className="space-y-3">
                                    <p className="text-sm font-medium text-foreground">
                                        Aktivitas Hari Ini:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {day.activities.map((activity, actIndex) => {
                                            const Icon = activityIcons[actIndex % activityIcons.length];
                                            return (
                                                <div
                                                    key={actIndex}
                                                    className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg"
                                                >
                                                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                                                        <Icon className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span className="text-sm text-foreground">{activity}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
