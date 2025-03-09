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
  // Classe de cor vermelha para todos os ícones
  const colorClass = "bg-red-50 text-red-600";

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-md hover:border-red-200 hover:translate-y-[-4px]">
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
      title: "API de Progresso",
      description: "API de Progresso para troca de dados em tempo real com o iFood, permitindo segmentação personalizada e gatilhos de engajamento.",
    },
    {
      icon: faListCheck,
      title: "Governança do Portfólio de Conteúdos",
      description: "Geração de Relatórios de consumo de materiais fácil e acessível.",
    },
    {
      icon: faRadar,
      title: "Rastreamento",
      description: "Identificação automática de conteúdos que precisam de atualização devido a mudanças no iFood.",
    },
    {
      icon: faCommentAltSmile,
      title: "Agente de IA, Suporte DX",
      description: "Suporte automático para usuários.",
    },
    {
      icon: faUserTieHairLong,
      title: "Programa Profissionalizante",
      description: "Configuração de turmas pagas incluindo cursos, aulas ao vivo, quizzes e fóruns/comunidades.",
    },
    {
      icon: faPersonChalkboard,
      title: "Ferramenta de Tutoria",
      description: "Implementação de suporte 24/7 para dúvidas. Opção de chatbot + IA no dinamizador para automação de respostas.",
    },
    {
      icon: faTransporter1,
      title: "Toolzz Clones",
      description: "Treinamento e personalização dos Avatares e Clones de Voz.",
    },
    {
      icon: faSparkles,
      title: "Toolzz Creator",
      description: "Ferramenta para geração automatizada de textos, materiais de vídeo e FAQs inteligentes.",
    },
    {
      icon: faFileLines, 
      title: "Transcrição & Vídeo Analyzer",
      description: "Adaptação dos conteúdos de vídeo automaticamente para transcrição de IA.",
    },
    {
      icon: faScaleBalanced,
      title: "Agente de IA, Compliance",
      description: "Orientação sobre normas sanitárias e fiscais, checklist para regularização de boas práticas e múltiplos insights sobre novas diretrizes públicas.",
    },
    {
      icon: faCalculator,
      title: "Agente de IA, Precificador",
      description: "Cálculos inteligentes de precificação para lojas, sugestões baseadas no mercado, além de recomendação de ajustes.",
    },
    {
      icon: faCommentAltSmile,
      title: "Agente de IA, Suporte RX",
      description: "Sugestões automatizadas para melhorar a rentabilidade do restaurante.",
    },
    {
      icon: faSquareBinary,
      title: "BINARY Agente de IA, BI Analyst",
      description: "Inteligência de dados avançada para tomada de decisão estratégica.",
    },
    {
      icon: faMoneyCheckPen,
      title: "Agente de IA, Logística",
      description: "Planejamento inteligente de compras, sugestões de fornecedores, contratos e distribuição automatizada para otimizar as operações logísticas.",
    },
    {
      icon: faChartPie,
      title: "Agente de IA, Marketing e Vendas",
      description: "Estratégias para aumentar pedidos e conversão, análise de campanhas promocionais e tendências de mercado.",
    },
    {
      icon: faCoin,
      title: "Agente de IA, Financeiro",
      description: "Assistente inteligente de gestão financeira, projeções de lucros sobre investimentos e sugestões de melhoria.",
    },
    {
      icon: faWhatsapp,
      title: "Integração Whatsapp",
      description: "Assistente Inteligente, atendimento 24/7, sugestões e alertas, comandos rápidos.",
    },
    {
      icon: faTableColumns,
      title: "Dashboard Web",
      description: "Dashboard Personalizado histórico de interações, materiais e tags.",
    },
    {
      icon: faUserAstronaut,
      title: "Avatar Digital",
      description: "Representação virtual de consultores, aulas e tutores personalizados, postagem no WhatsApp.",
    },
    {
      icon: faFileXls,
      title: "XLS - Eventos Restaurantes",
      description: "Implementar captação de Eventos Real Time para Restaurantes.",
    },
    {
      icon: faChartTreeMap,
      title: "Eventos Restaurantes",
      description: "Para Restaurantes com SSO e dados sensorizados para intervenções educacionais.",
    },
    {
      icon: faGlobe,
      title: "SSO Restaurantes",
      description: "Para Restaurantes com SSO e dados sensorizados para intervenções educacionais.",
    },
    {
      icon: faFileXls,
      title: "XLS - Eventos Parceiros",
      description: "Implementar captação de Eventos Real Time para Restaurantes.",
    },
    {
      icon: faGrid,
      title: "Central de Relatórios",
      description: "Criação de Relatórios personalizados com os Eventos Real Time.",
    },
    {
      icon: faBookmark,
      title: "AI Vídeo Tagger",
      description: "Ajusta os segmentos de recomendação conforme as métricas pesquisadas, permitindo um alinhamento de conteúdos direcionado às pesquisas do usuário.",
    },
    {
      icon: faEdit,
      title: "AI Vídeo Editor",
      description: "Cria uma nova mídia com base no conteúdo existente. Sugestão de cortes inteligentes e edição dinâmica de feedback, levando em conta o uso do material.",
    },
    {
      icon: faChartLine,
      title: "AI Vídeo Insights",
      description: "Aplica as métricas analisadas para melhoria no engajamento do usuário. Leva em conta interações e histórico de visualizações.",
    },
    {
      icon: faSearch,
      title: "Search Embed",
      description: "Implementa busca inteligente personalizada em qualquer site, aplicativo ou plataforma.",
    },
    {
      icon: faThumbsUp,
      title: "Storyboard, Social Learning e Desafios Entre Usuários",
      description: "Possibilita ideação de competições e colaboração com amigos, desafios e quizzes.",
    },
    {
      icon: faSealQuestion,
      title: "Storyboard, Quiz para Coleta",
      description: "Quiz interativo para conhecimento. Faz pesquisas de mercado e coleta de informações.",
    },
    {
      icon: faHandPointUp,
      title: "Storyboard, Quiz Interativo",
      description: "Criação de quizzes complexos para aprendizado em FAQ na teoria.",
    },
    {
      icon: faMicrophoneLines,
      title: "Storyboard, Podcast",
      description: "Criação e Upload de Áudios como um conteúdo vinculado.",
    },
    {
      icon: faChartMixed,
      title: "Storyboard, Relatórios",
      description: "Novos métodos interativos de desenvolvimento de reports no Storyboard.",
    },
    {
      icon: faRankingStar,
      title: "Ranking & Gamificação",
      description: "Inserção de Ranking para Alunos para ranqueamento de conteúdos com métricas de engajamento.",
    },
    {
      icon: faWandSparkles,
      title: "Aprendizagem Adaptativa",
      description: "Quiz e recomendações mais fáceis se estiver com dificuldades e desafios mais complexos se você estiver progredindo.",
    },
    {
      icon: faVial,
      title: "Geração Automática de Questões Personalizadas",
      description: "Com base no que o aluno já sabe, o sistema adapta os questionários e recomenda conteúdos que precisam ser reforçados.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16 max-w-7xl">
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