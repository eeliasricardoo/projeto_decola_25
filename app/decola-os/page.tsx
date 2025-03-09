"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { 
  faUserAstronaut, 
  faTableColumns, 
  faLightbulb, 
  faCalendar,
  faSearch,
  faClipboard,
  faRocket,
  faAward,
  faChartLine,
  faMoneyBill,
  faRobot,
  faInfoCircle,
  faCheck,
  faGear,
  faLayerGroup
} from "@fortawesome/pro-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { HeroSectionProps } from "@/components/layout";
import { FeatureCard } from "@/components/decolaos/FeatureCard";
import { FadeIn } from "@/components/ui";
import { Button } from "@/components/ui/button";

// Configuração do HeroSection para esta página
export const heroProps: HeroSectionProps = {
  title: "Decola OS,",
  subtitle: "Força de Trabalho com IA",
  description: "Agentes treinadas com conteúdos e preparada para servir ao time de gestão, criação e alunos",
  size: "large",
  animation: true
};

// Dados dos agentes
const agents = [
  { name: "Finicius", imagePath: "/agentes/apenas agentes/finicius.png", description: "Controle de fluxo de caixa e análise de faturamento, projeções de lucro, saúde financeira do negócio." },
  { name: "Logilson", imagePath: "/agentes/apenas agentes/logilson.png", description: "Planejamento inteligente de compras, sugestões de fornecedores, comparativo de preços e controle de estoque." },
  { name: "Marketina", imagePath: "/agentes/apenas agentes/marketina.png", description: "Estratégias para aumentar pedidos e melhorar a visibilidade, campanhas promocionais e descontos estratégicos." },
  { name: "Suportana", imagePath: "/agentes/apenas agentes/suportana.png", description: "Suporte constante para os usuários, sugestões automatizadas para melhorar a rentabilidade do restaurante." },
];

const secondRowAgents = [
  { name: "Advanusa", imagePath: "/agentes/apenas agentes/advanusa.png", description: "Orientação sobre normas sanitárias e fiscais, checklist para regularização e boas práticas e atualizações sobre novas leis." },
  { name: "Ateneudes", imagePath: "/agentes/apenas agentes/atenedeus.png", description: "Suporte contínuo para os usuários, atendimento 24 horas para tirar dúvidas e ajudar." },
  { name: "Precifinelson", imagePath: "/agentes/apenas agentes/precifinelson.png", description: "Calculadora inteligente de precificação de pratos, sugestões de margem de lucro, análise de rentabilidade." },
  { name: "Arthutor", imagePath: "/agentes/apenas agentes/arthutor.png", description: "Implementação de suporte 24/7 para dúvidas. Opção de chatbot AI ou FAQ dinâmico para automação de respostas." },
];

// Dados de Edu - agente especial
const eduAgent = {
  name: "Edu",
  imagePath: "/agentes/apenas agentes/edu.png",
  description: "O Edu é um agente de inteligência artificial especializado em educação financeira para entregadores de aplicativos de delivery."
};

// Dados dos cards de recursos
const featureCards = [
  {
    title: "Avatar Digital",
    description: "Representação visual do consultor, aulas e tutoriais personalizados, presença no Portal e WhatsApp",
    icon: faUserAstronaut
  },
  {
    title: "Integração Whatsapp",
    description: "Assistente Inteligente, atendimento 24/7, notificações e alertas, comandos Simples.",
    icon: faWhatsapp
  },
  {
    title: "Dashboard Web",
    description: "Dashboard Personalizado, histórico de Interações, materiais de apoio.",
    icon: faTableColumns
  }
];

// Dados das seções de texto
const introSection = {
  title: "Agentes de IA para Gestão Inteligente",
  paragraphs: [
    "O iFood OS será um ecossistema de agentes de IA especializados, atuando como consultores virtuais para donos de restaurantes cadastrados no iFood.",
    "Inspirado no modelo de acompanhamento do Sebrae, os agentes oferecerão uma jornada de capacitação, implementação e crescimento sustentável.",
    "A solução será baseada na plataforma Toolzz AI, permitindo a criação e treinamento de múltiplos agentes de IA, cada um especializado em uma área crítica da gestão de restaurantes, incluindo precificação, compras, preparo, marketing, atendimento e mais.",
    "A interação ocorrerá por meio de WhatsApp, portal web e um avatar digital, que representará o consultor virtual, criando uma experiência mais próxima e humanizada para os usuários."
  ]
};

