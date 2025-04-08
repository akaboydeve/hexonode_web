'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            // Redirect to the auth page
            router.push('/auth');
        }
    }, [isAuthenticated, router]);

    // Don't render children until we've checked authentication
    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
};

export default ProtectedRoute; 