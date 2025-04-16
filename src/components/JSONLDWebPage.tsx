'use client';

import Script from 'next/script';
import React from 'react';

interface JSONLDWebPageProps {
    title: string;
    description: string;
    url: string;
    lastUpdated?: string;
    imageUrl?: string;
    breadcrumbs?: Array<{
        name: string;
        item: string;
    }>;
}

const JSONLDWebPage: React.FC<JSONLDWebPageProps> = ({
    title,
    description,
    url,
    lastUpdated = new Date().toISOString(),
    imageUrl = 'https://hexonode.com/og-image.png',
    breadcrumbs = [],
}) => {
    // Base schema
    const baseSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description: description,
        url: url,
        datePublished: '2023-01-01T00:00:00+00:00',
        dateModified: lastUpdated,
        image: imageUrl,
        inLanguage: 'en-US',
        isPartOf: {
            '@type': 'WebSite',
            name: 'HexoNode',
            url: 'https://hexonode.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'HexoNode',
            logo: {
                '@type': 'ImageObject',
                url: 'https://hexonode.com/android-chrome-512x512.png',
            },
        },
    };

    // Add breadcrumbs if provided
    if (breadcrumbs.length > 0) {
        Object.assign(baseSchema, {
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://hexonode.com',
                    },
                    ...breadcrumbs.map((crumb, index) => ({
                        '@type': 'ListItem',
                        position: index + 2,
                        name: crumb.name,
                        item: crumb.item,
                    })),
                ],
            },
        });
    }

    return (
        <Script
            id={`schema-webpage-${url.replace(/\//g, '-')}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(baseSchema),
            }}
        />
    );
};

export default JSONLDWebPage; 