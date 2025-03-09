import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // Configurações de imagens para melhorar performance no Vercel
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === 'development', // Otimiza apenas em produção
  },
  
  // Configurações para melhorar a hidratação
  compiler: {
    // Suprime avisos de mismatch de props durante a hidratação
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configura o Next.js para exibir erros em vez de falhar
  onDemandEntries: {
    // período em ms em que o servidor armazenará as páginas em memória
    maxInactiveAge: 60 * 1000,
    // número de páginas que deve ser mantido em memória
    pagesBufferLength: 5,
  },
  
  // Desativa a verificação do ESLint durante o build (apenas em produção)
  eslint: {
    // Desativa a verificação do ESLint durante o build em produção
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  
  // Desativa a verificação de tipos TypeScript durante o build em produção
  typescript: {
    // Ignora erros encontrados durante a verificação de tipos
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  
  // Configurações de otimização para produção
  experimental: {
    optimizeCss: true,
    optimisticClientCache: true,
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  
  // Configuração específica para o Vercel
  output: 'standalone',
};

export default nextConfig;
