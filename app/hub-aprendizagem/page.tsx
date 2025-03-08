"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronRight, 
  faSearch, 
  faChartBar, 
  faGamepad, 
  faGraduationCap, 
  faPencil, 
  faListCheck, 
  faUserFriends,
  faMicrophone,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { faHydra } from "@fortawesome/pro-solid-svg-icons";
import { HeroSectionProps } from "@/components/layout";

// Configuração do HeroSection para esta página
export const heroProps: HeroSectionProps = {
  title: "Hub de Aprendizagem",
  subtitle: "Duolingo alike",
  description: "Inovação nos mecanismos de aprendizado e engajamento da experiência principal",
  size: "large",
  animation: true
};

// Componente para Card de Checklist
function ChecklistCard() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="mr-4 w-8 h-8 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#58CC02" width={32} height={32}>
            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,5c1.66,0,3,1.34,3,3s-1.34,3-3,3s-3-1.34-3-3S10.34,5,12,5z M12,19.2c-2.5,0-4.71-1.28-6-3.22c0.03-1.99,4-3.08,6-3.08c1.99,0,5.97,1.09,6,3.08C16.71,17.92,14.5,19.2,12,19.2z"/>
          </svg>
        </div>
        <h3 className="text-[24px] font-bold text-green-600">Checklist Duolingo Alike</h3>
      </div>
      <p className="text-gray-500 mb-4 text-sm">Estamos no caminho!</p>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-sm font-medium text-gray-700">1. Aprendizagem Adaptativa</span>
        </li>
        <li className="flex items-start">
          <span className="text-sm font-medium text-gray-700">2. Geração Automática de Questões Personalizadas</span>
        </li>
        <li className="flex items-start">
          <span className="text-sm font-medium text-gray-700">3. Gamificação e Motivação</span>
        </li>
        <li className="flex items-start">
          <span className="text-sm font-medium text-gray-700">4. Revisão Inteligente e Espaçada</span>
        </li>
        <li className="flex items-start">
          <span className="text-sm font-medium text-gray-700">5. Aprendizado Multimodal (Texto, Áudio e Vídeo)</span>
        </li>
        <li className="flex items-start">
          <span className="text-sm font-medium text-gray-700">6. Feedback em Tempo Real</span>
        </li>
        <li className="flex items-start">
          <span className="text-sm font-medium text-gray-700">7. Social Learning e Desafios Entre Usuários</span>
        </li>
        <li className="flex items-start">
          <span className="text-sm font-medium text-gray-700">8. Metas e Planos de Estudo Personalizados</span>
        </li>
        <li className="flex items-start">
          <span className="text-sm font-medium text-gray-700">9. Assistente Virtual de Aprendizado</span>
        </li>
      </ul>
    </div>
  );
}

// Componente para Card de Tutoria
function TutoriaCard() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full flex flex-col">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5C6AC4" width={40} height={40}>
                <path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8,9h8c0.55,0,1,0.45,1,1s-0.45,1-1,1H8 c-0.55,0-1-0.45-1-1S7.45,9,8,9z M16,14H8c-0.55,0-1-0.45-1-1s0.45-1,1-1h8c0.55,0,1,0.45,1,1S16.55,14,16,14z M16,7H8 C7.45,7,7,6.55,7,6s0.45-1,1-1h8c0.55,0,1,0.45,1,1S16.55,7,16,7z"/>
              </svg>
            </div>
          </div>
          <h3 className="text-[24px] font-bold text-center mb-4">Tutoria 24 horas para Alunos</h3>
          <p className="text-gray-500 text-center text-sm">
            Plantão com tutores em tempo real para resolver dúvidas e atender
          </p>
        </div>
        <div className="mt-8 bg-gray-50 p-4 rounded-lg text-sm text-gray-600 border border-gray-100">
          Funcionalidade para facilitar a comunicação entre tutores e alunos
        </div>
      </div>
    </div>
  );
}

// Componente para Card de Search
function SearchCard() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-16">
      <div className="flex items-start mb-4">
        <div className="mr-4">
          <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-[24px] font-bold mb-2">Search Embed</h3>
          <p className="text-gray-500 text-sm">
            Interface fácil para integrar: incorpore buscas sem esforço em qualquer site, aplicativo ou plataforma.
          </p>
          <Link href="#" className="text-blue-600 text-sm flex items-center mt-2">
            Ver mais <FontAwesomeIcon icon={faChevronRight} className="ml-1 w-3 h-3" />
          </Link>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <div className="flex items-center bg-white rounded-md p-2 shadow-sm">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
          <input type="text" placeholder="Buscar" className="bg-transparent border-none focus:outline-none flex-grow text-sm" />
        </div>
      </div>
      
      <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4">
        <p className="text-sm text-red-600">Encontre o que você procura de maneira rápida</p>
      </div>
      
      <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
        <p className="text-sm text-gray-600">Na aparência pode parecer uma busca comum mas por trás temos</p>
      </div>
    </div>
  );
}

