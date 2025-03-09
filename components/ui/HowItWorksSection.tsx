"use client";

import { memo } from "react";
import { FadeIn } from "@/components/ui/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Step {
  icon: IconDefinition;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  title?: string;
  steps: Step[];
  bgColor?: string;
  isActive?: boolean;
}

export const HowItWorksSection = memo(function HowItWorksSection({
  title = "Como Funciona?",
  steps,
  bgColor = "bg-gray-50",
  isActive = true
}: HowItWorksSectionProps) {
  return (
    <div className={`p-8 border-b border-gray-100 ${bgColor} transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
      <FadeIn>
        <h2 className="text-2xl font-bold mb-8 text-center">
          {title}
        </h2>

        <div className={`grid grid-cols-1 md:grid-cols-${steps.length > 3 ? '4' : steps.length} gap-4`}>
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                <FontAwesomeIcon 
                  icon={step.icon} 
                  className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="font-bold text-center mb-3">{step.title}</h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}); 