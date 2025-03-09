"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faBullhorn, faChartPie, faMicrophone, faPlus, faCheck, faDatabase, faGear, faTable, faArrowRight, faChartLine, faRefresh } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { HeroSectionProps } from "@/components/layout";

// Configuração do HeroSection para esta página
export const heroProps: HeroSectionProps = {
  title: "BI Generativo",
  subtitle: "feito por IA",
  description: "Inteligência Artificial treinada com contexto e preparada para servir ao time de gestão e vendas.",
  size: "large",
  animation: true,
  highlight: true
};

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4">
      {/* Grid de cards principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Card de Pesquisa */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <p className="text-gray-500 text-sm">O que você quer saber?</p>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-200">
                    <FontAwesomeIcon icon={faPlus} className="h-3 w-3 text-gray-400" />
                  </Button>
                  <span className="text-xs text-gray-500">4o</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-200">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#9CA3AF"/>
                      <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#9CA3AF"/>
                      <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#9CA3AF"/>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-200 bg-black">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"/>
                      <path d="M13 17.9259C16.9405 17.444 20 14.2035 20 10.1587C20 5.63866 16.4183 2 12 2C7.58172 2 4 5.63866 4 10.1587C4 14.2035 7.05947 17.444 11 17.9259V21.5C11 21.7761 11.2239 22 11.5 22H12.5C12.7761 22 13 21.7761 13 21.5V17.9259Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center">
                  <FontAwesomeIcon icon={faFileAlt} className="h-4 w-4 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="h-2 w-3/4 bg-gray-200 rounded-full mb-2"></div>
                  <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center">
                  <FontAwesomeIcon icon={faFileAlt} className="h-4 w-4 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="h-2 w-3/4 bg-gray-200 rounded-full mb-2"></div>
                  <div className="h-2 w-1/3 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#9CA3AF"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mapeamento e Disponibilidade</h3>
                  <p className="text-gray-500 text-sm">Consulta ao banco de dados do LMS por meio de Chat</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Comando de Voz */}
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
                
                <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"/>
                    <path d="M13 17.9259C16.9405 17.444 20 14.2035 20 10.1587C20 5.63866 16.4183 2 12 2C7.58172 2 4 5.63866 4 10.1587C4 14.2035 7.05947 17.444 11 17.9259V21.5C11 21.7761 11.2239 22 11.5 22H12.5C12.7761 22 13 21.7761 13 21.5V17.9259Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faMicrophone} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Comando de voz</h3>
                  <p className="text-gray-500 text-sm">Realize consultas no BI generativo utilizando sua voz</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de BI Generativo */}
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
                <div className="h-12 w-12 bg-black text-white rounded-md flex items-center justify-center mr-4 font-bold text-xs">
                  BI
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">BI Generativo</h3>
                  <p className="text-gray-500 text-sm">Geração de Relatórios de consumo de maneira fácil e acessível</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Notificações */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-sm">Você recebeu muitas avaliações negativas</h4>
                  <Badge className="bg-black text-white text-xs rounded-full px-3 py-1">Depois</Badge>
                </div>
                <p className="text-gray-500 text-sm">Que tal fazer um curso?</p>
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
                  <FontAwesomeIcon icon={faBullhorn} className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Notificações proativas</h3>
                  <p className="text-gray-500 text-sm">Treinamento e personalização dos Avatars e Clones de Voz</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conteúdo informativo abaixo dos cards */}
      <div className="max-w-[800px] mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
        <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">
          BI Generativo com Agente de Dados em Tempo Real
        </h2>

        <p className="text-gray-700 text-sm mb-6">
          O BI Generativo é um agente inteligente que integra, processa e
          apresenta dados em tempo real, proporcionando aos gestores uma visão
          estratégica das suas equipes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold flex items-center mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faDatabase} className="h-4 w-4 text-blue-600" />
              </div>
              Integração Dinâmica
            </h3>
            <p className="text-gray-600 ml-10">
              O agente de BI se conecta a diversas fontes de dados, capturando informações em tempo real de diferentes
              sistemas e APIs.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold flex items-center mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faChartLine} className="h-4 w-4 text-purple-600" />
              </div>
              Análise Automatizada
            </h3>
            <p className="text-gray-600 ml-10">
              Os dados são processados, transformados e
              apresentados de forma clara, incluindo gráficos intuitivos, métricas e
              benefícios.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold flex items-center mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faRefresh} className="h-4 w-4 text-green-600" />
              </div>
              Respostas Inteligentes
            </h3>
            <p className="text-gray-600 ml-10">
              Baseado em instruções pré-configuradas,
              o agente gera respostas adaptadas ao contexto da consulta, usando
              linguagem natural.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold flex items-center mb-2">
              <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faTable} className="h-4 w-4 text-cyan-600" />
              </div>
              Dashboards Customizáveis
            </h3>
            <p className="text-gray-600 ml-10">
              Os usuários podem criar painéis
              personalizados e KPIs de seu interesse, permitindo
              acompanhamento contínuo de KPIs estratégicos.
            </p>
          </div>
        </div>
      </div>

      {/* Restante do conteúdo... */}
      <div className="space-y-8 max-w-[800px] mx-auto">
        {/* Seção Como Funciona */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">
            Como Funciona?
          </h2>

          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="w-16 font-bold flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <FontAwesomeIcon icon={faDatabase} className="h-4 w-4 text-blue-600" />
                </div>
                Coleta
              </div>
              <div className="flex-1">
                <p className="text-gray-600">
                  O agente se conecta às fontes de dados definidas (APIs,
                  banco de dados, sistemas internos).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="w-16 font-bold flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <FontAwesomeIcon icon={faGear} className="h-4 w-4 text-purple-600" />
                </div>
                Processo
              </div>
              <div className="flex-1">
                <p className="text-gray-600">
                  Organiza e estrutura os dados conforme regras
                  predefinidas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="w-16 font-bold flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                  <FontAwesomeIcon icon={faChartLine} className="h-4 w-4 text-green-600" />
                </div>
                Visual
              </div>
              <div className="flex-1">
                <p className="text-gray-600">
                  Exibe os insights em gráficos dinâmicos e relatórios
                  personalizados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="w-16 font-bold flex items-center">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                  <FontAwesomeIcon icon={faRefresh} className="h-4 w-4 text-amber-600" />
                </div>
                Personal
              </div>
              <div className="flex-1">
                <p className="text-gray-600">
                  Permite ajustar o dashboard de acordo com
                  seu contexto para visualizações personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Benefícios */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">
            Benefícios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-600" />
              </div>
              <p className="text-gray-700 font-medium">
                Acesso a dados em tempo real de forma visual e simplificada
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-600" />
              </div>
              <p className="text-gray-700 font-medium">
                Personalização completa da experiência do usuário
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-600" />
              </div>
              <p className="text-gray-700 font-medium">
                Tomada de decisão mais ágil e embasada
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-600" />
              </div>
              <p className="text-gray-700 font-medium">
                Automação de relatórios e análises recorrentes
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 text-sm">
              Com essa estrutura, o BI Generativo transforma dados brutos em
              insights acionáveis, facilitando a gestão estratégica e operacional do
              negócio.
            </p>
          </div>
        </div>

        {/* Seção Toolzz AI */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">
            Toolzz AI - BI Generativo e AI-SQL
          </h2>

          <div className="space-y-6 text-sm">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                O Add-on de BI Generativo da Toolzz aproveita análise de dados, IA
                e visualizações inteligentes, utilizando AI-Análise de Dados e Geração de Relatórios
                Inteligentes, usando AI Generativa para transformar e visualizar
                dados em insights estratégicos.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">
            Recursos Principais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs">
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
              <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 h-3 w-3" />
                </div>
                <span className="text-gray-700">{recurso}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 