import Image from "next/image";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faRobot, 
  faVideo, 
  faPlug, 
  faFileAudio, 
  faPenNib, 
  faChartLine, 
  faPlus
} from "@fortawesome/pro-solid-svg-icons";

export default function GeracaoConteudoPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background Elements */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-8 py-16">
        {/* Hero Section */}
       

        {/* Cards Grid - Principais Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Card 1 - Criar Avatar */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-muted/40 hover:border-primary/20">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 h-full">
                <div className="flex flex-col justify-center items-center p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <FontAwesomeIcon icon={faPlus} className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-base font-medium">Criar novo Avatar</p>
                  <p className="text-sm text-muted-foreground mt-2">Enviar vídeo</p>
                </div>
                <div className="bg-muted flex items-center justify-center p-8 group-hover:bg-muted/80 transition-colors duration-300">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FontAwesomeIcon icon={faRobot} className="w-8 h-8 text-gray-500 relative z-10" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - Geração de Conteúdo */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-muted/40 hover:border-primary/20">
            <CardContent className="p-8 h-full">
              <div className="flex flex-col justify-center items-center text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FontAwesomeIcon icon={faPenNib} className="w-8 h-8 text-primary relative z-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Geração de Conteúdo</h3>
                <p className="text-base text-muted-foreground">
                  Ferramenta para criação de vídeos e outras mídias
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 - Clones de Vídeo e Voz */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-muted/40 hover:border-primary/20">
            <CardContent className="p-8 h-full">
              <div className="flex flex-col justify-center items-center text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FontAwesomeIcon icon={faVideo} className="w-8 h-8 text-primary relative z-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Clones de Vídeo e Voz</h3>
                <p className="text-base text-muted-foreground">
                  Treinamento e personalização dos Avatares e Clones de Voz
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 4 - Integração com LMS */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-muted/40 hover:border-primary/20">
            <CardContent className="p-8 h-full">
              <div className="flex flex-col justify-center items-center text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FontAwesomeIcon icon={faPlug} className="w-8 h-8 text-primary relative z-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Integração com LMS</h3>
                <p className="text-base text-muted-foreground">
                  Conexão direta com banco do LMS para sincronização de estruturas
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 5 - Transcrição & Vídeo Analyzer */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-muted/40 hover:border-primary/20">
            <CardContent className="p-8 h-full">
              <div className="flex flex-col justify-center items-center text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FontAwesomeIcon icon={faFileAudio} className="w-8 h-8 text-primary relative z-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Transcrição & Vídeo Analyzer</h3>
                <p className="text-base text-muted-foreground">
                  Interpretação e indexação de vídeo e outras mídias para busca de IA
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 6 - Video Insights */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-muted/40 hover:border-primary/20">
            <CardContent className="p-8 h-full">
              <div className="flex flex-col justify-center items-center text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/30 to-rose-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FontAwesomeIcon icon={faChartLine} className="w-8 h-8 text-primary relative z-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Vídeo Insights</h3>
                <p className="text-base text-muted-foreground">
                  Análise de métricas e insights para melhorar a experiência do usuário para o conteúdo de vídeo
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demonstração */}
        <div className="flex justify-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-primary/10 rounded-full blur-xl -z-10" />
          <Button size="lg" variant="default" className="rounded-full h-16 px-8 text-base hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-blue-600/20 border-0">
            <Badge variant="outline" className="mr-4 bg-white/20 border-0 text-white px-4 py-1">
              Demonstração
            </Badge>
            Agende sua demonstração
          </Button>
        </div>

        {/* Seção de Descrição */}
        <div className="max-w-4xl mx-auto space-y-8 px-8 relative">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
          
          <h2 className="text-3xl font-bold leading-tight">
            O time <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Toolzz AI Content Makers</span> é a solução definitiva para empresas que precisam otimizar a criação, atualização e personalização de conteúdos dentro do LMS.
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa equipe de especialistas em Inteligência Artificial cuida de tudo: geração de avatares e clones de vídeo e voz, transcrição e lapidação de materiais e treinamento da IA para que ela compreenda e replique o conhecimento com máxima eficiência.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Isso significa menos tempo, custo e esforço para manter os conteúdos sempre atualizados, garantindo um alto padrão de qualidade de forma ágil e personalizada para cada cliente.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Se a necessidade é velocidade e precisão na adaptação de conteúdos, o Toolzz Service AI Content Makers entrega exatamente isso, transformando o fluxo de produção e atualização de conhecimento em algo simples, escalável e automatizado.
          </p>
        </div>
      </div>
    </div>
  );
} 