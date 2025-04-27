// Define TypeScript interfaces
export type LocationCode = 'India' | 'Singapore' | 'US' | 'Germany' | 'France' | 'UK';
export type TierType = 'budget' | 'premium' | 'ultra';

export interface PlanFeature {
    name: string;
    value: string;
}

export interface Plan {
    name: string;
    price: number; // Base price in location currency
    features: Array<string | PlanFeature>; // Can be either string array or array of name-value objects
}

export interface LocationTierPlans {
    budget?: Plan[];
    premium?: Plan[];
    ultra?: Plan[];
    [key: string]: Plan[] | undefined;
}

export interface StandardPlans {
    standard: Plan[];
    [key: string]: Plan[] | undefined;
}

export interface LocationBasedService {
    title: string;
    description: string;
    productLink: string;
    India: LocationTierPlans;
    Singapore: LocationTierPlans;
    US: LocationTierPlans;
    Germany: LocationTierPlans;
    France: LocationTierPlans;
    UK: LocationTierPlans;
    [key: string]: string | LocationTierPlans;
}

export interface LocationIndependentService {
    title: string;
    description: string;
    productLink: string;
    plans: Plan[];
    isLocationIndependent: true;
}

export type ServiceData = LocationBasedService | LocationIndependentService;

export interface ServiceDataMap {
    [key: string]: ServiceData;
}

// Define the PricingNavProps interface
export interface PricingNavProps {
    activeService: string;
    setActiveService: (service: string) => void;
}

// Create a function to copy minecraft plans to games
const copyMinecraftToGames = (minecraftData: LocationBasedService): LocationBasedService => {
    // Deep copy the minecraft data
    const gamesCopy = JSON.parse(JSON.stringify(minecraftData));

    // Update title and description
    gamesCopy.title = 'Game Server Hosting';
    gamesCopy.description = 'Host your favorite games with low latency';
    gamesCopy.productLink = 'https://panel.hexonode.com/games';

    // Rename all plans to "Game Server" instead of "Plan"
    Object.keys(gamesCopy).forEach(location => {
        if (location !== 'title' && location !== 'description' && location !== 'productLink') {
            Object.keys(gamesCopy[location]).forEach(tier => {
                gamesCopy[location][tier].forEach((plan: Plan) => {
                    plan.name = plan.name.replace('Plan', 'Game Server');
                });
            });
        }
    });

    return gamesCopy;
};

