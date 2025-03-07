import React from 'react';
import { IconProps } from './types';

export const SparklesIcon: React.FC<IconProps> = ({ 
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
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="m12 3 4 4" />
      <path d="m16 7-4-4-4 4" />
      <path d="M8 7h8" />
      <path d="m12 21-4-4" />
      <path d="m8 17 4 4 4-4" />
      <path d="M8 17h8" />
      <path d="M21 12h-3" />
      <path d="M6 12H3" />
      <path d="m19 12-2-2" />
      <path d="m19 12-2 2" />
      <path d="m5 12 2-2" />
      <path d="m5 12 2 2" />
    </svg>
  );
}; 