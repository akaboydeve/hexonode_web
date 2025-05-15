'use client';

import React, { useState } from 'react';
import serviceData from '@/data/serviceData';
import { LocationCode, TierType, Plan, PlanFeature, LocationBasedService, LocationTierPlans } from '@/data/serviceData';
import ParticlesComponent from '@/components/ui/particles';

const MinecraftPage = () => {
    const minecraftData = serviceData.minecraft as LocationBasedService;
    const locations: LocationCode[] = ['India', 'Singapore', 'US', 'Germany', 'France', 'UK', 'Europe'];
    const tiers: TierType[] = ['budget', 'premium', 'ultra'];
    const [selectedLocation, setSelectedLocation] = useState<LocationCode>('India');
    const [selectedTier, setSelectedTier] = useState<TierType | 'all'>('all');

    const isOutOfStock = (plan: Plan) => {
        return plan.features.length === 1 && plan.features[0] === 'OUT OF STOCK';
    };

    return (
        <div className="min-h-screen bg-gray-900 pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <ParticlesComponent />
            <div className="relative z-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse">{minecraftData.title}</h1>
                    <p className="text-xl text-gray-400 animate-fade-in mt-4">{minecraftData.description}</p>
                </div>

                {/* Location Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {locations.map((location) => (
                        <button
                            key={location}
                            onClick={() => setSelectedLocation(location)}
                            className={`relative px-6 py-3 rounded-xl transition-all duration-500 transform hover:scale-105 group ${
                                selectedLocation === location
                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/50'
                                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/80 hover:shadow-md border border-gray-700/50'
                            }`}
                        >
                            <span className="relative z-10 font-medium">{location}</span>
                            <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                                selectedLocation === location
                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600'
                                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20'
                            }`} />
                            {selectedLocation === location && (
                                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tier Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button
                        onClick={() => setSelectedTier('all')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                            selectedTier === 'all'
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md'
                        }`}
                    >
                        All Plans
                    </button>
                    {tiers.map((tier) => (
                        <button
                            key={tier}
                            onClick={() => setSelectedTier(tier)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                                selectedTier === tier
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md'
                            }`}
                        >
                            {tier.charAt(0).toUpperCase() + tier.slice(1)} Plans
                        </button>
                    ))}
                </div>

                {/* Plans Grid */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-white text-center mb-8">Select your plan</h2>
                    <div className="text-center mb-8 p-4 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-lg border border-purple-500/50 shadow-lg">
                        <h2 className="text-2xl font-bold text-white animate-fade-in">
                            {selectedLocation} {selectedTier !== 'all' ? selectedTier.charAt(0).toUpperCase() + selectedTier.slice(1) : ''} Plans
                        </h2>
                    </div>
                    
                    {tiers.map((tier) => {
                        // Skip if a specific tier is selected and this isn't it
                        if (selectedTier !== 'all' && selectedTier !== tier) return null;

                        const locationPlans = minecraftData[selectedLocation] as LocationTierPlans;
                        const plans = locationPlans[tier];
                        if (!plans) return null;

                        return (
                            <div key={tier} className="bg-gray-800/70 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-700 hover:border-purple-500/70 transition-all duration-300 transform hover:scale-105 flex flex-col mb-8">
                                <h3 className="text-xl font-semibold text-purple-400 mb-4 capitalize">
                                    {tier} Tier
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {plans.map((plan: Plan) => (
                                        <div 
                                            key={plan.name} 
                                            className="bg-gray-800/70 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-700 hover:border-purple-500/70 transition-all duration-300 transform hover:scale-105 flex flex-col"
                                        >
                                            <h4 className="text-lg font-medium text-purple-400 mb-2">
                                                {plan.name}
                                            </h4>
                                            {!isOutOfStock(plan) && (
                                                <p className="text-2xl font-bold text-white mb-4 transition-colors duration-300">
                                                    ${plan.price}
                                                </p>
                                            )}
                                            <ul className="space-y-3 mb-6">
                                                {plan.features.map((feature: string | PlanFeature, index: number) => (
                                                    <li key={index} className="flex items-center text-gray-300 transition-colors duration-300">
                                                        {!isOutOfStock(plan) && (
                                                            <svg
                                                                className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path d="M5 13l4 4L19 7"></path>
                                                            </svg>
                                                        )}
                                                        <span className={`text-sm ${isOutOfStock(plan) ? 'text-red-500 font-semibold' : ''}`}>
                                                            {typeof feature === 'string' ? feature : feature.value}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                            {!isOutOfStock(plan) && (
                                                <a
                                                    href={minecraftData.productLink}
                                                    className="block w-full text-center bg-purple-600 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50"
                                                >
                                                    Get Started
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
        </div>
    );
};

export default MinecraftPage; 