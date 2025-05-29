'use client';

import { useState, useEffect, useRef } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ChatSimulation = ({ offer, onClose, onNegotiate }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [negotiationStage, setNegotiationStage] = useState('initial');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize chat with seller greeting
  useEffect(() => {
    const initialMessages = [
      {
        id: 1,
        sender: 'seller',
        text: `Hi! Thanks for your interest in my ${offer?.description || 'offer'}. I'm ${offer?.seller?.name}. How can I help you?`,
        timestamp: new Date().toISOString(),
        type: 'text'
      }
    ];
    setMessages(initialMessages);
  }, [offer]);

  // Simulate seller responses
  const simulateSellerResponse = (userMessage) => {
    setIsTyping(true);
    
    setTimeout(() => {
      let response = '';
      let responseType = 'text';
      
      // AI-powered response simulation based on user message
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('cheaper')) {
        if (negotiationStage === 'initial') {
          response = `I understand you're looking for the best price. My current offer of $${offer.price.toLocaleString()} is already competitive, but I might be able to work with you. What price range were you thinking?`;
          setNegotiationStage('price_discussion');
        } else if (negotiationStage === 'price_discussion') {
          const newPrice = Math.round(offer.price * 0.95);
          response = `You know what, I really want to make this work. How about $${newPrice.toLocaleString()}? That's my best price and includes everything mentioned.`;
          setNegotiationStage('final_offer');
          onNegotiate && onNegotiate(newPrice);
        } else {
          response = `I've already given you my best price at $${Math.round(offer.price * 0.95).toLocaleString()}. This is really the lowest I can go while maintaining quality.`;
        }
      } else if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping')) {
        response = `For delivery, I can offer ${offer.deliveryTime} shipping. If you're local, I might be able to arrange pickup or faster delivery. Where are you located?`;
      } else if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
        response = `Absolutely! This comes with ${offer.warranty} warranty. I also offer a 30-day satisfaction guarantee. If you're not happy, we can work something out.`;
      } else if (lowerMessage.includes('condition') || lowerMessage.includes('quality')) {
        response = `The condition is excellent! I can send you additional photos if you'd like. I take pride in only offering high-quality items. Would you like to see more pictures?`;
        responseType = 'text_with_action';
      } else if (lowerMessage.includes('photo') || lowerMessage.includes('picture') || lowerMessage.includes('image')) {
        response = `Here are some additional photos I just took:`;
        responseType = 'image';
      } else if (lowerMessage.includes('meet') || lowerMessage.includes('pickup')) {
        response = `Sure! I'm flexible with meeting arrangements. I'm located in ${offer.seller.location}. We can meet at a safe public location. When would work best for you?`;
      } else if (lowerMessage.includes('deal') || lowerMessage.includes('buy') || lowerMessage.includes('purchase')) {
        response = `Great! I'm excited to make this deal happen. Let me know if you need any final details. I can prepare everything for a smooth transaction.`;
      } else {
        // Generic helpful responses
        const genericResponses = [
          `That's a great question! I'm here to help with any concerns you might have.`,
          `I appreciate your interest! Feel free to ask me anything about this offer.`,
          `Thanks for reaching out! I want to make sure you have all the information you need.`,
          `I'm committed to providing excellent service. What else would you like to know?`
        ];
        response = genericResponses[Math.floor(Math.random() * genericResponses.length)];
      }

      const newMessage = {
        id: Date.now(),
        sender: 'seller',
        text: response,
        timestamp: new Date().toISOString(),
        type: responseType
      };

      // Add images for image responses
      if (responseType === 'image') {
        newMessage.images = [
          '/api/placeholder/300/200?text=Product+Photo+1',
          '/api/placeholder/300/200?text=Product+Photo+2',
          '/api/placeholder/300/200?text=Product+Photo+3'
        ];
      }

      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay for realism
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'buyer',
      text: newMessage,
      timestamp: new Date().toISOString(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    simulateSellerResponse(newMessage);
    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickResponses = [
    "Can you tell me more about the condition?",
    "Is the price negotiable?",
    "How quickly can you deliver?",
    "Can we meet in person?",
    "Do you have more photos?",
    "What's included in the warranty?"
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card variant="neon" className="w-full max-w-2xl h-[600px] flex flex-col" glow>
        {/* Chat Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">{offer?.seller?.avatar}</div>
            <div>
              <h3 className="text-lg font-semibold text-white">{offer?.seller?.name}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Online</span>
                <span>•</span>
                <span>Responds in {offer?.seller?.responseTime}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ✕
          </Button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'buyer'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700 text-gray-100'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                
                {/* Image attachments */}
                {message.images && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {message.images.map((img, index) => (
                      <div key={index} className="bg-gray-600 rounded p-2 text-center text-xs">
                        📷 Photo {index + 1}
                      </div>
                    ))}
                  </div>
                )}
                
                <p className="text-xs opacity-70 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Responses */}
        <div className="px-6 py-2 border-t border-white/10">
          <div className="flex flex-wrap gap-2 mb-4">
            {quickResponses.map((response, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => {
                  setNewMessage(response);
                  setTimeout(() => sendMessage(), 100);
                }}
              >
                {response}
              </Button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-6 border-t border-white/20">
          <div className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 bg-black/30 border border-gray-600 rounded-lg text-white 
                       placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <Button variant="primary" onClick={sendMessage} disabled={!newMessage.trim()}>
              Send
            </Button>
          </div>
          
          {/* Chat Features */}
          <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
            <div className="flex space-x-4">
              <button className="hover:text-cyan-400 transition-colors">📎 Attach</button>
              <button className="hover:text-cyan-400 transition-colors">📷 Photo</button>
              <button className="hover:text-cyan-400 transition-colors">📍 Location</button>
            </div>
            <div className="text-xs">
              Secure chat • End-to-end encrypted
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatSimulation;
