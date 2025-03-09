"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  highlight?: boolean;
  size?: "small" | "medium" | "large";
  animation?: boolean;
}

export const HeroSection = memo(function HeroSection({ 
  title, 
  subtitle, 
  description, 
  highlight = true,
  size = "medium",
  animation = true
}: HeroSectionProps) {
  // Define os tamanhos de texto com base no tamanho selecionado
  const titleSizes = {
    small: "text-4xl md:text-5xl",
    medium: "text-5xl md:text-6xl",
    large: "text-6xl md:text-[96px]"
  };

  const subtitleSizes = {
    small: "text-2xl md:text-3xl",
    medium: "text-3xl md:text-4xl",
    large: "text-4xl md:text-[60px]"
  };

  const descriptionSizes = {
    small: "text-base md:text-lg",
    medium: "text-lg md:text-xl",
    large: "text-xl md:text-[24px]"
  };

  // Conteúdo do título com ou sem destaque
  const titleContent = highlight ? (
    <>
      <span className="text-black">{title.split(" ")[0]} </span>
      <span className="text-red-600">{title.split(" ").slice(1).join(" ")}</span>
    </>
  ) : (
    <span className="text-black">{title}</span>
  );

  // Componente base para renderização sem animação
  const baseComponent = (
    <div className="w-full py-16 px-8 text-center mb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className={`${titleSizes[size]} font-bold leading-tight mb-4`}>
          {titleContent}
        </h1>
        
        <h2 className={`${subtitleSizes[size]} font-medium text-gray-800 mb-8`}>
          {subtitle}
        </h2>
        
        <p className={`${descriptionSizes[size]} text-gray-600 max-w-4xl mx-auto`}>
          {description}
        </p>

        <div className="h-1 w-24 bg-red-600 mx-auto mt-8 rounded-full"></div>
      </div>
    </div>
  );

  // Componente com animação
  const animatedComponent = (
    <div className="w-full py-16 px-8 text-center mb-16 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className={`${titleSizes[size]} font-bold leading-tight mb-4`}>
          {titleContent}
        </h1>
        
        <h2 className={`${subtitleSizes[size]} font-medium text-gray-800 mb-8`}>
          {subtitle}
        </h2>
        
        <TextAnimate 
          as="p" 
          className={`${descriptionSizes[size]} text-gray-600 max-w-4xl mx-auto`}
          by="word"
          animation="slideUp"
          delay={0.4}
          duration={0.3}
          startOnView
        >
          {description}
        </TextAnimate>

        <div className="h-1 w-24 bg-red-600 mx-auto mt-8 rounded-full"></div>
      </motion.div>
    </div>
  );

  return animation ? animatedComponent : baseComponent;
}); 