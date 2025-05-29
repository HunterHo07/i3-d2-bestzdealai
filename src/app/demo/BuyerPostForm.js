'use client';

import { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { sampleProducts } from '../../data/mockData';

const BuyerPostForm = ({ level, onSubmit, demoState }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    category: '',
    location: '',
    urgency: 'normal',
    images: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Sample data for quick demo - get from imported data
  const sampleRequests = sampleProducts.flatMap(category =>
    category.items.slice(0, 1).map(item => ({
      title: item.title,
      description: item.description,
      budget: item.budgetRange[1].toString(),
      category: category.category,
      location: ["New York, NY", "Los Angeles, CA", "Chicago, IL"][Math.floor(Math.random() * 3)]
    }))
  ).slice(0, 3);

  const categories = [
    { value: 'electronics', label: '📱 Electronics' },
    { value: 'services', label: '🔧 Services' },
    { value: 'automotive', label: '🚗 Automotive' },
    { value: 'home', label: '🏠 Home & Garden' },
    { value: 'fashion', label: '👕 Fashion' },
    { value: 'sports', label: '⚽ Sports & Recreation' },
    { value: 'other', label: '📦 Other' }
  ];

  const urgencyLevels = [
    { value: 'low', label: '🐌 No Rush (1+ weeks)', color: 'text-green-400' },
    { value: 'normal', label: '⏰ Normal (3-7 days)', color: 'text-yellow-400' },
    { value: 'high', label: '🚀 Urgent (1-2 days)', color: 'text-orange-400' },
    { value: 'critical', label: '🔥 ASAP (Today)', color: 'text-red-400' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const loadSampleData = (index) => {
    const sample = sampleRequests[index];
    setFormData(prev => ({
      ...prev,
      ...sample
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Add timestamp and ID
    const postData = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: 'active'
    };

    onSubmit(postData);
    setIsSubmitting(false);
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const isFormValid = formData.title && formData.description && formData.budget && formData.category;

  return (
    <div className="space-y-6">
      {/* Quick Sample Data */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-400 mb-3">Quick Start (Sample Data):</h4>
        <div className="flex flex-wrap gap-2">
          {sampleRequests.map((sample, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => loadSampleData(index)}
              className="text-xs"
            >
              {sample.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            What are you looking for? *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="e.g., Gaming Laptop, Wedding Photographer, iPhone 15"
            className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white 
                     placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Detailed Description *
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Describe exactly what you need, preferred brands, specifications, etc."
            rows={4}
            className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white 
                     placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            required
          />
        </div>

        {/* Budget and Category Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Budget (USD) *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">$</span>
              <input
                type="number"
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                placeholder="1000"
                className="w-full pl-8 pr-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white 
                         placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white 
                       focus:outline-none focus:border-cyan-400 transition-colors"
              required
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Location (Optional)
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="City, State or 'Online Only'"
            className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white 
                     placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>

        {/* Urgency Level */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            How urgent is this?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {urgencyLevels.map((urgency) => (
              <button
                key={urgency.value}
                type="button"
                onClick={() => handleInputChange('urgency', urgency.value)}
                className={`p-3 rounded-lg border transition-all duration-300 text-left ${
                  formData.urgency === urgency.value
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-gray-600 bg-black/20 hover:border-gray-500'
                }`}
              >
                <span className={`text-sm ${urgency.color}`}>
                  {urgency.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Features for Higher Levels */}
        {level >= 2 && (
          <Card variant="glass" className="p-4">
            <h4 className="text-sm font-medium text-cyan-400 mb-3">
              🤖 AI Preferences (Level {level}+)
            </h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-300">Prioritize local sellers</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-300">Only verified sellers</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-300">Include similar alternatives</span>
              </label>
            </div>
          </Card>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Posting Request...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span>🚀 Post My Request</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          )}
        </Button>
      </form>

      {/* Success Message */}
      {showSuccess && (
        <Card variant="neon" className="p-4 border-green-500/50 bg-green-500/10">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">✅</span>
            <div>
              <div className="text-green-400 font-medium">Request Posted Successfully!</div>
              <div className="text-sm text-gray-300">Sellers will start responding shortly...</div>
            </div>
          </div>
        </Card>
      )}

      {/* Current Post Display */}
      {demoState.buyerPost && (
        <Card variant="gradient" className="p-4">
          <h4 className="text-sm font-medium text-purple-400 mb-3">
            📝 Your Active Request
          </h4>
          <div className="space-y-2 text-sm">
            <div><span className="text-gray-400">Title:</span> <span className="text-white">{demoState.buyerPost.title}</span></div>
            <div><span className="text-gray-400">Budget:</span> <span className="text-green-400">${demoState.buyerPost.budget}</span></div>
            <div><span className="text-gray-400">Category:</span> <span className="text-cyan-400">{demoState.buyerPost.category}</span></div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default BuyerPostForm;
