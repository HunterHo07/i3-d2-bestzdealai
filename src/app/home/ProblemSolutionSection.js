'use client';

import { useEffect, useRef } from 'react';
import Card from '../components/ui/Card';

const ProblemSolutionSection = () => {
  const sectionRef = useRef(null);

  const problems = [
    {
      icon: "⏰",
      title: "Time-Consuming Price Comparison",
      description: "Spending hours browsing multiple stores and websites to find the best deals",
      stat: "73% of shoppers spend 2+ hours comparing prices"
    },
    {
      icon: "🔍",
      title: "Limited Local Options",
      description: "Missing out on great deals from local businesses that lack online visibility",
      stat: "68% can't find local alternatives online"
    },
    {
      icon: "💸",
      title: "Seller-Centric Marketplaces",
      description: "Existing platforms favor sellers, not buyers looking for the best value",
      stat: "Current platforms charge 8-15% seller fees"
    },
    {
      icon: "🤖",
      title: "No AI-Powered Deal Matching",
      description: "No smart platform that learns your preferences and finds optimal deals",
      stat: "Only 35% of businesses use AI for customer experience"
    }
  ];

  const solutions = [
    {
      icon: "📝",
      title: "Post Your Needs",
      description: "Simply describe what you want, set your budget, and add location preferences",
      benefit: "Save 2+ hours of searching time"
    },
    {
      icon: "🏆",
      title: "Sellers Compete",
      description: "Multiple sellers compete to offer you the best deal, not the other way around",
      benefit: "Get better prices through competition"
    },
    {
      icon: "🧠",
      title: "AI Ranks Offers",
      description: "Our AI evaluates offers based on value, trust, location, and your preferences",
      benefit: "Smart matching beyond just price"
    },
    {
      icon: "💬",
      title: "Real-Time Negotiation",
      description: "Chat with sellers, see photos, receipts, and negotiate the perfect deal",
      benefit: "Transparent and secure transactions"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">The Problem</span>
            <span className="text-white"> We Solve</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Traditional shopping is broken. We're fixing it with AI-powered reverse marketplace technology.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-red-400">
            😤 Current Shopping Frustrations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                variant="glass" 
                className="p-6 text-center hover:border-red-400/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {problem.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {problem.description}
                </p>
                <div className="text-xs text-red-400 font-medium bg-red-400/10 rounded-full px-3 py-1">
                  {problem.stat}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Arrow Transition */}
        <div className="flex justify-center mb-20">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-green-500 rounded-full 
                          flex items-center justify-center animate-pulse-glow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-cyan-400/30 rounded-full animate-spin" />
          </div>
        </div>

        {/* Solutions Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-green-400">
            ✨ Our Revolutionary Solution
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                variant="neon" 
                className="p-6 text-center hover:border-green-400/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {solution.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {solution.description}
                </p>
                <div className="text-xs text-green-400 font-medium bg-green-400/10 rounded-full px-3 py-1">
                  {solution.benefit}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 
                        rounded-full px-8 py-4 border border-green-500/30">
            <span className="text-2xl">🚀</span>
            <div className="text-left">
              <div className="text-lg font-semibold text-white">Ready to experience the future?</div>
              <div className="text-sm text-gray-400">Join thousands who've already made the switch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
