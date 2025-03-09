"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlug, faListCheck, faRadar, faCommentAltSmile, 
  faUserTieHairLong, faPersonChalkboard, faTransporter1, faSparkles,
  faFileLines, faScaleBalanced, faCalculator, faSquareBinary,
  faMoneyCheckPen, faChartPie, faCoin, faTableColumns,
  faUserAstronaut, faFileXls, faChartTreeMap, faGlobe,
  faGrid, faBookmark, faEdit, faChartLine,
  faSearch, faThumbsUp, faSealQuestion, faHandPointUp,
  faMicrophoneLines, faChartMixed, faRankingStar, faWandSparkles,
  faVial, faListAlt, faInfo, faRobot, faMicrophone
} from "@fortawesome/pro-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { 
  PageHeader, 
  FadeIn, 
  MainInterface,
  MainInterfaceSection
} from "@/components/ui";

interface BacklogItem {
  icon: any;
  title: string;
  description: string;
}

function BacklogCard({ 
  icon, 
  title, 
  description,
  index
}: { 
  icon: any; 
  title: string; 
  description: string;
  index: number;
}) {
  return (
    <FadeIn delay={index * 100} duration={600}>
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-md hover:border-gray-200 hover:translate-y-[-4px]">
        <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-xl bg-gray-100 group">
          <FontAwesomeIcon icon={icon} className="w-8 h-8 text-gray-700 transform transition-transform group-hover:scale-110" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </FadeIn>
  );
}

