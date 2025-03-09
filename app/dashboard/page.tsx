"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faBullhorn, faChartPie, faMicrophone, faPlus, faCheck, faDatabase, faGear, faTable, faArrowRight, faChartLine, faRefresh, faInfoCircle, faLayerGroup, faRobot } from "@fortawesome/free-solid-svg-icons";
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

export default function Dashboard() {
  // Exemplos de perguntas para a animação
  const queryExamples = [
    "Qual o desempenho da equipe este mês?",
    "Mostre os principais KPIs do trimestre",
    "Compare vendas dos últimos 6 meses",
    "Quais produtos tiveram melhor performance?",
    "Análise da equipe de vendas por região"
  ];
  
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Container único para todo o conteúdo */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-0">
          {/* Header principal - mais minimalista e menos vermelho */}
          <div className="bg-gray-100 p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 bg-gray-200 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="h-8 w-8 text-gray-700" />
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
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faMicrophone} className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">Comando de voz</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Realize consultas no BI generativo utilizando sua voz para uma experiência hands-free
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faDatabase} className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">Integração de dados</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Conexão com diversas fontes de dados em tempo real para insights precisos
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faChartLine} className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">Visualização avançada</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Gráficos e dashboards personalizados para monitoramento de KPIs estratégicos
                </p>
              </div>
            </div>
          </div>
          
          {/* Interface principal */}
          <div className="p-8 border-b border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Consulta BI */}
              <div className="flex flex-col space-y-4">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 bg-gray-200 text-gray-700 rounded-xl flex items-center justify-center mr-4 font-bold text-xs">
                      BI
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Consulta BI</h3>
                      <p className="text-gray-500 text-sm">Faça perguntas e obtenha insights em linguagem natural</p>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 shadow-sm">
                    <TypewriterEffect phrases={queryExamples} speed={50} pauseTime={2000} />
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                      Consultar
                    </Button>
                    <Button variant="outline" className="border-gray-200">
                      <FontAwesomeIcon icon={faMicrophone} className="h-4 w-4 text-gray-600 mr-2" />
                      Voz
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-900 text-lg mb-4">Respostas Inteligentes</h3>
                  <p className="text-gray-600 mb-4">
                    Baseado em instruções pré-configuradas,
                    o agente gera respostas adaptadas ao contexto da consulta, usando
                    linguagem natural.
                  </p>
                  <div className="flex flex-col space-y-3">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4 text-gray-600" />
                        </div>
                        <p className="font-medium text-gray-800">Consultas comuns</p>
                      </div>
                      <div className="pl-10 space-y-2">
                        <p className="text-gray-600 text-sm">"Qual o desempenho da equipe este mês?"</p>
                        <p className="text-gray-600 text-sm">"Mostre os principais KPIs do trimestre"</p>
                        <p className="text-gray-600 text-sm">"Compare vendas dos últimos 6 meses"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Funcionalidades */}
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 text-lg mb-6">Funcionalidades Principais</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faDatabase} className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Integração Dinâmica</h4>
                      <p className="text-gray-600 text-sm">
                        O agente de BI se conecta a diversas fontes de dados, capturando informações em tempo real.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faChartLine} className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Análise Automatizada</h4>
                      <p className="text-gray-600 text-sm">
                        Os dados são processados e apresentados de forma clara, incluindo gráficos intuitivos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faTable} className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Dashboards Customizáveis</h4>
                      <p className="text-gray-600 text-sm">
                        Os usuários podem criar painéis personalizados e KPIs de seu interesse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção Como Funciona */}
          <div className="p-8 border-b border-gray-100 bg-gray-50">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Como Funciona?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faDatabase} className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-center mb-3">Coleta</h3>
                <p className="text-gray-600 text-center">
                  O agente se conecta às fontes de dados definidas (APIs,
                  banco de dados, sistemas internos).
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faGear} className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-center mb-3">Processo</h3>
                <p className="text-gray-600 text-center">
                  Organiza e estrutura os dados conforme regras
                  predefinidas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faChartLine} className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-center mb-3">Visual</h3>
                <p className="text-gray-600 text-center">
                  Exibe os insights em gráficos dinâmicos e relatórios
                  personalizados.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faLayerGroup} className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-center mb-3">Personal</h3>
                <p className="text-gray-600 text-center">
                  Permite ajustar o dashboard de acordo com
                  seu contexto para visualizações personalizadas.
                </p>
              </div>
            </div>
          </div>

          {/* Seção de Benefícios */}
          <div className="p-8 border-b border-gray-100">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Benefícios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Dados em tempo real</h3>
                  <p className="text-gray-600">
                    Acesso a dados em tempo real de forma visual e simplificada para decisões mais ágeis
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Personalização completa</h3>
                  <p className="text-gray-600">
                    Personalização completa da experiência do usuário com dashboards flexíveis
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Decisões ágeis</h3>
                  <p className="text-gray-600">
                    Tomada de decisão mais ágil e embasada com insights contextualizados
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-gray-600" />
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
          </div>

          {/* Seção Toolzz AI */}
          <div className="p-8 border-b border-gray-100 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Toolzz AI - BI Generativo e AI-SQL
              </h2>
  
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
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
            </div>
          </div>

          {/* Seção de Recursos */}
          <div className="p-8">
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
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-gray-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700">{recurso}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-2 text-lg">
                Começar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 