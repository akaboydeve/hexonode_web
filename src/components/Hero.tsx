"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Server, Shield, Zap, Globe, Cpu, ChevronDown } from 'lucide-react';
// import { Link } from 'react-router-dom'; // Removed unused import
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";
import { motion } from 'framer-motion';

const Hero = () => {
  const features = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Quantum Infrastructure",
      description: "Powered by next-gen processors"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "AI-powered threat detection"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Instant deployment & scaling"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Edge Network",
      description: "Multi-region availability"
    },
  ];

  // Particles initialization
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo((): ISourceOptions => {
    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: ["#ffffff", "#a855f7", "#c084fc"],
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.5,
          straight: false,
          path: {
            enable: true,
            delay: {
              value: 0.1
            },
            options: {
              size: 5,
              draw: false,
              increment: 0.001
            }
          }
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.7,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false
          }
        },
        shape: {
          type: ["circle", "triangle", "polygon"],
          options: {
            polygon: {
              sides: 6
            }
          }
        },
        size: {
          value: { min: 1, max: 5 },
          random: true,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.1,
            sync: false
          }
        },
        glow: {
          enable: true,
          color: "#a855f7",
          radius: 2
        }
      },
      detectRetina: true,
    };
  }, []);

  const floatingShapesOptions = useMemo((): ISourceOptions => {
    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: -1
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#9333ea", "#a855f7", "#c084fc", "#6b21a8", "#4c1d95"],
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.8,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          value: 12,
        },
        opacity: {
          value: 0.8,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false
          }
        },
        shape: {
          type: ["triangle", "polygon", "circle"],
          options: {
            polygon: {
              sides: 6
            }
          }
        },
        size: {
          value: { min: 20, max: 40 },
          random: true,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.1,
            sync: false
          }
        },
        roll: {
          enable: true,
          speed: 4
        },
        wobble: {
          enable: true,
          distance: 40,
          speed: 6
        },
        glow: {
          enable: true,
          color: "#a855f7",
          radius: 4
        }
      },
      detectRetina: true,
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 via-purple-900/50 to-gray-900 text-white relative overflow-hidden">
      {/* Star Particles Background */}
      <Particles
        id="tsparticles-stars"
        init={particlesInit}
        className="absolute inset-0"
        options={particlesOptions}
      />

      {/* Floating Glowing Shapes */}
      <Particles
        id="tsparticles-shapes"
        init={particlesInit}
        className="absolute inset-0"
        options={floatingShapesOptions}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-purple-600/20 blur-3xl -z-10"></div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 inline-block"
              >
                Next-Gen
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white inline-block"
              >
                Hosting Solutions
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Experience the future of hosting with our quantum-powered infrastructure.
              Unmatched performance, security, and innovation at your fingertips.
            </motion.p>
          </motion.div>
          <div className='md:hidden'>
            <div className="pt-4 flex flex-col items-center space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="w-full max-w-md bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('location')}
                className="w-full max-w-md bg-gray-700/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/50 hover:border-purple-500/50"
              >
                Our Locations
              </motion.button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group flex items-start space-x-4 bg-gray-800/30 backdrop-blur-xl p-5 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-white font-semibold">System Status</span>
                  </div>
                  <span className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-medium backdrop-blur-sm">All Systems Operational</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="text-gray-400 text-sm mb-1">Uptime</div>
                    <div className="text-2xl font-bold text-white">99.99%</div>
                    <div className="mt-2 h-1 bg-gray-600/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '99.99%' }}></div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="text-gray-400 text-sm mb-1">Response Time</div>
                    <div className="text-2xl font-bold text-white">&lt;10ms</div>
                    <div className="mt-2 h-1 bg-gray-600/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </motion.div>
                </div>

                <div className="pt-4 flex flex-col items-center space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('services')}
                    className="w-full max-w-md bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Get Started Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('location')}
                    className="w-full max-w-md bg-gray-700/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/50 hover:border-purple-500/50"
                  >
                    Our Locations
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Downward Arrow */}
      <motion.div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => scrollToSection('services')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <ChevronDown className="w-8 h-8 mt-2 text-purple-400" />
          <span className="text-sm text-purple-400 mt-2">Scroll Down</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;