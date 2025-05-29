'use client';

import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BuyerPostForm from './BuyerPostForm';
import OfferBoard from './OfferBoard';
import DemoLevels from './DemoLevels';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DemoPage = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [demoState, setDemoState] = useState({
    buyerPost: null,
    offers: [],
    selectedOffer: null,
    chatMessages: [],
    isNegotiating: false
  });

  const demoLevels = [
    {
      id: 1,
      title: "Basic Demo",
      description: "Simple form submission and offer display",
      features: ["Post a request", "View sample offers", "Basic interaction"]
    },
    {
      id: 2,
      title: "Intermediate Demo", 
      description: "Multiple offers with AI ranking",
      features: ["AI-powered offer ranking", "Real-time updates", "Offer comparison"]
    },
    {
      id: 3,
      title: "Advanced Demo",
      description: "Full negotiation simulation",
      features: ["Live chat simulation", "File sharing", "Complete transaction flow"]
    }
  ];

  const resetDemo = () => {
    setDemoState({
      buyerPost: null,
      offers: [],
      selectedOffer: null,
      chatMessages: [],
      isNegotiating: false
    });
  };

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
    resetDemo();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      
      <main className="pt-16">
        {/* Demo Header */}
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="gradient-text">Live Demo</span>
                <span className="text-white"> Experience</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See BestzDealAi in action. Post a request, get offers, and experience 
                the future of reverse marketplace shopping.
              </p>
            </div>

            {/* Demo Level Selector */}
            <DemoLevels 
              levels={demoLevels}
              currentLevel={currentLevel}
              onLevelChange={handleLevelChange}
            />
          </div>
        </section>

        {/* Demo Interface */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Left Side - Buyer Interface */}
              <div className="space-y-6">
                <Card variant="neon" className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">
                      🛒 Buyer Interface
                    </h2>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-green-400">Live Demo</span>
                    </div>
                  </div>

                  <BuyerPostForm 
                    level={currentLevel}
                    onSubmit={(postData) => {
                      setDemoState(prev => ({
                        ...prev,
                        buyerPost: postData
                      }));
                    }}
                    demoState={demoState}
                  />
                </Card>

                {/* Demo Instructions */}
                <Card variant="glass" className="p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                    📋 How This Demo Works
                  </h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-cyan-400 font-bold">1.</span>
                      <span>Fill out the buyer request form with your needs</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-cyan-400 font-bold">2.</span>
                      <span>Watch as simulated sellers respond with offers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-cyan-400 font-bold">3.</span>
                      <span>See AI ranking and comparison features in action</span>
                    </div>
                    {currentLevel >= 3 && (
                      <div className="flex items-start space-x-3">
                        <span className="text-cyan-400 font-bold">4.</span>
                        <span>Experience live chat and negotiation simulation</span>
                      </div>
                    )}
                  </div>
                </Card>
              </div>

              {/* Right Side - Offer Board */}
              <div className="space-y-6">
                <Card variant="gradient" className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">
                      📊 Live Offer Board
                    </h2>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={resetDemo}
                    >
                      Reset Demo
                    </Button>
                  </div>

                  <OfferBoard 
                    level={currentLevel}
                    buyerPost={demoState.buyerPost}
                    offers={demoState.offers}
                    onOffersUpdate={(offers) => {
                      setDemoState(prev => ({
                        ...prev,
                        offers
                      }));
                    }}
                    onOfferSelect={(offer) => {
                      setDemoState(prev => ({
                        ...prev,
                        selectedOffer: offer,
                        isNegotiating: currentLevel >= 3
                      }));
                    }}
                  />
                </Card>

                {/* Demo Stats */}
                <Card variant="glass" className="p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-4">
                    📈 Demo Statistics
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">
                        {demoState.offers.length}
                      </div>
                      <div className="text-sm text-gray-400">Offers Received</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">
                        {demoState.buyerPost ? '1' : '0'}
                      </div>
                      <div className="text-sm text-gray-400">Active Requests</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">
                        {demoState.selectedOffer ? '1' : '0'}
                      </div>
                      <div className="text-sm text-gray-400">Selected Offers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">
                        {currentLevel}
                      </div>
                      <div className="text-sm text-gray-400">Demo Level</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Features Showcase */}
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What You're Experiencing
              </h2>
              <p className="text-lg text-gray-300">
                This demo showcases the core features of our AI-powered reverse marketplace
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card variant="glass" className="p-6 text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Matching</h3>
                <p className="text-sm text-gray-400">
                  Watch how our AI ranks offers based on value, trust, and your preferences
                </p>
              </Card>

              <Card variant="glass" className="p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Real-Time Updates</h3>
                <p className="text-sm text-gray-400">
                  See offers appear instantly as sellers respond to your requests
                </p>
              </Card>

              <Card variant="glass" className="p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Negotiation</h3>
                <p className="text-sm text-gray-400">
                  Experience secure chat and negotiation features (Level 3)
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card variant="neon" className="p-8" glow>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Getting Real Deals?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                This was just a demo. Sign up now to post real requests and get actual offers from verified sellers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Sign Up as Buyer (Free)
                </Button>
                <Button variant="secondary" size="lg">
                  Become a Seller
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DemoPage;
