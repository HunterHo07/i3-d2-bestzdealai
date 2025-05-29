'use client';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const RoadmapPage = () => {
  const roadmapPhases = [
    {
      phase: "MVP",
      title: "Foundation Launch",
      status: "current",
      timeline: "Q1 2025",
      description: "Core platform with essential features for buyers and sellers",
      features: [
        "Buyer request posting system",
        "Seller offer management",
        "Basic AI matching algorithm",
        "Secure messaging platform",
        "User verification system",
        "Mobile-responsive web app",
        "Payment integration (Stripe)",
        "Review and rating system"
      ],
      metrics: "1K buyers, 500 sellers, 2 cities"
    },
    {
      phase: "Phase 1",
      title: "Enhanced Experience",
      status: "planned",
      timeline: "Q2 2025",
      description: "Advanced features and improved user experience",
      features: [
        "Advanced AI recommendation engine",
        "Real-time notifications",
        "Enhanced seller analytics",
        "Bulk offer management",
        "Category-specific templates",
        "Multi-language support",
        "API for third-party integrations",
        "Advanced search and filters"
      ],
      metrics: "10K buyers, 2K sellers, 10 cities"
    },
    {
      phase: "Phase 2",
      title: "Mobile & Scale",
      status: "planned",
      timeline: "Q3 2025",
      description: "Native mobile apps and platform scaling",
      features: [
        "iOS and Android native apps",
        "Push notifications",
        "Offline functionality",
        "AR product preview",
        "Voice search integration",
        "Social media integration",
        "Referral program",
        "Advanced seller tools"
      ],
      metrics: "50K buyers, 10K sellers, National coverage"
    },
    {
      phase: "Phase 3",
      title: "AI & Automation",
      status: "future",
      timeline: "Q4 2025",
      description: "Advanced AI features and automation",
      features: [
        "Predictive pricing AI",
        "Automated negotiation",
        "Smart contract integration",
        "Blockchain verification",
        "IoT device integration",
        "Machine learning personalization",
        "Automated quality scoring",
        "Dynamic pricing optimization"
      ],
      metrics: "200K buyers, 50K sellers, Multi-country"
    },
    {
      phase: "Phase 4",
      title: "Global Expansion",
      status: "future",
      timeline: "2026",
      description: "International markets and enterprise solutions",
      features: [
        "Multi-currency support",
        "International shipping",
        "Local payment methods",
        "Enterprise B2B platform",
        "White-label solutions",
        "Franchise opportunities",
        "Advanced analytics suite",
        "Custom integrations"
      ],
      metrics: "1M+ buyers, 200K+ sellers, Global presence"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'current': return 'border-green-500 bg-green-500/20';
      case 'planned': return 'border-blue-500 bg-blue-500/20';
      case 'future': return 'border-purple-500 bg-purple-500/20';
      default: return 'border-gray-500 bg-gray-500/20';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'current': return '🚀 In Development';
      case 'planned': return '📋 Planned';
      case 'future': return '🔮 Future Vision';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="text-white">Product </span>
              <span className="gradient-text">Roadmap</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our journey to revolutionize commerce through AI-powered reverse marketplace technology. 
              Here's what we're building and when.
            </p>
            <Button variant="primary" size="lg">
              Join Our Journey
            </Button>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 hidden md:block" />
              
              <div className="space-y-12">
                {roadmapPhases.map((phase, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900 hidden md:block" />
                    
                    {/* Content */}
                    <div className="md:ml-20">
                      <Card 
                        variant={phase.status === 'current' ? 'neon' : 'glass'} 
                        className={`p-8 ${getStatusColor(phase.status)}`}
                        glow={phase.status === 'current'}
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div>
                            <div className="flex items-center space-x-4 mb-2">
                              <span className="text-2xl font-bold text-cyan-400">{phase.phase}</span>
                              <span className="text-sm px-3 py-1 rounded-full bg-black/30 text-gray-300">
                                {getStatusText(phase.status)}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                            <p className="text-gray-300 mb-4">{phase.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-cyan-400">{phase.timeline}</div>
                            <div className="text-sm text-gray-400">Target Metrics:</div>
                            <div className="text-sm text-white">{phase.metrics}</div>
                          </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-3">
                          {phase.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full ${
                                phase.status === 'current' ? 'bg-green-400' : 
                                phase.status === 'planned' ? 'bg-blue-400' : 'bg-purple-400'
                              }`} />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {phase.status === 'current' && (
                          <div className="mt-6 pt-6 border-t border-white/20">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-400">Development Progress:</span>
                              <span className="text-sm text-green-400 font-medium">75% Complete</span>
                            </div>
                            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full w-3/4" />
                            </div>
                          </div>
                        )}
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Milestones */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Key Milestones
              </h2>
              <p className="text-lg text-gray-300">
                Major achievements we're working towards
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card variant="glass" className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2">MVP Launch</h3>
                <p className="text-gray-400 mb-4">Q1 2025</p>
                <p className="text-sm text-gray-300">
                  Full platform launch with core features and initial user base
                </p>
              </Card>

              <Card variant="glass" className="p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-2">Mobile Apps</h3>
                <p className="text-gray-400 mb-4">Q3 2025</p>
                <p className="text-sm text-gray-300">
                  Native iOS and Android apps with full feature parity
                </p>
              </Card>

              <Card variant="glass" className="p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-2">Global Expansion</h3>
                <p className="text-gray-400 mb-4">2026</p>
                <p className="text-sm text-gray-300">
                  International markets with localized features and payments
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card variant="gradient" className="p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Shape Our Future
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Your feedback drives our roadmap. Join our community and help us build 
                the future of commerce together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Join Beta Program
                </Button>
                <Button variant="ghost" size="lg">
                  Share Feedback
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

export default RoadmapPage;
