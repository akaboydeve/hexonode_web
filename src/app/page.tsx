import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Locations from '@/components/Locations';
import Reviews from '@/components/Reviews';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'HexoNode - Premium Game, VPS & Web Hosting Solutions',
    description: 'Get high-performance hosting with HexoNode. We offer Minecraft servers, game hosting, VPS solutions, and web hosting with 24/7 support, DDoS protection, and instant deployment.',
    alternates: {
        canonical: '/',
    },
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <Locations />
            <Features />
            <Reviews />
            <Script
                id="schema-publisher"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        '@id': 'https://hexonode.com/#organization',
                        name: 'HexoNode',
                        url: 'https://hexonode.com',
                        logo: {
                            '@type': 'ImageObject',
                            url: 'https://hexonode.com/logo.png',
                            width: 512,
                            height: 512
                        }
                    })
                }}
            />
            <Script
                id="schema-home"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        name: 'HexoNode - Premium Hosting Solutions',
                        url: 'https://hexonode.com',
                        potentialAction: {
                            '@type': 'SearchAction',
                            target: {
                                '@type': 'EntryPoint',
                                urlTemplate: 'https://hexonode.com/search?q={search_term_string}'
                            },
                            'query-input': 'required name=search_term_string'
                        }
                    })
                }}
            />
            <Script
                id="schema-product"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: 'HexoNode Hosting Services',
                        description: 'Premium hosting solutions for gaming, VPS, dedicated servers and web hosting.',
                        brand: {
                            '@type': 'Brand',
                            name: 'HexoNode',
                            logo: {
                                '@type': 'ImageObject',
                                url: 'https://hexonode.com/logo.png',
                                width: 512,
                                height: 512
                            }
                        },
                        offers: {
                            '@type': 'AggregateOffer',
                            lowPrice: '0.40',
                            highPrice: '144.00',
                            priceCurrency: 'USD',
                            offerCount: '20+',
                            offers: [
                                {
                                    '@type': 'Offer',
                                    name: 'Minecraft Hosting',
                                    price: '1.60',
                                    priceCurrency: 'USD',
                                    availability: 'https://schema.org/InStock',
                                    url: 'https://hexonode.com/#pricing'
                                },
                                {
                                    '@type': 'Offer',
                                    name: 'VPS Hosting',
                                    price: '3.00',
                                    priceCurrency: 'USD',
                                    availability: 'https://schema.org/InStock',
                                    url: 'https://hexonode.com/#pricing'
                                },
                                {
                                    '@type': 'Offer',
                                    name: 'Web Hosting',
                                    price: '2.99',
                                    priceCurrency: 'USD',
                                    availability: 'https://schema.org/InStock',
                                    url: 'https://hexonode.com/#pricing'
                                }
                            ]
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.8',
                            bestRating: '5',
                            worstRating: '1',
                            ratingCount: '247'
                        },
                        review: {
                            '@type': 'Review',
                            reviewRating: {
                                '@type': 'Rating',
                                ratingValue: '5',
                                bestRating: '5'
                            },
                            author: {
                                '@type': 'Person',
                                name: 'Akash'
                            },
                            reviewBody: 'Excellent hosting service with superb performance and customer support!'
                        }
                    })
                }}
            />
        </>
    );
} 