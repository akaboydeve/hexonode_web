'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Server, Cpu, HardDrive, Zap, Shield, CheckCircle, Home, Gamepad2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

function MinecraftIndia() {
  const router = useRouter();
  const [selectedSection, setSelectedSection] = useState('Intel Budget');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = ['Intel Budget', 'Intel Performance', 'Ryzen 9'];

  const plans = {
    'Intel Budget': [
      {
        name: "1GB PROXY",
        price: "₹35",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "3.3 GHz",
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
          "3.3 GHz",
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
          "3.3 GHz",
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
          "3.3 GHz",
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
          "3.3 GHz",
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
          "3.3 GHz",
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
          "3.3 GHz",
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
          "3.3 GHz",
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
          "3.3 GHz",
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
    'Intel Performance': [
      {
        name: "1GB PROXY",
        price: "₹50",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "Intel® Xeon® Processor E5-2667 v4",
          "3.6 GHz",
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
          "Intel® Xeon® Processor E5-2667 v4",
          "3.6 GHz",
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
          "Intel® Xeon® Processor E5-2667 v4",
          "3.6 GHz",
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
        price: "₹300",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "Intel® Xeon® Processor E5-2667 v4",
          "3.6 GHz",
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
        price: "₹400",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "Intel® Xeon® Processor E5-2667 v4",
          "3.6 GHz",
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
        price: "₹600",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "Intel® Xeon® Processor E5-2667 v4",
          "3.6 GHz",
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
        price: "₹800",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "Intel® Xeon® Processor E5-2667 v4",
          "3.6 GHz",
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
        price: "₹1200",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "Intel® Xeon® Processor E5-2667 v4",
          "3.6 GHz",
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
        price: "₹1600",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "Intel® Xeon® Processor E5-2667 v4",
          "3.6 GHz",
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
        price: "₹1999",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "Intel® Xeon® Processor E5-2667 v4",
          "3.6 GHz",
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
        price: "₹999",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "AMD Ryzen™ 9 9950X 5.7 GHZ",
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
        price: "₹1800",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "AMD Ryzen™ 9 9950X 5.7 GHZ",
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
        price: "₹3500",
        period: "/month",
        specs: [
          "Unlimited Player Slots",
          "AMD Ryzen™ 9 9950X 5.7 GHZ",
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
          "AMD Ryzen™ 9 9950X 5.7 GHZ",
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
      case 'Intel Performance':
        return 'from-purple-500 to-violet-500';
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
          </div>
        </div>
      </nav>

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
            {plans[selectedSection as keyof typeof plans].map((plan, index) => (
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