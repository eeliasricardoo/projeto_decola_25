"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDatabase, faGear, faMicrophone, faRobot, faTable, faArrowRight, faChartLine, faRefresh } from "@fortawesome/free-solid-svg-icons";
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
  animation: true
};

export default function Dashboard() {
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[800px] mx-auto px-4 py-8 md:py-16">
        {/* Seção de título */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-black">BI Generativo</span>{" "}
            <span className="text-red-600">feito por IA</span>
          </h1>
          <p className="text-gray-600 text-sm max-w-3xl">
            Inteligência Artificial treinada com contexto e preparada para servir
            ao time de gestão e vendas.
          </p>
        </div>

        {/* Grade de cartões principais */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          {/* Cartão de Prompt */}
          <Card className="border border-gray-200 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="px-3 py-3">
                <div className="h-5 w-40 bg-gray-200 rounded mb-4"></div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex gap-2 mb-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-3 py-2 text-[10px]">
                <p className="font-medium">Baseado no seu Departamento/Função</p>
              </div>
            </CardContent>
          </Card>

          {/* Cartão de Resposta/Análise */}
          <Card className="border border-gray-200 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="px-3 py-3">
                <div className="bg-gray-200 h-5 w-32 rounded mb-4"></div>
                
                <div className="space-y-2">
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                  <div className="h-2 w-11/12 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-3 py-2 text-[10px] flex items-center justify-between">
                <p className="font-medium">Consulta rápida</p>
                <div className="h-4 w-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <FontAwesomeIcon icon={faMicrophone} className="h-2 w-2 text-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cartão de Configuração */}
          <Card className="border border-gray-200 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="px-3 py-3">
                <div className="flex items-center justify-center h-16 mb-2">
                  <div className="h-5 w-5 text-gray-400">
                    <FontAwesomeIcon icon={faGear} className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="bg-gray-200 h-3 w-24 mx-auto rounded mb-2"></div>
              </div>
              
              <div className="bg-gray-50 px-3 py-2 text-[10px]">
                <p className="font-medium">BI Avançado</p>
              </div>
            </CardContent>
          </Card>

          {/* Cartão de Notificações */}
          <Card className="border border-gray-200 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="px-3 py-3">
                <div className="flex items-center justify-between mb-2">
                  <FontAwesomeIcon icon={faRobot} className="h-5 w-5 text-gray-400" />
                  <Badge className="bg-black text-white text-[8px] h-4 rounded px-1">Novo</Badge>
                </div>
                <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
              </div>
              
              <div className="bg-gray-50 px-3 py-2 text-[10px] flex justify-between items-center">
                <p className="font-medium">Notificações proativas</p>
                <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 text-gray-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Informações do BI */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            BI Generativo com Agente de Dados em Tempo Real
          </h2>

          <p className="text-gray-700 text-sm mb-4">
            O BI Generativo é um agente inteligente que integra, processa e
            apresenta dados em tempo real, proporcionando aos gestores uma visão
            estratégica das suas equipes.
          </p>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-bold">Integração Dinâmica</h3>
              <p className="text-gray-600">
                O agente de BI se conecta a diversas fontes de dados, capturando informações em tempo real de diferentes
                sistemas e APIs.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Análise Automatizada</h3>
              <p className="text-gray-600">
                Os dados são processados, transformados e
                apresentados de forma clara, incluindo gráficos intuitivos, métricas e
                benefícios.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Respostas Inteligentes</h3>
              <p className="text-gray-600">
                Baseado em instruções pré-configuradas,
                o agente gera respostas adaptadas ao contexto da consulta, usando
                linguagem natural.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Dashboards Customizáveis</h3>
              <p className="text-gray-600">
                Os usuários podem criar painéis
                personalizados e KPIs de seu interesse, permitindo
                acompanhamento contínuo de KPIs estratégicos.
              </p>
            </div>
          </div>
        </div>

        {/* Seção Como Funciona */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            Como Funciona?
          </h2>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-4">
              <div className="w-16 font-bold">Coleta</div>
              <div className="flex-1">
                <p className="text-gray-600">
                  O agente se conecta às fontes de dados definidas (APIs,
                  banco de dados, sistemas internos).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 font-bold">Processamento</div>
              <div className="flex-1">
                <p className="text-gray-600">
                  Organiza e estrutura os dados conforme regras
                  predefinidas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 font-bold">Visualização</div>
              <div className="flex-1">
                <p className="text-gray-600">
                  Exibe os insights em gráficos dinâmicos e relatórios
                  personalizados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 font-bold">Personalização</div>
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
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            Benefícios
          </h2>

          <div className="space-y-2 text-sm">
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

          <div className="mt-4">
            <p className="text-gray-600 text-sm">
              Com essa estrutura, o BI Generativo transforma dados brutos em
              insights acionáveis, facilitando a gestão estratégica e operacional do
              negócio.
            </p>
          </div>
        </div>

        {/* Seção Toolzz AI */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            Toolzz AI - BI Generativo e AI-SQL
          </h2>

          <div className="space-y-4 text-sm">
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
          <h2 className="text-xl font-bold mb-4">
            Recursos Principais
          </h2>

          <div className="grid grid-cols-1 gap-y-1 text-xs">
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
              <div key={index} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 h-3 w-3" />
                <span className="text-gray-600">{recurso}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 