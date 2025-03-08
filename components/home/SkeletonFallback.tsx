export function SkeletonFallback() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white" suppressHydrationWarning>
      {/* Container vazio com a mesma estrutura para não causar alterações no layout */}
      <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative">
          {/* Espaço reservado para o banner */}
          <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '1840/826', backgroundColor: '#f0f0f0' }}>
            {/* Nenhum conteúdo interativo */}
          </div>
        </div>
        {/* Espaço reservado para os cards */}
        <div className="relative mt-8 z-10">
          {/* Nenhum conteúdo interativo */}
        </div>
      </div>
    </div>
  );
} 