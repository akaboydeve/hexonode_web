"use client";

import React, { useState, useEffect } from 'react';
import { FaGlobeAmericas, FaServer, FaCheckCircle, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const locations = [
    { 
        name: 'UK', 
        icon: '🇬🇧',
        image: 'https://i.postimg.cc/hvfdpThf/image.png',
        status: 'active',
        servers: 12
    },
    { 
        name: 'USA', 
        icon: '🇺🇸',
        image: 'https://i.postimg.cc/Xqw2NRcf/image.png',
        status: 'active',
        servers: 7
    },
    { 
        name: 'Europe', 
        icon: '🇪🇺',
        image: 'https://i.postimg.cc/yY5dzW8C/image.png',
        status: 'active',
        servers: 13
    },
    { 
        name: 'Germany', 
        icon: '🇩🇪',
        image: 'https://i.postimg.cc/DymkFgS8/image.png',
        status: 'active',
        servers : 22
    },
    { 
        name: 'India', 
        icon: '🇮🇳',
        image: 'https://i.postimg.cc/rpD72Fs3/image.png',
        status: 'active',
        servers: 18
    },
    { 
        name: 'France', 
        icon: '🇫🇷',
        image: 'https://i.postimg.cc/4NRL2QpD/image.png',
        status: 'active',
        servers: 4
    },
    { 
        name: 'Singapore', 
        icon: '🇸🇬',
        image: 'https://i.postimg.cc/Tw0Q5V5S/image.png',
        status: 'active',
        servers: 14
    },
    { 
        name: 'Dubai', 
        icon: '🇦🇪',
        image: 'https://i.postimg.cc/q7mGx1N8/image.png',
        status: 'coming-soon',
        servers: 0
    },
];

const NetworkStatus = ({ isVisible, onClose, selectedLocation }: { 
    isVisible: boolean; 
    onClose: () => void;
    selectedLocation: string | null;
}) => {
    const [progress, setProgress] = useState(0);
    const [isChecking, setIsChecking] = useState(false);

    const handleClose = () => {
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

    if (!isVisible) return null;

    const location = locations.find(loc => loc.name === selectedLocation);

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gray-800 p-8 rounded-xl max-w-md w-full mx-4 relative"
            >
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <FaTimes className="w-5 h-5" />
                </button>
                
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Network Status Check</h3>
                    {location && (
                        <div className="flex items-center justify-center space-x-2">
                            <span className="text-xl">{location.icon}</span>
                            <span className="text-white font-semibold">{location.name}</span>
                        </div>
                    )}
                </div>
                
                <div className="space-y-6">
                    <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                            className="absolute h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                    
                    <div className="text-center">
                        {!isChecking && progress === 100 ? (
                            <div className="space-y-4">
                                <div className="flex items-center justify-center text-green-400 text-lg">
                                    <FaCheckCircle className="mr-2" />
                                    <span>Network Status: 100% - All OK</span>
                                </div>
                                {location && (
                                    <div className="bg-gray-700/50 p-4 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-400 text-sm">Active Servers</p>
                                            <p className="text-blue-400 font-medium">{location.servers}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <span className="text-gray-300">
                                Checking network status... {Math.round(progress)}%
                            </span>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const LocationCard = ({ location, index }: { location: typeof locations[0], index: number }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [isHovered, setIsHovered] = useState(false);
    const [showNetworkStatus, setShowNetworkStatus] = useState(false);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut"
                    }
                }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-purple-500 transition-colors duration-300">
                        <Image
                            src={location.image}
                            alt={`${location.name} flag`}
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{location.name}</h3>
                    
                    <div className="w-full space-y-3 mt-4">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Status</span>
                            <span className={`${location.status === 'active' ? 'text-green-400' : 'text-yellow-400'}`}>
                                {location.status === 'active' ? 'Active' : 'Coming Soon'}
                            </span>
                        </div>
                        
                        {location.status === 'active' && (
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-400">Servers</span>
                                <span className="text-blue-400">{location.servers}</span>
                            </div>
                        )}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 10
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl flex items-end justify-center p-4"
                    >
                        <button 
                            onClick={() => setShowNetworkStatus(true)}
                            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                        >
                            View Details
                        </button>
                    </motion.div>
                </div>
            </div>

            <NetworkStatus 
                isVisible={showNetworkStatus}
                onClose={() => setShowNetworkStatus(false)}
                selectedLocation={location.name}
            />
        </motion.div>
    );
};

const Locations = () => {
    return (
        <section id="locations" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
            
            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Global Network Presence
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Experience lightning-fast performance with our strategically placed servers across the globe
                        </p>
                    </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {locations.map((location, index) => (
                        <LocationCard key={location.name} location={location} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations; 