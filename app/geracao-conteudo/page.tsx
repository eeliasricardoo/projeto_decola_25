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
      {/* Grid de cards principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Card de Criar Avatar */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex justify-center items-center h-12">
                  <FontAwesomeIcon icon={faPlus} className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-center text-gray-500 text-sm">Criar novo Avatar</p>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <div className="h-3 w-16 bg-gray-200 rounded-full"></div>
                </div>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-200">
                  <FontAwesomeIcon icon={faRobot} className="h-4 w-4 text-gray-400" />
                </Button>
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

        {/* Card de Geração de Conteúdo */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="h-32 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                <div className="bg-gray-300 h-6 w-32 rounded-md mb-4"></div>
                <div className="space-y-2 w-3/4">
                  <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                  <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                  <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faPenNib} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Geração de Conteúdo</h3>
                  <p className="text-gray-500 text-sm">Ferramenta para criação de vídeos e outras mídias</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Clones de Vídeo e Voz */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="h-24 bg-gray-100 rounded-lg p-4 flex flex-col justify-between">
                <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                    <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faVideo} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Clones de Vídeo e Voz</h3>
                  <p className="text-gray-500 text-sm">Treinamento e personalização dos Avatares e Clones de Voz</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Integração com LMS */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-sm">Conecte sua conta Toolzz LMS</h4>
                  <Badge className="bg-black text-white text-xs rounded-full px-3 py-1">Conectar</Badge>
                </div>
                <p className="text-gray-500 text-sm">LMS Token...</p>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faPlug} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Integração com LMS</h3>
                  <p className="text-gray-500 text-sm">Conexão direta com banco do LMS para sincronização de estruturas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Segunda linha de cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Card de Transcrição & Video Analyzer */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#9CA3AF" strokeWidth="2"/>
                  <path d="M10 8L16 12L10 16V8Z" fill="#9CA3AF"/>
                </svg>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faFileAudio} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Transcrição & Video Analyzer</h3>
                  <p className="text-gray-500 text-sm">Interpretação e indexação de vídeo e outras mídias para busca de IA</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de AI Video Insights */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21H3V3H21V21Z" stroke="#9CA3AF" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M3 16L8 11L13 16L21 8" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="h-24 bg-gray-100 rounded-lg flex flex-col justify-center px-4">
                  <div className="h-2 w-full bg-gray-300 rounded-full mb-2"></div>
                  <div className="h-2 w-3/4 bg-gray-300 rounded-full mb-2"></div>
                  <div className="h-2 w-1/2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Video Insights</h3>
                  <p className="text-gray-500 text-sm">Análise de métricas e insights para melhorar a experiência do usuário</p>
                </div>
              </div>
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