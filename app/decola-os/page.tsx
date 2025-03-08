"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment, faDesktop } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function DecolaOS() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Cabeçalho com logo e navegação */}
      <header className="w-full border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">Toolzz</span>
          </div>
          <nav className="flex space-x-4">
            <Link href="/" className="text-gray-500 hover:text-gray-800">Voltar</Link>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Decola OS,</h1>
          <h2 className="text-2xl font-semibold mb-4">Força de Trabalho com IA</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Agentes treinados com conteúdos e preparada para servir 
            ao time de gestão, criação e alunos
          </p>
        </div>

        {/* Grid de agentes - primeira linha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Agente 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="relative pt-[70%] border-b border-gray-100">
              <Image 
                src="/agentes/Finicius.png" 
                alt="Finicius" 
                fill
                style={{ objectFit: 'cover' }}
                className="bg-blue-50"
              />
              <div className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-0.5 text-xs text-white font-medium">
                AI
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Finicius</h3>
              <p className="text-xs text-gray-500 mt-1">
                Controle de fluxo de caixa e análise de faturamento, projeções de lucro, saúde financeira do negócio
              </p>
            </div>
          </div>

          {/* Agente 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="relative pt-[70%] border-b border-gray-100">
              <Image 
                src="/agentes/Logilson.png" 
                alt="Logilson" 
                fill
                style={{ objectFit: 'cover' }}
                className="bg-blue-50"
              />
              <div className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-0.5 text-xs text-white font-medium">
                AI
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Logilson</h3>
              <p className="text-xs text-gray-500 mt-1">
                Planejamento inteligente de compras, sugestões de fornecedores, comparativo de preços e controle de estoque
              </p>
            </div>
          </div>

          {/* Agente 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="relative pt-[70%] border-b border-gray-100">
              <Image 
                src="/agentes/Marketina.png" 
                alt="Marketina" 
                fill
                style={{ objectFit: 'cover' }}
                className="bg-blue-50"
              />
              <div className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-0.5 text-xs text-white font-medium">
                AI
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Marketina</h3>
              <p className="text-xs text-gray-500 mt-1">
                Estratégias para aumentar pedidos e melhorar a visibilidade, campanhas promocionais e descontos estratégicos
              </p>
            </div>
          </div>

          {/* Agente 4 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="relative pt-[70%] border-b border-gray-100">
              <Image 
                src="/agentes/Suportana.png" 
                alt="Suportana" 
                fill
                style={{ objectFit: 'cover' }}
                className="bg-blue-50"
              />
              <div className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-0.5 text-xs text-white font-medium">
                AI
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Suportana</h3>
              <p className="text-xs text-gray-500 mt-1">
                Suporte contínuo para os usuários, sugestões automatizadas para melhorar a rentabilidade do restaurante
              </p>
            </div>
          </div>
        </div>

        {/* Agente central */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg max-w-xl w-full">
            <div className="relative pt-[50%] border-b border-gray-100">
              <Image 
                src="/agentes/Edu.png" 
                alt="Edu - Agente Central" 
                fill
                style={{ objectFit: 'cover' }}
                className="bg-green-50"
              />
              <div className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-0.5 text-xs text-white font-medium">
                AI
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Edu</h3>
              <p className="text-xs text-gray-500 mt-1">
                O Edu é um agente de inteligência artificial especializado em educação financeira para entregadores de aplicativos de delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Grid de agentes - segunda linha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {/* Agente 5 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="relative pt-[70%] border-b border-gray-100">
              <Image 
                src="/agentes/Advanusa.png" 
                alt="Advanusa" 
                fill
                style={{ objectFit: 'cover' }}
                className="bg-blue-50"
              />
              <div className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-0.5 text-xs text-white font-medium">
                AI
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Advanusa</h3>
              <p className="text-xs text-gray-500 mt-1">
                Orientação sobre normas sanitárias e fiscais, checklists para regularização e boas práticas
              </p>
            </div>
          </div>

          {/* Agente 6 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="relative pt-[70%] border-b border-gray-100">
              <Image 
                src="/agentes/Ateneudes.png" 
                alt="Ateneudes" 
                fill
                style={{ objectFit: 'cover' }}
                className="bg-blue-50"
              />
              <div className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-0.5 text-xs text-white font-medium">
                AI
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Ateneudes</h3>
              <p className="text-xs text-gray-500 mt-1">
                Suporte contínuo para os usuários, atendimento 24 horas para tirar dúvidas e ajudar
              </p>
            </div>
          </div>

          {/* Agente 7 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="relative pt-[70%] border-b border-gray-100">
              <Image 
                src="/agentes/Precifinelson.png" 
                alt="Precifinelson" 
                fill
                style={{ objectFit: 'cover' }}
                className="bg-blue-50"
              />
              <div className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-0.5 text-xs text-white font-medium">
                AI
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Precifinelson</h3>
              <p className="text-xs text-gray-500 mt-1">
                Calculadora inteligente de precificação de pratos, sugestões de margem de lucro, análise de rentabilidade
              </p>
            </div>
          </div>

          {/* Agente 8 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="relative pt-[70%] border-b border-gray-100">
              <Image 
                src="/agentes/Arthutor.png" 
                alt="Arthutor" 
                fill
                style={{ objectFit: 'cover' }}
                className="bg-blue-50"
              />
              <div className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-0.5 text-xs text-white font-medium">
                AI
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Arthutor</h3>
              <p className="text-xs text-gray-500 mt-1">
                Implementação de suporte 24/7 para dúvidas. Opção de chatbot AI ou FAQ dinâmico para automação de respostas
              </p>
            </div>
          </div>
        </div>

        {/* Terceira linha - ferramentas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* Ferramenta 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faUser} className="text-gray-400 text-2xl" />
            </div>
            <h3 className="font-bold text-center">Avatar Digital</h3>
            <p className="text-xs text-gray-500 text-center mt-2">
              Personalização da interface e adaptação da IA ao perfil do usuário
            </p>
          </div>

          {/* Ferramenta 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faComment} className="text-gray-400 text-2xl" />
            </div>
            <h3 className="font-bold text-center">Integração WhatsApp</h3>
            <p className="text-xs text-gray-500 text-center mt-2">
              Acesso aos agentes e suporte via WhatsApp para maior praticidade
            </p>
          </div>

          {/* Ferramenta 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faDesktop} className="text-gray-400 text-2xl" />
            </div>
            <h3 className="font-bold text-center">Dashboard Web</h3>
            <p className="text-xs text-gray-500 text-center mt-2">
              Visualização de métricas e indicadores de desempenho em tempo real
            </p>
          </div>
        </div>

        {/* Seções de texto */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Agentes de IA para Gestão Inteligente de Restaurantes</h2>
          
          <p className="text-sm mb-4">
            O iFood OS será um ecossistema de agentes de IA especializados, atuando como consultores virtuais 
            para donos de restaurantes cadastrados no iFood.
          </p>
          
          <p className="text-sm mb-4">
            Inspirado no modelo de acompanhamento do Sebrae, os agentes oferecerão uma jornada de 
            capacitações, implementação e crescimento sustentável.
          </p>
          
          <p className="text-sm mb-4">
            A solução será baseada na plataforma Toolzz AI, permitindo a criação e treinamento de múltiplos 
            agentes de IA, cada um especializado em uma área crítica da gestão de restaurantes, incluindo 
            precificação, compras, preparo, marketing, atendimento e mais.
          </p>
          
          <p className="text-sm mb-4">
            A interação ocorrerá por meio do WhatsApp, portal web e um avatar digital, que representará o consultor 
            virtual, criando uma experiência mais próxima e humanizada para os usuários.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Jornada de Capacitação e Evolução</h2>
          
          <p className="text-sm mb-2">
            O iFood OS não será apenas um suporte pontual, mas um processo estruturado de capacitação, 
            conduzindo os restaurantes por uma evolução contínua.
          </p>
          
          <div className="ml-4 mb-4">
            <h3 className="font-bold text-sm mb-1">Mapeamento Inicial</h3>
            <p className="text-sm ml-4 mb-2">
              Diagnóstico personalizado com levantamento de desafios e oportunidades.
              <br />
              Definição de áreas de foco baseado nos agentes de IA.
            </p>
            
            <h3 className="font-bold text-sm mb-1">Implementação Guiada</h3>
            <p className="text-sm ml-4 mb-2">
              Recomendações práticas e ações semanais para melhorias no negócio.
              <br />
              Acompanhamento do progresso e ajustes conforme necessidade.
            </p>
            
            <h3 className="font-bold text-sm mb-1">Crescimento e Otimização</h3>
            <p className="text-sm ml-4 mb-2">
              Estratégias avançadas para escalar o negócio.
              <br />
              Análises preditivas para decisões mais inteligentes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Justificativa Estratégica para o iFood</h2>
          
          <p className="text-sm mb-2">
            O iFood OS será um diferencial competitivo, oferecendo um suporte inédito para seus parceiros e
            fortalecendo o ecossistema de restaurantes.
          </p>
          
          <div className="ml-4 mb-4">
            <p className="text-sm mb-2">
              <span className="font-bold">Melhoria na Qualidade dos Restaurantes ➔</span> Negócios mais estruturados aumentam a reputação da plataforma.
            </p>
            
            <p className="text-sm mb-2">
              <span className="font-bold">Redução da Taxa de Churn ➔</span> Restaurantes mais lucrativos permanecem ativos no iFood por mais tempo.
            </p>
            
            <p className="text-sm mb-2">
              <span className="font-bold">Aumento do Ticket Médio ➔</span> Restaurantes capacitados vendem mais e geram maior receita para o iFood.
            </p>
            
            <p className="text-sm mb-2">
              <span className="font-bold">Uso Estratégico de IA ➔</span> Implementação inovadora que reforça a posição do iFood como líder em tecnologia.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Conclusão</h2>
          
          <p className="text-sm mb-4">
            O iFood OS transformará a maneira como os restaurantes interagem com a plataforma, oferecendo um
            suporte completo e estratégico com inteligência artificial. Através de múltiplos canais, um avatar digital e
            uma experiência humanizada de consultoria, o sistema proporcionará uma gestão de negócios mais
            estruturada e eficiente.
          </p>
          
          <p className="text-sm">
            Quem mais absorvem o iFood OS são os pequenos restaurantes e clientes, mas se torna um parceiro
            essencial no sucesso dos negócios 🚀
          </p>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="w-full border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Toolzz. Projeto Decola 25.
          </p>
        </div>
      </footer>
    </div>
  );
} 