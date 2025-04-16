import React from 'react';
import { Metadata } from 'next';
import Services from '@/components/Services';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Our Services | HexoNode - Premium Hosting Solutions',
    description: 'Explore HexoNode\'s range of services including game hosting, VPS solutions, web hosting, and dedicated servers with 24/7 support and DDoS protection.',
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        title: 'Premium Hosting Services | HexoNode',
        description: 'High-performance hosting solutions for games, VPS, and websites with enterprise-grade hardware and support.',
        url: '/services',
        type: 'website',
    },
};

export default function ServicesPage() {
    return (
        <>
            <div className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">Our Premium Hosting Services</h1>
                    <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">
                        Discover our comprehensive range of hosting solutions designed for performance and reliability
                    </p>
                    <Services />
                </div>
            </div>
            <Script
                id="services-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                item: {
                                    '@type': 'Service',
                                    name: 'Game Hosting',
                                    description: 'High-performance game server hosting with DDoS protection and 24/7 support',
                                    offers: {
                                        '@type': 'Offer',
                                        price: '1.60',
                                        priceCurrency: 'USD'
                                    },
                                    provider: {
                                        '@type': 'Organization',
                                        name: 'HexoNode'
                                    }
                                }
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                item: {
                                    '@type': 'Service',
                                    name: 'VPS Hosting',
                                    description: 'Virtual private servers with dedicated resources and enterprise-grade hardware',
                                    offers: {
                                        '@type': 'Offer',
                                        price: '3.00',
                                        priceCurrency: 'USD'
                                    },
                                    provider: {
                                        '@type': 'Organization',
                                        name: 'HexoNode'
                                    }
                                }
                            },
                            {
                                '@type': 'ListItem',
                                position: 3,
                                item: {
                                    '@type': 'Service',
                                    name: 'Web Hosting',
                                    description: 'Reliable web hosting solutions with SSD storage and 99.9% uptime guarantee',
                                    offers: {
                                        '@type': 'Offer',
                                        price: '2.99',
                                        priceCurrency: 'USD'
                                    },
                                    provider: {
                                        '@type': 'Organization',
                                        name: 'HexoNode'
                                    }
                                }
                            },
                            {
                                '@type': 'ListItem',
                                position: 4,
                                item: {
                                    '@type': 'Service',
                                    name: 'Dedicated Servers',
                                    description: 'Enterprise-grade dedicated servers with full hardware control and premium support',
                                    offers: {
                                        '@type': 'Offer',
                                        price: '89.99',
                                        priceCurrency: 'USD'
                                    },
                                    provider: {
                                        '@type': 'Organization',
                                        name: 'HexoNode'
                                    }
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
} 