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
  faArrowRight
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
          <PageHeader
            title="Geração de Conteúdo"
            subtitle="Educacional feito por IA"
            description="Praticidade e facilidade para gerar vídeos, podcasts e mais conteúdos para sua plataforma de aprendizado."
            icon={faWandMagicSparkles}
            cards={[
              {
                icon: faVideo,
                title: "Vídeos Personalizados",
                description: "Crie vídeos com avatares digitais personalizados para seus treinamentos"
              },
              {
                icon: faFileAudio,
                title: "Podcasts Educacionais",
                description: "Gere conteúdos de áudio com vozes naturais para diferentes tipos de conteúdo"
              },
              {
                icon: faChartBar,
                title: "Análise de Engagement",
                description: "Acompanhe métricas de engajamento dos conteúdos gerados para otimizar seus resultados"
              }
            ]}
          />
          
          {/* Nota Informativa */}
          <div className="p-4 mx-8 mb-8 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="h-8 w-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
              <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4" />
            </div>
            <p className="text-gray-700 text-sm">
              <span className="font-medium">Nota:</span> As funcionalidades abaixo são representações visuais das possibilidades do sistema. Para acessar os recursos, entre em contato com o suporte.
            </p>
          </div>
          
          {/* Interface Principal */}
          <MainInterface>
            {/* Coluna 1 - Avatar e Clones */}
            <MainInterfaceSection delay={300}>
              <MainInterfaceCard 
                title="Criação de Avatar" 
                subtitle="Personalize seu próprio avatar digital"
                icon={<FontAwesomeIcon icon={faUserCircle} className="h-6 w-6" />}
              >
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
                
                <FeatureCard
                  icon={faUserCircle}
                  title="Clones de Vídeo e Voz"
                  description="Treinamento e personalização dos Avatars e Clones de Voz para uso em seus conteúdos educacionais"
                  iconBgColor="bg-gray-100"
                  iconColor="text-gray-700"
                />
              </MainInterfaceCard>
            </MainInterfaceSection>
            
            {/* Coluna 2 - Ferramentas IA */}
            <MainInterfaceSection delay={500}>
              <MainInterfaceCard
                title="Ferramentas de IA"
                subtitle="Crie conteúdos educacionais inteligentes"
                icon={<FontAwesomeIcon icon={faRobot} className="h-6 w-6" />}
              >
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
                  <FeatureCard
                    icon={faBookmark}
                    title="AI Video Tagger"
                    description="Ajuste os algoritmos de recomendação com base em objetos e pessoas que aparecem em um vídeo"
                    iconBgColor="bg-gray-100"
                    iconColor="text-gray-700"
                  />
                  
                  <FeatureCard
                    icon={faPencilAlt}
                    title="AI Video Editor"
                    description="Crie uma nova mídia com base no conteúdo existente usando o editor de vídeo inteligente"
                    iconBgColor="bg-gray-100"
                    iconColor="text-gray-700"
                  />
                  
                  <FeatureCard
                    icon={faChartBar}
                    title="AI Video Insights"
                    description="Aplique os metadados extraídos para melhorar a experiência do usuário e o engajamento"
                    iconBgColor="bg-gray-100"
                    iconColor="text-gray-700"
                  />
                </div>
              </MainInterfaceCard>
            </MainInterfaceSection>
          </MainInterface>
          
          {/* Seção de Como Funciona */}
          <HowItWorksSection
            title="Como Funciona a Geração de Conteúdo"
            steps={[
              {
                icon: faVideo,
                title: "Capture",
                description: "Envie vídeos ou áudios para criar seu avatar digital ou clone de voz"
              },
              {
                icon: faRobot,
                title: "IA Processa",
                description: "A inteligência artificial processa e cria modelos personalizados"
              },
              {
                icon: faWandMagicSparkles,
                title: "Crie",
                description: "Utilize os modelos para criar novos conteúdos educacionais"
              },
              {
                icon: faChartLine,
                title: "Analise",
                description: "Acompanhe métricas e resultados dos conteúdos gerados"
              }
            ]}
          />
          
          {/* Seção Toolzz AI */}
          <div className="p-8 border-b border-gray-100 bg-gray-50">
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