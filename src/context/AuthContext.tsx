"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { AuthError, Session, User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    error: AuthError | null;
    signIn: (email: string, password: string) => Promise<any>;
    signUp: (email: string, password: string, userData?: { full_name?: string; phone_number?: string }) => Promise<any>;
    signOut: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    getUserData: () => { full_name?: string; phone_number?: string; email?: string };
    updateUserData: (userData: { full_name?: string; phone_number?: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AuthError | null>(null);

    const router = useRouter();

    // Create the Supabase client
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    useEffect(() => {
        const setData = async () => {
            try {
                console.log('Checking for existing session...');
                const { data: { session }, error } = await supabase.auth.getSession();
                if (error) {
                    console.error('Session error:', error.message);
                    setError(error);
                    return;
                }
                if (session) {
                    console.log('Session found for user:', session.user.email);
                    setSession(session);
                    setUser(session.user);
                } else {
                    console.log('No active session found');
                }
            } catch (error) {
                console.error('Error retrieving session:', error);
            } finally {
                setLoading(false);
            }
        };

        setData();

        // Set up the authentication state listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, currentSession) => {
                console.log('Auth state changed:', event, currentSession?.user?.email);
                setSession(currentSession);
                setUser(currentSession?.user || null);
                setLoading(false);
            }
        );

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const getUserData = () => {
        // First check if we have user metadata in Supabase
        if (user?.user_metadata) {
            return {
                full_name: user.user_metadata.full_name as string,
                phone_number: user.user_metadata.phone_number as string,
                email: user?.email
            };
        }

        // Fallback to localStorage for compatibility with our temporary solution
        try {
            // Check if we're in a browser environment before using localStorage
            if (typeof window !== 'undefined' && window.localStorage) {
                const localData = localStorage.getItem('user_metadata');
                if (localData) {
                    const parsedData = JSON.parse(localData);
                    return {
                        ...parsedData,
                        email: user?.email
                    };
                }
            }
        } catch (error) {
            console.error('Error retrieving user metadata from localStorage:', error);
        }

        // Return default empty object if no data found
        return { email: user?.email };
    };

    const updateUserData = async (userData: { full_name?: string; phone_number?: string }) => {
        try {
            const { error } = await supabase.auth.updateUser({
                data: userData
            });

            if (error) {
                throw error;
            }

            // Update local storage as well for compatibility
            // Check if we're in a browser environment before using localStorage
            if (typeof window !== 'undefined' && window.localStorage) {
                const existingData = localStorage.getItem('user_metadata');
                let parsedData = userData;

                if (existingData) {
                    try {
                        parsedData = { ...JSON.parse(existingData), ...userData };
                    } catch (e) {
                        // If parsing fails, just use the new data
                    }
                }

                localStorage.setItem('user_metadata', JSON.stringify(parsedData));
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            throw error;
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            console.log('Attempting to sign in with:', email);
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.error('Sign in error:', error.message);
                throw error;
            }

            console.log('Sign in successful:', data.user?.email);

            // Manual set of user and session for immediate UI update
            setUser(data.user);
            setSession(data.session);

            return data;
        } catch (error) {
            console.error('Sign in exception:', error);
            throw error;
        }
    };

    const signUp = async (email: string, password: string, userData?: { full_name?: string; phone_number?: string }) => {
        try {
            console.log('Signing up with email:', email, 'and metadata:', userData);
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: userData || {},
                    emailRedirectTo: `${window.location.origin}/auth?type=signup`
                }
            });

            if (error) {
                console.error('Sign up error:', error.message);
                throw error;
            }

            console.log('Sign up successful:', data.user?.email, 'Confirmation status:', data.user?.confirmed_at ? 'Confirmed' : 'Unconfirmed');

            // Store metadata locally for now
            if (userData && typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem('user_metadata', JSON.stringify(userData));
            }

            return data;
        } catch (error) {
            console.error('Sign up exception:', error);
            throw error;
        }
    };

    const signOut = async () => {
        try {
            console.log('Signing out...');
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error('Sign out error:', error.message);
                throw error;
            }

            // Clear local storage data
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.removeItem('user_metadata');
            }

            // Reset state
            setUser(null);
            setSession(null);

            // Redirect to home page
            router.push('/');

            // Force refresh to ensure state is updated
            router.refresh();

            console.log('Signed out successfully');
        } catch (error) {
            console.error('Error signing out:', error);
            throw error;
        }
    };

    const resetPassword = async (email: string) => {
        try {
            console.log('Requesting password reset for:', email);
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            });

            if (error) {
                console.error('Password reset error:', error.message);
                throw error;
            }

            console.log('Password reset email sent successfully');
        } catch (error) {
            console.error('Password reset exception:', error);
            throw error;
        }
    };

    const value = {
        user,
        session,
        loading,
        error,
        signIn,
        signUp,
        signOut,
        resetPassword,
        getUserData,
        updateUserData
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext; 