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
        {/* Card de Criar Avatar - DESTAQUE (2x2) */}
        <Card className="col-span-2 row-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden group">
          <CardContent className="p-0 h-full flex flex-col justify-between">
            <div className="flex-1">
              <div className="bg-white p-8 flex flex-col items-center justify-center h-48 relative overflow-hidden">
                {/* Ícone grande de adição */}
                <div className="mb-4">
                  <div className="h-16 w-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <FontAwesomeIcon icon={faPlus} className="h-8 w-8 text-gray-800" />
                  </div>
                </div>
                
                {/* Textos */}
                <div className="text-center">
                  <p className="text-center font-semibold text-gray-800 text-lg">Criar novo Avatar</p>
                  <div className="mt-2">
                    <Badge className="bg-gray-200 text-gray-700 cursor-default py-1">Representação visual</Badge>
                  </div>
                </div>
                
                {/* Botão de enviar vídeo (apenas visual) */}
                <div className="mt-4">
                  <div className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-4 rounded-md border border-gray-300 text-sm inline-block cursor-default">
                    Enviar vídeo
                  </div>
                </div>
                
                {/* Texto informativo */}
                <p className="text-gray-400 text-xs mt-4">
                  O seu vídeo deve ter até 2 minutos.
                </p>
              </div>
              
              {/* Seção de Clone */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                    <FontAwesomeIcon icon={faUserCircle} className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="text-center">
                    <Badge className="bg-gray-800 hover:bg-black text-white cursor-default py-1 px-3 mb-2">
                      Gerar Clone
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer com recursos de clones */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-base">Clones de Vídeo e Voz</h3>
                  <p className="text-gray-500 text-sm mt-1">Treinamento e personalização dos Avatars e Clones de Voz</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Geração de Conteúdo (2x1) */}
        <Card className="col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6 h-full">
            <div className="flex items-center h-full justify-between">
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Geração de Conteúdo</h3>
                <p className="text-gray-600">Ferramenta para construção de vídeos e outras mídias</p>
                <div className="flex gap-2 mt-4">
                  <Badge className="bg-red-100 text-red-700">Representação visual</Badge>
                </div>
              </div>
              <div className="h-20 w-20 flex items-center justify-center">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="h-8 w-8 text-gray-700" />
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
              <Badge className="bg-gray-200 text-gray-700">Indisponível</Badge>
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
              <Badge className="bg-gray-200 text-gray-700 flex items-center gap-2">
                <FontAwesomeIcon icon={faInfoCircle} className="h-3 w-3" />
                <span>Apenas informativo</span>
              </Badge>
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