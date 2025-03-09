'use client';

import { useEffect, memo } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollToTopProps {
  children: React.ReactNode;
}

// Otimizado com memo para evitar re-renderizações desnecessárias
export const ScrollToTop = memo(function ScrollToTop({ children }: ScrollToTopProps) {
  const pathname = usePathname();

  // Resetar o scroll para o topo quando a rota mudar
  useEffect(() => {
    // Usa requestAnimationFrame para garantir que o scroll aconteça no próximo frame de animação
    // Isso melhora a performance evitando reflow/repaint desnecessários
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant' // Usa 'instant' para melhor desempenho
      });
    });
  }, [pathname]);

  return <>{children}</>;
}); 