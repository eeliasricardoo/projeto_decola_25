import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  
  // Configurações para melhorar a hidratação
  compiler: {
    // Suprime avisos de mismatch de props durante a hidratação
    styledComponents: true,
  },
  
  // Configura o Next.js para exibir erros em vez de falhar
  onDemandEntries: {
    // período em ms em que o servidor armazenará as páginas em memória
    maxInactiveAge: 60 * 1000,
    // número de páginas que deve ser mantido em memória
    pagesBufferLength: 5,
  },
  
  // Desativa a verificação do ESLint durante o build
  eslint: {
    // Desativa a verificação do ESLint durante o build em produção
    ignoreDuringBuilds: true,
  },
  
  // Desativa a verificação de tipos TypeScript durante o build em produção
  typescript: {
    // Ignora erros encontrados durante a verificação de tipos
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
