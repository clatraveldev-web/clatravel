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
    // ============ ASIA TENGGARA - BUDGET FRIENDLY (~5 Juta) ============
    {
        id: "1",
        slug: "singapore",
        title: "Singapura",
        country: "Singapura",
        tagline: "Kota Modern yang Memukau",
        description: "Nikmati liburan singkat ke Singapura! Kota yang bersih, modern, dan penuh pesona ini punya segalanya—dari Gardens by the Bay hingga kuliner hawker yang legendaris.",
        duration: "3 Hari / 2 Malam",
        groupSize: "2-20 Orang",
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
            "Akomodasi hotel bintang 3",
            "Sarapan setiap hari",
            "Transfer bandara",
            "City tour"
        ],
        excluded: [
            "Tiket pesawat internasional",
            "Asuransi perjalanan",
            "Pengeluaran pribadi",
            "Makan yang tidak disebutkan"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kedatangan & Eksplorasi Kota",
                description: "Selamat datang di Singapura! Transfer ke hotel dan jelajahi kota.",
                activities: ["Penjemputan bandara", "Check-in hotel", "Area Marina Bay Sands", "Merlion Park", "Makan malam di hawker center"]
            },
            {
                day: 2,
                title: "Taman & Budaya",
                description: "Jelajahi Gardens by the Bay dan kawasan budaya.",
                activities: ["Gardens by the Bay", "Tur jalan kaki Chinatown", "Eksplorasi Little India", "Belanja di Orchard Road"]
            },
            {
                day: 3,
                title: "Keberangkatan",
                description: "Pagi bebas sebelum transfer ke bandara.",
                activities: ["Pagi bebas", "Belanja oleh-oleh", "Transfer bandara"]
            }
        ],
        pricingOptions: [
            {
                name: "Standar",
                price: 312.5,
                description: "Perjalanan Singapura hemat",
                features: ["Hotel bintang 3", "Transfer bersama", "Tur grup", "Sarapan termasuk"]
            },
            {
                name: "Premium",
                price: 450,
                description: "Pengalaman Singapura nyaman",
                features: ["Hotel bintang 4", "Transfer pribadi", "Tur kelompok kecil", "Makan malam selamat datang"]
            },
            {
                name: "Luxury",
                price: 625,
                description: "Liburan Singapura mewah",
                features: ["Hotel bintang 5", "Transfer pribadi", "Tur privat", "Semua makan termasuk"]
            }
        ]
    },
    {
        id: "2",
        slug: "thailand",
        title: "Thailand",
        country: "Thailand",
        tagline: "Negeri Seribu Pagoda",
        description: "Yuk jelajahi Thailand! Dari kuil-kuil emas Bangkok, street food yang bikin nagih, sampai pantai-pantai cantik. Dijamin liburan seru dengan budget ramah kantong.",
        duration: "4 Hari / 3 Malam",
        groupSize: "2-25 Orang",
        startingPrice: 312.5,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&q=80",
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80",
            "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1920&q=80"
        ],
        highlights: [
            "Grand Palace & Wat Pho",
            "Pasar Terapung",
            "Street Food Thailand",
            "Tur Kuil"
        ],
        included: [
            "Akomodasi hotel",
            "Sarapan setiap hari",
            "Semua transfer",
            "Tur kuil"
        ],
        excluded: [
            "Tiket pesawat internasional",
            "Asuransi perjalanan",
            "Pengeluaran pribadi",
            "Aktivitas opsional"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kedatangan di Bangkok",
                description: "Tiba di ibukota Thailand yang semarak.",
                activities: ["Penjemputan bandara", "Check-in hotel", "Makan malam dengan masakan Thai"]
            },
            {
                day: 2,
                title: "Kuil-Kuil Bangkok",
                description: "Jelajahi kuil-kuil paling ikonik di Bangkok.",
                activities: ["Kunjungan Grand Palace", "Wat Pho (Buddha Berbaring)", "Sunset di Wat Arun"]
            },
            {
                day: 3,
                title: "Pasar & Budaya",
                description: "Rasakan kehidupan lokal Thai dan pasar-pasarnya.",
                activities: ["Chatuchak atau pasar lokal", "Pengalaman pijat Thai", "Malam di Khao San Road"]
            },
            {
                day: 4,
                title: "Keberangkatan",
                description: "Waktu bebas sebelum penerbangan keberangkatan.",
                activities: ["Pagi bebas", "Transfer bandara"]
            }
        ],
        pricingOptions: [
            {
                name: "Standar",
                price: 312.5,
                description: "Perjalanan Thailand hemat",
                features: ["Hotel bintang 3", "Transfer bersama", "Tur grup", "Sarapan termasuk"]
            },
            {
                name: "Premium",
                price: 437,
                description: "Petualangan Thailand nyaman",
                features: ["Hotel bintang 4", "Transfer pribadi", "Tur semi-privat", "Makan malam selamat datang"]
            },
            {
                name: "Luxury",
                price: 562,
                description: "Pengalaman Thailand premium",
                features: ["Hotel bintang 5", "Transfer pribadi", "Tur privat", "Spa treatment", "Fine dining"]
            }
        ]
    },
    {
        id: "3",
        slug: "malaysia",
        title: "Malaysia",
        country: "Malaysia",
        tagline: "Truly Asia",
        description: "Malaysia punya pesona yang unik! Lihat langsung keindahan Petronas Tower, jelajahi Batu Caves yang megah, dan cicip makanan khas yang nggak kalah enak.",
        duration: "3 Hari / 2 Malam",
        groupSize: "2-20 Orang",
        startingPrice: 312.5,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=80",
            "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1920&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        ],
        highlights: [
            "Menara Kembar Petronas",
            "Batu Caves",
            "Tur Kota Kuala Lumpur",
            "Pengalaman Kuliner Lokal"
        ],
        included: [
            "Akomodasi hotel",
            "Sarapan setiap hari",
            "Semua transfer",
            "City tour"
        ],
        excluded: [
            "Tiket pesawat internasional",
            "Asuransi perjalanan",
            "Pengeluaran pribadi",
            "Makan yang tidak disebutkan"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kedatangan di Kuala Lumpur",
                description: "Selamat datang di Malaysia! Transfer ke hotel Anda di Kuala Lumpur.",
                activities: ["Penjemputan bandara", "Check-in hotel", "Kunjungan malam Petronas Towers", "Jalan-jalan di KLCC Park"]
            },
            {
                day: 2,
                title: "Tur Kota KL",
                description: "Jelajahi highlights Kuala Lumpur.",
                activities: ["Batu Caves", "Masjid Negara", "Dataran Merdeka", "Central Market", "Jalan Alor street food"]
            },
            {
                day: 3,
                title: "Keberangkatan",
                description: "Pagi bebas sebelum keberangkatan.",
                activities: ["Pagi bebas", "Waktu belanja", "Transfer bandara"]
            }
        ],
        pricingOptions: [
            {
                name: "Standar",
                price: 312.5,
                description: "Tur Malaysia hemat",
                features: ["Hotel bintang 3", "Transfer bersama", "Tur grup", "Sarapan termasuk"]
            },
            {
                name: "Premium",
                price: 437,
                description: "Pengalaman Malaysia istimewa",
                features: ["Hotel bintang 4", "Transfer pribadi", "Tur kelompok kecil", "Makan malam selamat datang"]
            },
            {
                name: "Luxury",
                price: 562,
                description: "Liburan Malaysia mewah",
                features: ["Hotel bintang 5", "Transfer pribadi", "Tur privat", "Semua makan", "Spa treatment"]
            }
        ]
    },
    // ============ NEGARA LAINNYA ============
    {
        id: "4",
        slug: "korea",
        title: "Korea Selatan",
        country: "Korea Selatan",
        tagline: "Negeri K-Pop & Drama",
        description: "Buat para pecinta Korea, ini kesempatan emas! Jelajahi Seoul yang modern, foto pakai hanbok di istana kuno, dan rasakan langsung budaya K-pop yang lagi hits.",
        duration: "5 Hari / 4 Malam",
        groupSize: "2-20 Orang",
        startingPrice: 800,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1920&q=80",
            "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1920&q=80",
            "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1920&q=80"
        ],
        highlights: [
            "Istana Gyeongbokgung",
            "N Seoul Tower",
            "Desa Hanok Bukchon",
            "Korean BBQ Experience"
        ],
        included: [
            "Akomodasi hotel",
            "Sarapan setiap hari",
            "Semua transfer",
            "Tiket masuk",
            "Sewa hanbok"
        ],
        excluded: [
            "Tiket pesawat internasional",
            "Asuransi perjalanan",
            "Pengeluaran pribadi",
            "Aktivitas opsional"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kedatangan di Seoul",
                description: "Tiba di Bandara Incheon dan transfer ke hotel Anda di Seoul.",
                activities: ["Penjemputan bandara", "Check-in hotel", "Belanja di Myeongdong", "Makan malam Korean BBQ"]
            },
            {
                day: 2,
                title: "Seoul Bersejarah",
                description: "Jelajahi istana-istana cantik dan lingkungan tradisional Seoul.",
                activities: ["Istana Gyeongbokgung", "Pengalaman hanbok", "Desa Hanok Bukchon", "Jalan seni Insadong"]
            },
            {
                day: 3,
                title: "Seoul Modern",
                description: "Rasakan sisi modern dan trendi Seoul.",
                activities: ["Distrik Gangnam", "COEX Mall", "Sunset di N Seoul Tower", "Nightlife Hongdae"]
            },
            {
                day: 4,
                title: "Hari Bebas",
                description: "Nikmati hari bebas untuk eksplorasi sendiri.",
                activities: ["Eksplorasi bebas", "Belanja opsional", "Trip opsional ke Nami Island", "Makan malam perpisahan"]
            },
            {
                day: 5,
                title: "Keberangkatan",
                description: "Pagi bebas sebelum transfer ke bandara.",
                activities: ["Pagi bebas", "Transfer bandara"]
            }
        ],
        pricingOptions: [
            {
                name: "Standar",
                price: 800,
                description: "Pengalaman Korea esensial",
                features: ["Hotel bintang 3", "Transfer bersama", "Tur grup", "Asuransi dasar"]
            },
            {
                name: "Premium",
                price: 1100,
                description: "Petualangan Korea istimewa",
                features: ["Hotel bintang 4", "Transfer pribadi", "Tur kelompok kecil", "Photoshoot hanbok"]
            },
            {
                name: "Luxury",
                price: 1500,
                description: "K-Experience ultimate",
                features: ["Hotel bintang 5", "Transfer pribadi", "Tur privat", "Asuransi premium", "Pengalaman K-pop"]
            }
        ]
    },
    {
        id: "5",
        slug: "japan",
        title: "Jepang",
        country: "Jepang",
        tagline: "Negeri Sakura",
        description: "Impian ke Jepang? Waktunya terwujud! Dari gemerlapnya Tokyo, keindahan kuil Kyoto, sampai pemandangan Gunung Fuji. Pengalaman yang bakal jadi kenangan seumur hidup.",
        duration: "7 Hari / 6 Malam",
        groupSize: "2-18 Orang",
        startingPrice: 1250,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80",
            "https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920&q=80",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80"
        ],
        highlights: [
            "Shibuya & Akihabara Tokyo",
            "Pemandangan Gunung Fuji",
            "Kuil Emas Kyoto",
            "Fushimi Inari Shrine"
        ],
        included: [
            "Akomodasi hotel",
            "Sarapan setiap hari",
            "JR Pass 5 hari",
            "Semua transfer",
            "Tiket masuk"
        ],
        excluded: [
            "Tiket pesawat internasional",
            "Asuransi perjalanan",
            "Pengeluaran pribadi",
            "Makan yang tidak disebutkan"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kedatangan di Tokyo",
                description: "Selamat datang di Jepang! Transfer ke hotel Anda di Tokyo.",
                activities: ["Penjemputan bandara", "Check-in hotel", "Shibuya Crossing", "Makan malam selamat datang"]
            },
            {
                day: 2,
                title: "Highlights Tokyo",
                description: "Jelajahi berbagai lingkungan Tokyo yang beragam.",
                activities: ["Kuil Senso-ji", "Distrik Asakusa", "Tokyo Skytree", "Akihabara"]
            },
            {
                day: 3,
                title: "Hari Bebas di Tokyo",
                description: "Nikmati hari bebas untuk eksplorasi Tokyo sendiri.",
                activities: ["Eksplorasi bebas", "Kunjungan Harajuku opsional", "Disney/DisneySea opsional", "Malam bebas"]
            },
            {
                day: 4,
                title: "Shinkansen ke Kyoto",
                description: "Naik kereta peluru ke ibukota kuno Kyoto.",
                activities: ["Pengalaman Shinkansen", "Fushimi Inari Shrine", "Distrik geisha Gion"]
            },
            {
                day: 5,
                title: "Kuil-Kuil Kyoto",
                description: "Jelajahi kuil-kuil Warisan Dunia UNESCO Kyoto.",
                activities: ["Kinkaku-ji (Kuil Emas)", "Hutan bambu Arashiyama", "Upacara minum teh tradisional"]
            },
            {
                day: 6,
                title: "Hari Bebas di Kyoto",
                description: "Hari bebas untuk eksplorasi Kyoto atau day trip opsional.",
                activities: ["Eksplorasi bebas", "Day trip Nara opsional", "Kunjungan Osaka opsional", "Makan malam perpisahan"]
            },
            {
                day: 7,
                title: "Keberangkatan",
                description: "Transfer ke Bandara Kansai untuk penerbangan pulang.",
                activities: ["Pagi bebas", "Transfer bandara"]
            }
        ],
        pricingOptions: [
            {
                name: "Standar",
                price: 1250,
                description: "Pengalaman Jepang esensial",
                features: ["Hotel bintang 3", "JR Pass 5 hari", "Tur grup", "Asuransi dasar"]
            },
            {
                name: "Premium",
                price: 1750,
                description: "Perjalanan Jepang istimewa",
                features: ["Hotel bintang 4", "JR Pass Green 5 hari", "Tur kelompok kecil", "Pengalaman kimono"]
            },
            {
                name: "Luxury",
                price: 2500,
                description: "Kemewahan Jepang ultimate",
                features: ["Hotel bintang 5 + 1 malam ryokan", "JR Pass Green", "Tur privat", "Makan malam kaiseki"]
            }
        ]
    },
    {
        id: "6",
        slug: "australia",
        title: "Australia",
        country: "Australia",
        tagline: "The Land Down Under",
        description: "Australia menanti! Foto di Opera House, main ke Bondi Beach, atau hiking di Blue Mountains. Negara yang punya segalanya untuk liburan seru.",
        duration: "7 Hari / 6 Malam",
        groupSize: "2-20 Orang",
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
            "Akomodasi hotel",
            "Sarapan setiap hari",
            "Semua transfer",
            "Tiket masuk",
            "City tour"
        ],
        excluded: [
            "Tiket pesawat internasional",
            "Asuransi perjalanan",
            "Pengeluaran pribadi",
            "Aktivitas opsional"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kedatangan di Sydney",
                description: "Selamat datang di Australia! Transfer ke hotel dengan pemandangan pelabuhan.",
                activities: ["Penjemputan bandara", "Check-in hotel", "Jalan-jalan di Circular Quay", "Makan malam selamat datang"]
            },
            {
                day: 2,
                title: "Ikon Sydney",
                description: "Jelajahi landmark terkenal dunia Sydney.",
                activities: ["Tur Opera House", "Jalan di Harbour Bridge", "Area bersejarah The Rocks", "Darling Harbour"]
            },
            {
                day: 3,
                title: "Pantai Sydney",
                description: "Temukan area pesisir indah Sydney.",
                activities: ["Bondi Beach", "Jalan Bondi ke Coogee", "Sore di Manly Beach"]
            },
            {
                day: 4,
                title: "Hari Bebas",
                description: "Nikmati hari bebas untuk eksplorasi Sydney sendiri.",
                activities: ["Eksplorasi bebas", "Taronga Zoo opsional", "Belanja opsional", "Malam bebas"]
            },
            {
                day: 5,
                title: "Blue Mountains",
                description: "Day trip ke Blue Mountains yang menakjubkan.",
                activities: ["Perjalanan ke Blue Mountains", "Viewpoint Three Sisters", "Scenic World", "Desa Katoomba"]
            },
            {
                day: 6,
                title: "Hari Bebas",
                description: "Hari bebas lagi untuk eksplorasi personal.",
                activities: ["Eksplorasi bebas", "Taman satwa liar opsional", "Makan malam perpisahan"]
            },
            {
                day: 7,
                title: "Keberangkatan",
                description: "Transfer ke Bandara Sydney untuk keberangkatan.",
                activities: ["Pagi bebas", "Transfer bandara"]
            }
        ],
        pricingOptions: [
            {
                name: "Standar",
                price: 1650,
                description: "Petualangan Australia esensial",
                features: ["Hotel bintang 3", "Transfer bersama", "Tur grup", "Asuransi dasar"]
            },
            {
                name: "Premium",
                price: 2150,
                description: "Perjalanan Australia istimewa",
                features: ["Hotel bintang 4", "Transfer pribadi", "Tur kelompok kecil", "Wine tasting"]
            },
            {
                name: "Luxury",
                price: 3000,
                description: "Kemewahan Australia ultimate",
                features: ["Hotel bintang 5", "Transfer pribadi", "Tur privat", "Asuransi premium", "Fine dining"]
            }
        ]
    },
    {
        id: "7",
        slug: "schengen",
        title: "Tour Eropa",
        country: "Eropa",
        tagline: "Multi-Negara Schengen",
        description: "Keliling Eropa dalam satu trip! Paris, Amsterdam, Swiss, sampai Roma. Naik kereta pemandangan, foto di Menara Eiffel, dan nikmati kuliner khas tiap negara.",
        duration: "10 Hari / 9 Malam",
        groupSize: "2-25 Orang",
        startingPrice: 2000,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80",
            "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&q=80",
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80"
        ],
        highlights: [
            "Menara Eiffel, Paris",
            "Colosseum, Roma",
            "Pegunungan Alpen Swiss",
            "Kanal Amsterdam"
        ],
        included: [
            "Akomodasi hotel",
            "Sarapan setiap hari",
            "Eurail pass",
            "Semua transfer",
            "Tiket masuk atraksi utama"
        ],
        excluded: [
            "Tiket pesawat internasional",
            "Biaya visa Schengen",
            "Asuransi perjalanan",
            "Makan siang dan malam",
            "Pengeluaran pribadi"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kedatangan di Paris",
                description: "Tiba di Kota Cahaya dan transfer ke hotel Anda.",
                activities: ["Penjemputan bandara", "Check-in hotel", "Jalan-jalan di Sungai Seine", "Makan malam selamat datang"]
            },
            {
                day: 2,
                title: "Landmark Paris",
                description: "Jelajahi landmark ikonik Paris.",
                activities: ["Menara Eiffel", "Museum Louvre", "Champs-Élysées", "Arc de Triomphe"]
            },
            {
                day: 3,
                title: "Hari Bebas di Paris",
                description: "Hari bebas untuk eksplorasi Paris sesuka hati.",
                activities: ["Eksplorasi bebas", "Trip Versailles opsional", "Kunjungan Montmartre opsional"]
            },
            {
                day: 4,
                title: "Paris ke Amsterdam",
                description: "Perjalanan kereta ke kota Amsterdam yang menawan.",
                activities: ["Kereta ke Amsterdam", "Cruise kanal", "Check-in hotel", "Malam bebas"]
            },
            {
                day: 5,
                title: "Amsterdam & Waktu Bebas",
                description: "Setengah hari tur diikuti waktu bebas.",
                activities: ["Museum Van Gogh", "Rijksmuseum", "Sore bebas", "Jalan-jalan Red Light District"]
            },
            {
                day: 6,
                title: "Amsterdam ke Swiss",
                description: "Perjalanan ke Pegunungan Alpen Swiss yang indah.",
                activities: ["Kereta ke Lucerne", "Chapel Bridge", "Jalan-jalan di Danau Lucerne", "Makan malam Swiss"]
            },
            {
                day: 7,
                title: "Hari Bebas di Swiss",
                description: "Hari bebas untuk menikmati Alpen.",
                activities: ["Eksplorasi bebas", "Mount Pilatus opsional", "Aktivitas danau opsional"]
            },
            {
                day: 8,
                title: "Swiss ke Roma",
                description: "Perjalanan ke Kota Abadi.",
                activities: ["Kereta pemandangan ke Roma", "Check-in hotel", "Jalan-jalan malam", "Makan malam Romawi"]
            },
            {
                day: 9,
                title: "Highlights Roma",
                description: "Jelajahi keajaiban kuno Roma.",
                activities: ["Colosseum", "Roman Forum", "Trevi Fountain", "Spanish Steps", "Makan malam perpisahan"]
            },
            {
                day: 10,
                title: "Keberangkatan",
                description: "Transfer ke bandara Roma untuk keberangkatan.",
                activities: ["Pagi bebas", "Transfer bandara"]
            }
        ],
        pricingOptions: [
            {
                name: "Standar",
                price: 2000,
                description: "Pengalaman Eropa esensial",
                features: ["Hotel bintang 3", "Eurail kelas 2", "Tur grup", "Asuransi dasar"]
            },
            {
                name: "Premium",
                price: 2750,
                description: "Perjalanan Eropa istimewa",
                features: ["Hotel bintang 4", "Eurail kelas 1", "Akses skip-the-line", "Wine tasting"]
            },
            {
                name: "Luxury",
                price: 4000,
                description: "Kemewahan Eropa ultimate",
                features: ["Hotel bintang 5", "Eurail kelas 1", "Tur privat", "Michelin dining", "Transfer pribadi"]
            }
        ]
    },
    {
        id: "8",
        slug: "umrah",
        title: "Umrah",
        country: "Arab Saudi",
        tagline: "Perjalanan Ibadah",
        description: "Wujudkan ibadah Umrah dengan tenang dan nyaman. Hotel dekat Haram, pembimbing berpengalaman, dan semua kebutuhan sudah diatur. Fokus ibadah, kami yang urus sisanya.",
        duration: "9 Hari / 8 Malam",
        groupSize: "4-40 Orang",
        startingPrice: 1250,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80",
            "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1920&q=80",
            "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1920&q=80"
        ],
        highlights: [
            "Masjidil Haram",
            "Tawaf Ka'bah",
            "Masjid Nabawi",
            "Situs Bersejarah Islam"
        ],
        included: [
            "Hotel dekat Haram",
            "Sarapan & makan malam setiap hari",
            "Proses visa",
            "Transfer bandara",
            "Tur ziarah",
            "Pembimbing berpengalaman"
        ],
        excluded: [
            "Tiket pesawat internasional",
            "Pakaian ihram",
            "Pengeluaran pribadi",
            "Makan siang"
        ],
        itinerary: [
            {
                day: 1,
                title: "Keberangkatan",
                description: "Berangkat dari negara asal untuk memulai perjalanan spiritual Anda.",
                activities: ["Berkumpul di bandara", "Persiapan ihram", "Penerbangan ke Jeddah"]
            },
            {
                day: 2,
                title: "Kedatangan di Makkah",
                description: "Tiba di Jeddah dan transfer ke Makkah.",
                activities: ["Penjemputan bandara", "Transfer ke Makkah", "Check-in hotel", "Ritual Umrah dimulai"]
            },
            {
                day: 3,
                title: "Penyelesaian Umrah",
                description: "Selesaikan ritual Umrah.",
                activities: ["Tawaf", "Sa'i", "Tahallul", "Istirahat dan shalat"]
            },
            {
                day: 4,
                title: "Hari Bebas di Makkah",
                description: "Habiskan hari dengan shalat dan refleksi.",
                activities: ["Shalat lima waktu di Haram", "Tadarus Al-Quran", "Waktu bebas untuk ibadah"]
            },
            {
                day: 5,
                title: "Transfer ke Madinah",
                description: "Perjalanan ke kota penuh berkah Madinah.",
                activities: ["Bus ke Madinah", "Check-in hotel", "Maghrib di Masjid Nabawi"]
            },
            {
                day: 6,
                title: "Shalat di Madinah",
                description: "Habiskan hari di Masjid Nabawi.",
                activities: ["Shalat di Masjid Nabawi", "Kunjungan Raudhah (jika memungkinkan)", "Waktu bebas"]
            },
            {
                day: 7,
                title: "Ziarah Madinah",
                description: "Kunjungi situs-situs bersejarah di Madinah.",
                activities: ["Masjid Quba", "Gunung Uhud", "Masjid Qiblatain", "Pasar kurma"]
            },
            {
                day: 8,
                title: "Hari Bebas di Madinah",
                description: "Hari terakhir untuk shalat dan belanja.",
                activities: ["Shalat pagi", "Waktu bebas untuk belanja", "Shalat terakhir di Masjid Nabawi"]
            },
            {
                day: 9,
                title: "Keberangkatan",
                description: "Transfer ke bandara untuk keberangkatan.",
                activities: ["Shalat perpisahan", "Transfer bandara", "Penerbangan pulang"]
            }
        ],
        pricingOptions: [
            {
                name: "Ekonomi",
                price: 1250,
                description: "Paket Umrah hemat",
                features: ["Hotel bintang 4 (500m dari Haram)", "Kamar bersama (4 per kamar)", "Transfer bus", "Sarapan & makan malam"]
            },
            {
                name: "Premium",
                price: 1750,
                description: "Pengalaman Umrah nyaman",
                features: ["Hotel bintang 5 (200m dari Haram)", "Kamar bersama (2 per kamar)", "Transfer pribadi", "Semua makan"]
            },
            {
                name: "VIP",
                price: 2750,
                description: "Perjalanan Umrah eksklusif",
                features: ["Hotel bintang 5 (view Haram)", "Kamar pribadi", "Transfer mobil pribadi", "Semua makan", "Pendampingan 24/7"]
            }
        ]
    },
    // ============ DESTINASI BARU - SLOVAKIA ============
    {
        id: "9",
        slug: "slovakia",
        title: "Slovakia",
        country: "Slovakia",
        tagline: "Permata Tersembunyi Eropa",
        description: "Bosan destinasi mainstream? Coba Slovakia! Kastil-kastil megah, pegunungan Tatras yang cantik, dan suasana Eropa asli tanpa keramaian turis.",
        duration: "5 Hari / 4 Malam",
        groupSize: "2-16 Orang",
        startingPrice: 750,
        currency: "USD",
        heroImages: [
            "https://images.unsplash.com/photo-1562779346-e43d30d2e647?w=1920&q=80",
            "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80",
            "https://images.unsplash.com/photo-1555990793-da11153b2473?w=1920&q=80"
        ],
        highlights: [
            "Kastil Bratislava",
            "Kota Tua Bratislava",
            "Pegunungan High Tatras",
            "Kastil Spiš"
        ],
        included: [
            "Akomodasi hotel",
            "Sarapan setiap hari",
            "Semua transfer",
            "Tour guide berbahasa Inggris",
            "Tiket masuk"
        ],
        excluded: [
            "Tiket pesawat internasional",
            "Asuransi perjalanan",
            "Pengeluaran pribadi",
            "Makan yang tidak disebutkan"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kedatangan di Bratislava",
                description: "Selamat datang di Slovakia! Transfer ke hotel Anda di ibukota yang menawan.",
                activities: ["Penjemputan bandara", "Check-in hotel", "Walking tour Kota Tua", "Makan malam selamat datang"]
            },
            {
                day: 2,
                title: "Eksplorasi Bratislava",
                description: "Temukan semua highlights ibukota Slovakia.",
                activities: ["Tur Kastil Bratislava", "Katedral St. Martin", "Istana Presiden", "Kuliner Slovakia"]
            },
            {
                day: 3,
                title: "High Tatras",
                description: "Day trip ke pegunungan High Tatras yang spektakuler.",
                activities: ["Perjalanan scenic ke Tatras", "Naik cable car", "Hiking ringan", "Wisata alam"]
            },
            {
                day: 4,
                title: "Spiš & Warisan Budaya",
                description: "Kunjungi Kastil Spiš, salah satu kastil terbesar di Eropa.",
                activities: ["Perjalanan ke Spiš", "Tur Kastil Spiš UNESCO", "Levoča Kota Tua", "Makan malam perpisahan"]
            },
            {
                day: 5,
                title: "Keberangkatan",
                description: "Waktu bebas sebelum transfer ke bandara.",
                activities: ["Pagi bebas", "Belanja oleh-oleh", "Transfer bandara"]
            }
        ],
        pricingOptions: [
            {
                name: "Standar",
                price: 750,
                description: "Pengalaman Slovakia esensial",
                features: ["Hotel bintang 3", "Transfer bersama", "Tur grup", "Asuransi dasar"]
            },
            {
                name: "Premium",
                price: 1100,
                description: "Perjalanan Slovakia istimewa",
                features: ["Hotel bintang 4", "Transfer pribadi", "Tur kelompok kecil", "Wine tasting"]
            },
            {
                name: "Luxury",
                price: 1500,
                description: "Kemewahan Slovakia ultimate",
                features: ["Hotel boutique bintang 5", "Transfer pribadi", "Tur privat", "Fine dining", "Spa treatment"]
            }
        ]
    }
];

export const getPackageBySlug = (slug: string): TravelPackage | undefined => {
    return packages.find((pkg) => pkg.slug === slug);
};

export const getAllPackageSlugs = (): string[] => {
    return packages.map((pkg) => pkg.slug);
};
