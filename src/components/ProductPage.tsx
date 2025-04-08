'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Server, Check, Cpu, Globe, Gamepad, Bot } from 'lucide-react';
import serviceData, { LocationCode } from '../data/serviceData';

// Define Plan interface to match the data structure in serviceData
interface Plan {
    name: string;
    price: number;
    tier?: 'budget' | 'premium' | 'ultra';
    locationPricing: Record<LocationCode, number>;
    features: Array<string | { name: string; value: string }>;
}

interface ProductPageProps {
    serviceType?: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ serviceType }) => {
    const router = useRouter();
    const validServiceTypes = ['minecraft', 'vps', 'web', 'games', 'discord', 'domains'];
    const validServiceType = serviceType && validServiceTypes.includes(serviceType) ? serviceType : 'minecraft';

    const [selectedLocation, setSelectedLocation] = useState<LocationCode>('India');
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [selectedTier, setSelectedTier] = useState<'budget' | 'premium' | 'ultra'>('budget');

    // Services that should show tier selection
    const tierEnabledServices = ['minecraft', 'vps', 'games'];
    const showTierSelection = tierEnabledServices.includes(validServiceType);

    // Tier multipliers
    const tierPriceMultipliers = {
        'budget': 1.0,     // Base price
        'premium': 1.5,    // 50% premium
        'ultra': 2.0       // 100% premium
    };

    // Tier features
    const tierAdditionalFeatures = {
        'budget': [],
        'premium': ['Priority Support', 'Enhanced Backups', '99.9% Uptime SLA'],
        'ultra': ['24/7 Dedicated Support', 'Daily Backups', '99.99% Uptime SLA', 'Enhanced Security']
    };

    // Scroll to top when component mounts or route parameters change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceType]);

    // Service icons mapping
    const serviceIcons: Record<string, JSX.Element> = {
        minecraft: <Gamepad className="h-8 w-8 text-purple-400" />,
        vps: <Cpu className="h-8 w-8 text-purple-400" />,
        web: <Globe className="h-8 w-8 text-purple-400" />,
        games: <Server className="h-8 w-8 text-purple-400" />,
        discord: <Bot className="h-8 w-8 text-purple-400" />,
        domains: <Globe className="h-8 w-8 text-purple-400" />,
    };

    // Currency symbols by location
    const locationCurrencySymbols: Record<LocationCode, string> = {
        'India': '₹',
        'Singapore': '$',
        'US': '$',
        'Europe': '€',
        'Japan': '$'
    };

    // Get all plans regardless of tier
    const filteredPlans = serviceData[validServiceType].plans;

    // Set the selected plan when the component mounts or when plans change
    useEffect(() => {
        if (filteredPlans?.length > 0) {
            setSelectedPlan(filteredPlans[0] as unknown as Plan);
        }
    }, [validServiceType, filteredPlans]);

    // Get price for the selected location and tier
    const getPlanLocationPrice = (plan: Plan) => {
        let basePrice = plan.locationPricing ?
            (plan.locationPricing[selectedLocation] || plan.price) :
            plan.price;

        // Apply tier multiplier if tier selection is shown and service is not domains
        if (showTierSelection && validServiceType !== 'domains') {
            basePrice = basePrice * tierPriceMultipliers[selectedTier];
        }

        return Math.round(basePrice * 100) / 100; // Round to 2 decimal places
    };

    // Format price according to service type (yearly for domains)
    const formatPrice = (price: number) => {
        if (validServiceType === 'domains') {
            return `${locationCurrencySymbols[selectedLocation]}${price}/year`;
        }
        return `${locationCurrencySymbols[selectedLocation]}${price}`;
    };

    // Handle location change
    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLocation(e.target.value as LocationCode);
    };

    // Handle tier change
    const handleTierChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTier(e.target.value as 'budget' | 'premium' | 'ultra');
    };

    // Handle plan selection
    const handlePlanSelect = (plan: Plan) => {
        setSelectedPlan(plan);
    };

    // Add to cart / checkout
    const handleCheckout = () => {
        // In a real application, this would add the selected plan to a cart or redirect to checkout
        router.push('/clientarea');
    };

    // Helper function to get RAM information from plan
    const getRamInfo = (plan: Plan): string => {
        const ramFeature = plan.features.find((f) =>
            typeof f === 'string' ? f.includes('RAM') : (f.name?.includes('RAM') || f.name === 'RAM')
        );

        if (!ramFeature) return 'N/A';

        if (typeof ramFeature === 'string') {
            return ramFeature;
        } else {
            return `${ramFeature.name}: ${ramFeature.value}`;
        }
    };

    // Get combined features (plan features + tier features)
    const getCombinedFeatures = (plan: Plan) => {
        if (!showTierSelection) return plan.features;

        // Include tier-specific additional features
        return [...plan.features, ...tierAdditionalFeatures[selectedTier]];
    };

    if (!serviceData[validServiceType]) {
        return (
            <div className="min-h-screen bg-gray-900 text-white p-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-6">Service Not Found</h1>
                    <p className="mb-6">The requested service type does not exist.</p>
                    <Link href="/" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Navigation breadcrumb */}
            <div className="bg-gray-800 py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm">
                        <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
                        <span className="mx-2 text-gray-600">/</span>
                        <Link href="/#services" className="text-gray-400 hover:text-white">Services</Link>
                        <span className="mx-2 text-gray-600">/</span>
                        <span className="text-purple-400">{serviceData[validServiceType].title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left column - Service categories */}
                    <div className="lg:w-1/4">
                        <div className="bg-gray-800 rounded-lg p-4 mb-6">
                            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Services</h3>
                            <ul className="space-y-2">
                                {Object.keys(serviceData).map((type) => (
                                    <li key={type}>
                                        <Link
                                            href={`/product/${type}`}
                                            className={`flex items-center p-2 rounded-md ${type === validServiceType ? 'bg-purple-700 text-white' : 'hover:bg-gray-700'}`}
                                        >
                                            <span className="mr-2">
                                                {serviceIcons[type as keyof typeof serviceIcons]}
                                            </span>
                                            <span>{serviceData[type].title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tier Selection Dropdown - Only shown for specific services */}
                        {showTierSelection && (
                            <div className="bg-gray-800 rounded-lg p-4 mb-6">
                                <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Select Tier</h3>
                                <select
                                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-purple-500 focus:outline-none mb-4"
                                    value={selectedTier}
                                    onChange={handleTierChange}
                                >
                                    <option value="budget">Budget Plan</option>
                                    <option value="premium">Premium Plan</option>
                                    <option value="ultra">Ultra Plan</option>
                                </select>

                                <div className="text-sm text-gray-300 bg-gray-700/50 p-3 rounded-lg">
                                    <div className="mb-2 font-medium capitalize text-purple-400">
                                        {selectedTier} Tier Includes:
                                    </div>
                                    <ul className="space-y-1">
                                        {tierAdditionalFeatures[selectedTier].length > 0 ?
                                            tierAdditionalFeatures[selectedTier].map((feature, idx) => (
                                                <li key={idx} className="flex items-center">
                                                    <Check className="h-3 w-3 text-green-500 mr-1" />
                                                    <span className="text-xs">{feature}</span>
                                                </li>
                                            )) :
                                            <li className="text-xs">Base level service</li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Plan Selection as Dropdown */}
                        <div className="bg-gray-800 rounded-lg p-4 mb-6">
                            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                                Select Plan
                            </h3>

                            <div className="space-y-3">
                                {filteredPlans.map((plan: any) => (
                                    <div
                                        key={plan.name}
                                        className={`p-3 border rounded-lg cursor-pointer transition-all ${selectedPlan?.name === plan.name
                                            ? 'border-purple-400 bg-purple-700/30'
                                            : 'border-gray-700 hover:border-gray-500'
                                            }`}
                                        onClick={() => handlePlanSelect(plan as Plan)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className="font-medium">{plan.name}</div>
                                                <div className="text-sm text-gray-400">
                                                    {getRamInfo(plan as Plan)}
                                                </div>
                                            </div>
                                            <div className="text-purple-400 font-bold">
                                                {formatPrice(getPlanLocationPrice(plan as Plan))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Middle column - Service details and selected plan details */}
                    <div className="lg:w-2/4">
                        <div className="bg-gray-800 rounded-lg p-6 mb-6">
                            <div className="flex items-center mb-4">
                                <div className="mr-4">
                                    {serviceIcons[validServiceType as keyof typeof serviceIcons]}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{serviceData[validServiceType].title}</h2>
                                    <p className="text-gray-400">{serviceData[validServiceType].description}</p>
                                </div>
                            </div>

                            {/* Location selector */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Select Location</h3>
                                <div className="max-w-md">
                                    <select
                                        id="location"
                                        name="location"
                                        value={selectedLocation}
                                        onChange={handleLocationChange}
                                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                    >
                                        <option value="India">India (Mumbai)</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="US">United States (New York)</option>
                                        <option value="Europe">Europe (Frankfurt)</option>
                                        <option value="Japan">Japan (Tokyo)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Selected Plan Details */}
                            {selectedPlan && (
                                <div className="bg-gray-700/50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Selected Plan: {selectedPlan.name}
                                        {showTierSelection && (
                                            <span className="ml-2 text-sm px-3 py-1 bg-purple-600 rounded-full inline-block text-white">
                                                {selectedTier.charAt(0).toUpperCase() + selectedTier.slice(1)} Tier
                                            </span>
                                        )}
                                    </h3>

                                    <div className="mb-4">
                                        <h4 className="text-purple-400 font-medium mb-2">Specifications</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {getCombinedFeatures(selectedPlan).map((feature: any, idx: number) => (
                                                <div key={idx} className="flex items-center">
                                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                                    <span className="text-gray-300">
                                                        {typeof feature === 'string'
                                                            ? feature
                                                            : `${feature.name}: ${feature.value}`}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h4 className="text-purple-400 font-medium mb-2">Description</h4>
                                        <p className="text-gray-300">
                                            {serviceData[validServiceType].description}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right column - Plan selection and Order summary */}
                    <div className="lg:w-1/4">
                        {/* Order summary */}
                        <div className="bg-gray-800 rounded-lg p-4 sticky top-4">
                            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Order Summary</h3>

                            {selectedPlan ? (
                                <>
                                    <div className="mb-4">
                                        <div className="flex justify-between mb-2">
                                            <span>Plan:</span>
                                            <span className="font-medium">{selectedPlan.name}</span>
                                        </div>
                                        {showTierSelection && (
                                            <div className="flex justify-between mb-2">
                                                <span>Tier:</span>
                                                <span className="font-medium capitalize">{selectedTier}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between mb-2">
                                            <span>Location:</span>
                                            <span className="font-medium">{selectedLocation}</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-700 pt-4 mb-4">
                                        <div className="flex justify-between mt-2 text-xl font-bold">
                                            <span>Total:</span>
                                            <span className="text-purple-400">
                                                {formatPrice(getPlanLocationPrice(selectedPlan))}
                                            </span>
                                        </div>
                                        {validServiceType === 'domains' && (
                                            <div className="text-xs text-gray-400 text-right mt-1">
                                                Billed annually
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
                                    >
                                        Add to Cart
                                    </button>
                                </>
                            ) : (
                                <p className="text-gray-400">Please select a plan to see the order summary.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage; 