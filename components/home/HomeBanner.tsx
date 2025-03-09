import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimateOptimized } from "@/components/magicui";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface HomeBannerProps {
  onConferir: () => void;
}

export const HomeBanner = memo(function HomeBanner({ onConferir }: HomeBannerProps) {
  return (
    <div className="relative">
      <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '1840/826' }}>
        <Image 
          src="/banner.png" 
          alt="Banner Principal" 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* Conteúdo sobreposto ao banner */}
      <div className="absolute inset-0 flex flex-col items-center justify-center" suppressHydrationWarning>
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Título com formatação personalizada e animação */}
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
              Projeto 
            </motion.span>
            <motion.span 
              className="font-bold text-[#F01624]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Decola
            </motion.span>
            <motion.span 
              className="font-bold text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              &nbsp;25,
            </motion.span>
          </motion.h1>

          <TextAnimateOptimized 
            as="p" 
            className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mt-2"
            by="word"
            animation="slideUp"
            delay={0.8}
            duration={0.4}
            startOnView
          >
            Solução Integrada de Gestão, Criação e Aprendizado para Entregadores e Restaurantes
          </TextAnimateOptimized>
          
          {/* Botão Conferir */}
          <Button 
            variant="outline" 
            className="mt-8 rounded-full px-6 py-2 border-gray-300 bg-white text-sm hover:text-red-600 hover:border-red-200 transition-colors duration-300" 
            onClick={onConferir}
          >
            Conferir 
            <FontAwesomeIcon icon={faAngleDown} className="ml-2" size="sm" />
          </Button>
        </div>
      </div>
    </div>
  );
}); 