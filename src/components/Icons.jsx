import React from 'react';

/**
 * Custom Brand and Vector Graphic Icons matching the reference design style
 */

// Custom Muaaz Geometric Monogram Logo Mark
export function MuaazLogo({ size = 36, fillBg = true, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`muaaz-brand-logo ${className}`.trim()}
      {...props}
    >
      {fillBg && (
        <rect width="40" height="40" rx="10" fill="#ffffff" />
      )}
      <path
        d="M10 29.5V10.5L18.5 21.8L20 23.8L21.5 21.8L30 10.5V29.5H25.2V17.8L20.8 23.8H19.2L14.8 17.8V29.5H10Z"
        fill={fillBg ? "#121316" : "#ffffff"}
      />
    </svg>
  );
}

// Logo Design / Pen Tool Bezier Icon
export function LogoDesignIcon({ size = 28, color = 'currentColor', strokeWidth = 1.6, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon-logo-design ${className}`.trim()}
      {...props}
    >
      {/* Pen tool tip and bezier curve */}
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
      {/* Bezier control handles */}
      <path d="M4 19c2.5-4 5.5-4 8-1" />
      <circle cx="4" cy="19" r="1" fill={color} />
      <circle cx="12" cy="18" r="1" fill={color} />
    </svg>
  );
}

// Brand Identity / Desktop Screen Layout Mockup Icon
export function BrandIdentityIcon({ size = 28, color = 'currentColor', strokeWidth = 1.6, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon-brand-identity ${className}`.trim()}
      {...props}
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
      <path d="M6 7h4v6H6z" />
      <line x1="13" x2="18" y1="7" y2="7" />
      <line x1="13" x2="18" y1="10" y2="10" />
      <line x1="13" x2="16" y1="13" y2="13" />
    </svg>
  );
}

// Social Media Design / Grid Feed & Story Layout Icon
export function SocialMediaIcon({ size = 28, color = 'currentColor', strokeWidth = 1.6, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon-social-media ${className}`.trim()}
      {...props}
    >
      <rect width="18" height="20" x="3" y="2" rx="3" />
      <circle cx="7.5" cy="6.5" r="1.5" fill={color} />
      <line x1="12" x2="17" y1="6.5" y2="6.5" />
      <rect width="12" height="7" x="6" y="10" rx="1" />
      <path d="M7 19h10" />
    </svg>
  );
}

// Print Design / 3D Packaging Box Icon
export function PrintDesignIcon({ size = 28, color = 'currentColor', strokeWidth = 1.6, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon-print-design ${className}`.trim()}
      {...props}
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

// WhatsApp Icon
export function WhatsAppIcon({ size = 20, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon-whatsapp ${className}`.trim()}
      {...props}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

// Brand Socials
export function Github({ size = 20, color = 'currentColor', strokeWidth = 2, className = '', style = {}, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide-custom lucide-github ${className}`.trim()}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Linkedin({ size = 20, color = 'currentColor', strokeWidth = 2, className = '', style = {}, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide-custom lucide-linkedin ${className}`.trim()}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Twitter({ size = 20, color = 'currentColor', strokeWidth = 2, className = '', style = {}, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide-custom lucide-twitter ${className}`.trim()}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function Discord({ size = 20, color = 'currentColor', strokeWidth = 2, className = '', style = {}, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide-custom lucide-discord ${className}`.trim()}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    >
      <path d="M18 6a14.5 14.5 0 0 0-3.67-1.15c-.16.29-.34.67-.47.98a13.5 13.5 0 0 0-4.07 0c-.13-.31-.32-.69-.48-.98A14.4 14.4 0 0 0 5.64 6C3.32 9.51 2.69 12.93 3 16.3a14.7 14.7 0 0 0 4.5 2.31c.42-.57.78-1.19 1.1-1.83-1.04-.4-1.99-.95-2.83-1.63.24-.18.47-.37.69-.57 3.65 1.71 7.63 1.71 11.28 0 .22.2.45.39.69.57-.84.68-1.79 1.23-2.83 1.63.32.64.68 1.26 1.1 1.83a14.6 14.6 0 0 0 4.5-2.31c.37-3.91-.63-7.3-2.64-10.3z" />
      <circle cx="9" cy="12" r="1.5" fill={color} />
      <circle cx="15" cy="12" r="1.5" fill={color} />
    </svg>
  );
}
