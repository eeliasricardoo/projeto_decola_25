"use client";

import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FadeIn } from "@/components/ui/animations";

interface FeatureCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  delay?: number;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
}

export const FeatureCard = memo(function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
  iconBgColor = "bg-gray-100",
  iconColor = "text-gray-600",
  className = ""
}: FeatureCardProps) {
  return (
    <FadeIn delay={delay} duration={600} className={className}>
      <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
        <div className={`w-10 h-10 ${iconBgColor} rounded-full flex items-center justify-center flex-shrink-0 group`}>
          <FontAwesomeIcon icon={icon} className={`h-5 w-5 ${iconColor} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
});

export const FeatureCardCentered = memo(function FeatureCardCentered({
  icon,
  title,
  description,
  delay = 0,
  iconBgColor = "bg-gray-100",
  iconColor = "text-gray-600",
  className = ""
}: FeatureCardProps) {
  return (
    <FadeIn delay={delay} duration={600} className={className}>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
        <div className={`w-16 h-16 ${iconBgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group`}>
          <FontAwesomeIcon 
            icon={icon} 
            className={`h-8 w-8 ${iconColor} transform transition-transform duration-300 group-hover:scale-110`} 
          />
        </div>
        <h3 className="font-bold text-center mb-3">{title}</h3>
        <p className="text-gray-600 text-center">
          {description}
        </p>
      </div>
    </FadeIn>
  );
}); 