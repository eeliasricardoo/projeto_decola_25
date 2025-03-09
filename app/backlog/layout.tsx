import { AppLayout } from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backlog Decola 2025 | Toolzz",
  description: "Backlog do projeto Decola 2025 - Solução Integrada de Aprendizado para Entregadores e Restaurantes",
};

export default function BacklogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const heroProps = {
    title: "Backlog Decola 2025",
    subtitle: "",
    description: "Solução Integrada de Aprendizado para Entregadores e Restaurantes",
    highlight: true,
    size: "medium",
    animation: true
  };

  return <AppLayout heroProps={heroProps}>{children}</AppLayout>;
} 