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
    {
        id: "1",
        slug: "singapore",
        title: "Discover Singapore",
        country: "Singapore",
        tagline: "Where Tradition Meets Innovation",
        description: "Experience the magic of Singapore, a dazzling city-state where futuristic architecture blends seamlessly with rich cultural heritage. From the iconic Marina Bay Sands to the lush Gardens by the Bay, discover why Singapore is Asia's most exciting destination.",
        duration: "5 Days / 4 Nights",
        groupSize: "2-15 People",
        startingPrice: 1299,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80",
            "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1920&q=80",
            "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1920&q=80"
        ],
        highlights: [
            "Marina Bay Sands SkyPark",
            "Gardens by the Bay & Cloud Forest",
            "Sentosa Island Adventure",
            "Chinatown & Little India Heritage Walk",
            "Universal Studios Singapore",
            "Night Safari Experience"
        ],
        included: [
            "4-star hotel accommodation",
            "Daily breakfast",
            "Airport transfers",
            "All entrance fees",
            "Professional English-speaking guide",
            "Air-conditioned transportation"
        ],
        excluded: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Meals not mentioned",
            "Visa fees (if applicable)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Marina Bay",
                description: "Welcome to Singapore! Upon arrival, transfer to your hotel and begin your adventure with an evening stroll around Marina Bay.",
                activities: ["Airport pickup", "Hotel check-in", "Marina Bay Sands light show", "Welcome dinner at local restaurant"]
            },
            {
                day: 2,
                title: "Gardens & Culture",
                description: "Explore the magnificent Gardens by the Bay and immerse yourself in Singapore's diverse cultural neighborhoods.",
                activities: ["Gardens by the Bay", "Cloud Forest & Flower Dome", "Chinatown walking tour", "Little India exploration"]
            },
            {
                day: 3,
                title: "Sentosa Island",
                description: "A full day of fun and adventure on Sentosa Island, Singapore's premier resort destination.",
                activities: ["Universal Studios Singapore", "S.E.A. Aquarium", "Beach relaxation", "Wings of Time show"]
            },
            {
                day: 4,
                title: "Wildlife & Shopping",
                description: "Experience Singapore's world-renowned wildlife parks and enjoy shopping on Orchard Road.",
                activities: ["Singapore Zoo", "Orchard Road shopping", "Night Safari adventure"]
            },
            {
                day: 5,
                title: "Departure",
                description: "Free time for last-minute shopping or exploration before your airport transfer.",
                activities: ["Free morning", "Souvenir shopping", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 1299,
                description: "Perfect for budget-conscious travelers",
                features: ["3-star hotel", "Shared transfers", "Small group tours", "Basic travel insurance"]
            },
            {
                name: "Premium",
                price: 1799,
                description: "Enhanced comfort and experiences",
                features: ["4-star hotel", "Private transfers", "Small group tours", "Comprehensive insurance", "Welcome dinner"]
            },
            {
                name: "Luxury",
                price: 2499,
                description: "Ultimate Singapore experience",
                features: ["5-star hotel", "Private transfers", "Private guided tours", "Premium insurance", "All meals included", "Spa treatment"]
            }
        ]
    },
    {
        id: "2",
        slug: "thailand",
        title: "Amazing Thailand",
        country: "Thailand",
        tagline: "Land of Smiles",
        description: "Discover the enchanting beauty of Thailand, from the golden temples of Bangkok to the pristine beaches of Phuket. Experience world-class cuisine, ancient traditions, and the warmest hospitality in Southeast Asia.",
        duration: "7 Days / 6 Nights",
        groupSize: "2-20 People",
        startingPrice: 999,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&q=80",
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80",
            "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1920&q=80"
        ],
        highlights: [
            "Grand Palace & Wat Pho",
            "Floating Markets Experience",
            "Phi Phi Islands Day Trip",
            "Thai Cooking Class",
            "Elephant Sanctuary Visit",
            "Beach Paradise in Phuket"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "Domestic flights (Bangkok-Phuket)",
            "All entrance fees",
            "Professional guide",
            "Island hopping tour"
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
                description: "Arrive in the vibrant capital of Thailand and transfer to your hotel.",
                activities: ["Airport pickup", "Hotel check-in", "Welcome dinner with Thai cuisine"]
            },
            {
                day: 2,
                title: "Bangkok Temples",
                description: "Explore Bangkok's most iconic temples and cultural landmarks.",
                activities: ["Grand Palace visit", "Wat Pho (Reclining Buddha)", "Wat Arun sunset", "Khao San Road evening"]
            },
            {
                day: 3,
                title: "Floating Markets",
                description: "Experience the famous floating markets and local Thai life.",
                activities: ["Damnoen Saduak Floating Market", "Thai cooking class", "Evening Chao Phraya dinner cruise"]
            },
            {
                day: 4,
                title: "Fly to Phuket",
                description: "Fly to Phuket and enjoy the beautiful beaches.",
                activities: ["Flight to Phuket", "Beach resort check-in", "Free afternoon", "Patong Beach evening"]
            },
            {
                day: 5,
                title: "Phi Phi Islands",
                description: "Full day island hopping adventure to the stunning Phi Phi Islands.",
                activities: ["Speedboat to Phi Phi", "Maya Bay visit", "Snorkeling", "Beach lunch", "Sunset views"]
            },
            {
                day: 6,
                title: "Phuket Exploration",
                description: "Discover the beauty and culture of Phuket island.",
                activities: ["Big Buddha visit", "Old Phuket Town", "Elephant sanctuary", "Farewell dinner"]
            },
            {
                day: 7,
                title: "Departure",
                description: "Free time before your departure flight.",
                activities: ["Free morning", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 999,
                description: "Great value Thailand experience",
                features: ["3-star hotels", "Shared transfers", "Group tours", "Basic insurance"]
            },
            {
                name: "Premium",
                price: 1499,
                description: "Comfortable and memorable",
                features: ["4-star hotels", "Private transfers", "Semi-private tours", "Full insurance", "Extra activities"]
            },
            {
                name: "Luxury",
                price: 2199,
                description: "Ultimate Thai luxury",
                features: ["5-star resorts", "Private transfers", "Private tours", "Premium insurance", "Spa treatments", "Fine dining"]
            }
        ]
    },
    {
        id: "3",
        slug: "malaysia",
        title: "Magical Malaysia",
        country: "Malaysia",
        tagline: "Truly Asia",
        description: "Experience the diverse wonders of Malaysia, from the iconic Petronas Twin Towers to the pristine beaches of Langkawi. Discover a perfect blend of modern cities, ancient rainforests, and rich multicultural heritage.",
        duration: "6 Days / 5 Nights",
        groupSize: "2-18 People",
        startingPrice: 899,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=80",
            "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1920&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        ],
        highlights: [
            "Petronas Twin Towers",
            "Batu Caves Temple",
            "Langkawi Island Paradise",
            "Penang Street Art & Food",
            "Cameron Highlands",
            "Malacca Heritage City"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "Domestic flights",
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
                title: "Arrival in Kuala Lumpur",
                description: "Welcome to Malaysia! Transfer to your hotel in the heart of Kuala Lumpur.",
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
                title: "Fly to Langkawi",
                description: "Fly to the tropical paradise of Langkawi Island.",
                activities: ["Flight to Langkawi", "Resort check-in", "Cable car & Sky Bridge", "Sunset cruise"]
            },
            {
                day: 4,
                title: "Langkawi Adventures",
                description: "Explore the natural beauty of Langkawi.",
                activities: ["Island hopping tour", "Mangrove kayaking", "Eagle feeding", "Beach relaxation"]
            },
            {
                day: 5,
                title: "Langkawi Free Day",
                description: "Enjoy a free day to explore at your own pace.",
                activities: ["Free activities", "Optional water sports", "Spa treatments", "Farewell dinner"]
            },
            {
                day: 6,
                title: "Departure",
                description: "Transfer to the airport for your departure.",
                activities: ["Free morning", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 899,
                description: "Value-packed Malaysia tour",
                features: ["3-star hotels", "Shared transfers", "Group tours", "Basic insurance"]
            },
            {
                name: "Premium",
                price: 1399,
                description: "Enhanced Malaysian experience",
                features: ["4-star hotels", "Private transfers", "Small group tours", "Full insurance", "Welcome dinner"]
            },
            {
                name: "Luxury",
                price: 1999,
                description: "Luxurious Malaysian escape",
                features: ["5-star resorts", "Private transfers", "Private tours", "Premium insurance", "All meals", "Spa package"]
            }
        ]
    },
    {
        id: "4",
        slug: "korea",
        title: "Stunning South Korea",
        country: "South Korea",
        tagline: "Where Tradition Meets K-Culture",
        description: "Immerse yourself in the dynamic energy of South Korea, from Seoul's futuristic skyline to ancient palaces. Experience the K-pop phenomenon, traditional hanbok, world-class skincare, and incredible cuisine.",
        duration: "7 Days / 6 Nights",
        groupSize: "2-16 People",
        startingPrice: 1599,
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
            "K-Pop Experience",
            "Korean BBQ & Street Food",
            "DMZ Tour"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "KTX train tickets",
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
                activities: ["Gangnam district", "COEX Mall", "K-Star Road", "N Seoul Tower sunset", "Hongdae nightlife"]
            },
            {
                day: 4,
                title: "DMZ Tour",
                description: "Visit the historic Demilitarized Zone between North and South Korea.",
                activities: ["DMZ tour", "JSA Panmunjom", "Imjingak Park", "Afternoon free time", "Dongdaemun shopping"]
            },
            {
                day: 5,
                title: "Day Trip to Nami Island",
                description: "Visit the picturesque Nami Island, famous from Korean dramas.",
                activities: ["Nami Island", "Petite France", "Garden of Morning Calm", "Evening street food tour"]
            },
            {
                day: 6,
                title: "KTX to Busan",
                description: "Take the high-speed train to Korea's coastal city of Busan.",
                activities: ["KTX to Busan", "Haeundae Beach", "Gamcheon Culture Village", "Jagalchi Fish Market", "Farewell dinner"]
            },
            {
                day: 7,
                title: "Departure",
                description: "Morning free time before transfer to Gimhae Airport.",
                activities: ["Free morning", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 1599,
                description: "Essential Korea experience",
                features: ["3-star hotels", "Shared transfers", "Group tours", "Basic insurance"]
            },
            {
                name: "Premium",
                price: 2199,
                description: "Enhanced Korean adventure",
                features: ["4-star hotels", "Private transfers", "Small group tours", "Full insurance", "Hanbok photoshoot"]
            },
            {
                name: "Luxury",
                price: 2999,
                description: "Ultimate K-experience",
                features: ["5-star hotels", "Private transfers", "Private tours", "Premium insurance", "K-pop concert tickets", "Fine dining"]
            }
        ]
    },
    {
        id: "5",
        slug: "japan",
        title: "Enchanting Japan",
        country: "Japan",
        tagline: "Land of the Rising Sun",
        description: "Discover the perfect harmony of ancient traditions and cutting-edge technology in Japan. From Tokyo's neon-lit streets to Kyoto's serene temples, experience a journey through time in one of the world's most fascinating countries.",
        duration: "10 Days / 9 Nights",
        groupSize: "2-14 People",
        startingPrice: 2499,
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
            "Fushimi Inari Shrine",
            "Osaka Castle & Dotonbori",
            "Traditional Ryokan Stay"
        ],
        included: [
            "Hotel & Ryokan accommodation",
            "Daily breakfast",
            "7-day JR Pass",
            "All transfers",
            "Entrance fees",
            "Tea ceremony experience"
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
                activities: ["Senso-ji Temple", "Asakusa district", "Tokyo Skytree", "Akihabara anime district", "Robot Restaurant"]
            },
            {
                day: 3,
                title: "Tokyo Modern",
                description: "Discover Tokyo's trendy and modern attractions.",
                activities: ["Harajuku fashion street", "Meiji Shrine", "Omotesando", "Shibuya shopping", "Shinjuku nightlife"]
            },
            {
                day: 4,
                title: "Mt. Fuji Day Trip",
                description: "Visit the iconic Mount Fuji and Hakone region.",
                activities: ["Fuji Five Lakes", "Hakone ropeway", "Lake Ashi cruise", "Hot springs experience"]
            },
            {
                day: 5,
                title: "Shinkansen to Kyoto",
                description: "Take the bullet train to the ancient capital of Kyoto.",
                activities: ["Shinkansen experience", "Fushimi Inari Shrine", "Gion geisha district", "Traditional dinner"]
            },
            {
                day: 6,
                title: "Kyoto Temples",
                description: "Explore Kyoto's UNESCO World Heritage temples.",
                activities: ["Kinkaku-ji (Golden Pavilion)", "Ryoan-ji Zen garden", "Arashiyama bamboo grove", "Tea ceremony"]
            },
            {
                day: 7,
                title: "Nara Day Trip",
                description: "Visit the ancient capital of Nara, home to friendly deer.",
                activities: ["Todai-ji Temple", "Nara deer park", "Kasuga Shrine", "Return to Kyoto"]
            },
            {
                day: 8,
                title: "Osaka Adventure",
                description: "Experience the vibrant city of Osaka.",
                activities: ["Train to Osaka", "Osaka Castle", "Dotonbori street food", "Shinsaibashi shopping"]
            },
            {
                day: 9,
                title: "Free Day",
                description: "Enjoy a free day to explore at your own pace.",
                activities: ["Optional Universal Studios", "Shopping", "Free exploration", "Farewell dinner"]
            },
            {
                day: 10,
                title: "Departure",
                description: "Transfer to Osaka Kansai Airport for your flight home.",
                activities: ["Free morning", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 2499,
                description: "Essential Japan experience",
                features: ["3-star hotels", "7-day JR Pass", "Group tours", "Basic insurance"]
            },
            {
                name: "Premium",
                price: 3499,
                description: "Enhanced Japanese journey",
                features: ["4-star hotels + 1 night ryokan", "7-day JR Pass Green", "Small group tours", "Full insurance", "Kimono experience"]
            },
            {
                name: "Luxury",
                price: 4999,
                description: "Ultimate Japan luxury",
                features: ["5-star hotels + 2 nights ryokan", "JR Pass Green", "Private tours", "Premium insurance", "Kaiseki dinners", "Private tea ceremony"]
            }
        ]
    },
    {
        id: "6",
        slug: "australia",
        title: "Amazing Australia",
        country: "Australia",
        tagline: "The Land Down Under",
        description: "Explore the vast wonders of Australia, from the iconic Sydney Opera House to the Great Barrier Reef. Experience diverse wildlife, stunning landscapes, and vibrant cities in this extraordinary continent.",
        duration: "10 Days / 9 Nights",
        groupSize: "2-16 People",
        startingPrice: 3299,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80",
            "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1920&q=80",
            "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920&q=80"
        ],
        highlights: [
            "Sydney Opera House",
            "Great Barrier Reef",
            "Uluru (Ayers Rock)",
            "Great Ocean Road",
            "Koala & Kangaroo Encounters",
            "Melbourne Laneways"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "Domestic flights",
            "All transfers",
            "Reef cruise",
            "National park fees"
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
                activities: ["Opera House tour", "Harbour Bridge climb", "The Rocks historic area", "Darling Harbour"]
            },
            {
                day: 3,
                title: "Sydney Beaches",
                description: "Discover Sydney's beautiful coastal areas.",
                activities: ["Bondi Beach", "Bondi to Coogee walk", "Taronga Zoo", "Manly Beach ferry"]
            },
            {
                day: 4,
                title: "Fly to Cairns",
                description: "Fly to Cairns, gateway to the Great Barrier Reef.",
                activities: ["Flight to Cairns", "Hotel check-in", "Cairns Esplanade", "Night markets"]
            },
            {
                day: 5,
                title: "Great Barrier Reef",
                description: "Full day exploring the magnificent Great Barrier Reef.",
                activities: ["Reef cruise", "Snorkeling", "Glass-bottom boat", "Marine life viewing"]
            },
            {
                day: 6,
                title: "Daintree Rainforest",
                description: "Explore the world's oldest rainforest.",
                activities: ["Daintree cruise", "Rainforest walk", "Aboriginal culture", "Cape Tribulation"]
            },
            {
                day: 7,
                title: "Fly to Melbourne",
                description: "Fly to the cultural capital of Melbourne.",
                activities: ["Flight to Melbourne", "Laneway art tour", "Coffee culture", "Chinatown dinner"]
            },
            {
                day: 8,
                title: "Great Ocean Road",
                description: "Day trip along the spectacular Great Ocean Road.",
                activities: ["Great Ocean Road drive", "Twelve Apostles", "Loch Ard Gorge", "Koala spotting"]
            },
            {
                day: 9,
                title: "Melbourne Exploration",
                description: "Discover Melbourne's diverse neighborhoods.",
                activities: ["Queen Victoria Market", "Royal Botanic Gardens", "St Kilda Beach", "Farewell dinner"]
            },
            {
                day: 10,
                title: "Departure",
                description: "Transfer to Melbourne Airport for your departure.",
                activities: ["Free morning", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 3299,
                description: "Essential Australia adventure",
                features: ["3-star hotels", "Domestic flights", "Group tours", "Basic insurance"]
            },
            {
                name: "Premium",
                price: 4299,
                description: "Enhanced Australian journey",
                features: ["4-star hotels", "Domestic flights", "Small group tours", "Full insurance", "Reef overnight stay"]
            },
            {
                name: "Luxury",
                price: 5999,
                description: "Ultimate Australia luxury",
                features: ["5-star hotels", "Premium domestic flights", "Private tours", "Premium insurance", "Helicopter reef tour", "Fine dining"]
            }
        ]
    },
    {
        id: "7",
        slug: "schengen",
        title: "European Discovery",
        country: "Europe",
        tagline: "Schengen Multi-Country Adventure",
        description: "Embark on an unforgettable journey through Europe's most iconic destinations. From the romance of Paris to the history of Rome, experience the diverse cultures, stunning architecture, and culinary delights of the Schengen zone.",
        duration: "14 Days / 13 Nights",
        groupSize: "2-20 People",
        startingPrice: 3999,
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
            "Barcelona's Gaudí",
            "Amsterdam Canals",
            "German Fairy-tale Castles"
        ],
        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "Eurail pass",
            "All transfers",
            "Entrance fees to major attractions",
            "Local guides"
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
                activities: ["Eiffel Tower", "Louvre Museum", "Notre-Dame (exterior)", "Champs-Élysées", "Arc de Triomphe"]
            },
            {
                day: 3,
                title: "Paris to Amsterdam",
                description: "Travel by train to the charming city of Amsterdam.",
                activities: ["Train to Amsterdam", "Canal cruise", "Anne Frank House", "Red Light District walk"]
            },
            {
                day: 4,
                title: "Amsterdam Exploration",
                description: "Discover the best of Amsterdam.",
                activities: ["Van Gogh Museum", "Rijksmuseum", "Vondelpark", "Dutch cheese tasting"]
            },
            {
                day: 5,
                title: "Amsterdam to Munich",
                description: "Train journey through Germany to Munich.",
                activities: ["Train to Munich", "Marienplatz", "Glockenspiel", "Beer hall dinner"]
            },
            {
                day: 6,
                title: "Neuschwanstein Castle",
                description: "Day trip to Germany's fairy-tale castle.",
                activities: ["Neuschwanstein Castle tour", "Hohenschwangau", "Bavarian Alps views"]
            },
            {
                day: 7,
                title: "Munich to Switzerland",
                description: "Journey to the beautiful Swiss Alps.",
                activities: ["Train to Lucerne", "Chapel Bridge", "Lake Lucerne cruise", "Swiss fondue dinner"]
            },
            {
                day: 8,
                title: "Swiss Alps Adventure",
                description: "Experience the majestic Swiss Alps.",
                activities: ["Mount Pilatus or Titlis", "Alpine views", "Mountain activities"]
            },
            {
                day: 9,
                title: "Switzerland to Italy",
                description: "Travel through the dramatic Gotthard route to Italy.",
                activities: ["Scenic train to Milan", "Milan Duomo", "Galleria Vittorio Emanuele II"]
            },
            {
                day: 10,
                title: "Florence",
                description: "Explore the Renaissance city of Florence.",
                activities: ["Train to Florence", "Uffizi Gallery", "Ponte Vecchio", "Piazzale Michelangelo sunset"]
            },
            {
                day: 11,
                title: "Rome",
                description: "Discover the Eternal City of Rome.",
                activities: ["Train to Rome", "Colosseum", "Roman Forum", "Trevi Fountain", "Spanish Steps"]
            },
            {
                day: 12,
                title: "Vatican City",
                description: "Explore the smallest country in the world.",
                activities: ["Vatican Museums", "Sistine Chapel", "St. Peter's Basilica", "Trastevere dinner"]
            },
            {
                day: 13,
                title: "Rome to Barcelona",
                description: "Fly to the vibrant city of Barcelona.",
                activities: ["Flight to Barcelona", "Las Ramblas", "Gothic Quarter", "Tapas dinner"]
            },
            {
                day: 14,
                title: "Barcelona & Departure",
                description: "Morning Barcelona tour before departure.",
                activities: ["Sagrada Familia", "Park Güell", "Airport transfer"]
            }
        ],
        pricingOptions: [
            {
                name: "Standard",
                price: 3999,
                description: "Essential Europe experience",
                features: ["3-star hotels", "2nd class Eurail", "Group tours", "Basic insurance"]
            },
            {
                name: "Premium",
                price: 5499,
                description: "Enhanced European journey",
                features: ["4-star hotels", "1st class Eurail", "Skip-the-line access", "Full insurance", "Wine tastings"]
            },
            {
                name: "Luxury",
                price: 7999,
                description: "Ultimate European luxury",
                features: ["5-star hotels", "1st class Eurail", "Private tours", "Premium insurance", "Michelin dining", "Private transfers"]
            }
        ]
    },
    {
        id: "8",
        slug: "umrah",
        title: "Umrah Pilgrimage",
        country: "Saudi Arabia",
        tagline: "A Journey of Faith",
        description: "Embark on a spiritually fulfilling Umrah pilgrimage to the holiest sites in Islam. Experience the profound peace of Makkah and Madinah with our carefully crafted packages that combine spiritual guidance with comfortable accommodations.",
        duration: "10 Days / 9 Nights",
        groupSize: "4-40 People",
        startingPrice: 2499,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80",
            "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1920&q=80",
            "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1920&q=80"
        ],
        highlights: [
            "Masjid al-Haram (Grand Mosque)",
            "Kaaba Tawaf",
            "Sa'i between Safa and Marwa",
            "Masjid an-Nabawi",
            "Rawdah Prayer",
            "Historical Islamic Sites"
        ],
        included: [
            "Hotel near Haram",
            "Daily breakfast & dinner",
            "Visa processing",
            "Airport transfers",
            "Ziyarat tours",
            "Experienced Mutawwif guide",
            "Air-conditioned transportation"
        ],
        excluded: [
            "International flights",
            "Ihram clothing",
            "Personal expenses",
            "Lunch meals",
            "Optional activities"
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
                activities: ["Airport pickup", "Transfer to Makkah", "Hotel check-in", "First glimpse of Kaaba", "Umrah rituals begin"]
            },
            {
                day: 3,
                title: "Umrah Completion",
                description: "Complete the Umrah rituals.",
                activities: ["Tawaf", "Sa'i", "Halq/Taqsir", "Rest and prayers"]
            },
            {
                day: 4,
                title: "Makkah Prayers",
                description: "Spend the day in prayers and reflection.",
                activities: ["Five daily prayers at Haram", "Quran recitation", "Dua and reflection"]
            },
            {
                day: 5,
                title: "Makkah Ziyarat",
                description: "Visit historical Islamic sites around Makkah.",
                activities: ["Jabal al-Nour (Hira Cave)", "Jabal Thawr", "Mina, Muzdalifah, Arafat"]
            },
            {
                day: 6,
                title: "Transfer to Madinah",
                description: "Travel to the blessed city of Madinah.",
                activities: ["Bus to Madinah", "Hotel check-in near Masjid Nabawi", "Maghrib at Prophet's Mosque"]
            },
            {
                day: 7,
                title: "Madinah Prayers",
                description: "Spend the day at the Prophet's Mosque.",
                activities: ["40 prayers goal begins", "Rawdah visit (if possible)", "Prayers at Masjid Nabawi"]
            },
            {
                day: 8,
                title: "Madinah Ziyarat",
                description: "Visit historical sites in Madinah.",
                activities: ["Quba Mosque", "Uhud Mountain & Martyrs' Cemetery", "Qiblatain Mosque", "Date market"]
            },
            {
                day: 9,
                title: "Final Day in Madinah",
                description: "Last day for prayers and shopping.",
                activities: ["Morning prayers", "Free time for shopping", "Final prayers at Masjid Nabawi"]
            },
            {
                day: 10,
                title: "Departure",
                description: "Transfer to Madinah or Jeddah airport for departure.",
                activities: ["Farewell prayers", "Airport transfer", "Departure flight"]
            }
        ],
        pricingOptions: [
            {
                name: "Economy",
                price: 2499,
                description: "Value Umrah package",
                features: ["4-star hotel (500m from Haram)", "Shared room (4 per room)", "Bus transfers", "Breakfast & dinner", "Group ziyarat"]
            },
            {
                name: "Premium",
                price: 3499,
                description: "Comfortable Umrah experience",
                features: ["5-star hotel (200m from Haram)", "Shared room (2 per room)", "Private transfers", "All meals", "Group ziyarat", "Zamzam water"]
            },
            {
                name: "VIP",
                price: 5499,
                description: "Exclusive Umrah journey",
                features: ["5-star hotel (Haram view)", "Private room", "Private car transfers", "All meals", "Private ziyarat", "24/7 assistance", "Business class option"]
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
