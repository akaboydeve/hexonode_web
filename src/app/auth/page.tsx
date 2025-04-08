'use client';

import React, { useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import AuthPage from '@/components/AuthPage';
import { useAuth } from '@/context/AuthContext';

// Component that uses useSearchParams
const AuthContent = () => {
    const router = useRouter();
    const { user } = useAuth();

    // If already authenticated, redirect to client area
    useEffect(() => {
        if (user) {
            router.push('/clientarea');
        }
    }, [user, router]);

    return <AuthPage />;
};

export default function Auth() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>}>
            <AuthContent />
        </Suspense>
    );
} 