'use client';

import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}, ref) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
    disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105
    active:scale-95 relative overflow-hidden group
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-blue-500 text-white 
      hover:from-cyan-400 hover:to-blue-400 focus:ring-cyan-500
      shadow-lg hover:shadow-cyan-500/25 neon-glow
    `,
    secondary: `
      bg-gradient-to-r from-purple-500 to-pink-500 text-white
      hover:from-purple-400 hover:to-pink-400 focus:ring-purple-500
      shadow-lg hover:shadow-purple-500/25
    `,
    ghost: `
      bg-transparent text-cyan-400 border border-cyan-400/50
      hover:bg-cyan-400/10 hover:border-cyan-400 focus:ring-cyan-500
      backdrop-blur-sm
    `,
    outline: `
      bg-transparent text-white border border-white/20
      hover:bg-white/10 hover:border-white/40 focus:ring-white/50
      backdrop-blur-sm glass
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-red-600 text-white
      hover:from-red-400 hover:to-red-500 focus:ring-red-500
      shadow-lg hover:shadow-red-500/25
    `,
    success: `
      bg-gradient-to-r from-green-500 to-emerald-500 text-white
      hover:from-green-400 hover:to-emerald-400 focus:ring-green-500
      shadow-lg hover:shadow-green-500/25
    `
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
    xl: 'px-8 py-4 text-xl rounded-2xl'
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                      transition-transform duration-1000 ease-out" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
