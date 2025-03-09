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
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroSectionProps } from "@/components/layout";

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
  return (
    <div className="container mx-auto px-4">
      {/* Bento Grid - Layout moderno inspirado em caixas bento */}
      <div className="grid grid-cols-4 gap-4 mb-16 auto-rows-[minmax(160px,auto)]">
        {/* Card de Criar Avatar - DESTAQUE (2x2) */}
        <Card className="col-span-2 row-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <div className="flex-1">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 flex flex-col items-center justify-center h-32">
                <div className="flex justify-center items-center h-12 w-12 rounded-full bg-black mb-2">
                  <FontAwesomeIcon icon={faPlus} className="h-5 w-5 text-white" />
                </div>
                <p className="text-center font-medium text-gray-800">Criar novo Avatar</p>
                <p className="text-center text-gray-500 text-sm mt-1">Enviar vídeo para processamento</p>
              </div>
              
              <div className="space-y-3">
                <div className="h-2 w-3/4 bg-gray-200 rounded-full mx-auto"></div>
                <div className="h-2 w-1/2 bg-gray-200 rounded-full mx-auto"></div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Criar novo Avatar</h3>
                  <p className="text-gray-500 text-sm">Enviar vídeo</p>
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
                <h3 className="font-semibold text-gray-900 mb-2">Geração de Conteúdo</h3>
                <p className="text-gray-500 text-sm">Ferramenta para criação de vídeos e outras mídias</p>
              </div>
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faPenNib} className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Clones de Vídeo e Voz (1x1) */}
        <Card className="col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-4 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={faVideo} className="h-5 w-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Clones de Vídeo</h3>
              <p className="text-gray-500 text-xs mt-1">Treinamento e personalização</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Voz (1x1) */}
        <Card className="col-span-1 bg-gray-900 border border-gray-200 rounded-xl shadow-sm overflow-hidden text-white">
          <CardContent className="p-4 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" stroke="white" strokeWidth="1"/>
                </svg>
              </div>
              <h3 className="font-semibold text-white text-sm">Clones de Voz</h3>
              <p className="text-gray-300 text-xs mt-1">Personalização</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Video Analyzer (1x1) */}
        <Card className="col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-4 h-full">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={faFileAudio} className="h-5 w-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm text-center">Video Analyzer</h3>
              <p className="text-gray-500 text-xs text-center mt-1">Análise de conteúdo</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Transcrição (1x1) */}
        <Card className="col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-4 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="#9CA3AF" strokeWidth="2"/>
                  <path d="M8 9H16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 13H16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 17H12" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Transcrição</h3>
              <p className="text-gray-500 text-xs mt-1">Texto para áudio</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Integração com LMS (2x1) */}
        <Card className="col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6 h-full">
            <div className="flex items-center h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <FontAwesomeIcon icon={faPlug} className="h-5 w-5 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Integração com LMS</h3>
                </div>
                <p className="text-gray-500 text-sm">Conexão direta com banco do LMS para sincronização</p>
              </div>
              <Badge className="bg-black text-white text-xs rounded-full px-4 py-1">Conectar</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Card de AI Video Insights (4x1) */}
        <Card className="col-span-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-sm overflow-hidden text-white">
          <CardContent className="p-6 h-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">AI Video Insights</h3>
                  <p className="text-gray-300 text-sm mt-1">Análise de métricas e insights para melhorar a experiência do usuário</p>
                </div>
              </div>
              <Button className="bg-white text-gray-900 hover:bg-gray-100">
                Ver métricas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seção de Informações do serviço */}
      <div className="max-w-[800px] mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
        <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">
          O time Toolzz AI Content Makers
        </h2>

        <p className="text-gray-700 text-sm mb-6">
          O time Toolzz AI Content Makers é a solução definitiva para empresas que precisam otimizar a
          criação, atualização e personalização de conteúdos dentro do LMS.
        </p>

        <div className="space-y-4 text-sm mb-6">
          <p className="text-gray-600">
            Nossa equipe de especialistas em Inteligência Artificial cuida de tudo: geração de avatares e clones de vídeo e voz, transcrição e lapidação de materiais e treinamento da IA para que ela compreenda e replique o conhecimento com máxima eficiência.
          </p>

          <p className="text-gray-600">
            Isso significa menos tempo, custo e esforço para manter os conteúdos sempre atualizados, garantindo um alto padrão de qualidade de forma ágil e personalizada para cada cliente.
          </p>

          <p className="text-gray-600">
            Se a necessidade é velocidade e precisão na adaptação de conteúdos, o Toolzz Service AI Content Makers entrega exatamente isso, transformando o fluxo de produção e atualização de conhecimento em algo simples, escalável e automatizado.
          </p>
        </div>
      </div>

      {/* Botão de Demonstração */}
      <div className="flex justify-center mb-16">
        <Button className="rounded-full py-6 px-8 bg-black hover:bg-gray-800 text-white">
          <Badge className="mr-4 bg-white/20 border-0 text-white px-4 py-1 rounded-full">
            Demonstração
          </Badge>
          Agende sua demonstração
        </Button>
      </div>
    </div>
  );
} 