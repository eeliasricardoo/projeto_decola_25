"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-md hover:border-gray-200 hover:translate-y-[-4px]">
      <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-xl bg-gray-100 group">
        <FontAwesomeIcon icon={icon} className="w-8 h-8 text-gray-700 transform transition-transform group-hover:scale-110" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
} 