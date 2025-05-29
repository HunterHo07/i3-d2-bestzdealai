'use client';

import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  variant = 'glass', 
  className = '', 
  hover = true,
  glow = false,
  ...props 
}, ref) => {
  const baseClasses = `
    rounded-xl transition-all duration-300 relative overflow-hidden
    ${hover ? 'hover:scale-105 hover:-translate-y-1' : ''}
    ${glow ? 'animate-pulse-glow' : ''}
  `;

  const variants = {
    glass: `
      bg-white/10 backdrop-blur-md border border-white/20
      shadow-xl hover:shadow-2xl hover:bg-white/15
    `,
    solid: `
      bg-gray-900/90 border border-gray-700/50
      shadow-xl hover:shadow-2xl hover:border-gray-600/50
    `,
    gradient: `
      bg-gradient-to-br from-purple-900/20 to-blue-900/20
      border border-purple-500/20 backdrop-blur-md
      shadow-xl hover:shadow-purple-500/20
    `,
    neon: `
      bg-black/50 border border-cyan-500/50 backdrop-blur-md
      shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40
      hover:border-cyan-400
    `,
    dark: `
      bg-gray-800/90 border border-gray-600/30
      shadow-xl hover:shadow-2xl
    `
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div
      ref={ref}
      className={classes}
      {...props}
    >
      {/* Animated border glow */}
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 
                        animate-pulse opacity-50 blur-sm" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
