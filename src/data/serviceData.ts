// Define TypeScript interfaces
export type LocationCode = 'India' | 'Singapore' | 'US' | 'Germany' | 'France' | 'UK' | 'Europe';
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
        productLink: 'https://billing.hexonode.com/products/minecraft-servers',
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
                    price: 24.00,
                    features: [
                        '8GB RAM',
                        '2 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '150GB NVME SSD Storage',
                        'Singapore Location',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time'
                    ]
                },
                {
                    name: '16GB Plan',
                    price: 37.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '300GB NVME SSD Storage',
                        '8000GB Bandwidth',
                        'Singapore Location',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time'
                    ]
                },
                {
                    name: '32GB Plan',
                    price: 58.00,
                    features: [
                        '32GB RAM',
                        '8 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '480GB NVME SSD Storage',
                        '15000GB Bandwidth',
                        'Singapore Location',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time'
                    ]
                },
                {
                    name: '48GB Plan',
                    price: 77.00,
                    features: [
                        '48GB RAM',
                        '12 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '700GB NVME SSD Storage',
                        '23000GB Bandwidth',
                        'Singapore Location',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time'
                    ]
                },
                {
                    name: '64GB Plan - Premium',
                    price: 95.00,
                    features: [
                        '64GB RAM',
                        '12 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '1200GB NVME SSD Storage',
                        '30000GB Bandwidth',
                        'Singapore Location',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB Plan',
                    price: 24.00,
                    features: [
                        '8GB RAM',
                        '2 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '150GB NVME SSD Storage',
                        'Singapore Location',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time'
                    ]
                },
                {
                    name: '16GB Plan',
                    price: 37.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '300GB NVME SSD Storage',
                        '8000GB Bandwidth',
                        'Singapore Location',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time'
                    ]
                },
                {
                    name: '32GB Plan',
                    price: 58.00,
                    features: [
                        '32GB RAM',
                        '8 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '480GB NVME SSD Storage',
                        '15000GB Bandwidth',
                        'Singapore Location',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time'
                    ]
                },
                {
                    name: '48GB Plan',
                    price: 77.00,
                    features: [
                        '48GB RAM',
                        '12 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '700GB NVME SSD Storage',
                        '23000GB Bandwidth',
                        'Singapore Location',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time'
                    ]
                },
                {
                    name: '64GB Plan - Premium',
                    price: 95.00,
                    features: [
                        '64GB RAM',
                        '12 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '1200GB NVME SSD Storage',
                        '30000GB Bandwidth',
                        'Singapore Location',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB Plan - Ultra Ryzen 9',
                    price: 33.00,
                    features: [
                        '8GB DDR5 RAM (5200 MHz)',
                        '1 Core + 2 Threads (Ryzen 9 7950X)',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '60GB NVMe SSD',
                        '1Gbps Up/Down Bandwidth',
                        'Singapore Location',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '24-48 Hr Delivery Time'
                    ]
                },
                {
                    name: '16GB Plan - Ultra Ryzen 9',
                    price: 57.00,
                    features: [
                        '16GB DDR5 RAM (5200 MHz)',
                        '2 Cores + 4 Threads (Ryzen 9 7950X)',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '120GB NVMe SSD',
                        '1Gbps Up/Down Bandwidth',
                        'Singapore Location',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '24-48 Hr Delivery Time'
                    ]
                },
                {
                    name: '32GB VPS - Ultra Ryzen 9',
                    price: 105.00,
                    features: [
                        '32GB DDR5 RAM (5200 MHz)',
                        '8 Cores (Ryzen 9 7950X)',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '240GB NVMe SSD',
                        '1Gbps Up/Down Bandwidth',
                        'Singapore Location',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '24-48 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '64GB VPS - Ultra Ryzen 9',
                    price: 190.00,
                    features: [
                        '64GB DDR5 RAM (5200 MHz)',
                        '16 Cores (Ryzen 9 7950X)',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '480GB NVMe SSD',
                        '1Gbps Up/Down Bandwidth',
                        'Singapore Location',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '24-48 Hr Delivery Time',
                        '99.99% Uptime SLA'
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
                    name: '4GB GERMANY BUDGET',
                    price: 4.00,
                    features: [
                        '1 vCores, 2.5-3.4 GHz',
                        '4GB DDR4 RAM',
                        '20GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB GERMANY BUDGET',
                    price: 8.00,
                    features: [
                        '3 vCores, 2.5-3.4 GHz',
                        '8GB DDR4 RAM',
                        '40GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '12GB GERMANY BUDGET',
                    price: 13.00,
                    features: [
                        '4 vCores, 2.5-3.4 GHz',
                        '12GB DDR4 RAM',
                        '80GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB GERMANY BUDGET',
                    price: 17.00,
                    features: [
                        '6 vCores, 2.5-3.4 GHz',
                        '16GB DDR4 RAM',
                        '100GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '24GB GERMANY BUDGET',
                    price: 25.00,
                    features: [
                        '8 vCores, 2.5-3.4 GHz',
                        '24GB DDR4 RAM',
                        '150GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB GERMANY BUDGET',
                    price: 33.00,
                    features: [
                        '8 vCores, 2.5-3.4 GHz',
                        '32GB DDR4 RAM',
                        '200GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '64GB GERMANY BUDGET',
                    price: 49.99,
                    features: [
                        '10 vCores, 2.5-3.4 GHz',
                        '64GB DDR4 RAM',
                        '400GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                }
            ],
            premium: [
                {
                    name: '4GB GERMANY PREMIUM',
                    price: 5.00,
                    features: [
                        'Intel Xeon Gold 6150',
                        '1 vCores, 2.80 GHz Base (3.70 GHz Turbo)',
                        '4 GB DRR4 RAM',
                        '25 GB NVMe',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB GERMANY PREMIUM',
                    price: 9.00,
                    features: [
                        'Intel Xeon Gold 6150',
                        '3 vCores, 2.80 GHz Base (3.70 GHz Turbo)',
                        '8 GB DRR4 RAM',
                        '50 GB NVMe',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '12GB GERMANY PREMIUM',
                    price: 13.00,
                    features: [
                        'Intel Xeon Gold 6150',
                        '4 vCores, 2.80 GHz Base (3.70 GHz Turbo)',
                        '12 GB DRR4 RAM',
                        '70 GB NVMe',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB GERMANY PREMIUM',
                    price: 18.00,
                    features: [
                        'Intel Xeon Gold 6150',
                        '6 vCores, 2.80 GHz Base (3.70 GHz Turbo)',
                        '16 GB DRR4 RAM',
                        '100 GB NVMe',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB GERMANY PREMIUM',
                    price: 36.00,
                    features: [
                        'Intel Xeon Gold 6150',
                        '8 vCores, 2.80 GHz Base (3.70 GHz Turbo)',
                        '32 GB DRR4 RAM',
                        '200 GB NVMe',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '48GB GERMANY PREMIUM',
                    price: 50.00,
                    features: [
                        'Intel Xeon Gold 6150',
                        '9 vCores, 2.80 GHz Base (3.70 GHz Turbo)',
                        '48 GB DRR4 RAM',
                        '300 GB NVMe',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '64GB GERMANY PREMIUM',
                    price: 64.00,
                    features: [
                        'Intel Xeon Gold 6150',
                        '10 vCores, 2.80 GHz Base (3.70 GHz Turbo)',
                        '64 GB DRR4 RAM',
                        '400 GB NVMe',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                }
            ],
            ultra: [
                {
                    name: '4GB GERMANY ULTRA RYZEN 9',
                    price: 7.00,
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '1 Ryzen vCores',
                        '4 GB DDR4 Memory',
                        '25 GB 1 NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '6GB GERMANY ULTRA',
                    price: 10.00,
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '2 Ryzen vCores',
                        '6 GB DDR4 Memory',
                        '50 GB 1 NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB GERMANY ULTRA RYZEN 9',
                    price: 14.00,
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '2 Ryzen vCores',
                        '8 GB DDR4 Memory',
                        '50 GB 1 NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '12GB GERMANY ULTRA RYZEN 9',
                    price: 22.00,
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '3 Ryzen vCores',
                        '12 GB DDR4 Memory',
                        '75 GB 1 NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB GERMANY ULTRA RYZEN 9',
                    price: 30.00,
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '4 Ryzen vCores',
                        '16 GB DDR4 Memory',
                        '110 GB 1 NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '24GB GERMANY ULTRA RYZEN 9',
                    price: 45.00,
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '6 Ryzen vCores',
                        '24 GB DDR4 Memory',
                        '150 GB 1 NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB GERMANY ULTRA RYZEN 9',
                    price: 55.00,
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '6 Ryzen vCores',
                        '32 GB DDR4 Memory',
                        '200 GB 1 NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup'
                    ]
                }
            ]
        },
        France: {
            budget: [
                {
                    name: '8GB Plan - Budget',
                    price: 999.00,
                    features: [
                        'OUT OF STOCK',
                        
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
        productLink: 'https://billing.hexonode.com/products/vps-virtual-private-server',
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
                    price: 25.00,
                    features: [
                        '8GB RAM',
                        '2 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '160GB NVME SSD Storage',
                        '4000GB Bandwidth',
                        'Linux/Windows',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '1-2 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '16GB VPS - Premium',
                    price: 38.00,
                    features: [
                        '16GB RAM',
                        '4 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '320GB NVME SSD Storage',
                        '8000GB Bandwidth',
                        'Linux/Windows',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '1-2 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '32GB VPS - Premium',
                    price: 60.00,
                    features: [
                        '32GB RAM',
                        '8 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '480GB NVME SSD Storage',
                        '15000GB Bandwidth',
                        'Linux/Windows',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '1-2 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '48GB VPS - Premium',
                    price: 80.00,
                    features: [
                        '48GB RAM',
                        '12 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '700GB NVME SSD Storage',
                        '23000GB Bandwidth',
                        'Linux/Windows',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '1-2 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '64GB VPS - Premium',
                    price: 99.99,
                    features: [
                        '64GB RAM',
                        '12 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '1200GB NVME SSD Storage',
                        '30000GB Bandwidth',
                        'Linux/Windows',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '1-2 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB VPS - Ultra Ryzen 9',
                    price: 34.99,
                    features: [
                        '8GB DDR5 RAM (5200 MHz)',
                        '1 Core + 2 Threads (Ryzen 9 7950X)',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '60GB NVMe SSD',
                        '1Gbps Up/Down Bandwidth',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '24-48 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '16GB VPS - Ultra Ryzen 9',
                    price: 60.00,
                    features: [
                        '16GB DDR5 RAM (5200 MHz)',
                        '2 Core + 4 Threads (Ryzen 9 7950X)',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '120GB NVMe SSD',
                        '1Gbps Up/Down Bandwidth',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '24-48 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '32GB VPS - Ultra Ryzen 9',
                    price: 110.00,
                    features: [
                        '32GB DDR5 RAM (5200 MHz)',
                        '8 Cores (Ryzen 9 7950X)',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '240GB NVMe SSD',
                        '1Gbps Up/Down Bandwidth',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '24-48 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '64GB VPS - Ultra Ryzen 9',
                    price: 199.99,
                    features: [
                        '64GB DDR5 RAM (5200 MHz)',
                        '16 Cores (Ryzen 9 7950X)',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '480GB NVMe SSD',
                        '1Gbps Up/Down Bandwidth',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '24-48 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '128GB VPS - Ultra Ryzen 9',
                    price: 349.99,
                    features: [
                        '128GB DDR5 RAM (5200 MHz)',
                        '32 Cores (Ryzen 9 7950X)',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '960GB NVMe SSD',
                        '1Gbps Up/Down Bandwidth',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '24-48 Hr Delivery Time',
                        '99.99% Uptime SLA'
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
                        '8GB DDR4 RAM',
                        '4 vCPU (2.5-3.4 GHz)',
                        '50GB NVMe SSD',
                        '2TB Traffic',
                        'Linux/Windows',
                        '3.2Tbit DDoS Protection',
                        '1Gbps Network',
                        '1x IPv4 Address'
                    ]
                },
                {
                    name: '16GB VPS - Budget',
                    price: 15.00,
                    features: [
                        '16GB DDR4 RAM',
                        '6 vCPU (2.5-3.4 GHz)',
                        '100GB NVMe SSD',
                        '6TB Traffic',
                        'Linux/Windows',
                        '3.2Tbit DDoS Protection',
                        '1Gbps Network',
                        '1x IPv4 Address'
                    ]
                },
                {
                    name: '32GB VPS - Budget',
                    price: 32.00,
                    features: [
                        '32GB DDR4 RAM',
                        '8 vCPU (2.5-3.4 GHz)',
                        '200GB NVMe SSD',
                        '10TB Traffic',
                        'Linux/Windows',
                        '3.2Tbit DDoS Protection',
                        '1Gbps Network',
                        '1x IPv4 Address'
                    ]
                },
                {
                    name: '64GB VPS - Budget',
                    price: 49.90,
                    features: [
                        '64GB DDR4 RAM',
                        '10 vCPU (2.5-3.4 GHz)',
                        '400GB NVMe SSD',
                        '14TB Traffic',
                        'Linux/Windows',
                        '3.2Tbit DDoS Protection',
                        '1Gbps Network',
                        '1x IPv4 Address'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB VPS - Premium',
                    price: 9.00,
                    features: [
                        '8GB DDR4 RAM',
                        '4 vCPU (Intel Xeon Gold 6150)',
                        '2.8GHz Base (3.7GHz Turbo)',
                        '50GB NVMe SSD',
                        '4TB Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA',
                        '1x IPv4 Address'
                    ]
                },
                {
                    name: '18GB VPS - Premium',
                    price: 18.00,
                    features: [
                        '16GB DDR4 RAM',
                        '6 vCPU (Intel Xeon Gold 6150)',
                        '2.8GHz Base (3.7GHz Turbo)',
                        '100GB NVMe SSD',
                        '8TB Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA',
                        '1x IPv4 Address'
                    ]
                },
                {
                    name: '32GB VPS - Premium',
                    price: 37.00,
                    features: [
                        '32GB DDR4 RAM',
                        '8 vCPU (Intel Xeon Gold 6150)',
                        '2.8GHz Base (3.7GHz Turbo)',
                        '200GB NVMe SSD',
                        '12TB Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA',
                        '1x IPv4 Address'
                    ]
                },
                {
                    name: '64GB VPS - Premium',
                    price: 64.00,
                    features: [
                        '64GB DDR4 RAM',
                        '10 vCPU (Intel Xeon Gold 6150)',
                        '2.8GHz Base (3.7GHz Turbo)',
                        '400GB NVMe SSD',
                        '16TB Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA',
                        '1x IPv4 Address'
                    ]
                },
                {
                    name: '128GB VPS - Premium Ryzen',
                    price: 110.00,
                    features: [
                        '128GB DDR4 RAM',
                        '12 vCPU (AMD Ryzen 5 3600)',
                        '3.7GHz Base (4.2GHz Turbo)',
                        '1TB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Advanced DDoS Protection',
                        '24/7 Dedicated Support',
                        'Enhanced Backups',
                        '100% Performance Guarantee',
                        '1x IPv4 Address',
                        'Free Setup',
                        'Estimated 1 Hour Delivery'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB VPS - Ultra Ryzen 9',
                    price: 15.00,
                    features: [
                        '8GB DDR4 RAM',
                        '2 vCPU (AMD Ryzen 9 5900X)',
                        '3.7GHz Base (4.8GHz Turbo)',
                        '50GB NVMe SSD',
                        '20TB Traffic',
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
                        '12GB DDR4 RAM',
                        '3 vCPU (AMD Ryzen 9 5900X)',
                        '3.7GHz Base (4.8GHz Turbo)',
                        '75GB NVMe SSD',
                        '25TB Traffic',
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
                        '16GB DDR4 RAM',
                        '4 vCPU (AMD Ryzen 9 5900X)',
                        '3.7GHz Base (4.8GHz Turbo)',
                        '120GB NVMe SSD',
                        '28TB Traffic',
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
                        '24GB DDR4 RAM',
                        '6 vCPU (AMD Ryzen 9 5900X)',
                        '3.7GHz Base (4.8GHz Turbo)',
                        '160GB NVMe SSD',
                        '35TB Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '1 IPv4 Address',
                        '1 Gbit Uplink',
                        '24/7 Dedicated Support',
                        'Free Setup',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '32GB VPS - Ultra Ryzen 9',
                    price: 54.99,
                    features: [
                        '32GB DDR4 RAM',
                        '6 vCPU (AMD Ryzen 9 5900X)',
                        '3.7GHz Base (4.8GHz Turbo)',
                        '200GB NVMe SSD',
                        '38TB Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '64GB VPS - Ultra Ryzen 5',
                    price: 80.00,
                    features: [
                        '64GB DDR4 RAM',
                        '12 vCPU (AMD Ryzen 5 3600)',
                        '3.7GHz Base (4.2GHz Turbo)',
                        '1TB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Free Setup',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security',
                        '100% Dedicated Performance Guaranteed'
                    ]
                },
                {
                    name: '128GB VPS - Ultra Ryzen 5',
                    price: 139.99,
                    features: [
                        '128GB DDR4 RAM',
                        '12 vCPU (AMD Ryzen 5 3600)',
                        '3.7GHz Base (4.2GHz Turbo)',
                        '1TB NVMe SSD',
                        'Unlimited Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Free Setup',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security',
                        'Delivery in 1 hour'
                    ]
                }
            ]
        },
        France: {
            budget: [
                {
                    name: '8GB VPS - Budget',
                    price: 1200.00,
                    features: [
                        'OUT OF STOCK',  
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
                }
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
