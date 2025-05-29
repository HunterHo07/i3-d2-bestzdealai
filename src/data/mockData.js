// Mock data for BestzDealAi demo

export const mockSellers = [
  {
    id: 1,
    name: "TechHub Electronics",
    avatar: "🏪",
    rating: 4.8,
    reviews: 127,
    verified: true,
    location: "New York, NY",
    responseTime: "< 1 hour",
    specialty: "electronics",
    joinedDate: "2022-03-15",
    totalSales: 1250,
    description: "Premium electronics retailer with 15+ years experience"
  },
  {
    id: 2,
    name: "Sarah's Photography",
    avatar: "📸",
    rating: 4.9,
    reviews: 89,
    verified: true,
    location: "Los Angeles, CA",
    responseTime: "< 30 min",
    specialty: "services",
    joinedDate: "2021-08-20",
    totalSales: 340,
    description: "Professional wedding and event photographer"
  },
  {
    id: 3,
    name: "Mike's Mobile Store",
    avatar: "📱",
    rating: 4.7,
    reviews: 203,
    verified: true,
    location: "Chicago, IL",
    responseTime: "< 2 hours",
    specialty: "electronics",
    joinedDate: "2020-11-10",
    totalSales: 890,
    description: "Certified mobile device specialist and repair expert"
  },
  {
    id: 4,
    name: "Local Electronics Co",
    avatar: "⚡",
    rating: 4.6,
    reviews: 156,
    verified: false,
    location: "Online",
    responseTime: "< 4 hours",
    specialty: "electronics",
    joinedDate: "2023-01-05",
    totalSales: 67,
    description: "Competitive prices on consumer electronics"
  },
  {
    id: 5,
    name: "Premium Services LLC",
    avatar: "💼",
    rating: 4.9,
    reviews: 67,
    verified: true,
    location: "Miami, FL",
    responseTime: "< 1 hour",
    specialty: "services",
    joinedDate: "2022-06-12",
    totalSales: 234,
    description: "High-end professional services and consulting"
  },
  {
    id: 6,
    name: "AutoParts Direct",
    avatar: "🚗",
    rating: 4.5,
    reviews: 312,
    verified: true,
    location: "Detroit, MI",
    responseTime: "< 3 hours",
    specialty: "automotive",
    joinedDate: "2021-02-28",
    totalSales: 567,
    description: "OEM and aftermarket auto parts supplier"
  },
  {
    id: 7,
    name: "Home & Garden Pro",
    avatar: "🏠",
    rating: 4.7,
    reviews: 98,
    verified: true,
    location: "Portland, OR",
    responseTime: "< 2 hours",
    specialty: "home",
    joinedDate: "2022-09-14",
    totalSales: 445,
    description: "Professional home improvement and landscaping"
  }
];

