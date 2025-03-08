import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlug, faListCheck, faRadar, faCommentAltSmile, 
  faUserTieHairLong, faPersonChalkboard, faTransporter1, faSparkles,
  faFileLines, faScaleBalanced, faCalculator, faSquareBinary,
  faMoneyCheckPen, faChartPie, faCoin, faTableColumns,
  faUserAstronaut, faFileXls, faChartTreeMap, faGlobe,
  faGrid, faBookmark, faEdit, faChartLine,
  faSearch, faThumbsUp, faSealQuestion, faHandPointUp,
  faMicrophoneLines, faChartMixed, faRankingStar, faWandSparkles,
  faVial
} from "@fortawesome/pro-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Backlog Decola 2025 | Solução Integrada de Aprendizado",
  description: "Backlog do projeto Decola 2025 - Solução Integrada de Aprendizado para Entregadores e Restaurantes",
};

function BacklogCard({ 
  icon, 
  title, 
  description,
  index
}: { 
  icon: any; 
  title: string; 
  description: string;
  index: number;
}) {
  // Array de classes de cores para os ícones
  const iconColors = [
    "bg-blue-50 text-blue-600",
    "bg-indigo-50 text-indigo-600",
    "bg-purple-50 text-purple-600", 
    "bg-pink-50 text-pink-600",
    "bg-red-50 text-red-600",
    "bg-orange-50 text-orange-600", 
    "bg-amber-50 text-amber-600",
    "bg-yellow-50 text-yellow-600",
    "bg-lime-50 text-lime-600",
    "bg-green-50 text-green-600",
    "bg-emerald-50 text-emerald-600",
    "bg-teal-50 text-teal-600",
    "bg-cyan-50 text-cyan-600",
  ];

  // Seleciona uma cor com base no índice do card
  const colorClass = iconColors[index % iconColors.length];

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-md hover:border-gray-200 hover:translate-y-[-4px]">
      <div className={`mb-4 w-16 h-16 flex items-center justify-center rounded-full ${colorClass}`}>
        <FontAwesomeIcon icon={icon} className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

export default function BacklogPage() {
  const backlogItems = [
    {
      icon: faPlug,
      title: "AI em Progresso",
      description: "Lista de tarefas, sprints e fluxo de trabalho de todo o projeto.",
    },
    {
      icon: faListCheck,
      title: "Governança de Portfólio",
      description: "Gestão de portfólio de produtos e serviços digitais.",
    },
    {
      icon: faRadar,
      title: "Equipamento",
      description: "Gestão de equipamentos e recursos físicos disponíveis.",
    },
    {
      icon: faCommentAltSmile,
      title: "Agente de IA Suporte D.O",
      description: "Assistente virtual para suporte e resolução de dúvidas.",
    },
    {
      icon: faUserTieHairLong,
      title: "Programa Profissionalizante",
      description: "Cursos e capacitações digitais para os colaboradores.",
    },
    {
      icon: faPersonChalkboard,
      title: "Ferramenta de Turma",
      description: "Gestão de grupos de alunos e turmas para treinamentos.",
    },
    {
      icon: faTransporter1,
      title: "Toolzz Chaos",
      description: "Ferramenta para testes caóticos e simulações de sistemas.",
    },
    {
      icon: faSparkles,
      title: "Toolzz Creator",
      description: "Plataforma para criação e desenvolvimento de código personalizado.",
    },
    {
      icon: faFileLines, 
      title: "Transcrição & Vídeo Analysis",
      description: "Serviço para transcrição e análise de vídeos.",
    },
    {
      icon: faScaleBalanced,
      title: "Agente de IA Compliance",
      description: "Assistente para verificação de conformidade com normas e regulamentos.",
    },
    {
      icon: faCalculator,
      title: "Agente de IA Precificador",
      description: "Sistema inteligente para cálculos e sugestões de preços.",
    },
    {
      icon: faCommentAltSmile,
      title: "Agente de IA Suporte B2B",
      description: "Assistente virtual para suporte a clientes empresariais.",
    },
    {
      icon: faSquareBinary,
      title: "Agente de IA B2B Analyst",
      description: "Análise de dados e insights para relações empresariais.",
    },
    {
      icon: faMoneyCheckPen,
      title: "Agente de IA Logística",
      description: "Otimização de rotas e gestão de entregas e logística.",
    },
    {
      icon: faChartPie,
      title: "Agente de IA Marketing e Vendas",
      description: "Estratégias e automação para marketing e vendas.",
    },
    {
      icon: faCoin,
      title: "Agente de IA Patrimônio",
      description: "Gestão e controle de ativos e patrimônios da empresa.",
    },
    {
      icon: faWhatsapp,
      title: "Integração WhatsApp",
      description: "Conecta a plataforma com o WhatsApp para comunicação direta.",
    },
    {
      icon: faTableColumns,
      title: "Dashboard Web",
      description: "Painéis de controle e visualização de métricas importantes.",
    },
    {
      icon: faUserAstronaut,
      title: "Avatar Digital",
      description: "Representação digital personalizada para interações virtuais.",
    },
    {
      icon: faFileXls,
      title: "Processo Automatizado",
      description: "Automação de fluxos de trabalho e processos empresariais.",
    },
    {
      icon: faChartTreeMap,
      title: "360º Nacionalmente",
      description: "Visão completa das operações em todo o território nacional.",
    },
    {
      icon: faGlobe,
      title: "Processo Preditivo",
      description: "Análise preditiva para antecipação de tendências e demandas.",
    },
    {
      icon: faFileXls,
      title: "AI Vídeo Tagger",
      description: "Sistema de etiquetagem automática para vídeos com IA.",
    },
    {
      icon: faGrid,
      title: "AI Vídeo Editor",
      description: "Editor de vídeo com recursos de inteligência artificial.",
    },
    {
      icon: faBookmark,
      title: "AI Vídeo Analytics",
      description: "Análise de métricas e desempenho de vídeos com IA.",
    },
    {
      icon: faEdit,
      title: "Search Lexical",
      description: "Mecanismo de busca avançado com análise lexical.",
    },
    {
      icon: faChartLine,
      title: "Storyboard, Social Learning e Classificações Sociais",
      description: "Ferramentas para aprendizado social e interativo.",
    },
    {
      icon: faSearch,
      title: "Dashboard: Quiz para Gráficos",
      description: "Sistema de questionários com visualização gráfica dos resultados.",
    },
    {
      icon: faThumbsUp,
      title: "Storyboard: Quiz Interativo",
      description: "Questionários interativos em formato de histórias.",
    },
    {
      icon: faSealQuestion,
      title: "Storyboard: Podcast",
      description: "Criação e gestão de podcasts educacionais.",
    },
    {
      icon: faHandPointUp,
      title: "Storyboard: Analytics",
      description: "Análise de desempenho e métricas de storyboards.",
    },
    {
      icon: faMicrophoneLines,
      title: "Ranking & Gamificação",
      description: "Sistema de classificação e elementos de gamificação.",
    },
    {
      icon: faChartMixed,
      title: "Aprendizagem Adaptativa",
      description: "Sistema de educação personalizado conforme perfil do usuário.",
    },
    {
      icon: faRankingStar,
      title: "Geração Automática de Questões Personalizadas",
      description: "Criação de questões adaptadas ao nível de cada aluno.",
    },
    {
      icon: faWandSparkles,
      title: "Automação Inteligente",
      description: "Processos automatizados com inteligência artificial.",
    },
    {
      icon: faVial,
      title: "Testes e Experimentos",
      description: "Ambiente para testes e experimentação de novos recursos.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Backlog <span className="font-bold">Decola</span>{" "}
            <span className="text-gray-400">2025</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Solução Integrada de Aprendizado para{" "}
            <span className="font-medium">Entregadores e Restaurantes</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {backlogItems.map((item, index) => (
            <BacklogCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 