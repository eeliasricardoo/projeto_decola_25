'use client';

import { AppLayout } from "@/components/layout";

export default function HubAprendizagemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const heroProps = {
    title: "Hub de Aprendizagem",
    subtitle: "Experiência 3.0 de Educação",
    description: "Inovação nos mecanismos de aprendizado e engajamento da experiência principal, inspirado nos melhores aplicativos educacionais."
  };

  return (
    <AppLayout heroProps={heroProps}>
      {children}
    </AppLayout>
  );
} 