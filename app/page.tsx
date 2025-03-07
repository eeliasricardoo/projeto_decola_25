"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkButton } from "@/components/link-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faRobot, 
  faServer, 
  faChartLine, 
  faBrain,
  faAngleDown,
  faClone,
  faVideo,
  faGraduationCap,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // Função para lidar com o clique no botão Ver backlog
  const handleVerBacklog = () => {
    // Aqui pode adicionar a navegação ou abrir em nova janela
    window.location.href = '#backlog';
  };

  // Função para lidar com o clique no botão Conferir
  const handleConferir = () => {
    // Rolagem suave até a seção de cards
    document.querySelector('.grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-6xl flex flex-col items-center gap-16">
        {/* Logo */}
        <div className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-2 mt-8">
          <div className="bg-black rounded-lg w-8 h-8 flex items-center justify-center text-white font-bold mr-2">
            <span className="text-xs">TZ</span>
          </div>
          <span className="font-semibold text-xl">Toolzz</span>
        </div>

        {/* Título e subtítulo */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-bold">
            Projeto <span className="text-red-600">Decola</span> 25,
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Solução Integrada de Gestão, Criação e Aprendizado
            para Entregadores e Restaurantes
          </p>
          
          {/* Botão Conferir */}
          <Button variant="outline" className="mt-8 rounded-full px-8 py-6" onClick={handleConferir}>
            Conferir <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
          </Button>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
          {/* Card 1 - Decola OS */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="flex items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <FontAwesomeIcon icon={faRobot} className="text-2xl text-gray-600" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold">Decola OS</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <p className="text-sm text-muted-foreground">
                Força de Trabalho com Agentes de IA
              </p>
            </CardContent>
          </Card>

          {/* Card 2 - Geração de Conteúdo */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="flex items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <FontAwesomeIcon icon={faClone} className="text-2xl text-gray-600" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold">Geração de Conteúdo com Clones de IA</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <p className="text-sm text-muted-foreground">
                Ferramenta para construção de vídeos e outras mídias
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - HYDRA */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="flex items-start space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <FontAwesomeIcon icon={faBrain} className="text-2xl text-gray-600" />
                </div>
              </div>
              <div className="text-gray-400 font-light text-2xl mb-2">HYDRA</div>
              <CardTitle className="text-xl font-bold">Experiência 3.0 do Hub de Conhecimento</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <p className="text-sm text-muted-foreground">
                Conexão direta com banco do LMS para aprendizado de estruturas
              </p>
            </CardContent>
          </Card>

          {/* Card 4 - Dashboards */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="flex items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <FontAwesomeIcon icon={faChartLine} className="text-2xl text-gray-600" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold">Dashboards para Governança e Análises</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <p className="text-sm text-muted-foreground">
                Adaptação dos conteúdos de vídeo e outros materiais para tunning da IA
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Botão Ver Backlog */}
        <Button variant="ghost" className="mt-8 mb-16" onClick={handleVerBacklog}>
          Ver backlog completo <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
