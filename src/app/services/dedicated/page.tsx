'use client';

import React from 'react';
import ParticlesComponent from '@/components/ui/particles';

const locations = [
  { 
    name: 'Singapore', 
    image: 'https://i.postimg.cc/Tw0Q5V5S/image.png'
  },
  { 
    name: 'USA', 
    image: 'https://i.postimg.cc/Xqw2NRcf/image.png'
  },
  { 
    name: 'UK', 
    image: 'https://i.postimg.cc/hvfdpThf/image.png'
  },
  { 
    name: 'Germany', 
    image: 'https://i.postimg.cc/DymkFgS8/image.png'
  },
  { 
    name: 'France', 
    image: 'https://i.postimg.cc/4NRL2QpD/image.png'
  },
  { 
    name: 'Europe', 
    image: 'https://i.postimg.cc/yY5dzW8C/image.png'
  },
  { 
    name: 'Netherlands', 
    image: 'https://i.postimg.cc/Wp0HTZ4M/image.png'
  },
  { 
    name: 'India', 
    image: 'https://i.postimg.cc/rpD72Fs3/image.png'
  }
];

const DedicatedPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ParticlesComponent />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Coming Soon Message */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-purple-500 mb-4 animate-pulse">Coming Soon</h1>
            <p className="text-xl text-gray-400">Our dedicated servers will be available shortly. Stay tuned!</p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="relative bg-gray-800 rounded-xl overflow-hidden group cursor-not-allowed"
              >
                {/* Location Image */}
                <div className="aspect-video bg-gray-700 relative">
                  {location.image ? (
                    <img 
                      src={location.image} 
                      alt={`${location.name} flag`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Image Coming Soon</span>
                    </div>
                  )}
                </div>
                
                {/* Location Name */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white text-center">{location.name}</h3>
                  <p className="text-purple-500 text-center mt-2">Coming Soon</p>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedPage; 