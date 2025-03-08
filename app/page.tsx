"use client";

import { useEffect, useState, useMemo, lazy, Suspense } from "react";
import { faUserBountyHunter, faSparkles, faHydra, faChartTreeMap } from "@fortawesome/pro-solid-svg-icons";

// Componentes - carregados de forma otimizada
import { SkeletonFallback } from "@/components/home/SkeletonFallback";

// Lazy loading para componentes principais
const HeroBanner = lazy(() => import('@/components/home/HeroBanner').then(mod => ({ default: mod.HeroBanner })));
const FeaturesGrid = lazy(() => import('@/components/home/FeaturesGrid').then(mod => ({ default: mod.FeaturesGrid })));

// Componente cliente para conteúdo interativo
function ClientContent() {
  // Funções memoizadas para evitar re-criações
  const handleVerBacklog = useMemo(() => () => {
    window.location.href = '#backlog';
  }, []);

  const handleConferir = useMemo(() => () => {
    document.querySelector('.cards-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Dados memoizados para prevenir recriações a cada renderização
  const title = useMemo(() => ({
    firstPart: "Projeto ",
    highlight: "Decola",
    lastPart: " 25,"
  }), []);

  const description = "Solução Integrada de Gestão, Criação e Aprendizado para Entregadores e Restaurantes";

  // Features memoizadas
  const features = useMemo(() => [
    {
      title: "Decola OS",
      description: "Força de Trabalho com Agentes de IA",
      icon: faUserBountyHunter,
      width: 752,
      href: "/decola-os"
    },
    {
      title: "Geração de Conteúdo com Clones de IA",
      description: "Ferramenta para construção de vídeos e outras mídias",
      icon: faSparkles,
      width: 360,
      reverse: true,
      initialOffset: 25
    },
    {
      title: "Experiência 3.0 do Hub de Conhecimento",
      description: "Conexão direta com banco do LMS para aprendizado de estruturas",
      icon: faHydra,
      width: 360,
      initialOffset: 50
    },
    {
      title: "Dashboards para Governança e Análises",
      description: "Adaptação dos conteúdos de vídeo e outros materiais para tunning da IA",
      icon: faChartTreeMap,
      width: 752,
      reverse: true,
      initialOffset: 75
    }
  ], []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-white" suppressHydrationWarning>
      {/* Container principal com largura máxima */}
      <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Hero Banner - carregamento sob demanda */}
        <Suspense fallback={<div style={{ height: '50vh', backgroundColor: '#f0f0f0' }}></div>}>
          <HeroBanner 
            title={title}
            description={description}
            onButtonClick={handleConferir}
          />
        </Suspense>

        {/* Feature Grid - carregamento sob demanda */}
        <Suspense fallback={<div className="h-[600px]"></div>}>
          <FeaturesGrid 
            features={features}
            onBacklogClick={handleVerBacklog}
          />
        </Suspense>
      </div>
    </div>
  );
}

// Componente principal com controle de hidratação
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  // Efeito para marcar quando a hidratação no cliente está completa
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Usando o SkeletonFallback separado para o estado não hidratado
  if (!isMounted) {
    return <SkeletonFallback />;
  }

  // Quando a hidratação estiver concluída, renderiza o conteúdo completo
  return <ClientContent />;
}
