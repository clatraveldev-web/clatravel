import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PackageDetailsProps {
    description: string;
    highlights: string[];
    included: string[];
    excluded: string[];
}

export function PackageDetails({
    description,
    highlights,
    included,
    excluded,
}: PackageDetailsProps) {
    return (
        <div className="space-y-8">
            {/* Description */}
            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Trip</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
            </div>

            {/* Highlights */}
            <Card className="border-0 shadow-md bg-accent/30">
                <CardHeader>
                    <CardTitle className="text-xl">Trip Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                    <span className="text-primary text-sm font-semibold">{index + 1}</span>
                                </div>
                                <span className="text-foreground">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Included & Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Included */}
                <Card className="border-0 shadow-md">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <div className="p-1.5 rounded-full bg-green-100">
                                <Check className="h-4 w-4 text-green-600" />
                            </div>
                            What&apos;s Included
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <ul className="space-y-3">
                            {included.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Excluded */}
                <Card className="border-0 shadow-md">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <div className="p-1.5 rounded-full bg-red-100">
                                <X className="h-4 w-4 text-red-600" />
                            </div>
                            What&apos;s Not Included
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <ul className="space-y-3">
                            {excluded.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <X className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
