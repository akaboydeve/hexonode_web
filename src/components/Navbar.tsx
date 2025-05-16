"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Server, CreditCard, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700 fixed w-full z-50" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Server className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold text-white">HexoNode</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
            <a 
              href="/#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Services
            </a>
            <a 
              href="/#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Features
            </a>
            <a 
              href="/#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Pricing
            </a>
            <a 
              href="/#locations" 
              onClick={(e) => scrollToSection(e, 'locations')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Locations
            </a>
            <Link href="/contactus" className="text-gray-300 hover:text-purple-400 transition-colors">Contact Us</Link>
            <a
              href="https://billing.hexonode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition-all transform hover:scale-105"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Client / Billing
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Home</Link>
            <a 
              href="/#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className="block px-3 py-2 text-gray-300 hover:text-purple-400"
            >
              Services
            </a>
            <a 
              href="/#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="block px-3 py-2 text-gray-300 hover:text-purple-400"
            >
              Features
            </a>
            <a 
              href="/#pricing" 
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="block px-3 py-2 text-gray-300 hover:text-purple-400"
            >
              Pricing
            </a>
            <a 
              href="/#locations" 
              onClick={(e) => scrollToSection(e, 'locations')}
              className="block px-3 py-2 text-gray-300 hover:text-purple-400"
            >
              Locations
            </a>
            <Link href="/contactus" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Contact Us</Link>
            <a
              href="https://billing.hexonode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-500 text-center"
            >
              <CreditCard className="w-4 h-4 mr-2 inline" />
              Client / Billing
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;