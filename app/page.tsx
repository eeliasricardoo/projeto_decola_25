"use client";

import { useCallback, Suspense, lazy } from "react";
import { HomeBanner } from "@/components/home";
import dynamic from "next/dynamic";

// Carregamento dinâmico dos componentes secundários
const FeatureCards = lazy(() => import("@/components/home").then(mod => ({ default: mod.FeatureCards })));

// Componente cliente para conteúdo interativo
function ClientContent() {
  // Função para lidar com o clique no botão Ver backlog
  const handleVerBacklog = useCallback(() => {
    window.location.href = '#backlog';
  }, []);

  // Função para lidar com o clique no botão Conferir
  const handleConferir = useCallback(() => {
    document.querySelector('.cards-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Container principal com largura máxima */}
      <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative">
          {/* Banner com conteúdo centralizado */}
          <HomeBanner onConferir={handleConferir} />
          
          {/* Cards Grid - Bento Grid sobre o banner */}
          <Suspense fallback={<div className="h-[400px]" />}>
            <FeatureCards onBacklogClick={handleVerBacklog} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

// Versão Server-Side do conteúdo
function ServerSideContent() {
  return (
    <div className="min-h-screen">
      {/* Container vazio com a mesma estrutura para não causar alterações no layout */}
      <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative">
          {/* Espaço reservado para o banner */}
          <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '1840/826', backgroundColor: '#f0f0f0' }} />
        </div>
        {/* Espaço reservado para os cards */}
        <div className="relative mt-8 z-10" />
      </div>
    </div>
  );
}

// Carregamento dinâmico do Client Content
const ClientContentWithNoSSR = dynamic(() => Promise.resolve(ClientContent), {
  ssr: false,
  loading: () => <ServerSideContent />
});

// Componente principal com otimizações
export default function Home() {
  return <ClientContentWithNoSSR />;
}
