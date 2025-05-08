'use client';

import React from 'react';
import ParticlesComponent from '@/components/ui/particles';

const locations = [
  { 
    name: 'Singapore', 
    image: 'https://cdn.discordapp.com/attachments/1316355543803101205/1369350675347148810/1200px-Flag_of_Singapore.png?ex=681b8ab2&is=681a3932&hm=5849e59f1409169490630ebd78a9f88d37ebf4e7455d6a7911f53d2a21991bf0&'
  },
  { 
    name: 'USA', 
    image: 'https://cdn.discordapp.com/attachments/1316355543803101205/1369351034518110359/raster-illustration-usa-flag_483040-7328.png?ex=681b8b07&is=681a3987&hm=e587a8bb51538895c16496634fc5cc57e38bb50fab066a8c253495c1e4c3c29e&'
  },
  { 
    name: 'UK', 
    image: 'https://cdn.discordapp.com/attachments/1316355543803101205/1369351255926898828/illustration-uk-flag_53876-18166.png?ex=681b8b3c&is=681a39bc&hm=a4d54e403c44eb27f99accb024c51ecbe88ece5baa0268619642f6131204eafb&'
  },
  { 
    name: 'Germany', 
    image: 'https://cdn.discordapp.com/attachments/1316355543803101205/1369351772170223666/Germany-Flag.png?ex=681b8bb7&is=681a3a37&hm=5ba693be85ac909606bf7d91b3e1c8fb2be92000239ad8a12181b20ec87fe52c&'
  },
  { 
    name: 'France', 
    image: 'https://cdn.discordapp.com/attachments/1316355543803101205/1369352949280804944/Flag-France.png?ex=681b8cd0&is=681a3b50&hm=594265e19ad348bcb64ac8881447d557b18d712d53a3357df84261465c5a0fbd&'
  },
  { 
    name: 'Europe', 
    image: 'https://cdn.discordapp.com/attachments/1316355543803101205/1369353366756528138/europe-flag-uhd-4k-wallpaper.png?ex=681b8d33&is=681a3bb3&hm=b65c0df28fb0e48f9b2623fb92411917a820b0b3f5c6e207026e70fe0687730a&'
  },
  { 
    name: 'Netherlands', 
    image: 'https://cdn.discordapp.com/attachments/1316355543803101205/1369353547015262328/2560px-Flag_of_the_Netherlands.png?ex=681b8d5e&is=681a3bde&hm=fd56215be945e283bd663b471e5adef06a2a82fd3c9106bfa920cd38b749a94f&'
  },
  { 
    name: 'India', 
    image: 'https://cdn.discordapp.com/attachments/1316355543803101205/1369353702535594154/640px-Flag_of_India.png?ex=681b8d84&is=681a3c04&hm=8ee448e909357b30aedbc4c8ee07a6062f52715298e13ff686a3b37f4ad86871&'
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