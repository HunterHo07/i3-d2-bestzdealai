'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HeroSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const heroRef = useRef(null);

  // Demo scenarios for the mini loop
  const demoScenarios = [
    {
      title: "Gaming Laptop",
      budget: "$1,200",
      offers: 3,
      bestPrice: "$1,050",
      savings: "$150"
    },
    {
      title: "iPhone 15 Pro",
      budget: "$1,000",
      offers: 5,
      bestPrice: "$899",
      savings: "$101"
    },
    {
      title: "Wedding Photography",
      budget: "$2,500",
      offers: 4,
      bestPrice: "$2,200",
      savings: "$300"
    }
  ];

  // Auto-cycle through demo scenarios
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoScenarios.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Floating animation for elements
  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.animate-float');
    elements?.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  const currentScenario = demoScenarios[currentDemo];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      
      {/* Matrix Effect Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-rain" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">You post it.</span>
                <br />
                <span className="text-white">They deal it.</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl">
                The world's first <span className="text-cyan-400 font-semibold">AI-powered reverse marketplace</span> where 
                sellers compete to give you the best deals.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>100% Free for Buyers</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>AI-Powered Matching</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Real-Time Offers</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" className="group">
                <span>Start Getting Deals</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              
              <Button variant="ghost" size="lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Watch Demo</span>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">10K+</div>
                <div>Happy Buyers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">5K+</div>
                <div>Active Sellers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">$2M+</div>
                <div>Deals Made</div>
              </div>
            </div>
          </div>

          {/* Right Side - Mini Demo Loop */}
          <div className="flex justify-center lg:justify-end">
            <Card variant="neon" className="w-full max-w-md p-6 space-y-6" glow>
              {/* Demo Header */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Live Demo</h3>
                <p className="text-sm text-gray-400">See how it works in real-time</p>
              </div>

              {/* Current Scenario */}
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{currentScenario.title}</span>
                    <span className="text-cyan-400 font-bold">{currentScenario.budget}</span>
                  </div>
                  <div className="text-sm text-gray-400">Budget posted by buyer</div>
                </div>

                {/* Offers Animation */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Offers received:</span>
                    <span className="text-green-400 font-semibold">{currentScenario.offers}</span>
                  </div>
                  
                  {/* Best Offer Highlight */}
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 
                                rounded-lg p-3 border border-green-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 font-medium">Best Offer:</span>
                      <span className="text-white font-bold text-lg">{currentScenario.bestPrice}</span>
                    </div>
                    <div className="text-sm text-green-300">
                      You save {currentScenario.savings}!
                    </div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center space-x-2 pt-2">
                  {demoScenarios.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentDemo 
                          ? 'bg-cyan-400 w-6' 
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
