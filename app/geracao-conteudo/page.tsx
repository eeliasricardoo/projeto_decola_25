"use client";

import { useState, useEffect } from "react";
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
  faArrowRight,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { 
  Button, 
  PageHeader, 
  FadeIn, 
  MainInterface, 
  MainInterfaceSection, 
  MainInterfaceCard,
  FeatureCard,
  FeatureCardCentered,
  HowItWorksSection
} from "@/components/ui";

export default function GeracaoConteudoPage() {
  // Estado para controlar o carregamento da página
  const [pageLoading, setPageLoading] = useState(true);
  
  // Efeito para simular o carregamento inicial da página
  useEffect(() => {
    // Simula o carregamento inicial da página
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 bg-gray-200 rounded-xl flex items-center justify-center animate-pulse mb-4">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="h-8 w-8 text-gray-400" />
          </div>
          <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-2 text-gray-400 text-sm">Carregando Geração de Conteúdo...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-0">
          {/* Header principal - mais minimalista */}
          <FadeIn className="w-full" duration={800}>
            <div className="bg-gray-100 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 bg-gray-200 rounded-xl flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gray-300 rounded-xl transform scale-0 transition-transform group-hover:scale-100 origin-center"></div>
                  <FontAwesomeIcon icon={faWandMagicSparkles} className="h-8 w-8 text-gray-700 relative z-10 transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Geração de Conteúdo</h1>
                  <p className="text-gray-600">Educacional feito por IA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-8 max-w-3xl">
                Praticidade e facilidade para gerar vídeos, podcasts e mais conteúdos para sua plataforma de aprendizado.
                Nossa solução permite criar conteúdos educacionais com qualidade profissional em uma fração do tempo.
              </p>
              
              {/* Cards de funcionalidades no header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FadeIn delay={200} duration={600}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                        <FontAwesomeIcon icon={faVideo} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">Vídeos Personalizados</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Crie vídeos com avatares digitais personalizados para seus treinamentos
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={400} duration={600}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                        <FontAwesomeIcon icon={faFileAudio} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">Podcasts Educacionais</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Gere conteúdos de áudio com vozes naturais para diferentes tipos de conteúdo
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={600} duration={600}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                        <FontAwesomeIcon icon={faChartBar} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">Análise de Engagement</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Acompanhe métricas de engajamento dos conteúdos gerados para otimizar seus resultados
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
          
          {/* Nota Informativa */}
          <div className="p-4 mx-8 mt-8 mb-8 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="h-8 w-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
              <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4" />
            </div>
            <p className="text-gray-700 text-sm">
              <span className="font-medium">Nota:</span> As funcionalidades abaixo são representações visuais das possibilidades do sistema. Para acessar os recursos, entre em contato com o suporte.
            </p>
          </div>
          
          {/* Interface Principal */}
          <div className="p-8 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Coluna 1 - Avatar e Clones */}
              <FadeIn delay={300} duration={600}>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 bg-gray-200 text-gray-700 rounded-xl flex items-center justify-center mr-4 font-bold text-xs">
                      <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Criação de Avatar</h3>
                      <p className="text-gray-500 text-sm">Personalize seu próprio avatar digital</p>
                    </div>
                  </div>
                
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group">
                        <FontAwesomeIcon icon={faPlus} className="h-6 w-6 text-gray-700 group-hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="font-medium text-center mb-3">Criar novo Avatar</h4>
                      <div className="bg-gray-50 hover:bg-gray-100 py-2 px-4 rounded-lg text-sm cursor-pointer transition-colors duration-300 flex items-center gap-2 group">
                        <span>Enviar vídeo</span>
                        <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <p className="text-gray-500 text-xs mt-2">Até 2 minutos de vídeo</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 relative overflow-hidden group">
                        <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6 text-gray-700 group-hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="font-medium text-center mb-3">Clone de Voz</h4>
                      <Button className="bg-gray-800 hover:bg-gray-900 transition-all duration-300">
                        Gerar Clone
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group">
                      <FontAwesomeIcon icon={faUserCircle} className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Clones de Vídeo e Voz</h4>
                      <p className="text-gray-600 text-sm">
                        Treinamento e personalização dos Avatars e Clones de Voz para uso em seus conteúdos educacionais
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              {/* Coluna 2 - Ferramentas IA */}
              <FadeIn delay={500} duration={600}>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 bg-gray-200 text-gray-700 rounded-xl flex items-center justify-center mr-4 font-bold text-xs">
                      <FontAwesomeIcon icon={faRobot} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Ferramentas de IA</h3>
                      <p className="text-gray-500 text-sm">Crie conteúdos educacionais inteligentes</p>
                    </div>
                  </div>
                  
                  <div className="mb-6 bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group">
                        <FontAwesomeIcon icon={faWandMagicSparkles} className="h-8 w-8 text-gray-700 group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="font-semibold text-center mb-2">Geração de Conteúdo</h3>
                      <p className="text-gray-600 text-center text-sm">
                        Ferramenta completa para construção de vídeos, podcasts e materiais educacionais usando Inteligência Artificial
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group">
                        <FontAwesomeIcon icon={faBookmark} className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">AI Video Tagger</h4>
                        <p className="text-gray-600 text-sm">
                          Ajuste os algoritmos de recomendação com base em objetos e pessoas que aparecem em um vídeo
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group">
                        <FontAwesomeIcon icon={faPencilAlt} className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">AI Video Editor</h4>
                        <p className="text-gray-600 text-sm">
                          Crie uma nova mídia com base no conteúdo existente usando o editor de vídeo inteligente
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group">
                        <FontAwesomeIcon icon={faChartBar} className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">AI Video Insights</h4>
                        <p className="text-gray-600 text-sm">
                          Aplique os metadados extraídos para melhorar a experiência do usuário e o engajamento
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          
          {/* Seção Como Funciona */}
          <div className="p-8 border-t border-gray-100 bg-gray-50">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Como Funciona a Geração de Conteúdo
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faVideo} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Capture</h3>
                  <p className="text-gray-600 text-center">
                    Envie vídeos ou áudios para criar seu avatar digital ou clone de voz
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faRobot} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-center mb-3">IA Processa</h3>
                  <p className="text-gray-600 text-center">
                    A inteligência artificial processa e cria modelos personalizados
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Crie</h3>
                  <p className="text-gray-600 text-center">
                    Utilize os modelos para criar novos conteúdos educacionais
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faChartLine} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Analise</h3>
                  <p className="text-gray-600 text-center">
                    Acompanhe métricas e resultados dos conteúdos gerados
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Seção Toolzz AI */}
          <div className="p-8 border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
              <FadeIn delay={300}>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Toolzz AI - Content Makers
                </h2>
    
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 hover:shadow-md transition-all duration-300">
                  <p className="text-gray-700 mb-4">
                    A equipe Toolzz AI Content Makers utiliza as mais recentes tecnologias de inteligência artificial para criar
                    conteúdos educacionais personalizados que atendem às necessidades específicas de cada cliente.
                  </p>
    
                  <p className="text-gray-700">
                    Com nossa plataforma, você pode gerar avatares digitais, clones de voz, vídeos automatizados, podcasts educacionais
                    e diversos outros tipos de conteúdo, tudo isso com qualidade profissional e em uma fração do tempo e custo
                    de produção tradicional.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 