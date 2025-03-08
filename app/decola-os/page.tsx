"use client";

import Image from "next/image";
import { faUserAstronaut, faTableColumns } from "@fortawesome/pro-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Componentes
import { NavMenu } from "@/components/decolaos/NavMenu";
import { HeroSection } from "@/components/decolaos/HeroSection";
import { AgentCard } from "@/components/decolaos/AgentCard";
import { FeatureCard } from "@/components/decolaos/FeatureCard";
import { Footer } from "@/components/decolaos/Footer";

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

export default function DecolaOS() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Menu de navegação */}
      <NavMenu />

      {/* Hero com texto */}
      <HeroSection 
        title="Decola OS," 
        subtitle="Força de Trabalho com IA" 
        description="Agentes treinadas com conteúdos e preparada para servir ao time de gestão, criação e alunos" 
      />

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

      {/* Rodapé simples */}
      <Footer />
    </div>
  );
} 