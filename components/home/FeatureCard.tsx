"use client";

import { memo } from "react";
import { WhiteBorderBeam } from "@/components/white-border-beam";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
  width?: number;
  href?: string;
  reverse?: boolean;
  initialOffset?: number;
}

// Componente interno para o conteúdo do card
const CardContent = memo(({
  title,
  description,
  icon,
  width,
  reverse,
  initialOffset
}: Omit<FeatureCardProps, 'href'>) => (
  <div 
    className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden h-[276px]"
    style={{ maxWidth: `${width}px` }}
  >
    <WhiteBorderBeam 
      size={40} 
      duration={8}
      reverse={reverse}
      initialOffset={initialOffset}
    />
    <div className="absolute bottom-0 left-0 w-full p-8 pb-8">
      <div className="flex flex-col">
        <div className="bg-gray-100 p-4 rounded-lg inline-block w-max">
          <FontAwesomeIcon icon={icon} size="lg" className="text-gray-600" />
        </div>
        <TextAnimate 
          as="h3" 
          className="text-xl font-bold mt-5"
          animation="slideUp"
          startOnView
          once
          delay={0.1}
        >
          {title}
        </TextAnimate>
        <TextAnimate
          as="p"
          className="text-sm text-gray-500 mt-2"
          animation="fadeIn"
          startOnView
          once
          delay={0.3}
        >
          {description}
        </TextAnimate>
      </div>
    </div>
  </div>
));
CardContent.displayName = 'CardContent';

// Componente principal memoizado
export const FeatureCard = memo(function FeatureCard({ 
  title, 
  description, 
  icon, 
  width = 360, 
  href,
  reverse = false,
  initialOffset = 0
}: FeatureCardProps) {
  // Se href for fornecido, envolver em Link
  if (href) {
    return (
      <Link href={href} className="block w-full" style={{ maxWidth: `${width}px` }}>
        <CardContent 
          title={title}
          description={description}
          icon={icon}
          width={width}
          reverse={reverse}
          initialOffset={initialOffset}
        />
      </Link>
    );
  }

  // Caso contrário, retornar o card diretamente
  return (
    <CardContent 
      title={title}
      description={description}
      icon={icon}
      width={width}
      reverse={reverse}
      initialOffset={initialOffset}
    />
  );
}); 