'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { User, Lock, Mail, UserPlus, LogIn, AlertCircle, Phone, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isResetPassword, setIsResetPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const { signIn, signUp, resetPassword } = useAuth();

    // Check if this is an email confirmation callback
    useEffect(() => {
        const code = searchParams.get('code');
        const type = searchParams.get('type');

        if (code && type === 'signup') {
            setIsConfirmed(true);
            setIsLogin(true); // Switch to login mode
            setMessage('Email confirmed successfully! Please log in with your credentials.');
        }
    }, [searchParams]);

    const fromPath = '/clientarea';

    const validateForm = () => {
        setError('');

        // Reset password mode validation
        if (isResetPassword) {
            if (!email) {
                setError('Please enter your email address');
                return false;
            }
            return true;
        }

        // Login validation
        if (isLogin) {
            if (!email || !password) {
                setError('Please fill in all fields');
                return false;
            }
        }
        // Sign up validation
        else {
            if (!email || !password || !fullName) {
                setError('Please fill in all required fields (email, password, and full name)');
                return false;
            }
            if (password.length < 6) {
                setError('Password must be at least 6 characters');
                return false;
            }
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        setError('');
        setMessage('');

        try {
            if (isResetPassword) {
                await resetPassword(email);
                setMessage('Check your email for the password reset link');
                setIsResetPassword(false);
            } else if (isLogin) {
                await signIn(email, password);
                console.log('Login successful, redirecting to:', fromPath);
                router.push(fromPath);
            } else {
                // For signup, include additional user metadata directly in the signup call
                const userData = {
                    full_name: fullName,
                    phone_number: phoneNumber
                };

                await signUp(email, password, userData);

                setMessage('Registration successful! Please check your email for the verification link.');
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white">
                        {isResetPassword
                            ? 'Reset your password'
                            : isLogin
                                ? 'Sign in to your account'
                                : 'Create a new account'}
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        {isResetPassword
                            ? 'Enter your email to receive a password reset link'
                            : isLogin
                                ? 'Access your Client Area and manage your services'
                                : 'Join us and experience top-tier hosting services'}
                    </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                    {/* Email confirmed banner */}
                    {isConfirmed && (
                        <div className="mb-6 p-3 bg-green-900/30 text-green-400 text-sm rounded flex items-start">
                            <div className="mr-2 mt-0.5">
                                <CheckCircle className="h-5 w-5" />
                            </div>
                            <p className="font-medium">Email verified successfully! You can now log in.</p>
                        </div>
                    )}

                    {/* Auth type toggle - Only show when not in reset password mode */}
                    {!isResetPassword && (
                        <div className="flex border-b border-gray-700 mb-6">
                            <button
                                className={`pb-2 px-4 text-sm font-medium ${isLogin ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-400 hover:text-gray-300'}`}
                                onClick={() => setIsLogin(true)}
                            >
                                <LogIn className="h-4 w-4 inline mr-1" />
                                Login
                            </button>
                            <button
                                className={`pb-2 px-4 text-sm font-medium ${!isLogin ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-400 hover:text-gray-300'}`}
                                onClick={() => {
                                    setIsLogin(false);
                                    setIsConfirmed(false);
                                }}
                            >
                                <UserPlus className="h-4 w-4 inline mr-1" />
                                Sign Up
                            </button>
                        </div>
                    )}

                    {/* Success message */}
                    {message && (
                        <div className="mb-4 p-2 bg-green-900/30 text-green-400 text-sm rounded flex items-start">
                            <div className="mr-2 mt-0.5">
                                <AlertCircle className="h-4 w-4" />
                            </div>
                            <p>{message}</p>
                        </div>
                    )}

                    {/* Error message */}
                    {error && (
                        <div className="mb-4 p-2 bg-red-900/30 text-red-400 text-sm rounded flex items-start">
                            <div className="mr-2 mt-0.5">
                                <AlertCircle className="h-4 w-4" />
                            </div>
                            <p>{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                                Email address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-700 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Full Name - Only for signup */}
                        {!isLogin && !isResetPassword && (
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-1">
                                    Full Name <span className="text-red-400">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="bg-gray-700 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Phone Number - Only for signup */}
                        {!isLogin && !isResetPassword && (
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-400 mb-1">
                                    Phone Number (optional)
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="bg-gray-700 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Password - Only show when not in reset password mode */}
                        {!isResetPassword && (
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-gray-700 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Submit button */}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading
                                    ? 'Processing...'
                                    : isResetPassword
                                        ? 'Send Reset Link'
                                        : isLogin
                                            ? 'Sign in'
                                            : 'Sign up'}
                            </button>
                        </div>
                    </form>

                    {/* Alternative actions */}
                    <div className="mt-6 text-center">
                        {/* Forgot password link - only show in login mode */}
                        {isLogin && !isResetPassword && (
                            <button
                                type="button"
                                className="text-sm text-purple-500 hover:text-purple-400 mb-4 block mx-auto"
                                onClick={() => setIsResetPassword(true)}
                            >
                                Forgot your password?
                            </button>
                        )}

                        {/* Back to login - only show in reset password mode */}
                        {isResetPassword && (
                            <button
                                type="button"
                                className="text-sm text-purple-500 hover:text-purple-400 mb-4 block mx-auto"
                                onClick={() => setIsResetPassword(false)}
                            >
                                Back to login
                            </button>
                        )}

                        {/* Toggle between login and signup */}
                        {!isResetPassword && (
                            <p className="text-sm text-gray-400">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    className="font-medium text-purple-500 hover:text-purple-400"
                                    onClick={() => {
                                        setIsLogin(!isLogin);
                                        setIsConfirmed(false);
                                    }}
                                >
                                    {isLogin ? 'Sign up' : 'Sign in'}
                                </button>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage; 