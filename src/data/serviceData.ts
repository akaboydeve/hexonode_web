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
                    link: 'https://billing.hexonode.com/products/india-budget-mc/1gb-india-budget-mc',
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
                    link: 'https://billing.hexonode.com/products/india-budget-mc/2gb-india-budget-mc',
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
                    link: 'https://billing.hexonode.com/products/india-budget-mc/4gb-india-budget-mc',
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
                    link: 'https://billing.hexonode.com/products/india-budget-mc/8gb-india-budget-mc',
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
                    link: 'https://billing.hexonode.com/products/india-budget-mc/12gb-india-budget-mc',
                    features: [
                        '3 vCores',
                        '2.3 to 3.4 Ghz',
                        '12 GB DRR4 RAM',
                        '60 GB 1 NVMe',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB INDIA BUDGET MC',
                    price: 560.00,
                    link: 'https://billing.hexonode.com/products/india-budget-mc/16gb-india-budget-mc',
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
                    link: 'https://billing.hexonode.com/products/india-budget-mc/24gb-india-budget-mc',
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
                    link: 'https://billing.hexonode.com/products/india-budget-mc/32gb-india-budget-mc',
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
                    link: 'https://billing.hexonode.com/products/india-budget-mc/48gb-india-budget-mc',
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
                    link: 'https://billing.hexonode.com/products/india-premium-mc/1gb-india-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/india-premium-mc/2gb-india-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/india-premium-mc/4gb-india-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/india-premium-mc/6gb-india-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/india-premium-mc/8gb-india-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/india-premium-mc/12gb-india-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/india-premium-mc/16gb-india-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/india-premium-mc/24gb-india-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/india-premium-mc/32gb-india-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/india-ultra-mc/8gb-india-ultra-ryzen-9mc',
                    features: [
                        'out of stock'
                    ]
                }
            ]
        },
        Singapore: {
            budget: [
                {
                    name: 'Coming Soon',
                    price: 0,
                    features: [
                        'COMING SOON',
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB Plan',
                    price: 20.00,
                    link: 'https://billing.hexonode.com/products/singapore-premium-mc/8gb-singapore-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/singapore-premium-mc/16gb-singapore-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/singapore-premium-mc/32gb-singapore-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/singapore-premium-mc/48gb-singapore-premium-mc',
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
                    link: 'https://billing.hexonode.com/products/singapore-premium-mc/64gb-singapore-premium-mc',
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
                    name: '2GB SINGAPORE ULTRA MC',
                    price: 10.00,
                    link: 'https://billing.hexonode.com/products/singapore-ultra-mc/2gb-singapore-ultra-mc',
                    features: [
                        'AMD EPYC™ 4464P 5.4GHz',
                        '3.7GHz BASE / 5.4GHz Turbo',
                        '1 Core',
                        '2GB RAM (ECC Registered)',
                        '32GB SSD/NVME (Depends on availability)',
                        'Bandwidth: 1 TB',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 2–3 hours'
                    ]
                },
                {
                    name: '4GB SINGAPORE ULTRA MC',
                    price: 20.00,
                    link: 'https://billing.hexonode.com/products/singapore-ultra-mc/4gb-singapore-ultra-mc',
                    features: [
                        'AMD EPYC™ 4464P 5.4GHz',
                        '3.7GHz BASE / 5.4GHz Turbo',
                        '2 Core',
                        '4GB RAM (ECC Registered)',
                        '32GB SSD/NVME (Depends on availability)',
                        'Bandwidth: 1 TB',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 2–3 hours'
                    ]
                },
                {
                    name: '8GB SINGAPORE ULTRA MC',
                    price: 27.00,
                    link: 'https://billing.hexonode.com/products/singapore-ultra-mc/8gb-singapore-ultra-mc',
                    features: [
                        'AMD EPYC™ 4464P 5.4GHz',
                        '3.7GHz BASE / 5.4GHz Turbo',
                        '3 Core',
                        '8GB RAM (ECC Registered)',
                        '50GB SSD/NVME (Depends on availability)',
                        'Bandwidth: 1 TB',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 2–3 hours'
                    ]
                },
                {
                    name: '12GB SINGAPORE ULTRA MC',
                    price: 35.00,
                    link: 'https://billing.hexonode.com/products/singapore-ultra-mc/12gb-singapore-ultra-mc',
                    features: [
                        'AMD EPYC™ 4464P 5.4GHz',
                        '3.7GHz BASE / 5.4GHz Turbo',
                        '3 Core',
                        '12GB RAM (ECC Registered)',
                        '80GB SSD/NVME (Depends on availability)',
                        'Bandwidth: 1 TB',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 2–3 hours'
                    ]
                },
                {
                    name: '16GB SINGAPORE ULTRA MC',
                    price: 45.00,
                    link: 'https://billing.hexonode.com/products/singapore-ultra-mc/16gb-singapore-ultra-mc',
                    features: [
                        'AMD EPYC™ 4464P 5.4GHz',
                        '3.7GHz BASE / 5.4GHz Turbo',
                        '4 Core',
                        '16GB RAM (ECC Registered)',
                        '100GB SSD/NVME (Depends on availability)',
                        'Bandwidth: 1 TB',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 2–3 hours'
                    ]
                },
                {
                    name: '24GB SINGAPORE ULTRA MC',
                    price: 70.00,
                    link: 'https://billing.hexonode.com/products/singapore-ultra-mc/24gb-singapore-ultra-mc',
                    features: [
                        'AMD EPYC™ 4464P 5.4GHz',
                        '3.7GHz BASE / 5.4GHz Turbo',
                        '6 Core',
                        '24GB RAM (ECC Registered)',
                        '150GB SSD/NVME (Depends on availability)',
                        'Bandwidth: 1 TB',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 2–3 hours'
                    ]
                },
                {
                    name: '32GB SINGAPORE ULTRA MC',
                    price: 90.00,
                    link: 'https://billing.hexonode.com/products/singapore-ultra-mc/32gb-singapore-ultra-mc',
                    features: [
                        'AMD EPYC™ 4464P 5.4GHz',
                        '3.7GHz BASE / 5.4GHz Turbo',
                        '8 Core',
                        '32GB RAM (ECC Registered)',
                        '200GB SSD/NVME (Depends on availability)',
                        'Bandwidth: 1 TB',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 2–3 hours'
                    ]
                },
                {
                    name: '48GB SINGAPORE ULTRA MC',
                    price: 135.00,
                    link: 'https://billing.hexonode.com/products/singapore-ultra-mc/48gb-singapore-ultra-mc',
                    features: [
                        'AMD EPYC™ 4464P 5.4GHz',
                        '3.7GHz BASE / 5.4GHz Turbo',
                        '10 Core',
                        '48GB RAM (ECC Registered)',
                        '350GB SSD/NVME (Depends on availability)',
                        'Bandwidth: 1 TB',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 2–3 hours'
                    ]
                },
                {
                    name: '64GB SINGAPORE ULTRA MC',
                    price: 165.00,
                    link: 'https://billing.hexonode.com/products/singapore-ultra-mc/64gb-singapore-ultra-mc',
                    features: [
                        'AMD EPYC™ 4464P 5.4GHz',
                        '3.7GHz BASE / 5.4GHz Turbo',
                        '12 Core',
                        '64GB RAM (ECC Registered)',
                        '500GB SSD/NVME (Depends on availability)',
                        'Bandwidth: 1 TB',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 2–3 hours'
                    ]
                }
            ]
        },
        US: {
            budget: [
                {
                    name: '4GB USA BUDGET MC',
                    price: 6.00,
                    link: 'https://billing.hexonode.com/products/us-budget-mc/4gb-usa-budget-mc',
                    features: [
                        'Intel Xeon Gold 6130',
                        '2 Core',
                        '4GB RAM (ECC Registered)',
                        '32GB SSD/NVME (Depends on availability)',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB USA BUDGET MC',
                    price: 10.00,
                    link: 'https://billing.hexonode.com/products/us-budget-mc/8gb-usa-budget-mc',
                    features: [
                        'Intel Xeon Gold 6130',
                        '3 Core',
                        '8GB RAM (ECC Registered)',
                        '65GB SSD/NVME',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '12GB USA BUDGET MC',
                    price: 13.00,
                    link: 'https://billing.hexonode.com/products/us-budget-mc/12gb-usa-budget-mc',
                    features: [
                        'Intel Xeon Gold 6130',
                        '4 Core',
                        '12GB RAM (ECC Registered)',
                        '80GB SSD/NVME',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB USA BUDGET MC',
                    price: 15.00,
                    link: 'https://billing.hexonode.com/products/us-budget-mc/16gb-usa-budget-mc',
                    features: [
                        'Intel Xeon Gold 6130',
                        '4 Core',
                        '16GB RAM (ECC Registered)',
                        '96GB SSD/NVME',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '24GB USA BUDGET MC',
                    price: 22.00,
                    link: 'https://billing.hexonode.com/products/us-budget-mc/24gb-usa-budget-mc',
                    features: [
                        'Intel Xeon Gold 6130',
                        '5 Core',
                        '24GB RAM (ECC Registered)',
                        '128GB SSD/NVME (Depends on availability)',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB USA BUDGET MC',
                    price: 28.00,
                    link: 'https://billing.hexonode.com/products/us-budget-mc/32gb-usa-budget-mc',
                    features: [
                        'Intel Xeon Gold 6130',
                        '6 Core',
                        '32GB RAM (ECC Registered)',
                        '192GB SSD/NVME',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '48GB USA BUDGET MC',
                    price: 40.00,
                    link: 'https://billing.hexonode.com/products/us-budget-mc/48gb-usa-budget-mc',
                    features: [
                        'Intel Xeon Gold 6130',
                        '7 Core',
                        '48GB RAM (ECC Registered)',
                        '250GB SSD/NVME (Depends on availability)',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB USA PREMIUM MC',
                    price: 18.00,
                    link: 'https://billing.hexonode.com/products/us-premium-mc/8gb-usa-premium-mc',
                    features: [
                        'Xeon Gold 6226R',
                        '2.90 GHz Base / 3.90 GHz Turbo',
                        '4 Cores',
                        '8GB RAM',
                        '60 GB NVME',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB USA PREMIUM MC',
                    price: 32.00,
                    link: 'https://billing.hexonode.com/products/us-premium-mc/16gb-usa-premium-mc',
                    features: [
                        'Xeon Gold 6226R',
                        '2.90 GHz Base / 3.90 GHz Turbo',
                        '8 Cores',
                        '16GB RAM',
                        '240 GB NVME',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB USA PREMIUM MC',
                    price: 55.00,
                    link: 'https://billing.hexonode.com/products/us-premium-mc/32gb-usa-premium-mc',
                    features: [
                        'Xeon Gold 6226R',
                        '2.90 GHz Base / 3.90 GHz Turbo',
                        '10 Cores',
                        '32GB RAM',
                        '480 GB NVME',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '64GB USA PREMIUM MC',
                    price: 90.00,
                    link: 'https://billing.hexonode.com/products/us-premium-mc/64gb-usa-premium-mc',
                    features: [
                        'Intel Xeon-E 2136',
                        '3.3GHz Base / 4.5GHz Turbo',
                        '12 Cores',
                        '64GB RAM DDR4 ECC',
                        '2× 512GB SSD NVMe Soft RAID',
                        'Unlimited Player Slots',
                        'Premium DDOS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                }
            ],
            ultra: [
                {
                    name: '4GB USA RYZEN 9 MC',
                    price: 20.00,
                    link: 'https://billing.hexonode.com/products/us-ultra-mc-ryzen-9/4gb-usa-ryzen-9mc',
                    features: [
                        'AMD Ryzen 9 7950X',
                        '4.5GHz (Base) / 5.7GHz (Turbo)',
                        '4 Cores',
                        '4GB DDR5 RAM',
                        '30GB NVMe Storage',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB USA RYZEN 9 MC',
                    price: 30.00,
                    link: 'https://billing.hexonode.com/products/us-ultra-mc-ryzen-9/8gb-usa-ryzen-9mc',
                    features: [
                        'AMD Ryzen 9 7950X',
                        '4.5GHz (Base) / 5.7GHz (Turbo)',
                        '6 Cores',
                        '8GB DDR5 RAM',
                        '100GB NVMe Storage',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB USA RYZEN 9 MC',
                    price: 50.00,
                    link: 'https://billing.hexonode.com/products/us-ultra-mc-ryzen-9/16gb-usa-ryzen-9mc',
                    features: [
                        'AMD Ryzen 9 7950X',
                        '4.5GHz (Base) / 5.7GHz (Turbo)',
                        '4 Dedicated Cores',
                        '16GB DDR5 RAM',
                        '200GB NVMe Storage',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB USA RYZEN 9 MC',
                    price: 85.00,
                    link: 'https://billing.hexonode.com/products/us-ultra-mc-ryzen-9/32gb-usa-ryzen-9mc',
                    features: [
                        'AMD Ryzen 9 7950X',
                        '4.5GHz (Base) / 5.7GHz (Turbo)',
                        '8 Dedicated Cores',
                        '32GB DDR5 RAM',
                        '400GB NVMe Storage',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                }
            ]
        },
        Germany: {
            budget: [
                {
                    name: '4GB GERMANY BUDGET',
                    price: 4.00,
                    link: 'https://billing.hexonode.com/products/germany-budget-mc/4gb-germany-budgetmc',
                    features: [
                        '1 vCore',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '4 GB DDR4 RAM',
                        '20 GB NVMe',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB GERMANY BUDGET',
                    price: 8.00,
                    link: 'https://billing.hexonode.com/products/germany-budget-mc/8gb-germany-budgetmc',
                    features: [
                        '4 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '8 GB DDR4 RAM',
                        '50 GB NVMe',
                        '1 Gbit internet speed | 2 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '12GB GERMANY BUDGET',
                    price: 13.00,
                    link: 'https://billing.hexonode.com/products/germany-budget-mc/12gb-germany-budgetmc',
                    features: [
                        '5 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '12 GB DDR4 RAM',
                        '75 GB NVMe',
                        '1 Gbit internet speed | 4 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB GERMANY BUDGET',
                    price: 17.00,
                    link: 'https://billing.hexonode.com/products/germany-budget-mc/16gb-germany-budgetmc',
                    features: [
                        '6 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '16 GB DDR4 RAM',
                        '100 GB NVMe',
                        '1 Gbit internet speed | 6 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '24GB GERMANY BUDGET',
                    price: 25.00,
                    link: 'https://billing.hexonode.com/products/germany-budget-mc/24gb-germany-budgetmc',
                    features: [
                        '7 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '24 GB DDR4 RAM',
                        '150 GB NVMe',
                        '1 Gbit internet speed | 8 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB GERMANY BUDGET',
                    price: 33.00,
                    link: 'https://billing.hexonode.com/products/germany-budget-mc/32gb-germany-budgetmc',
                    features: [
                        '8 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '32 GB DDR4 RAM',
                        '200 GB NVMe',
                        '1 Gbit internet speed | 10 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '64GB GERMANY BUDGET',
                    price: 49.99,
                    link: 'https://billing.hexonode.com/products/germany-budget-mc/64gb-germany-budgetmc',
                    features: [
                        '10 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '64 GB DDR4 RAM',
                        '400 GB NVMe',
                        '1 Gbit internet speed | 14 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                }
            ],
            premium: [
                {
                    name: '4GB GERMANY PREMIUM',
                    price: 5.00,
                    link: 'https://billing.hexonode.com/products/germany-premium-mc/4gb-germany-premiummc',
                    features: [
                        'Intel Xeon Gold 6150',
                        '1 vCore',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '4 GB DDR4 RAM',
                        '25 GB NVMe',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '8GB GERMANY PREMIUM',
                    price: 9.00,
                    link: 'https://billing.hexonode.com/products/germany-premium-mc/8gb-germany-premiummc',
                    features: [
                        'Intel Xeon Gold 6150',
                        '4 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '8 GB DDR4 RAM',
                        '50 GB NVMe',
                        '1 Gbit internet speed | 4 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB GERMANY PREMIUM',
                    price: 18.00,
                    link: 'https://billing.hexonode.com/products/germany-premium-mc/16gb-germany-premiummc',
                    features: [
                        'Intel Xeon Gold 6150',
                        '6 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '16 GB DDR4 RAM',
                        '100 GB NVMe',
                        '1 Gbit internet speed | 8 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB GERMANY PREMIUM',
                    price: 37.00,
                    link: 'https://billing.hexonode.com/products/germany-premium-mc/32gb-germany-premiummc',
                    features: [
                        'Intel Xeon Gold 6150',
                        '8 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '32 GB DDR4 RAM',
                        '200 GB NVMe',
                        '1 Gbit internet speed | 12 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB GERMANY PREMIUM',
                    price: 64.00,
                    link: 'https://billing.hexonode.com/products/germany-premium-mc/64gb-germany-premiummc',
                    features: [
                        'Intel Xeon Gold 6150',
                        '10 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '64 GB DDR4 RAM',
                        '400 GB NVMe',
                        '1 Gbit internet speed | 16 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '128GB GERMANY PREMIUM',
                    price: 110.00,
                    link: 'https://billing.hexonode.com/products/germany-premium-mc/128gb-germany-premiummc',
                    features: [
                        'AMD Ryzen™ 5 3600',
                        '12 Dedicated Ryzen Cores',
                        '3.7 GHz Base (4.2 GHz Turbo)',
                        '128 GB DDR4 RAM',
                        '1 TB NVMe SSD',
                        '1 Gbit internet speed | 20 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                }
            ],
            ultra: [
                {
                    name: '4GB GERMANY ULTRA RYZEN 9',
                    price: 7.00,
                    link: 'https://billing.hexonode.com/products/germany-ultra-mc/4gb-germany-ultra-ryzen-9mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '1 Ryzen vCore',
                        '4 GB DDR4 Memory',
                        '25 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '6GB GERMANY ULTRA RYZEN 9',
                    price: 10.00,
                    link: 'https://billing.hexonode.com/products/germany-ultra-mc/6gb-germany-ultra-ryzen-9mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '2 Ryzen vCores',
                        '6 GB DDR4 Memory',
                        '40 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '8GB GERMANY ULTRA RYZEN 9',
                    price: 14.00,
                    link: 'https://billing.hexonode.com/products/germany-ultra-mc/8gb-germany-ultra-ryzen-9mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '2 Ryzen vCores',
                        '8 GB DDR4 Memory',
                        '50 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '12GB GERMANY ULTRA RYZEN 9',
                    price: 22.00,
                    link: 'https://billing.hexonode.com/products/germany-ultra-mc/12gb-germany-ultra-ryzen-9mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '3 Ryzen vCores',
                        '12 GB DDR4 Memory',
                        '75 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB GERMANY ULTRA RYZEN 9',
                    price: 30.00,
                    link: 'https://billing.hexonode.com/products/germany-ultra-mc/16gb-germany-ultra-ryzen-9mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '4 Ryzen vCores',
                        '16 GB DDR4 Memory',
                        '120 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '24GB GERMANY ULTRA RYZEN 9',
                    price: 45.00,
                    link: 'https://billing.hexonode.com/products/germany-ultra-mc/24gb-germany-ultra-ryzen-9mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '6 Ryzen vCores',
                        '24 GB DDR4 Memory',
                        '160 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB GERMANY ULTRA RYZEN 9',
                    price: 55.00,
                    link: 'https://billing.hexonode.com/products/germany-ultra-mc/32gb-germany-ultra-ryzen-9mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '6 Ryzen vCores',
                        '32 GB DDR4 Memory',
                        '200 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                }
            ]
        },
        France: {
            budget: [
                {
                    name: '8GB Plan - Budget',
                    price: 999.00,
                    link: 'https://billing.hexonode.com/products/france-budget-mc/8gb-france-budget',
                    features: [
                        'OUT OF STOCK',
                    ]
                }

            ],
            premium: [
                {
                    name: '4GB FRANCE PREMIUM MC',
                    price: 12.00,
                    link: 'https://billing.hexonode.com/products/premium-france-mc/4gb-france-premium-mc',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 GHz Base / 3.8 GHz Turbo',
                        '4 Cores',
                        '4GB DDR5 RAM',
                        '30 GB NVME Storage',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 4 to 5 hours'
                    ]
                },
                {
                    name: '8GB FRANCE PREMIUM MC',
                    price: 22.00,
                    link: 'https://billing.hexonode.com/products/premium-france-mc/8gb-france-premium-mc',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 GHz Base / 3.8 GHz Turbo',
                        '4 Cores',
                        '8GB DDR5 RAM',
                        '60 GB NVME Storage',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 4 to 5 hours'
                    ]
                },
                {
                    name: '16GB FRANCE PREMIUM MC',
                    price: 36.00,
                    link: 'https://billing.hexonode.com/products/premium-france-mc/16gb-france-premium-mc',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 GHz Base / 3.8 GHz Turbo',
                        '6 Cores',
                        '16GB DDR5 RAM',
                        '120 GB NVME Storage',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 4 to 5 hours'
                    ]
                },
                {
                    name: '32GB FRANCE PREMIUM MC',
                    price: 65.00,
                    link: 'https://billing.hexonode.com/products/premium-france-mc/32gb-france-premium-mc',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 GHz Base / 3.8 GHz Turbo',
                        '8 Cores',
                        '32GB DDR5 RAM',
                        '250 GB NVME Storage',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 4 to 5 hours'
                    ]
                }
            ],
            ultra: [
                {
                    name: '4GB FRANCE RYZEN 9 MC',
                    price: 19.99,
                    link: 'http://billing.hexonode.com/products/france-ultra-mc-ryzen-9/4gb-france-ryzen-9-mc',
                    features: [
                        'AMD Ryzen 9 7950X',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '4 Cores',
                        '4GB DDR5 RAM',
                        '30 GB NVME',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB FRANCE RYZEN 9 MC',
                    price: 29.99,
                    link: 'http://billing.hexonode.com/products/france-ultra-mc-ryzen-9/8gb-france-ryzen-9-mc',
                    features: [
                        'AMD Ryzen 9 7950X',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '2 Cores',
                        '8GB DDR5 RAM',
                        '100 GB NVME',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB FRANCE RYZEN 9 MC',
                    price: 49.99,
                    link: 'http://billing.hexonode.com/products/france-ultra-mc-ryzen-9/16gb-france-ryzen-9-mc',
                    features: [
                        'AMD Ryzen 9 7950X',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '4 Dedicated Cores',
                        '16GB DDR5 RAM',
                        '200 GB NVME',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB FRANCE RYZEN 9 MC',
                    price: 79.99,
                    link: 'http://billing.hexonode.com/products/france-ultra-mc-ryzen-9/32gb-france-ryzen-9-mc',
                    features: [
                        'AMD Ryzen 9 7950X',
                        '4.5 GHz Base / 5.7 GHz Turbo',
                        '8 Dedicated Cores',
                        '32GB DDR5 RAM',
                        '400 GB NVME',
                        'Bandwidth: 3TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                }
            ]
        },
        UK: {
            budget: [
                {
                    name: '4GB UK BUDGET MC',
                    price: 5.00,
                    link: 'https://billing.hexonode.com/products/uk-budget-mc/4gb-uk-budget-mc',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '1 Core',
                        '4GB RAM (ECC Registered)',
                        '32GB SSD/NVME (Depends on availability)',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        'Location: London',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB UK BUDGET MC',
                    price: 12.00,
                    link: 'https://billing.hexonode.com/products/uk-budget-mc/8gb-uk-budget-mc',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '2 Cores',
                        '8GB RAM (ECC Registered)',
                        '65GB SSD/NVME (Depends on availability)',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        'Location: London',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB UK BUDGET MC',
                    price: 19.99,
                    link: 'https://billing.hexonode.com/products/uk-budget-mc/16gb-uk-budget-mc',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '4 Cores',
                        '16GB RAM (ECC Registered)',
                        '120GB SSD/NVME (Depends on availability)',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        'Location: London',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '24GB UK BUDGET MC',
                    price: 24.00,
                    link: 'https://billing.hexonode.com/products/uk-budget-mc/24gb-uk-budget-mc',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '5 Cores',
                        '24GB RAM (ECC Registered)',
                        '180GB SSD/NVME (Depends on availability)',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        'Location: London',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB UK BUDGET MC',
                    price: 32.00,
                    link: 'https://billing.hexonode.com/products/uk-budget-mc/32gb-uk-budget-mc',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '6 Cores',
                        '32GB RAM (ECC Registered)',
                        '200GB SSD/NVME (Depends on availability)',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        'Location: London',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '48GB UK BUDGET MC',
                    price: 44.00,
                    link: 'https://billing.hexonode.com/products/uk-budget-mc/48gb-uk-budget-mc',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '7 Cores',
                        '48GB RAM (ECC Registered)',
                        '250GB SSD/NVME (Depends on availability)',
                        'Unlimited Player Slots',
                        'Premium DDoS Protection',
                        'Location: London',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB Plan - Premium',
                    price: 8.40,
                    link: 'https://billing.hexonode.com/products/uk-premium-mc/8.40gb-uk-premium',
                    features: [
                        'Coming Soon'
                    ]
                }
            ],
            ultra: [
                {
                    name: '10.80 Plan - Ultra Ryzen 9',
                    price: 10.80,
                    link: 'https://billing.hexonode.com/products/uk-ultra-mc/10.80gb-uk-ultra-ryzen-9mc',
                    features: [
                        'Coming Soon'
                    ]
                }
            ]
        },
        Europe: {
            budget: [
                {
                    name: '4GB EUROPE BUDGET',
                    price: 4.00,
                    link: 'https://billing.hexonode.com/products/europe-mc-budget/4gb-europe-budgetmc',
                    features: [
                        '1 vCore',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '4 GB DDR4 RAM',
                        '20 GB NVMe',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB EUROPE BUDGET',
                    price: 8.00,
                    link: 'https://billing.hexonode.com/products/europe-mc-budget/8gb-europe-budgetmc',
                    features: [
                        '4 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '8 GB DDR4 RAM',
                        '50 GB NVMe',
                        '1 Gbit internet speed | 2 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '12GB EUROPE BUDGET',
                    price: 13.00,
                    link: 'https://billing.hexonode.com/products/europe-mc-budget/12gb-europe-budgetmc',
                    features: [
                        '5 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '12 GB DDR4 RAM',
                        '75 GB NVMe',
                        '1 Gbit internet speed | 4 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB EUROPE BUDGET',
                    price: 17.00,
                    link: 'https://billing.hexonode.com/products/europe-mc-budget/16gb-europe-budgetmc',
                    features: [
                        '6 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '16 GB DDR4 RAM',
                        '100 GB NVMe',
                        '1 Gbit internet speed | 6 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '24GB EUROPE BUDGET',
                    price: 25.00,
                    link: 'https://billing.hexonode.com/products/europe-mc-budget/24gb-europe-budgetmc',
                    features: [
                        '7 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '24 GB DDR4 RAM',
                        '150 GB NVMe',
                        '1 Gbit internet speed | 8 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB EUROPE BUDGET',
                    price: 33.00,
                    link: 'https://billing.hexonode.com/products/europe-mc-budget/32gb-europe-budgetmc',
                    features: [
                        '8 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '32 GB DDR4 RAM',
                        '200 GB NVMe',
                        '1 Gbit internet speed | 10 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '64GB EUROPE BUDGET',
                    price: 49.99,
                    link: 'https://billing.hexonode.com/products/europe-mc-budget/64gb-europe-budgetmc',
                    features: [
                        '10 vCores',
                        '2.5GHz to 3.4GHz { TURBO }',
                        '64 GB DDR4 RAM',
                        '400 GB NVMe',
                        '1 Gbit internet speed | 14 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                }
            ],
            premium: [
                {
                    name: '4GB EUROPE PREMIUM',
                    price: 5.00,
                    link: 'https://billing.hexonode.com/products/europe-premium-mc/4gb-europe-premium-mc',
                    features: [
                        'Intel Xeon Gold 6150',
                        '1 vCore',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '4 GB DDR4 RAM',
                        '25 GB NVMe',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '8GB EUROPE PREMIUM',
                    price: 9.00,
                    link: 'https://billing.hexonode.com/products/europe-premium-mc/8gb-europe-premium-mc',
                    features: [
                        'Intel Xeon Gold 6150',
                        '4 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '8 GB DDR4 RAM',
                        '50 GB NVMe',
                        '1 Gbit internet speed | 4 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB EUROPE PREMIUM',
                    price: 18.00,
                    link: 'https://billing.hexonode.com/products/europe-premium-mc/16gb-europe-premium-mc',
                    features: [
                        'Intel Xeon Gold 6150',
                        '6 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '16 GB DDR4 RAM',
                        '100 GB NVMe',
                        '1 Gbit internet speed | 8 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB EUROPE PREMIUM',
                    price: 37.00,
                    link: 'https://billing.hexonode.com/products/europe-premium-mc/32gb-europe-premium-mc',
                    features: [
                        'Intel Xeon Gold 6150',
                        '8 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '32 GB DDR4 RAM',
                        '200 GB NVMe',
                        '1 Gbit internet speed | 12 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB EUROPE PREMIUM',
                    price: 64.00,
                    link: 'https://billing.hexonode.com/products/europe-premium-mc/64gb-europe-premium-mc',
                    features: [
                        'Intel Xeon Gold 6150',
                        '10 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '64 GB DDR4 RAM',
                        '400 GB NVMe',
                        '1 Gbit internet speed | 16 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '128GB EUROPE PREMIUM',
                    price: 110.00,
                    link: 'https://billing.hexonode.com/products/europe-premium-mc/128gb-europe-premium-mc',
                    features: [
                        'AMD Ryzen™ 5 3600',
                        '12 Dedicated Ryzen Cores',
                        '3.7 GHz Base (4.2 GHz Turbo)',
                        '128 GB DDR4 RAM',
                        '1 TB NVMe SSD',
                        '1 Gbit internet speed | 20 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                }
            ],
            ultra: [
                {
                    name: '4GB EUROPE ULTRA RYZEN 9',
                    price: 7.00,
                    link: 'https://billing.hexonode.com/products/europe-ultra-mc-ryzen-9/4gb-europe-ryzen-9-mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '1 Ryzen vCore',
                        '4 GB DDR4 Memory',
                        '25 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '6GB EUROPE ULTRA RYZEN 9',
                    price: 10.00,
                    link: 'https://billing.hexonode.com/products/europe-ultra-mc-ryzen-9/6gb-europe-ryzen-9-mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '2 Ryzen vCores',
                        '6 GB DDR4 Memory',
                        '40 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '8GB EUROPE ULTRA RYZEN 9',
                    price: 14.00,
                    link: 'https://billing.hexonode.com/products/europe-ultra-mc-ryzen-9/8gb-europe-ryzen-9-mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '2 Ryzen vCores',
                        '8 GB DDR4 Memory',
                        '50 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '12GB EUROPE ULTRA RYZEN 9',
                    price: 22.00,
                    link: 'https://billing.hexonode.com/products/europe-ultra-mc-ryzen-9/12gb-europe-ryzen-9-mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '3 Ryzen vCores',
                        '12 GB DDR4 Memory',
                        '75 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB EUROPE ULTRA RYZEN 9',
                    price: 30.00,
                    link: 'https://billing.hexonode.com/products/europe-ultra-mc-ryzen-9/16gb-europe-ryzen-9-mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '4 Ryzen vCores',
                        '16 GB DDR4 Memory',
                        '120 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '24GB EUROPE ULTRA RYZEN 9',
                    price: 45.00,
                    link: 'https://billing.hexonode.com/products/europe-ultra-mc-ryzen-9/24gb-europe-ryzen-9-mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '6 Ryzen vCores',
                        '24 GB DDR4 Memory',
                        '160 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB EUROPE ULTRA RYZEN 9',
                    price: 55.00,
                    link: 'https://billing.hexonode.com/products/europe-ultra-mc-ryzen-9/32gb-europe-ryzen-9-mc',
                    features: [
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '6 Ryzen vCores',
                        '32 GB DDR4 Memory',
                        '200 GB NVMe Storage',
                        'AS203446 DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                }
            ]
        }
    },
    vps: {
        title: 'VPS Hosting Plans',
        description: 'Powerful virtual private servers with full root access',
        India: {
            budget: [
                {
                    name: '32GB VPS - Budget',
                    price: 900,
                    link:'https://billing.hexonode.com/products/india-vps-budget/64gb-vps-india-budeget',
                    features: [
                        '32GB RAM',
                        '4 vCPU',
                        '300GB NVMe SSD',
                        '500Mbps Traffic',
                        '1x ipv4',
                        'Linux VPS',
                    ]
                },
                {
                    name: '64GB VPS - Budget',
                    price: 1500,
                    link:'https://billing.hexonode.com/products/india-vps-budget/64gb-vps-india-budeget',
                    features: [
                        '64GB RAM',
                        '8 vCPU',
                        '500GB NVMe SSD',
                        '500Mbps Traffic',
                        '1x ipv4',
                        'Linux VPS',
                    ]
                }
            ],
            premium: [
                {
                    name: '16GB VPS - Premium',
                    price: 1100,
                    link:'https://billing.hexonode.com/products/india-vps-premium/16gb-vps-india-premium',
                    features: [
                        '16GB RAM',
                        '2 vCPU (3.0GHz)',
                        '100GB NVMe SSD',
                        '500Mbps Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '32GB VPS - Premium',
                    price: 1600,
                    link:'https://billing.hexonode.com/products/india-vps-premium/32gb-vps-india-premium',
                    features: [
                        '32GB RAM',
                        '4 vCPU (3.0GHz)',
                        '200GB NVMe SSD',
                        '500Mbps Traffic',
                        'Linux/Windows',
                        'DDoS Protection',
                        'Priority Support',
                        'Enhanced Backups',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '64GB VPS - Premium',
                    price: 2500,
                    link:'https://billing.hexonode.com/products/india-vps-premium/64gb-vps-india-premium',
                    features: [
                        '64GB RAM',
                        '8 vCPU (3.0GHz)',
                        '200GB NVMe SSD',
                        '500Mbps Traffic',
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
                    name: '16GB VPS - Ultra',
                    price: 1850,
                    link:'https://billing.hexonode.com/products/india-vps-ultra/16gb-vps-india-ultra',
                    features: [
                        '16GB RAM',
                        '2 vCPU (4.5-5.7GHz)',
                        '100GB NVMe SSD',
                        '1000Mbps Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '32GB VPS - Ultra',
                    price: 3500,
                    link:'https://billing.hexonode.com/products/india-vps-ultra/32gb-vps-india-ultra',
                    features: [
                        '32GB RAM',
                        '4 vCPU (4.5-5.7GHz)',
                        '200GB NVMe SSD',
                        '1000Mbps Traffic',
                        'Linux/Windows',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Daily Backups',
                        '99.99% Uptime SLA',
                        'Enhanced Security'
                    ]
                },
                {
                    name: '64GB VPS - Ultra',
                    price: 6500,
                    link:'https://billing.hexonode.com/products/india-vps-ultra/64gb-vps-india-ultra',
                    features: [
                        '64GB RAM',
                        '6 vCPU (4.5-5.7GHz)',
                        '200GB NVMe SSD',
                        '1000Mbps Traffic',
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
                    name: 'Coming Soon',
                    price: 0,
                    features: [
                        'VPS plans coming soon to Singapore',
                        'Check Out Premium + Ultra Plans for Singapore'
                    ]
                }
            ],
            premium: [
                {
                    name: '12GB VPS - Premium',
                    price: 19.99,
                    link:'https://billing.hexonode.com/products/singapore-vps-premium/12gb-singapore-premium',
                    features: [
                        '12GB RAM',
                        '2.5ghz TO 3.7ghz',
                        '6 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '100Gb NVME SSD Storage',
                        '32tb Bandwidth',
                        'Linux VPS',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '20GB VPS - Premium',
                    price: 38.00,
                    link:'https://billing.hexonode.com/products/singapore-vps-premium/20gb-singapore-premium',
                    features: [
                        '20GB RAM',
                        '2.5ghz TO 3.7ghz',
                        '8 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '200GB NVME SSD Storage',
                        '32TB Bandwidth',
                        'Linux VPS',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '32GB VPS - Premium',
                    price: 60.00,
                    link:'https://billing.hexonode.com/products/singapore-vps-premium/32gb-singapore-premium',
                    features: [
                        '32GB RAM',
                        '2.5ghz TO 3.7ghz',
                        '10 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '250GB NVME SSD Storage',
                        '32TB Bandwidth',
                        'Linux VPS',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '48GB VPS - Premium',
                    price: 80.00,
                    link:'https://billing.hexonode.com/products/singapore-vps-premium/48gb-singapore-premium',
                    features: [
                        '48GB RAM',
                        '2.5ghz TO 3.7ghz',
                        '14 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '300GB NVME SSD Storage',
                        '32TB Bandwidth',
                        'Linux VPS',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '64GB VPS - Premium',
                    price: 120.00,
                    link:'https://billing.hexonode.com/products/singapore-vps-premium/64gb-singapore-premium',
                    features: [
                        '64GB RAM',
                        '2.5ghz TO 3.7ghz',
                        '16 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '600GB NVME SSD Storage',
                        '32TB Bandwidth',
                        'Linux VPS',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                },
                {
                    name: '96GB VPS - Premium',
                    price: 149.00,
                    link:'https://billing.hexonode.com/products/singapore-vps-premium/96gb-singapore-premium',
                    features: [
                        '96GB RAM',
                        '2.5ghz TO 3.7ghz',
                        '19 vCPU Cores (INTEL GOLD/AMD EYPC)',
                        '800GB NVME SSD Storage',
                        '32TB Bandwidth',
                        'Linux VPS',
                        'DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '2-3 Hr Delivery Time',
                        '99.9% Uptime SLA'
                    ]
                }
            ],
            ultra: [
                {
                    name: '4GB VPS - Ultra',
                    price: 19.99,
                    link:'https://billing.hexonode.com/products/singapore-vps-ultra/4gb-singapore-ultra',
                    features: [
                        'AMD EPYC™ 4464P 5.4Gz',
                        '4GB RAM ECC Registered',
                        '2 Core',
                        '3.7 GHz Base / 5.4 GHz Turbo',
                        '32GB NVMe/SSD',
                        '1Gbps Bandwidth',
                        'Linux VPS',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '3-4 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '8GB VPS - Ultra',
                    price: 30.00,
                    link:'https://billing.hexonode.com/products/singapore-vps-ultra/8gb-singapore-ultra',
                    features: [
                        'AMD EPYC™ 4464P 5.4Gz',
                        '8GB RAM ECC Registered',
                        '3 Core',
                        '3.7 GHz Base / 5.4 GHz Turbo',
                        '50GB NVMe/SSD',
                        '1Gbps Bandwidth',
                        'Linux VPS',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '3-4 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '12GB VPS - Ultra',
                    price: 39.99,
                    link:'https://billing.hexonode.com/products/singapore-vps-ultra/12gb-singapore-ultra',
                    features: [
                        'AMD EPYC™ 4464P 5.4Gz',
                        '12GB RAM ECC Registered',
                        '3 Core',
                        '3.7 GHz Base / 5.4 GHz Turbo',
                        '80GB NVMe/SSD',
                        '1Gbps Bandwidth',
                        'Linux VPS',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '3-4 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '16GB VPS - Ultra',
                    price: 48.00,
                    link:'https://billing.hexonode.com/products/singapore-vps-ultra/16gb-singapore-ultra',
                    features: [
                        'AMD EPYC™ 4464P 5.4Gz',
                        '16GB RAM ECC Registered',
                        '4 Core',
                        '3.7 GHz Base / 5.4 GHz Turbo',
                        '100GB NVMe/SSD',
                        '1Gbps Bandwidth',
                        'Linux VPS',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '3-4 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '24GB VPS - Ultra',
                    price: 75.00,
                    link:'https://billing.hexonode.com/products/singapore-vps-ultra/24gb-singapore-ultra',
                    features: [
                        'AMD EPYC™ 4464P 5.4Gz',
                        '24GB RAM ECC Registered',
                        '5 Core',
                        '3.7 GHz Base / 5.4 GHz Turbo',
                        '150GB NVMe/SSD',
                        '1Gbps Bandwidth',
                        'Linux VPS',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '3-4 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '32GB VPS - Ultra',
                    price: 99.99,
                    link:'https://billing.hexonode.com/products/singapore-vps-ultra/32gb-singapore-ultra',
                    features: [
                        'AMD EPYC™ 4464P 5.4Gz',
                        '32GB RAM ECC Registered',
                        '6 Core',
                        '3.7 GHz Base / 5.4 GHz Turbo',
                        '200GB NVMe/SSD',
                        '1Gbps Bandwidth',
                        'Linux VPS',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '3-4 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '48GB VPS - Ultra',
                    price: 140.00,
                    link: 'https://billing.hexonode.com/products/singapore-vps-ultra/48gb-singapore-ultra',
                    features: [
                        'AMD EPYC™ 4464P 5.4Gz',
                        '48GB RAM ECC Registered',
                        '8 Core',
                        '3.7 GHz Base / 5.4 GHz Turbo',
                        '400GB NVMe/SSD',
                        '1Gbps Bandwidth',
                        'Linux VPS',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '3-4 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                },
                {
                    name: '64GB VPS - Ultra',
                    price: 180.00,
                    link: 'https://billing.hexonode.com/products/singapore-vps-ultra/64gb-singapore-ultra',
                    features: [
                        'AMD EPYC™ 4464P 5.4Gz',
                        '64GB RAM ECC Registered',
                        '12 Core',
                        '3.7 GHz Base / 5.4 GHz Turbo',
                        '500GB NVMe/SSD',
                        '1Gbps Bandwidth',
                        'Linux VPS',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'FREE SETUP',
                        '3-4 Hr Delivery Time',
                        '99.99% Uptime SLA'
                    ]
                }
            ]
        },
        US: {
            budget: [
                {
                    name: '8GB VPS - Budget',
                    price: 15.00,
                    link: 'https://billing.hexonode.com/products/usa-vps-budget/8gb-usa-budget',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6130',
                        '3 Core',
                        '8GB RAM (ECC Registered)',
                        '65GB SSD/NVME',
                        'Bandwidth: 10TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB VPS - Budget',
                    price: 20.00,
                    link: 'https://billing.hexonode.com/products/usa-vps-budget/16gb-usa-budget',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6130',
                        '4 Core',
                        '16GB RAM (ECC Registered)',
                        '96GB SSD/NVME',
                        'Bandwidth: 20TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB VPS - Budget',
                    price: 32.00,
                    link: 'https://billing.hexonode.com/products/usa-vps-budget/32gb-usa-budget',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6130',
                        '6 Core',
                        '32GB RAM (ECC Registered)',
                        '192GB SSD/NVME',
                        'Bandwidth: 20TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '48GB VPS - Budget',
                    price: 45.00,
                    link: 'https://billing.hexonode.com/products/usa-vps-budget/48gb-usa-budget',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6130',
                        '7 Core',
                        '48GB RAM (ECC Registered)',
                        '250GB SSD/NVME',
                        'Bandwidth: 20TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '64GB VPS - Budget',
                    price: 55.00,
                    link: 'https://billing.hexonode.com/products/usa-vps-budget/64gb-usa-budget',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6130',
                        '9 Core',
                        '64GB RAM (ECC Registered)',
                        '320GB SSD/NVME',
                        'Bandwidth: 20TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB VPS - Premium',
                    price: 20.00,
                    link:'https://billing.hexonode.com/products/usa-vps-premium/8gb-usa-premium',
                    features: [
                        'Linux VPS',
                        'Xeon Gold 6226R',
                        '2.90 GHz Base / 3.90 GHz Turbo',
                        '4 Cores',
                        '8GB RAM',
                        '60 GB NVME',
                        'Bandwidth: 3TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB VPS - Premium',
                    price: 35.00,
                    link:'https://billing.hexonode.com/products/usa-vps-premium/16gb-usa-premium',
                    features: [
                        'Linux VPS',
                        'Xeon Gold 6226R',
                        '2.90 GHz Base / 3.90 GHz Turbo',
                        '8 Cores',
                        '16GB RAM',
                        '240 GB NVME',
                        'Bandwidth: 3TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB VPS - Premium',
                    price: 60.00,
                    link:'https://billing.hexonode.com/products/usa-vps-premium/32gb-usa-premium',
                    features: [
                        'Linux VPS',
                        'Xeon Gold 6226R',
                        '2.90 GHz Base / 3.90 GHz Turbo',
                        '10 Cores',
                        '32GB RAM',
                        '480 GB NVME',
                        'Bandwidth: 3TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '64GB VPS - Premium',
                    price: 99.99,
                    link:'https://billing.hexonode.com/products/usa-vps-premium/64gb-usa-premium',
                    features: [
                        'Linux VPS',
                        'Intel Xeon-E 2136',
                        '3.3GHz Base / 4.5GHz Turbo',
                        '12 Cores',
                        '64GB RAM DDR4 ECC',
                        '2× 512GB SSD NVMe Soft RAID',
                        '1x ipv4',
                        'Premium DDOS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                },
                {
                    name: '128GB VPS - Premium',
                    price: 170.00,
                    link:'https://billing.hexonode.com/products/usa-vps-premium/128gb-usa-premium',
                    features: [
                        'Linux VPS',
                        'Intel Xeon-E 2136',
                        '3.3GHz Base / 4.5GHz Turbo',
                        '12 Cores',
                        '128GB RAM DDR4 ECC',
                        '2× 512GB SSD NVMe Soft RAID',
                        'Private Bandwidth: 1Gbit/s unmetered and guaranteed',
                        '1x ipv4',
                        'Premium DDOS Protection',
                        '24/7 Ticket Support',
                        'Delivery Time 4 to 5 hours',
                        'Free Setup'
                    ]
                }
            ],
            ultra: [
                {
                    name: '4GB VPS - Ultra Ryzen 9',
                    price: 25.00,
                    link:'https://billing.hexonode.com/products/usa-vps-ultra/4gb-usa-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950X – 4 Cores',
                        '4.5GHz (Base) / 5.7GHz (Turbo)',
                        '4GB DDR5 RAM',
                        '30GB NVMe Storage',
                        '3TB Bandwidth',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        '4-5 Hours Delivery Time',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB VPS - Ultra Ryzen 9 (2 Cores)',
                    price: 35.00,
                    link:'https://billing.hexonode.com/products/usa-vps-ultra/8gb-usa-ultra-ryzen-92core',
                    features: [
                        'AMD Ryzen 9 7950X – 2 Cores',
                        '4.5GHz (Base) / 5.7GHz (Turbo)',
                        '8GB DDR5 RAM',
                        '100GB NVMe Storage',
                        '3TB Bandwidth',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        '4-5 Hours Delivery Time',
                        'Free Setup'
                    ]
                },
                {
                    name: '8GB VPS - Ultra Ryzen 9 (8 Cores)',
                    price: 40.00,
                    link:'https://billing.hexonode.com/products/usa-vps-ultra/8gb-usa-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950X – 8 Cores',
                        '4.5GHz (Base) / 5.7GHz (Turbo)',
                        '8GB DDR5 RAM',
                        '60GB NVMe Storage',
                        '3TB Bandwidth',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        '4-5 Hours Delivery Time',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB VPS - Ultra Ryzen 9',
                    price: 55.00,
                    link:'https://billing.hexonode.com/products/usa-vps-ultra/16gb-usa-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950X – 4 Dedicated Cores',
                        '4.5GHz (Base) / 5.7GHz (Turbo)',
                        '16GB DDR5 RAM',
                        '200GB NVMe Storage',
                        '3TB Bandwidth',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        '4-5 Hours Delivery Time',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB VPS - Ultra Ryzen 9',
                    price: 90.00,
                    link:'https://billing.hexonode.com/products/usa-vps-ultra/32gb-usa-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950X – 8 Dedicated Cores',
                        '4.5GHz (Base) / 5.7GHz (Turbo)',
                        '32GB DDR5 RAM',
                        '400GB NVMe Storage',
                        '3TB Bandwidth',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        '4-5 Hours Delivery Time',
                        'Free Setup'
                    ]
                }
            ]
        },
        Germany: {
            budget: [
                {
                    name: '8GB GERMANY BUDGET',
                    price: 8.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-budget/8gb-germany-budget',
                    features: [
                        'Linux VPS',
                        '4 vCores',
                        '2.5 to 3.4 Ghz { TURBO }',
                        '8 GB DRR4 RAM',
                        '50 GB 1 NVMe',
                        '1 Gbit internet speed | 2 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB GERMANY BUDGET',
                    price: 15.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-budget/16gb-germany-budget',
                    features: [
                        '6 vCores',
                        '2.5 to 3.4 Ghz { TURBO }',
                        '16 GB DRR4 RAM',
                        '100GB 1 NVMe',
                        '1 Gbit internet speed | 6 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB GERMANY BUDGET',
                    price: 34.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-budget/32gb-germany-budget',
                    features: [
                        '8 vCores',
                        '2.5 to 3.4 Ghz { TURBO }',
                        '32 GB DRR4 RAM',
                        '200GB 1 NVMe',
                        '1 Gbit internet speed | 10 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '64GB GERMANY BUDGET',
                    price: 49.99,
                    link: 'https://billing.hexonode.com/products/germany-vps-budget/64gb-germany-budget',
                    features: [
                        '10 vCores',
                        '2.5 to 3.4 Ghz { TURBO }',
                        '64 GB DRR4 RAM',
                        '400GB 1 NVMe',
                        '1 Gbit internet speed | 14TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB GERMANY PREMIUM',
                    price: 9.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-premium/8gb-germany-premium',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6150',
                        '4 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '8 GB DRR4 RAM',
                        '50 GB 1 NVMe',
                        '1 Gbit internet speed | 4 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB GERMANY PREMIUM',
                    price: 18.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-premium/16gb-germany-premium',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6150',
                        '6 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '16 GB DRR4 RAM',
                        '100 GB 1 NVMe',
                        '1 Gbit internet speed | 8 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB GERMANY PREMIUM',
                    price: 37.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-premium/32gb-germany-premium',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6150',
                        '8 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '32 GB DRR4 RAM',
                        '200 GB 1 NVMe',
                        '1 Gbit internet speed | 12 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB GERMANY PREMIUM',
                    price: 64.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-premium/64gb-germany-premium',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6150',
                        '10 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '64 GB DRR4 RAM',
                        '400 GB 1 NVMe',
                        '1 Gbit internet speed | 16 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '128GB GERMANY PREMIUM',
                    price: 110.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-premium/128gb-germany-premium',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 5 3600',
                        '12 DEDICATED RYZEN CORES',
                        '3.7 GHz Base (4.2 GHz Turbo)',
                        '128 GB RAM DDR4',
                        '1 TB NVME SSD',
                        '1 Gbit internet speed | 20 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB GERMANY ULTRA RYZEN 9',
                    price: 15.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/8gb-germany-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '2 Ryzen vCores',
                        '8 GB DDR4 Memory',
                        '50 GB 1 NVMe Storage',
                        '1 Gbit Uplink',
                        '20 TB Traffic per month',
                        '1x IPv4',
                        'DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '12GB GERMANY ULTRA RYZEN 9',
                    price: 23.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/12gb-germany-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '3 Ryzen vCores',
                        '12 GB DDR4 Memory',
                        '75 GB 1 NVMe Storage',
                        '1 Gbit Uplink',
                        '25 TB Traffic per month',
                        '1x IPv4',
                        'DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '24GB GERMANY ULTRA RYZEN 9',
                    price: 45.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/24gb-germany-ultra-ryzen-24',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '6 Ryzen vCores',
                        '24 GB DDR4 Memory',
                        '160 GB 1 NVMe Storage',
                        '1 Gbit Uplink',
                        '35 TB Traffic per month',
                        '1x IPv4',
                        'DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB GERMANY ULTRA RYZEN 9',
                    price: 54.99,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/32gb-germany-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '6 Ryzen vCores',
                        '32 GB DDR4 Memory',
                        '200 GB 1 NVMe Storage',
                        '1 Gbit Uplink',
                        '38 TB Traffic per month',
                        '1x IPv4',
                        'DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB DEDICATED VPS RYZEN 7',
                    price: 105.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/64gb-dedicated-vps-ryzen-7',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 7 7700',
                        '3.8 GHz Base (5.3 GHz Turbo)',
                        '16 RYZEN CORE',
                        '64GB RAM DDR5',
                        '2x 1 TB NVME SSD',
                        '100% GUARANTEED PERFORMANCE',
                        '24/7 FREE TICKET SUPPORT',
                        'FREE SETUP',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB GERMANY ULTRA RYZEN 9',
                    price: 140.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/64gb-germany-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD-RYZEN-9-7900X3D',
                        'CPU TYPE: AMD Ryzen 9 7900X3D 5.6GHz',
                        '24 RYZEN CORES',
                        '64GB RAM DDR5',
                        '480GB NVMe Storage (More available on request)',
                        '1 Gbps Unmetered Network',
                        '24/7 FREE TICKET SUPPORT',
                        'FREE SETUP',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '128GB DEDICATED ULTRA RYZEN 7',
                    price: 149.99,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/128gb-dedicated-ultra-ryzen-7',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 7 7700',
                        '3.8 GHz Base (5.3 GHz Turbo)',
                        '12 RYZEN CORE',
                        '128 GB RAM DDR5',
                        '2x 1 TB NVME SSD',
                        '100% GUARANTEED PERFORMANCE',
                        '24/7 FREE TICKET SUPPORT',
                        'FREE SETUP',
                        'Delivery Time 1 to 2 hours'
                    ]
                },
                {
                    name: '128GB GERMANY ULTRA RYZEN 9',
                    price: 180.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/128gb-germany-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD-RYZEN-9-7900X3D',
                        'CPU TYPE: AMD Ryzen 9 7900X3D 5.6GHz',
                        '24 RYZEN CORES',
                        '128GB RAM DDR5',
                        '960GB NVMe Storage (More available on request)',
                        '1 Gbps Unmetered Network',
                        '24/7 FREE TICKET SUPPORT',
                        'FREE SETUP',
                        'Delivery Time 2 to 3 hours'
                    ]
                }
            ]
        },
        France: {
            budget: [
                {
                    name: '8GB Plan - Budget',
                    price: -1,
                    link: '',
                    features: [
                        'COMING SOON',
                        'Till that check out',
                        'premium + ultra plans',
                        'for more information, contact us'
                    ]
                }

            ],
            premium: [
                {
                    name: '8GB Plan - Premium',
                    price: 24.99,
                    link: 'https://billing.hexonode.com/products/france-vps-premium/8gb-france-premium',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 Gz {BASE} 3.8 Gz {TURBO}',
                        '8GB RAM DDR5 ',
                        '8 vCPU Cores',
                        '60GB SSD Storage',
                        '1x IPv4',
                        'Bandwidth: 3TB',
                        'Premium DDoS Protection',
                        '24/7 FREE TICKET SUPPORT',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB Plan - Premium',
                    price: 40.00,
                    link: 'https://billing.hexonode.com/products/france-vps-premium/16gb-france-premium',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 Gz {BASE} 3.8 Gz {TURBO}',
                        '16GB RAM DDR5',
                        '8 vCPU Cores',
                        '120GB SSD Storage',
                        '1x IPv4',
                        'Bandwidth: 3TB',
                        'Premium DDoS Protection',
                        '24/7 FREE TICKET SUPPORT',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB Plan - Premium',
                    price: 70.00,
                    link: 'https://billing.hexonode.com/products/france-vps-premium/32gb-france-premium',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 Gz {BASE} 3.8 Gz {TURBO}',
                        '32GB RAM DDR5',
                        '8 vCPU Cores',
                        '250GB SSD Storage',
                        '1x IPv4',
                        'Bandwidth: 3TB',
                        'Premium DDoS Protection',
                        '24/7 FREE TICKET SUPPORT',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB Plan - Premium',
                    price: 105.00,
                    link: 'https://billing.hexonode.com/products/france-vps-premium/64gb-france-premium',
                    features: [
                        'Intel Xeon E3-1240 v6',
                        '3.7 Ghz Base /4.10 Ghz Turbo',
                        '64GB RAM DDR5',
                        '8 Core { dedicated }',
                        '2x 500 gb NVME/SSD { depends on availibility }',
                        '1x IPv4',
                        'Bandwidth: Unmetered 1 Gbps',
                        'Advanced DDoS Protection',
                        '24/7 FREE TICKET SUPPORT',
                        'Free Setup',
                        'Delivery Time 4 to 5 hours'
                    ]
                },
                {
                    name: '96GB Plan - Premium',
                    price: 115.00,
                    link: 'https://billing.hexonode.com/products/france-vps-premium/96gb-france-premium',
                    features: [
                        'Intel Xeon E5-1650 v3',
                        '3.5 Ghz Base /3.80 Ghz Turbo',
                        '96GB RAM DDR5',
                        '12 Core { dedicated }',
                        '3x 500 gb NVME/SSD { depends on availibility }',
                        '1x IPv4',
                        'Bandwidth: Unmetered 1 Gbps',
                        'Advanced DDoS Protection',
                        '24/7 FREE TICKET SUPPORT',
                        'Free Setup',
                        'Delivery Time 4 to 5 hours'
                    ]
                }
            ],
            ultra: [
                {
                    name: '4GB Plan - Ultra Ryzen 9',
                    price: 24.00,
                    link: 'https://billing.hexonode.com/products/france-vps-ultra/4gb-france-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950x',
                        '4GB RAM DDR5',
                        '5.7 Ghz',
                        '4 vCPU Cores (Ryzen 9)',
                        '30GB NVME',
                        'Bandwidth: 3TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours',
                    ]
                },
                {
                    name: '8GB Plan - Ultra Ryzen 9',
                    price: 33.00,
                    link: 'https://billing.hexonode.com/products/france-vps-ultra/8gb-france-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950x',
                        '8GB RAM DDR5',
                        '5.7 Ghz',
                        '2 vCPU Cores (Ryzen 9)',
                        '100GB NVME',
                        'Bandwidth: 3TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours',
                    ]
                },
                {
                    name: '16GB Plan - Ultra Ryzen 9',
                    price: 54.99,
                    link: 'https://billing.hexonode.com/products/france-vps-ultra/16gb-france-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950x',
                        '16GB RAM DDR5',
                        '5.7 Ghz',
                        '4 vCPU Cores (Ryzen 9)',
                        '200GB NVME',
                        'Bandwidth: 3TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours',
                    ]
                },
                {
                    name: '32GB Plan - Ultra Ryzen 9',
                    price: 88.00,
                    link: 'https://billing.hexonode.com/products/france-vps-ultra/32gb-france-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950x',
                        '32GB RAM DDR5',
                        '5.7 Ghz',
                        '8 core dedicated (Ryzen 9)',
                        '400GB NVME',
                        'Bandwidth: 3TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours',
                    ]
                },
                {
                    name: '64GB Plan - Ultra Ryzen 9',
                    price: 149.99,
                    link: 'https://billing.hexonode.com/products/france-vps-ultra/64gb-france-ryzen-7-9700x',
                    features: [
                        'AMD Ryzen 9700X  ',
                        '64GB RAM DDR5',
                        '5.4 Ghz',
                        '16 core dedicated (Ryzen 9)',
                        '2x 512GB NVME',
                        'Bandwidth: 3TB',
                        '1x ipv4',
                        'Premium DDoS Protection',
                        '24/7 Dedicated Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours',
                    ]
                }
            ]
        },
        UK: {
            budget: [
                {
                    name: '8GB Plan - Budget',
                    price: 15.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-budget/8gb-uk-budget',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '3 CORES',
                        '8GB RAM',
                        '65GB NVME/SSD Storage',
                        'Bandwidth: 10TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        'location: London',
                        'Priority Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB Plan - Budget',
                    price: 23.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-budget/16gb-uk-budget',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '4 CORES',
                        '16GB RAM',
                        '96GB NVME/SSD Storage',
                        'Bandwidth: 20TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        'location: London',
                        'Priority Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB Plan - Budget',
                    price: 35.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-budget/32gb-uk-budget',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '6 CORES',
                        '32GB RAM',
                        '192GB NVME/SSD Storage',
                        'Bandwidth: 20TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        'location: London',
                        'Priority Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '48GB Plan - Budget',
                    price: 48.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-budget/48gb-uk-budget',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '7 CORES',
                        '48GB RAM',
                        '250GB NVME/SSD Storage',
                        'Bandwidth: 20TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        'location: London',
                        'Priority Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB Plan - BUDGET',
                    price: 60.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-budget/64gb-uk-budget',
                    features: [
                        'Intel Xeon E5-2683v4',
                        '9 CORES',
                        '64GB RAM',
                        '320GB NVME/SSD Storage',
                        'Bandwidth: 20TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        'location: London',
                        'Priority Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                }
            ],
            premium: [
                {
                    name: '8gb Plan - Premium',
                    price: 28.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-premium/8gb-uk-premium',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 Gz {BASE} 3.8 Gz {TURBO}',
                        '8 Cores',
                        '8GB RAM',
                        '60GB NVME',
                        'Bandwidth: 3TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB Plan - Premium',
                    price: 45.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-premium/16gb-uk-premium',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 Gz {BASE} 3.8 Gz {TURBO}',
                        '8 Cores',
                        '16GB RAM',
                        '120GB NVME',
                        'Bandwidth: 3TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB Plan - Premium',
                    price: 75.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-premium/32gb-uk-premium',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 Gz {BASE} 3.8 Gz {TURBO}',
                        '8 Cores',
                        '32GB RAM',
                        '250GB NVME',
                        'Bandwidth: 3TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB Plan - Premium',
                    price: 120.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-premium/64gb-uk-premium',
                    features: [
                        'AMD EPYC 9354',
                        '3.25 Gz {BASE} 3.8 Gz {TURBO}',
                        '10 Cores',
                        '64GB RAM',
                        '500GB NVME',
                        'Bandwidth: 3TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '128GB Plan - Premium',
                    price: 190.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-premium/128gb-uk-premium',
                    features: [
                        'Intel Xeon-E 2386G',
                        '3.5GHz BASE /4.7GHz TURBO',
                        '12 Cores { DEDICATED }',
                        '128GB RAM',
                        '2x 512GB NVME',
                        'Public Bandwidth: 1Gbit/s unmetered guaranteed',
                        'Private Bandwidth: 1Gbit/s unmetered and guaranteed',
                        '1x IPv4 { more available }',
                        'Advance DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 4 to 5 hours'
                    ]
                }
            ],
            ultra: [
                {
                    name: '4GB Plan - Ultra Ryzen 9',
                    price: 28.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-ultra/4gb-uk-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950x',
                        '4.5 Ghz {BASE} 5.7 Ghz {TURBO}',
                        '4 vCPU Cores (Ryzen 9)',
                        '4GB RAM DDR5',
                        '30GB NVME',
                        'Bandwidth: 3TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '8GB Plan - Ultra Ryzen 9',
                    price: 35.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-ultra/8gb-uk-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950x',
                        '4.5 Ghz {BASE} 5.7 Ghz {TURBO}',
                        '2 vCPU Cores (Ryzen 9)',
                        '8GB RAM DDR5',
                        '100GB NVME',
                        'Bandwidth: 3TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '8GB Plan - Ultra Ryzen 9',
                    price: 40.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-ultra/8gb-uk-ryzen-98CORE',
                    features: [
                        'AMD Ryzen 9 7950x',
                        '4.5 Ghz {BASE} 5.7 Ghz {TURBO}',
                        '8 vCPU Cores (Ryzen 9)',
                        '8GB RAM DDR5',
                        '60GB NVME',
                        'Bandwidth: 3TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB Plan - Ultra Ryzen 9',
                    price: 65.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-ultra/16gb-uk-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950x',
                        '4.5 Ghz {BASE} 5.7 Ghz {TURBO}',
                        '4 vCPU Cores (Ryzen 9)',
                        '16GB RAM DDR5',
                        '200GB NVME',
                        'Bandwidth: 3TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB Plan - Ultra Ryzen 9',
                    price: 99.99,
                    link: 'https://billing.hexonode.com/products/uk-vps-ultra/32gb-uk-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7950x',
                        '4.5 Ghz {BASE} 5.7 Ghz {TURBO}',
                        '8 vCPU Cores (Ryzen 9)',
                        '32GB RAM DDR5',
                        '400GB NVME',
                        'Bandwidth: 3TB',
                        '1x IPv4',
                        'Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB Plan - Ultra Ryzen 9',
                    price: 170.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-ultra/64gb-uk-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7900',
                        '3.7 Ghz Base / 5.4 Ghz Turbo',
                        '20 dedicated CORES { RYZEN 9}',
                        '64GB RAM DDR5',
                        '512GB NVME',
                        'Bandwidth: 100TB',
                        'Network Speed: 10Gbps',
                        '1x IPv4 { more available }',
                        'Premium DDOS Protection { 800 GBPS}',
                        'Location : Uk, Coventry',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 30 hours'
                    ]
                },
                {
                    name: '128GB Plan - Ultra Ryzen 9',
                    price: 250.00,
                    link: 'https://billing.hexonode.com/products/uk-vps-ultra/128gb-uk-ryzen-9',
                    features: [
                        'AMD Ryzen 9 7900',
                        '3.7 Ghz Base / 5.4 Ghz Turbo',
                        '24 dedicated CORES { RYZEN 9}',
                        '128GB RAM DDR5',
                        '1TB NVME',
                        'Bandwidth: 100TB',
                        'Network Speed: 10Gbps',
                        '1x IPv4 { more available }',
                        'Premium DDOS Protection { 800 GBPS}',
                        'Location : Uk, Coventry',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 30 hours'
                    ]
                }
            ]
        },
        Europe: {
            budget: [
                {
                    name: '8GB VPS - Budget',
                    price: 8.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-budget/8gb-europe-budget',
                    features: [
                        'Linux VPS',
                        '4 vCores',
                        '2.5 to 3.4 Ghz { TURBO }',
                        '8 GB DRR4 RAM',
                        '50 GB 1 NVMe',
                        '1 Gbit internet speed | 2 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '16GB VPS - Budget',
                    price: 15.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-budget/16gb-europe-budget',
                    features: [
                        'Linux VPS',
                        '6 vCores',
                        '2.5 to 3.4 Ghz { TURBO }',
                        '16 GB DRR4 RAM',
                        '100GB 1 NVMe',
                        '1 Gbit internet speed | 6 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '32GB VPS - Budget',
                    price: 32.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-budget/32gb-europe-budget',
                    features: [
                        'Linux VPS',
                        '8 vCores',
                        '2.5 to 3.4 Ghz { TURBO }',
                        '32 GB DRR4 RAM',
                        '200GB 1 NVMe',
                        '1 Gbit internet speed | 10 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                },
                {
                    name: '64GB VPS - Budget',
                    price: 49.99,
                    link: 'https://billing.hexonode.com/products/europe-vps-budget/64gb-europe-budget',
                    features: [
                        'Linux VPS',
                        '10 vCores',
                        '2.5 to 3.4 Ghz { TURBO }',
                        '64 GB DRR4 RAM',
                        '400GB 1 NVMe',
                        '1 Gbit internet speed | 14TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup'
                    ]
                }
            ],
            premium: [
                {
                    name: '8GB VPS - Premium',
                    price: 9.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-premium/8gb-europe-premium',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6150',
                        '4 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '8 GB DRR4 RAM',
                        '50 GB 1 NVMe',
                        '1 Gbit internet speed | 4 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB VPS - Premium',
                    price: 18.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-premium/16gb-europe-premium',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6150',
                        '6 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '16 GB DRR4 RAM',
                        '100 GB 1 NVMe',
                        '1 Gbit internet speed | 8 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB VPS - Premium',
                    price: 37.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-premium/32gb-europe-premium',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6150',
                        '8 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '32 GB DRR4 RAM',
                        '200 GB 1 NVMe',
                        '1 Gbit internet speed | 12 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB VPS - Premium',
                    price: 64.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-premium/64gb-europe-premium',
                    features: [
                        'Linux VPS',
                        'Intel Xeon Gold 6150',
                        '10 vCores',
                        '2.80 GHz Base (3.70 GHz Turbo)',
                        '64 GB DRR4 RAM',
                        '400 GB 1 NVMe',
                        '1 Gbit internet speed | 16 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '128GB VPS PREMIUM',
                    price: 110.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-premium/128gb-europe-premium',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 5 3600',
                        '12 DEDICATED RYZEN CORES',
                        '3.7 GHz Base (4.2 GHz Turbo)',
                        '128 GB RAM DDR4',
                        '1 TB NVME SSD',
                        '1 Gbit internet speed | 20 TB Traffic',
                        '1x IPv4',
                        '3.2Tbit Premium DDoS Protection',
                        '24/7 Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                }
            ],
            ultra: [
                {
                    name: '8GB EUROPE ULTRA RYZEN 9',
                    price: 15.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-ultra-ryzen-9/8gb-europe-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '2 Ryzen vCores',
                        '8 GB DDR4 Memory',
                        '50 GB 1 NVMe Storage',
                        '1 Gbit Uplink',
                        '20 TB Traffic per month',
                        '1x IPv4',
                        'DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '12GB EUROPE ULTRA RYZEN 9',
                    price: 23.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-ultra-ryzen-9/12gb-europe-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '3 Ryzen vCores',
                        '12 GB DDR4 Memory',
                        '75 GB 1 NVMe Storage',
                        '1 Gbit Uplink',
                        '25 TB Traffic per month',
                        '1x IPv4',
                        'DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '16GB EUROPE ULTRA RYZEN 9',
                    price: 30.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-ultra-ryzen-9/16gb-europe-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '4 Ryzen vCores',
                        '16 GB DDR4 Memory',
                        '120 GB 1 NVMe Storage',
                        '1 Gbit Uplink',
                        '28 TB Traffic per month',
                        '1x IPv4',
                        'DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '24GB EUROPE ULTRA RYZEN 9',
                    price: 45.00,
                    link: 'https://billing.hexonode.com/products/europe-vps-ultra-ryzen-9/24gb-europe-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '6 Ryzen vCores',
                        '24 GB DDR4 Memory',
                        '160 GB 1 NVMe Storage',
                        '1 Gbit Uplink',
                        '35 TB Traffic per month',
                        '1x IPv4',
                        'DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '32GB EUROPE ULTRA RYZEN 9',
                    price: 54.99,
                    link: 'https://billing.hexonode.com/products/europe-vps-ultra-ryzen-9/32gb-europe-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 9 5900X',
                        '3.70 GHz Base (4.80 GHz Turbo)',
                        '6 Ryzen vCores',
                        '32 GB DDR4 Memory',
                        '200 GB 1 NVMe Storage',
                        '1 Gbit Uplink',
                        '38 TB Traffic per month',
                        '1x IPv4',
                        'DDoS Protection',
                        '24/7 Free Ticket Support',
                        'Free Setup',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB DEDICATED VPS RYZEN 7',
                    price: 105.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/64gb-dedicated-vps-ryzen-7',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 7 7700',
                        '3.8 GHz Base (5.3 GHz Turbo)',
                        '16 RYZEN CORE',
                        '64GB RAM DDR5',
                        '2x 1 TB NVME SSD',
                        '100% GUARANTEED PERFORMANCE',
                        '24/7 FREE TICKET SUPPORT',
                        'FREE SETUP',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '64GB EUROPE ULTRA RYZEN 9',
                    price: 140.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/64gb-germany-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD-RYZEN-9-7900X3D',
                        'CPU TYPE: AMD Ryzen 9 7900X3D 5.6GHz',
                        '24 RYZEN CORES',
                        '64GB RAM DDR5',
                        '480GB NVMe Storage (More available on request)',
                        '1 Gbps Unmetered Network',
                        '24/7 FREE TICKET SUPPORT',
                        'FREE SETUP',
                        'Delivery Time 2 to 3 hours'
                    ]
                },
                {
                    name: '128GB DEDICATED ULTRA RYZEN 7',
                    price: 149.99,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/128gb-dedicated-ultra-ryzen-7',
                    features: [
                        'Linux VPS',
                        'AMD Ryzen™ 7 7700',
                        '3.8 GHz Base (5.3 GHz Turbo)',
                        '12 RYZEN CORE',
                        '128 GB RAM DDR5',
                        '2x 1 TB NVME SSD',
                        '100% GUARANTEED PERFORMANCE',
                        '24/7 FREE TICKET SUPPORT',
                        'FREE SETUP',
                        'Delivery Time 1 to 2 hours'
                    ]
                },
                {
                    name: '128GB GERMANY ULTRA RYZEN 9',
                    price: 180.00,
                    link: 'https://billing.hexonode.com/products/germany-vps-ultra/128gb-germany-ultra-ryzen-9',
                    features: [
                        'Linux VPS',
                        'AMD-RYZEN-9-7900X3D',
                        'CPU TYPE: AMD Ryzen 9 7900X3D 5.6GHz',
                        '24 RYZEN CORES',
                        '128GB RAM DDR5',
                        '960GB NVMe Storage (More available on request)',
                        '1 Gbps Unmetered Network',
                        '24/7 FREE TICKET SUPPORT',
                        'FREE SETUP',
                        'Delivery Time 2 to 3 hours'
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
                name: 'Starter Web Host',
                price: 1.00,
                link: 'https://billing.hexonode.com/products/web-hosting-supports-wordpress/starter-web-host',
                features: [
                    '          𝐏𝐋𝐀𝐍 𝐒𝐏𝐄𝐂𝐒',
                    ' 1 Website',
                    ' 1 GB SSD Storage',
                    '10 GB Bandwidth',
                    '1 Email Account',
                    'Basic CPU & RAM Resources',
                    '𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒 𝐈𝐍𝐂𝐋𝐔𝐃𝐄𝐒:',
                    'CyberPanel Control Panel (LiteSpeed Powered)',
                    ' WORDPRESS Available',
                    ' 1-Click WordPress Installation',
                    'Free SSL Certificate (HTTPS)',
                    ' FTP Access & File Manager',
                    ' Easy DNS Management',
                    'Webmail Support',
                    'Access & Error Logs',
                    'IPv4 & IPv6 Support',
                    'Hosted on High-Speed SSD Servers',
                    'DDoS Protection & Basic Firewall',
                ]
            },
            {
                name: 'Basic Web Host',
                price: 3.00,
                link: 'https://billing.hexonode.com/products/web-hosting-supports-wordpress/basic-web-host',
                features: [
                    '          𝐏𝐋𝐀𝐍 𝐒𝐏𝐄𝐂𝐒',
                    ' 2 Website',
                    ' 5 GB SSD Storage',
                    '50 GB Bandwidth',
                    '5 Email Account',
                    ' Moderate CPU & RAM Resources',
                    '𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒 𝐈𝐍𝐂𝐋𝐔𝐃𝐄𝐒:',
                    'CyberPanel Control Panel (LiteSpeed Powered)',
                    ' WORDPRESS Available',
                    ' 1-Click WordPress Installation',
                    'Free SSL Certificate (HTTPS)',
                    ' FTP Access & File Manager',
                    ' Easy DNS Management',
                    'Webmail Support',
                    'Access & Error Logs',
                    'IPv4 & IPv6 Support',
                    'Hosted on High-Speed SSD Servers',
                    'DDoS Protection & Basic Firewall',
                ]
            },
            {
                name: 'PRO WEB HOST',
                price: 5.00,
                link: 'https://billing.hexonode.com/products/web-hosting-supports-wordpress/pro-web-host',
                features: [
                    '          𝐏𝐋𝐀𝐍 𝐒𝐏𝐄𝐂𝐒',
                    ' 5 Website',
                    ' 10 GB SSD Storage',
                    '100 GB Bandwidth',
                    '10 Email Account',
                    ' High CPU & RAM Allocation',
                    '𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒 𝐈𝐍𝐂𝐋𝐔𝐃𝐄𝐒:',
                    'CyberPanel Control Panel (LiteSpeed Powered)',
                    ' WORDPRESS Available',
                    ' 1-Click WordPress Installation',
                    'Free SSL Certificate (HTTPS)',
                    ' FTP Access & File Manager',
                    ' Easy DNS Management',
                    'Webmail Support',
                    'Access & Error Logs',
                    'IPv4 & IPv6 Support',
                    'Hosted on High-Speed SSD Servers',
                    'DDoS Protection & Basic Firewall',
                ]
            },
            {
                name: 'Ultra WEB HOST',
                price: 10.00,
                link: 'https://billing.hexonode.com/products/web-hosting-supports-wordpress/ultra-web-host',
                features: [
                    '          𝐏𝐋𝐀𝐍 𝐒𝐏𝐄𝐂𝐒',
                    ' Unlimited Websites',
                    ' 25 GB SSD Storage',
                    ' Unlimited Bandwidth',
                    'Unlimited Email Accounts',
                    ' Premium CPU & RAM Resources',
                    'SSH Access',
                    'Redis & Memcached Support',
                    ' Priority Support',
                    '𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒 𝐈𝐍𝐂𝐋𝐔𝐃𝐄𝐒:',
                    'CyberPanel Control Panel (LiteSpeed Powered)',
                    ' WORDPRESS Available',
                    ' 1-Click WordPress Installation',
                    'Free SSL Certificate (HTTPS)',
                    ' FTP Access & File Manager',
                    ' Easy DNS Management',
                    'Webmail Support',
                    'Access & Error Logs',
                    'IPv4 & IPv6 Support',
                    'Hosted on High-Speed SSD Servers',
                    'DDoS Protection & Basic Firewall',
                ]
            },
            {
                name: 'EXTREME WEB HOST',
                price: 25.00,
                link: 'https://billing.hexonode.com/products/web-hosting-supports-wordpress/extreme-web-host',
                features: [
                    '          𝐏𝐋𝐀𝐍 𝐒𝐏𝐄𝐂𝐒',
                    ' Unlimited Websites',
                    ' Dedicated Separate Resources',
                    ' 100 GB SSD Storage',
                    ' Unlimited Bandwidth',
                    'Unlimited Email Accounts',
                    ' EXTREME CPU & RAM Resources',
                    'SSH Access',
                    'Redis & Memcached Support',
                    ' Priority Support',
                    '𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒 𝐈𝐍𝐂𝐋𝐔𝐃𝐄𝐒:',
                    'CyberPanel Control Panel (LiteSpeed Powered)',
                    ' WORDPRESS Available',
                    ' 1-Click WordPress Installation',
                    'Free SSL Certificate (HTTPS)',
                    ' FTP Access & File Manager',
                    ' Easy DNS Management',
                    'Webmail Support',
                    'Access & Error Logs',
                    'IPv4 & IPv6 Support',
                    'Hosted on High-Speed SSD Servers',
                    'DDoS Protection & Basic Firewall',
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
                name: 'Basic Discord Bot',
                price: 0.50,
                link: 'https://billing.hexonode.com/products/discord-bot/basic-discord-bot',
                features: [
                    '512MB RAM',
                    '50 % CPU',
                    '2gb NVME',
                    '24/7 Uptime',
                    'Basic Support'
                ]
            },
            {
                name: 'PREMIUM DISCORD BOT',
                price: 2.00,
                link: 'https://billing.hexonode.com/products/discord-bot/premium-discord-bot',
                features: [
                    '2GB RAM',
                    '100 % CPU',
                    '6GB NVME',
                    '24/7 Uptime',
                    'Premium Support',
                ]
            },
            {
                name: 'ULTRA DISCORD BOT',
                price: 5.00,
                link: 'https://billing.hexonode.com/products/discord-bot/ultra-discord-bot',
                features: [
                    '8GB RAM',
                    '200 % CPU',
                    '15GB NVME',
                    '24/7 UPTIME',
                    'ULTRA PRIORITY SUPPORT'
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