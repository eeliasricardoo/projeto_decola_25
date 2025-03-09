"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDatabase, faGear, faMicrophone, faRobot, faTable, faArrowRight, faChartLine, faRefresh, faCog, faChat, faUserCircle, faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-8">
      {/* Seção de título */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black">BI Generativo</span>{" "}
          <span className="text-red-600">feito por IA</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Inteligência Artificial treinada com contexto e preparada para servir
          ao time de gestão e vendas.
        </p>
      </div>

      {/* Grade de cartões principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Cartão de Prompt */}
        <Card className="border border-gray-200 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Faça sua pergunta...</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <FontAwesomeIcon icon={faEye} className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 text-sm">
              <p className="font-medium mb-1">Baseado no seu Departamento/Função</p>
              <p className="text-gray-500">Obtenha respostas personalizadas para sua área</p>
            </div>
          </CardContent>
        </Card>

        {/* Cartão de Resposta/Análise */}
        <Card className="border border-gray-200 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 h-6 w-32 rounded"></div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <FontAwesomeIcon icon={faCog} className="h-4 w-4 text-gray-500" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
                <div className="h-4 w-10/12 bg-gray-200 rounded"></div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 text-sm flex items-center justify-between">
              <div>
                <p className="font-medium mb-1">Consulta rápida</p>
                <p className="text-gray-500">Respostas instantâneas e análises em tempo real</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <FontAwesomeIcon icon={faMicrophone} className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Cartão de Configuração */}
        <Card className="border border-gray-200 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6">
              <div className="flex items-center justify-center h-16 mb-4">
                <FontAwesomeIcon icon={faGear} className="h-8 w-8 text-gray-400" />
              </div>
              <div className="bg-gray-200 h-8 w-32 mx-auto rounded mb-2"></div>
            </div>
            
            <div className="bg-gray-50 p-4 text-sm">
              <p className="font-medium mb-1">BI Avançado</p>
              <p className="text-gray-500">Configure painéis e análises complexas</p>
            </div>
          </CardContent>
        </Card>

        {/* Cartão de Notificações */}
        <Card className="border border-gray-200 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <FontAwesomeIcon icon={faRobot} className="h-6 w-6 text-gray-400" />
                <Badge className="bg-black text-white">Novo</Badge>
              </div>
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            </div>
            
            <div className="bg-gray-50 p-4 text-sm flex justify-between items-center">
              <p className="font-medium">Notificações proativas</p>
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 text-gray-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seção de Informações do BI */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          BI Generativo com Agente de Dados em Tempo Real
        </h2>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="mb-4 text-gray-700">
                O BI Generativo é um agente inteligente que integra, processa e
                apresenta dados em tempo real, proporcionando aos gestores uma visão
                estratégica das suas equipes.
              </p>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Integração Dinâmica</h3>
                <p className="text-gray-600">
                  O agente de BI se conecta a diversas fontes de dados, capturando informações em tempo real de diferentes
                  sistemas e APIs.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Análise Automatizada</h3>
                <p className="text-gray-600">
                  Os dados são processados, transformados e
                  apresentados de forma clara, incluindo gráficos intuitivos, métricas e
                  benefícios.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Respostas Inteligentes</h3>
                <p className="text-gray-600">
                  Baseado em instruções pré-configuradas,
                  o agente gera respostas adaptadas ao contexto da consulta, usando
                  linguagem natural.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Dashboards Customizáveis</h3>
                <p className="text-gray-600">
                  Os usuários podem criar painéis
                  personalizados e KPIs de seu interesse, permitindo
                  acompanhamento contínuo de KPIs estratégicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Como Funciona */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Como Funciona?
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-24 font-bold">Coleta</div>
            <div className="flex-1">
              <p className="text-gray-600">
                O agente se conecta às fontes de dados definidas (APIs,
                banco de dados, sistemas internos).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-24 font-bold">Processamento</div>
            <div className="flex-1">
              <p className="text-gray-600">
                Organiza e estrutura os dados conforme regras
                predefinidas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-24 font-bold">Visualização</div>
            <div className="flex-1">
              <p className="text-gray-600">
                Exibe os insights em gráficos dinâmicos e relatórios
                personalizados.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-24 font-bold">Personalização</div>
            <div className="flex-1">
              <p className="text-gray-600">
                Permite ajustar o que no dashboard de acordo com
                seu contexto para visualizações personalizadas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Benefícios */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Benefícios
        </h2>

        <div className="space-y-4">
          <p className="text-gray-600">
            Acesso a dados em tempo real de forma visual e simplificada
          </p>
          <p className="text-gray-600">
            Personalização completa da experiência do usuário
          </p>
          <p className="text-gray-600">
            Tomada de decisão mais ágil e embasada
          </p>
          <p className="text-gray-600">
            Automação de relatórios e análises recorrentes
          </p>
        </div>

        <div className="mt-8">
          <p className="text-gray-600">
            Com essa estrutura, o BI Generativo transforma dados brutos em
            insights acionáveis, facilitando a gestão estratégica e operacional do
            negócio.
          </p>
        </div>
      </div>

      {/* Seção Toolzz AI */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Toolzz AI - BI Generativo e AI-SQL
        </h2>

        <div className="space-y-6">
          <p className="text-gray-600">
            O Add-on de BI Generativo da Toolzz aproveita análise de dados, IA
            e visualizações inteligentes, utilizando AI-Análise de Dados e Geração de Relatórios
            Inteligentes, usando AI Generativa para transformar e visualizar
            dados em insights estratégicos.
          </p>

          <p className="text-gray-600">
            A solução permite a integração com bancos de dados externos,
            garantindo acesso centralizado a todas as informações relevantes
            da empresa. Além disso, inclui acesso ao Toolzz Connect, solução
            avançada para um fluxo de configuração otimizado para integração
            rápida e eficiente.
          </p>
        </div>
      </div>

      {/* Seção de Recursos */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Recursos Principais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Integração com Bancos de Dados (PostgreSQL, MySQL)</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Importação de Planilhas Excel ou CSV</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Geração de Relatórios com BI Generativo</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Consultas Avançadas com AI-Query</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Análise de Dados Personalizada</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Geração de Gráficos Interativos</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Análise de Documentação via IA</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Conexão por Comando de Voz</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Respostas por Comando de Voz</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Análise Preditiva com AI</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Suporte para até 20 fontes com até 20 Colunas</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Acesso ao Toolzz Connect (30d)</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Automação via Connect com até 30,000 Operações/mês</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">APIs de Configuração do Fluxo no Connect</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 h-4 w-4" />
            <span className="text-gray-600">Treinamento e Suporte Contínuo no Chat</span>
          </div>
        </div>
      </div>
    </div>
  );
} 