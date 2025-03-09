import { memo } from "react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/home/FeatureCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { 
  faUserBountyHunter, 
  faSparkles, 
  faHydra, 
  faChartTreeMap 
} from "@fortawesome/pro-solid-svg-icons";

interface FeatureCardsProps {
  onBacklogClick: () => void;
}

export const FeatureCards = memo(function FeatureCards({ onBacklogClick }: FeatureCardsProps) {
  return (
    <div className="relative -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 z-10 cards-section">
      <div className="flex flex-col items-center">
        {/* Primeira linha de cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 mb-8 w-full px-4 md:px-8">
          {/* Card 1 - Decola OS */}
          <FeatureCard
            icon={faUserBountyHunter}
            title="Decola OS"
            description="Força de Trabalho com Agentes de IA"
            href="/decola-os"
            width={752}
            height={276}
            animationDelay={0.1}
            animationOffset={0}
          />

          {/* Card 2 - Geração de Conteúdo */}
          <FeatureCard
            icon={faSparkles}
            title="Geração de Conteúdo com Clones de IA"
            description="Ferramenta para construção de vídeos e outras mídias"
            href="/geracao-conteudo"
            width={360}
            height={276}
            animationDelay={0.2}
            animationOffset={24}
            reverse={true}
          />
        </div>

        {/* Segunda linha de cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 mb-8 w-full px-4 md:px-8">
          {/* Card 3 - HYDRA */}
          <FeatureCard
            icon={faHydra}
            title="Experiência 3.0 do Hub de Conhecimento"
            description="Conexão direta com banco do LMS para aprendizado de estruturas"
            href="/hub-aprendizagem"
            width={360}
            height={276}
            animationDelay={0.1}
            animationOffset={48}
          />

          {/* Card 4 - Dashboards */}
          <FeatureCard
            icon={faChartTreeMap}
            title="Dashboards para Governança e Análises"
            description="Adaptação dos conteúdos de vídeo e outros materiais para tunning da IA"
            href="/dashboard"
            width={752}
            height={276}
            animationDelay={0.2}
            animationOffset={72}
            reverse={true}
          />
        </div>

        {/* Botão Ver Backlog */}
        <div className="w-full border-t border-gray-200 py-8">
          <div className="flex justify-center">
            <Button 
              variant="ghost" 
              className="flex items-center text-gray-700 hover:text-red-600 transition-colors duration-300" 
              onClick={onBacklogClick}
            >
              Ver backlog completo <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}); 