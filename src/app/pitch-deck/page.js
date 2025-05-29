'use client';

import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const PitchDeckPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "BestzDealAi",
      subtitle: "AI-Powered Reverse Marketplace",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-5xl font-bold gradient-text mb-4">BestzDealAi</h1>
          <p className="text-2xl text-gray-300 mb-8">
            "You post it. They deal it."
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The world's first AI-powered reverse marketplace where buyers post needs 
            and sellers compete to offer the best deals.
          </p>
        </div>
      )
    },
    {
      title: "The Problem",
      subtitle: "Current Shopping is Broken",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">For Buyers</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <span>73% spend 2+ hours comparing prices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <span>68% can't find local alternatives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <span>Limited negotiation power</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <span>No AI-powered deal matching</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">For Sellers</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <span>89% struggle with lead generation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <span>High marketplace fees (8-15%)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <span>Can't compete with big retailers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <span>Limited customer reach</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400">$6.2 Trillion</div>
            <div className="text-gray-400">Global e-commerce market with broken user experience</div>
          </div>
        </div>
      )
    },
    {
      title: "Our Solution",
      subtitle: "Reverse the Marketplace",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">Buyer-First Approach</h3>
            <p className="text-lg text-gray-300">
              Instead of browsing endless products, buyers post what they need and sellers compete
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="glass" className="p-6 text-center">
              <div className="text-3xl mb-4">📝</div>
              <h4 className="text-lg font-bold text-white mb-2">1. Post Request</h4>
              <p className="text-sm text-gray-400">Buyers describe what they need with budget and preferences</p>
            </Card>
            
            <Card variant="glass" className="p-6 text-center">
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="text-lg font-bold text-white mb-2">2. Sellers Compete</h4>
              <p className="text-sm text-gray-400">Multiple sellers submit competitive offers</p>
            </Card>
            
            <Card variant="glass" className="p-6 text-center">
              <div className="text-3xl mb-4">🧠</div>
              <h4 className="text-lg font-bold text-white mb-2">3. AI Matches</h4>
              <p className="text-sm text-gray-400">AI ranks offers by value, trust, and preferences</p>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: "Market Opportunity",
      subtitle: "$6.2T Global E-commerce Market",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Market Size</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">$6.2T</div>
                  <div className="text-gray-400">Global E-commerce (2023)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">10.4%</div>
                  <div className="text-gray-400">Annual Growth Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">2.14B</div>
                  <div className="text-gray-400">Online Shoppers</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Our Opportunity</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>No dominant reverse marketplace exists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>400M+ small businesses need better reach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>AI adoption in commerce is accelerating</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Local commerce: $4.6T market</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Business Model",
      subtitle: "Sustainable & Scalable Revenue",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="neon" className="p-6 text-center" glow>
              <div className="text-3xl mb-4">🆓</div>
              <h4 className="text-xl font-bold text-green-400 mb-2">Free for Buyers</h4>
              <p className="text-gray-400 mb-4">100% free to attract and retain users</p>
              <div className="text-2xl font-bold text-white">$0</div>
            </Card>
            
            <Card variant="glass" className="p-6 text-center">
              <div className="text-3xl mb-4">💼</div>
              <h4 className="text-xl font-bold text-purple-400 mb-2">Pro Sellers</h4>
              <p className="text-gray-400 mb-4">Monthly subscription for active sellers</p>
              <div className="text-2xl font-bold text-white">$9.99/mo</div>
            </Card>
            
            <Card variant="glass" className="p-6 text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-cyan-400 mb-2">Premium</h4>
              <p className="text-gray-400 mb-4">AI-boosted features for power sellers</p>
              <div className="text-2xl font-bold text-white">$29.99/mo</div>
            </Card>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Revenue Projections</h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-cyan-400">Year 1</div>
                <div className="text-lg text-white">$100K</div>
                <div className="text-sm text-gray-400">1K sellers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">Year 2</div>
                <div className="text-lg text-white">$2M</div>
                <div className="text-sm text-gray-400">10K sellers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">Year 3</div>
                <div className="text-lg text-white">$50M</div>
                <div className="text-sm text-gray-400">100K sellers</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Competitive Advantage",
      subtitle: "Why We'll Win",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Our Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <div className="font-semibold text-white">First Mover</div>
                    <div className="text-gray-400 text-sm">No major reverse marketplace exists</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <div className="font-semibold text-white">AI-Powered</div>
                    <div className="text-gray-400 text-sm">Advanced matching beyond price</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <div className="font-semibold text-white">Network Effects</div>
                    <div className="text-gray-400 text-sm">More buyers attract more sellers</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <div className="font-semibold text-white">Low Fees</div>
                    <div className="text-gray-400 text-sm">$9.99/mo vs 8-15% commission</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-6">Competition</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                  <span className="text-white">Amazon</span>
                  <span className="text-red-400">8-15% fees, seller-centric</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                  <span className="text-white">eBay</span>
                  <span className="text-red-400">10-12% fees, outdated UX</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                  <span className="text-white">Facebook</span>
                  <span className="text-red-400">No AI, safety concerns</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-500/20 rounded border border-green-500/50">
                  <span className="text-white font-bold">BestzDealAi</span>
                  <span className="text-green-400">Buyer-first, AI-powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Traction & Metrics",
      subtitle: "Early Success Indicators",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card variant="glass" className="p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-400">Beta Users</div>
            </Card>
            <Card variant="glass" className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-400">User Satisfaction</div>
            </Card>
            <Card variant="glass" className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$2M+</div>
              <div className="text-gray-400">GMV in Beta</div>
            </Card>
            <Card variant="glass" className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">4.9★</div>
              <div className="text-gray-400">App Store Rating</div>
            </Card>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>MVP launched and tested</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>AI algorithm proven effective</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Strong user retention (85%)</span>
                </div>
              </div>
              <div className="text-left space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Seller acquisition cost: $12</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Average deal size: $450</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Platform fee acceptance: 92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Funding Ask",
      subtitle: "Fuel Our Growth",
      content: (
        <div className="space-y-8 text-center">
          <div>
            <div className="text-6xl font-bold gradient-text mb-4">$2M</div>
            <div className="text-xl text-gray-300 mb-8">Seed Round</div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="glass" className="p-6">
              <div className="text-3xl mb-4">👥</div>
              <h4 className="text-lg font-bold text-white mb-2">Team Expansion</h4>
              <div className="text-2xl font-bold text-cyan-400 mb-2">40%</div>
              <p className="text-sm text-gray-400">Hire 8 engineers, 2 designers, 3 marketers</p>
            </Card>
            
            <Card variant="glass" className="p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="text-lg font-bold text-white mb-2">Product Development</h4>
              <div className="text-2xl font-bold text-purple-400 mb-2">35%</div>
              <p className="text-sm text-gray-400">Mobile apps, AI improvements, scaling</p>
            </Card>
            
            <Card variant="glass" className="p-6">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="text-lg font-bold text-white mb-2">Marketing & Growth</h4>
              <div className="text-2xl font-bold text-green-400 mb-2">25%</div>
              <p className="text-sm text-gray-400">User acquisition, partnerships, PR</p>
            </Card>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">18-Month Milestones</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-lg font-bold text-cyan-400">Month 6</div>
                <div className="text-sm text-gray-400">50K users, mobile apps launched</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-400">Month 12</div>
                <div className="text-sm text-gray-400">200K users, $1M ARR</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-400">Month 18</div>
                <div className="text-sm text-gray-400">500K users, Series A ready</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      
      <main className="pt-16">
        {/* Slide Container */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Card variant="neon" className="p-12 min-h-[600px] flex flex-col" glow>
              {/* Slide Header */}
              <div className="text-center mb-8">
                <div className="text-sm text-cyan-400 mb-2">
                  {currentSlide + 1} / {slides.length}
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg text-gray-400">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* Slide Content */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full">
                  {slides[currentSlide].content}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button 
                  variant="ghost" 
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  ← Previous
                </Button>
                
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-cyan-400 w-8' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="primary" 
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                >
                  Next →
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're looking for investors who share our vision of revolutionizing commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Schedule Meeting
              </Button>
              <Button variant="ghost" size="lg">
                Download Deck
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PitchDeckPage;
