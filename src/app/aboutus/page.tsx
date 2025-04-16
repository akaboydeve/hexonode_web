import React from 'react';
import { Metadata } from 'next';
import AboutUs from '@/components/AboutUs'; // Use path alias
import JSONLDWebPage from '@/components/JSONLDWebPage';

export const metadata: Metadata = {
    title: 'About Us | HexoNode - Premium Hosting Solutions',
    description: 'Learn about HexoNode, our mission, values, and our commitment to providing high-quality hosting solutions for gaming, VPS, and web hosting customers worldwide.',
    openGraph: {
        title: 'About Us | HexoNode - Premium Hosting Solutions',
        description: 'Learn about HexoNode, our mission, values, and our commitment to providing high-quality hosting solutions for gaming, VPS, and web hosting customers worldwide.',
        url: 'https://hexonode.com/aboutus',
        type: 'website',
    },
    twitter: {
        title: 'About Us | HexoNode - Premium Hosting Solutions',
        description: 'Learn about HexoNode, our mission, values, and our commitment to providing high-quality hosting solutions for gaming, VPS, and web hosting customers worldwide.',
    },
    alternates: {
        canonical: '/aboutus',
    },
};

export default function AboutUsPage() {
    return (
        <>
            <AboutUs />
            <JSONLDWebPage
                title="About Us | HexoNode - Premium Hosting Solutions"
                description="Learn about HexoNode, our mission, values, and our commitment to providing high-quality hosting solutions for gaming, VPS, and web hosting customers worldwide."
                url="https://hexonode.com/aboutus"
                breadcrumbs={[
                    { name: 'About Us', item: 'https://hexonode.com/aboutus' }
                ]}
            />
        </>
    );
} 