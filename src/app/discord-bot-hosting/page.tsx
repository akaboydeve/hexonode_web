'use client';
import React, { useState, useEffect } from 'react';
import { Server, Bot, Cpu, HardDrive, Zap, CheckCircle, Home, Activity, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

function DiscordBotHosting() {
  const router = useRouter();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: "BASIC DISCORD BOT",
      price: "₹50",
      period: "/month",
      specs: [
        "50% CPU",
        "512MB DDR5 RAM",
        "2GB NVMe Drive",
        "24/7 Uptime",
        "Auto Restart",
        "Easy Deploy",
        "24/7 Support",
        "Free Setup"
      ],
      features: ["Auto Restart", "24/7 Online", "Easy Deploy"],
      iconColor: "from-blue-400 to-indigo-500",
      shadowColor: "shadow-blue-500/25",
      orderLink: "https://billing.hexonode.com/products/discord-bot/basic-discord-bot"
    },
    {
      name: "PREMIUM DISCORD BOT",
      price: "₹100",
      period: "/month",
      specs: [
        "100% CPU",
        "2GB DDR5 RAM",
        "6GB NVMe Drive",
        "24/7 Uptime",
        "Auto Restart",
        "Easy Deploy",
        "Priority Support",
        "Free Setup",
        "Advanced Monitoring"
      ],
      features: ["Auto Restart", "24/7 Online", "Easy Deploy", "Priority Support"],
      iconColor: "from-purple-400 to-violet-500",
      shadowColor: "shadow-purple-500/25",
      orderLink: "https://billing.hexonode.com/products/discord-bot/premium-discord-bot",
      popular: true
    },
    {
      name: "ULTIMATE DISCORD BOT",
      price: "₹150",
      period: "/month",
      specs: [
        "200% CPU",
        "8GB DDR5 RAM",
        "15GB NVMe Drive",
        "24/7 Uptime",
        "Auto Restart",
        "Easy Deploy",
        "Dedicated Support",
        "Free Setup",
        "Advanced Monitoring",
        "Custom Configuration"
      ],
      features: ["Auto Restart", "24/7 Online", "Easy Deploy", "Dedicated Support", "Custom Config"],
      iconColor: "from-emerald-400 to-teal-500",
      shadowColor: "shadow-emerald-500/25",
      orderLink: "https://billing.hexonode.com/products/discord-bot/ultra-discord-bot"
    }
  ];

  const goBackToHome = () => {
    router.push('/');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const features = [
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Deploy your Discord bot in seconds with our automated setup system.",
      iconColor: "from-yellow-400 to-orange-500"
    },
    {
      icon: Activity,
      title: "24/7 Monitoring",
      description: "Continuous monitoring ensures your bot stays online and responsive.",
      iconColor: "from-green-400 to-emerald-500"
    },
    {
      icon: Bot,
      title: "Auto Restart",
      description: "Automatic restart functionality keeps your bot running without interruption.",
      iconColor: "from-blue-400 to-cyan-500"
    }
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

            <button
              onClick={goBackToHome}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </button>

            {/* Payment Methods Button */}
            <button
              onClick={openPaymentModal}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              Payment Methods
            </button>
          </div>
        </div>
      </nav>

      {/* Payment Methods Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Payment Methods
                    </h2>
                    <p className="text-slate-400 text-sm">Choose your preferred payment option</p>
                  </div>
                </div>
                <button
                  onClick={closePaymentModal}
                  className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Indian Payment Methods */}
              <div className="group">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🇮🇳</span>
                  <h3 className="text-xl font-bold text-white">INDIAN PAYMENT METHODS</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <span className="text-white font-medium">UPI</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏦</span>
                      <span className="text-white font-medium">Bank Transfer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pakistani Payment Methods */}
              <div className="group">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🇵🇰</span>
                  <h3 className="text-xl font-bold text-white">PAKISTANI PAYMENT METHODS</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <span className="text-white font-medium">JazzCash</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💳</span>
                      <span className="text-white font-medium">EasyPaisa</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏦</span>
                      <span className="text-white font-medium">Bank Transfer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* International Payment Methods */}
              <div className="group">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🌍</span>
                  <h3 className="text-xl font-bold text-white">INTERNATIONAL PAYMENT METHODS</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💰</span>
                      <span className="text-white font-medium">PayPal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crypto Payment Methods */}
              <div className="group">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">₿</span>
                  <h3 className="text-xl font-bold text-white">CRYPTO METHODS</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💎</span>
                      <span className="text-white font-medium">USDT</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🪙</span>
                      <span className="text-white font-medium">Litecoin</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🐕</span>
                      <span className="text-white font-medium">Dogecoin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-700/50 p-6">
              {/* Disclaimer */}
              <div className="mb-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <p className="text-amber-300 text-sm text-center">
                  <span className="font-semibold">Disclaimer:</span> Only Indian and International payment methods are available on the website. For Pakistani and Crypto payments, please create a ticket on Discord.
                </p>
              </div>

              <button
                onClick={closePaymentModal}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/40 to-slate-900/60"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-6">
            <Bot className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 text-sm">Discord Bot Hosting</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
              Discord Bot
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Hosting Plans
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Reliable and affordable Discord bot hosting with 24/7 uptime and instant deployment
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why Choose Our Discord Bot Hosting?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to keep your Discord bot running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.iconColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
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

      {/* Plans Section */}
      <section className="py-16 relative bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Select the perfect hosting plan for your Discord bot
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border ${plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-slate-700/50'} rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg ${plan.shadowColor}`}>
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Detailed Specs */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Specifications</h4>
                    <div className="space-y-3">
                      {plan.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-base leading-relaxed">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Order Button */}
                  <a
                    href={plan.orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border border-blue-500/30 text-blue-300 hover:from-blue-500 hover:to-indigo-600 hover:text-white hover:border-transparent'} font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center group/button`}
                  >
                    <span>Order Now</span>
                  </a>
                </div>
              </div>
            ))}
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
              Powering the web with reliable and fast hosting solutions
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

export default DiscordBotHosting;