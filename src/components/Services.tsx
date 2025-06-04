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
    link: '/services/games',
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
    backgroundImage: 'https://i.postimg.cc/kgMDkd53/image.png'
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
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 overflow-hidden group"
              style={service.backgroundImage ? { backgroundImage: `url(${service.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            >
              <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-90 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="text-purple-400">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-gray-300 flex-grow">{service.description}</p>
                <div className="mt-auto pt-6 flex flex-col space-y-3">
                  <a
                    href={service.link}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-500 text-sm font-bold rounded-lg text-white bg-purple-600/90 hover:bg-purple-700 hover:border-purple-400 transition-all duration-200 shadow-lg hover:shadow-purple-500/20"
                    {...(service.title === 'Game Servers' ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    Get Started
                  </a>
                  <a
                    href={service.link}
                    className="text-purple-300 font-medium text-sm hover:text-purple-400 transition-colors duration-200 text-center"
                    {...(service.title === 'Game Servers' ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;