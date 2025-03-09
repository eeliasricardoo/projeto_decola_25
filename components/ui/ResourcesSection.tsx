"use client";

import { memo } from "react";
import { FadeIn } from "@/components/ui/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

interface ResourcesSectionProps {
  title?: string;
  resources: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  isActive?: boolean;
}

export const ResourcesSection = memo(function ResourcesSection({
  title = "Recursos Principais",
  resources,
  buttonText,
  onButtonClick,
  isActive = true
}: ResourcesSectionProps) {
  return (
    <div className={`p-8 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
      <FadeIn delay={400}>
        <h2 className="text-2xl font-bold mb-8 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 flex items-center gap-3 hover:translate-y-[-2px]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 group">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 h-4 w-4 transform transition-transform duration-300 group-hover:scale-125" />
              </div>
              <span className="text-gray-700">{resource}</span>
            </div>
          ))}
        </div>
        
        {buttonText && (
          <div className="mt-8 text-center">
            <Button 
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-2 text-lg transform transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </FadeIn>
    </div>
  );
}); 