import { AppLayout } from "@/components/layout";
import type { Metadata } from "next";
import { heroProps } from "./page";

export const metadata: Metadata = {
  title: "Geração de Conteúdo Educacional - IA Toolzz",
  description: "Praticidade e facilidade para gerar vídeos, podcasts e outros conteúdos educacionais com IA",
};

export default function GeracaoConteudoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout heroProps={heroProps}>{children}</AppLayout>;
} 