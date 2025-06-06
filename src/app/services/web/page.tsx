'use client';

import React, { useState } from 'react';
import serviceData from '@/data/serviceData';
import { Plan, PlanFeature, LocationIndependentService } from '@/data/serviceData';
import ParticlesComponent from '@/components/ui/particles';

const WebPage = () => {
    const webData = serviceData.web as LocationIndependentService;
    const plans = webData.plans;
    const [expandedPlans, setExpandedPlans] = useState<{ [key: string]: boolean }>({});

    const togglePlanFeatures = (planName: string) => {
        setExpandedPlans(prev => ({
            ...prev,
            [planName]: !prev[planName]
        }));
    };

    return (
        <div className="min-h-screen bg-gray-900 pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <ParticlesComponent />
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">{webData.title}</h1>
                        <p className="text-xl text-gray-400 animate-fade-in">{webData.description}</p>
                    </div>

                    {/* Plans Grid */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-[2000px] mx-auto">
                            {plans.map((plan: Plan) => {
                                const isExpanded = expandedPlans[plan.name] || false;
                                const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, 12);
                                const hasMoreFeatures = plan.features.length > 12;

                                return (
                                    <div 
                                        key={plan.name} 
                                        className="bg-gray-800 rounded-lg p-10 border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 min-w-[280px]"
                                    >
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {plan.name}
                                        </h3>
                                        <div className="mb-6">
                                            <span className="text-3xl font-bold text-purple-400">${plan.price}</span>
                                            <span className="text-gray-400 ml-2">/month</span>
                                        </div>
                                        <ul className="space-y-4 mb-8">
                                            {visibleFeatures.map((feature: string | PlanFeature, index: number) => (
                                                <li key={index} className="flex items-center text-gray-300">
                                                    <svg
                                                        className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <span className="text-sm">
                                                        {typeof feature === 'string' ? feature : feature.value}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        {hasMoreFeatures && (
                                            <button
                                                onClick={() => togglePlanFeatures(plan.name)}
                                                className="w-full mb-4 text-center text-white bg-purple-600/20 py-2 rounded-lg hover:bg-purple-600/30 transition-all duration-300 font-medium"
                                            >
                                                {isExpanded ? 'Show Less' : 'Show More'}
                                            </button>
                                        )}
                                        <a
                                            href={plan.link || webData.productLink}
                                            className="block w-full text-center bg-purple-600 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* WordPress Section */}
                    <div className="mt-16 bg-gradient-to-r from-[#21759B] to-[#464646] rounded-xl p-8 border border-gray-700 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                                        <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                                    </svg>
                                    <h2 className="text-2xl font-bold text-white">WordPress Ready</h2>
                                </div>
                                <p className="text-gray-200 text-lg mb-4">
                                    All our web hosting plans come with one-click WordPress installation. Get your WordPress site up and running in minutes with our easy-to-use control panel.
                                </p>
                                <ul className="space-y-2 text-gray-200">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        One-click WordPress installation
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        install custom themes and plugins
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                                    <span className="text-4xl font-bold text-white">100%</span>
                                    <p className="text-gray-200">WordPress Compatible</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WooCommerce Section */}
                    <div className="mt-8 bg-gradient-to-r from-[#96588A] to-[#464646] rounded-xl p-8 border border-gray-700 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                                        <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                                    </svg>
                                    <h2 className="text-2xl font-bold text-white">WooCommerce Ready</h2>
                                </div>
                                <p className="text-gray-200 text-lg mb-4">
                                    Transform your WordPress site into a powerful e-commerce platform with WooCommerce. All our hosting plans support seamless WooCommerce integration.
                                </p>
                                <ul className="space-y-2 text-gray-200">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        One-click WooCommerce installation
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Optimized for e-commerce performance
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Secure payment gateway integration
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                                    <span className="text-4xl font-bold text-white">100%</span>
                                    <p className="text-gray-200">WooCommerce Compatible</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ruby Section */}
                    <div className="mt-8 bg-gradient-to-r from-[#CC342D] to-[#464646] rounded-xl p-8 border border-gray-700 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                                        <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                                    </svg>
                                    <h2 className="text-2xl font-bold text-white">Ruby Ready</h2>
                                </div>
                                <p className="text-gray-200 text-lg mb-4">
                                    Deploy your Ruby applications with ease. Our hosting environment is optimized for Ruby on Rails and other Ruby frameworks, providing the perfect foundation for your web applications.
                                </p>
                                <ul className="space-y-2 text-gray-200">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Ruby on Rails support
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Bundler and RVM integration
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Optimized for Ruby performance
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                                    <span className="text-4xl font-bold text-white">100%</span>
                                    <p className="text-gray-200">Ruby Compatible</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Python Section */}
                    <div className="mt-8 bg-gradient-to-r from-[#3776AB] to-[#464646] rounded-xl p-8 border border-gray-700 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                                        <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                                    </svg>
                                    <h2 className="text-2xl font-bold text-white">Python Ready</h2>
                                </div>
                                <p className="text-gray-200 text-lg mb-4">
                                    Run your Python applications with confidence. Our hosting environment supports Django, Flask, and other Python frameworks, with all the tools you need for development and deployment.
                                </p>
                                <ul className="space-y-2 text-gray-200">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Django and Flask support
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        pip and virtualenv integration
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        WSGI/ASGI server support
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                                    <span className="text-4xl font-bold text-white">100%</span>
                                    <p className="text-gray-200">Python Compatible</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Node.js Section */}
                    <div className="mt-8 bg-gradient-to-r from-[#339933] to-[#464646] rounded-xl p-8 border border-gray-700 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                                        <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                                    </svg>
                                    <h2 className="text-2xl font-bold text-white">Node.js Ready</h2>
                                </div>
                                <p className="text-gray-200 text-lg mb-4">
                                    Deploy your Node.js applications with ease. Our hosting environment is optimized for Express.js, Next.js, and other Node.js frameworks, providing the perfect platform for your JavaScript applications.
                                </p>
                                <ul className="space-y-2 text-gray-200">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Express.js and Next.js support
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        npm and yarn integration
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        PM2 process management
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                                    <span className="text-4xl font-bold text-white">100%</span>
                                    <p className="text-gray-200">Node.js Compatible</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Let's Encrypt Section */}
                    <div className="mt-8 bg-gradient-to-r from-[#003A70] to-[#464646] rounded-xl p-8 border border-gray-700 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                                        <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                                    </svg>
                                    <h2 className="text-2xl font-bold text-white">Let's Encrypt Ready</h2>
                                </div>
                                <p className="text-gray-200 text-lg mb-4">
                                    Secure your websites with free SSL certificates. Our hosting environment includes automatic Let's Encrypt integration, ensuring your sites are always protected with the latest security standards.
                                </p>
                                <ul className="space-y-2 text-gray-200">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Free SSL certificates
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Automatic renewal
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Wildcard SSL support
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                                    <span className="text-4xl font-bold text-white">100%</span>
                                    <p className="text-gray-200">SSL Secure</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Everything You Need Section */}
                    <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 border border-gray-700 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4">Everything You Need</h2>
                            <p className="text-gray-200 text-lg">Your complete hosting solution with all the tools and technologies you need</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Web Technologies</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        WordPress & WooCommerce
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Ruby on Rails
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Python (Django/Flask)
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Node.js (Express/Next.js)
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Security Features</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Let's Encrypt SSL
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        DDoS Protection
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Firewall Protection
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Daily Backups
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Performance Tools</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        SSD Storage
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        CDN Integration
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        Caching Systems
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        99.9% Uptime
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Additional Features Section */}
                    <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Web Hosting?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Lightning Fast</h3>
                                    <p className="text-gray-400">SSD-powered servers for optimal performance</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Secure Hosting</h3>
                                    <p className="text-gray-400">Free SSL certificates and DDoS protection</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">99.9% Uptime</h3>
                                    <p className="text-gray-400">Guaranteed reliability for your website</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebPage;