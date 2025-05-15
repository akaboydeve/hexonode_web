'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ChevronRight, Cpu, Server, Zap, CheckCircle, ShieldCheck } from 'lucide-react';
import ParticlesComponent from '@/components/ui/particles';

interface Game {
  id: string;
  name: string;
  image: string;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  cpu: string;
  ram: string;
  storage: string;
}

const gamesData: Game[] = [
  { id: 'fivem', name: 'FiveM', image: 'https://i.postimg.cc/mgBJvqF1/image.png' },
  { id: 'ets2', name: 'Euro Truck Simulator 2', image: 'https://i.postimg.cc/BnNSk2ts/image.png' },
  { id: 'palworld', name: 'Palworld', image: 'https://i.postimg.cc/85phDRmH/image.png' },
  { id: 'ats', name: 'American Truck Simulator', image: 'https://i.postimg.cc/vBPMSymz/image.png' },
];

// Helper to generate random plans - replace with your actual plan data
const generateRandomPlans = (gameName: string): Plan[] => {
  const plans: Plan[] = [];
  const planNames = ['Starter', 'Basic', 'Pro', 'Advanced', 'Elite', 'Ultimate', 'Mega', 'Ultra'];
  const cpus = ['Ryzen 9 5900X', 'Ryzen 9 5950X', 'Ryzen 9 7900X', 'Ryzen 9 7950X'];
  const rams = ['4GB DDR4', '8GB DDR4', '16GB DDR4', '32GB DDR4', '12GB DDR5', '24GB DDR5'];
  const storages = ['50GB NVMe', '100GB NVMe', '200GB NVMe', '400GB NVMe', '500GB NVMe'];

  for (let i = 0; i < 6; i++) {
    plans.push({
      id: `${gameName.toLowerCase().replace(/\s+/g, '-')}-plan-${i + 1}`,
      name: `${planNames[Math.floor(Math.random() * planNames.length)]} ${gameName} Plan`,
      price: "$0.00/mo",
      features: [],
      cpu: cpus[Math.floor(Math.random() * cpus.length)],
      ram: rams[Math.floor(Math.random() * rams.length)],
      storage: storages[Math.floor(Math.random() * storages.length)],
    });
  }
  return plans;
};

const GameHostingPage = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const plans = useMemo(() => {
    if (selectedGame) {
      return generateRandomPlans(selectedGame.name);
    }
    return [];
  }, [selectedGame]);

  const handleGameSelect = (game: Game) => {
    setSelectedGame(null); // Reset to trigger transition/animation if any
    setTimeout(() => {
      setSelectedGame(game);
      // Scroll to plans section - optional
      document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Short delay for effect
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ParticlesComponent /> 
      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse">
            Unlimited Slots for All Servers
          </h1>
        </header>

        {!selectedGame && (
          <section id="game-selection" className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Choose Your Game</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {gamesData.map((game) => (
                <div
                  key={game.id}
                  onClick={() => handleGameSelect(game)}
                  className="bg-gray-800/70 backdrop-blur-md rounded-xl p-6 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 border border-gray-700 hover:border-purple-500"
                >
                  <img src={game.image} alt={game.name} className="w-full h-40 object-cover mx-auto mb-4 rounded-lg shadow-md" />
                  <h3 className="text-xl font-semibold text-white">{game.name}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedGame && (
          <section id="plans-section" className="mb-12 md:mb-16 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn">
            <div className="flex items-center justify-between mb-8">
                <button 
                    onClick={() => setSelectedGame(null)} 
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center text-lg"
                >
                    <ChevronRight className="w-5 h-5 mr-2 rotate-180" /> Back to Game Selection
                </button>
                <h2 className="text-3xl font-bold text-white text-center">{selectedGame.name} Hosting Plans</h2>
                <div className="w-1/3"></div> {/* Spacer to balance the title */} 
            </div>
            
            <div className="text-center mb-8 p-4 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-lg border border-purple-500/50 shadow-lg">
              <p className="text-xl font-semibold text-yellow-400 flex items-center justify-center">
                <Cpu className="w-6 h-6 mr-3 text-yellow-300" /> All Servers Run on Ryzen 9 CPUs
              </p>
              <p className="text-lg text-gray-300 mt-1">Location: Germany (Dedicated Performance)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {plans.map((plan) => (
                <div key={plan.id} className="bg-gray-800/70 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-700 hover:border-purple-500/70 transition-all duration-300 transform hover:scale-105 flex flex-col">
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-2xl font-bold text-purple-400">{plan.name}</h3>
                        <Zap className="w-6 h-6 text-yellow-400" />
                    </div>
                    <p className="text-3xl font-extrabold text-white mb-4">{plan.price}</p>
                    <div className="space-y-2 mb-6">
                        <p className="text-gray-300 flex items-center"><Cpu size={18} className="mr-2 text-purple-400" /> {plan.cpu}</p>
                        <p className="text-gray-300 flex items-center"><Server size={18} className="mr-2 text-purple-400" /> {plan.ram} RAM</p>
                        <p className="text-gray-300 flex items-center"><HardDrive size={18} className="mr-2 text-purple-400" /> {plan.storage}</p>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    className="w-full mt-auto bg-gray-600 text-gray-400 font-semibold py-3 px-6 rounded-lg cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                  </button>
                </div>
              ))}
            </div>
            <style jsx>{`
              .animate-fadeIn {
                animation: fadeIn 0.5s ease-in-out forwards;
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </section>
        )}

        <div className="text-center mt-16 pt-8 border-t border-gray-700/50">
          <Link href="/services/minecraft" legacyBehavior>
            <a className="text-xl text-purple-400 hover:text-purple-300 hover:underline transition-colors duration-300 font-semibold inline-flex items-center group">
              Check Out Our Minecraft Hosting
              <ChevronRight className="w-6 h-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GameHostingPage;

// Helper component for HardDrive icon if not available directly or for consistency
const HardDrive = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="12" x2="2" y2="12"></line>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
    <line x1="6" y1="16" x2="6.01" y2="16"></line>
    <line x1="10" y1="16" x2="10.01" y2="16"></line>
  </svg>
); 