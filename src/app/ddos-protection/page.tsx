'use client';
import React, { use } from 'react';
import {
    Shield,
    Zap,
    Cloud,
    Server,
    ArrowRight,
    CheckCircle,
    Globe,
    Lock,
    Activity,
    Users,
    Clock,
    Star,
    ShieldPlus
} from 'lucide-react';

import GlobalHighlightBar from '@/components/GlobalHighlightBar';
import { useRouter } from 'next/navigation';


function DDoSProtectionPage() {
    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToPlan = () => {
        const element = document.getElementById('Plan');
        if (element) {
            const headerOffset = 80; // your desired offset in px
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const plans = [
        {
            name: "Basic Protection",
            price: "₹99",
            period: "/month",
            color: "from-green-500 to-emerald-600",
            shadowColor: "shadow-green-500/25",
            borderColor: "border-green-500/50",
            features: [
                "17 Tbps DDoS Protection",
                "2 Ports (TCP/UDP)",
                "5TB Bandwidth @ 1Gbps",
                "Backend: 2GB RAM, 1 CPU"
            ],
            buyLink: "https://discord.gg/gwHZbEYk8T",
            popular: false
        },
        {
            name: "Advanced Protection",
            price: "₹199",
            period: "/month",
            color: "from-yellow-500 to-orange-600",
            shadowColor: "shadow-yellow-500/25",
            borderColor: "border-yellow-500/50",
            features: [
                "17 Tbps DDoS Protection",
                "6 Ports (TCP/UDP)",
                "Unlimited Bandwidth @ 2Gbps (Shared)",
                "Backend: 3GB RAM, 2 CPUs"
            ],
            buyLink: "https://discord.gg/gwHZbEYk8T",
            popular: true
        },
        {
            name: "Pro Protection",
            price: "₹499",
            period: "/month",
            color: "from-blue-500 to-indigo-600",
            shadowColor: "shadow-blue-500/25",
            borderColor: "border-blue-500/50",
            features: [
                "17 Tbps DDoS Protection",
                "20 Custom Ports (TCP/UDP)",
                "Dedicated IP",
                "Unlimited Bandwidth @ 2Gbps (Dedicated)",
                "Backend: 8GB RAM, 4 CPUs"
            ],
            buyLink: "https://discord.gg/gwHZbEYk8T",
            popular: false
        }
    ];

    const features = [
        {
            icon: Shield,
            title: "17 Tbps Protection",
            description: "Industry-leading DDoS protection powered by OVH's global network infrastructure.",
            iconColor: "from-blue-400 to-cyan-500"
        },
        {
            icon: Zap,
            title: "Instant Setup",
            description: "Get your protection active within minutes with our automated deployment system.",
            iconColor: "from-yellow-400 to-orange-500"
        },
        {
            icon: Cloud,
            title: "Global Network",
            description: "Distributed protection across multiple data centers for maximum reliability.",
            iconColor: "from-purple-400 to-pink-500"
        },
        {
            icon: Activity,
            title: "Real-time Monitoring",
            description: "24/7 monitoring with instant threat detection and automatic mitigation.",
            iconColor: "from-emerald-400 to-teal-500"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white">


            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 z-50">
                <GlobalHighlightBar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <button
                            onClick={() => router.push('/')}
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

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => router.push('/')}
                                className="text-slate-300 hover:text-white transition-colors"
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-6">
                            <Shield className="w-4 h-4 text-blue-400" />
                            <span className="text-slate-300 text-sm">OVH Powered Protection</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r flex gap-2 justify-center items-center align-middle from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">

                                <ShieldPlus className="w-20 h-20 text-blue-400" />
                                DDoS Protection
                            </span>
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Services
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                            Enterprise Grade Security
                        </p>

                        <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
                            Protection for Minecraft, Game Servers, and Websites<br />
                            Powered by OVH 17 Tbps Protection | Instant Setup | 24/7 Discord Support
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                17 Tbps
                            </div>
                            <div className="text-slate-400 text-sm uppercase tracking-wider">Protection</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                24/7
                            </div>
                            <div className="text-slate-400 text-sm uppercase tracking-wider">Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                99.9%
                            </div>
                            <div className="text-slate-400 text-sm uppercase tracking-wider">Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                Instant
                            </div>
                            <div className="text-slate-400 text-sm uppercase tracking-wider">Setup</div>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={scrollToPlan}
                            className="bg-gradient-to-r mt-2 md:mt-8 from-blue-500 to-cyan-600 text-white font-semibold px-8 py-3 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                            Check Plans
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 relative bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                Why Choose Our Protection?
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Advanced security features designed to keep your services online
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="mb-4">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${feature.iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            <feature.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Plans Section */}
            <section id='Plan' className="py-20 relative bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 flex items-center justify-center">
                            <ShieldPlus className='w-12 h-12 inline-block mr-2' />
                            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                Protection Plans
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Choose the perfect protection level for your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border ${plan.borderColor} rounded-3xl p-8 hover:border-opacity-70 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${plan.shadowColor} ${plan.popular ? 'ring-2 ring-yellow-500/20' : ''}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                                            <Star className="w-4 h-4" />
                                            <span>Most Popular</span>
                                        </div>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    {/* Plan Header */}
                                    <div className="text-center mb-8">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg ${plan.shadowColor}`}>
                                            <Shield className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {plan.name}
                                        </h3>

                                        <div className="flex items-baseline justify-center space-x-1">
                                            <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                                                {plan.price}
                                            </span>
                                            <span className="text-slate-400 text-lg">{plan.period}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start space-x-3">
                                                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-300 text-sm leading-relaxed">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Buy Button */}
                                    <a
                                        href={plan.buyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${plan.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg ${plan.shadowColor} transition-all duration-300 group/button`}
                                    >
                                        <span>Buy Now</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-20 relative bg-gradient-to-b from-slate-800 to-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12">
                        <div className="mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
                                <Users className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                    💬 Need Custom Setup?
                                </span>
                            </h2>

                            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                                Join our Discord for instant help and personalized protection solutions
                            </p>
                        </div>

                        <a
                            href="https://discord.gg/gwHZbEYk8T"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 group"
                        >
                            <span className="text-lg">Join Discord Support</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-slate-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <button
                            onClick={scrollToTop}
                            className="flex items-center justify-center space-x-3 mb-6 mx-auto hover:scale-105 transition-transform duration-300"
                        >
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                                    <Server className="w-7 h-7 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Hexonode
                            </span>
                        </button>

                        <p className="text-slate-400 mb-8 text-lg max-w-md mx-auto">
                            Enterprise-grade DDoS protection for your digital infrastructure
                        </p>

                        <div className="pt-8 border-t border-slate-800 text-slate-500">
                            <p>&copy; 2024 Hexonode. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default DDoSProtectionPage;