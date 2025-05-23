"use client";

import React, { useState, useEffect } from 'react';
import { Check, MapPin } from 'lucide-react';
import serviceData, {
  PricingNavProps,
  LocationCode,
  Plan,
  PlanFeature,
  LocationIndependentService,
  LocationBasedService,
  StandardPlans
} from '@/data/serviceData';
import Link from 'next/link';

const PricingNav: React.FC<PricingNavProps> = ({ activeService, setActiveService }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6 bg-gray-800 p-2 rounded-xl max-w-4xl mx-auto">
      {Object.keys(serviceData).map((service) => (
        <button
          key={service}
          className={`px-5 py-2.5 text-base font-bold rounded-lg transition-all transform hover:scale-105 ${activeService === service
            ? 'bg-green-500 text-white shadow-lg'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          onClick={() => setActiveService(service)}
        >
          {service === 'games'
            ? 'Game Hosting'
            : service.charAt(0).toUpperCase() + service.slice(1)}
        </button>
      ))}
    </div>
  );
};

const TierNav: React.FC<{ activeTier: string; setActiveTier: (tier: string) => void; availableTiers: string[] }> =
  ({ activeTier, setActiveTier, availableTiers }) => {
    return (
      <div className="flex flex-wrap justify-center gap-2 mb-6 bg-gray-800 p-2 rounded-xl max-w-4xl mx-auto">
        {availableTiers.map((tier) => (
          <button
            key={tier}
            className={`px-4 py-2 text-sm rounded-lg transition-all transform hover:scale-105 ${activeTier === tier
              ? 'bg-blue-500 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            onClick={() => setActiveTier(tier)}
          >
            {tier.charAt(0).toUpperCase() + tier.slice(1)} Plan
          </button>
        ))}
      </div>
    );
  };

// Currency symbols by location
const locationCurrencySymbols: Record<LocationCode, string> = {
  'India': '₹',
  'Singapore': '$',
  'US': '$',
  'Germany': '€',
  'France': '€',
  'UK': '£',
  'Europe': '€'
};

const Pricing: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('minecraft');
  const [selectedLocation, setSelectedLocation] = useState<LocationCode>('India');
  const [activeTier, setActiveTier] = useState<string>('budget');
  const [plans, setPlans] = useState<Plan[]>([]);
  const [showLocationSelector, setShowLocationSelector] = useState<boolean>(true);

  // Define available locations
  const locations: LocationCode[] = ['India', 'Singapore', 'US', 'Germany', 'France', 'UK', 'Europe'];

  // Map Europe to Germany for data purposes
  const getLocationForData = (location: LocationCode): LocationCode => {
    return location === 'Europe' ? 'Germany' : location;
  };

  // Ensure the service exists with fallback
  const service = serviceData[activeService] || serviceData.minecraft;

  // Check if service is location independent
  const isLocationIndependent = 'isLocationIndependent' in service && service.isLocationIndependent;

  // Update location selector visibility when service changes
  useEffect(() => {
    setShowLocationSelector(!isLocationIndependent);
  }, [isLocationIndependent]);

  // Get location data if service is location-based
  const locationData = !isLocationIndependent
    ? (service as LocationBasedService)[getLocationForData(selectedLocation)]
    : null;

  // Detect if this service uses standard plans or tiered plans
  const usesStandardPlans = locationData && typeof locationData === 'object' && 'standard' in locationData;

  // Get available tiers for current service and location if using tiered plans
  const availableTiers = !isLocationIndependent && !usesStandardPlans && locationData && typeof locationData === 'object' ?
    Object.keys(locationData).filter(tier =>
      tier in locationData && Array.isArray((locationData as any)[tier]) && (locationData as any)[tier].length > 0
    ) : [];

  // Update plans when dependencies change
  useEffect(() => {
    if (isLocationIndependent) {
      // Location-independent service
      setPlans((service as LocationIndependentService).plans || []);
    } else if (usesStandardPlans && locationData && typeof locationData === 'object') {
      // Using standard plans
      setPlans((locationData as StandardPlans).standard || []);
    } else {
      // Using tiered plans
      // Check if activeTier is in availableTiers, otherwise set to first available
      if (availableTiers.length > 0) {
        if (!availableTiers.includes(activeTier)) {
          setActiveTier(availableTiers[0]);
        }
        setPlans(locationData && typeof locationData === 'object' && activeTier in locationData ?
          (locationData as any)[activeTier] : []);
      } else {
        setPlans([]);
      }
    }
  }, [activeService, selectedLocation, activeTier, usesStandardPlans, locationData, isLocationIndependent, service]);

  // Format price based on location
  const formatPrice = (price: number): string => {
    const symbol = isLocationIndependent ?
      (activeService === 'domains' ? '$' : '$') : // Use $ for domains and other location-independent services
      locationCurrencySymbols[selectedLocation];
    return `${symbol}${price.toFixed(2)}`;
  };

  // Calculate discount information
  const getDiscountInfo = (plan: Plan) => {
    const actualPrice = plan.price;
    // Calculate the original price (25% markup)
    const originalPrice = Math.round(actualPrice * 1.25 * 100) / 100;
    // Calculate discount percentage
    const discountPercent = Math.round((1 - actualPrice / originalPrice) * 100);

    return {
      originalPrice,
      discountPercent
    };
  };

  return (
    <section id="pricing" className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">{service.title}</h2>
          <p className="mt-2 text-xl text-gray-400">
            {service.description}
          </p>
        </div>

        <PricingNav activeService={activeService} setActiveService={setActiveService} />

        {/* Location Selector - only show for location-based services */}
        {showLocationSelector && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-4">
            <span className="text-gray-400 flex items-center gap-2">
              <MapPin size={16} />
              Select Location:
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all text-sm ${selectedLocation === loc
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Only show tier navigation for tiered plans */}
        {!isLocationIndependent && !usesStandardPlans && availableTiers.length > 0 && (
          <TierNav
            activeTier={activeTier}
            setActiveTier={setActiveTier}
            availableTiers={availableTiers}
          />
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan: Plan, index: number) => {
            const { originalPrice, discountPercent } = getDiscountInfo(plan);
            return (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold text-purple-400">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-gray-400">{activeService === 'domains' ? '/year' : '/month'}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(originalPrice)}
                    </span>
                    <span className="text-sm bg-green-800 text-green-200 px-2 py-0.5 rounded-full">
                      {discountPercent}% OFF
                    </span>
                  </div>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature: string | PlanFeature, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-300">
                        {typeof feature === 'string'
                          ? feature
                          : `${feature.name}: ${feature.value}`}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link || service.productLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 transition-all transform hover:scale-105 block text-center"
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;