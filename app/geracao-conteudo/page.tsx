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
        <Card className="col-span-2 row-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <div className="flex-1">
              <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-6 mb-4 flex flex-col items-center justify-center h-36 text-white">
                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-white mb-3">
                  <FontAwesomeIcon icon={faPlus} className="h-8 w-8 text-red-600" />
                </div>
                <p className="text-center font-medium text-white text-lg">Criar novo Avatar</p>
                <p className="text-center text-red-100 text-sm mt-1">Enviar vídeo para processamento</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-900">Exemplo de avatar</p>
                  <Badge className="bg-gray-200 text-gray-700">Representação visual</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0">
                    <FontAwesomeIcon icon={faUserCircle} className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-3/4 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faFileVideo} className="h-6 w-6 text-red-600" />
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