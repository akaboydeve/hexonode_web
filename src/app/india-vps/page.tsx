'use client'
import React, { useState, useEffect } from 'react';
import { Server, Cpu, HardDrive, Zap, Shield, CheckCircle, Home, X } from 'lucide-react';

function IndiaVPS() {
  const [selectedSection, setSelectedSection] = useState<string>('Entry Level');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = ['Entry Level', 'Intel Standard', 'Intel Performance', 'AMD Performance', 'Ryzen 9/EYPC 9'];

  type Plan = {
    name: string;
    price: string;
    period: string;
    specs: string[];
    features: string[];
    orderLink: string;
  };

  type PlansType = {
    [key: string]: Plan[];
  };

  const plans: PlansType = {
    'Entry Level': [
      {
        name: "Entry 16GB",
        price: "₹399",
        period: "/month",
        specs: [
          "3 vCores",
          "16 GB DDR4 RAM",
          "80 GB SSD Storage",
          "1GBPS Network Speed",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Noida Data Center",
          "Basic Ddos Protection",
          "24/7 Ticket Support",
          "Free Setup"
        ],
        features: ["Full Root Access", "99.9% Uptime", "24/7 Support", "DDoS Protection"],
        orderLink: "https://billing.hexonode.com/products/entry-level-vps-indianoida/16gb-vps-entry-level/checkout?plan=258&options="
      },
      {
        name: "Standard 32GB",
        price: "₹650",
        period: "/month",
        specs: [
          "5 vCores",
          "32 GB DDR4 RAM",
          "150 GB SSD Storage",
          "1 GBPS Network Speed",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Noida Data Center",
          "Basic Ddos Protection",
          "24/7 Ticket Support",
          "Free Setup"
        ],
        features: ["Full Root Access", "99.9% Uptime", "24/7 Support", "DDoS Protection"],
        orderLink: "https://billing.hexonode.com/products/entry-level-vps-indianoida/32gb-vps-entry-level/checkout?plan=259&options="
      },
      {
        name: "Performance 64GB",
        price: "₹1099",
        period: "/month",
        specs: [
          "8 vCores",
          "64 GB DDR4 RAM",
          "250 GB SSD Storage",
          "1 GBPS Network Speed",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Noida Data Center",
          "Basic Ddos Protection",
          "24/7 Ticket Support",
          "Free Setup"
        ],
        features: ["Full Root Access", "99.9% Uptime", "24/7 Support", "Basic DDoS Protection", "Free SSL"],
        orderLink: "https://billing.hexonode.com/products/entry-level-vps-indianoida/64gb-vps-entry-level/checkout?plan=260&options="
      }
    ],
    'Intel Standard': [
      {
        name: "Standard Mini",
        price: "₹750",
        period: "/month",
        specs: [
          "2 vCores",
          "2.4 GHz to 3 GHz Intel XEON V4",
          "8 GB DDR4 RAM",
          "80 GB NVMe SSD Storage",
          "1GBPS Network Speed",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Basic Ddos Protection",
          "24/7 Ticket Support",
          "Free Setup"
        ],
        features: ["Full Root Access", "99.9% Uptime", "24/7 Support", "DDoS Protection"],
        orderLink: "https://billing.hexonode.com/products/india-vps-budget/8gb-budget-vps/checkout?plan=257&options="
      },
      {
        name: "Standard Starter",
        price: "₹1,099",
        period: "/month",
        specs: [
          "4 vCores",
          "2.4 GHz to 3.3 GHz Intel Xeon E5-2680 V4",
          "32 GB DDR4 RAM",
          "400 GB NVMe SSD Storage",
          "500 Mbps Network Speed",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Basic Ddos Protection",
          "24/7 Ticket Support",
          "Free Setup"
        ],
        features: ["Full Root Access", "99.9% Uptime", "24/7 Support", "DDoS Protection"],
        orderLink: "https://billing.hexonode.com/products/india-vps-budget/32gb-vps-india-budeget"
      },
      {
        name: "Standard Extreme",
        price: "₹1,800",
        period: "/month",
        specs: [
          "8 vCores",
          "2.4 GHz to 3.3 GHz Intel Xeon V4",
          "64 GB DDR4 RAM",
          "500 GB NVMe SSD Storage",
          "500 Mbps Network Speed",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Basic Ddos Protection",
          "24/7 Ticket Support",
          "Free Setup"
        ],
        features: ["Full Root Access", "99.9% Uptime", "24/7 Support", "Basic DDoS Protection", "Free SSL"],
        orderLink: "https://billing.hexonode.com/products/india-vps-budget/64gb-vps-india-budeget"
      }
    ],
    'Intel Performance': [
      {
        name: "Performance Basic",
        price: "₹899",
        period: "/month",
        specs: [
          "Intel Xeon E5-2667 V4",
          "4 vCores",
          "3.20 to 3.60 GHz",
          "16 GB DDR4 RAM",
          "50 GB NVMe/SSD Storage",
          "Bandwidth: Unmetered",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Basic DDoS Protection",
          "24/7 Ticket Support",
          "Free Setup",
          "Delivery Time 2 to 3 Hours"
        ],
        features: ["Full Root Access", "99.9% Uptime", "Priority Support", "Basic DDoS Protection", "Free SSL"],
        orderLink: "https://billing.hexonode.com/products/india-vps-premium/16gb-vps-india-premium"
      },
      {
        name: "Performance Advanced",
        price: "₹1,499",
        period: "/month",
        specs: [
          "Intel Xeon E5-2667 V4",
          "8 vCores",
          "3.20 to 3.60 GHz CPU",
          "32 GB DDR4 RAM",
          "100 GB NVMe/SSD Storage",
          "Bandwidth: Unmetered",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Basic DDoS Protection",
          "24/7 Ticket Support",
          "Free Setup",
          "Delivery Time 2 to 3 Hours"
        ],
        features: ["Full Root Access", "99.9% Uptime", "Priority Support", "Basic DDoS Protection", "Free SSL", "Daily Backups"],
        orderLink: "https://billing.hexonode.com/products/india-vps-premium/32gb-vps-india-premium"
      },
      {
        name: "Performance Elite",
        price: "₹2,099",
        period: "/month",
        specs: [
          "Intel Xeon E5-2667 V4",
          "10 vCores",
          "3.60 GHz CPU",
          "64 GB DDR4 RAM",
          "200 GB NVMe/SSD Storage",
          "Bandwidth: Unmetered",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Basic DDoS Protection",
          "24/7 Ticket Support",
          "Free Setup",
          "Delivery Time 2 to 3 Hours"
        ],
        features: ["Full Root Access", "99.9% Uptime", "Dedicated Support", "Basic DDoS Protection", "Free SSL", "Daily Backups", "Priority Support"],
        orderLink: "https://billing.hexonode.com/products/india-vps-premium/64gb-vps-india-premium"
      }
    ],
    'AMD Performance': [
      {
        name: "Performance Basic",
        price: "₹1,399",
        period: "/month",
        specs: [
          "DEDICATED PERFORMANCE 100%",
          "AMD EPYC Millan",
          "4 vCores",
          "16 GB DDR4 RAM",
          "50 GB NVMe/SSD Storage",
          "Bandwidth: Unmetered",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Basic DDoS Protection",
          "24/7 Ticket Support",
          "Free Setup",
          "Delivery Time 2 to 3 Hours"
        ],
        features: ["Full Root Access", "99.9% Uptime", "Priority Support", "Basic DDoS Protection", "Free SSL"],
        orderLink: "https://billing.hexonode.com/products/india-amd-performance-vps/16gb-amd-performance-vps/checkout?plan=254&options="
      },
      {
        name: "Performance Advanced",
        price: "₹1,999",
        period: "/month",
        specs: [
          "DEDICATED PERFORMANCE 100%",
          "AMD EPYC Millan",
          "8 vCores",
          "32 GB DDR4 RAM",
          "100 GB NVMe/SSD Storage",
          "Bandwidth: Unmetered",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Basic DDoS Protection",
          "24/7 Ticket Support",
          "Free Setup",
          "Delivery Time 2 to 3 Hours"
        ],
        features: ["Full Root Access", "99.9% Uptime", "Priority Support", "Basic DDoS Protection", "Free SSL", "Daily Backups"],
        orderLink: "https://billing.hexonode.com/products/india-amd-performance-vps/32gb-amd-performance-vps/checkout?plan=255&options="
      },
      {
        name: "Performance Elite",
        price: "₹3,300",
        period: "/month",
        specs: [
          "DEDICATED PERFORMANCE 100%",
          "AMD EPYC Millan",
          "16 vCores",
          "64 GB DDR4 RAM",
          "200 GB NVMe/SSD Storage",
          "Bandwidth: Unmetered",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Basic DDoS Protection",
          "24/7 Ticket Support",
          "Free Setup",
          "Delivery Time 2 to 3 Hours"
        ],
        features: ["Full Root Access", "99.9% Uptime", "Dedicated Support", "Basic DDoS Protection", "Free SSL", "Daily Backups", "Priority Support"],
        orderLink: "https://billing.hexonode.com/products/india-amd-performance-vps/64gb-amd-performance-vps/checkout?plan=256&options="
      }
    ],
    'Ryzen 9/EYPC 9': [
      {
        name: "Ryzen Power",
        price: "₹1,499",
        period: "/month",
        specs: [
          "RYZEN 9 OR AMD EYPC 9 SERIES",
          "4.0 GHz+",
          "4 vCores",
          "16 GB DDR5 RAM 5200 MHz",
          "100 GB NVMe SSD Storage",
          "1 Gbit Uplink",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Gaming Optimized DDoS Protection",
          "24/7 Ticket Support",
          "Free Setup",
          "Delivery Time 2 to 3 Hours"
        ],
        features: ["Full Root Access", "99.9% Uptime", "Gaming Support", "Gaming DDoS Protection", "Free SSL"],
        orderLink: "https://billing.hexonode.com/products/india-vps-ultra/16gb-vps-india-ultra"
      },
      {
        name: "Ryzen Ultimate",
        price: "₹2,999",
        period: "/month",
        specs: [
          "RYZEN 9 OR AMD EYPC 9 SERIES",
          "6 vCores",
          "4.0 GHz+",
          "32 GB DDR5 RAM 5200 MHz",
          "150 GB NVMe SSD Storage",
          "1 Gbit Uplink",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Gaming Optimized DDoS Protection",
          "24/7 Ticket Support",
          "Free Setup"
        ],
        features: ["Full Root Access", "99.9% Uptime", "Priority Gaming Support", "Gaming DDoS Protection", "Free SSL", "Daily Backups"],
        orderLink: "https://billing.hexonode.com/products/india-vps-ultra/32gb-vps-india-ultra"
      },
      {
        name: "Ryzen Extreme",
        price: "₹5,999",
        period: "/month",
        specs: [
          "RYZEN 9 OR AMD EYPC 9 SERIES",
          "8 vCores",
          "5.7 GHz",
          "64 GB DDR5 RAM 5200 MHz",
          "300 GB NVMe SSD Storage",
          "1 Gbit Uplink",
          "1 IPv4 Address",
          "Full Root Access",
          "KVM Virtualization",
          "99.9% Uptime SLA",
          "Mumbai Data Center",
          "Enterprise Gaming DDoS Protection",
          "24/7 Ticket Support",
          "Free Setup"
        ],
        features: ["Full Root Access", "99.9% Uptime", "Dedicated Gaming Support", "Enterprise Gaming DDoS Protection", "Free SSL", "Daily Backups", "Priority Support"],
        orderLink: "https://billing.hexonode.com/products/india-vps-ultra/64gb-vps-india-ultra"
      }
    ]
  };

  const goBackToHome = () => {
    window.location.href = '/';
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
      case 'Entry Level':
        return <Home className="w-5 h-5" />;
      case 'Intel Standard':
        return <Cpu className="w-5 h-5" />;
      case 'Intel Performance':
        return <Zap className="w-5 h-5" />;
      case 'AMD Performance':
        return <HardDrive className="w-5 h-5" />;
      case 'Ryzen 9/EYPC 9':
        return <Shield className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'Entry Level':
        return 'from-emerald-500 to-teal-500';
      case 'Intel Standard':
        return 'from-blue-500 to-cyan-500';
      case 'Intel Performance':
        return 'from-red-500 to-rose-500';
      case 'AMD Performance':
        return 'from-green-500 to-emerald-500';
      case 'Ryzen 9/EYPC 9':
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
              backgroundImage: 'url(https://i.postimg.cc/qRXGTkHM/image.png)'
            }}
          ></div>
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-slate-900/80"></div>
          {/* Additional gradient overlays for better visual effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/40 to-slate-900/60"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-6">
            <span className="text-3xl">🇮🇳</span>
            <span className="text-slate-300 text-sm">India VPS Hosting</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              India VPS
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            High-performance VPS hosting in India with different processor categories to match your needs
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
            {selectedSection === 'Entry Level' && (
              <div className="mb-8 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl max-w-2xl mx-auto">
                <p className="text-emerald-300 text-lg font-medium">
                  <span className="font-semibold">🖥️ Dedicated Hardware:</span> These machines run on our own dedicated hardware infrastructure
                </p>
              </div>
            )}
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
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            {plans[selectedSection].map((plan: Plan, index: number) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getSectionColor(selectedSection)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {getSectionIcon(selectedSection)}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Detailed Specs */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Detailed Specifications</h4>
                    <div className="space-y-3">
                      {plan.specs.map((spec: string, specIndex: number) => (
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
                      {plan.features.map((feature: string, featureIndex: number) => (
                        <span
                          key={featureIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
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
                    className="block w-full bg-gradient-to-r from-violet-500/20 to-purple-600/20 border border-violet-500/30 text-violet-300 font-semibold py-3 px-6 rounded-xl hover:from-violet-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 text-center group/button"
                  >
                    <span>Order Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Resources Notice */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <span className="text-2xl">💬</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Need More Resources?
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Looking for higher specifications or custom configurations? We have more powerful options available.
              </p>
              <a
                href="https://discord.gg/gwHZbEYk8T"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/25"
              >
                <span>💬</span>
                <span>Contact us on Discord</span>
              </a>
            </div>
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

export default IndiaVPS;
