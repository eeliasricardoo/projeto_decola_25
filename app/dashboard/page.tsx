"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faBullhorn, faChartPie, faMicrophone, faPlus, faCheck, faDatabase, faGear, faTable, faArrowRight, faChartLine, faRefresh, faInfoCircle, faLayerGroup, faRobot, faChartBar, faChartArea } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { HeroSectionProps } from "@/components/layout";
import { useState, useEffect, useRef } from "react";

// Configuração do HeroSection para esta página
export const heroProps: HeroSectionProps = {
  title: "BI Generativo",
  subtitle: "feito por IA",
  description: "Inteligência Artificial treinada com contexto e preparada para servir ao time de gestão e vendas.",
  size: "large",
  animation: true,
  highlight: true
};

// Componente de animação de digitação
interface TypewriterEffectProps {
  phrases: string[];
  speed?: number;
  pauseTime?: number;
}

const TypewriterEffect = ({ phrases, speed = 70, pauseTime = 2000 }: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    
    // Efeito de digitação
    if (!isDeleting && displayText === currentPhrase) {
      // Pausa quando termina de digitar frase completa
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(speed / 2); // Deleta mais rápido
      }, pauseTime);
    } else if (isDeleting && displayText === "") {
      // Troca para próxima frase
      setIsDeleting(false);
      setTypingSpeed(speed);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    } else {
      // Processo de digitação ou deleção
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentPhrase.substring(0, displayText.length - 1)
          : currentPhrase.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting, phrases, speed, pauseTime, typingSpeed]);
  
  return <span className="inline-block min-h-[24px]">{displayText}<span className="animate-pulse">|</span></span>;
};