const journeySection = {
  title: "Jornada de Capacitação e Evolução",
  introduction: "O iFood OS não será apenas um suporte pontual, mas um processo estruturado de capacitação, conduzindo os restaurantes por uma evolução contínua.",
  steps: [
    {
      title: "Mapeamento Inicial",
      description: [
        "Diagnóstico do restaurante com levantamento de desafios e oportunidades.",
        "Sugestão de um plano de ação baseado nos agentes de IA."
      ]
    },
    {
      title: "Implementação Guiada",
      description: [
        "Recomendações práticas e ações semanais para melhorias no negócio.",
        "Acompanhamento do progresso e ajustes conforme necessidade."
      ]
    },
    {
      title: "Crescimento e Otimização",
      description: [
        "Estratégias avançadas para escalar o negócio.",
        "Análises preditivas para decisões mais inteligentes."
      ]
    }
  ]
};

const strategicSection = {
  title: "Justificativa Estratégica para o iFood",
  introduction: "O iFood OS será um diferencial competitivo, oferecendo um suporte inédito para seus parceiros e fortalecendo o ecossistema de restaurantes.",
  benefits: [
    {
      title: "Melhoria na Qualidade dos Restaurantes",
      description: "Negócios mais estruturados aumentam a reputação da plataforma."
    },
    {
      title: "Redução da Taxa de Churn",
      description: "Restaurantes mais lucrativos permanecem ativos no iFood por mais tempo."
    },
    {
      title: "Aumento do Ticket Médio",
      description: "Restaurantes capacitados vendem mais e geram maior receita para o iFood."
    },
    {
      title: "Uso Estratégico de IA",
      description: "Implementação inovadora que reforça a posição do iFood como líder em tecnologia."
    }
  ]
};

const conclusionSection = {
  title: "Conclusão",
  paragraphs: [
    "O iFood OS transformará a maneira como os restaurantes interagem com a plataforma, oferecendo um suporte completo e estratégico com inteligência artificial. Através de múltiplos canais, um avatar digital e um conjunto de agentes especializados, o sistema permitirá que cada restaurante cresça de forma estruturada e eficiente.",
    "Com essa abordagem, o iFood não apenas conecta restaurantes a clientes, mas se torna um parceiro essencial no sucesso dos negócios! 🚀"
  ]
};

