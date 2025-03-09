import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { AppLayout } from "@/components/layout";
import { ScrollToTop } from "@/components/layout";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Projeto Decola 25 - Toolzz",
  description: "Solução Integrada de Gestão, Criação e Aprendizado para Entregadores e Restaurantes",
};

// Configuração para garantir que as páginas iniciem do topo
export const viewport = {
  scrollBehavior: 'auto',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body
        className={`${instrumentSans.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ScrollToTop>
          <AppLayout heroProps={null}>
            {children}
          </AppLayout>
        </ScrollToTop>
        <Toaster />
      </body>
    </html>
  );
}
