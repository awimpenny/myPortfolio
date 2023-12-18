/** @format */

export default function robots(): any {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://acme.com/sitemap.xml',
    };
}
