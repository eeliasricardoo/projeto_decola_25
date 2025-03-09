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
        <Card className="col-span-2 row-span-2 bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden group">
          <CardContent className="p-0 h-full flex flex-col justify-between">
            <div className="flex-1">
              <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-800 rounded-t-xl p-0 flex flex-col items-center justify-center h-48 text-white shadow-lg relative overflow-hidden">
                {/* Efeitos visuais de fundo */}
                <div className="absolute top-0 left-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-400/30 via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-yellow-400/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl"></div>
                
                {/* Partículas animadas de fundo */}
                <div className="absolute inset-0 overflow-hidden">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${3 + Math.random() * 4}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Badges informativos com efeito de glowing */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 backdrop-blur-md border border-white/30 shadow-sm text-white px-3 animate-pulse">
                    Representação visual
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 backdrop-blur-md border border-white/30 shadow-sm text-white px-3">
                    Não interativo
                  </Badge>
                </div>
                
                {/* Container para os ícones animados */}
                <div className={`flex items-center justify-center gap-8 mt-2 transition-opacity duration-1000 ease-in-out ${showAnimation ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="w-24 h-24">
                    <div className="w-full h-full bg-white/20 rounded-full backdrop-blur-md flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-300/20 to-transparent"></div>
                      <div className="absolute -inset-1 bg-white/5 animate-spin-slow opacity-70"></div>
                      <FontAwesomeIcon icon={faUserCircle} className="h-12 w-12 text-white animate-bounce" />
                    </div>
                  </div>
                  <div className="w-24 h-24">
                    <div className="w-full h-full bg-white/20 rounded-full backdrop-blur-md flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-300/20 to-transparent"></div>
                      <div className="absolute w-full h-1 bg-white/10 top-1/2 animate-pulse"></div>
                      <div className="absolute h-full w-1 bg-white/10 left-1/2 animate-pulse"></div>
                      <FontAwesomeIcon icon={faRobot} className="h-12 w-12 text-white animate-pulse" />
                    </div>
                  </div>
                </div>
                
                {/* Textos com efeito de fade-in */}
                <div className={`mt-4 transition-all duration-1000 ease-in-out ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <p className="text-center font-bold text-white text-2xl tracking-tight">Avatares por IA</p>
                  <p className="text-center text-white/80 text-sm mt-1">Processamento avançado de vídeos para avatares</p>
                </div>
              </div>
              
              {/* Seção de recursos do avatar com animações */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="font-medium text-gray-900">Recursos do avatar</p>
                  </div>
                  <Badge className="bg-red-50 text-red-700 border border-red-100">
                    Representação visual
                  </Badge>
                </div>
                
                {/* Representação visual dos recursos de avatar */}
                <div className="flex items-center gap-4 group">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex-shrink-0 shadow-sm flex items-center justify-center border border-red-200 transition-transform duration-500 ease-in-out group-hover:rotate-12">
                    <FontAwesomeIcon icon={faUserCircle} className="h-12 w-12 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="relative overflow-hidden h-3 bg-gray-100 rounded-full mb-3 w-full">
                      <div className={`absolute bg-gradient-to-r from-red-400 to-red-600 h-full transition-all duration-2000 ease-in-out rounded-full ${showAnimation ? 'w-3/4' : 'w-0'}`}></div>
                    </div>
                    <div className="relative overflow-hidden h-3 bg-gray-100 rounded-full w-full">
                      <div className={`absolute bg-gradient-to-r from-red-400 to-red-600 h-full transition-all duration-2000 ease-in-out delay-300 rounded-full ${showAnimation ? 'w-1/2' : 'w-0'}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer com tecnologia de avatares */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center border border-red-100 shadow-sm relative">
                  {/* Efeito de pulsação */}
                  <div className="absolute inset-0 rounded-full bg-red-400/20 animate-ping opacity-75"></div>
                  <FontAwesomeIcon icon={faFileVideo} className="h-8 w-8 text-red-600 relative z-10" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Tecnologia de Avatares</h3>
                  <p className="text-gray-600 text-sm">Visualização do recurso de criação de avatares</p>
                </div>
                
                {/* Pontinhos animados indicando processamento */}
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-0"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-300"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-700"></div>
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
                <p className="text-gray-600">Crie vídeos, textos e áudios didáticos com IA</p>
                <div className="flex gap-2 mt-4">
                  <Badge className="bg-red-100 text-red-700">Representação visual</Badge>
                </div>
              </div>
              <div className="h-20 w-20 bg-red-600 rounded-2xl flex items-center justify-center">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Clones de Vídeo (1x1) */}
        <Card className="col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-14 w-14 rounded-xl bg-red-600 flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={faVideo} className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base">Clones de Vídeo</h3>
              <p className="text-gray-600 text-sm mt-1">Representação visual</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Voz (1x1) */}
        <Card className="col-span-1 bg-gray-900 border border-gray-800 rounded-xl shadow-sm overflow-hidden text-white">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-14 w-14 rounded-xl bg-red-700 flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={faVolumeHigh} className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white text-base">Clones de Voz</h3>
              <p className="text-gray-300 text-sm mt-1">Representação visual</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Video Analyzer (1x1) */}
        <Card className="col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="h-14 w-14 rounded-xl bg-red-600 flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={faFileAudio} className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base text-center">Video Analyzer</h3>
              <p className="text-gray-600 text-sm text-center mt-1">Representação visual</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Transcrição (1x1) */}
        <Card className="col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-14 w-14 rounded-xl bg-red-600 flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={faFileAudio} className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base">Transcrição</h3>
              <p className="text-gray-600 text-sm mt-1">Representação visual</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Integração com LMS (2x1) */}
        <Card className="col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6 h-full">
            <div className="flex items-center h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-xl bg-red-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={faPlug} className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">Integração com LMS</h3>
                </div>
                <p className="text-gray-600">Representação visual da conexão com LMS</p>
              </div>
              <Badge className="bg-gray-200 text-gray-700">Indisponível</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Card de AI Video Insights (4x1) */}
        <Card className="col-span-4 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 rounded-xl shadow-sm overflow-hidden text-white">
          <CardContent className="p-6 h-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="h-14 w-14 bg-red-700 rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartBar} className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-xl">AI Video Insights</h3>
                  <p className="text-gray-300 text-sm mt-1">Representação visual da análise de estatísticas</p>
                </div>
              </div>
              <Badge className="bg-gray-700 text-gray-200 flex items-center gap-2">
                <FontAwesomeIcon icon={faInfoCircle} className="h-3 w-3" />
                <span>Apenas informativo</span>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seção de Informações do serviço */}
      <div className="max-w-[800px] mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
        <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 text-red-800">
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
        <Button className="rounded-full py-6 px-8 bg-red-600 hover:bg-red-700 text-white shadow-md flex items-center gap-3">
          <Badge className="mr-2 bg-white/20 border-0 text-white px-4 py-1 rounded-full">
            Demonstração
          </Badge>
          Agende sua demonstração
        </Button>
      </div>
    </div>
  );
} 