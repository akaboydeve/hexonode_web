// Define TypeScript interfaces
export type LocationCode = 'India' | 'Singapore' | 'US' | 'Europe' | 'Japan';

// Define LocationPricing interface without using mapped types
export interface LocationPricing {
    India: number;
    Singapore: number;
    US: number;
    Europe: number;
    Japan: number;
}

export interface PlanFeature {
    name: string;
    value: string;
}

export interface Plan {
    name: string;
    price: number; // Base price in USD
    tier?: 'budget' | 'premium' | 'ultra'; // Tier classification
    locationPricing: LocationPricing; // Different prices for different locations
    features: Array<string | PlanFeature>; // Can be either string array or array of name-value objects
}

export interface ServiceData {
    title: string;
    description: string;
    plans: Plan[];
    productLink: string; // Add product link property
}

export interface ServiceDataMap {
    [key: string]: ServiceData;
}

// Define the PricingNavProps interface
export interface PricingNavProps {
    activeService: string;
    setActiveService: (service: string) => void;
}

// Export service data
const serviceData: ServiceDataMap = {
    minecraft: {
        title: 'Minecraft Hosting Plans',
        description: 'High-performance Minecraft server hosting with instant setup',
        productLink: 'https://panel.hexonode.com/minecraft',
        plans: [
            // 2GB Plan - Budget
            {
                name: '2GB Plan - Budget',
                price: 1.60,
                tier: 'budget',
                locationPricing: {
                    India: 200,
                    Singapore: 1.60,
                    US: 1.60,
                    Europe: 1.60,
                    Japan: 1.60
                },
                features: [
                    '2GB RAM',
                    '1 vCPU Core',
                    '30GB SSD Storage',
                    'Unlimited Bandwidth',
                    'DDoS Protection',
                    '24/7 Support'
                ]
            },
            // 2GB Plan - Premium
            {
                name: '2GB Plan - Premium',
                price: 2.40,
                tier: 'premium',
                locationPricing: {
                    India: 150,
                    Singapore: 2.40,
                    US: 2.40,
                    Europe: 2.40,
                    Japan: 2.40
                },
                features: [
                    '2GB RAM',
                    '1 vCPU Core',
                    '30GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Advanced DDoS Protection',
                    'Priority Support',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },
            // 2GB Plan - Ultra
            {
                name: '2GB Plan - Ultra',
                price: 3.20,
                tier: 'ultra',
                locationPricing: {
                    India: 200,
                    Singapore: 3.20,
                    US: 3.20,
                    Europe: 3.20,
                    Japan: 3.20
                },
                features: [
                    '2GB RAM',
                    '1 vCPU Core',
                    '30GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Premium DDoS Protection',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 4GB Plan - Budget
            {
                name: '4GB Plan - Budget',
                price: 3.20,
                tier: 'budget',
                locationPricing: {
                    India: 200,
                    Singapore: 3.20,
                    US: 3.20,
                    Europe: 3.20,
                    Japan: 3.20
                },
                features: [
                    '4GB RAM',
                    '1 vCPU Core',
                    '50GB SSD Storage',
                    'Unlimited Bandwidth',
                    'DDoS Protection',
                    '24/7 Support'
                ]
            },
            // 4GB Plan - Premium
            {
                name: '4GB Plan - Premium',
                price: 4.80,
                tier: 'premium',
                locationPricing: {
                    India: 300,
                    Singapore: 4.80,
                    US: 4.80,
                    Europe: 4.80,
                    Japan: 4.80
                },
                features: [
                    '4GB RAM',
                    '1 vCPU Core',
                    '50GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Advanced DDoS Protection',
                    'Priority Support',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },
            // 4GB Plan - Ultra
            {
                name: '4GB Plan - Ultra',
                price: 6.40,
                tier: 'ultra',
                locationPricing: {
                    India: 400,
                    Singapore: 6.40,
                    US: 6.40,
                    Europe: 6.40,
                    Japan: 6.40
                },
                features: [
                    '4GB RAM',
                    '1 vCPU Core',
                    '50GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Premium DDoS Protection',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 8GB Plan - Budget
            {
                name: '8GB Plan - Budget',
                price: 6.40,
                tier: 'budget',
                locationPricing: {
                    India: 400,
                    Singapore: 6.40,
                    US: 6.40,
                    Europe: 6.40,
                    Japan: 6.40
                },
                features: [
                    '8GB RAM',
                    '3 vCPU Cores',
                    '80GB SSD Storage',
                    'Unlimited Bandwidth',
                    'DDoS Protection',
                    'Priority Support'
                ]
            },
            // 8GB Plan - Premium
            {
                name: '8GB Plan - Premium',
                price: 9.60,
                tier: 'premium',
                locationPricing: {
                    India: 600,
                    Singapore: 9.60,
                    US: 9.60,
                    Europe: 9.60,
                    Japan: 9.60
                },
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
            // 8GB Plan - Ultra
            {
                name: '8GB Plan - Ultra',
                price: 12.80,
                tier: 'ultra',
                locationPricing: {
                    India: 800,
                    Singapore: 12.80,
                    US: 12.80,
                    Europe: 12.80,
                    Japan: 12.80
                },
                features: [
                    '8GB RAM',
                    '3 vCPU Cores',
                    '80GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Premium DDoS Protection',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 16GB Plan - Budget
            {
                name: '16GB Plan - Budget',
                price: 12.80,
                tier: 'budget',
                locationPricing: {
                    India: 800,
                    Singapore: 12.80,
                    US: 12.80,
                    Europe: 12.80,
                    Japan: 12.80
                },
                features: [
                    '16GB RAM',
                    '4 vCPU Cores',
                    '160GB SSD Storage',
                    'Unlimited Bandwidth',
                    'DDoS Protection',
                    'Priority Support'
                ]
            },
            // 16GB Plan - Premium
            {
                name: '16GB Plan - Premium',
                price: 19.20,
                tier: 'premium',
                locationPricing: {
                    India: 1200,
                    Singapore: 19.20,
                    US: 19.20,
                    Europe: 19.20,
                    Japan: 19.20
                },
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
            // 16GB Plan - Ultra
            {
                name: '16GB Plan - Ultra',
                price: 25.60,
                tier: 'ultra',
                locationPricing: {
                    India: 1600,
                    Singapore: 25.60,
                    US: 25.60,
                    Europe: 25.60,
                    Japan: 25.60
                },
                features: [
                    '16GB RAM',
                    '4 vCPU Cores',
                    '160GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Premium DDoS Protection',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 32GB Plan - Budget
            {
                name: '32GB Plan - Budget',
                price: 25.60,
                tier: 'budget',
                locationPricing: {
                    India: 1600,
                    Singapore: 25.60,
                    US: 25.60,
                    Europe: 25.60,
                    Japan: 25.60
                },
                features: [
                    '32GB RAM',
                    '6 vCPU Cores',
                    '320GB SSD Storage',
                    'Unlimited Bandwidth',
                    'DDoS Protection',
                    'Priority Support'
                ]
            },
            // 32GB Plan - Premium
            {
                name: '32GB Plan - Premium',
                price: 38.40,
                tier: 'premium',
                locationPricing: {
                    India: 2400,
                    Singapore: 38.40,
                    US: 38.40,
                    Europe: 38.40,
                    Japan: 38.40
                },
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
            // 32GB Plan - Ultra
            {
                name: '32GB Plan - Ultra',
                price: 51.20,
                tier: 'ultra',
                locationPricing: {
                    India: 3200,
                    Singapore: 51.20,
                    US: 51.20,
                    Europe: 51.20,
                    Japan: 51.20
                },
                features: [
                    '32GB RAM',
                    '6 vCPU Cores',
                    '320GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Premium DDoS Protection',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 48GB Plan - Budget
            {
                name: '48GB Plan - Budget',
                price: 38.40,
                tier: 'budget',
                locationPricing: {
                    India: 2400,
                    Singapore: 38.40,
                    US: 38.40,
                    Europe: 38.40,
                    Japan: 38.40
                },
                features: [
                    '48GB RAM',
                    '8 vCPU Cores',
                    '480GB SSD Storage',
                    'Unlimited Bandwidth',
                    'DDoS Protection',
                    'Priority Support'
                ]
            },
            // 48GB Plan - Premium
            {
                name: '48GB Plan - Premium',
                price: 57.60,
                tier: 'premium',
                locationPricing: {
                    India: 3600,
                    Singapore: 57.60,
                    US: 57.60,
                    Europe: 57.60,
                    Japan: 57.60
                },
                features: [
                    '48GB RAM',
                    '8 vCPU Cores',
                    '480GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Advanced DDoS Protection',
                    'Priority Support',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },
            // 48GB Plan - Ultra
            {
                name: '48GB Plan - Ultra',
                price: 76.80,
                tier: 'ultra',
                locationPricing: {
                    India: 4800,
                    Singapore: 76.80,
                    US: 76.80,
                    Europe: 76.80,
                    Japan: 76.80
                },
                features: [
                    '48GB RAM',
                    '8 vCPU Cores',
                    '480GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Premium DDoS Protection',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 64GB Plan - Budget
            {
                name: '64GB Plan - Budget',
                price: 51.20,
                tier: 'budget',
                locationPricing: {
                    India: 3200,
                    Singapore: 51.20,
                    US: 51.20,
                    Europe: 51.20,
                    Japan: 51.20
                },
                features: [
                    '64GB RAM',
                    '10 vCPU Cores',
                    '640GB SSD Storage',
                    'Unlimited Bandwidth',
                    'DDoS Protection',
                    'Priority Support'
                ]
            },
            // 64GB Plan - Premium
            {
                name: '64GB Plan - Premium',
                price: 76.80,
                tier: 'premium',
                locationPricing: {
                    India: 4800,
                    Singapore: 76.80,
                    US: 76.80,
                    Europe: 76.80,
                    Japan: 76.80
                },
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
            },
            // 64GB Plan - Ultra
            {
                name: '64GB Plan - Ultra',
                price: 102.40,
                tier: 'ultra',
                locationPricing: {
                    India: 6400,
                    Singapore: 102.40,
                    US: 102.40,
                    Europe: 102.40,
                    Japan: 102.40
                },
                features: [
                    '64GB RAM',
                    '10 vCPU Cores',
                    '640GB SSD Storage',
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
    vps: {
        title: 'VPS Hosting Plans',
        description: 'Powerful virtual private servers with full root access',
        productLink: 'https://panel.hexonode.com/vps',
        plans: [
            // 2GB VPS - Budget
            {
                name: '2GB VPS - Budget',
                price: 3.00,
                tier: 'budget',
                locationPricing: {
                    India: 200,
                    Singapore: 3.00,
                    US: 3.00,
                    Europe: 3.00,
                    Japan: 3.00
                },
                features: [
                    '2GB RAM',
                    '1 vCPU',
                    '30GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    '99.9% Uptime'
                ]
            },
            // 2GB VPS - Premium
            {
                name: '2GB VPS - Premium',
                price: 4.50,
                tier: 'premium',
                locationPricing: {
                    India: 300,
                    Singapore: 4.50,
                    US: 4.50,
                    Europe: 4.50,
                    Japan: 4.50
                },
                features: [
                    '2GB RAM',
                    '1 vCPU',
                    '30GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    '99.9% Uptime',
                    'Priority Support',
                    'Enhanced Backups',
                    'Weekly Snapshots'
                ]
            },
            // 2GB VPS - Ultra
            {
                name: '2GB VPS - Ultra',
                price: 6.00,
                tier: 'ultra',
                locationPricing: {
                    India: 400,
                    Singapore: 6.00,
                    US: 6.00,
                    Europe: 6.00,
                    Japan: 6.00
                },
                features: [
                    '2GB RAM',
                    '1 vCPU',
                    '30GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    '99.99% Uptime',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    'Enhanced Security',
                    'Managed Service'
                ]
            },

            // 4GB VPS - Budget
            {
                name: '4GB VPS - Budget',
                price: 6.00,
                tier: 'budget',
                locationPricing: {
                    India: 400,
                    Singapore: 6.00,
                    US: 6.00,
                    Europe: 6.00,
                    Japan: 6.00
                },
                features: [
                    '4GB RAM',
                    '1 vCPU',
                    '50GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    '99.9% Uptime'
                ]
            },
            // 4GB VPS - Premium
            {
                name: '4GB VPS - Premium',
                price: 9.00,
                tier: 'premium',
                locationPricing: {
                    India: 600,
                    Singapore: 9.00,
                    US: 9.00,
                    Europe: 9.00,
                    Japan: 9.00
                },
                features: [
                    '4GB RAM',
                    '1 vCPU',
                    '50GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    '99.9% Uptime',
                    'Priority Support',
                    'Enhanced Backups',
                    'Weekly Snapshots'
                ]
            },
            // 4GB VPS - Ultra
            {
                name: '4GB VPS - Ultra',
                price: 12.00,
                tier: 'ultra',
                locationPricing: {
                    India: 800,
                    Singapore: 12.00,
                    US: 12.00,
                    Europe: 12.00,
                    Japan: 12.00
                },
                features: [
                    '4GB RAM',
                    '1 vCPU',
                    '50GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    '99.99% Uptime',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    'Enhanced Security',
                    'Managed Service'
                ]
            },

            // 6GB VPS - Ultra
            {
                name: '6GB VPS - Ultra',
                price: 18.00,
                tier: 'ultra',
                locationPricing: {
                    India: 1200,
                    Singapore: 18.00,
                    US: 18.00,
                    Europe: 18.00,
                    Japan: 18.00
                },
                features: [
                    '6GB RAM',
                    '2 vCPU',
                    '75GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    '99.99% Uptime',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    'Enhanced Security',
                    'Managed Service'
                ]
            },

            // 8GB VPS - Budget
            {
                name: '8GB VPS - Budget',
                price: 12.00,
                tier: 'budget',
                locationPricing: {
                    India: 800,
                    Singapore: 12.00,
                    US: 12.00,
                    Europe: 12.00,
                    Japan: 12.00
                },
                features: [
                    '8GB RAM',
                    '3 vCPU',
                    '100GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    'DDoS Protection'
                ]
            },
            // 8GB VPS - Premium
            {
                name: '8GB VPS - Premium',
                price: 18.00,
                tier: 'premium',
                locationPricing: {
                    India: 1200,
                    Singapore: 18.00,
                    US: 18.00,
                    Europe: 18.00,
                    Japan: 18.00
                },
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

            // 16GB VPS - Budget
            {
                name: '16GB VPS - Budget',
                price: 24.00,
                tier: 'budget',
                locationPricing: {
                    India: 1600,
                    Singapore: 24.00,
                    US: 24.00,
                    Europe: 24.00,
                    Japan: 24.00
                },
                features: [
                    '16GB RAM',
                    '4 vCPU',
                    '200GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    'DDoS Protection'
                ]
            },
            // 16GB VPS - Premium
            {
                name: '16GB VPS - Premium',
                price: 36.00,
                tier: 'premium',
                locationPricing: {
                    India: 2400,
                    Singapore: 36.00,
                    US: 36.00,
                    Europe: 36.00,
                    Japan: 36.00
                },
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
            // 16GB VPS - Ultra
            {
                name: '16GB VPS - Ultra',
                price: 48.00,
                tier: 'ultra',
                locationPricing: {
                    India: 3200,
                    Singapore: 48.00,
                    US: 48.00,
                    Europe: 48.00,
                    Japan: 48.00
                },
                features: [
                    '16GB RAM',
                    '4 vCPU',
                    '200GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    'DDoS Protection',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 32GB VPS - Budget
            {
                name: '32GB VPS - Budget',
                price: 48.00,
                tier: 'budget',
                locationPricing: {
                    India: 3200,
                    Singapore: 48.00,
                    US: 48.00,
                    Europe: 48.00,
                    Japan: 48.00
                },
                features: [
                    '32GB RAM',
                    '6 vCPU',
                    '400GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    'DDoS Protection'
                ]
            },
            // 32GB VPS - Premium
            {
                name: '32GB VPS - Premium',
                price: 72.00,
                tier: 'premium',
                locationPricing: {
                    India: 4800,
                    Singapore: 72.00,
                    US: 72.00,
                    Europe: 72.00,
                    Japan: 72.00
                },
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
            },
            // 32GB VPS - Ultra
            {
                name: '32GB VPS - Ultra',
                price: 96.00,
                tier: 'ultra',
                locationPricing: {
                    India: 6400,
                    Singapore: 96.00,
                    US: 96.00,
                    Europe: 96.00,
                    Japan: 96.00
                },
                features: [
                    '32GB RAM',
                    '6 vCPU',
                    '400GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    'DDoS Protection',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 48GB VPS - Budget
            {
                name: '48GB VPS - Budget',
                price: 72.00,
                tier: 'budget',
                locationPricing: {
                    India: 4800,
                    Singapore: 72.00,
                    US: 72.00,
                    Europe: 72.00,
                    Japan: 72.00
                },
                features: [
                    '48GB RAM',
                    '8 vCPU',
                    '600GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    'DDoS Protection'
                ]
            },
            // 48GB VPS - Premium
            {
                name: '48GB VPS - Premium',
                price: 108.00,
                tier: 'premium',
                locationPricing: {
                    India: 7200,
                    Singapore: 108.00,
                    US: 108.00,
                    Europe: 108.00,
                    Japan: 108.00
                },
                features: [
                    '48GB RAM',
                    '8 vCPU',
                    '600GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    'DDoS Protection',
                    'Priority Support',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },

            // 64GB VPS - Budget
            {
                name: '64GB VPS - Budget',
                price: 96.00,
                tier: 'budget',
                locationPricing: {
                    India: 6400,
                    Singapore: 96.00,
                    US: 96.00,
                    Europe: 96.00,
                    Japan: 96.00
                },
                features: [
                    '64GB RAM',
                    '10 vCPU',
                    '800GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    'DDoS Protection'
                ]
            },
            // 64GB VPS - Premium
            {
                name: '64GB VPS - Premium',
                price: 144.00,
                tier: 'premium',
                locationPricing: {
                    India: 9600,
                    Singapore: 144.00,
                    US: 144.00,
                    Europe: 144.00,
                    Japan: 144.00
                },
                features: [
                    '64GB RAM',
                    '10 vCPU',
                    '800GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    'DDoS Protection',
                    'Priority Support',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            }
        ]
    },
    web: {
        title: 'Web Hosting Plans',
        description: 'Fast and reliable web hosting solutions',
        productLink: 'https://panel.hexonode.com/web',
        plans: [
            {
                name: 'Starter',
                price: 2.99,
                locationPricing: {
                    India: 199,
                    Singapore: 2.99,
                    US: 2.99,
                    Europe: 2.99,
                    Japan: 2.99
                },
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
                locationPricing: {
                    India: 399,
                    Singapore: 5.99,
                    US: 5.99,
                    Europe: 5.99,
                    Japan: 5.99
                },
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
                locationPricing: {
                    India: 699,
                    Singapore: 9.99,
                    US: 9.99,
                    Europe: 9.99,
                    Japan: 9.99
                },
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
    games: {
        title: 'Game Server Hosting',
        description: 'Host your favorite games with low latency',
        productLink: 'https://panel.hexonode.com/games',
        plans: [
            // 2GB Game Server - Budget
            {
                name: '2GB Game Server - Budget',
                price: 1.60,
                tier: 'budget',
                locationPricing: {
                    India: 100,
                    Singapore: 1.60,
                    US: 1.60,
                    Europe: 1.60,
                    Japan: 1.60
                },
                features: [
                    '2GB RAM',
                    '1 vCPU',
                    '30GB Storage',
                    'DDoS Protection',
                    'Mod Support',
                    'Game Switch'
                ]
            },
            // 2GB Game Server - Premium
            {
                name: '2GB Game Server - Premium',
                price: 2.40,
                tier: 'premium',
                locationPricing: {
                    India: 150,
                    Singapore: 2.40,
                    US: 2.40,
                    Europe: 2.40,
                    Japan: 2.40
                },
                features: [
                    '2GB RAM',
                    '1 vCPU',
                    '30GB Storage',
                    'DDoS Protection',
                    'Mod Support',
                    'Game Switch',
                    'Priority Support',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },
            // 2GB Game Server - Ultra
            {
                name: '2GB Game Server - Ultra',
                price: 3.20,
                tier: 'ultra',
                locationPricing: {
                    India: 200,
                    Singapore: 3.20,
                    US: 3.20,
                    Europe: 3.20,
                    Japan: 3.20
                },
                features: [
                    '2GB RAM',
                    '1 vCPU',
                    '30GB Storage',
                    'DDoS Protection',
                    'Mod Support',
                    'Game Switch',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 4GB Game Server - Budget
            {
                name: '4GB Game Server - Budget',
                price: 3.20,
                tier: 'budget',
                locationPricing: {
                    India: 200,
                    Singapore: 3.20,
                    US: 3.20,
                    Europe: 3.20,
                    Japan: 3.20
                },
                features: [
                    '4GB RAM',
                    '1 vCPU',
                    '50GB Storage',
                    'DDoS Protection',
                    'Mod Support',
                    'Game Switch'
                ]
            },
            // 4GB Game Server - Premium
            {
                name: '4GB Game Server - Premium',
                price: 4.80,
                tier: 'premium',
                locationPricing: {
                    India: 300,
                    Singapore: 4.80,
                    US: 4.80,
                    Europe: 4.80,
                    Japan: 4.80
                },
                features: [
                    '4GB RAM',
                    '1 vCPU',
                    '50GB Storage',
                    'DDoS Protection',
                    'Mod Support',
                    'Game Switch',
                    'Priority Support',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },
            // 4GB Game Server - Ultra
            {
                name: '4GB Game Server - Ultra',
                price: 6.40,
                tier: 'ultra',
                locationPricing: {
                    India: 400,
                    Singapore: 6.40,
                    US: 6.40,
                    Europe: 6.40,
                    Japan: 6.40
                },
                features: [
                    '4GB RAM',
                    '1 vCPU',
                    '50GB Storage',
                    'DDoS Protection',
                    'Mod Support',
                    'Game Switch',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 8GB Game Server - Budget
            {
                name: '8GB Game Server - Budget',
                price: 6.40,
                tier: 'budget',
                locationPricing: {
                    India: 400,
                    Singapore: 6.40,
                    US: 6.40,
                    Europe: 6.40,
                    Japan: 6.40
                },
                features: [
                    '8GB RAM',
                    '3 vCPU',
                    '100GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods'
                ]
            },
            // 8GB Game Server - Premium
            {
                name: '8GB Game Server - Premium',
                price: 9.60,
                tier: 'premium',
                locationPricing: {
                    India: 600,
                    Singapore: 9.60,
                    US: 9.60,
                    Europe: 9.60,
                    Japan: 9.60
                },
                features: [
                    '8GB RAM',
                    '3 vCPU',
                    '100GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },
            // 8GB Game Server - Ultra
            {
                name: '8GB Game Server - Ultra',
                price: 12.80,
                tier: 'ultra',
                locationPricing: {
                    India: 800,
                    Singapore: 12.80,
                    US: 12.80,
                    Europe: 12.80,
                    Japan: 12.80
                },
                features: [
                    '8GB RAM',
                    '3 vCPU',
                    '100GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 16GB Game Server - Budget
            {
                name: '16GB Game Server - Budget',
                price: 12.80,
                tier: 'budget',
                locationPricing: {
                    India: 800,
                    Singapore: 12.80,
                    US: 12.80,
                    Europe: 12.80,
                    Japan: 12.80
                },
                features: [
                    '16GB RAM',
                    '4 vCPU',
                    '200GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods'
                ]
            },
            // 16GB Game Server - Premium
            {
                name: '16GB Game Server - Premium',
                price: 19.20,
                tier: 'premium',
                locationPricing: {
                    India: 1200,
                    Singapore: 19.20,
                    US: 19.20,
                    Europe: 19.20,
                    Japan: 19.20
                },
                features: [
                    '16GB RAM',
                    '4 vCPU',
                    '200GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },
            // 16GB Game Server - Ultra
            {
                name: '16GB Game Server - Ultra',
                price: 25.60,
                tier: 'ultra',
                locationPricing: {
                    India: 1600,
                    Singapore: 25.60,
                    US: 25.60,
                    Europe: 25.60,
                    Japan: 25.60
                },
                features: [
                    '16GB RAM',
                    '4 vCPU',
                    '200GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 32GB Game Server - Budget
            {
                name: '32GB Game Server - Budget',
                price: 25.60,
                tier: 'budget',
                locationPricing: {
                    India: 1600,
                    Singapore: 25.60,
                    US: 25.60,
                    Europe: 25.60,
                    Japan: 25.60
                },
                features: [
                    '32GB RAM',
                    '6 vCPU',
                    '400GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods'
                ]
            },
            // 32GB Game Server - Premium
            {
                name: '32GB Game Server - Premium',
                price: 38.40,
                tier: 'premium',
                locationPricing: {
                    India: 2400,
                    Singapore: 38.40,
                    US: 38.40,
                    Europe: 38.40,
                    Japan: 38.40
                },
                features: [
                    '32GB RAM',
                    '6 vCPU',
                    '400GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },
            // 32GB Game Server - Ultra
            {
                name: '32GB Game Server - Ultra',
                price: 51.20,
                tier: 'ultra',
                locationPricing: {
                    India: 3200,
                    Singapore: 51.20,
                    US: 51.20,
                    Europe: 51.20,
                    Japan: 51.20
                },
                features: [
                    '32GB RAM',
                    '6 vCPU',
                    '400GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 48GB Game Server - Budget
            {
                name: '48GB Game Server - Budget',
                price: 38.40,
                tier: 'budget',
                locationPricing: {
                    India: 2400,
                    Singapore: 38.40,
                    US: 38.40,
                    Europe: 38.40,
                    Japan: 38.40
                },
                features: [
                    '48GB RAM',
                    '8 vCPU',
                    '600GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods'
                ]
            },
            // 48GB Game Server - Premium
            {
                name: '48GB Game Server - Premium',
                price: 57.60,
                tier: 'premium',
                locationPricing: {
                    India: 3600,
                    Singapore: 57.60,
                    US: 57.60,
                    Europe: 57.60,
                    Japan: 57.60
                },
                features: [
                    '48GB RAM',
                    '8 vCPU',
                    '600GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },
            // 48GB Game Server - Ultra
            {
                name: '48GB Game Server - Ultra',
                price: 76.80,
                tier: 'ultra',
                locationPricing: {
                    India: 4800,
                    Singapore: 76.80,
                    US: 76.80,
                    Europe: 76.80,
                    Japan: 76.80
                },
                features: [
                    '48GB RAM',
                    '8 vCPU',
                    '600GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            },

            // 64GB Game Server - Budget
            {
                name: '64GB Game Server - Budget',
                price: 51.20,
                tier: 'budget',
                locationPricing: {
                    India: 3200,
                    Singapore: 51.20,
                    US: 51.20,
                    Europe: 51.20,
                    Japan: 51.20
                },
                features: [
                    '64GB RAM',
                    '10 vCPU',
                    '800GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods'
                ]
            },
            // 64GB Game Server - Premium
            {
                name: '64GB Game Server - Premium',
                price: 76.80,
                tier: 'premium',
                locationPricing: {
                    India: 4800,
                    Singapore: 76.80,
                    US: 76.80,
                    Europe: 76.80,
                    Japan: 76.80
                },
                features: [
                    '64GB RAM',
                    '10 vCPU',
                    '800GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods',
                    'Enhanced Backups',
                    '99.9% Uptime SLA'
                ]
            },
            // 64GB Game Server - Ultra
            {
                name: '64GB Game Server - Ultra',
                price: 102.40,
                tier: 'ultra',
                locationPricing: {
                    India: 6400,
                    Singapore: 102.40,
                    US: 102.40,
                    Europe: 102.40,
                    Japan: 102.40
                },
                features: [
                    '64GB RAM',
                    '10 vCPU',
                    '800GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods',
                    '24/7 Dedicated Support',
                    'Daily Backups',
                    '99.99% Uptime SLA',
                    'Enhanced Security'
                ]
            }
        ]
    },
    discord: {
        title: 'Discord Bot Hosting',
        description: 'Reliable hosting for your Discord bots',
        productLink: 'https://panel.hexonode.com/discord',
        plans: [
            {
                name: '1GB Bot',
                price: 0.40, // Approx equivalent of 30Rs
                locationPricing: {
                    India: 30, // 1GB * 30Rs
                    Singapore: 0.40,
                    US: 0.40,
                    Europe: 0.40,
                    Japan: 0.40
                },
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
                price: 0.80, // Approx equivalent of 60Rs
                locationPricing: {
                    India: 60, // 2GB * 30Rs
                    Singapore: 0.80,
                    US: 0.80,
                    Europe: 0.80,
                    Japan: 0.80
                },
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
                price: 1.60, // Approx equivalent of 120Rs
                locationPricing: {
                    India: 120, // 4GB * 30Rs
                    Singapore: 1.60,
                    US: 1.60,
                    Europe: 1.60,
                    Japan: 1.60
                },
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
        plans: [
            {
                name: 'Domain Registration',
                price: 24.00, // Yearly price instead of monthly
                tier: 'budget', // Change to budget tier
                locationPricing: {
                    India: 1800, // Yearly price
                    Singapore: 24.00,
                    US: 24.00,
                    Europe: 24.00,
                    Japan: 24.00
                },
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
                price: 36.00, // Premium yearly price
                tier: 'premium',
                locationPricing: {
                    India: 2700,
                    Singapore: 36.00,
                    US: 36.00,
                    Europe: 36.00,
                    Japan: 36.00
                },
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
                price: 48.00, // Ultra yearly price
                tier: 'ultra',
                locationPricing: {
                    India: 3600,
                    Singapore: 48.00,
                    US: 48.00,
                    Europe: 48.00,
                    Japan: 48.00
                },
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

export default serviceData; 
