"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { WhiteBorderBeam } from "@/components/white-border-beam";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faUserBountyHunter, faSparkles, faHydra, faChartTreeMap } from "@fortawesome/pro-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

// Componente cliente para conteúdo interativo
function ClientContent() {
  // Função para lidar com o clique no botão Ver backlog
  const handleVerBacklog = () => {
    window.location.href = '#backlog';
  };

  // Função para lidar com o clique no botão Conferir
  const handleConferir = () => {
    document.querySelector('.cards-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white" suppressHydrationWarning>
      {/* Container principal com largura máxima */}
      <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative">
          {/* Banner com conteúdo centralizado */}
          <div className="relative">
            <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '1840/826' }}>
              <Image 
                src="/banner.png" 
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

                <TextAnimate 
                  as="p" 
                  className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mt-2"
                  by="word"
                  animation="slideUp"
                  delay={0.8}
                  duration={0.4}
                  startOnView
                >
                  Solução Integrada de Gestão, Criação e Aprendizado para Entregadores e Restaurantes
                </TextAnimate>
                
                {/* Botão Conferir */}
                <Button 
                  variant="outline" 
                  className="mt-8 rounded-full px-6 py-2 border-gray-300 bg-white text-sm" 
                  onClick={handleConferir}
                >
                  Conferir 
                  <FontAwesomeIcon icon={faAngleDown} className="ml-2" size="sm" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid - Bento Grid sobre o banner */}
        <div className="relative -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 z-10 cards-section">
          <div className="flex flex-col items-center">
            {/* Primeira linha de cards - Layout customizado */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 mb-8 w-full">
              {/* Card 1 - Decola OS (752px de largura) */}
              <Link href="/decola-os" className="block w-full" style={{ maxWidth: '752px' }}>
                <div 
                  className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden h-[276px] cursor-pointer"
                >
                  <WhiteBorderBeam 
                    size={40} 
                    duration={8}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8 pb-8">
                    <div className="flex flex-col">
                      <div className="bg-gray-100 p-4 rounded-lg inline-block w-max">
                        <FontAwesomeIcon icon={faUserBountyHunter} size="lg" className="text-gray-600" />
                      </div>
                      <TextAnimate 
                        as="h3" 
                        className="text-xl font-bold mt-5"
                        animation="slideUp"
                        startOnView
                        once
                        delay={0.1}
                      >
                        Decola OS
                      </TextAnimate>
                      <TextAnimate
                        as="p"
                        className="text-sm text-gray-500 mt-2"
                        animation="fadeIn"
                        startOnView
                        once
                        delay={0.3}
                      >
                        Força de Trabalho com Agentes de IA
                      </TextAnimate>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Card 2 - Geração de Conteúdo (360px de largura) */}
              <div 
                className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden h-[276px]"
                style={{ maxWidth: '360px' }}
              >
                <WhiteBorderBeam 
                  size={40} 
                  duration={8}
                  reverse
                  initialOffset={25}
                />
                <div className="absolute bottom-0 left-0 w-full p-8 pb-8">
                  <div className="flex flex-col">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block w-max">
                      <FontAwesomeIcon icon={faSparkles} size="lg" className="text-gray-600" />
                    </div>
                    <TextAnimate 
                      as="h3" 
                      className="text-xl font-bold mt-5"
                      animation="slideUp"
                      startOnView
                      once
                      delay={0.2}
                    >
                      Geração de Conteúdo com Clones de IA
                    </TextAnimate>
                    <TextAnimate
                      as="p"
                      className="text-sm text-gray-500 mt-2"
                      animation="fadeIn"
                      startOnView
                      once
                      delay={0.4}
                    >
                      Ferramenta para construção de vídeos e outras mídias
                    </TextAnimate>
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda linha de cards - Layout customizado */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 mb-8 w-full">
              {/* Card 3 - HYDRA (360px de largura) */}
              <div 
                className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden h-[276px]"
                style={{ maxWidth: '360px' }}
              >
                <WhiteBorderBeam 
                  size={40} 
                  duration={8}
                  initialOffset={50}
                />
                <div className="absolute bottom-0 left-0 w-full p-8 pb-8">
                  <div className="flex flex-col">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block w-max">
                      <FontAwesomeIcon icon={faHydra} size="lg" className="text-gray-600" />
                    </div>
                    <TextAnimate 
                      as="h3" 
                      className="text-xl font-bold mt-2"
                      animation="slideUp"
                      startOnView
                      once
                      delay={0.1}
                    >
                      Experiência 3.0 do Hub de Conhecimento
                    </TextAnimate>
                    <TextAnimate
                      as="p"
                      className="text-sm text-gray-500 mt-2"
                      animation="fadeIn"
                      startOnView
                      once
                      delay={0.3}
                    >
                      Conexão direta com banco do LMS para aprendizado de estruturas
                    </TextAnimate>
                  </div>
                </div>
              </div>

              {/* Card 4 - Dashboards (752px de largura) */}
              <div 
                className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden h-[276px]"
                style={{ maxWidth: '752px' }}
              >
                <WhiteBorderBeam 
                  size={40} 
                  duration={8}
                  reverse
                  initialOffset={75}
                />
                <div className="absolute bottom-0 left-0 w-full p-8 pb-8">
                  <div className="flex flex-col">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block w-max">
                      <FontAwesomeIcon icon={faChartTreeMap} size="lg" className="text-gray-600" />
                    </div>
                    <TextAnimate 
                      as="h3" 
                      className="text-xl font-bold mt-5"
                      animation="slideUp"
                      startOnView
                      once
                      delay={0.2}
                    >
                      Dashboards para Governança e Análises
                    </TextAnimate>
                    <TextAnimate
                      as="p"
                      className="text-sm text-gray-500 mt-2"
                      animation="fadeIn"
                      startOnView
                      once
                      delay={0.4}
                    >
                      Adaptação dos conteúdos de vídeo e outros materiais para tunning da IA
                    </TextAnimate>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão Ver Backlog - Ajustado conforme imagem */}
            <div className="w-full border-t border-gray-200 py-8">
              <div className="flex justify-center">
                <Button 
                  variant="ghost" 
                  className="flex items-center text-gray-700" 
                  onClick={handleVerBacklog}
                >
                  Ver backlog completo <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal com controle de hidratação
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  // Efeito para marcar quando a hidratação no cliente está completa
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Técnica de renderização segura para evitar problemas de hidratação
  // Durante a renderização no servidor, gera um esqueleto ou conteúdo simples
  if (!isMounted) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-white" suppressHydrationWarning>
        {/* Container vazio com a mesma estrutura para não causar alterações no layout */}
        <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="relative">
            {/* Espaço reservado para o banner */}
            <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '1840/826', backgroundColor: '#f0f0f0' }}>
              {/* Nenhum conteúdo interativo */}
            </div>
          </div>
          {/* Espaço reservado para os cards */}
          <div className="relative mt-8 z-10">
            {/* Nenhum conteúdo interativo */}
          </div>
        </div>
      </div>
    );
  }

  // Quando a hidratação estiver concluída, renderiza o conteúdo completo
  return <ClientContent />;
}
