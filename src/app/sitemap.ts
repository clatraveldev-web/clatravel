import { MetadataRoute } from 'next';
import { getAllPackageSlugs } from '@/lib/data/packages';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clatravel.com';

    const packageSlugs = getAllPackageSlugs();

    // Package pages
    const packagePages = packageSlugs.map((slug) => ({
        url: `${siteUrl}/packages/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...packagePages,
    ];
}
