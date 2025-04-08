"use client"; // Mark as Client Component if it uses hooks like useContext

import React, { useEffect } from 'react';
import ClientArea from '@/components/ClientArea'; // Use path alias
import { useAuth } from '@/context/AuthContext'; // Use path alias
import { useRouter } from 'next/navigation'; // Use Next.js navigation

export default function ClientAreaPage() {
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {
        // Wait until auth state is loaded
        if (!loading && !user) {
            // Redirect to auth page if not logged in
            router.push('/auth');
        }
    }, [loading, user, router]);

    // Show nothing while loading or redirecting
    if (loading || !user) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    // Show client area once logged in
    return <ClientArea />;
} 