// Componente para Feature Card
function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full flex flex-col">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-[18px] font-bold mb-3">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}

// Dados dos cards de recursos
const featureCards = [
  {
    icon: <FontAwesomeIcon icon={faListCheck} className="text-blue-600 w-8 h-8" />,
    title: "Storyboard, Quiz Iterativo",
    description: "Crie questões interativas para guiar o aprendizado e FAQ iterativo."
  },
  {
    icon: <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 w-8 h-8" />,
    title: "Aprendizagem Adaptativa",
    description: "O aluno recebe desafios na medida de suas habilidades, com crescimento de complexidade à medida que melhora."
  },
  {
    icon: <FontAwesomeIcon icon={faChartBar} className="text-blue-600 w-8 h-8" />,
    title: "Storyboard, Relatórios",
    description: "Mapa detalhado e organizado de cada relatório específico do Storyboard."
  },
  {
    icon: <FontAwesomeIcon icon={faUserFriends} className="text-blue-600 w-8 h-8" />,
    title: "Storyboard, Social Learning e Desafios Entre Usuários",
    description: "Possibilidade de competir ou colaborar com amigos em desafios e quizzes."
  },
  {
    icon: <FontAwesomeIcon icon={faPencil} className="text-blue-600 w-8 h-8" />,
    title: "Storyboard, Quiz para Coleta (Estilo Cards)",
    description: "Quiz interativo para medir conhecimento, fazer pesquisas ou receber coleta de informações."
  },
  {
    icon: <FontAwesomeIcon icon={faStar} className="text-blue-600 w-8 h-8" />,
    title: "Ranking & Gamificação",
    description: "Insigne e Ranking para Alunos e para os professores com sistema de engajamento."
  },
  {
    icon: <FontAwesomeIcon icon={faMicrophone} className="text-blue-600 w-8 h-8" />,
    title: "Storyboard, Podcast",
    description: "Criação rápida de Audio com um conteúdo vertical."
  },
  {
    icon: <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 w-8 h-8" />,
    title: "Geração Automática de Questões Personalizadas",
    description: "Com base no perfil do aluno, o sistema gera perguntas específicas que precisam ser reforçadas."
  }
];

export default function HubAprendizagem() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Conteúdo principal */}
      <div className="w-full">
        {/* Nota: O HeroSection agora é renderizado automaticamente pelo AppLayout */}
        
        {/* Container de cards */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ChecklistCard />
            <TutoriaCard />
            <SearchCard />
          </div>

          {/* Grid de feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {featureCards.map((card, index) => (
              <FeatureCard 
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          
          {/* Logo do iFood */}
          <div className="flex justify-end mb-8">
            <svg width="76" height="25" viewBox="0 0 76 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.1 12.5C38.1 5.6 43.7 0 50.6 0H75.2V25H50.6C43.7 25 38.1 19.4 38.1 12.5Z" fill="#EA1D2C"/>
              <path d="M10.6 0H0V25H10.6V0Z" fill="#EA1D2C"/>
              <path d="M30.3 0C26.2 0 22.9 3.3 22.9 7.4V25H33.5V7.4C33.5 3.3 34.4 0 30.3 0Z" fill="#EA1D2C"/>
              <path d="M15.1 0H13.9C12.3 0 11 1.3 11 2.9V25H16.5V5.1C16.5 2.3 16.5 0 15.1 0Z" fill="#EA1D2C"/>
              <path d="M64.1 14.7C64.1 12.3 62.1 10.3 59.7 10.3C57.3 10.3 55.3 12.3 55.3 14.7C55.3 17.1 57.3 19.1 59.7 19.1C62.1 19.1 64.1 17.1 64.1 14.7Z" fill="white"/>
              <path d="M46.7 13.9V20.6H50.1V13.9C50.1 13.2 50.7 12.7 51.4 12.7H64.5C64.9 11.6 65.1 10.3 65.1 9.1V8.3H51.4C48.8 8.3 46.7 10.4 46.7 13.9Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 