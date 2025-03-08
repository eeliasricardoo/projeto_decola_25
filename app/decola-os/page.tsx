"use client";

import Image from "next/image";
import { faUserAstronaut, faTableColumns } from "@fortawesome/pro-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Componentes
import { HeroSectionProps } from "@/components/layout";
import { AgentCard } from "@/components/decolaos/AgentCard";
import { FeatureCard } from "@/components/decolaos/FeatureCard";
import { Footer } from "@/components/decolaos/Footer";
import { TextSection } from "@/components/decolaos/TextSection";
import { StepSection } from "@/components/decolaos/StepSection";
import { BenefitSection } from "@/components/decolaos/BenefitSection";

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
  { name: "Finicius", imagePath: "/agentes/Finicius.png" },
  { name: "Logilson", imagePath: "/agentes/Logilson.png" },
  { name: "Marketina", imagePath: "/agentes/Marketina.png" },
  { name: "Suportana", imagePath: "/agentes/Suportana.png" },
];

const secondRowAgents = [
  { name: "Advanusa", imagePath: "/agentes/Advanusa.png" },
  { name: "Ateneudes", imagePath: "/agentes/Ateneudes.png" },
  { name: "Precifinelson", imagePath: "/agentes/Precifinelson.png" },
  { name: "Arthutor", imagePath: "/agentes/Arthutor.png" },
];

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
  title: "Agentes de IA para Gestão Inteligente de Restaurantes",
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
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Conteúdo principal */}
      <div className="w-full">
        {/* Nota: O HeroSection agora é renderizado automaticamente pelo AppLayout */}
        
        {/* Conteúdo principal - apenas imagens */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Grid de imagens - primeira linha */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 justify-center">
            {agents.map((agent) => (
              <AgentCard key={agent.name} name={agent.name} imagePath={agent.imagePath} />
            ))}
          </div>

          {/* Edu - Imagem central */}
          <div className="flex justify-center mb-8">
            <div className="rounded-2xl overflow-hidden relative" style={{ width: "1144px", height: "260px", maxWidth: "100%" }}>
              <Image 
                src="/agentes/Edu.png" 
                alt="Edu" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Grid de imagens - segunda linha */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            {secondRowAgents.map((agent) => (
              <AgentCard key={agent.name} name={agent.name} imagePath={agent.imagePath} />
            ))}
          </div>
        </main>

        {/* Cards adicionais */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {featureCards.map((card, index) => (
              <FeatureCard 
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </section>

        {/* Seções de texto */}
        <TextSection 
          title={introSection.title} 
          paragraphs={introSection.paragraphs} 
        />

        <StepSection 
          title={journeySection.title}
          introduction={journeySection.introduction}
          steps={journeySection.steps}
        />

        <BenefitSection 
          title={strategicSection.title}
          introduction={strategicSection.introduction}
          benefits={strategicSection.benefits}
        />

        <TextSection 
          title={conclusionSection.title} 
          paragraphs={conclusionSection.paragraphs} 
        />

        {/* Rodapé simples */}
        <Footer />
      </div>
    </div>
  );
} 