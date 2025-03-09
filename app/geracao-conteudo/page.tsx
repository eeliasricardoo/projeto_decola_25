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
  faInfoCircle
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

      {/* Bento Grid - Layout moderno inspirado em caixas bento */}
      <div className="grid grid-cols-4 gap-4 mb-16 auto-rows-[minmax(160px,auto)]">
        {/* Card de Geração de Conteúdo (2x1) - agora expandido para 2x2 */}
        <Card className="col-span-2 row-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6 h-full">
            <div className="flex flex-col h-full justify-center">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-semibold text-gray-900 text-xl">Geração de Conteúdo</h3>
                <div className="h-16 w-16 flex items-center justify-center">
                  <FontAwesomeIcon icon={faWandMagicSparkles} className="h-10 w-10 text-gray-700" />
                </div>
              </div>
              <p className="text-gray-600 mb-6">Ferramenta para construção de vídeos e outras mídias</p>
              
              {/* Recursos adicionais */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-auto">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                    <FontAwesomeIcon icon={faFileVideo} className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-base">Recursos de mídia</h3>
                    <p className="text-gray-500 text-sm mt-1">Criação e edição de conteúdo educacional</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Clones de Vídeo (1x1) */}
        <Card className="col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-14 w-14 rounded-xl bg-gray-100 flex items-center justify-center mb-3 border border-gray-200">
                <FontAwesomeIcon icon={faVideo} className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base">Clones de Vídeo</h3>
              <p className="text-gray-500 text-sm mt-1">Representação visual</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Voz (1x1) */}
        <Card className="col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-14 w-14 rounded-xl bg-gray-100 flex items-center justify-center mb-3 border border-gray-200">
                <FontAwesomeIcon icon={faVolumeHigh} className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base">Clones de Voz</h3>
              <p className="text-gray-500 text-sm mt-1">Representação visual</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Video Analyzer (1x1) */}
        <Card className="col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="h-14 w-14 rounded-xl bg-gray-100 flex items-center justify-center mb-3 border border-gray-200">
                <FontAwesomeIcon icon={faFileAudio} className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base text-center">Video Analyzer</h3>
              <p className="text-gray-500 text-sm text-center mt-1">Representação visual</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Transcrição (1x1) */}
        <Card className="col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-14 w-14 rounded-xl bg-gray-100 flex items-center justify-center mb-3 border border-gray-200">
                <FontAwesomeIcon icon={faFileAudio} className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base">Transcrição</h3>
              <p className="text-gray-500 text-sm mt-1">Representação visual</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Integração com LMS (2x1) */}
        <Card className="col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6 h-full">
            <div className="flex items-center h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                    <FontAwesomeIcon icon={faPlug} className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">Integração com LMS</h3>
                </div>
                <p className="text-gray-500">Conexão direta com banco do LMS para aprendizado de estruturas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de AI Video Insights (4x1) */}
        <Card className="col-span-4 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6 h-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="h-14 w-14 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                  <FontAwesomeIcon icon={faChartBar} className="h-7 w-7 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-xl">AI Video Insights</h3>
                  <p className="text-gray-500 text-sm mt-1">Aplique os metadados extraídos para melhorar a experiência do usuário</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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