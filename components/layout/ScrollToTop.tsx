'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollToTopProps {
  children?: React.ReactNode;
}

export const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const pathname = usePathname();

  // Resetar o scroll para o topo quando a rota mudar
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Usa 'instant' para melhor desempenho
    });
  }, [pathname]);

  return <>{children}</>;
}; 