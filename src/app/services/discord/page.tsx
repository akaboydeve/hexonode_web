'use client';

import React, { useState } from 'react';
import serviceData from '@/data/serviceData';
import { LocationCode, TierType, Plan, PlanFeature, LocationIndependentService } from '@/data/serviceData';
import ParticlesComponent from '@/components/ui/particles';

const DiscordPage = () => {
    const discordData = serviceData.discord as LocationIndependentService;
    const plans = discordData.plans;

    return (
        <div className="min-h-screen bg-gray-900 pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <ParticlesComponent />
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">{discordData.title}</h1>
                        <p className="text-xl text-gray-400 animate-fade-in">{discordData.description}</p>
                    </div>

                    {/* Plans Grid */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {plans.map((plan: Plan) => (
                                <div 
                                    key={plan.name} 
                                    className="bg-gray-800 rounded-lg p-8 border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {plan.name}
                                    </h3>
                                    <div className="mb-6">
                                        <span className="text-3xl font-bold text-purple-400">${plan.price}</span>
                                        <span className="text-gray-400 ml-2">/month</span>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature: string | PlanFeature, index: number) => (
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
                                    <a
                                        href={plan.link || discordData.productLink}
                                        className="block w-full text-center bg-purple-600 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Features Section */}
                    <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Discord Bot Hosting?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">24/7 Uptime</h3>
                                    <p className="text-gray-400">Your bot stays online all the time</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Auto Restart</h3>
                                    <p className="text-gray-400">Automatic recovery from crashes</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Premium Network</h3>
                                    <p className="text-gray-400">Low latency and high performance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Discord Integration Section */}
                    <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-6">Easy Discord Integration</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                        <span className="text-purple-400 font-bold">1</span>
                                    </div>
                                    <p className="text-gray-300">Create your Discord bot in the Discord Developer Portal</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                        <span className="text-purple-400 font-bold">2</span>
                                    </div>
                                    <p className="text-gray-300">Choose your preferred hosting plan</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                        <span className="text-purple-400 font-bold">3</span>
                                    </div>
                                    <p className="text-gray-300">Upload your bot code to our platform</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                        <span className="text-purple-400 font-bold">4</span>
                                    </div>
                                    <p className="text-gray-300">Your bot is ready to use!</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative w-64 h-64">
                                    <div className="absolute inset-0 bg-purple-600/20 rounded-full animate-pulse"></div>
                                    <div className="absolute inset-4 bg-purple-600/30 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="absolute inset-8 bg-purple-600/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscordPage; 