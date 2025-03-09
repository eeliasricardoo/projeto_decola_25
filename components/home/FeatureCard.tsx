"use client";

import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { TextAnimateOptimized } from "@/components/magicui";
import { WhiteBorderBeam } from "@/components/white-border-beam";
import Link from "next/link";

export interface FeatureCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  href: string;
  width?: number | string;
  height?: number | string;
  animationDelay?: number;
  animationOffset?: number;
  reverse?: boolean;
}

export const FeatureCard = memo(function FeatureCard({
  icon,
  title,
  description,
  href,
  width = 360,
  height = 276,
  animationDelay = 0.1,
  animationOffset = 0,
  reverse = false,
}: FeatureCardProps) {
  const maxWidth = typeof width === 'number' ? `${width}px` : width;
  
  return (
    <Link href={href} className="block w-full" style={{ maxWidth }}>
      <div 
        className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden cursor-pointer group"
        style={{ height }}
      >
        <WhiteBorderBeam 
          size={40} 
          duration={8}
          reverse={reverse}
          initialOffset={animationOffset}
        />
        <div className="absolute bottom-0 left-0 w-full p-8 pb-8">
          <div className="flex flex-col">
            <div className="bg-gray-100 p-4 rounded-lg inline-block w-max transition-colors duration-300 group-hover:bg-red-50">
              <FontAwesomeIcon icon={icon} size="lg" className="text-gray-600 transition-colors duration-300 group-hover:text-red-600" />
            </div>
            <TextAnimateOptimized 
              as="h3" 
              className="text-xl font-bold mt-5 group-hover:text-red-600 transition-colors duration-300"
              animation="slideUp"
              startOnView
              once
              delay={animationDelay}
            >
              {title}
            </TextAnimateOptimized>
            <TextAnimateOptimized
              as="p"
              className="text-sm text-gray-500 mt-2"
              animation="fadeIn"
              startOnView
              once
              delay={animationDelay + 0.2}
            >
              {description}
            </TextAnimateOptimized>
          </div>
        </div>
      </div>
    </Link>
  );
}); 