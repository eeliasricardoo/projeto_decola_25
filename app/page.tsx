"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight, faBrain } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  UserBountyHunterIcon, 
  SparklesIcon, 
  ChartTreeMapIcon 
} from "@/components/icons";
import Image from "next/image";

// Adicionando ícones à biblioteca
library.add(faAngleDown, faArrowRight);

export default function Home() {
  // Função para lidar com o clique no botão Ver backlog
  const handleVerBacklog = () => {
    // Aqui pode adicionar a navegação ou abrir em nova janela
    window.location.href = '#backlog';
  };

  // Função para lidar com o clique no botão Conferir
  const handleConferir = () => {
    // Rolagem suave até a seção de cards
    document.querySelector('.cards-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Container principal com largura máxima */}
      <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative">
          {/* Logo Toolzz no topo */}
          <div className="absolute top-8 left-0 right-0 flex justify-center z-20">
            <div className="flex items-center justify-center">
              <div className="bg-black rounded-lg w-8 h-8 flex items-center justify-center text-white font-bold mr-2">
                <span className="text-xs">TZ</span>
              </div>
              <span className="font-semibold text-xl">Toolzz</span>
            </div>
          </div>

          {/* Banner com conteúdo centralizado */}
          <div className="relative">
            <Image 
              src="/banner.png" 
              alt="Banner Principal" 
              width={1840} 
              height={826}
              className="w-full h-auto"
              priority
            />
            
            {/* Conteúdo sobreposto ao banner */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Projeto <span className="text-[#F01624]">Decola</span> 25,
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mt-2">
                  Solução Integrada de Gestão, Criação e Aprendizado
                  <br />para Entregadores e Restaurantes
                </p>
                
                {/* Botão Conferir */}
                <Button 
                  variant="outline" 
                  className="mt-8 rounded-full px-6 py-2 border-gray-300 bg-white text-sm" 
                  onClick={handleConferir}
                >
                  Conferir <FontAwesomeIcon icon={faAngleDown} className="ml-2" size="xs" />
                </Button>
              </div>
            </div>
          </div>

          {/* Cards Grid - Bento Grid sobre o banner */}
          <div className="relative -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 z-10 cards-section flex flex-col items-center">
            {/* Primeira linha de cards - Layout customizado */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 mb-8 w-full px-4">
              {/* Card 1 - Decola OS (752px de largura) */}
              <Card 
                className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden" 
                style={{ maxWidth: '752px', height: '276px' }}
              >
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start p-8 pb-[30px]">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <UserBountyHunterIcon size={24} className="text-gray-600" />
                  </div>
                  <CardTitle className="text-xl font-bold mt-5">Decola OS</CardTitle>
                  <p className="text-sm text-gray-500 mt-[10px]">
                    Força de Trabalho com Agentes de IA
                  </p>
                </div>
              </Card>

              {/* Card 2 - Geração de Conteúdo (360px de largura) */}
              <Card 
                className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden" 
                style={{ maxWidth: '360px', height: '276px' }}
              >
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start p-8 pb-[30px]">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <SparklesIcon size={24} className="text-gray-600" />
                  </div>
                  <CardTitle className="text-xl font-bold mt-5">Geração de Conteúdo com Clones de IA</CardTitle>
                  <p className="text-sm text-gray-500 mt-[10px]">
                    Ferramenta para construção de vídeos e outras mídias
                  </p>
                </div>
              </Card>
            </div>

            {/* Segunda linha de cards - Layout customizado */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 mb-8 w-full px-4">
              {/* Card 3 - HYDRA (360px de largura) */}
              <Card 
                className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden" 
                style={{ maxWidth: '360px', height: '276px' }}
              >
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start p-8 pb-[30px]">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <FontAwesomeIcon icon={faBrain} size="lg" className="text-gray-600" />
                  </div>
                  <CardTitle className="text-xl font-bold mt-[10px]">Experiência 3.0 do Hub de Conhecimento</CardTitle>
                  <p className="text-sm text-gray-500 mt-[10px]">
                    Conexão direta com banco do LMS para aprendizado de estruturas
                  </p>
                </div>
              </Card>

              {/* Card 4 - Dashboards (752px de largura) */}
              <Card 
                className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden" 
                style={{ maxWidth: '752px', height: '276px' }}
              >
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start p-8 pb-[30px]">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <ChartTreeMapIcon size={24} className="text-gray-600" />
                  </div>
                  <CardTitle className="text-xl font-bold mt-5">Dashboards para Governança e Análises</CardTitle>
                  <p className="text-sm text-gray-500 mt-[10px]">
                    Adaptação dos conteúdos de vídeo e outros materiais para tunning da IA
                  </p>
                </div>
              </Card>
            </div>

            {/* Botão Ver Backlog */}
            <div className="flex justify-center my-8">
              <Button 
                variant="ghost" 
                className="flex items-center" 
                onClick={handleVerBacklog}
              >
                Ver backlog completo <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
