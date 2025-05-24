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
    link?: string; // Optional dedicated link for each plan
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
    Europe: LocationTierPlans;
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
                    name: '1GB INDIA BUDGET MC',
                    price: 35.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/budget/1gb',
                    features: [
                        '1 vCores',
                        '2.3 to 3.4 Ghz',
                        '1 GB DRR4 RAM',
                        '5 GB 1 NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '2GB INDIA BUDGET MC',
                    price: 70.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/budget/2gb',
                    features: [
                        '1 vCores',
                        '2.3 to 3.4 Ghz',
                        '2 GB DRR4 RAM',
                        '10 GB 1 NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '4GB INDIA BUDGET MC',
                    price: 140.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/budget/4gb',
                    features: [
                        '2 vCores',
                        '2.3 to 3.4 Ghz',
                        '4 GB DRR4 RAM',
                        '20GB 1 NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB INDIA BUDGET MC',
                    price: 280.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/budget/8gb',
                    features: [
                        '3 vCores',
                        '2.3 to 3.4 Ghz',
                        '8 GB DRR4 RAM',
                        '40 GB 1 NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '12GB INDIA BUDGET MC',
                    price: 420.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/budget/12gb',
                    features: [
                        '3 vCores',
                        '2.3 to 3.4 Ghz',
                        '10 GB DRR4 RAM',
                        '60 GB 1 NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB INDIA BUDGET MC',
                    price: 560.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/budget/16gb',
                    features: [
                        '4 vCores',
                        '2.3 to 3.4 Ghz',
                        '16 GB DRR4 RAM',
                        '80 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '24GB INDIA BUDGET MC',
                    price: 840.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/budget/24gb',
                    features: [
                        '4 vCores',
                        '2.3 to 3.4 Ghz',
                        '24 GB DRR4 RAM',
                        '100 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB INDIA BUDGET MC',
                    price: 1120.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/budget/32gb',
                    features: [
                        '8 vCores',
                        '2.3 to 3.4 Ghz',
                        '32 GB DRR4 RAM',
                        '160 GB 1 NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '48GB INDIA BUDGET MC',
                    price: 1680.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/budget/48gb',
                    features: [
                        '8 vCores',
                        '2.3 to 3.4 Ghz',
                        '48 GB DRR4 RAM',
                        '300 GB 1 NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                }
            ],
            premium: [
                {
                    name: '1GB INDIA PREMIUM MC',
                    price: 50.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/premium/1gb',
                    features: [
                        '1 vCores',
                        '3.0 to 4.1 Ghz',
                        '1 GB DRR4 RAM',
                        '5 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '2GB INDIA PREMIUM MC',
                    price: 100.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/premium/2gb',
                    features: [
                        '1 vCores',
                        '3.0 to 4.1 Ghz',
                        '2 GB DRR4 RAM',
                        '10 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '4GB INDIA PREMIUM MC',
                    price: 200.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/premium/4gb',
                    features: [
                        '2 vCores',
                        '3.0 to 4.1 Ghz',
                        '4 GB DRR4 RAM',
                        '10 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '6GB INDIA PREMIUM MC',
                    price: 300.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/premium/6gb',
                    features: [
                        '3 vCores',
                        '3.0 to 4.1 Ghz',
                        '6 GB DRR4 RAM',
                        '15 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB INDIA PREMIUM MC',
                    price: 400.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/premium/8gb',
                    features: [
                        '3 vCores',
                        '3.0 to 4.1 Ghz',
                        '8 GB DRR4 RAM',
                        '20 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '12GB INDIA PREMIUM MC',
                    price: 600.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/premium/12gb',
                    features: [
                        '3 vCores',
                        '3.0 to 4.1 Ghz',
                        '12 GB DRR4 RAM',
                        '30 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB INDIA PREMIUM MC',
                    price: 800.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/premium/16gb',
                    features: [
                        '8 vCores',
                        '3.0 to 4.1 Ghz',
                        '16 GB DRR4 RAM',
                        '80 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '24GB INDIA PREMIUM MC',
                    price: 1200.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/premium/24gb',
                    features: [
                        '4 vCores',
                        '3.0 to 4.1 Ghz',
                        '24 GB DRR4 RAM',
                        '100 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB INDIA PREMIUM MC',
                    price: 1600.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/premium/32gb',
                    features: [
                        '8 vCores',
                        '3.0 to 4.1 Ghz',
                        '32 GB DRR4 RAM',
                        '160 GB NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB Plan - Ryzen 9',
                    price: 9999,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/india/ultra/8gb',
                    features: [
                        'out of stock'
                    ]
                }
            ]
        },
        Singapore: {
            budget: [
                {
                    name: 'Budget Plans',
                    price: 0,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/budget',
                    features: [
                        'OUT OF STOCK'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB Plan',
                    price: 24.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/premium/8gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/premium/16gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/premium/32gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/premium/48gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/premium/64gb',
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
                    name: '8GB VPS - Ultra Ryzen 9',
                    price: 33.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/ultra/8gb',
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
                    name: '16GB VPS - Ultra Ryzen 9',
                    price: 57.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/ultra/16gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/ultra/32gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/ultra/64gb',
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
                },
                {
                    name: '128GB VPS - Ultra Ryzen 9',
                    price: 349.99,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/singapore/ultra/128gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/vps/budget/8gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/vps/budget/16gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/vps/budget/32gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/vps/budget/64gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/vps/premium/8gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/vps/premium/16gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/vps/premium/32gb',
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
                    price: 12.80,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/ultra/8gb',
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
                    name: '16GB VPS - Ultra Ryzen 9',
                    price: 25.60,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/ultra/16gb',
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
                    name: '32GB VPS - Ultra Ryzen 9',
                    price: 51.20,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/ultra/32gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/us/ultra/128gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/budget/4gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/budget/8gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/budget/12gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/budget/16gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/premium/4gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/premium/8gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/premium/12gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/premium/16gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/premium/32gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/premium/48gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/premium/64gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/ultra/4gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/ultra/6gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/ultra/24gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/germany/ultra/32gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/france/budget',
                    features: [
                        'OUT OF STOCK',

                    ]
                }

            ],
            premium: [
                {
                    name: '9GB Plan - Premium',
                    price: 9.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/france/premium/9gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/france/premium/18gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/france/premium/37gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/france/premium/64gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/france/ultra/15gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/france/ultra/23gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/france/ultra/139gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/budget/8gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/budget/16gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/budget/22gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/budget/44gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/budget/179gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/premium/8gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/premium/16gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/premium/33gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/premium/67gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/ultra/10gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/ultra/22gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/ultra/44gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/uk/ultra/179gb',
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
        },
        Europe: {
            budget: [
                {
                    name: '8GB VPS - Budget',
                    price: 8.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/europe/budget/8gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/europe/budget/16gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/europe/budget/32gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/europe/budget/64gb',
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
                    price: 18.00,
                    link: 'https://billing.hexonode.com/products/minecraft-servers/europe/premium/8gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/europe/premium/16gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/europe/premium/32gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/europe/ultra/8gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/europe/ultra/12gb',
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
                    link: 'https://billing.hexonode.com/products/minecraft-servers/europe/ultra/16gb',
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
                link: 'https://panel.hexonode.com/web/starter',
                features: [
                    'WordPress Ready',
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
                link: 'https://panel.hexonode.com/web/business',
                features: [
                    'WordPress Ready',
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
                link: 'https://panel.hexonode.com/web/enterprise',
                features: [
                    'WordPress Ready',
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
                link: 'https://panel.hexonode.com/discord/1gb',
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
                link: 'https://panel.hexonode.com/discord/2gb',
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
                link: 'https://panel.hexonode.com/discord/4gb',
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
                price: 2.00,
                link: 'https://panel.hexonode.com/domains/registration',
                features: [
                    'Starting from 2 USD',
                    'Yearly Registration',
                    'DNS Management',
                    'WHOIS Privacy',
                    'Email Forwarding',
                    'Domain Lock',
                    'Auto Renewal',
                    'Basic Support'
                ]
            }
        ]
    }
};

// Copy minecraft plans to games
serviceData.games = copyMinecraftToGames(serviceData.minecraft as LocationBasedService);

export default serviceData; 