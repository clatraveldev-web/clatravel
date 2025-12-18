export interface TravelPackage {
    id: string;
    slug: string;
    title: string;
    country: string;
    tagline: string;
    description: string;
    duration: string;
    groupSize: string;
    startingPrice: number;
    currency: string;
    heroImages: string[];
    highlights: string[];
    included: string[];
    excluded: string[];
    itinerary: {
        day: number;
        title: string;
        description: string;
        activities: string[];
    }[];
    pricingOptions: {
        name: string;
        price: number;
        description: string;
        features: string[];
    }[];
}

export const packages: TravelPackage[] = [
    // ============ SOUTHEAST ASIA - BUDGET FRIENDLY (~5 Mio) ============
    {
        id: "1",
        slug: "singapore",
        title: "Discover Singapore",
        country: "Singapore",
        tagline: "Where Tradition Meets Innovation",
        description: "Experience the magic of Singapore, a dazzling city-state where futuristic architecture blends seamlessly with rich cultural heritage. A perfect quick getaway to Asia's most exciting destination.",
        duration: "3 Days / 2 Nights",
        groupSize: "2-20 People",
        startingPrice: 312.5,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80",
            "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1920&q=80",
            "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1920&q=80"
        ],
        highlights: [
            "Marina Bay Sands SkyPark",
            "Gardens by the Bay",
            "Merlion Park",
            "Chinatown & Little India"
        ],
        included: [
            "3-star hotel accommodation",
            "Daily breakfast",
            "Airport transfers",
            "City tour"
        ],
        excluded: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Meals not mentioned"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & City Exploration",
                description: "Welcome to Singapore! Transfer to your hotel and explore the city.",
                activities: ["Airport pickup", "Hotel check-in", "Marina Bay Sands area", "Merlion Park", "Dinner at local hawker center"]
            },
            {
                day: 2,
                title: "Gardens & Culture",
                description: "Explore Gardens by the Bay and cultural neighborhoods.",
                activities: ["Gardens by the Bay", "Chinatown walking tour", "Little India exploration", "Orchard Road shopping"]
            },
            {
                day: 3,
                title: "Departure",
                description: "Free morning before your airport transfer.",
                activities: ["Free morning", "Souvenir shopping", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 312.5,
                description: "Budget-friendly Singapore trip",
                features: ["3-star hotel", "Shared transfers", "Group tours", "Breakfast included"]
            },
            {
                name: "Premium",
                price: 450,
                description: "Comfortable Singapore experience",
                features: ["4-star hotel", "Private transfers", "Small group tours", "Welcome dinner"]
            },
            {
                name: "Luxury",
                price: 625,
                description: "Premium Singapore getaway",
                features: ["5-star hotel", "Private transfers", "Private tours", "All meals included"]
            }
        ]
    },
    {
        id: "2",
        slug: "thailand",
        title: "Amazing Thailand",
        country: "Thailand",
        tagline: "Land of Smiles",
        description: "Discover the enchanting beauty of Thailand, from the golden temples of Bangkok to the vibrant street markets. Experience world-class cuisine and the warmest hospitality in Southeast Asia.",
        duration: "4 Days / 3 Nights",
        groupSize: "2-25 People",
        startingPrice: 312.5,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&q=80",
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80",
            "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1920&q=80"
        ],
        highlights: [
            "Grand Palace & Wat Pho",
            "Floating Markets",
            "Thai Street Food",
            "Temple Tours"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "All transfers",
            "Temple tour"
        ],
        excluded: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Optional activities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bangkok",
                description: "Arrive in the vibrant capital of Thailand.",
                activities: ["Airport pickup", "Hotel check-in", "Welcome dinner with Thai cuisine"]
            },
            {
                day: 2,
                title: "Bangkok Temples",
                description: "Explore Bangkok's most iconic temples.",
                activities: ["Grand Palace visit", "Wat Pho (Reclining Buddha)", "Wat Arun sunset"]
            },
            {
                day: 3,
                title: "Markets & Culture",
                description: "Experience local Thai life and markets.",
                activities: ["Chatuchak or local market", "Thai massage experience", "Khao San Road evening"]
            },
            {
                day: 4,
                title: "Departure",
                description: "Free time before your departure flight.",
                activities: ["Free morning", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 312.5,
                description: "Great value Thailand trip",
                features: ["3-star hotels", "Shared transfers", "Group tours", "Breakfast included"]
            },
            {
                name: "Premium",
                price: 437,
                description: "Comfortable Thai adventure",
                features: ["4-star hotels", "Private transfers", "Semi-private tours", "Welcome dinner"]
            },
            {
                name: "Luxury",
                price: 562,
                description: "Premium Thai experience",
                features: ["5-star hotels", "Private transfers", "Private tours", "Spa treatment", "Fine dining"]
            }
        ]
    },
    {
        id: "3",
        slug: "malaysia",
        title: "Magical Malaysia",
        country: "Malaysia",
        tagline: "Truly Asia",
        description: "Experience the diverse wonders of Malaysia, from the iconic Petronas Twin Towers to beautiful cultural heritage. Discover a perfect blend of modern cities and rich multicultural traditions.",
        duration: "3 Days / 2 Nights",
        groupSize: "2-20 People",
        startingPrice: 312.5,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=80",
            "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1920&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        ],
        highlights: [
            "Petronas Twin Towers",
            "Batu Caves Temple",
            "Kuala Lumpur City Tour",
            "Local Food Experience"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "All transfers",
            "City tour"
        ],
        excluded: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Meals not mentioned"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Kuala Lumpur",
                description: "Welcome to Malaysia! Transfer to your hotel in Kuala Lumpur.",
                activities: ["Airport pickup", "Hotel check-in", "Petronas Towers evening visit", "KLCC Park walk"]
            },
            {
                day: 2,
                title: "KL City Tour",
                description: "Explore the highlights of Kuala Lumpur.",
                activities: ["Batu Caves", "National Mosque", "Independence Square", "Central Market", "Jalan Alor food street"]
            },
            {
                day: 3,
                title: "Departure",
                description: "Free morning before departure.",
                activities: ["Free morning", "Shopping time", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 312.5,
                description: "Value-packed Malaysia tour",
                features: ["3-star hotels", "Shared transfers", "Group tours", "Breakfast included"]
            },
            {
                name: "Premium",
                price: 437,
                description: "Enhanced Malaysian experience",
                features: ["4-star hotels", "Private transfers", "Small group tours", "Welcome dinner"]
            },
            {
                name: "Luxury",
                price: 562,
                description: "Luxurious Malaysian escape",
                features: ["5-star hotels", "Private transfers", "Private tours", "All meals", "Spa treatment"]
            }
        ]
    },
    // ============ OTHER COUNTRIES - 50% CHEAPER WITH SIMPLIFIED ITINERARIES ============
    {
        id: "4",
        slug: "korea",
        title: "Stunning South Korea",
        country: "South Korea",
        tagline: "Where Tradition Meets K-Culture",
        description: "Immerse yourself in the dynamic energy of South Korea, from Seoul's futuristic skyline to ancient palaces. Experience K-pop culture, traditional hanbok, and incredible cuisine.",
        duration: "5 Days / 4 Nights",
        groupSize: "2-20 People",
        startingPrice: 800,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1920&q=80",
            "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1920&q=80",
            "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1920&q=80"
        ],
        highlights: [
            "Gyeongbokgung Palace",
            "N Seoul Tower",
            "Bukchon Hanok Village",
            "Korean BBQ Experience"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "All transfers",
            "Entrance fees",
            "Hanbok rental"
        ],
        excluded: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Optional activities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Seoul",
                description: "Arrive at Incheon Airport and transfer to your hotel in Seoul.",
                activities: ["Airport pickup", "Hotel check-in", "Myeongdong shopping", "Korean BBQ dinner"]
            },
            {
                day: 2,
                title: "Historic Seoul",
                description: "Explore Seoul's stunning palaces and traditional neighborhoods.",
                activities: ["Gyeongbokgung Palace", "Hanbok experience", "Bukchon Hanok Village", "Insadong art street"]
            },
            {
                day: 3,
                title: "Modern Seoul",
                description: "Experience the modern and trendy side of Seoul.",
                activities: ["Gangnam district", "COEX Mall", "N Seoul Tower sunset", "Hongdae nightlife"]
            },
            {
                day: 4,
                title: "Free Day",
                description: "Enjoy a free day to explore at your own pace.",
                activities: ["Free exploration", "Optional shopping", "Optional Nami Island trip", "Farewell dinner"]
            },
            {
                day: 5,
                title: "Departure",
                description: "Morning free time before transfer to airport.",
                activities: ["Free morning", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 800,
                description: "Essential Korea experience",
                features: ["3-star hotels", "Shared transfers", "Group tours", "Basic insurance"]
            },
            {
                name: "Premium",
                price: 1100,
                description: "Enhanced Korean adventure",
                features: ["4-star hotels", "Private transfers", "Small group tours", "Hanbok photoshoot"]
            },
            {
                name: "Luxury",
                price: 1500,
                description: "Ultimate K-experience",
                features: ["5-star hotels", "Private transfers", "Private tours", "Premium insurance", "K-pop experience"]
            }
        ]
    },
    {
        id: "5",
        slug: "japan",
        title: "Enchanting Japan",
        country: "Japan",
        tagline: "Land of the Rising Sun",
        description: "Discover the perfect harmony of ancient traditions and cutting-edge technology in Japan. From Tokyo's neon-lit streets to Kyoto's serene temples, experience a journey through time.",
        duration: "7 Days / 6 Nights",
        groupSize: "2-18 People",
        startingPrice: 1250,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80",
            "https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920&q=80",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80"
        ],
        highlights: [
            "Tokyo Shibuya & Akihabara",
            "Mount Fuji Views",
            "Kyoto Golden Pavilion",
            "Fushimi Inari Shrine"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "5-day JR Pass",
            "All transfers",
            "Entrance fees"
        ],
        excluded: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Meals not mentioned"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Tokyo",
                description: "Welcome to Japan! Transfer to your hotel in Tokyo.",
                activities: ["Airport pickup", "Hotel check-in", "Shibuya Crossing", "Welcome dinner"]
            },
            {
                day: 2,
                title: "Tokyo Highlights",
                description: "Explore the diverse neighborhoods of Tokyo.",
                activities: ["Senso-ji Temple", "Asakusa district", "Tokyo Skytree", "Akihabara"]
            },
            {
                day: 3,
                title: "Free Day in Tokyo",
                description: "Enjoy a free day to explore Tokyo at your own pace.",
                activities: ["Free exploration", "Optional Harajuku visit", "Optional Disney/DisneySea", "Evening free"]
            },
            {
                day: 4,
                title: "Shinkansen to Kyoto",
                description: "Take the bullet train to the ancient capital of Kyoto.",
                activities: ["Shinkansen experience", "Fushimi Inari Shrine", "Gion geisha district"]
            },
            {
                day: 5,
                title: "Kyoto Temples",
                description: "Explore Kyoto's UNESCO World Heritage temples.",
                activities: ["Kinkaku-ji (Golden Pavilion)", "Arashiyama bamboo grove", "Traditional tea ceremony"]
            },
            {
                day: 6,
                title: "Free Day in Kyoto",
                description: "Free day to explore Kyoto or optional day trips.",
                activities: ["Free exploration", "Optional Nara day trip", "Optional Osaka visit", "Farewell dinner"]
            },
            {
                day: 7,
                title: "Departure",
                description: "Transfer to Kansai Airport for your flight home.",
                activities: ["Free morning", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 1250,
                description: "Essential Japan experience",
                features: ["3-star hotels", "5-day JR Pass", "Group tours", "Basic insurance"]
            },
            {
                name: "Premium",
                price: 1750,
                description: "Enhanced Japanese journey",
                features: ["4-star hotels", "5-day JR Pass Green", "Small group tours", "Kimono experience"]
            },
            {
                name: "Luxury",
                price: 2500,
                description: "Ultimate Japan luxury",
                features: ["5-star hotels + 1 night ryokan", "JR Pass Green", "Private tours", "Kaiseki dinners"]
            }
        ]
    },
    {
        id: "6",
        slug: "australia",
        title: "Amazing Australia",
        country: "Australia",
        tagline: "The Land Down Under",
        description: "Explore the vast wonders of Australia, from the iconic Sydney Opera House to beautiful beaches. Experience diverse wildlife, stunning landscapes, and vibrant city life.",
        duration: "7 Days / 6 Nights",
        groupSize: "2-20 People",
        startingPrice: 1650,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80",
            "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1920&q=80",
            "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920&q=80"
        ],
        highlights: [
            "Sydney Opera House",
            "Sydney Harbour Bridge",
            "Bondi Beach",
            "Blue Mountains"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "All transfers",
            "Entrance fees",
            "City tour"
        ],
        excluded: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Optional activities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Sydney",
                description: "Welcome to Australia! Transfer to your hotel with harbor views.",
                activities: ["Airport pickup", "Hotel check-in", "Circular Quay walk", "Welcome dinner"]
            },
            {
                day: 2,
                title: "Sydney Icons",
                description: "Explore Sydney's world-famous landmarks.",
                activities: ["Opera House tour", "Harbour Bridge walk", "The Rocks historic area", "Darling Harbour"]
            },
            {
                day: 3,
                title: "Sydney Beaches",
                description: "Discover Sydney's beautiful coastal areas.",
                activities: ["Bondi Beach", "Bondi to Coogee walk", "Afternoon at Manly Beach"]
            },
            {
                day: 4,
                title: "Free Day",
                description: "Enjoy a free day to explore Sydney at your own pace.",
                activities: ["Free exploration", "Optional Taronga Zoo", "Optional shopping", "Evening free"]
            },
            {
                day: 5,
                title: "Blue Mountains",
                description: "Day trip to the stunning Blue Mountains.",
                activities: ["Blue Mountains drive", "Three Sisters viewpoint", "Scenic World", "Katoomba village"]
            },
            {
                day: 6,
                title: "Free Day",
                description: "Another free day for personal exploration.",
                activities: ["Free exploration", "Optional wildlife park", "Farewell dinner"]
            },
            {
                day: 7,
                title: "Departure",
                description: "Transfer to Sydney Airport for your departure.",
                activities: ["Free morning", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 1650,
                description: "Essential Australia adventure",
                features: ["3-star hotels", "Shared transfers", "Group tours", "Basic insurance"]
            },
            {
                name: "Premium",
                price: 2150,
                description: "Enhanced Australian journey",
                features: ["4-star hotels", "Private transfers", "Small group tours", "Wine tasting"]
            },
            {
                name: "Luxury",
                price: 3000,
                description: "Ultimate Australia luxury",
                features: ["5-star hotels", "Private transfers", "Private tours", "Premium insurance", "Fine dining"]
            }
        ]
    },
    {
        id: "7",
        slug: "schengen",
        title: "European Discovery",
        country: "Europe",
        tagline: "Schengen Multi-Country Adventure",
        description: "Embark on an unforgettable journey through Europe's most iconic destinations. Experience the diverse cultures, stunning architecture, and culinary delights of the Schengen zone.",
        duration: "10 Days / 9 Nights",
        groupSize: "2-25 People",
        startingPrice: 2000,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80",
            "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&q=80",
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80"
        ],
        highlights: [
            "Eiffel Tower, Paris",
            "Colosseum, Rome",
            "Swiss Alps",
            "Amsterdam Canals"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "Eurail pass",
            "All transfers",
            "Major attractions entrance"
        ],
        excluded: [
            "International flights",
            "Schengen visa fees",
            "Travel insurance",
            "Lunches and dinners",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paris",
                description: "Arrive in the City of Light and transfer to your hotel.",
                activities: ["Airport pickup", "Hotel check-in", "Seine River walk", "Welcome dinner"]
            },
            {
                day: 2,
                title: "Paris Landmarks",
                description: "Explore the iconic landmarks of Paris.",
                activities: ["Eiffel Tower", "Louvre Museum", "Champs-Élysées", "Arc de Triomphe"]
            },
            {
                day: 3,
                title: "Free Day in Paris",
                description: "Free day to explore Paris at your leisure.",
                activities: ["Free exploration", "Optional Versailles trip", "Optional Montmartre visit"]
            },
            {
                day: 4,
                title: "Paris to Amsterdam",
                description: "Travel by train to the charming city of Amsterdam.",
                activities: ["Train to Amsterdam", "Canal cruise", "Hotel check-in", "Evening at leisure"]
            },
            {
                day: 5,
                title: "Amsterdam & Free Time",
                description: "Half day tour followed by free time.",
                activities: ["Van Gogh Museum", "Rijksmuseum", "Free afternoon", "Red Light District walk"]
            },
            {
                day: 6,
                title: "Amsterdam to Switzerland",
                description: "Journey to the beautiful Swiss Alps.",
                activities: ["Train to Lucerne", "Chapel Bridge", "Lake Lucerne walk", "Swiss dinner"]
            },
            {
                day: 7,
                title: "Free Day in Switzerland",
                description: "Free day to enjoy the Alps.",
                activities: ["Free exploration", "Optional Mount Pilatus", "Optional lake activities"]
            },
            {
                day: 8,
                title: "Switzerland to Rome",
                description: "Travel to the Eternal City.",
                activities: ["Scenic train to Rome", "Hotel check-in", "Evening walk", "Roman dinner"]
            },
            {
                day: 9,
                title: "Rome Highlights",
                description: "Explore Rome's ancient wonders.",
                activities: ["Colosseum", "Roman Forum", "Trevi Fountain", "Spanish Steps", "Farewell dinner"]
            },
            {
                day: 10,
                title: "Departure",
                description: "Transfer to Rome airport for departure.",
                activities: ["Free morning", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 2000,
                description: "Essential Europe experience",
                features: ["3-star hotels", "2nd class Eurail", "Group tours", "Basic insurance"]
            },
            {
                name: "Premium",
                price: 2750,
                description: "Enhanced European journey",
                features: ["4-star hotels", "1st class Eurail", "Skip-the-line access", "Wine tastings"]
            },
            {
                name: "Luxury",
                price: 4000,
                description: "Ultimate European luxury",
                features: ["5-star hotels", "1st class Eurail", "Private tours", "Michelin dining", "Private transfers"]
            }
        ]
    },
    {
        id: "8",
        slug: "umrah",
        title: "Umrah Pilgrimage",
        country: "Saudi Arabia",
        tagline: "A Journey of Faith",
        description: "Embark on a spiritually fulfilling Umrah pilgrimage to the holiest sites in Islam. Experience the profound peace of Makkah and Madinah with our carefully crafted packages.",
        duration: "9 Days / 8 Nights",
        groupSize: "4-40 People",
        startingPrice: 1250,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80",
            "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1920&q=80",
            "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1920&q=80"
        ],
        highlights: [
            "Masjid al-Haram (Grand Mosque)",
            "Kaaba Tawaf",
            "Masjid an-Nabawi",
            "Historical Islamic Sites"
        ],
        included: [
            "Hotel near Haram",
            "Daily breakfast & dinner",
            "Visa processing",
            "Airport transfers",
            "Ziyarat tours",
            "Experienced guide"
        ],
        excluded: [
            "International flights",
            "Ihram clothing",
            "Personal expenses",
            "Lunch meals"
        ],
        itinerary: [
            {
                day: 1,
                title: "Departure",
                description: "Depart from your home country to begin your spiritual journey.",
                activities: ["Airport gathering", "Ihram preparation", "Flight to Jeddah"]
            },
            {
                day: 2,
                title: "Arrival in Makkah",
                description: "Arrive in Jeddah and transfer to Makkah.",
                activities: ["Airport pickup", "Transfer to Makkah", "Hotel check-in", "Umrah rituals begin"]
            },
            {
                day: 3,
                title: "Umrah Completion",
                description: "Complete the Umrah rituals.",
                activities: ["Tawaf", "Sa'i", "Halq/Taqsir", "Rest and prayers"]
            },
            {
                day: 4,
                title: "Free Day in Makkah",
                description: "Spend the day in prayers and reflection.",
                activities: ["Five daily prayers at Haram", "Quran recitation", "Free time for worship"]
            },
            {
                day: 5,
                title: "Transfer to Madinah",
                description: "Travel to the blessed city of Madinah.",
                activities: ["Bus to Madinah", "Hotel check-in", "Maghrib at Prophet's Mosque"]
            },
            {
                day: 6,
                title: "Madinah Prayers",
                description: "Spend the day at the Prophet's Mosque.",
                activities: ["Prayers at Masjid Nabawi", "Rawdah visit (if possible)", "Free time"]
            },
            {
                day: 7,
                title: "Madinah Ziyarat",
                description: "Visit historical sites in Madinah.",
                activities: ["Quba Mosque", "Uhud Mountain", "Qiblatain Mosque", "Date market"]
            },
            {
                day: 8,
                title: "Free Day in Madinah",
                description: "Final day for prayers and shopping.",
                activities: ["Morning prayers", "Free time for shopping", "Final prayers at Masjid Nabawi"]
            },
            {
                day: 9,
                title: "Departure",
                description: "Transfer to airport for departure.",
                activities: ["Farewell prayers", "Airport transfer", "Departure flight"]
            }
        ],
        pricingOptions: [
            {
                name: "Economy",
                price: 1250,
                description: "Value Umrah package",
                features: ["4-star hotel (500m from Haram)", "Shared room (4 per room)", "Bus transfers", "Breakfast & dinner"]
            },
            {
                name: "Premium",
                price: 1750,
                description: "Comfortable Umrah experience",
                features: ["5-star hotel (200m from Haram)", "Shared room (2 per room)", "Private transfers", "All meals"]
            },
            {
                name: "VIP",
                price: 2750,
                description: "Exclusive Umrah journey",
                features: ["5-star hotel (Haram view)", "Private room", "Private car transfers", "All meals", "24/7 assistance"]
            }
        ]
    },
    // ============ NEW DESTINATION - SLOVAKIA ============
    {
        id: "9",
        slug: "slovakia",
        title: "Discover Slovakia",
        country: "Slovakia",
        tagline: "Hidden Gem of Central Europe",
        description: "Explore the enchanting beauty of Slovakia, a hidden gem nestled in the heart of Central Europe. From medieval castles to stunning natural landscapes, discover a country rich in history, culture, and breathtaking scenery.",
        duration: "5 Days / 4 Nights",
        groupSize: "2-16 People",
        startingPrice: 750,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1562779346-e43d30d2e647?w=1920&q=80",
            "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80",
            "https://images.unsplash.com/photo-1555990793-da11153b2473?w=1920&q=80"
        ],
        highlights: [
            "Bratislava Old Town",
            "Bratislava Castle",
            "High Tatras Mountains",
            "Spiš Castle (UNESCO)",
            "Traditional Slovak Cuisine"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "All transfers",
            "Entrance fees",
            "English-speaking guide"
        ],
        excluded: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Meals not mentioned"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bratislava",
                description: "Welcome to Slovakia! Arrive at Bratislava Airport and transfer to your hotel in the charming old town.",
                activities: ["Airport pickup", "Hotel check-in", "Old Town walking tour", "Welcome dinner with traditional Slovak food"]
            },
            {
                day: 2,
                title: "Bratislava Exploration",
                description: "Explore the historic capital city of Slovakia.",
                activities: ["Bratislava Castle visit", "St. Martin's Cathedral", "Michael's Gate", "Danube riverfront walk", "Evening at UFO observation deck"]
            },
            {
                day: 3,
                title: "High Tatras Day Trip",
                description: "Journey to the stunning High Tatras mountain range.",
                activities: ["Drive to High Tatras", "Cable car ride", "Mountain hiking", "Štrbské Pleso lake visit", "Traditional mountain lunch"]
            },
            {
                day: 4,
                title: "Free Day",
                description: "Enjoy a free day to explore at your own pace.",
                activities: ["Free exploration", "Optional wine tasting in nearby vineyards", "Optional thermal spa visit", "Farewell dinner"]
            },
            {
                day: 5,
                title: "Departure",
                description: "Free morning before your airport transfer.",
                activities: ["Free morning", "Last-minute shopping", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 750,
                description: "Essential Slovakia experience",
                features: ["3-star hotels", "Shared transfers", "Group tours", "Breakfast included"]
            },
            {
                name: "Premium",
                price: 1050,
                description: "Enhanced Slovak journey",
                features: ["4-star hotels", "Private transfers", "Small group tours", "Welcome dinner", "Wine tasting"]
            },
            {
                name: "Luxury",
                price: 1500,
                description: "Premium Slovakia experience",
                features: ["5-star hotels", "Private transfers", "Private tours", "All meals", "Spa experience", "Fine dining"]
            }
        ]
    }
];

export function getPackageBySlug(slug: string): TravelPackage | undefined {
    return packages.find(pkg => pkg.slug === slug);
}

export function getAllPackageSlugs(): string[] {
    return packages.map(pkg => pkg.slug);
}