export const sampleProducts = [
  {
    category: "electronics",
    items: [
      {
        title: "Gaming Laptop",
        description: "High-performance gaming laptop with RTX 4070, 16GB RAM, excellent cooling",
        budgetRange: [800, 1500],
        features: ["RTX 4070 GPU", "16GB RAM", "1TB SSD", "144Hz Display", "RGB Keyboard"]
      },
      {
        title: "iPhone 15 Pro",
        description: "Latest iPhone in excellent condition, unlocked, with accessories",
        budgetRange: [700, 1200],
        features: ["Unlocked", "Excellent condition", "Original box", "All accessories", "Warranty"]
      },
      {
        title: "4K Monitor",
        description: "Professional 4K monitor for work and gaming, 27-32 inch preferred",
        budgetRange: [300, 800],
        features: ["4K Resolution", "27-32 inch", "USB-C", "HDR Support", "Adjustable stand"]
      }
    ]
  },
  {
    category: "services",
    items: [
      {
        title: "Wedding Photography",
        description: "Professional wedding photographer for outdoor ceremony, portfolio required",
        budgetRange: [1500, 4000],
        features: ["8+ hours coverage", "Edited photos", "Online gallery", "Print release", "Backup photographer"]
      },
      {
        title: "Web Development",
        description: "Custom website development for small business, modern design needed",
        budgetRange: [2000, 8000],
        features: ["Responsive design", "CMS integration", "SEO optimization", "Mobile-friendly", "Maintenance included"]
      },
      {
        title: "House Cleaning",
        description: "Regular house cleaning service, eco-friendly products preferred",
        budgetRange: [100, 300],
        features: ["Eco-friendly products", "Insured & bonded", "Flexible scheduling", "Supply own equipment", "Satisfaction guarantee"]
      }
    ]
  },
  {
    category: "automotive",
    items: [
      {
        title: "Car Detailing",
        description: "Professional car detailing service, interior and exterior cleaning",
        budgetRange: [150, 400],
        features: ["Interior cleaning", "Exterior wash & wax", "Engine bay cleaning", "Tire shine", "Paint protection"]
      },
      {
        title: "Brake Pads",
        description: "OEM brake pads for Honda Civic 2020, installation available",
        budgetRange: [100, 300],
        features: ["OEM quality", "Installation available", "Warranty included", "Ceramic or metallic", "Quick service"]
      }
    ]
  },
  {
    category: "home",
    items: [
      {
        title: "Kitchen Renovation",
        description: "Complete kitchen renovation, modern design with quality materials",
        budgetRange: [15000, 50000],
        features: ["Design consultation", "Quality materials", "Licensed contractors", "Project management", "Warranty"]
      },
      {
        title: "Lawn Care Service",
        description: "Weekly lawn maintenance, mowing, edging, and basic landscaping",
        budgetRange: [50, 150],
        features: ["Weekly service", "Mowing & edging", "Weed control", "Seasonal cleanup", "Reliable schedule"]
      }
    ]
  }
];

export const testimonialData = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Small Business Owner",
    company: "Chen's Electronics",
    avatar: "👩‍💼",
    rating: 5,
    text: "BestzDealAi completely transformed how I find customers. Instead of spending money on ads that don't work, buyers come directly to me with exactly what they want. My sales increased 300% in just 2 months!",
    highlight: "300% sales increase",
    category: "seller",
    location: "San Francisco, CA",
    dealType: "Electronics"
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
    category: "buyer",
    location: "Austin, TX",
    dealType: "Gaming Equipment"
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
    category: "buyer",
    location: "Nashville, TN",
    dealType: "Wedding Services"
  }
];

export const competitorData = [
  {
    name: "Amazon",
    type: "Traditional Marketplace",
    fees: "8-15%",
    buyerExperience: "Search & Browse",
    sellerBenefits: "Large audience",
    limitations: ["High fees", "Seller-centric", "Complex setup"],
    rating: 3.5
  },
  {
    name: "eBay",
    type: "Auction Platform",
    fees: "10-12%",
    buyerExperience: "Auction/Buy Now",
    sellerBenefits: "Auction format",
    limitations: ["Outdated UX", "Limited AI", "Seller focused"],
    rating: 3.2
  },
  {
    name: "Facebook Marketplace",
    type: "Social Commerce",
    fees: "Free",
    buyerExperience: "Local browsing",
    sellerBenefits: "Free listing",
    limitations: ["No AI matching", "Safety concerns", "Limited features"],
    rating: 3.8
  },
  {
    name: "BestzDealAi",
    type: "AI Reverse Marketplace",
    fees: "Free for buyers, $9.99+ for sellers",
    buyerExperience: "Post needs, get offers",
    sellerBenefits: "Direct buyer leads",
    limitations: ["New platform"],
    rating: 4.9
  }
];

export const pricingPlans = [
  {
    name: "For Buyers",
    price: "Free",
    period: "Forever",
    description: "Post unlimited requests and get the best deals",
    features: [
      "Unlimited deal requests",
      "AI-powered offer matching",
      "Real-time notifications",
      "Secure messaging",
      "Review system",
      "Mobile app access",
      "24/7 support",
      "Dispute resolution"
    ],
    popular: false,
    color: "green"
  },
  {
    name: "Basic Seller",
    price: "Free",
    period: "/month",
    description: "Perfect for occasional sellers",
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
    popular: false,
    color: "blue"
  },
  {
    name: "Pro Seller",
    price: "9.99",
    period: "/month",
    description: "For active sellers who want more visibility",
    features: [
      "Unlimited offers",
      "Enhanced seller profile",
      "Priority notifications",
      "Advanced analytics",
      "Custom branding",
      "SMS + Email notifications",
      "Priority support",
      "Offer templates"
    ],
    popular: true,
    color: "purple"
  },
  {
    name: "Premium Seller",
    price: "29.99",
    period: "/month",
    description: "Maximum visibility and AI features",
    features: [
      "Everything in Pro",
      "AI-boosted placement",
      "Featured seller badge",
      "Advanced AI matching",
      "Bulk offer management",
      "API access",
      "Dedicated account manager",
      "White-label options"
    ],
    popular: false,
    color: "cyan"
  }
];