// Export service data
const serviceData: ServiceDataMap = {
    minecraft: {
        title: 'Minecraft Hosting Plans',
        description: 'High-performance Minecraft server hosting with instant setup',
        productLink: 'https://panel.hexonode.com/minecraft',
        India: {
            budget: [
                {
                    name: '8GB Plan',
                    price: 400,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '16GB Plan',
                    price: 800,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '32GB Plan',
                    price: 1600,
                    features: [
                        '32GB RAM',
                        '6 vCPU Cores',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '64GB Plan',
                    price: 3200,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB Plan',
                    price: 600,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '16GB Plan',
                    price: 1200,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '32GB Plan',
                    price: 2400,
                    features: [
                        '32GB RAM',
                        '6 vCPU Cores',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '64GB Plan',
                    price: 4800,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB Plan - Ryzen 9',
                    price: 800,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores (Ryzen 9)',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '16GB Plan - Ryzen 9',
                    price: 1600,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores (Ryzen 9)',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '32GB Plan - Ryzen 9',
                    price: 3200,
                    features: [
                        '32GB RAM',
                        '6 vCPU Cores (Ryzen 9)',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '64GB Plan - Ryzen 9',
                    price: 6400,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores (Ryzen 9)',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '128GB Plan - Ryzen 9',
                    price: 12800,
                    features: [
                        '128GB RAM',
                        '12 vCPU Cores (Ryzen 9)',
                        '1280GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        },
        Singapore: {
            budget: [
                {
                    name: '8GB Plan',
                    price: 6.40,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '16GB Plan',
                    price: 12.80,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '32GB Plan',
                    price: 25.60,
                    features: [
                        '32GB RAM',
                        '6 vCPU Cores',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '64GB Plan',
                    price: 51.20,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB Plan',
                    price: 9.60,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '16GB Plan',
                    price: 19.20,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '32GB Plan',
                    price: 38.40,
                    features: [
                        '32GB RAM',
                        '6 vCPU Cores',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '64GB Plan',
                    price: 76.80,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB Plan - Ryzen 9',
                    price: 12.80,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores (Ryzen 9)',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '16GB Plan - Ryzen 9',
                    price: 25.60,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores (Ryzen 9)',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '32GB Plan - Ryzen 9',
                    price: 51.20,
                    features: [
                        '32GB RAM',
                        '6 vCPU Cores (Ryzen 9)',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '64GB Plan - Ryzen 9',
                    price: 102.40,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores (Ryzen 9)',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '128GB Plan - Ryzen 9',
                    price: 204.80,
                    features: [
                        '128GB RAM',
                        '12 vCPU Cores (Ryzen 9)',
                        '1280GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        },
        US: {
            budget: [
                {
                    name: '8GB Plan - Budget',
                    price: 6.40,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '16GB Plan - Budget',
                    price: 12.80,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '32GB Plan - Budget',
                    price: 25.60,
                    features: [
                        '32GB RAM',
                        '6 vCPU Cores',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '64GB Plan - Budget',
                    price: 51.20,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '128GB Plan - Ultra Ryzen 9',
                    price: 204.80,
                    features: [
                        '128GB RAM',
                        '12 vCPU Cores (Ryzen 9)',
                        '1280GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB Plan - Premium',
                    price: 9.60,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '16GB Plan - Premium',
                    price: 19.20,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '32GB Plan - Premium',
                    price: 38.40,
                    features: [
                        '32GB RAM',
                        '6 vCPU Cores',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '64GB Plan - Premium',
                    price: 76.80,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB Plan - Ultra Ryzen 9',
                    price: 12.80,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores (Ryzen 9)',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '16GB Plan - Ultra Ryzen 9',
                    price: 25.60,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores (Ryzen 9)',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '32GB Plan - Ultra Ryzen 9',
                    price: 51.20,
                    features: [
                        '32GB RAM',
                        '6 vCPU Cores (Ryzen 9)',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '128GB Plan - Ultra Ryzen 9',
                    price: 204.80,
                    features: [
                        '128GB RAM',
                        '12 vCPU Cores (Ryzen 9)',
                        '1280GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        },
        Germany: {
            budget: [
                {
                    name: '8GB Plan - Budget',
                    price: 8.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '16GB Plan - Budget',
                    price: 15.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '34GB Plan - Budget',
                    price: 34.00,
                    features: [
                        '34GB RAM',
                        '6 vCPU Cores',
                        '340GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '64GB Plan - Budget',
                    price: 49.90,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '139.99 Plan - Ultra Ryzen 9',
                    price: 139.99,
                    features: [
                        '139.99GB RAM',
                        '12 vCPU Cores (Ryzen 9)',
                        '1600GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ],
            premium: [
                {
                    name: '9GB Plan - Premium',
                    price: 9.00,
                    features: [
                        '9GB RAM',
                        '3 vCPU Cores',
                        '90GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '18GB Plan - Premium',
                    price: 18.00,
                    features: [
                        '18GB RAM',
                        '4 vCPU Cores',
                        '180GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '37GB Plan - Premium',
                    price: 37.00,
                    features: [
                        '37GB RAM',
                        '6 vCPU Cores',
                        '370GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '64GB Plan - Premium',
                    price: 64.00,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '15GB Plan - Ultra Ryzen 9',
                    price: 15.00,
                    features: [
                        '15GB RAM',
                        '4 vCPU Cores (Ryzen 9)',
                        '150GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '23GB Plan - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '23GB RAM',
                        '4 vCPU Cores (Ryzen 9)',
                        '150GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '23GB Plan - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '23GB RAM',
                        '4 vCPU Cores (Ryzen 9)',
                        '150GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '139.99 Plan - Ultra Ryzen 9',
                    price: 139.99,
                    features: [
                        '139.99GB RAM',
                        '12 vCPU Cores (Ryzen 9)',
                        '1600GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        },
        France: {
            budget: [
                {
                    name: '8GB Plan - Budget',
                    price: 6.40,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '16GB Plan - Budget',
                    price: 12.80,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '25.60 Plan - Budget',
                    price: 25.60,
                    features: [
                        '25.60GB RAM',
                        '6 vCPU Cores',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '51.20 Plan - Budget',
                    price: 51.20,
                    features: [
                        '51.20GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '139.99 Plan - Ultra Ryzen 9',
                    price: 139.99,
                    features: [
                        '139.99GB RAM',
                        '12 vCPU Cores (Ryzen 9)',
                        '1600GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ],
            premium: [
                {
                    name: '9GB Plan - Premium',
                    price: 9.00,
                    features: [
                        '9GB RAM',
                        '3 vCPU Cores',
                        '90GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '18GB Plan - Premium',
                    price: 18.00,
                    features: [
                        '18GB RAM',
                        '4 vCPU Cores',
                        '180GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '37GB Plan - Premium',
                    price: 37.00,
                    features: [
                        '37GB RAM',
                        '6 vCPU Cores',
                        '370GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '64GB Plan - Premium',
                    price: 64.00,
                    features: [
                        '64GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '15GB Plan - Ultra Ryzen 9',
                    price: 15.00,
                    features: [
                        '15GB RAM',
                        '4 vCPU Cores (Ryzen 9)',
                        '150GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '23GB Plan - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '23GB RAM',
                        '4 vCPU Cores (Ryzen 9)',
                        '150GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '23GB Plan - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '23GB RAM',
                        '4 vCPU Cores (Ryzen 9)',
                        '150GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '139.99 Plan - Ultra Ryzen 9',
                    price: 139.99,
                    features: [
                        '139.99GB RAM',
                        '12 vCPU Cores (Ryzen 9)',
                        '1600GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        },
        UK: {
            budget: [
                {
                    name: '8GB Plan - Budget',
                    price: 5.60,
                    features: [
                        '8GB RAM',
                        '3 vCPU Cores',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '16GB Plan - Budget',
                    price: 11.20,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '22.40 Plan - Budget',
                    price: 22.40,
                    features: [
                        '22.40GB RAM',
                        '6 vCPU Cores',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '44.80 Plan - Budget',
                    price: 44.80,
                    features: [
                        '44.80GB RAM',
                        '10 vCPU Cores',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'DDoS Protection',
                        'Priority Support'
                    ]
                },
                {
                    name: '179.20 Plan - Ultra Ryzen 9',
                    price: 179.20,
                    features: [
                        '179.20GB RAM',
                        '12 vCPU Cores (Ryzen 9)',
                        '1280GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ],
            premium: [
                {
                    name: '8.40 Plan - Premium',
                    price: 8.40,
                    features: [
                        '8.40GB RAM',
                        '3 vCPU Cores',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '16.80 Plan - Premium',
                    price: 16.80,
                    features: [
                        '16.80GB RAM',
                        '4 vCPU Cores',
                        '160GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '33.60 Plan - Premium',
                    price: 33.60,
                    features: [
                        '33.60GB RAM',
                        '6 vCPU Cores',
                        '330GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '67.20 Plan - Premium',
                    price: 67.20,
                    features: [
                        '67.20GB RAM',
                        '10 vCPU Cores',
                        '670GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Advanced DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '10.80 Plan - Ultra Ryzen 9',
                    price: 10.80,
                    features: [
                        '10.80GB RAM',
                        '3 vCPU Cores (Ryzen 9)',
                        '80GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '22.40 Plan - Ultra Ryzen 9',
                    price: 22.40,
                    features: [
                        '22.40GB RAM',
                        '6 vCPU Cores (Ryzen 9)',
                        '320GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '44.80 Plan - Ultra Ryzen 9',
                    price: 44.80,
                    features: [
                        '44.80GB RAM',
                        '10 vCPU Cores (Ryzen 9)',
                        '640GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '179.20 Plan - Ultra Ryzen 9',
                    price: 179.20,
                    features: [
                        '179.20GB RAM',
                        '12 vCPU Cores (Ryzen 9)',
                        '1280GB SSD Storage',
                        'Unlimited Bandwidth',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        }
    },
    vps: {
        title: 'VPS Hosting Plans',
        description: 'Powerful virtual private servers with full root access',
        productLink: 'https://panel.hexonode.com/vps',
        India: {
            budget: [
                {
                    name: '8GB VPS - Budget',
                    price: 12.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '16GB VPS - Budget',
                    price: 24.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '32GB VPS - Budget',
                    price: 48.00,
                    features: [
                        '32GB RAM',
                        '6 vCPU',
                        '400GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '64GB VPS - Budget',
                    price: 96.00,
                    features: [
                        '64GB RAM',
                        '10 vCPU',
                        '800GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB VPS - Premium',
                    price: 18.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '16GB VPS - Premium',
                    price: 36.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '32GB VPS - Premium',
                    price: 72.00,
                    features: [
                        '32GB RAM',
                        '6 vCPU',
                        '400GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB VPS - Ultra Ryzen 9',
                    price: 15.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU (Ryzen 9)',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '12GB VPS - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '12GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '150GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '16GB VPS - Ultra Ryzen 9',
                    price: 30.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '24GB VPS - Ultra Ryzen 9',
                    price: 45.00,
                    features: [
                        '24GB RAM',
                        '5 vCPU (Ryzen 9)',
                        '300GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '32GB VPS - Ultra Ryzen 9',
                    price: 54.99,
                    features: [
                        '32GB RAM',
                        '6 vCPU (Ryzen 9)',
                        '400GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        },
        Singapore: {
            budget: [
                {
                    name: '8GB VPS - Budget',
                    price: 12.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '16GB VPS - Budget',
                    price: 24.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '32GB VPS - Budget',
                    price: 48.00,
                    features: [
                        '32GB RAM',
                        '6 vCPU',
                        '400GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '64GB VPS - Budget',
                    price: 96.00,
                    features: [
                        '64GB RAM',
                        '10 vCPU',
                        '800GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB VPS - Premium',
                    price: 18.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '16GB VPS - Premium',
                    price: 36.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '32GB VPS - Premium',
                    price: 72.00,
                    features: [
                        '32GB RAM',
                        '6 vCPU',
                        '400GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB VPS - Ultra Ryzen 9',
                    price: 15.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU (Ryzen 9)',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '12GB VPS - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '12GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '150GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '16GB VPS - Ultra Ryzen 9',
                    price: 30.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '24GB VPS - Ultra Ryzen 9',
                    price: 45.00,
                    features: [
                        '24GB RAM',
                        '5 vCPU (Ryzen 9)',
                        '300GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '32GB VPS - Ultra Ryzen 9',
                    price: 54.99,
                    features: [
                        '32GB RAM',
                        '6 vCPU (Ryzen 9)',
                        '400GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        },
        US: {
            budget: [
                {
                    name: '8GB VPS - Budget',
                    price: 12.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '16GB VPS - Budget',
                    price: 24.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '32GB VPS - Budget',
                    price: 48.00,
                    features: [
                        '32GB RAM',
                        '6 vCPU',
                        '400GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '64GB VPS - Budget',
                    price: 96.00,
                    features: [
                        '64GB RAM',
                        '10 vCPU',
                        '800GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB VPS - Premium',
                    price: 18.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '16GB VPS - Premium',
                    price: 36.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '32GB VPS - Premium',
                    price: 72.00,
                    features: [
                        '32GB RAM',
                        '6 vCPU',
                        '400GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB VPS - Ultra Ryzen 9',
                    price: 15.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU (Ryzen 9)',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '12GB VPS - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '12GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '150GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '16GB VPS - Ultra Ryzen 9',
                    price: 30.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '24GB VPS - Ultra Ryzen 9',
                    price: 45.00,
                    features: [
                        '24GB RAM',
                        '5 vCPU (Ryzen 9)',
                        '300GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '32GB VPS - Ultra Ryzen 9',
                    price: 54.99,
                    features: [
                        '32GB RAM',
                        '6 vCPU (Ryzen 9)',
                        '400GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        },
        Germany: {
            budget: [
                {
                    name: '8GB VPS - Budget',
                    price: 8.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '16GB VPS - Budget',
                    price: 15.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '34GB VPS - Budget',
                    price: 34.00,
                    features: [
                        '34GB RAM',
                        '6 vCPU',
                        '340GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '64GB VPS - Budget',
                    price: 49.90,
                    features: [
                        '64GB RAM',
                        '10 vCPU',
                        '800GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                }
            ],
            premium: [
                {
                    name: '9GB VPS - Premium',
                    price: 9.00,
                    features: [
                        '9GB RAM',
                        '3 vCPU',
                        '90GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '18GB VPS - Premium',
                    price: 18.00,
                    features: [
                        '18GB RAM',
                        '4 vCPU',
                        '180GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '37GB VPS - Premium',
                    price: 37.00,
                    features: [
                        '37GB RAM',
                        '6 vCPU',
                        '370GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '64GB VPS - Premium',
                    price: 64.00,
                    features: [
                        '64GB RAM',
                        '10 vCPU',
                        '640GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '15GB VPS - Ultra Ryzen 9',
                    price: 15.00,
                    features: [
                        '15GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '150GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '23GB VPS - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '23GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '150GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '23GB VPS - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '23GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '150GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '139.99 VPS - Ultra Ryzen 9',
                    price: 139.99,
                    features: [
                        '139.99GB RAM',
                        '12 vCPU (Ryzen 9)',
                        '1600GB NVMe SSD',
                        'Unlimited Traffic',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        },
        France: {
            budget: [
                {
                    name: '8GB VPS - Budget',
                    price: 12.00,
                    features: [
                        '8GB RAM',
                        '3 vCPU',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '16GB VPS - Budget',
                    price: 24.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '25.60 VPS - Budget',
                    price: 25.60,
                    features: [
                        '25.60GB RAM',
                        '6 vCPU',
                        '320GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '51.20 VPS - Budget',
                    price: 51.20,
                    features: [
                        '51.20GB RAM',
                        '10 vCPU',
                        '640GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                }
            ],
            premium: [
                {
                    name: '9GB VPS - Premium',
                    price: 9.00,
                    features: [
                        '9GB RAM',
                        '3 vCPU',
                        '90GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '18GB VPS - Premium',
                    price: 18.00,
                    features: [
                        '18GB RAM',
                        '4 vCPU',
                        '180GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '37GB VPS - Premium',
                    price: 37.00,
                    features: [
                        '37GB RAM',
                        '6 vCPU',
                        '370GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '64GB VPS - Premium',
                    price: 64.00,
                    features: [
                        '64GB RAM',
                        '10 vCPU',
                        '640GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '15GB VPS - Ultra Ryzen 9',
                    price: 15.00,
                    features: [
                        '15GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '150GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '23GB VPS - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '23GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '150GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '23GB VPS - Ultra Ryzen 9',
                    price: 23.00,
                    features: [
                        '23GB RAM',
                        '4 vCPU (Ryzen 9)',
                        '150GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '139.99 VPS - Ultra Ryzen 9',
                    price: 139.99,
                    features: [
                        '139.99GB RAM',
                        '12 vCPU (Ryzen 9)',
                        '1600GB NVMe SSD',
                        'Unlimited Traffic',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        },
        UK: {
            budget: [
                {
                    name: '8GB VPS - Budget',
                    price: 10.80,
                    features: [
                        '8GB RAM',
                        '3 vCPU',
                        '100GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '16GB VPS - Budget',
                    price: 21.60,
                    features: [
                        '16GB RAM',
                        '4 vCPU',
                        '200GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '22.40 VPS - Budget',
                    price: 22.40,
                    features: [
                        '22.40GB RAM',
                        '6 vCPU',
                        '320GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                },
                {
                    name: '44.80 VPS - Budget',
                    price: 44.80,
                    features: [
                        '44.80GB RAM',
                        '10 vCPU',
                        '640GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection'
                    ]
                }
            ],
            premium: [
                {
                    name: '8.40 VPS - Premium',
                    price: 8.40,
                    features: [
                        '8.40GB RAM',
                        '3 vCPU',
                        '80GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '16.80 VPS - Premium',
                    price: 16.80,
                    features: [
                        '16.80GB RAM',
                        '4 vCPU',
                        '160GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '33.60 VPS - Premium',
                    price: 33.60,
                    features: [
                        '33.60GB RAM',
                        '6 vCPU',
                        '330GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '10.80 VPS - Ultra Ryzen 9',
                    price: 10.80,
                    features: [
                        '10.80GB RAM',
                        '3 vCPU',
                        '80GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '22.40 VPS - Ultra Ryzen 9',
                    price: 22.40,
                    features: [
                        '22.40GB RAM',
                        '6 vCPU',
                        '320GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '44.80 VPS - Ultra Ryzen 9',
                    price: 44.80,
                    features: [
                        '44.80GB RAM',
                        '10 vCPU',
                        '640GB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                }
            ]
        }
    },
    web: {
        title: 'Web Hosting Plans',
        description: 'Fast and reliable web hosting solutions',
        productLink: 'https://panel.hexonode.com/web',
        isLocationIndependent: true,
        plans: [
            {
                name: 'Starter',
                price: 2.99,
                features: [
                    '10GB Storage',
                    '1 Website',
                    'Free SSL',
                    'Daily Backups',
                    '50 Email Accounts',
                    'cPanel Access'
                ]
            },
            {
                name: 'Business',
                price: 5.99,
                features: [
                    'Unlimited Storage',
                    'Unlimited Websites',
                    'Free SSL',
                    'Daily Backups',
                    'Unlimited Emails',
                    'Premium Support'
                ]
            },
            {
                name: 'Enterprise',
                price: 9.99,
                features: [
                    'Unlimited Everything',
                    'Dedicated IP',
                    'Free Domain',
                    'Advanced Security',
                    'Priority Support',
                    'Site Builder'
                ]
            }
        ]
    },
    discord: {
        title: 'Discord Bot Hosting',
        description: 'Reliable hosting for your Discord bots',
        productLink: 'https://panel.hexonode.com/discord',
        isLocationIndependent: true,
        plans: [
            {
                name: '1GB Bot',
                price: 0.40,
                features: [
                    '1GB RAM',
                    '1 vCPU',
                    '10GB Storage',
                    '24/7 Uptime',
                    'Auto Restart',
                    'Basic Support'
                ]
            },
            {
                name: '2GB Bot',
                price: 0.80,
                features: [
                    '2GB RAM',
                    '2 vCPU',
                    '20GB Storage',
                    'Premium Network',
                    'Monitoring',
                    'Priority Support'
                ]
            },
            {
                name: '4GB Bot',
                price: 1.60,
                features: [
                    '4GB RAM',
                    '4 vCPU',
                    '40GB Storage',
                    'Load Balancing',
                    'Advanced Monitoring',
                    '24/7 Support'
                ]
            }
        ]
    },
    domains: {
        title: 'Domain Registration',
        description: 'Register and manage your domains yearly',
        productLink: 'https://panel.hexonode.com/domains',
        isLocationIndependent: true,
        plans: [
            {
                name: 'Domain Registration',
                price: 24.00,
                features: [
                    'Yearly registration',
                    'DNS Management',
                    'WHOIS Privacy',
                    'Email Forwarding',
                    'Domain Lock',
                    'Auto Renewal',
                    'Basic Support'
                ]
            },
            {
                name: 'Premium Domain',
                price: 36.00,
                features: [
                    'Yearly registration',
                    'Advanced DNS Management',
                    'Premium WHOIS Privacy',
                    'Email Forwarding',
                    'Domain Lock',
                    'Auto Renewal',
                    'Priority Support',
                    'Advanced Security',
                    'Free SSL Certificate'
                ]
            },
            {
                name: 'Ultra Domain',
                price: 48.00,
                features: [
                    'Yearly registration',
                    'Premium DNS Management',
                    'Ultimate WHOIS Privacy',
                    'Enhanced Email Forwarding',
                    'Domain Lock & Theft Protection',
                    'Auto Renewal with Discount',
                    'Dedicated Support',
                    'Enterprise Security',
                    'Free Premium SSL Certificate',
                    'Domain Monitoring'
                ]
            }
        ]
    }
};

// Copy minecraft plans to games
serviceData.games = copyMinecraftToGames(serviceData.minecraft as LocationBasedService);

export default serviceData; 
