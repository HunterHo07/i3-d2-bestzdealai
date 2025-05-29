'use client';

import { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const buyerPlan = {
    name: "For Buyers",
    price: "Free",
    period: "Forever",
    description: "Post unlimited requests and get the best deals",
    features: [
      "Unlimited deal requests",
      "AI-powered offer matching",
      "Real-time notifications",
      "Secure messaging with sellers",
      "Review and rating system",
      "Mobile app access",
      "24/7 customer support",
      "Dispute resolution"
    ],
    cta: "Start Getting Deals",
    popular: false,
    color: "green"
  };

  const sellerPlans = [
    {
      name: "Basic Seller",
      price: billingCycle === 'monthly' ? "Free" : "Free",
      period: billingCycle === 'monthly' ? "/month" : "/year",
      description: "Perfect for occasional sellers and small businesses",
      features: [
        "3 offers per month",
        "Basic seller profile",
        "Standard response time",
        "Basic analytics",
        "Email notifications",
        "Community support"
      ],
      limitations: [
        "Limited to 3 offers/month",
        "No priority placement",
        "Basic profile only"
      ],
      cta: "Start Selling",
      popular: false,
      color: "blue"
    },
    {
      name: "Pro Seller",
      price: billingCycle === 'monthly' ? "$9.99" : "$99",
      period: billingCycle === 'monthly' ? "/month" : "/year",
      originalPrice: billingCycle === 'monthly' ? null : "$119.88",
      description: "For active sellers who want more visibility",
      features: [
        "Unlimited offers",
        "Enhanced seller profile",
        "Priority response notifications",
        "Advanced analytics dashboard",
        "Custom branding options",
        "SMS + Email notifications",
        "Priority customer support",
        "Offer templates"
      ],
      cta: "Go Pro",
      popular: true,
      color: "purple"
    },
    {
      name: "Premium Seller",
      price: billingCycle === 'monthly' ? "$29.99" : "$299",
      period: billingCycle === 'monthly' ? "/month" : "/year",
      originalPrice: billingCycle === 'monthly' ? null : "$359.88",
      description: "Maximum visibility and AI-powered features",
      features: [
        "Everything in Pro",
        "AI-boosted offer placement",
        "Featured seller badge",
        "Advanced AI matching",
        "Bulk offer management",
        "API access",
        "Dedicated account manager",
        "White-label options",
        "Custom integrations"
      ],
      cta: "Get Premium",
      popular: false,
      color: "cyan"
    }
  ];

  const getCardVariant = (color) => {
    switch(color) {
      case 'green': return 'neon';
      case 'purple': return 'gradient';
      case 'cyan': return 'neon';
      default: return 'glass';
    }
  };

  const getButtonVariant = (color, popular) => {
    if (popular) return 'primary';
    switch(color) {
      case 'green': return 'success';
      case 'purple': return 'secondary';
      case 'cyan': return 'primary';
      default: return 'ghost';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-8 h-full transform rotate-12">
          {[...Array(64)].map((_, i) => (
            <div 
              key={i} 
              className="bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-pulse"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Simple, </span>
            <span className="gradient-text">Fair Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Free for buyers, affordable for sellers. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-black/30 rounded-full p-1 border border-white/20">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === 'monthly' 
                  ? 'bg-cyan-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                billingCycle === 'yearly' 
                  ? 'bg-cyan-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-4 gap-8 items-stretch">
          
          {/* Buyer Plan - Special Position */}
          <div className="lg:col-span-1">
            <Card 
              variant={getCardVariant(buyerPlan.color)} 
              className="h-full p-8 text-center relative"
              glow={buyerPlan.color === 'green'}
            >
              <div className="absolute top-4 right-4">
                <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Always Free
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{buyerPlan.name}</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">{buyerPlan.price}</div>
                <div className="text-gray-400">{buyerPlan.period}</div>
                <p className="text-sm text-gray-400 mt-4">{buyerPlan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {buyerPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={getButtonVariant(buyerPlan.color, false)} 
                size="lg" 
                className="w-full"
              >
                {buyerPlan.cta}
              </Button>
            </Card>
          </div>

          {/* Seller Plans */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-8 h-full">
              {sellerPlans.map((plan, index) => (
                <Card 
                  key={plan.name}
                  variant={getCardVariant(plan.color)} 
                  className={`h-full p-8 text-center relative transition-all duration-300 ${
                    plan.popular ? 'scale-105 border-2 border-purple-500' : ''
                  }`}
                  glow={plan.popular}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        was {plan.originalPrice}
                      </div>
                    )}
                    <p className="text-sm text-gray-400 mt-4">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations && plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center text-sm opacity-60">
                        <svg className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={getButtonVariant(plan.color, plan.popular)} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">💳</div>
              <h4 className="font-semibold text-white mb-2">No Hidden Fees</h4>
              <p className="text-sm text-gray-400">What you see is what you pay. No setup fees, no transaction fees for basic plans.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="font-semibold text-white mb-2">Cancel Anytime</h4>
              <p className="text-sm text-gray-400">No long-term contracts. Upgrade, downgrade, or cancel your subscription anytime.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold text-white mb-2">30-Day Guarantee</h4>
              <p className="text-sm text-gray-400">Not satisfied? Get a full refund within 30 days, no questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
