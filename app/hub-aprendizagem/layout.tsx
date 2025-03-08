'use client';

import { AppLayout } from "@/components/layout";
import { heroProps } from "./page";

export default function HubAprendizagemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout heroProps={heroProps}>
      {children}
    </AppLayout>
  );
} 