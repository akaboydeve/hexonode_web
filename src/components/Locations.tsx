"use client";

import React, { useState, useEffect } from 'react';
import { FaGlobeAmericas, FaServer, FaCheckCircle, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const locations = [
    { 
        name: 'UK', 
        icon: '🇬🇧',
        image: 'https://i.postimg.cc/hvfdpThf/image.png',
        status: 'active'
    },
    { 
        name: 'USA', 
        icon: '🇺🇸',
        image: 'https://i.postimg.cc/Xqw2NRcf/image.png',
        status: 'active'
    },
    { 
        name: 'Europe', 
        icon: '🇪🇺',
        image: 'https://i.postimg.cc/yY5dzW8C/image.png',
        status: 'active'
    },
    { 
        name: 'Germany', 
        icon: '🇩🇪',
        image: 'https://i.postimg.cc/DymkFgS8/image.png',
        status: 'active'
    },
    { 
        name: 'India', 
        icon: '🇮🇳',
        image: 'https://i.postimg.cc/rpD72Fs3/image.png',
        status: 'active'
    },
    { 
        name: 'France', 
        icon: '🇫🇷',
        image: 'https://i.postimg.cc/4NRL2QpD/image.png',
        status: 'active'
    },
    { 
        name: 'Singapore', 
        icon: '🇸🇬',
        image: 'https://i.postimg.cc/Tw0Q5V5S/image.png',
        status: 'active'
    },
    { 
        name: 'Dubai', 
        icon: '🇦🇪',
        image: 'https://i.postimg.cc/q7mGx1N8/image.png',
        status: 'coming-soon'
    },
];

const NetworkStatus = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);
    const [isChecking, setIsChecking] = useState(false);

    const handleClose = () => {
        setSelectedLocation(null);
        setProgress(0);
        setIsChecking(false);
        onClose();
    };

    React.useEffect(() => {
        if (isVisible && selectedLocation) {
            setIsChecking(true);
            setProgress(0);
            
            const duration = 2000;
            const interval = 20;
            const steps = duration / interval;
            const increment = 100 / steps;
            
            let currentProgress = 0;
            const timer = setInterval(() => {
                currentProgress += increment;
                if (currentProgress >= 100) {
                    currentProgress = 100;
                    clearInterval(timer);
                    setIsChecking(false);
                }
                setProgress(currentProgress);
            }, interval);

            return () => clearInterval(timer);
        }
    }, [isVisible, selectedLocation]);

    const handleLocationSelect = (locationName: string) => {
        setSelectedLocation(locationName);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full mx-4 relative">
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <FaTimes className="w-5 h-5" />
                </button>
                
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Network Status Check</h3>
                
                {!selectedLocation ? (
                    <div className="space-y-4">
                        <p className="text-gray-300 text-center mb-4">Select a location to check network status:</p>
                        <div className="grid grid-cols-2 gap-3">
                            {locations.filter(loc => loc.status === 'active').map((location) => (
                                <button
                                    key={location.name}
                                    onClick={() => handleLocationSelect(location.name)}
                                    className="flex items-center space-x-2 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    <span className="text-xl">{location.icon}</span>
                                    <span className="text-white">{location.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-xl">{locations.find(loc => loc.name === selectedLocation)?.icon}</span>
                                <span className="text-white font-semibold">{selectedLocation}</span>
                            </div>
                            <button
                                onClick={() => setSelectedLocation(null)}
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Change Location
                            </button>
                        </div>
                        
                        <div className="relative h-2 bg-gray-700 rounded-full mb-4">
                            <div 
                                className="absolute h-full bg-green-500 rounded-full transition-all duration-200"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        
                        <div className="text-center">
                            {!isChecking && progress === 100 ? (
                                <div className="flex items-center justify-center text-green-400 text-lg">
                                    <FaCheckCircle className="mr-2" />
                                    <span>Network Status: 100% - All OK</span>
                                </div>
                            ) : (
                                <span className="text-gray-300">
                                    Checking network status... {Math.round(progress)}%
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Define animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideLeftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slideRightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const LocationCard = ({ location, index }: { location: typeof locations[0], index: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  let variantType;
  if (index % 3 === 0) {
    variantType = cardVariants;
  } else if (index % 3 === 1) {
    variantType = slideLeftVariant;
  } else {
    variantType = slideRightVariant;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variantType}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/50 border border-gray-700 h-full"
    >
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-gray-600">
          <Image
            src={location.image}
            alt={`${location.name} flag`}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-white">{location.name}</h3>
        <div className="mt-2 flex items-center">
          {location.status === 'active' ? (
            <div className="flex items-center text-green-400">
              <FaServer className="mr-2" />
              <span className="text-sm">Active</span>
            </div>
          ) : (
            <div className="flex items-center text-yellow-400">
              <span className="text-sm">Coming Soon</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Locations = () => {
    const [showNetworkStatus, setShowNetworkStatus] = useState(false);

    return (
        <section id="locations" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Global Server Locations
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Experience lightning-fast performance with our strategically placed servers across the globe
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {locations.map((location, index) => (
                        <LocationCard key={location.name} location={location} index={index} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button 
                        onClick={() => setShowNetworkStatus(true)}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        <FaGlobeAmericas className="mr-2" />
                        <span>View Network Status</span>
                    </button>
                </div>
            </div>
            <NetworkStatus 
                isVisible={showNetworkStatus} 
                onClose={() => setShowNetworkStatus(false)} 
            />
        </section>
    );
};

export default Locations; 