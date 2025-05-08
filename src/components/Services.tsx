import React from 'react';
import { Server, Gamepad2, Bot, Globe2, HardDrive, Shield } from 'lucide-react';
import serviceData from '@/data/serviceData';

const services = [
  {
    icon: <Gamepad2 className="h-8 w-8 " />,
    title: 'Minecraft Hosting',
    description: 'High-performance Minecraft servers with instant setup and mod support.',
    link: '/services/minecraft',
    backgroundImage: 'https://www.pluggedin.com/wp-content/uploads/2020/01/minecraft-review-image-1024x587.jpg'
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: 'Game Servers',
    description: 'Host your favorite games with low latency and high uptime.',
    link: serviceData.games.productLink,
    backgroundImage: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/49/1481196340-multiplayer-games.jpg'
  },
  {
    icon: <HardDrive className="h-8 w-8" />,
    title: 'VPS Hosting',
    description: 'Powerful virtual private servers with full root access.',
    link: '/services/vps',
    backgroundImage: 'https://maxcloudhost.com/blog/wp-content/uploads/2024/05/windows-vps-hosting.jpg'
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: 'Web Hosting',
    description: 'Fast and reliable web hosting for your websites.',
    link: '/services/web',
    backgroundImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'Discord Bot Hosting',
    description: 'Dedicated hosting for your Discord bots with 24/7 uptime.',
    link: '/services/discord',
    backgroundImage: 'https://blog.n8n.io/content/images/size/w1200/2024/04/discord-bot-1-copy-9.png'
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: 'Dedicated Servers',
    description: 'High-performance dedicated servers with full root access and premium hardware.',
    link: '/services/dedicated',
    backgroundImage: 'https://cdn.discordapp.com/attachments/1357638139816185916/1369360682360770620/dedicated-server-bg.png?ex=681b9404&is=681a4284&hm=7f7e442a89150db104e9c7f3aaeb8ecc274e70180f447fb13d370dded7f01c5c&'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive hosting solutions for all your needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 overflow-hidden group"
              style={service.backgroundImage ? { backgroundImage: `url(${service.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="text-purple-400">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-gray-300">{service.description}</p>
                <div className="mt-4 text-purple-300 font-medium">Learn more →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;