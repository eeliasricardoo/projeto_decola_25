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
  faChartBar
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
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
        <Card className="col-span-2 row-span-2 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <div className="flex-1">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 mb-4 flex flex-col items-center justify-center h-36 text-white shadow-inner">
                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-white mb-3 shadow-md">
                  <FontAwesomeIcon icon={faPlus} className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-center font-medium text-white text-lg">Criar novo Avatar</p>
                <p className="text-center text-blue-100 text-sm mt-1">Enviar vídeo para processamento</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden">
                    <Image 
                      src="/placeholder-avatar.jpg" 
                      alt="Avatar" 
                      width={40} 
                      height={40}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Seu último avatar</p>
                    <p className="text-xs text-gray-500">Criado em 15/08/2023</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faFileVideo} className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Criar Avatar com IA</h3>
                  <p className="text-gray-600 text-sm">Tecnologia de ponta para criar avatares realistas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Geração de Conteúdo (2x1) */}
        <Card className="col-span-2 bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 h-full">
            <div className="flex items-center h-full justify-between">
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Geração de Conteúdo</h3>
                <p className="text-gray-600">Crie vídeos, textos e áudios didáticos com IA</p>
                <div className="flex gap-2 mt-4">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Novo</Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Educacional</Badge>
                </div>
              </div>
              <div className="h-20 w-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-md">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Clones de Vídeo (1x1) */}
        <Card className="col-span-1 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-3 shadow-md">
                <FontAwesomeIcon icon={faVideo} className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base">Clones de Vídeo</h3>
              <p className="text-gray-600 text-sm mt-1">Criação e personalização</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Voz (1x1) */}
        <Card className="col-span-1 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl shadow-md overflow-hidden text-white hover:shadow-lg transition-all duration-300">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-3 shadow-md">
                <FontAwesomeIcon icon={faVolumeHigh} className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white text-base">Clones de Voz</h3>
              <p className="text-gray-300 text-sm mt-1">12 vozes disponíveis</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Video Analyzer (1x1) */}
        <Card className="col-span-1 bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-3 shadow-md">
                <FontAwesomeIcon icon={faFileAudio} className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base text-center">Video Analyzer</h3>
              <p className="text-gray-600 text-sm text-center mt-1">Análise inteligente</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Transcrição (1x1) */}
        <Card className="col-span-1 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <CardContent className="p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-3 shadow-md">
                <FontAwesomeIcon icon={faFileAudio} className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base">Transcrição</h3>
              <p className="text-gray-600 text-sm mt-1">Precisão de 98.5%</p>
            </div>
          </CardContent>
        </Card>

        {/* Card de Integração com LMS (2x1) */}
        <Card className="col-span-2 bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 h-full">
            <div className="flex items-center h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-md">
                    <FontAwesomeIcon icon={faPlug} className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">Integração com LMS</h3>
                </div>
                <p className="text-gray-600">Conecte-se ao Moodle, Canvas e outros LMS</p>
              </div>
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full px-4 hover:opacity-90 shadow-md">
                Conectar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card de AI Video Insights (4x1) */}
        <Card className="col-span-4 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 rounded-xl shadow-lg overflow-hidden text-white hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 h-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="h-14 w-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                  <FontAwesomeIcon icon={faChartBar} className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-xl">AI Video Insights</h3>
                  <p className="text-gray-300 text-sm mt-1">Visualize estatísticas de engajamento, retenção e compreensão dos seus vídeos</p>
                </div>
              </div>
              <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-5 shadow-md flex items-center gap-2">
                <span>Dashboard</span>
                <FontAwesomeIcon icon={faChartLine} className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seção de Informações do serviço */}
      <div className="max-w-[800px] mx-auto bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-md border border-slate-100 p-8 mb-8">
        <h2 className="text-xl font-bold mb-6 pb-2 border-b border-slate-100 text-slate-800">
          O time Toolzz AI Content Makers
        </h2>

        <p className="text-slate-800 text-base mb-6">
          O time Toolzz AI Content Makers é a solução definitiva para empresas que precisam otimizar a
          criação, atualização e personalização de conteúdos dentro do LMS.
        </p>

        <div className="space-y-4 text-base mb-6">
          <p className="text-slate-700">
            Nossa equipe de especialistas em Inteligência Artificial cuida de tudo: geração de avatares e clones de vídeo e voz, transcrição e lapidação de materiais e treinamento da IA para que ela compreenda e replique o conhecimento com máxima eficiência.
          </p>

          <p className="text-slate-700">
            Isso significa menos tempo, custo e esforço para manter os conteúdos sempre atualizados, garantindo um alto padrão de qualidade de forma ágil e personalizada para cada cliente.
          </p>

          <p className="text-slate-700">
            Se a necessidade é velocidade e precisão na adaptação de conteúdos, o Toolzz Service AI Content Makers entrega exatamente isso, transformando o fluxo de produção e atualização de conhecimento em algo simples, escalável e automatizado.
          </p>
        </div>
      </div>

      {/* Botão de Demonstração */}
      <div className="flex justify-center mb-16">
        <Button className="rounded-full py-6 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white shadow-lg flex items-center gap-3 transition-all duration-300 hover:shadow-xl">
          <Badge className="mr-2 bg-white/20 border-0 text-white px-4 py-1 rounded-full">
            Demonstração
          </Badge>
          Agende sua demonstração
        </Button>
      </div>
    </div>
  );
} 