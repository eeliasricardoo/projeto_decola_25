import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone da resposta original
  const response = NextResponse.next();
  
  // Adicionar headers de segurança
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Define cabeçalhos específicos para ambiente de produção
  if (process.env.NODE_ENV === 'production') {
    // Configurações de cache para recursos estáticos
    if (
      request.nextUrl.pathname.startsWith('/_next/') ||
      request.nextUrl.pathname.includes('/images/') ||
      request.nextUrl.pathname.includes('/agentes/') ||
      request.nextUrl.pathname.endsWith('.png') ||
      request.nextUrl.pathname.endsWith('.jpg') ||
      request.nextUrl.pathname.endsWith('.svg')
    ) {
      response.headers.set(
        'Cache-Control',
        'public, max-age=31536000, immutable'
      );
    }
    
    // Configurações para páginas
    if (request.nextUrl.pathname === '/decola-os') {
      response.headers.set(
        'Cache-Control',
        'public, max-age=3600, stale-while-revalidate=86400'
      );
    }
  }
  
  return response;
}

// Configurar o matcher para aplicar este middleware apenas a determinadas rotas
export const config = {
  matcher: [
    // Aplica a todas as rotas
    '/(.*)',
    // Exclui as APIs
    '/(api|trpc)(.*)',
    // Exclui os assets estáticos
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}; 