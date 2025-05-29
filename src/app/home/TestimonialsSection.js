'use client';

import { useState, useEffect } from 'react';
import Card from '../components/ui/Card';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Small Business Owner",
      company: "Chen's Electronics",
      avatar: "👩‍💼",
      rating: 5,
      text: "BestzDealAi completely transformed how I find customers. Instead of spending money on ads that don't work, buyers come directly to me with exactly what they want. My sales increased 300% in just 2 months!",
      highlight: "300% sales increase",
      category: "seller"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Tech Enthusiast",
      company: "Freelance Developer",
      avatar: "👨‍💻",
      rating: 5,
      text: "I saved $400 on my new gaming setup by posting on BestzDealAi. Got 7 offers within hours, and the AI helped me pick the best value. The seller even threw in free delivery!",
      highlight: "Saved $400",
      category: "buyer"
    },
    {
      id: 3,
      name: "Jennifer Park",
      role: "Wedding Planner",
      company: "Dream Weddings Co.",
      avatar: "👰",
      rating: 5,
      text: "As a wedding planner, I need reliable vendors quickly. BestzDealAi's reverse marketplace lets me post requirements and get competitive quotes instantly. It's a game-changer for my business.",
      highlight: "Instant competitive quotes",
      category: "buyer"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Local Retailer",
      company: "Kim's Vintage Store",
      avatar: "🏪",
      rating: 5,
      text: "I was struggling to compete with big online stores. BestzDealAi leveled the playing field - now customers find me when they need vintage items. My monthly revenue doubled!",
      highlight: "Revenue doubled",
      category: "seller"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Busy Mom",
      company: "Family of 4",
      avatar: "👩‍👧‍👦",
      rating: 5,
      text: "Between work and kids, I have no time to shop around. I just post what I need and sellers compete for my business. Saved me hours and got better prices than I could find anywhere!",
      highlight: "Saved hours of time",
      category: "buyer"
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      role: "Service Provider",
      company: "Hassan Home Repairs",
      avatar: "🔧",
      rating: 5,
      text: "Getting leads was my biggest challenge. Now homeowners post their repair needs and I can offer competitive quotes. I've booked more jobs in 3 months than in the previous year!",
      highlight: "More jobs than previous year",
      category: "seller"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Users", icon: "😊" },
    { number: "95%", label: "Satisfaction Rate", icon: "⭐" },
    { number: "$2M+", label: "Deals Completed", icon: "💰" },
    { number: "4.9/5", label: "Average Rating", icon: "🏆" }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-cyan-900/10" />
      
      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">What Our </span>
            <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from buyers and sellers who are transforming their commerce experience.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} variant="glass" className="p-6 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card variant="neon" className="max-w-4xl mx-auto p-8" glow>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              {/* Avatar & Info */}
              <div className="text-center md:text-left">
                <div className="text-6xl mb-4">{currentTest.avatar}</div>
                <h4 className="text-xl font-bold text-white mb-1">{currentTest.name}</h4>
                <p className="text-cyan-400 font-medium mb-1">{currentTest.role}</p>
                <p className="text-gray-400 text-sm mb-4">{currentTest.company}</p>
                
                {/* Rating */}
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(currentTest.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>

                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  currentTest.category === 'buyer' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {currentTest.category === 'buyer' ? '🛒 Buyer' : '🏪 Seller'}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <div className="text-4xl text-cyan-400/50 mb-4">"</div>
                <blockquote className="text-lg text-gray-300 leading-relaxed mb-6">
                  {currentTest.text}
                </blockquote>
                
                {/* Highlight */}
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-4 border border-cyan-500/30">
                  <div className="text-sm text-cyan-400 font-medium">Key Result:</div>
                  <div className="text-white font-bold">{currentTest.highlight}</div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-cyan-400 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              variant={index === currentTestimonial ? 'neon' : 'glass'}
              className={`p-6 cursor-pointer transition-all duration-300 ${
                index === currentTestimonial ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-white">{testimonial.name}</h5>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 line-clamp-3">
                {testimonial.text}
              </p>
              
              <div className="mt-4 text-xs text-cyan-400 font-medium">
                {testimonial.highlight}
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="font-semibold text-white mb-2">Verified Reviews</h4>
              <p className="text-sm text-gray-400">All testimonials are from real users who have completed transactions on our platform.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="font-semibold text-white mb-2">Award Winning</h4>
              <p className="text-sm text-gray-400">Recognized as "Best Innovation in E-commerce" by TechCrunch 2024.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="font-semibold text-white mb-2">Growing Fast</h4>
              <p className="text-sm text-gray-400">Join thousands of users who save time and money every day with BestzDealAi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
