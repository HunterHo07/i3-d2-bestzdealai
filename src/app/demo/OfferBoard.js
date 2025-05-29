'use client';

import { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ChatSimulation from './ChatSimulation';
import { mockSellers, generateMockOffer } from '../../data/mockData';

const OfferBoard = ({ level, buyerPost, offers, onOffersUpdate, onOfferSelect }) => {
  const [isGeneratingOffers, setIsGeneratingOffers] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [selectedOfferForChat, setSelectedOfferForChat] = useState(null);
  const [showChat, setShowChat] = useState(false);

  // Handle chat functionality
  const handleChatOpen = (offer) => {
    setSelectedOfferForChat(offer);
    setShowChat(true);
  };

  const handleChatClose = () => {
    setShowChat(false);
    setSelectedOfferForChat(null);
  };

  const handleNegotiation = (newPrice) => {
    // Update the offer with new negotiated price
    const updatedOffers = offers.map(offer =>
      offer.id === selectedOfferForChat.id
        ? { ...offer, price: newPrice, isNegotiated: true }
        : offer
    );
    onOffersUpdate(updatedOffers);
  };

  // Generate realistic offers based on buyer post
  const generateOffers = () => {
    if (!buyerPost) return;

    setIsGeneratingOffers(true);
    const category = buyerPost.category;

    // Filter sellers by category
    const relevantSellers = mockSellers.filter(seller =>
      seller.specialty === category || seller.specialty === 'general'
    );

    const newOffers = [];
    const numOffers = level === 1 ? 3 : level === 2 ? 5 : 7;

    for (let i = 0; i < numOffers; i++) {
      const seller = relevantSellers[i % relevantSellers.length] || mockSellers[i % mockSellers.length];
      const offer = generateMockOffer(buyerPost, seller, i);
      newOffers.push(offer);
    }

    // Sort by AI score for level 2+
    if (level >= 2) {
      newOffers.sort((a, b) => b.aiScore - a.aiScore);
    }

    // Simulate staggered offer arrival
    newOffers.forEach((offer, index) => {
      setTimeout(() => {
        onOffersUpdate(prev => [...prev, offer]);
      }, (index + 1) * 1500);
    });

    // Generate AI analysis for level 2+
    if (level >= 2) {
      setTimeout(() => {
        setAiAnalysis(generateAiAnalysis(newOffers, buyerPost));
      }, newOffers.length * 1500 + 1000);
    }

    setIsGeneratingOffers(false);
  };

  const generateOfferDescription = (title, sellerName) => {
    const descriptions = [
      `High-quality ${title.toLowerCase()} available immediately. Excellent condition with all accessories included.`,
      `Premium ${title.toLowerCase()} from ${sellerName}. Fast shipping and great customer service guaranteed.`,
      `Professional-grade ${title.toLowerCase()} with warranty. Trusted by hundreds of satisfied customers.`,
      `Best value ${title.toLowerCase()} in the market. Competitive pricing with no hidden fees.`,
      `Certified ${title.toLowerCase()} with full documentation. Ready for immediate delivery.`
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  const generateOfferFeatures = (category) => {
    const featuresByCategory = {
      electronics: ["Free shipping", "1-year warranty", "30-day returns", "Technical support"],
      services: ["Satisfaction guarantee", "Free consultation", "Flexible scheduling", "Portfolio included"],
      automotive: ["Certified parts", "Installation included", "Warranty coverage", "Expert advice"],
      home: ["Professional installation", "Quality guarantee", "Free estimates", "Licensed contractors"]
    };
    
    const features = featuresByCategory[category] || ["Quality guarantee", "Fast delivery", "Customer support", "Satisfaction guaranteed"];
    return features.slice(0, Math.floor(Math.random() * 2) + 2);
  };

  const generateDeliveryTime = () => {
    const times = ["Same day", "1-2 days", "3-5 days", "1 week", "2 weeks"];
    return times[Math.floor(Math.random() * times.length)];
  };

  const generateWarranty = (category) => {
    if (category === 'services') return "Satisfaction guarantee";
    const warranties = ["30 days", "90 days", "1 year", "2 years"];
    return warranties[Math.floor(Math.random() * warranties.length)];
  };

  const generateAiAnalysis = (offers, post) => {
    const bestOffer = offers[0];
    const avgPrice = offers.reduce((sum, offer) => sum + offer.price, 0) / offers.length;
    
    return {
      recommendation: bestOffer.id,
      insights: [
        `Best value offer is ${((avgPrice - bestOffer.price) / avgPrice * 100).toFixed(1)}% below average`,
        `${offers.filter(o => o.seller.verified).length} out of ${offers.length} sellers are verified`,
        `Average delivery time: ${Math.round(offers.length / 2)} days`,
        `${offers.filter(o => o.savings > 0).length} offers are under your budget`
      ],
      riskFactors: offers.filter(o => !o.seller.verified).length > 0 ? 
        ["Some sellers are not verified - check reviews carefully"] : [],
      marketAnalysis: `Current market price for ${post.title} ranges from $${Math.min(...offers.map(o => o.price))} to $${Math.max(...offers.map(o => o.price))}`
    };
  };

  // Auto-generate offers when buyer post is submitted
  useEffect(() => {
    if (buyerPost && offers.length === 0) {
      setTimeout(generateOffers, 2000);
    }
  }, [buyerPost]);

  const getOfferStatusColor = (offer) => {
    if (offer.aiScore >= 90) return 'border-green-500 bg-green-500/10';
    if (offer.aiScore >= 80) return 'border-yellow-500 bg-yellow-500/10';
    return 'border-gray-500 bg-gray-500/10';
  };

  const getOfferStatusText = (offer) => {
    if (offer.aiScore >= 90) return 'Excellent Match';
    if (offer.aiScore >= 80) return 'Good Match';
    return 'Fair Match';
  };

  if (!buyerPost) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📋</div>
        <h3 className="text-xl font-semibold text-gray-400 mb-2">
          No Active Request
        </h3>
        <p className="text-gray-500">
          Submit a buyer request to see offers appear here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Offer Generation Status */}
      {isGeneratingOffers && (
        <Card variant="glass" className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-cyan-400">Generating offers from sellers...</span>
          </div>
        </Card>
      )}

      {/* AI Analysis (Level 2+) */}
      {level >= 2 && aiAnalysis && (
        <Card variant="neon" className="p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            🧠 AI Analysis & Recommendations
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-white mb-2">Key Insights:</h4>
              <ul className="space-y-1">
                {aiAnalysis.insights.map((insight, index) => (
                  <li key={index} className="text-sm text-gray-300 flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            {aiAnalysis.riskFactors.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-yellow-400 mb-2">⚠️ Risk Factors:</h4>
                <ul className="space-y-1">
                  {aiAnalysis.riskFactors.map((risk, index) => (
                    <li key={index} className="text-sm text-yellow-300 flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="text-xs text-gray-400 bg-black/30 rounded p-2">
              {aiAnalysis.marketAnalysis}
            </div>
          </div>
        </Card>
      )}

      {/* Offers List */}
      <div className="space-y-4">
        {offers.length === 0 && !isGeneratingOffers && (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">⏳</div>
            <p className="text-gray-400">Waiting for sellers to respond...</p>
          </div>
        )}

        {offers.map((offer, index) => (
          <Card 
            key={offer.id}
            variant="glass"
            className={`p-6 transition-all duration-300 hover:scale-102 cursor-pointer ${
              level >= 2 ? getOfferStatusColor(offer) : ''
            }`}
            onClick={() => onOfferSelect(offer)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{offer.seller.avatar}</div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-white">{offer.seller.name}</h4>
                    {offer.seller.verified && (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>⭐ {offer.seller.rating} ({offer.seller.reviews})</span>
                    <span>📍 {offer.seller.location}</span>
                    <span>⚡ {offer.seller.responseTime}</span>
                  </div>
                </div>
              </div>

              {/* Price and AI Score */}
              <div className="text-right">
                <div className="text-2xl font-bold text-white">
                  ${offer.price.toLocaleString()}
                </div>
                {offer.originalPrice && (
                  <div className="text-sm text-gray-500 line-through">
                    was ${offer.originalPrice.toLocaleString()}
                  </div>
                )}
                {offer.savings > 0 && (
                  <div className="text-sm text-green-400">
                    Save ${offer.savings}
                  </div>
                )}
                {level >= 2 && (
                  <div className="text-xs text-cyan-400 mt-1">
                    AI Score: {offer.aiScore}/100
                  </div>
                )}
              </div>
            </div>

            {/* Offer Description */}
            <p className="text-gray-300 text-sm mb-4">{offer.description}</p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {offer.features.map((feature, featureIndex) => (
                <span 
                  key={featureIndex}
                  className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Offer Details */}
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-400 mb-4">
              <div>
                <span className="block text-white">Delivery:</span>
                {offer.deliveryTime}
              </div>
              <div>
                <span className="block text-white">Warranty:</span>
                {offer.warranty}
              </div>
              <div>
                <span className="block text-white">Negotiable:</span>
                {offer.isNegotiable ? 'Yes' : 'No'}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button variant="primary" size="sm" className="flex-1">
                Select This Offer
              </Button>
              {level >= 3 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleChatOpen(offer)}
                >
                  💬 Chat
                </Button>
              )}
              <Button variant="ghost" size="sm">
                📋 Details
              </Button>
            </div>

            {/* Special Badges */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                {level >= 2 && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    offer.aiScore >= 90 ? 'bg-green-500/20 text-green-400' :
                    offer.aiScore >= 80 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {getOfferStatusText(offer)}
                  </span>
                )}
                {offer.specialOffer && (
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                    🔥 Special Offer
                  </span>
                )}
                {index === 0 && level >= 2 && (
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    🏆 AI Recommended
                  </span>
                )}
              </div>
              
              <span className="text-xs text-gray-500">
                {new Date(offer.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      {offers.length > 0 && (
        <Card variant="glass" className="p-4">
          <div className="grid grid-cols-4 gap-4 text-center text-sm">
            <div>
              <div className="text-lg font-bold text-cyan-400">{offers.length}</div>
              <div className="text-gray-400">Total Offers</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-400">
                ${Math.min(...offers.map(o => o.price)).toLocaleString()}
              </div>
              <div className="text-gray-400">Best Price</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-400">
                ${Math.round(offers.reduce((sum, o) => sum + o.price, 0) / offers.length).toLocaleString()}
              </div>
              <div className="text-gray-400">Avg Price</div>
            </div>
            <div>
              <div className="text-lg font-bold text-yellow-400">
                {offers.filter(o => o.seller.verified).length}
              </div>
              <div className="text-gray-400">Verified</div>
            </div>
          </div>
        </Card>
      )}

      {/* Chat Simulation Modal */}
      {showChat && selectedOfferForChat && (
        <ChatSimulation
          offer={selectedOfferForChat}
          onClose={handleChatClose}
          onNegotiate={handleNegotiation}
        />
      )}
    </div>
  );
};

export default OfferBoard;
