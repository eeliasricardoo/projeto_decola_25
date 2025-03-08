"use client";

import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface HeroBannerProps {
  title: {
    firstPart: string;
    highlight: string;
    lastPart: string;
  };
  description: string;
  onButtonClick: () => void;
  buttonText?: string;
  bannerImage?: string;
}

// Componente para o título animado separado para melhorar a renderização
const AnimatedTitle = memo(({ title }: { title: HeroBannerProps['title'] }) => (
  <motion.h1 
    className="text-4xl md:text-5xl lg:text-6xl text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <motion.span 
      className="font-normal text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {title.firstPart} 
    </motion.span>
    <motion.span 
      className="font-bold text-[#F01624]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      {title.highlight}
    </motion.span>
    <motion.span 
      className="font-bold text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.8 }}
    >
      {title.lastPart}
    </motion.span>
  </motion.h1>
));
AnimatedTitle.displayName = 'AnimatedTitle';

// Componente para botão separado
const CallToActionButton = memo(({ 
  buttonText, 
  onClick 
}: { 
  buttonText: string; 
  onClick: () => void 
}) => (
  <Button 
    variant="outline" 
    className="mt-8 rounded-full px-6 py-2 border-gray-300 bg-white text-sm" 
    onClick={onClick}
  >
    {buttonText} 
    <FontAwesomeIcon icon={faAngleDown} className="ml-2" size="sm" />
  </Button>
));
CallToActionButton.displayName = 'CallToActionButton';

// Componente principal otimizado com React.memo
export const HeroBanner = memo(function HeroBanner({ 
  title, 
  description, 
  onButtonClick, 
  buttonText = "Conferir", 
  bannerImage = "/banner.png" 
}: HeroBannerProps) {
  return (
    <div className="relative">
      {/* Banner com conteúdo centralizado */}
      <div className="relative">
        <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '1840/826' }}>
          <Image 
            src={bannerImage} 
            alt="Banner Principal" 
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Conteúdo sobreposto ao banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center" suppressHydrationWarning>
          <div className="flex flex-col items-center gap-4 text-center">
            <AnimatedTitle title={title} />

            <TextAnimate 
              as="p" 
              className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mt-2"
              by="word"
              animation="slideUp"
              delay={0.8}
              duration={0.4}
              startOnView
            >
              {description}
            </TextAnimate>
            
            <CallToActionButton 
              buttonText={buttonText}
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}); 