export default function DecolaOS() {
  // Estado para controlar o carregamento da página
  const [pageLoading, setPageLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  
  // Efeito para simular o carregamento inicial da página
  useEffect(() => {
    // Simula o carregamento inicial da página
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 800);
    
    // Anima a rolagem entre seções
    const sectionTimer = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(sectionTimer);
    };
  }, []);
  
  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 bg-gray-200 rounded-xl flex items-center justify-center animate-pulse mb-4">
            <FontAwesomeIcon icon={faRobot} className="h-8 w-8 text-gray-400" />
          </div>
          <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-2 text-gray-400 text-sm">Carregando Decola OS...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Conteúdo principal */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-0">
          {/* Header principal - Estilo Dashboard */}
          <FadeIn className="w-full" duration={800}>
            <div className="bg-gray-100 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 bg-gray-200 rounded-xl flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gray-300 rounded-xl transform scale-0 transition-transform group-hover:scale-100 origin-center"></div>
                  <FontAwesomeIcon icon={faRobot} className="h-8 w-8 text-gray-700 relative z-10 transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Decola OS</h1>
                  <p className="text-gray-600">Força de Trabalho com Agentes de IA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-8 max-w-3xl">
                O Decola OS é um ecossistema de agentes especializados que atuam como consultores virtuais,
                proporcionando suporte e orientação para gestão, aprendizado e operação.
              </p>
              
              {/* Cards de funcionalidades no header - Estilo Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featureCards.map((card, index) => (
                  <FadeIn key={index} delay={200 * (index + 1)} duration={600}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                          <FontAwesomeIcon icon={card.icon} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-lg">{card.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {card.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* BentoGrid de Agentes com dimensões específicas */}
          <div className="p-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold mb-10 text-center">Nossos Agentes Especialistas</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10 mx-auto max-w-7xl">
              {/* Primeira linha de agentes */}
              {agents.map((agent, index) => (
                <FadeIn key={agent.name} delay={150 * index} duration={600}>
                  <div className="flex flex-col group mx-auto" style={{ width: "268.13px", maxWidth: "100%" }}>
                    <div className="overflow-hidden rounded-2xl relative mb-4 shadow-md transition-all duration-300 group-hover:shadow-lg" style={{ width: "268.13px", height: "268.13px", maxWidth: "100%" }}>
                      <Image 
                        src={agent.imagePath} 
                        alt={agent.name} 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 268px"
                      />
                    </div>
                    <div className="px-2">
                      <div className="flex items-center mb-1.5">
                        <h3 className="font-bold text-gray-900 text-lg">{agent.name}</h3>
                        <div className="ml-2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">AI</div>
                      </div>
                      <p className="text-gray-600 text-sm leading-snug line-clamp-3">{agent.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Card de Edu - largura completa */}
            <div className="flex justify-center mb-10">
              <FadeIn delay={300} duration={800}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl" style={{ width: "min(1144px, 100%)", height: "260px" }}>
                  <Image 
                    src={eduAgent.imagePath} 
                    alt={eduAgent.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1200px) 100vw, 1144px"
                    priority
                  />
                  <div className="absolute left-8 bottom-8 flex items-start" style={{ maxWidth: "min(40%, 360px)" }}>
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
                      <div className="flex items-center mb-2">
                        <h3 className="font-bold text-gray-900 text-xl">{eduAgent.name}</h3>
                        <div className="ml-2 bg-gray-900 text-white text-xs px-2 py-0.5 rounded-md font-medium">AI</div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{eduAgent.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Segunda linha de agentes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-7xl">
              {secondRowAgents.map((agent, index) => (
                <FadeIn key={agent.name} delay={150 * index} duration={600}>
                  <div className="flex flex-col group mx-auto" style={{ width: "268.13px", maxWidth: "100%" }}>
                    <div className="overflow-hidden rounded-2xl relative mb-4 shadow-md transition-all duration-300 group-hover:shadow-lg" style={{ width: "268.13px", height: "268.13px", maxWidth: "100%" }}>
                      <Image 
                        src={agent.imagePath} 
                        alt={agent.name} 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 268px"
                      />
                    </div>
                    <div className="px-2">
                      <div className="flex items-center mb-1.5">
                        <h3 className="font-bold text-gray-900 text-lg">{agent.name}</h3>
                        <div className="ml-2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">AI</div>
                      </div>
                      <p className="text-gray-600 text-sm leading-snug line-clamp-3">{agent.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
          {/* Interface Principal - Estilo Dashboard */}
          <div className="p-8 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Coluna 1 - Descrição e Introdução */}
              <FadeIn delay={300} duration={800}>
                <div className="flex flex-col space-y-4">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 bg-gray-200 text-gray-700 rounded-xl flex items-center justify-center mr-4 font-bold text-xs">
                        AI
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{introSection.title}</h3>
                        <p className="text-gray-500 text-sm">Consultores virtuais para gestão eficiente</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-base">
                      {introSection.paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-gray-900 text-lg">Benefícios Estratégicos</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {strategicSection.introduction}
                    </p>
                    <div className="flex flex-col space-y-3">
                      {strategicSection.benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-300">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center group">
                              <FontAwesomeIcon icon={[faAward, faChartLine, faMoneyBill, faRobot][index % 4]} className="h-4 w-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                            </div>
                            <p className="font-medium text-gray-800">{benefit.title}</p>
                          </div>
                          <p className="text-gray-600 text-sm ml-10">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              {/* Coluna 2 - Jornada de Capacitação */}
              <FadeIn delay={500} duration={800}>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="font-semibold text-gray-900 text-lg mb-4">{journeySection.title}</h3>
                  <p className="text-gray-600 mb-6">{journeySection.introduction}</p>
                  
                  <div className="space-y-6">
                    {journeySection.steps.map((step, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group">
                          <FontAwesomeIcon icon={[faSearch, faClipboard, faRocket][index % 3]} className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">{step.title}</h4>
                          <div className="space-y-1">
                            {step.description.map((desc, i) => (
                              <p key={i} className="text-gray-600 text-sm">{desc}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Seção Como Funciona - Estilo Dashboard */}
          <div className={`p-8 border-t border-gray-100 bg-gray-50 transition-opacity duration-500 ${activeSection === 0 ? 'opacity-100' : 'opacity-80'}`}>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Como Funciona?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faSearch} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Mapeamento</h3>
                  <p className="text-gray-600 text-center">
                    Diagnóstico do restaurante com levantamento de desafios e oportunidades.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faGear} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[20deg]" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Implementação</h3>
                  <p className="text-gray-600 text-center">
                    Recomendações práticas e ações semanais para melhorias no negócio.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faRocket} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Crescimento</h3>
                  <p className="text-gray-600 text-center">
                    Estratégias avançadas para escalar o negócio.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faLayerGroup} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Personalização</h3>
                  <p className="text-gray-600 text-center">
                    Permite ajustar o sistema de acordo com
                    seu contexto específico.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Seção Conclusão */}
          <div className={`p-8 border-t border-gray-100 transition-opacity duration-500 ${activeSection === 1 ? 'opacity-100' : 'opacity-80'}`}>
            <div className="max-w-4xl mx-auto">
              <FadeIn delay={300}>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  {conclusionSection.title}
                </h2>
    
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 hover:shadow-md transition-all duration-300">
                  <p className="text-gray-700 mb-4">
                    {conclusionSection.paragraphs[0]}
                  </p>
    
                  <p className="text-gray-700">
                    {conclusionSection.paragraphs[1]}
                  </p>
                </div>
                
                <div className="flex justify-center mt-8">
                  <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-2 text-lg transform transition-transform duration-300 hover:scale-105 active:scale-95 rounded-xl flex items-center gap-3">
                    <FontAwesomeIcon icon={faCalendar} className="h-5 w-5" />
                    <span>Agendar demonstração</span>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 