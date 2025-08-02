'use client';
import React, { useState, useEffect } from 'react';
import { Server, Cpu, Zap, Shield, Home, Gamepad2, X } from 'lucide-react';
import { useRouter } from 'next/navigation';;

function MinecraftIndia() {
  const router = useRouter();
  const [selectedSection, setSelectedSection] = useState('Intel Budget');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = ['Intel Budget', 'AMD EPYC PERFORMANCE', 'Ryzen 9'];

  const plans = {
    'Intel Budget': [
      {
        name: "1GB PROXY",
        price: "₹35",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "2.4 to 3.3 GHz",
          "100% CPU",
          "1GB DDR4 RAM",
          "5GB NVMe SSD Storage",
          "1 Database",
          "1 Additional Port",
          "24/7 Ticket Support"
        ],
        color: "from-amber-600 to-yellow-700",
        orderLink: "https://billing.hexonode.com/products/india-budget-mc/1gb-india-budget-mc-proxy"
      },
      {
        name: "2GB COPPER",
        price: "₹70",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "2.4 to 3.3 GHz",
          "100% CPU",
          "2GB DDR4 RAM",
          "10GB NVMe SSD Storage",
          "1 Database",
          "1 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-orange-600 to-amber-700",
        orderLink: "https://billing.hexonode.com/products/india-budget-mc/2gb-india-budget-mc"
      },
      {
        name: "4GB BRONZE",
        price: "₹140",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "2.4 to 3.3 GHz",
          "200% CPU",
          "4GB DDR4 RAM",
          "20GB NVMe SSD Storage",
          "2 Database",
          "2 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-slate-400 to-slate-600",
        orderLink: "https://billing.hexonode.com/products/india-budget-mc/4gb-india-budget-mc"
      },
      {
        name: "8GB SILVER",
        price: "₹280",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "2.4 to 3.3 GHz",
          "200% CPU",
          "8GB DDR4 RAM",
          "50GB NVMe SSD Storage",
          "3 Database",
          "3 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-yellow-500 to-yellow-600",
        orderLink: "https://billing.hexonode.com/products/india-budget-mc/8-gb-india-budget-mc"
      },
      {
        name: "12GB GOLD",
        price: "₹400",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "2.4 to 3.3 GHz",
          "300% CPU",
          "12GB DDR4 RAM",
          "80GB NVMe SSD Storage",
          "4 Database",
          "4 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-gray-300 to-gray-500",
        orderLink: "https://billing.hexonode.com/products/india-budget-mc/12-gb-india-budget-mc"
      },
      {
        name: "16GB PLATINUM",
        price: "₹550",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "2.4 to 3.3 GHz",
          "400% CPU",
          "16GB DDR4 RAM",
          "100GB NVMe SSD Storage",
          "6 Database",
          "6 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-cyan-400 to-blue-500",
        orderLink: "https://billing.hexonode.com/products/india-budget-mc/16-gb-india-budget-mc"
      },
      {
        name: "24GB DIAMOND",
        price: "₹800",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "GET 2GB SERVER FOR FREE",
          "2.4 to 3.3 GHz",
          "500% CPU",
          "24GB DDR4 RAM",
          "150GB NVMe SSD Storage",
          "7 Database",
          "7 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-emerald-500 to-green-600",
        orderLink: "https://billing.hexonode.com/products/india-budget-mc/24gb-india-budget-mc"
      },
      {
        name: "32GB EMERALD",
        price: "₹1099",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "GET 4GB SERVER FOR FREE",
          "2.4 to 3.3 GHz",
          "Unlimited CPU { NO LIMIT} FAIR USAGE",
          "32GB DDR4 RAM",
          "200GB NVMe SSD Storage",
          "8 Database",
          "8 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-red-500 to-red-600",
        orderLink: "https://billing.hexonode.com/products/india-budget-mc/32-gb-india-budget-mc"
      },
      {
        name: "48GB RUBY",
        price: "₹1499",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "GET 6GB SERVER FOR FREE",
          "2.4 to 3.3 GHz",
          "Unlimited CPU { NO LIMIT} FAIR USAGE",
          "48GB DDR4 RAM",
          "300GB NVMe SSD Storage",
          "10 Database",
          "10 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-blue-600 to-indigo-700",
        orderLink: "https://billing.hexonode.com/products/india-budget-mc/48gb-india-budget-mc"
      }
    ],
    'AMD EPYC PERFORMANCE': [
      {
        name: "1GB PROXY",
        price: "₹50",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "3.7 GHz",
          "100% CPU",
          "1GB DDR4 RAM",
          "5GB NVMe SSD Storage",
          "1 Database",
          "1 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-amber-600 to-yellow-700",
        orderLink: "https://billing.hexonode.com/products/india-premium-mc/1gb-india-premium-mc-proxy"
      },
      {
        name: "2GB BRONZE",
        price: "₹100",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "3.7 GHz",
          "100% CPU",
          "2GB DDR4 RAM",
          "5GB NVMe SSD Storage",
          "2 Database",
          "2 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-orange-600 to-amber-700",
        orderLink: "https://billing.hexonode.com/products/india-premium-mc/2gb-india-premium-mc"
      },
      {
        name: "4GB SILVER",
        price: "₹200",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "3.7 GHz",
          "100% CPU",
          "4GB DDR4 RAM",
          "10GB NVMe SSD Storage",
          "3 Database",
          "3 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-slate-400 to-slate-600",
        orderLink: "https://billing.hexonode.com/products/india-premium-mc/4gb-india-premium-mc"
      },
      {
        name: "6GB GOLD",
        price: "₹350",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "3.7 GHz",
          "200% CPU",
          "6GB DDR4 RAM",
          "15GB NVMe SSD Storage",
          "3 Database",
          "3 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-yellow-500 to-yellow-600",
        orderLink: "https://billing.hexonode.com/products/india-premium-mc/6-gb-india-premium-mc"
      },
      {
        name: "8GB PLATINUM",
        price: "₹450",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "3.7 GHz",
          "200% CPU",
          "8GB DDR4 RAM",
          "20GB NVMe SSD Storage",
          "4 Database",
          "4 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-gray-300 to-gray-500",
        orderLink: "https://billing.hexonode.com/products/india-premium-mc/8gb-india-premium-mc"
      },
      {
        name: "12GB DIAMOND",
        price: "₹650",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "3.7 GHz",
          "300% CPU",
          "12GB DDR4 RAM",
          "30GB NVMe SSD Storage",
          "5 Database",
          "5 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-cyan-400 to-blue-500",
        orderLink: "https://billing.hexonode.com/products/india-premium-mc/12gb-india-premium-mc"
      },
      {
        name: "16GB EMERALD",
        price: "₹900",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "GET 2GB SERVER FOR FREE",
          "3.7 GHz",
          "400% CPU",
          "16GB DDR4 RAM",
          "80GB NVMe SSD Storage",
          "6 Database",
          "6 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-emerald-500 to-green-600",
        orderLink: "https://billing.hexonode.com/products/india-premium-mc/16gb-india-premium-mc"
      },
      {
        name: "24GB RUBY",
        price: "₹1400",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "GET 4GB SERVER FOR FREE",
          "3.7 GHz",
          "600% CPU",
          "24GB DDR4 RAM",
          "100GB NVMe SSD Storage",
          "7 Database",
          "7 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-red-500 to-red-600",
        orderLink: "https://billing.hexonode.com/products/india-premium-mc/24gb-india-premium-mc"
      },
      {
        name: "32GB SAPPHIRE",
        price: "₹1700",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "GET 6GB SERVER FOR FREE",
          "3.7 GHz",
          "Unlimited CPU { NO LIMIT} FAIR USAGE",
          "32GB DDR4 RAM",
          "150GB NVMe SSD Storage",
          "9 Database",
          "9 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-blue-600 to-indigo-700",
        orderLink: "https://billing.hexonode.com/products/india-premium-mc/32gb-india-premium-mc"
      },
      {
        name: "48GB OBSIDIAN",
        price: "₹2300",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "GET 8GB SERVER FOR FREE",
          "3.7 GHz",
          "Unlimited CPU { NO LIMIT} FAIR USAGE",
          "48GB DDR4 RAM",
          "160GB NVMe SSD Storage",
          "11 Database",
          "11 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-gray-800 to-black",
        orderLink: "https://billing.hexonode.com/products/india-premium-mc/48gb-premium-india"
      }
    ],
    'Ryzen 9': [
      {
        name: "8GB GOLD",
        price: "₹799",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "RYZEN 9 / EYPC 9 4.0ghz+",
          "5.7 GHZ",
          "200% CPU",
          "8GB DDR5 RAM ECC",
          "50GB NVMe SSD Storage",
          "3 Database",
          "3 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-yellow-500 to-yellow-600",
        orderLink: "https://billing.hexonode.com/products/india-ultra-mc/8gb-india-ultra-mc"
      },
      {
        name: "16GB DIAMOND",
        price: "₹1599",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "RYZEN 9 / EYPC 9 4.0ghz+",
          "400% CPU",
          "16GB DDR5 RAM ECC",
          "80GB NVMe SSD Storage",
          "5 Database",
          "5 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-cyan-400 to-blue-500",
        orderLink: "https://billing.hexonode.com/products/india-ultra-mc/16gb-india-ultra-mc"
      },
      {
        name: "32GB EMERALD",
        price: "₹2999",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "RYZEN 9 / EYPC 9 4.0ghz+",
          "UNLIMITED CPU",
          "32GB DDR5 RAM ECC",
          "150GB NVMe SSD Storage",
          "7 Database",
          "7 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-emerald-500 to-green-600",
        orderLink: "https://billing.hexonode.com/products/india-ultra-mc/32gb-india-ultra-mc"
      },
      {
        name: "44GB OBSIDIAN",
        price: "₹4800",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "RYZEN 9 / EYPC 9 4.0ghz+",
          "UNLIMITED CPU",
          "44GB DDR5 RAM ECC",
          "200GB NVMe SSD Storage",
          "9 Database",
          "9 Additional Ports",
          "24/7 Ticket Support"
        ],
        color: "from-gray-800 to-black",
        orderLink: "https://billing.hexonode.com/products/india-ultra-mc/44gb-india-ultra-mc"
      }
    ]
  };

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

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'Intel Budget':
        return <Cpu className="w-5 h-5" />;
      case 'Intel Performance':
        return <Zap className="w-5 h-5" />;
      case 'Ryzen 9':
        return <Shield className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'Intel Budget':
        return 'from-blue-500 to-cyan-500';
      case 'AMD EPYC PERFORMANCE':
        return 'from-red-500 to-rose-500';
      case 'Ryzen 9':
        return 'from-red-500 to-orange-500';
      default:
        return 'from-blue-500 to-cyan-500';
    }
  };

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
              backgroundImage: 'url(https://i.postimg.cc/brkgBzCT/image.png)'
            }}
          ></div>
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-slate-900/80"></div>
          {/* Additional gradient overlays for better visual effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-green-900/40 to-slate-900/60"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-6">
            <span className="text-3xl">🇮🇳</span>
            <Gamepad2 className="w-5 h-5 text-green-400" />
            <span className="text-slate-300 text-sm">India Minecraft Hosting</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
              Minecraft India
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Gaming Plans
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            High-performance Minecraft hosting in India with different processor categories for the ultimate gaming experience
          </p>
        </div>
      </section>

      {/* Section Selection */}
      <section className="py-16 relative bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Select Your Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setSelectedSection(section)}
                  className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${selectedSection === section
                    ? `bg-gradient-to-r ${getSectionColor(section)} text-white shadow-2xl`
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-slate-700/50'
                    }`}
                >
                  {getSectionIcon(section)}
                  <span>{section}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(plans as Record<string, typeof plans["Intel Budget"]>)[selectedSection].map((plan: typeof plans["Intel Budget"][0], index: number) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="mb-6">
                    <div className="space-y-2">
                      {plan.specs.map((spec: string, specIndex: number) => (
                        <div key={specIndex} className="flex items-start space-x-2">
                          <span className="text-green-400 text-sm mt-1">-</span>
                          <span className="text-slate-300 text-sm leading-relaxed">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Button */}
                  <a
                    href={plan.orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 text-green-300 font-semibold py-3 px-6 rounded-xl hover:from-green-500 hover:to-emerald-600 hover:text-white hover:border-transparent transition-all duration-300 text-center hover:shadow-lg hover:shadow-green-500/25"
                  >
                    Order now
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

export default MinecraftIndia;
