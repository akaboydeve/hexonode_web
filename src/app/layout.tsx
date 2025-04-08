import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HexoNode - Premium Hosting Solutions",
    description: "Premium hosting solutions for gaming, VPS, and dedicated servers. Get high-performance hosting with 24/7 support and instant deployment.",
    keywords: [
        "game hosting",
        "VPS hosting",
        "dedicated servers",
        "minecraft hosting",
        "gaming servers",
        "premium hosting",
        "server hosting",
        "cloud hosting",
        "instant deployment",
        "24/7 support"
    ],
    authors: [{ name: "HexoNode" }],
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
    },
    openGraph: {
        title: "HexoNode - Premium Hosting Solutions",
        description: "Premium hosting solutions for gaming, VPS, and dedicated servers. Get high-performance hosting with 24/7 support and instant deployment.",
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
        description: "Premium hosting solutions for gaming, VPS, and dedicated servers. Get high-performance hosting with 24/7 support and instant deployment.",
        images: ['/twitter-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    verification: {
        google: 'your-google-site-verification',
        yandex: 'your-yandex-verification',
        yahoo: 'your-yahoo-verification',
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
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className={`${inter.className} min-h-screen bg-gray-900`}>
                <AuthProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <Analytics />
                    <SpeedInsights />
                </AuthProvider>
            </body>
        </html>
    );
} 