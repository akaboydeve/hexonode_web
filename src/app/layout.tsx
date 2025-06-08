import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import "@/index.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#9333ea' },
        { media: '(prefers-color-scheme: dark)', color: '#111827' },
    ],
};

export const metadata: Metadata = {
    title: "HexoNode - Premium Hosting Solutions",
    description: "Premium hosting solutions for gaming, VPS, dedicated servers and web hosting. Get high-performance hosting with 24/7 support, DDoS protection and instant deployment.",
    applicationName: "HexoNode",
    keywords: [
        "HexoNode",
        "Hexo Node",
        "HexoNode Hosting",
        "game hosting",
        "VPS hosting",
        "dedicated servers",
        "minecraft hosting",
        "gaming servers",
        "premium hosting",
        "server hosting",
        "cloud hosting",
        "instant deployment",
        "24/7 support",
        "web hosting",
        "discord bot hosting",
    ],
    authors: [{ name: "HexoNode", url: "https://hexonode.com" }],
    creator: "HexoNode",
    publisher: "HexoNode",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://hexonode.com'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': 'https://hexonode.com',
        },
    },
    category: 'technology',
    openGraph: {
        title: "HexoNode - Premium Hosting Solutions",
        description: "Premium hosting solutions for gaming, VPS, dedicated servers and web hosting. Get high-performance hosting with 24/7 support, DDoS protection and instant deployment.",
        url: 'https://hexonode.com',
        siteName: 'HexoNode',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'HexoNode Hosting Solutions',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "HexoNode - Premium Hosting Solutions",
        description: "Premium hosting solutions for gaming, VPS, dedicated servers and web hosting. Get high-performance hosting with 24/7 support, DDoS protection and instant deployment.",
        images: ['/twitter-image.png'],
        creator: '@hexonode',
        site: '@hexonode',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
        other: [
            { rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon.png' },
            { rel: 'mask-icon', url: '/favicon.svg', color: '#9333ea' },
        ],
    },
    manifest: '/site.webmanifest',
    verification: {
        // IMPORTANT: Replace with your actual verification code from Google Search Console
        google: 'your-google-site-verification',
        yandex: 'your-yandex-verification',
        yahoo: 'your-yahoo-verification',
    },
    appleWebApp: {
        capable: true,
        title: 'HexoNode',
        statusBarStyle: 'black-translucent',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Favicon declarations are already handled by the metadata object above */}
            </head>
            <body className={`${inter.className} min-h-screen bg-gray-900`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
                {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                    <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
                )}
                <Script
                    id="schema-org-graph"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'HexoNode',
                            url: 'https://hexonode.com',
                            logo: {
                                '@type': 'ImageObject',
                                url: 'https://hexonode.com/logo.png',
                                width: 512,
                                height: 512,
                                contentUrl: 'https://hexonode.com/logo.png'
                            },
                            sameAs: [
                                'https://twitter.com/hexonode',
                                'https://facebook.com/hexonode',
                                'https://instagram.com/hexonode',
                                'https://linkedin.com/company/hexonode',
                            ],
                            contactPoint: {
                                '@type': 'ContactPoint',
                                telephone: '+1-800-123-4567',
                                contactType: 'customer service',
                                availableLanguage: ['English'],
                            },
                            description: 'Premium hosting solutions for gaming, VPS, dedicated servers and web hosting.',
                        }),
                    }}
                />
                <Script
                    id="schema-org-service"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            serviceType: 'Hosting Service',
                            provider: {
                                '@type': 'Organization',
                                name: 'HexoNode',
                                url: 'https://hexonode.com',
                            },
                            description: 'Premium hosting solutions for gaming, VPS, dedicated servers and web hosting.',
                            areaServed: {
                                '@type': 'Country',
                                name: ['Worldwide', 'India', 'United States', 'Singapore', 'Germany', 'France'],
                            },
                            hasOfferCatalog: {
                                '@type': 'OfferCatalog',
                                name: 'Hosting Services',
                                itemListElement: [
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'Minecraft Hosting'
                                        }
                                    },
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'VPS Hosting'
                                        }
                                    },
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'Game Server Hosting'
                                        }
                                    },
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'Web Hosting'
                                        }
                                    }
                                ]
                            }
                        }),
                    }}
                />
            </body>
        </html>
    );
} 