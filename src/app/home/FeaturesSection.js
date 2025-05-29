'use client';

import { useState, useRef } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 'ai-matching',
      title: 'AI-Powered Smart Matching',
      description: 'Our advanced AI analyzes your preferences, location, and budget to match you with the perfect sellers.',
      icon: '🧠',
      benefits: [
        'Learns your shopping patterns',
        'Considers trust scores and ratings',
        'Optimizes for value, not just price',
        'Filters out irrelevant offers'
      ],
      demo: {
        input: 'Gaming laptop, $1200 budget, prefer local pickup',
        output: 'Found 5 matches • Best: $1,050 (Save $150) • 4.9★ seller • 2 miles away'
      }
    },
    {
      id: 'reverse-marketplace',
      title: 'Buyer-First Reverse Marketplace',
      description: 'Post what you want and let sellers compete for your business. No more endless searching.',
      icon: '🔄',
      benefits: [
        'Sellers come to you',
        'Multiple competitive offers',
        'Save hours of searching time',
        'Better negotiating position'
      ],
      demo: {
        input: 'Wedding photographer needed for June 15th',
        output: '8 photographers responded • Prices: $1,800-$3,200 • View portfolios & chat'
      }
    },
    {
      id: 'real-time',
      title: 'Real-Time Offer Management',
      description: 'See offers come in live, compare instantly, and negotiate in real-time with built-in chat.',
      icon: '⚡',
      benefits: [
        'Live offer notifications',
        'Instant price comparisons',
        'Built-in secure messaging',
        'Photo and document sharing'
      ],
      demo: {
        input: 'iPhone 15 Pro Max, unlocked, excellent condition',
        output: 'New offer: $899 (was $950) • Seller added photos • "Can meet today!"'
      }
    },
    {
      id: 'local-global',
      title: 'Local + Online Hybrid',
      description: 'Connect with local businesses and online sellers in one platform. Best of both worlds.',
      icon: '🌍',
      benefits: [
        'Support local businesses',
        'Access global inventory',
        'Flexible pickup/delivery',
        'Community-driven commerce'
      ],
      demo: {
        input: 'Vintage guitar, prefer to try before buying',
        output: '3 local shops + 12 online sellers • Schedule visits • Compare all options'
      }
    },
    {
      id: 'trust-safety',
      title: 'Trust & Safety First',
      description: 'Verified sellers, secure payments, and comprehensive rating system ensure safe transactions.',
      icon: '🛡️',
      benefits: [
        'Verified seller profiles',
        'Secure escrow payments',
        'Comprehensive review system',
        'Dispute resolution support'
      ],
      demo: {
        input: 'High-value electronics purchase',
        output: 'Seller verified ✓ • 4.8★ (127 reviews) • Secure payment available • Insured shipping'
      }
    },
    {
      id: 'mobile-first',
      title: 'Mobile-First Experience',
      description: 'Optimized for mobile with push notifications, location services, and offline capabilities.',
      icon: '📱',
      benefits: [
        'Native mobile experience',
        'Push notifications for offers',
        'Location-based matching',
        'Offline message queue'
      ],
      demo: {
        input: 'Quick post while commuting',
        output: 'Posted in 30 seconds • 2 offers received • Push notification sent'
      }
    }
  ];

  const currentFeature = features[activeFeature];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <div 
              key={i} 
              className="border border-cyan-400/20 animate-pulse"
              style={{ animationDelay: `${(i % 12) * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Powerful </span>
            <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need for smarter, faster, and more efficient deal-making in one platform.
          </p>
        </div>

        {/* Feature Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <Button
              key={feature.id}
              variant={activeFeature === index ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setActiveFeature(index)}
              className="transition-all duration-300"
            >
              <span className="text-lg mr-2">{feature.icon}</span>
              <span className="hidden sm:inline">{feature.title}</span>
              <span className="sm:hidden">{feature.title.split(' ')[0]}</span>
            </Button>
          ))}
        </div>

        {/* Active Feature Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Feature Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="text-6xl">{currentFeature.icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentFeature.title}
                </h3>
                <p className="text-lg text-gray-300">
                  {currentFeature.description}
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Benefits:</h4>
              {currentFeature.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Demo */}
          <Card variant="neon" className="p-6" glow>
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-cyan-400">Live Demo</h4>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>

              {/* Input Simulation */}
              <div className="bg-black/30 rounded-lg p-4 border border-gray-600/30">
                <div className="text-sm text-gray-400 mb-2">Your Input:</div>
                <div className="text-white font-medium">{currentFeature.demo.input}</div>
              </div>

              {/* Processing Animation */}
              <div className="flex items-center justify-center py-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" />
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>

              {/* Output Simulation */}
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
                <div className="text-sm text-gray-400 mb-2">AI Result:</div>
                <div className="text-white font-medium">{currentFeature.demo.output}</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Feature Grid Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.id}
              variant={activeFeature === index ? 'neon' : 'glass'}
              className={`p-6 cursor-pointer transition-all duration-300 ${
                activeFeature === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
                {activeFeature === index && (
                  <div className="mt-4 text-xs text-cyan-400 font-medium">
                    ← Currently Active
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card variant="gradient" className="inline-block p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience These Features?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Join thousands of smart shoppers who are already saving time and money with BestzDealAi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Try Live Demo
              </Button>
              <Button variant="ghost" size="lg">
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
