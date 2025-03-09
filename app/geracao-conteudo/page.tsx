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
  faBookmark
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
      <div className="bg-gray-100 p-4 rounded-lg mb-8 flex items-center gap-3 border border-gray-200">
        <FontAwesomeIcon icon={faInfoCircle} className="text-red-600 h-5 w-5" />
        <p className="text-gray-700 text-sm">
          <span className="font-medium">Nota:</span> As funcionalidades abaixo são apenas representações visuais das possibilidades do sistema. Para acessar os recursos, entre em contato com o suporte.
        </p>
      </div>

      {/* Layout com três grandes blocos, seguindo a estrutura da imagem */}
      <div className="grid grid-cols-2 gap-8 mb-16">
        {/* Bloco 1 - Avatar e Clones */}
        <div className="flex flex-col space-y-8">
          {/* Área de Avatar e Clone */}
          <div className="grid grid-cols-2 gap-4 h-64">
            {/* Card de Criar Avatar */}
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <CardContent className="p-4 h-full flex flex-col items-center justify-center space-y-4">
                {/* Ícone grande de adição */}
                <div className="h-16 w-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPlus} className="h-8 w-8 text-gray-800" />
                </div>
                
                <p className="text-center font-semibold text-gray-800 text-lg">Criar novo Avatar</p>
                
                <div className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-4 rounded-md border border-gray-300 text-sm inline-block cursor-default">
                  Enviar vídeo
                </div>
                
                <p className="text-gray-400 text-xs">
                  O seu vídeo deve ter até 2 minutos.
                </p>
              </CardContent>
            </Card>
            
            {/* Card de Gerar Clone */}
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <CardContent className="p-4 h-full flex flex-col items-center justify-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUserCircle} className="h-10 w-10 text-gray-400" />
                </div>
                
                <Badge className="bg-gray-800 hover:bg-black text-white cursor-default py-1 px-4">
                  Gerar Clone
                </Badge>
              </CardContent>
            </Card>
          </div>
          
          {/* Card de Clones de Vídeo e Voz */}
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <CardContent className="p-6 h-full">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-base">Clones de Vídeo e Voz</h3>
                  <p className="text-gray-500 text-sm mt-1">Treinamento e personalização dos Avatars e Clones de Voz</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bloco 2 - Geração de Conteúdo */}
        <div>
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center h-24 w-24">
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="h-10 w-10 text-gray-700" />
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="font-semibold text-gray-900 text-xl">Geração de Conteúdo</h3>
                  <p className="text-gray-600">Ferramenta para construção de vídeos e outras mídias</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bloco 3 - Integração, Transcrição e AI Tools (linha inteira) */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-8">
            {/* Coluna esquerda - Integração com LMS */}
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <CardContent className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="font-semibold text-gray-900 text-lg mb-2">Conecte sua conta Toolzz LMS</div>
                    <div className="bg-gray-100 py-2 px-3 rounded-md border border-gray-200 text-gray-400 mb-4">
                      API Token
                    </div>
                    <div className="flex justify-end">
                      <button className="bg-gray-800 hover:bg-black text-white py-1 px-4 rounded-md text-sm">
                        Conectar
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 mt-auto">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                      <FontAwesomeIcon icon={faPlug} className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-base">Integração com LMS</h3>
                      <p className="text-gray-500 text-sm mt-1">Conexão direta com banco do LMS para aprendizado de estruturas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Coluna direita - Transcrição & Video Analyzer */}
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <CardContent className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex-1 flex items-center justify-center">
                    <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faVideo} className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 mt-6">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                      <FontAwesomeIcon icon={faFileAudio} className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-base">Transcrição & Video Analyzer</h3>
                      <p className="text-gray-500 text-sm mt-1">Adaptação dos conteúdos de vídeo e outros materiais para tunning da IA.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Cards de AI Tools (3 cards na linha abaixo) */}
          <div className="grid grid-cols-3 gap-8 mt-8">
            {/* AI Video Tagger */}
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <CardContent className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-4 border border-gray-200">
                    <FontAwesomeIcon icon={faBookmark} className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="font-medium text-gray-800 text-base mb-2">AI Video Tagger</h3>
                  <p className="text-gray-500 text-sm">Ajuste os algoritmos de recomendação com base em objetos e pessoas que aparecem em um vídeo</p>
                </div>
              </CardContent>
            </Card>
            
            {/* AI Video Editor */}
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <CardContent className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-4 border border-gray-200">
                    <FontAwesomeIcon icon={faPencilAlt} className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="font-medium text-gray-800 text-base mb-2">AI Video Editor</h3>
                  <p className="text-gray-500 text-sm">Crie uma nova mídia com base no conteúdo existente usando o editor de vídeo</p>
                </div>
              </CardContent>
            </Card>
            
            {/* AI Video Insights */}
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <CardContent className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-4 border border-gray-200">
                    <FontAwesomeIcon icon={faChartBar} className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="font-medium text-gray-800 text-base mb-2">AI Video Insights</h3>
                  <p className="text-gray-500 text-sm">Aplique os metadados extraídos para melhorar a experiência do usuário</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Seção de Informações do serviço */}
      <div className="max-w-[800px] mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
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
        <Button className="rounded-full py-6 px-8 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 shadow-sm flex items-center gap-3">
          <Badge className="mr-2 bg-red-600 border-0 text-white px-4 py-1 rounded-full">
            Demonstração
          </Badge>
          Agende sua demonstração
        </Button>
      </div>
    </div>
  );
} 