import React from 'react';
import { IconProps } from './types';

export const ChartTreeMapIcon: React.FC<IconProps> = ({ 
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
      <rect width="6" height="6" x="2" y="2" rx="1" />
      <rect width="6" height="6" x="16" y="2" rx="1" />
      <rect width="6" height="6" x="16" y="16" rx="1" />
      <rect width="6" height="6" x="2" y="16" rx="1" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
    </svg>
  );
}; 