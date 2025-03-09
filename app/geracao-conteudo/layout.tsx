import { AppLayout } from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geração de Conteúdo Educacional - IA Toolzz",
  description: "Praticidade e facilidade para gerar vídeos, podcasts e outros conteúdos educacionais com IA",
};

export default function GeracaoConteudoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const heroProps = {
    title: "Geração de Conteúdo Educacional",
    description: "Transforme sua produção de conteúdo com IA",
    gradientColors: ["from-blue-500", "to-purple-500"],
  };

  return <AppLayout heroProps={heroProps}>{children}</AppLayout>;
} 