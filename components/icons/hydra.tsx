import React from 'react';
import { IconProps } from './types';

export const HydraIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '',
  ...props 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...props}
    >
      <path d="M4 2v20" />
      <path d="M20 3v2" />
      <path d="M20 11v2" />
      <path d="M20 19v2" />
      <path d="M12 2v8" />
      <path d="M12 18v4" />
      <path d="M4 10h8" />
      <path d="M4 18h8" />
      <path d="M12 10h8" />
      <circle cx="16" cy="10" r="2" />
      <circle cx="8" cy="10" r="2" />
      <circle cx="8" cy="18" r="2" />
    </svg>
  );
}; 