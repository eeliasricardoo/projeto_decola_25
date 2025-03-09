"use client";

import { memo } from "react";
import { FadeIn } from "@/components/ui/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Benefit {
  title: string;
  description: string;
  icon?: IconDefinition;
}

interface BenefitsSectionProps {
  title?: string;
  benefits: Benefit[];
  footerText?: string;
  isActive?: boolean;
}

export const BenefitsSection = memo(function BenefitsSection({
  title = "Benefícios",
  benefits,
  footerText,
  isActive = true
}: BenefitsSectionProps) {
  return (
    <div className={`p-8 border-b border-gray-100 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
      <FadeIn delay={200}>
        <h2 className="text-2xl font-bold mb-8 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group">
                <FontAwesomeIcon 
                  icon={benefit.icon || faCheck} 
                  className="h-6 w-6 text-gray-600 transform transition-transform duration-300 group-hover:scale-125" 
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {footerText && (
          <div className="bg-gray-50 p-6 rounded-xl mt-8 border border-gray-100">
            <p className="text-gray-700 text-center">
              {footerText}
            </p>
          </div>
        )}
      </FadeIn>
    </div>
  );
}); 