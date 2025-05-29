'use client';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const WhyUsPage = () => {
  const advantages = [
    {
      icon: "🔄",
      title: "Buyer-First Approach",
      description: "Unlike traditional marketplaces, we put buyers in control. Post what you need and let sellers compete for your business.",
      benefits: ["Sellers come to you", "Better negotiating position", "Save time searching", "Multiple competitive offers"]
    },
    {
      icon: "🧠",
      title: "AI-Powered Matching",
      description: "Our advanced AI doesn't just match by price - it considers value, trust, location, and your preferences.",
      benefits: ["Smart value assessment", "Trust score integration", "Location optimization", "Preference learning"]
    },
    {
      icon: "💰",
      title: "Better Economics",
      description: "Free for buyers, affordable for sellers. No hidden fees, no surprise charges, just fair pricing.",
      benefits: ["100% free for buyers", "Low seller fees", "No transaction fees", "Transparent pricing"]
    },
    {
      icon: "🌍",
      title: "Local + Global Reach",
      description: "Connect with local businesses and online sellers in one platform. Best of both worlds.",
      benefits: ["Support local businesses", "Access global inventory", "Flexible delivery options", "Community-driven"]
    },
    {
      icon: "🛡️",
      title: "Trust & Safety First",
      description: "Verified sellers, secure payments, comprehensive reviews, and dispute resolution.",
      benefits: ["Verified seller profiles", "Secure transactions", "Review system", "Dispute support"]
    },
    {
      icon: "⚡",
      title: "Real-Time Experience",
      description: "Live notifications, instant messaging, and real-time offer updates for seamless transactions.",
      benefits: ["Live notifications", "Instant messaging", "Real-time updates", "Mobile optimized"]
    }
  ];

  const comparisons = [
    {
      feature: "Approach",
      traditional: "Seller-centric browsing",
      us: "Buyer-first posting",
      advantage: true
    },
    {
      feature: "AI Matching",
      traditional: "Basic search filters",
      us: "Advanced AI ranking",
      advantage: true
    },
    {
      feature: "Buyer Cost",
      traditional: "Hidden in seller prices",
      us: "100% Free",
      advantage: true
    },
    {
      feature: "Seller Fees",
      traditional: "8-15% commission",
      us: "$9.99/month flat rate",
      advantage: true
    },
    {
      feature: "Local Support",
      traditional: "Limited",
      us: "Strong local focus",
      advantage: true
    },
    {
      feature: "Negotiation",
      traditional: "Limited or none",
      us: "Built-in chat & negotiation",
      advantage: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="text-white">Why Choose </span>
              <span className="gradient-text">BestzDealAi?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're not just another marketplace. We're revolutionizing commerce by putting buyers first 
              and using AI to create better deals for everyone.
            </p>
            <Button variant="primary" size="lg">
              Experience the Difference
            </Button>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Competitive Advantages
              </h2>
              <p className="text-lg text-gray-300">
                Six key reasons why BestzDealAi is the future of online commerce
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} variant="glass" className="p-6 h-full">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {advantage.description}
                  </p>
                  <ul className="space-y-2">
                    {advantage.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-black/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                How We Compare
              </h2>
              <p className="text-lg text-gray-300">
                See the difference between traditional marketplaces and BestzDealAi
              </p>
            </div>

            <Card variant="neon" className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-6 text-white font-semibold">Feature</th>
                      <th className="text-left p-6 text-gray-400 font-semibold">Traditional Marketplaces</th>
                      <th className="text-left p-6 text-cyan-400 font-semibold">BestzDealAi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comparison, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-6 text-white font-medium">{comparison.feature}</td>
                        <td className="p-6 text-gray-400">{comparison.traditional}</td>
                        <td className="p-6 text-cyan-400 font-medium flex items-center">
                          {comparison.us}
                          {comparison.advantage && (
                            <span className="ml-2 text-green-400">✓</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-lg text-gray-300">
                Our users are already seeing amazing results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card variant="glass" className="p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">73%</div>
                <div className="text-gray-400">Average Savings</div>
              </Card>
              <Card variant="glass" className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2.5hrs</div>
                <div className="text-gray-400">Time Saved per Purchase</div>
              </Card>
              <Card variant="glass" className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-400">User Satisfaction</div>
              </Card>
              <Card variant="glass" className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">4.9★</div>
                <div className="text-gray-400">Average Rating</div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card variant="gradient" className="p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of smart shoppers and sellers who have already made the switch to BestzDealAi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Try Live Demo
                </Button>
                <Button variant="ghost" size="lg">
                  Start as Buyer (Free)
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

export default WhyUsPage;