// Componente de animação de entrada
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeIn = ({ children, delay = 0, duration = 500, className = "" }: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`transition-all ${className}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

// Componente de gráfico animado simulado
const AnimatedChart = ({ type }: { type: 'line' | 'bar' | 'pie' }) => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    // Simula carregamento
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1000 + Math.random() * 1000);
    
    // Anima o valor crescendo
    const valueTimer = setInterval(() => {
      setValue(prev => {
        const newValue = prev + 2;
        return newValue <= 100 ? newValue : 100;
      });
    }, 20);
    
    return () => {
      clearTimeout(loadTimer);
      clearInterval(valueTimer);
    };
  }, []);
  
  const colors = {
    line: { bg: 'bg-blue-50', fill: 'bg-blue-200', text: 'text-blue-600' },
    bar: { bg: 'bg-purple-50', fill: 'bg-purple-200', text: 'text-purple-600' },
    pie: { bg: 'bg-green-50', fill: 'bg-green-200', text: 'text-green-600' }
  };
  
  const icons = {
    line: faChartLine,
    bar: faChartBar,
    pie: faChartPie
  };
  
  if (loading) {
    return (
      <div className={`${colors[type].bg} rounded-md p-3 animate-pulse w-full h-12`}></div>
    );
  }
  
  return (
    <div className={`${colors[type].bg} rounded-md p-3 flex items-center`}>
      <div className="flex-1">
        <div className="relative h-4 bg-white rounded overflow-hidden">
          <div 
            className={`absolute left-0 top-0 h-full ${colors[type].fill} transition-all duration-1000 ease-out`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
      <div className={`${colors[type].text} ml-2`}>
        <FontAwesomeIcon icon={icons[type]} className="h-4 w-4" />
      </div>
    </div>
  );
};

// Componente de pulsação de notificação
const NotificationPulse = () => {
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
    </span>
  );
};

// Componente de botão animado
const AnimatedButton = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  return (
    <button 
      onClick={onClick}
      className={`${className} relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-md active:scale-95`}
    >
      <div className="absolute inset-0 bg-white/20 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
      {children}
    </button>
  );
};

export default function Dashboard() {
  // Exemplos de perguntas para a animação
  const queryExamples = [
    "Qual o desempenho da equipe este mês?",
    "Mostre os principais KPIs do trimestre",
    "Compare vendas dos últimos 6 meses",
    "Quais produtos tiveram melhor performance?",
    "Análise da equipe de vendas por região"
  ];

  // Estado para controlar o carregamento da página
  const [pageLoading, setPageLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [chartData, setChartData] = useState({ loaded: false });
  
  useEffect(() => {
    // Simula o carregamento inicial da página
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 800);
    
    // Carrega os dados dos gráficos com atraso
    const chartTimer = setTimeout(() => {
      setChartData({ loaded: true });
    }, 1500);
    
    // Anima a rolagem entre seções
    const sectionTimer = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(chartTimer);
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
          <div className="mt-2 text-gray-400 text-sm">Carregando BI Generativo...</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Container único para todo o conteúdo */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-0">
          {/* Header principal - mais minimalista e menos vermelho */}
          <FadeIn className="w-full" duration={800}>
            <div className="bg-gray-100 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 bg-gray-200 rounded-xl flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gray-300 rounded-xl transform scale-0 transition-transform group-hover:scale-100 origin-center"></div>
                  <FontAwesomeIcon icon={faRobot} className="h-8 w-8 text-gray-700 relative z-10 transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">BI Generativo</h1>
                  <p className="text-gray-600">Agente de Dados em Tempo Real</p>
                </div>
              </div>
              <p className="text-gray-700 mb-8 max-w-3xl">
                O BI Generativo é um agente inteligente que integra, processa e
                apresenta dados em tempo real, proporcionando aos gestores uma visão
                estratégica das suas equipes.
              </p>
              
              {/* Cards de funcionalidades no header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FadeIn delay={200} duration={600}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                        <FontAwesomeIcon icon={faMicrophone} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">Comando de voz</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Realize consultas no BI generativo utilizando sua voz para uma experiência hands-free
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={400} duration={600}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                        <FontAwesomeIcon icon={faDatabase} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">Integração de dados</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Conexão com diversas fontes de dados em tempo real para insights precisos
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={600} duration={600}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group">
                        <FontAwesomeIcon icon={faChartLine} className="h-5 w-5 text-gray-700 transform transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">Visualização avançada</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Gráficos e dashboards personalizados para monitoramento de KPIs estratégicos
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
          
          {/* Interface principal */}
          <div className="p-8 border-b border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Consulta BI */}
              <FadeIn delay={300} duration={800}>
                <div className="flex flex-col space-y-4">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 bg-gray-200 text-gray-700 rounded-xl flex items-center justify-center mr-4 font-bold text-xs">
                        BI
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Consulta BI</h3>
                        <p className="text-gray-500 text-sm">Faça perguntas e obtenha insights em linguagem natural</p>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 shadow-sm focus-within:ring-2 focus-within:ring-gray-300 transition-all duration-300">
                      <TypewriterEffect phrases={queryExamples} speed={50} pauseTime={2000} />
                    </div>
                    
                    <div className="flex justify-end gap-3">
                      <Button className="bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
                        Consultar
                      </Button>
                      <Button variant="outline" className="border-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95 group">
                        <FontAwesomeIcon icon={faMicrophone} className="h-4 w-4 text-gray-600 mr-2 group-hover:text-gray-800 transition-colors duration-300" />
                        Voz
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-gray-900 text-lg">Respostas Inteligentes</h3>
                      <NotificationPulse />
                    </div>
                    <p className="text-gray-600 mb-4">
                      Baseado em instruções pré-configuradas,
                      o agente gera respostas adaptadas ao contexto da consulta, usando
                      linguagem natural.
                    </p>
                    <div className="flex flex-col space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center group">
                            <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                          </div>
                          <p className="font-medium text-gray-800">Consultas comuns</p>
                        </div>
                        <div className="pl-10 space-y-2">
                          <p className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-200 cursor-pointer">"Qual o desempenho da equipe este mês?"</p>
                          <p className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-200 cursor-pointer">"Mostre os principais KPIs do trimestre"</p>
                          <p className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-200 cursor-pointer">"Compare vendas dos últimos 6 meses"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              {/* Funcionalidades */}
              <FadeIn delay={500} duration={800}>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="font-semibold text-gray-900 text-lg mb-6">Funcionalidades Principais</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group">
                        <FontAwesomeIcon icon={faDatabase} className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Integração Dinâmica</h4>
                        <p className="text-gray-600 text-sm">
                          O agente de BI se conecta a diversas fontes de dados, capturando informações em tempo real.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group">
                        <FontAwesomeIcon icon={faChartLine} className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Análise Automatizada</h4>
                        <p className="text-gray-600 text-sm">
                          Os dados são processados e apresentados de forma clara, incluindo gráficos intuitivos.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group">
                        <FontAwesomeIcon icon={faTable} className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Dashboards Customizáveis</h4>
                        <p className="text-gray-600 text-sm">
                          Os usuários podem criar painéis personalizados e KPIs de seu interesse.
                        </p>
                      </div>
                    </div>
                    
                    {chartData.loaded && (
                      <div className="mt-4 bg-white p-5 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-3">Insights em tempo real</h4>
                        <div className="space-y-3">
                          <AnimatedChart type="line" />
                          <AnimatedChart type="bar" />
                          <AnimatedChart type="pie" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Seção Como Funciona */}
          <div className={`p-8 border-b border-gray-100 bg-gray-50 transition-opacity duration-500 ${activeSection === 0 ? 'opacity-100' : 'opacity-80'}`}>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Como Funciona?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faDatabase} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Coleta</h3>
                  <p className="text-gray-600 text-center">
                    O agente se conecta às fontes de dados definidas (APIs,
                    banco de dados, sistemas internos).
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faGear} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[20deg]" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Processo</h3>
                  <p className="text-gray-600 text-center">
                    Organiza e estrutura os dados conforme regras
                    predefinidas.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faChartLine} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Visual</h3>
                  <p className="text-gray-600 text-center">
                    Exibe os insights em gráficos dinâmicos e relatórios
                    personalizados.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group">
                    <FontAwesomeIcon icon={faLayerGroup} className="h-8 w-8 text-gray-600 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-center mb-3">Personal</h3>
                  <p className="text-gray-600 text-center">
                    Permite ajustar o dashboard de acordo com
                    seu contexto para visualizações personalizadas.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Seção de Benefícios */}
          <div className={`p-8 border-b border-gray-100 transition-opacity duration-500 ${activeSection === 1 ? 'opacity-100' : 'opacity-80'}`}>
            <FadeIn delay={200}>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Benefícios
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group">
                    <FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-gray-600 transform transition-transform duration-300 group-hover:scale-125" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Dados em tempo real</h3>
                    <p className="text-gray-600">
                      Acesso a dados em tempo real de forma visual e simplificada para decisões mais ágeis
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group">
                    <FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-gray-600 transform transition-transform duration-300 group-hover:scale-125" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Personalização completa</h3>
                    <p className="text-gray-600">
                      Personalização completa da experiência do usuário com dashboards flexíveis
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group">
                    <FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-gray-600 transform transition-transform duration-300 group-hover:scale-125" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Decisões ágeis</h3>
                    <p className="text-gray-600">
                      Tomada de decisão mais ágil e embasada com insights contextualizados
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group">
                    <FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-gray-600 transform transition-transform duration-300 group-hover:scale-125" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Automação inteligente</h3>
                    <p className="text-gray-600">
                      Automação de relatórios e análises recorrentes, economizando tempo e recursos
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mt-8 border border-gray-100">
                <p className="text-gray-700 text-center">
                  Com essa estrutura, o BI Generativo transforma dados brutos em
                  insights acionáveis, facilitando a gestão estratégica e operacional do
                  negócio.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Seção Toolzz AI */}
          <div className={`p-8 border-b border-gray-100 bg-gray-50 transition-opacity duration-500 ${activeSection === 2 ? 'opacity-100' : 'opacity-80'}`}>
            <div className="max-w-4xl mx-auto">
              <FadeIn delay={300}>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Toolzz AI - BI Generativo e AI-SQL
                </h2>
    
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 hover:shadow-md transition-all duration-300">
                  <p className="text-gray-700 mb-4">
                    O Add-on de BI Generativo da Toolzz aproveita análise de dados, IA
                    e visualizações inteligentes, utilizando AI-Análise de Dados e Geração de Relatórios
                    Inteligentes, usando AI Generativa para transformar e visualizar
                    dados em insights estratégicos.
                  </p>
    
                  <p className="text-gray-700">
                    A solução permite a integração com bancos de dados externos,
                    garantindo acesso centralizado a todas as informações relevantes
                    da empresa. Além disso, inclui acesso ao Toolzz Connect, solução
                    avançada para um fluxo de configuração otimizado para integração
                    rápida e eficiente.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Seção de Recursos */}
          <div className={`p-8 transition-opacity duration-500 ${activeSection === 3 ? 'opacity-100' : 'opacity-80'}`}>
            <FadeIn delay={400}>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Recursos Principais
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Integração com Bancos de Dados (PostgreSQL, MySQL)",
                  "Importação de Planilhas Excel ou CSV",
                  "Geração de Relatórios com BI Generativo",
                  "Consultas Avançadas com AI-Query",
                  "Análise de Dados Personalizada",
                  "Geração de Gráficos Interativos",
                  "Análise de Documentação via IA",
                  "Conexão por Comando de Voz",
                  "Respostas por Comando de Voz",
                  "Análise Preditiva com AI",
                  "Suporte para até 20 fontes com até 20 Colunas",
                  "Acesso ao Toolzz Connect (30d)",
                  "Automação via Connect com até 30,000 Operações/mês",
                  "APIs de Configuração do Fluxo no Connect",
                  "Treinamento e Suporte Contínuo no Chat"
                ].map((recurso, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 flex items-center gap-3 hover:translate-y-[-2px]"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 group">
                      <FontAwesomeIcon icon={faCheck} className="text-gray-600 h-4 w-4 transform transition-transform duration-300 group-hover:scale-125" />
                    </div>
                    <span className="text-gray-700">{recurso}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-2 text-lg transform transition-transform duration-300 hover:scale-105 active:scale-95">
                  Começar agora
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
} 