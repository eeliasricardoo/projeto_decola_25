'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { NavMenu } from './NavMenu';
import { HeroSection, HeroSectionProps } from './HeroSection';

interface AppLayoutProps {
  children: ReactNode;
  heroProps?: HeroSectionProps | null;
}

export function AppLayout({ children, heroProps }: AppLayoutProps) {
  const pathname = usePathname();
  
  // Verificar se está na página inicial (root /)
  const isHomePage = pathname === '/';
  
  // Verificar se deve mostrar o HeroSection
  const showHero = heroProps !== null;
  
  // Props padrão do HeroSection
  const defaultHeroProps: HeroSectionProps = {
    title: 'Projeto Decola',
    subtitle: 'Plataforma integrada',
    description: 'Solução completa para gestão, aprendizado e operação de restaurantes e entregadores.',
    highlight: true,
    size: 'medium',
    animation: true,
    ...heroProps
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Renderiza o NavMenu apenas se não for a home */}
      {!isHomePage && <NavMenu />}
      
      {/* Conteúdo principal com margem à esquerda para acomodar o menu (se não for a home) */}
      <div className={`w-full ${!isHomePage ? 'pl-24 sm:pl-32 md:pl-36' : ''}`}>
        {/* Renderiza o HeroSection se showHero for true */}
        {showHero && <HeroSection {...defaultHeroProps} />}
        
        {children}
      </div>
    </div>
  );
} 