export const demoScenarios = [
  {
    title: "Gaming Laptop",
    budget: "$1,200",
    category: "electronics",
    description: "Looking for high-performance gaming laptop with RTX 4070 or better",
    offers: 5,
    bestPrice: "$1,050",
    savings: "$150",
    timeToFirstOffer: "12 minutes"
  },
  {
    title: "iPhone 15 Pro",
    budget: "$1,000",
    category: "electronics", 
    description: "iPhone 15 Pro in excellent condition, unlocked preferred",
    offers: 7,
    bestPrice: "$899",
    savings: "$101",
    timeToFirstOffer: "8 minutes"
  },
  {
    title: "Wedding Photography",
    budget: "$2,500",
    category: "services",
    description: "Professional wedding photographer for June ceremony",
    offers: 4,
    bestPrice: "$2,200",
    savings: "$300",
    timeToFirstOffer: "25 minutes"
  }
];

export const generateMockOffer = (buyerPost, seller, index = 0) => {
  const budget = parseInt(buyerPost.budget);
  const priceVariation = (Math.random() - 0.5) * 0.3; // ±15% variation
  const offerPrice = Math.round(budget * (1 + priceVariation));
  
  return {
    id: Date.now() + index,
    seller,
    price: offerPrice,
    originalPrice: offerPrice > budget ? offerPrice + Math.round(offerPrice * 0.1) : null,
    description: `High-quality ${buyerPost.title.toLowerCase()} available. ${seller.description}`,
    features: generateOfferFeatures(buyerPost.category),
    deliveryTime: generateDeliveryTime(),
    warranty: generateWarranty(buyerPost.category),
    images: [`/api/placeholder/300/200?text=${seller.name.replace(/\s+/g, '+')}`],
    timestamp: new Date(Date.now() + index * 1000).toISOString(),
    aiScore: Math.round((Math.random() * 30 + 70) * 10) / 10, // 70-100 score
    savings: offerPrice < budget ? budget - offerPrice : 0,
    isNegotiable: Math.random() > 0.3,
    specialOffer: Math.random() > 0.7,
    responseTime: seller.responseTime,
    trustScore: seller.rating * 20 // Convert 5-star to 100-point scale
  };
};

const generateOfferFeatures = (category) => {
  const featuresByCategory = {
    electronics: ["Free shipping", "1-year warranty", "30-day returns", "Technical support", "Setup assistance"],
    services: ["Satisfaction guarantee", "Free consultation", "Flexible scheduling", "Portfolio included", "References available"],
    automotive: ["Certified parts", "Installation included", "Warranty coverage", "Expert advice", "Quality guarantee"],
    home: ["Professional installation", "Quality guarantee", "Free estimates", "Licensed contractors", "Insurance coverage"],
    fashion: ["Authentic guarantee", "Free returns", "Size exchange", "Care instructions", "Style consultation"],
    sports: ["Equipment check", "Safety guarantee", "Usage training", "Maintenance tips", "Replacement warranty"]
  };
  
  const features = featuresByCategory[category] || ["Quality guarantee", "Fast delivery", "Customer support", "Satisfaction guaranteed"];
  return features.slice(0, Math.floor(Math.random() * 3) + 2);
};

const generateDeliveryTime = () => {
  const times = ["Same day", "1-2 days", "3-5 days", "1 week", "2 weeks", "Custom arrangement"];
  return times[Math.floor(Math.random() * times.length)];
};

const generateWarranty = (category) => {
  if (category === 'services') return "Satisfaction guarantee";
  const warranties = ["30 days", "90 days", "6 months", "1 year", "2 years"];
  return warranties[Math.floor(Math.random() * warranties.length)];
};
