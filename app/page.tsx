"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHydra, faUserBountyHunter, faSparkles, faChartTreeMap } from "@fortawesome/pro-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import Image from "next/image";

// Adicionando ícones à biblioteca
library.add(faAngleDown, faArrowRight, faHydra, faUserBountyHunter, faSparkles, faChartTreeMap);

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
        </div>

        {/* Cards Grid - Bento Grid sobre o banner */}
        <div className="relative -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 z-10 cards-section">
          <div className="flex flex-col items-center">
            {/* Primeira linha de cards - Layout customizado */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 mb-8 w-full">
              {/* Card 1 - Decola OS (752px de largura) */}
              <div 
                className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden h-[276px]"
                style={{ maxWidth: '752px' }}
              >
                <div className="absolute bottom-0 left-0 w-full p-8 pb-8">
                  <div className="flex flex-col">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block w-max">
                      <FontAwesomeIcon icon={faUserBountyHunter} size="lg" className="text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold mt-5">Decola OS</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Força de Trabalho com Agentes de IA
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Geração de Conteúdo (360px de largura) */}
              <div 
                className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden h-[276px]"
                style={{ maxWidth: '360px' }}
              >
                <div className="absolute bottom-0 left-0 w-full p-8 pb-8">
                  <div className="flex flex-col">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block w-max">
                      <FontAwesomeIcon icon={faSparkles} size="lg" className="text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold mt-5">Geração de Conteúdo com Clones de IA</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Ferramenta para construção de vídeos e outras mídias
                    </p>
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
                <div className="absolute bottom-0 left-0 w-full p-8 pb-8">
                  <div className="flex flex-col">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block w-max">
                      <FontAwesomeIcon icon={faHydra} size="lg" className="text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold mt-2">Experiência 3.0 do Hub de Conhecimento</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Conexão direta com banco do LMS para aprendizado de estruturas
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Dashboards (752px de largura) */}
              <div 
                className="relative p-0 hover:shadow-lg transition-shadow border border-gray-200 rounded-xl bg-white w-full overflow-hidden h-[276px]"
                style={{ maxWidth: '752px' }}
              >
                <div className="absolute bottom-0 left-0 w-full p-8 pb-8">
                  <div className="flex flex-col">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block w-max">
                      <FontAwesomeIcon icon={faChartTreeMap} size="lg" className="text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold mt-5">Dashboards para Governança e Análises</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Adaptação dos conteúdos de vídeo e outros materiais para tunning da IA
                    </p>
                  </div>
                </div>
              </div>
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
