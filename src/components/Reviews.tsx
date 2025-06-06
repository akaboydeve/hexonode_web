import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Alex Thompson",
      role: "Game Server Owner",
      rating: 5,
      text: "The Minecraft server hosting is absolutely fantastic! The performance is incredible, and the support team helped me set up my modpack in minutes. Zero lag even with 50+ players online.",
      service: "Minecraft Hosting"
    },
    {
      name: "Sarah Chen",
      role: "Web Developer",
      rating: 5,
      text: "I've been using their VPS for my client projects, and I'm impressed with the reliability. The SSD storage is blazing fast, and the DDoS protection gives me peace of mind.",
      service: "VPS Hosting"
    },
    {
      name: "Michael Rodriguez",
      role: "Discord Bot Developer",
      rating: 5,
      text: "Best Discord bot hosting I've used. The uptime is perfect, and the support team is incredibly knowledgeable. They helped me optimize my bot's performance.",
      service: "Discord Bot Hosting"
    },
    {
      name: "Emma Wilson",
      role: "E-commerce Owner",
      rating: 5,
      text: "Switched our online store to HexoNode's web hosting, and the difference is night and day. Pages load instantly, and the SSL setup was seamless. Highly recommended!",
      service: "Web Hosting"
    },
    {
      name: "David Park",
      role: "Game Developer",
      rating: 5,
      text: "Running multiple game servers has never been easier. The control panel is intuitive, and the performance is consistently excellent. Great value for money.",
      service: "Game Hosting"
    },
    {
      name: "Lisa Anderson",
      role: "IT Manager",
      rating: 5,
      text: "We use their VPS for our development environment, and it's been rock solid. The backup system is reliable, and the support team responds within minutes.",
      service: "VPS Hosting"
    },
    {
      name: "James Wilson",
      role: "Minecraft Server Admin",
      rating: 5,
      text: "The Minecraft server performance is outstanding. Even with heavy mods and 100+ players, we experience no lag. The automatic backups are a lifesaver.",
      service: "Minecraft Hosting"
    },
    {
      name: "Sophie Martinez",
      role: "Discord Community Manager",
      rating: 5,
      text: "Our community bot has been running flawlessly for months. The hosting is reliable, and the support team is always available when we need them.",
      service: "Discord Bot Hosting"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-400">Trusted by thousands of satisfied customers worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                  <p className="text-sm text-purple-400">{review.role}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{review.text}</p>
              <span className="text-sm text-purple-400">{review.service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews; 