import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Function to detect locale from Accept-Language header
function getPreferredLocale(acceptLanguage: string | null): Locale {
    if (!acceptLanguage) return defaultLocale;

    // Check if Indonesian is preferred
    if (acceptLanguage.toLowerCase().includes('id')) {
        return 'id';
    }

    return defaultLocale;
}

export default getRequestConfig(async () => {
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language');
    const locale = getPreferredLocale(acceptLanguage);

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
