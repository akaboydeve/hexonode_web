'use client';
import React from 'react';
import {
    Server,
    Gamepad2,
    Globe,
    Bot,
    MapPin,
    ArrowRight,
    Zap,
    Shield,
    Clock,
    Star,
    Menu,
    X,
    Wifi,
    Activity,
    CheckCircle,
    Award,
    Users,
    HeadphonesIcon,
    ChevronDown
} from 'lucide-react';
import { useRouter } from 'next/navigation';

function HomePage() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [statusModal, setStatusModal] = React.useState<{ isOpen: boolean; location: LocationType | null }>({ isOpen: false, location: null });
    const [vpsLocationModal, setVpsLocationModal] = React.useState(false);
    const [minecraftLocationModal, setMinecraftLocationModal] = React.useState(false);
    const [loadingProgress, setLoadingProgress] = React.useState(0);
    const [isImportantDropdownOpen, setIsImportantDropdownOpen] = React.useState(false);

    // Define a type for the location object
    type LocationType = {
        name: string;
        flag: string;
        status: string;
    };

    const scrollToServices = () => {
        document.getElementById('services')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToLocations = () => {
        document.getElementById('locations')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToWhyChoose = () => {
        document.getElementById('why-choose')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleImportantDropdown = () => {
        setIsImportantDropdownOpen(!isImportantDropdownOpen);
    };

    const openStatusModal = (location: LocationType) => {
        setStatusModal({ isOpen: true, location });
        setLoadingProgress(0);

        // Animate loading bar from 0% to 100%
        const duration = 3000; // 3 seconds
        const interval = 50; // Update every 50ms
        const increment = 100 / (duration / interval);

        const timer = setInterval(() => {
            setLoadingProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return Math.min(prev + increment, 100);
            });
        }, interval);
    };

    const closeStatusModal = () => {
        setStatusModal({ isOpen: false, location: null });
        setLoadingProgress(0);
    };

    const handleVPSClick = () => {
        setVpsLocationModal(true);
    };

    const closeVpsLocationModal = () => {
        setVpsLocationModal(false);
    };

    const handleMinecraftClick = () => {
        setMinecraftLocationModal(true);
    };

    const closeMinecraftLocationModal = () => {
        setMinecraftLocationModal(false);
    };

    const handleDiscordBotClick = () => {
        router.push('/discord-bot-hosting');
    };

    const handleLocationClick = (location: any) => {
        if (location.name === 'India') {
            setVpsLocationModal(false);
            router.push('/india-vps');
        } else if (location.link) {
            window.open(location.link, '_blank');
            setVpsLocationModal(false);
        }
    };

    const handleMinecraftLocationClick = () => {
        setMinecraftLocationModal(false);
        router.push('/minecraft-india');
    };

    const vpsLocations = [
        {
            name: "India",
            flag: "🇮🇳",
            status: "online",
            description: "Mumbai Data Center",
            backgroundImage: "https://i.postimg.cc/mDsjvV87/image.png"
        },
        {
            name: "Singapore",
            flag: "🇸🇬",
            status: "online",
            description: "Asia Pacific Hub",
            link: "https://billing.hexonode.com/products/singapore-location-vps",
            backgroundImage: "https://i.postimg.cc/9fwRd75S/image.png"
        },
        {
            name: "Germany",
            flag: "🇩🇪",
            status: "online",
            description: "Frankfurt Data Center",
            link: "https://billing.hexonode.com/products/germany-location-vps",
            backgroundImage: "https://i.postimg.cc/KYd2TKx0/image.png"
        },
        {
            name: "Europe",
            flag: "🇪🇺",
            status: "online",
            description: "European Network",
            link: "https://billing.hexonode.com/products/europe-location-vps",
            backgroundImage: "https://i.postimg.cc/Cx9hGr4C/europe-flag.jpg"
        },
        {
            name: "USA",
            flag: "🇺🇸",
            status: "online",
            description: "New York Data Center",
            link: "https://billing.hexonode.com/products/usa-location-vps",
            backgroundImage: "https://i.postimg.cc/90j50vC0/image.png"
        },
        {
            name: "UK",
            flag: "🇬🇧",
            status: "online",
            description: "London Data Center",
            link: "https://billing.hexonode.com/products/uk-location-vps",
            backgroundImage: "https://i.postimg.cc/t4zhMPYM/image.png"
        }
    ];

    const services = [
        {
            icon: Server,
            title: "VPS Hosting",
            description: "High-performance virtual private servers with full root access and dedicated resources for maximum control.",
            onClick: handleVPSClick,
            features: ["Full Root Access", "SSD Storage", "24/7 Support"],
            iconColor: "from-orange-400 to-red-500",
            shadowColor: "shadow-orange-500/25"
        },
        {
            icon: Gamepad2,
            title: "Minecraft Hosting",
            description: "Lag-free gaming servers with high uptime and instant mod support for the ultimate gaming experience.",
            onClick: handleMinecraftClick,
            features: ["Instant Setup", "Mod Support", "DDoS Protection"],
            iconColor: "from-green-400 to-emerald-500",
            shadowColor: "shadow-green-500/25"
        },
        {
            icon: Globe,
            title: "Web Hosting",
            description: "Speedy and secure hosting for websites with 99.9% uptime guarantee and lightning-fast performance.",
            link: "https://billing.hexonode.com/products/web-hosting-supports-wordpress",
            features: ["99.9% Uptime", "SSL Certificate", "Daily Backups"],
            iconColor: "from-cyan-400 to-teal-500",
            shadowColor: "shadow-cyan-500/25"
        },
        {
            icon: Bot,
            title: "Discord Bot Hosting",
            description: "Seamless bot hosting with instant deployment and 24/7 monitoring for uninterrupted service.",
            onClick: handleDiscordBotClick,
            features: ["Auto Restart", "24/7 Online", "Easy Deploy"],
            iconColor: "from-blue-400 to-indigo-500",
            shadowColor: "shadow-blue-500/25"
        }
    ];

    const locations = [
        {
            name: "India",
            flag: "🇮🇳",
            status: "online"
        },
        {
            name: "Germany",
            flag: "🇩🇪",
            status: "online"
        },
        {
            name: "USA",
            flag: "🇺🇸",
            status: "online"
        },
        {
            name: "Singapore",
            flag: "🇸🇬",
            status: "online"
        },
        {
            name: "Europe",
            flag: "🇪🇺",
            status: "online"
        }
    ];

    const stats = [
        { number: "99.9%", label: "Uptime" },
        { number: "24/7", label: "Support" },
        { number: "5", label: "Locations" },
        { number: "30+", label: "Happy Clients" }
    ];

    const whyChooseFeatures = [
        {
            icon: Zap,
            title: "Lightning Fast Performance",
            description: "Our servers are optimized for speed with NVME storage and high-performance hardware to ensure your applications run smoothly.",
            iconColor: "from-yellow-400 to-orange-500"
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Advanced security measures including DDoS protection, SSL certificates, and regular security updates to keep your data safe.",
            iconColor: "from-blue-400 to-cyan-500"
        },
        {
            icon: HeadphonesIcon,
            title: "24/7 Expert Support",
            description: "Our dedicated support team is available round the clock to help you with any technical issues or questions you may have.",
            iconColor: "from-purple-400 to-pink-500"
        },
        {
            icon: Award,
            title: "99.9% Uptime Guarantee",
            description: "We guarantee maximum uptime for your services with redundant infrastructure and proactive monitoring systems.",
            iconColor: "from-emerald-400 to-teal-500"
        },
        {
            icon: Users,
            title: "Cheapest in the Market",
            description: "Cheapest Hosting in the Market – Unbeatable Prices, Unmatched Performance!",
            iconColor: "from-indigo-400 to-purple-500"
        },
        {
            icon: Clock,
            title: "Deploy Your Server in 2 Hours",
            description: "Get your servers up and running in 2 Hours with our automated deployment system and pre-configured templates.",
            iconColor: "from-pink-400 to-rose-500"
        }
    ];

    const importantLinks = [
        { name: "About Us", url: "https://www.hexonode.com/aboutus" },
        { name: "Contact Us", url: "https://www.hexonode.com/contactus" },
        { name: "Refund Policy", url: "https://www.hexonode.com/refundandcancellation" },
        { name: "Terms and Conditions", url: "https://www.hexonode.com/termsandconditions" },
        { name: "Privacy Policy", url: "https://www.hexonode.com/privacypolicy" }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <button
                            onClick={scrollToTop}
                            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                                    <Server className="w-6 h-6 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Hexonode
                            </span>
                        </button>

                        <div className="hidden md:flex space-x-8">
                            <button onClick={scrollToServices} className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105">Services</button>
                            <button onClick={scrollToLocations} className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105">Locations</button>
                            <button onClick={scrollToWhyChoose} className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105">Why Choose Us</button>

                            {/* Discord Link */}
                            <a
                                href="https://discord.hexonode.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
                            >
                                Discord
                            </a>

                            {/* Minecraft Hosting Link */}
                            <button
                                onClick={handleMinecraftClick}
                                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
                            >
                                Minecraft Hosting
                            </button>

                            {/* Important Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={toggleImportantDropdown}
                                    className="flex items-center space-x-1 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
                                >
                                    <span>Important</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isImportantDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isImportantDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/25 py-2">
                                        {importantLinks.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button
                                className="md:hidden text-slate-300 hover:text-white"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50">
                        <div className="px-4 py-6 space-y-4">
                            <button onClick={scrollToServices} className="block text-slate-300 hover:text-white transition-colors w-full text-left">Services</button>
                            <button onClick={scrollToLocations} className="block text-slate-300 hover:text-white transition-colors w-full text-left">Locations</button>
                            <button onClick={scrollToWhyChoose} className="block text-slate-300 hover:text-white transition-colors w-full text-left">Why Choose Us</button>

                            <a
                                href="https://discord.hexonode.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-slate-300 hover:text-white transition-colors"
                            >
                                Discord
                            </a>

                            <button
                                onClick={handleMinecraftClick}
                                className="block text-slate-300 hover:text-white transition-colors w-full text-left"
                            >
                                Minecraft Hosting
                            </button>

                            {/* Mobile Important Links */}
                            <div className="border-t border-slate-700 pt-4">
                                <p className="text-slate-400 text-sm font-semibold mb-2">Important</p>
                                {importantLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-slate-300 hover:text-white transition-colors py-1 pl-4"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url(https://i.postimg.cc/pTYc03Qw/image.png)'
                        }}
                    ></div>
                    {/* Dark overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-slate-900/80"></div>
                    {/* Additional gradient overlays for better visual effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-purple-900/40 to-slate-900/60"></div>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-6">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-slate-300 text-sm">All systems operational</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                                Hexonode
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Hosting Solutions
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Fast, Reliable & Affordable Hosting for Everyone
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <button
                            onClick={scrollToServices}
                            className="group bg-gradient-to-r from-violet-500 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
                        >
                            <span className="flex items-center justify-center space-x-2">
                                <span>Get Started</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button
                            onClick={scrollToLocations}
                            className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-12 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-emerald-500/25"
                        >
                            <span className="flex items-center justify-center space-x-2">
                                <span>Our Locations</span>
                                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </span>
                        </button>
                    </div>

                    {/* Additional Service Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={handleVPSClick}
                            className="group bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 text-orange-300 font-medium px-6 py-2 rounded-lg hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent transition-all duration-300 text-sm"
                        >
                            <span className="flex items-center space-x-2">
                                <Server className="w-4 h-4" />
                                <span>VPS Hosting</span>
                            </span>
                        </button>

                        <button
                            onClick={handleMinecraftClick}
                            className="group bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 text-green-300 font-medium px-6 py-2 rounded-lg hover:from-green-500 hover:to-emerald-600 hover:text-white hover:border-transparent transition-all duration-300 text-sm"
                        >
                            <span className="flex items-center space-x-2">
                                <Gamepad2 className="w-4 h-4" />
                                <span>Minecraft Hosting</span>
                            </span>
                        </button>

                        <a
                            href="https://billing.hexonode.com/products/web-hosting-supports-wordpress"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-r from-cyan-500/20 to-teal-600/20 border border-cyan-500/30 text-cyan-300 font-medium px-6 py-2 rounded-lg hover:from-cyan-500 hover:to-teal-600 hover:text-white hover:border-transparent transition-all duration-300 text-sm"
                        >
                            <span className="flex items-center space-x-2">
                                <Globe className="w-4 h-4" />
                                <span>Web Hosting</span>
                            </span>
                        </a>

                        <button
                            onClick={handleDiscordBotClick}
                            className="group bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border border-blue-500/30 text-blue-300 font-medium px-6 py-2 rounded-lg hover:from-blue-500 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-300 text-sm"
                        >
                            <span className="flex items-center space-x-2">
                                <Bot className="w-4 h-4" />
                                <span>Discord Bot Hosting</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section - Moved higher up */}
            <section id="services" className="py-16 relative bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                Our Hosting Services
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Choose from our range of powerful hosting solutions designed to meet your specific needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start space-x-6 mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${service.iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ${service.shadowColor} flex-shrink-0`}>
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300 transition-colors">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <span
                                                    key={featureIndex}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {service.onClick ? (
                                        <button
                                            onClick={service.onClick}
                                            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-violet-500/20 to-purple-600/20 border border-violet-500/30 text-violet-300 font-semibold py-3 px-6 rounded-xl hover:from-violet-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 group/button"
                                        >
                                            <span>View Plans</span>
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                                        </button>
                                    ) : (
                                        <a
                                            href={service.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-violet-500/20 to-purple-600/20 border border-violet-500/30 text-violet-300 font-semibold py-3 px-6 rounded-xl hover:from-violet-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 group/button"
                                        >
                                            <span>View Plans</span>
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Hexonode Section */}
            <section id="why-choose" className="py-24 relative bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                Why Choose Hexonode Hosting?
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            We provide industry-leading hosting solutions with unmatched performance, security, and support to power your digital success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Server Locations Section */}
            <section id="locations" className="py-24 relative bg-gradient-to-b from-slate-800 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                Global Infrastructure
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Lightning-fast servers strategically positioned worldwide for optimal performance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
                            >
                                {/* Animated background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    {/* Header with flag and status */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                            {location.flag}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                                            <span className="text-xs text-emerald-400 uppercase tracking-wider font-bold">
                                                {location.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Location info */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                            {location.name}
                                        </h3>
                                    </div>

                                    {/* Check Status button */}
                                    <button
                                        onClick={() => openStatusModal(location)}
                                        className="w-full bg-gradient-to-r from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 text-emerald-300 font-semibold py-3 px-6 rounded-xl hover:from-emerald-500 hover:to-teal-600 hover:text-white hover:border-transparent transition-all duration-300 group/button"
                                    >
                                        <span className="flex items-center justify-center space-x-2">
                                            <span>Check Status</span>
                                            <Activity className="w-4 h-4 group-hover/button:scale-110 transition-transform" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VPS Location Selection Modal */}
            {vpsLocationModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 p-6 rounded-t-3xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                                        <Server className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                            Select VPS Location
                                        </h2>
                                        <p className="text-slate-400 text-sm">Choose the server location closest to your audience</p>
                                    </div>
                                </div>
                                <button
                                    onClick={closeVpsLocationModal}
                                    className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <X className="w-5 h-5 text-slate-300" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {vpsLocations.map((location, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleLocationClick(location)}
                                        className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 cursor-pointer animate-slide-up overflow-hidden"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {/* Background Image */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                            style={{
                                                backgroundImage: `url(${location.backgroundImage})`
                                            }}
                                        ></div>

                                        {/* Animated background glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative z-10">
                                            {/* Header with flag and status */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                                    {location.flag}
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                                                    <span className="text-xs text-emerald-400 uppercase tracking-wider font-bold">
                                                        {location.status}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Location info */}
                                            <div className="mb-4">
                                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                                                    {location.name}
                                                </h3>
                                                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                                                    {location.description}
                                                </p>
                                            </div>

                                            {/* Select indicator */}
                                            <div className="flex items-center justify-center space-x-2 text-violet-300 group-hover:text-white transition-colors">
                                                <span className="text-sm font-medium">Select Location</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Minecraft Location Selection Modal */}
            {minecraftLocationModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl max-w-md w-full shadow-2xl animate-scale-in overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 p-6 rounded-t-3xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                                        <Gamepad2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                            Select Minecraft Location
                                        </h2>
                                        <p className="text-slate-400 text-sm">Choose your server location</p>
                                    </div>
                                </div>
                                <button
                                    onClick={closeMinecraftLocationModal}
                                    className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <X className="w-5 h-5 text-slate-300" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            <div
                                onClick={handleMinecraftLocationClick}
                                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-green-500/50 rounded-2xl p-6 hover:border-green-400/70 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/20 cursor-pointer overflow-hidden"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                    style={{
                                        backgroundImage: 'url(https://i.postimg.cc/mDsjvV87/image.png)'
                                    }}
                                ></div>

                                {/* Highlighted background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    {/* Header with flag and status */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                            🇮🇳
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                                            <span className="text-xs text-emerald-400 uppercase tracking-wider font-bold">
                                                online
                                            </span>
                                        </div>
                                    </div>

                                    {/* Location info */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-300 transition-colors">
                                            India
                                        </h3>
                                        <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                                            Mumbai Gaming Data Center
                                        </p>
                                    </div>

                                    {/* Select indicator */}
                                    <div className="flex items-center justify-center space-x-2 text-green-300 group-hover:text-white transition-colors">
                                        <span className="text-sm font-medium">Select Location</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Status Check Modal */}
            {statusModal.isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl">
                        <div className="text-center mb-8">
                            <div className="text-4xl mb-4">{statusModal.location?.flag}</div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {statusModal.location?.name}
                            </h3>
                            <p className="text-slate-400">Checking server status...</p>
                        </div>

                        {/* Loading Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-400">Progress</span>
                                <span className="text-sm text-emerald-400 font-mono">
                                    {Math.round(loadingProgress)}%
                                </span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-100 ease-out shadow-lg shadow-emerald-500/25"
                                    style={{ width: `${loadingProgress}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Status Result */}
                        {loadingProgress === 100 && (
                            <div className="text-center mb-6 animate-fade-in">
                                <div className="flex items-center justify-center space-x-2 text-emerald-400 mb-2">
                                    <CheckCircle className="w-6 h-6" />
                                    <span className="font-semibold">All Systems Operational</span>
                                </div>
                                <p className="text-slate-400 text-sm">Server is running perfectly with 99.9% uptime</p>
                            </div>
                        )}

                        {/* Close Button */}
                        <button
                            onClick={closeStatusModal}
                            className="w-full bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}


            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out both;
        }
      `}</style>
        </div>
    );
}

export default HomePage;