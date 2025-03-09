"use client";

import { memo } from "react";
import { FadeIn } from "@/components/ui/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  icon: IconDefinition;
  cards?: {
    title: string;
    description: string;
    icon: IconDefinition;
  }[];
}

export const PageHeader = memo(function PageHeader({
  title,
  subtitle,
  description,
  icon,
  cards
}: PageHeaderProps) {
  return (
    <FadeIn className="w-full" duration={800}>
      <div className="bg-gray-100 p-8 rounded-t-xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 bg-gray-200 rounded-xl flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gray-300 rounded-xl transform scale-0 transition-transform group-hover:scale-100 origin-center"></div>
            <FontAwesomeIcon icon={icon} className="h-8 w-8 text-gray-700 relative z-10 transition-transform group-hover:scale-110" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-8 max-w-3xl">
          {description}
        </p>
        
        {cards && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <FadeIn key={index} delay={(index + 1) * 200} duration={600}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                      <FontAwesomeIcon icon={card.icon} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  );
}); 