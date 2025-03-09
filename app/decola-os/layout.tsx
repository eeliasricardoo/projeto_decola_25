'use client';

import { useEffect } from "react";
import { AppLayout } from "@/components/layout";
import { heroProps } from "./page";
import { usePathname } from "next/navigation";

export default function DecolaOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Resetar o scroll para o topo quando a página for carregada
  useEffect(() => {
    if (pathname === '/decola-os') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <AppLayout heroProps={heroProps}>
      {children}
    </AppLayout>
  );
} 