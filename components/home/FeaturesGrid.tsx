"use client";

import { memo, useMemo } from "react";
import { FeatureCard } from "./FeatureCard";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Feature {
  title: string;
  description: string;
  icon: IconDefinition;
  width?: number;
  href?: string;
  reverse?: boolean;
  initialOffset?: number;
}

interface FeaturesGridProps {
  features: Feature[];
  onBacklogClick?: () => void;
  showBacklogButton?: boolean;
  backlogButtonText?: string;
}

// Botão de backlog separado como componente para melhor otimização
const BacklogButton = memo(({ 
  onClick, 
  text 
}: { 
  onClick?: () => void, 
  text: string 
}) => (
  <div className="w-full border-t border-gray-200 py-8">
    <div className="flex justify-center">
      <Button 
        variant="ghost" 
        className="flex items-center text-gray-700" 
        onClick={onClick}
      >
        {text} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </Button>
    </div>
  </div>
));
BacklogButton.displayName = 'BacklogButton';

// Componente de linha de features
const FeatureRow = memo(({ features, isFirstRow }: { features: Feature[], isFirstRow: boolean }) => (
  <div className="flex flex-col lg:flex-row justify-center gap-8 mb-8 w-full">
    {features.map((feature, index) => (
      <FeatureCard
        key={`${feature.title}-${index}`}
        title={feature.title}
        description={feature.description}
        icon={feature.icon}
        width={feature.width || (isFirstRow ? (index === 0 ? 752 : 360) : (index === 1 ? 752 : 360))}
        href={feature.href}
        reverse={feature.reverse}
        initialOffset={feature.initialOffset}
      />
    ))}
  </div>
));
FeatureRow.displayName = 'FeatureRow';

// Componente principal memoizado
export const FeaturesGrid = memo(function FeaturesGrid({ 
  features, 
  onBacklogClick, 
  showBacklogButton = true,
  backlogButtonText = "Ver backlog completo"
}: FeaturesGridProps) {
  
  // Memoização da divisão de features para prevenir recálculos desnecessários
  const { firstRowFeatures, secondRowFeatures } = useMemo(() => {
    return {
      firstRowFeatures: features.slice(0, 2),
      secondRowFeatures: features.slice(2)
    };
  }, [features]);

  return (
    <div className="relative -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 z-10 cards-section">
      <div className="flex flex-col items-center">
        {/* Primeira linha de cards */}
        <FeatureRow features={firstRowFeatures} isFirstRow={true} />

        {/* Segunda linha de cards */}
        {secondRowFeatures.length > 0 && (
          <FeatureRow features={secondRowFeatures} isFirstRow={false} />
        )}

        {/* Botão Ver Backlog */}
        {showBacklogButton && (
          <BacklogButton 
            onClick={onBacklogClick} 
            text={backlogButtonText} 
          />
        )}
      </div>
    </div>
  );
}); 