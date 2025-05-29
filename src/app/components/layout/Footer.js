'use client';

import Link from 'next/link';
import Button from '../ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "How it Works", href: "/demo" },
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/#pricing" },
        { name: "API", href: "/api" },
        { name: "Mobile App", href: "/mobile" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Why Us", href: "/why-us" },
        { name: "Roadmap", href: "/roadmap" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Blog", href: "/blog" },
        { name: "Success Stories", href: "/stories" },
        { name: "Webinars", href: "/webinars" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Security", href: "/security" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/bestzdealai", icon: "🐦" },
    { name: "LinkedIn", href: "https://linkedin.com/company/bestzdealai", icon: "💼" },
    { name: "Facebook", href: "https://facebook.com/bestzdealai", icon: "📘" },
    { name: "Instagram", href: "https://instagram.com/bestzdealai", icon: "📸" },
    { name: "YouTube", href: "https://youtube.com/bestzdealai", icon: "📺" }
  ];

  return (
    <footer className="relative bg-black/50 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg 
                            flex items-center justify-center transform group-hover:scale-110 
                            transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold gradient-text">
                BestzDealAi
              </span>
            </Link>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed">
              The world's first AI-powered reverse marketplace where buyers post needs 
              and sellers compete to offer the best deals. Free for buyers, smart for sellers.
            </p>

            {/* Tagline */}
            <div className="text-cyan-400 font-medium text-lg">
              "You post it. They deal it."
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg 
                           text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 
                           transition-colors duration-300"
                />
                <Button variant="primary" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                Get the latest updates, tips, and exclusive offers.
              </p>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section - CTA */}
        <div className="border-t border-b border-white/10 py-12 my-12">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Ready to Transform Your Shopping Experience?
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of smart shoppers and sellers who are already saving time and money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start as Buyer (Free)
              </Button>
              <Button variant="ghost" size="lg">
                Become a Seller
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm">Follow us:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform duration-300"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} BestzDealAi. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with ❤️ for the future of commerce
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>🔒</span>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>🛡️</span>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>⭐</span>
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>🏆</span>
              <span>Award Winning</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>🌍</span>
              <span>Global Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
