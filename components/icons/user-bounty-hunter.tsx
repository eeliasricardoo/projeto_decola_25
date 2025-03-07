import React from 'react';
import { IconProps } from './types';

export const UserBountyHunterIcon: React.FC<IconProps> = ({ 
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
      <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.3 3.6-3 4.24V11h2a5 5 0 0 1 5 5v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a5 5 0 0 1 5-5h2v-.76C9.3 9.6 8 7.95 8 6a4 4 0 0 1 4-4z" />
      <path d="M10 14v4" />
      <path d="M14 14v4" />
      <path d="M10 3.5v2" />
      <path d="M14 3.5v2" />
      <path d="M13.5 9h-3" />
    </svg>
  );
}; 