export default function BacklogPage() {
  // Estado para controlar o carregamento da página
  const [pageLoading, setPageLoading] = useState(true);
  
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
            <FontAwesomeIcon icon={faListAlt} className="h-8 w-8 text-gray-400" />
          </div>
          <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-2 text-gray-400 text-sm">Carregando Backlog...</div>
        </div>
      </div>
    );
  }

  const backlogItems: BacklogItem[] = [
    {
      icon: faPlug,
      title: "API de Progresso",
      description: "API de Progresso para troca de dados em tempo real com o iFood, permitindo segmentação personalizada e gatilhos de engajamento.",
    },
    {
      icon: faListCheck,
      title: "Governança do Portfólio de Conteúdos",
      description: "Geração de Relatórios de consumo de materiais fácil e acessível.",
    },
    {
      icon: faRadar,
      title: "Rastreamento",
      description: "Identificação automática de conteúdos que precisam de atualização devido a mudanças no iFood.",
    },
    {
      icon: faCommentAltSmile,
      title: "Agente de IA, Suporte DX",
      description: "Suporte automático para usuários.",
    },
    {
      icon: faUserTieHairLong,
      title: "Programa Profissionalizante",
      description: "Configuração de turmas pagas incluindo cursos, aulas ao vivo, quizzes e fóruns/comunidades.",
    },
    {
      icon: faPersonChalkboard,
      title: "Ferramenta de Tutoria",
      description: "Implementação de suporte 24/7 para dúvidas. Opção de chatbot + IA no dinamizador para automação de respostas.",
    },
    {
      icon: faTransporter1,
      title: "Toolzz Clones",
      description: "Treinamento e personalização dos Avatares e Clones de Voz.",
    },
    {
      icon: faSparkles,
      title: "Toolzz Creator",
      description: "Ferramenta para geração automatizada de textos, materiais de vídeo e FAQs inteligentes.",
    },
    {
      icon: faFileLines, 
      title: "Transcrição & Vídeo Analyzer",
      description: "Adaptação dos conteúdos de vídeo automaticamente para transcrição de IA.",
    }
  ];

  // Lista completa com todos os itens
  const fullBacklogItems: BacklogItem[] = [
    ...backlogItems,
    {
      icon: faScaleBalanced,
      title: "Agente de IA, Compliance",
      description: "Orientação sobre normas sanitárias e fiscais, checklist para regularização de boas práticas e múltiplos insights sobre novas diretrizes públicas.",
    },
    {
      icon: faCalculator,
      title: "Agente de IA, Precificador",
      description: "Cálculos inteligentes de precificação para lojas, sugestões baseadas no mercado, além de recomendação de ajustes.",
    },
    {
      icon: faCommentAltSmile,
      title: "Agente de IA, Suporte RX",
      description: "Sugestões automatizadas para melhorar a rentabilidade do restaurante.",
    },
    {
      icon: faSquareBinary,
      title: "BINARY Agente de IA, BI Analyst",
      description: "Inteligência de dados avançada para tomada de decisão estratégica.",
    },
    {
      icon: faMoneyCheckPen,
      title: "Agente de IA, Logística",
      description: "Planejamento inteligente de compras, sugestões de fornecedores, contratos e distribuição automatizada para otimizar as operações logísticas.",
    },
    {
      icon: faChartPie,
      title: "Agente de IA, Marketing e Vendas",
      description: "Estratégias para aumentar pedidos e conversão, análise de campanhas promocionais e tendências de mercado.",
    },
    {
      icon: faCoin,
      title: "Agente de IA, Financeiro",
      description: "Assistente inteligente de gestão financeira, projeções de lucros sobre investimentos e sugestões de melhoria.",
    },
    {
      icon: faWhatsapp,
      title: "Integração Whatsapp",
      description: "Assistente Inteligente, atendimento 24/7, sugestões e alertas, comandos rápidos.",
    },
    {
      icon: faTableColumns,
      title: "Dashboard Web",
      description: "Dashboard Personalizado histórico de interações, materiais e tags.",
    },
    {
      icon: faUserAstronaut,
      title: "Avatar Digital",
      description: "Representação virtual de consultores, aulas e tutores personalizados, postagem no WhatsApp.",
    },
    {
      icon: faFileXls,
      title: "XLS - Eventos Restaurantes",
      description: "Implementar captação de Eventos Real Time para Restaurantes.",
    },
    {
      icon: faChartTreeMap,
      title: "Eventos Restaurantes",
      description: "Para Restaurantes com SSO e dados sensorizados para intervenções educacionais.",
    },
    {
      icon: faGlobe,
      title: "SSO Restaurantes",
      description: "Para Restaurantes com SSO e dados sensorizados para intervenções educacionais.",
    },
    {
      icon: faFileXls,
      title: "XLS - Eventos Parceiros",
      description: "Implementar captação de Eventos Real Time para Restaurantes.",
    },
    {
      icon: faGrid,
      title: "Central de Relatórios",
      description: "Criação de Relatórios personalizados com os Eventos Real Time.",
    },
    {
      icon: faBookmark,
      title: "AI Vídeo Tagger",
      description: "Ajusta os segmentos de recomendação conforme as métricas pesquisadas, permitindo um alinhamento de conteúdos direcionado às pesquisas do usuário.",
    },
    {
      icon: faEdit,
      title: "AI Vídeo Editor",
      description: "Cria uma nova mídia com base no conteúdo existente. Sugestão de cortes inteligentes e edição dinâmica de feedback, levando em conta o uso do material.",
    },
    {
      icon: faChartLine,
      title: "AI Vídeo Insights",
      description: "Aplica as métricas analisadas para melhoria no engajamento do usuário. Leva em conta interações e histórico de visualizações.",
    },
    {
      icon: faSearch,
      title: "Search Embed",
      description: "Implementa busca inteligente personalizada em qualquer site, aplicativo ou plataforma.",
    },
    {
      icon: faThumbsUp,
      title: "Storyboard, Social Learning e Desafios Entre Usuários",
      description: "Possibilita ideação de competições e colaboração com amigos, desafios e quizzes.",
    },
    {
      icon: faSealQuestion,
      title: "Storyboard, Quiz para Coleta",
      description: "Quiz interativo para conhecimento. Faz pesquisas de mercado e coleta de informações.",
    },
    {
      icon: faHandPointUp,
      title: "Storyboard, Quiz Interativo",
      description: "Criação de quizzes complexos para aprendizado em FAQ na teoria.",
    },
    {
      icon: faMicrophoneLines,
      title: "Storyboard, Podcast",
      description: "Criação e Upload de Áudios como um conteúdo vinculado.",
    },
    {
      icon: faChartMixed,
      title: "Storyboard, Relatórios",
      description: "Novos métodos interativos de desenvolvimento de reports no Storyboard.",
    },
    {
      icon: faRankingStar,
      title: "Ranking & Gamificação",
      description: "Inserção de Ranking para Alunos para ranqueamento de conteúdos com métricas de engajamento.",
    },
    {
      icon: faWandSparkles,
      title: "Dinamizador - Gerador de FAQS IA",
      description: "Geração automatizada de respostas para perguntas frequentes usando inteligência artificial treinada em dados específicos.",
    },
    {
      icon: faVial,
      title: "Labs Zone",
      description: "Inserção de novos projetos Labs Toolzz dentro da plataforma do Hub de Aprendizagem.",
    }
  ];

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
                  <FontAwesomeIcon icon={faListAlt} className="h-8 w-8 text-gray-700 relative z-10 transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Backlog</h1>
                  <p className="text-gray-600">Lista de funcionalidades planejadas</p>
                </div>
              </div>
              <p className="text-gray-700 mb-8 max-w-3xl">
                Este é o backlog completo do projeto, contendo todas as funcionalidades planejadas
                e em desenvolvimento para as próximas versões da plataforma.
              </p>
              
              {/* Cards de funcionalidades no header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FadeIn delay={200} duration={600}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                        <FontAwesomeIcon icon={faRobot} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">Agentes de IA</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Assistentes inteligentes especializados para diversas áreas de gestão e suporte
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={400} duration={600}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                        <FontAwesomeIcon icon={faChartLine} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">Análise de dados</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Ferramentas de BI, dashboard e visualização de dados para decisões estratégicas
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={600} duration={600}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                        <FontAwesomeIcon icon={faMicrophone} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">Conteúdo interativo</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Recursos avançados para criação e interação com material educacional
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        
          {/* Grid de Backlog */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Funcionalidades no Backlog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fullBacklogItems.map((item, index) => (
                <BacklogCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 