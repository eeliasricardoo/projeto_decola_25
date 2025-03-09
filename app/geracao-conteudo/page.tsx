"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faVideo, 
  faPlus, 
  faPenNib, 
  faFileAudio, 
  faChartLine, 
  faPlug,
  faRobot,
  faUserCircle,
  faVolumeHigh,
  faWandMagicSparkles,
  faFileVideo,
  faChartBar,
  faInfoCircle,
  faPencilAlt,
  faBookmark,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroSectionProps } from "@/components/layout";
import { useEffect, useState } from "react";

// Exportando hero props para ser usado no layout
export const heroProps: HeroSectionProps = {
  title: "Geração de Conteúdo",
  subtitle: "Educacional feito por IA",
  description: "Praticidade e facilidade para gerar vídeos, podcasts e mais",
  size: "large",
  animation: true,
  highlight: true
};

export default function GeracaoConteudoPage() {
  // Estado para controlar a exibição da animação
  const [showAnimation, setShowAnimation] = useState(false);
  
  // Efeito para iniciar a animação após o carregamento do componente
  useEffect(() => {
    // Delay de 500ms para iniciar a animação após o carregamento da página
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Informação sobre o propósito dos cards */}
      <div className="glass p-4 rounded-xl mb-8 flex items-center gap-3 border border-gray-200">
        <div className="h-8 w-8 neumorph-inset rounded-full flex items-center justify-center text-red-500">
          <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4" />
        </div>
        <p className="text-gray-700 text-sm">
          <span className="font-medium">Nota:</span> As funcionalidades abaixo são apenas representações visuais das possibilidades do sistema. Para acessar os recursos, entre em contato com o suporte.
        </p>
      </div>

      {/* Layout com três grandes blocos, seguindo a estrutura da imagem */}
      <div className="grid grid-cols-2 gap-8 mb-16">
        {/* Bloco 1 - Avatar e Clones */}
        <div className="flex flex-col space-y-8">
          {/* Área de Avatar e Clone */}
          <div className="grid grid-cols-2 gap-8 h-64">
            {/* Card de Criar Avatar */}
            <div className="neumorph hover-lift transition-all duration-300 overflow-hidden">
              <div className="p-6 h-full flex flex-col items-center justify-center space-y-4">
                {/* Ícone grande de adição */}
                <div className="w-16 h-16 rounded-xl gradient-gray flex items-center justify-center animate-soft-pulse">
                  <FontAwesomeIcon icon={faPlus} className="h-8 w-8 text-white" />
                </div>
                
                <p className="text-center font-semibold text-gray-800 text-lg">Criar novo Avatar</p>
                
                <div className="glass py-2 px-5 rounded-lg text-sm flex items-center gap-2 transition-all duration-300 cursor-default group">
                  <span>Enviar vídeo</span>
                  <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </div>
                
                <p className="text-gray-400 text-xs">
                  O seu vídeo deve ter até 2 minutos.
                </p>
              </div>
            </div>
            
            {/* Card de Gerar Clone */}
            <div className="neumorph hover-lift transition-all duration-300 overflow-hidden">
              <div className="p-6 h-full flex flex-col items-center justify-center space-y-6">
                <div className="w-20 h-20 rounded-full neumorph-inset flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50"></div>
                  <FontAwesomeIcon icon={faUserCircle} className="h-10 w-10 text-gray-500" />
                </div>
                
                <button className="py-2 px-6 rounded-lg gradient-gray text-white flex items-center gap-2 transition-all duration-300 ripple-effect">
                  <span>Gerar Clone</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Card de Clones de Vídeo e Voz */}
          <div className="neumorph hover-lift transition-all duration-300 overflow-hidden">
            <div className="p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl gradient-gray flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-lg tracking-wide">Clones de Vídeo e Voz</h3>
                  <p className="text-gray-500 text-sm mt-2">Treinamento e personalização dos Avatars e Clones de Voz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bloco 2 - Geração de Conteúdo */}
        <div>
          <div className="neumorph hover-lift transition-all duration-300 overflow-hidden h-full">
            <div className="p-8 h-full flex flex-col">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <div className="w-24 h-24 rounded-2xl gradient-purple animate-soft-pulse flex items-center justify-center">
                  <FontAwesomeIcon icon={faWandMagicSparkles} className="h-10 w-10 text-white" />
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="font-semibold text-gray-900 text-2xl tracking-wide">Geração de Conteúdo</h3>
                  <p className="text-gray-600">Ferramenta para construção de vídeos e outras mídias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bloco 3 - Integração, Transcrição e AI Tools (linha inteira) */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-8">
            {/* Coluna esquerda - Integração com LMS */}
            <div className="neumorph hover-lift transition-all duration-300 overflow-hidden">
              <div className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="font-semibold text-gray-900 text-lg mb-4">Conecte sua conta Toolzz LMS</div>
                    <div className="neumorph-inset py-3 px-4 rounded-lg text-gray-500 mb-4">
                      API Token
                    </div>
                    <div className="flex justify-end">
                      <button className="py-2 px-6 rounded-lg gradient-blue text-white flex items-center gap-2 transition-all duration-300 ripple-effect">
                        <span>Conectar</span>
                        <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mt-auto">
                    <div className="h-12 w-12 rounded-xl gradient-blue flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faPlug} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-lg tracking-wide">Integração com LMS</h3>
                      <p className="text-gray-500 text-sm mt-2">Conexão direta com banco do LMS para aprendizado de estruturas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Coluna direita - Transcrição & Video Analyzer */}
            <div className="neumorph hover-lift transition-all duration-300 overflow-hidden">
              <div className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl gradient-red animate-soft-pulse flex items-center justify-center">
                      <FontAwesomeIcon icon={faVideo} className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mt-6">
                    <div className="h-12 w-12 rounded-xl gradient-red flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faFileAudio} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-lg tracking-wide">Transcrição & Video Analyzer</h3>
                      <p className="text-gray-500 text-sm mt-2">Adaptação dos conteúdos de vídeo e outros materiais para tunning da IA.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cards de AI Tools (3 cards na linha abaixo) */}
          <div className="grid grid-cols-3 gap-8 mt-8">
            {/* AI Video Tagger */}
            <div className="neumorph hover-lift transition-all duration-300 overflow-hidden">
              <div className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="h-14 w-14 rounded-xl gradient-green animate-soft-pulse flex items-center justify-center mb-5">
                    <FontAwesomeIcon icon={faBookmark} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-medium text-gray-800 text-lg tracking-wide mb-3">AI Video Tagger</h3>
                  <p className="text-gray-500 text-sm">Ajuste os algoritmos de recomendação com base em objetos e pessoas que aparecem em um vídeo</p>
                </div>
              </div>
            </div>
            
            {/* AI Video Editor */}
            <div className="neumorph hover-lift transition-all duration-300 overflow-hidden">
              <div className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="h-14 w-14 rounded-xl gradient-blue animate-soft-pulse flex items-center justify-center mb-5">
                    <FontAwesomeIcon icon={faPencilAlt} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-medium text-gray-800 text-lg tracking-wide mb-3">AI Video Editor</h3>
                  <p className="text-gray-500 text-sm">Crie uma nova mídia com base no conteúdo existente usando o editor de vídeo</p>
                </div>
              </div>
            </div>
            
            {/* AI Video Insights */}
            <div className="neumorph hover-lift transition-all duration-300 overflow-hidden">
              <div className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="h-14 w-14 rounded-xl gradient-purple animate-soft-pulse flex items-center justify-center mb-5">
                    <FontAwesomeIcon icon={faChartBar} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-medium text-gray-800 text-lg tracking-wide mb-3">AI Video Insights</h3>
                  <p className="text-gray-500 text-sm">Aplique os metadados extraídos para melhorar a experiência do usuário</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Informações do serviço */}
      <div className="max-w-[800px] mx-auto neumorph p-8 mb-8">
        <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-800">
          O time Toolzz AI Content Makers
        </h2>

        <p className="text-gray-800 text-base mb-6">
          O time Toolzz AI Content Makers é a solução definitiva para empresas que precisam otimizar a
          criação, atualização e personalização de conteúdos dentro do LMS.
        </p>

        <div className="space-y-4 text-base mb-6">
          <p className="text-gray-700">
            Nossa equipe de especialistas em Inteligência Artificial cuida de tudo: geração de avatares e clones de vídeo e voz, transcrição e lapidação de materiais e treinamento da IA para que ela compreenda e replique o conhecimento com máxima eficiência.
          </p>

          <p className="text-gray-700">
            Isso significa menos tempo, custo e esforço para manter os conteúdos sempre atualizados, garantindo um alto padrão de qualidade de forma ágil e personalizada para cada cliente.
          </p>

          <p className="text-gray-700">
            Se a necessidade é velocidade e precisão na adaptação de conteúdos, o Toolzz Service AI Content Makers entrega exatamente isso, transformando o fluxo de produção e atualização de conhecimento em algo simples, escalável e automatizado.
          </p>
        </div>
      </div>

      {/* Botão de Demonstração */}
      <div className="flex justify-center mb-16">
        <button className="neumorph hover-lift py-5 px-8 rounded-full text-gray-800 flex items-center gap-3 transition-all duration-300 group">
          <span className="h-8 gradient-red px-4 py-1 rounded-full text-white text-sm mr-2">
            Demonstração
          </span>
          <span>Agende sua demonstração</span>
          <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
} 