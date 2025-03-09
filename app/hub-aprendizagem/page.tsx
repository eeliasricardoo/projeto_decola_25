"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronRight, 
  faSearch, 
  faChartBar, 
  faGamepad, 
  faGraduationCap, 
  faPencil, 
  faListCheck, 
  faUserFriends,
  faMicrophone,
  faStar,
  faRobot,
  faBook,
  faChartLine,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { faHydra } from "@fortawesome/pro-solid-svg-icons";
import { 
  PageHeader, 
  FadeIn, 
  MainInterface, 
  MainInterfaceSection, 
  MainInterfaceCard,
  FeatureCard,
  HowItWorksSection,
  BenefitsSection,
  Button
} from "@/components/ui";
import Link from "next/link";
import Image from "next/image";

export default function HubAprendizagem() {
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
            <FontAwesomeIcon icon={faBook} className="h-8 w-8 text-gray-400" />
          </div>
          <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-2 text-gray-400 text-sm">Carregando Hub de Aprendizagem...</div>
        </div>
      </div>
    );
  }

  // Dados dos cards de recursos
  const featureCards = [
    {
      icon: faListCheck,
      title: "Storyboard, Quiz Iterativo",
      description: "Crie questões interativas para guiar o aprendizado e FAQ iterativo."
    },
    {
      icon: faGraduationCap,
      title: "Aprendizagem Adaptativa",
      description: "O aluno recebe desafios na medida de suas habilidades, com crescimento de complexidade à medida que melhora."
    },
    {
      icon: faChartBar,
      title: "Storyboard, Relatórios",
      description: "Mapa detalhado e organizado de cada relatório específico do Storyboard."
    },
    {
      icon: faUserFriends,
      title: "Social Learning e Desafios",
      description: "Possibilidade de competir ou colaborar com amigos em desafios e quizzes."
    },
    {
      icon: faPencil,
      title: "Quiz para Coleta (Estilo Cards)",
      description: "Quiz interativo para medir conhecimento, fazer pesquisas ou receber coleta de informações."
    },
    {
      icon: faStar,
      title: "Ranking & Gamificação",
      description: "Insigne e Ranking para Alunos e para os professores com sistema de engajamento."
    }
  ];

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-0">
          <PageHeader
            title="Hub de Aprendizagem"
            subtitle="Experiência 3.0 de Educação"
            description="Inovação nos mecanismos de aprendizado e engajamento da experiência principal, inspirado nos melhores aplicativos educacionais."
            icon={faHydra}
            cards={[
              {
                icon: faGamepad,
                title: "Gamificação Inteligente",
                description: "Sistema de gamificação que aumenta o engajamento dos alunos com mecânicas de jogo"
              },
              {
                icon: faGraduationCap,
                title: "Aprendizado Adaptativo",
                description: "Conteúdo que se adapta ao nível de conhecimento e ritmo de aprendizagem do aluno"
              },
              {
                icon: faUserFriends,
                title: "Aprendizado Social",
                description: "Ferramentas para colaboração e competição saudável entre os alunos"
              }
            ]}
          />
          
          {/* Interface Principal */}
          <MainInterface>
            {/* Coluna 1 - Checklist e Tutoria */}
            <MainInterfaceSection delay={300}>
              <MainInterfaceCard 
                title="Checklist Duolingo Alike" 
                subtitle="Estamos no caminho!"
                icon={<span className="text-2xl">🎯</span>}
              >
                <div className="space-y-2 mb-6">
                  {[
                    "Aprendizagem Adaptativa",
                    "Geração Automática de Questões Personalizadas",
                    "Gamificação e Motivação",
                    "Revisão Inteligente e Espaçada",
                    "Aprendizado Multimodal (Texto, Áudio e Vídeo)",
                    "Feedback em Tempo Real",
                    "Social Learning e Desafios Entre Usuários",
                    "Metas e Planos de Estudo Personalizados",
                    "Assistente Virtual de Aprendizado"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-gray-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </MainInterfaceCard>
              
              <MainInterfaceCard 
                title="Tutoria 24 horas" 
                subtitle="Suporte contínuo para alunos"
                icon={<span className="text-2xl">💬</span>}
                className="mt-6"
              >
                <div className="flex flex-col items-center mb-6 space-y-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faUserFriends} className="h-6 w-6 text-gray-700" />
                  </div>
                  <p className="text-gray-600 text-center text-sm">
                    Plantão com tutores em tempo real para resolver dúvidas e atender necessidades dos alunos
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 border border-gray-100">
                  Funcionalidade para facilitar a comunicação entre tutores e alunos, garantindo suporte imediato durante o aprendizado
                </div>
              </MainInterfaceCard>
            </MainInterfaceSection>
            
            {/* Coluna 2 - Search e Features */}
            <MainInterfaceSection delay={500}>
              <MainInterfaceCard 
                title="Search Embed" 
                subtitle="Busca inteligente integrada"
                icon={<FontAwesomeIcon icon={faSearch} className="h-6 w-6" />}
              >
                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-4">
                    Interface fácil para integrar: incorpore buscas sem esforço em qualquer site, aplicativo ou plataforma.
                  </p>
                  
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="flex items-center bg-white rounded-md p-2 shadow-sm">
                      <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
                      <input type="text" placeholder="Buscar" className="bg-transparent border-none focus:outline-none flex-grow text-sm" />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mb-4">
                    <p className="text-sm text-gray-600">Na aparência pode parecer uma busca comum mas por trás temos tecnologia avançada de IA</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {featureCards.slice(0, 2).map((card, index) => (
                    <FeatureCard
                      key={index}
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </MainInterfaceCard>
            </MainInterfaceSection>
          </MainInterface>
          
          {/* Seção de Recursos */}
          <div className="p-8 border-b border-gray-100">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Recursos do Hub de Aprendizagem
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featureCards.map((card, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col">
                      <div className="mb-4 flex items-center">
                        <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center mr-3 group">
                          <FontAwesomeIcon 
                            icon={card.icon} 
                            className="h-5 w-5 text-gray-700 group-hover:scale-110 transition-transform duration-300" 
                          />
                        </div>
                        <h3 className="font-semibold text-gray-800">{card.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Seção de Como Funciona */}
          <HowItWorksSection
            title="Como Funciona o Hub"
            steps={[
              {
                icon: faGraduationCap,
                title: "Aprenda",
                description: "Conteúdo personalizado que se adapta ao seu nível de conhecimento"
              },
              {
                icon: faGamepad,
                title: "Pratique",
                description: "Exercícios gamificados que tornam o aprendizado divertido"
              },
              {
                icon: faChartLine,
                title: "Evolua",
                description: "Acompanhe seu progresso e desenvolva novas habilidades"
              },
              {
                icon: faUserFriends,
                title: "Compartilhe",
                description: "Aprenda junto com outros alunos e supere desafios"
              }
            ]}
          />
          
          {/* Seção de Benefícios */}
          <BenefitsSection
            benefits={[
              {
                title: "Conteúdo Personalizado",
                description: "O sistema adapta automaticamente o conteúdo ao perfil e ritmo de aprendizado de cada aluno.",
                icon: faRobot
              },
              {
                title: "Gamificação Inteligente",
                description: "Elementos de jogo que tornam o aprendizado mais envolvente e motivador.",
                icon: faGamepad
              },
              {
                title: "Aprendizado Social",
                description: "Ferramentas colaborativas que permitem aprender junto com outros alunos.",
                icon: faUserFriends
              },
              {
                title: "Assistência 24/7",
                description: "Suporte contínuo de tutores e IA para esclarecer dúvidas a qualquer momento.",
                icon: faRobot
              }
            ]}
            footerText="O Hub de Aprendizagem é uma plataforma completa que transforma a experiência educacional, tornando-a mais eficiente, engajadora e personalizada para cada aluno."
          />
          
          {/* Rodapé com logo */}
          <div className="flex justify-end p-8">
            <svg width="76" height="25" viewBox="0 0 76 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.1 12.5C38.1 5.6 43.7 0 50.6 0H75.2V25H50.6C43.7 25 38.1 19.4 38.1 12.5Z" fill="#EA1D2C"/>
              <path d="M10.6 0H0V25H10.6V0Z" fill="#EA1D2C"/>
              <path d="M30.3 0C26.2 0 22.9 3.3 22.9 7.4V25H33.5V7.4C33.5 3.3 34.4 0 30.3 0Z" fill="#EA1D2C"/>
              <path d="M15.1 0H13.9C12.3 0 11 1.3 11 2.9V25H16.5V5.1C16.5 2.3 16.5 0 15.1 0Z" fill="#EA1D2C"/>
              <path d="M64.1 14.7C64.1 12.3 62.1 10.3 59.7 10.3C57.3 10.3 55.3 12.3 55.3 14.7C55.3 17.1 57.3 19.1 59.7 19.1C62.1 19.1 64.1 17.1 64.1 14.7Z" fill="white"/>
              <path d="M46.7 13.9V20.6H50.1V13.9C50.1 13.2 50.7 12.7 51.4 12.7H64.5C64.9 11.6 65.1 10.3 65.1 9.1V8.3H51.4C48.8 8.3 46.7 10.4 46.7 13.9Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 