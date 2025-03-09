"use client";

import { useState, useEffect } from "react";
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
  faStar,
  faRobot,
  faBook,
  faChartLine,
  faCheck,
  faClock,
  faUsers,
  faInfoCircle,
  faCheckCircle,
  faArrowRight,
  faCode,
  faLightbulb,
  faQuestion,
  faBookOpen,
  faChevronDown,
  faBrain,
  faTrophy,
  faGraduationCap as faGradAlt
} from "@fortawesome/free-solid-svg-icons";
import { faHydra } from "@fortawesome/pro-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { 
  PageHeader, 
  FadeIn, 
  MainInterface, 
  MainInterfaceSection, 
  MainInterfaceCard,
  FeatureCard,
  HowItWorksSection,
  BenefitsSection,
  Button
} from "@/components/ui";
import Link from "next/link";
import Image from "next/image";

// Componente de animação de digitação
interface TypewriterEffectProps {
  phrases: string[];
  speed?: number;
  pauseTime?: number;
}

const TypewriterEffect = ({ phrases, speed = 70, pauseTime = 2000 }: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    
    // Efeito de digitação
    if (!isDeleting && displayText === currentPhrase) {
      // Pausa quando termina de digitar frase completa
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(speed / 2); // Deleta mais rápido
      }, pauseTime);
    } else if (isDeleting && displayText === "") {
      // Troca para próxima frase
      setIsDeleting(false);
      setTypingSpeed(speed);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    } else {
      // Processo de digitação ou deleção
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentPhrase.substring(0, displayText.length - 1)
          : currentPhrase.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting, phrases, speed, pauseTime, typingSpeed]);
  
  return <span className="inline-block min-h-[24px]">{displayText}<span className="animate-pulse">|</span></span>;
};

// Componente para exibir resultados de busca
interface SearchResultProps {
  icon: IconDefinition;
  title: string;
  description: string;
  tags?: string[];
  animate?: boolean;
  delay?: number;
}

const SearchResult = ({ icon, title, description, tags = [], animate = false, delay = 0 }: SearchResultProps) => {
  const [isVisible, setIsVisible] = useState(!animate);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [animate, delay]);

  return (
    <div 
      className={`p-4 border border-gray-200 rounded-lg bg-white mb-8 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-4'
      }`}
    >
      <div className="flex items-start">
        <div className="h-8 w-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
          <FontAwesomeIcon icon={icon} className="h-4 w-4 text-gray-700" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente de FAQ Interativo
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button 
        className="w-full py-4 px-0 flex items-center justify-between focus:outline-none"
        onClick={onClick}
      >
        <span className="font-medium text-gray-900 text-left">{question}</span>
        <div className={`h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4 text-gray-600" />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen 
            ? 'max-h-96 opacity-100 py-4' 
            : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <p className="text-gray-700 text-sm">{answer}</p>
      </div>
    </div>
  );
};

// Componente de Questão Interativa
interface QuizQuestionProps {
  question: string;
  options: string[];
  correctOption: number;
}

const QuizQuestion = ({ question, options, correctOption }: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleOptionSelect = (index: number) => {
    if (!isSubmitted) {
      setSelectedOption(index);
    }
  };
  
  const handleSubmit = () => {
    if (selectedOption !== null && !isSubmitted) {
      setIsSubmitted(true);
    }
  };
  
  const getOptionClass = (index: number) => {
    if (!isSubmitted) {
      return selectedOption === index 
        ? "border-gray-500 bg-gray-50" 
        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
    }
    
    if (index === correctOption) {
      return "border-green-500 bg-green-50";
    }
    
    if (selectedOption === index && index !== correctOption) {
      return "border-red-500 bg-red-50";
    }
    
    return "border-gray-200 opacity-70";
  };
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="font-medium text-gray-900 mb-4">{question}</h3>
      
      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-4 text-left border rounded-lg transition-all duration-300 ${getOptionClass(index)}`}
            onClick={() => handleOptionSelect(index)}
            disabled={isSubmitted}
          >
            <div className="flex items-start">
              <div className={`h-6 w-6 rounded-full border flex items-center justify-center mr-3 flex-shrink-0 ${
                selectedOption === index ? "border-gray-500 bg-gray-600" : "border-gray-300"
              }`}>
                {selectedOption === index && <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-white" />}
              </div>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          {isSubmitted && (
            <div className={`text-sm font-medium ${selectedOption === correctOption ? "text-green-600" : "text-red-600"}`}>
              {selectedOption === correctOption 
                ? "Correto! Muito bem!" 
                : `Incorreto. A resposta correta é: ${options[correctOption]}`}
            </div>
          )}
        </div>
        
        <button
          className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
            selectedOption === null
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : isSubmitted
                ? "bg-gray-100 text-gray-600"
                : "bg-gray-700 text-white hover:bg-gray-800"
          }`}
          onClick={handleSubmit}
          disabled={selectedOption === null || isSubmitted}
        >
          {isSubmitted ? "Próxima Questão" : "Verificar"}
        </button>
      </div>
    </div>
  );
};

// Componente para exibir destaques de aprendizagem
interface LearningFeatureProps {
  icon: IconDefinition;
  title: string;
  description: string;
  color: string;
}

const LearningFeature = ({ icon, title, description, color }: LearningFeatureProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <div className={`h-12 w-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
        <FontAwesomeIcon icon={icon} className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Componente de exemplo de quiz no estilo cards
interface QuizCardProps {
  question: string;
  options: Array<{text: string, prefix: string}>;
  onSelect?: (index: number) => void;
}

const QuizCard = ({ question, options, onSelect }: QuizCardProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handleSelectOption = (index: number) => {
    setActiveIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 max-w-md mx-auto transition-all duration-300 transform hover:scale-[1.01]">
      <div className="p-6 pb-4">
        <h3 className="text-base font-medium mb-8">{question}</h3>
        
        <div className="space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${
                activeIndex === index 
                  ? "border-gray-800 bg-gray-50" 
                  : "border-gray-200 hover:border-gray-400"
              }`}
              onClick={() => handleSelectOption(index)}
            >
              <div className="flex items-center">
                <span className="text-gray-500 mr-4">{option.prefix}.</span>
                <span className="flex-1">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function HubAprendizagem() {
  // Estado para controlar o carregamento da página
  const [pageLoading, setPageLoading] = useState(true);
  // Estado para o FAQ
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
  
  // Efeito para simular o carregamento inicial da página
  useEffect(() => {
    // Simula o carregamento inicial da página
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 bg-gray-200 rounded-xl flex items-center justify-center animate-pulse mb-4">
            <FontAwesomeIcon icon={faBook} className="h-8 w-8 text-gray-400" />
          </div>
          <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-2 text-gray-400 text-sm">Carregando Hub de Aprendizagem...</div>
        </div>
      </div>
    );
  }

  // Exemplos de buscas para a animação
  const searchExamples = [
    "técnicas de atendimento ao cliente",
    "como melhorar a gestão de pedidos?",
    "dicas para otimizar entregas",
    "estratégias de marketing para restaurantes",
    "análise de dados para delivery"
  ];

  // Resultados de busca simulados
  const searchResults = [
    {
      icon: faBookOpen,
      title: "Estratégias de Atendimento ao Cliente",
      description: "Curso completo com técnicas avançadas para excelência no atendimento",
      tags: ["Curso", "Iniciante", "4h de conteúdo"],
      delay: 800
    },
    {
      icon: faCode,
      title: "Gestão Eficiente de Pedidos",
      description: "Implementação prática de técnicas para reduzir tempo de entrega",
      tags: ["Intermediário", "Hands-on", "Operações"],
      delay: 1000
    },
    {
      icon: faLightbulb,
      title: "Análise de Dados para Performance",
      description: "Aprenda a tomar decisões baseadas em dados para melhorar resultados",
      tags: ["Avançado", "Projeto", "Analytics"],
      delay: 1200
    }
  ];

  // Recursos de aprendizagem
  const learningFeatures = [
    {
      icon: faGamepad,
      title: "Gamificação Inteligente",
      description: "Sistema de recompensas e desafios que aumenta o engajamento e torna o aprendizado divertido",
      color: "bg-gray-700"
    },
    {
      icon: faBrain,
      title: "Aprendizagem Adaptativa",
      description: "Conteúdo personalizado que se adapta ao nível de conhecimento e ritmo de cada aluno",
      color: "bg-gray-800"
    },
    {
      icon: faUserFriends,
      title: "Aprendizado Social",
      description: "Colabore e compita com outros alunos em desafios, aumentando a motivação e retenção",
      color: "bg-gray-700"
    },
    {
      icon: faListCheck,
      title: "Quiz Interativo",
      description: "Questões personalizadas que guiam o aprendizado e avaliam o conhecimento em tempo real",
      color: "bg-gray-600"
    },
    {
      icon: faGradAlt,
      title: "Trilhas de Aprendizado",
      description: "Percursos estruturados com progressão de dificuldade e certificação ao final",
      color: "bg-gray-800"
    },
    {
      icon: faTrophy,
      title: "Conquistas e Ranking",
      description: "Sistema de insígnias e classificação que reconhece o progresso e incentiva a superação",
      color: "bg-gray-700"
    }
  ];
  
  // Dados para o FAQ
  const faqItems = [
    {
      question: "Como funciona a aprendizagem adaptativa no Hub iFood?",
      answer: "A aprendizagem adaptativa utiliza inteligência artificial para analisar o desempenho e o comportamento do aluno, adaptando automaticamente o conteúdo, a dificuldade e o ritmo do aprendizado de acordo com as necessidades individuais de cada colaborador ou parceiro."
    },
    {
      question: "Quais são os benefícios da gamificação para o time?",
      answer: "A gamificação aumenta o engajamento dos colaboradores ao incorporar elementos de jogos como pontos, rankings, conquistas e recompensas. Isso estimula a motivação, torna o aprendizado mais divertido e promove uma competição saudável entre os membros do time."
    },
    {
      question: "Como utilizar o Quiz Interativo para treinamentos?",
      answer: "O Quiz Interativo pode ser configurado pelos gestores para avaliar conhecimentos, coletar informações ou guiar o aprendizado da equipe. É possível definir perguntas com múltiplas escolhas, verdadeiro ou falso, e até mesmo questões abertas com feedback automático."
    },
    {
      question: "É possível personalizar os relatórios de desempenho por região?",
      answer: "Sim, os relatórios são totalmente personalizáveis. Gestores podem escolher quais métricas desejam acompanhar, definir regiões específicas e visualizar os dados em diferentes formatos como gráficos, tabelas ou dashboards interativos."
    }
  ];
  
  // Dados para questões interativas
  const quizQuestions = [
    {
      question: "Qual é o principal benefício da aprendizagem adaptativa para o iFood?",
      options: [
        "Redução de custos com materiais de treinamento",
        "Personalização do conteúdo de acordo com as necessidades de cada colaborador",
        "Menor necessidade de intervenção dos líderes",
        "Possibilidade de avaliar grandes equipes simultaneamente"
      ],
      correctOption: 1
    }
  ];

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-0">
          <PageHeader
            title="Hub de Aprendizagem"
            subtitle="Experiência 3.0 de Educação"
            description="Inovação nos mecanismos de aprendizado e engajamento da experiência principal, inspirado nos melhores aplicativos educacionais."
            icon={faHydra}
            cards={[]}
          />
          
          {/* Cards de destaque - Seção melhorada */}
          <div className="px-8 pt-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningFeatures.slice(0, 3).map((feature, index) => (
                <LearningFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                />
              ))}
            </div>
          </div>
          
          {/* Interface Principal */}
          <MainInterface>
            {/* Coluna 1 - Search */}
            <MainInterfaceSection delay={300}>
              <MainInterfaceCard 
                title="Search Embed" 
                subtitle="Busca inteligente integrada"
                icon={<FontAwesomeIcon icon={faSearch} className="h-6 w-6" />}
              >
                <div className="mb-8">
                  <p className="text-gray-600 text-sm mb-8">
                  Incorpore sua busca inteligente personalizado em qualquer site, aplicativo ou plataforma.
                  </p>
                  
                  <div className="bg-gray-100 p-8 rounded-xl mb-8">
                    <div className="flex items-center bg-white rounded-lg p-4 shadow-sm mb-4 transition-all duration-300 hover:shadow-md focus-within:ring-2 focus-within:ring-gray-300">
                      <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-4 h-5 w-5" />
                      <div className="flex-grow">
                        <TypewriterEffect phrases={searchExamples} speed={40} pauseTime={1500} />
                      </div>
                    </div>
                    
                    {/* Resultados de busca animados */}
                    <div className="mt-4 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                      {searchResults.map((result, index) => (
                        <SearchResult
                          key={index}
                          icon={result.icon}
                          title={result.title}
                          description={result.description}
                          tags={result.tags}
                          animate={true}
                          delay={result.delay}
                        />
                      ))}
                    </div>
                  </div>
                  
                </div>
              </MainInterfaceCard>
            </MainInterfaceSection>
            
            {/* Coluna 2 - Recursos adicionais */}
            <MainInterfaceSection delay={500}>
              <MainInterfaceCard 
                title="Tutoria 24 horas para Alunos"
                subtitle="Suporte imediato"
                icon={<FontAwesomeIcon icon={faClock} className="h-6 w-6" />}
              >
                <div className="bg-gray-100 rounded-xl p-6 mb-8">
                  <div className="flex items-start">
                    <div className="mr-4 h-10 w-10 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Tutoria em Tempo Real</h3>
                      <p className="text-gray-700 text-sm mb-4">
                        Conecte-se com tutores especializados para resolver dúvidas e receber orientação personalizada durante seus estudos.
                      </p>
                      
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-gray-600 mt-1" />
                          <span className="text-sm text-gray-700">Chat em tempo real</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-gray-600 mt-1" />
                          <span className="text-sm text-gray-700">Compartilhamento de tela</span>
                        </li>
                      </ul>
                      
                      <button className="w-full py-2 bg-gray-700 text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 group">
                        <span>Iniciar Tutoria</span>
                        <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Progresso de Aprendizagem</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">Operações de Delivery</span>
                        <span className="text-sm text-gray-700">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-700 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">Gestão de Restaurantes</span>
                        <span className="text-sm text-gray-700">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-700 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">Marketing Digital</span>
                        <span className="text-sm text-gray-700">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-700 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">Atendimento ao Cliente</span>
                        <span className="text-sm text-gray-700">82%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-700 h-2 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">Análise de Dados</span>
                        <span className="text-sm text-gray-700">38%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-700 h-2 rounded-full" style={{ width: '38%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </MainInterfaceCard>
            </MainInterfaceSection>
          </MainInterface>
          
          {/* Seção de Recursos Adicionais */}
          <div className="p-8 bg-gray-50 border-t border-gray-100">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-16 text-center">
                Recursos Educacionais Avançados
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="p-8">
                    <div className="mb-6">
                      <FontAwesomeIcon icon={faListCheck} className="h-8 w-8 text-gray-800" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Quiz Interativo</h3>
                    <p className="text-gray-600">Questões personalizadas que guiam o aprendizado e avaliam o conhecimento em tempo real</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="p-8">
                    <div className="mb-6">
                      <FontAwesomeIcon icon={faGradAlt} className="h-8 w-8 text-gray-800" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Trilhas de Aprendizado</h3>
                    <p className="text-gray-600">Percursos estruturados com progressão de dificuldade e certificação ao final</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="p-8">
                    <div className="mb-6">
                      <FontAwesomeIcon icon={faTrophy} className="h-8 w-8 text-gray-800" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Conquistas e Ranking</h3>
                    <p className="text-gray-600">Sistema de insígnias e classificação que reconhece o progresso e incentiva a superação</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
    
          {/* Exemplo de Geração Automática de Questões */}
          <div className="p-8 border-t border-gray-100 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <FadeIn>
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faRobot} className="h-6 w-6 text-gray-700" />
                    </div>
                    <h2 className="text-2xl font-bold">Geração Automática de Questões</h2>
                  </div>
                  <p className="text-gray-700 text-center max-w-2xl mx-auto mb-16">
                    O sistema analisa o desempenho do aluno e cria automaticamente questões focadas nos conceitos que precisam ser reforçados.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-gray-700 rounded-xl flex items-center justify-center">
                            <FontAwesomeIcon icon={faPencil} className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold">Análise de Desempenho</h3>
                        </div>
                        <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                          IA Avançada
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {/* Exemplo de análise de conceitos */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Atendimento ao Cliente</span>
                            <span className="text-xs text-gray-500">38% de domínio</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 rounded-full" style={{ width: '38%' }}></div>
                          </div>
                          <div className="mt-2 flex items-start gap-2">
                            <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-gray-600">
                              Conceitos a reforçar: escuta ativa, resolução de conflitos, comunicação empática
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Procedimentos de Entrega</span>
                            <span className="text-xs text-gray-500">72% de domínio</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '72%' }}></div>
                          </div>
                          <div className="mt-2 flex items-start gap-2">
                            <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-gray-600">
                              Pontos fortes: verificação de pedidos, uso do aplicativo, protocolo de entrega
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Gestão de Tempo</span>
                            <span className="text-xs text-gray-500">55% de domínio</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 rounded-full" style={{ width: '55%' }}></div>
                          </div>
                          <div className="mt-2 flex items-start gap-2">
                            <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-gray-600">
                              Conceitos a reforçar: priorização de rotas, otimização de entregas em horário de pico
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative">
                        <div className="absolute -top-3 -right-3">
                          <div className="px-3 py-1 bg-gray-700 text-white text-xs font-medium rounded-full">
                            Gerado automaticamente
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-6">Questões Personalizadas</h3>
                        
                        <div className="space-y-6">
                          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <h4 className="font-medium text-gray-900 mb-3">Tema: Comunicação Empática</h4>
                            <p className="text-gray-700 mb-3 text-sm">O cliente reclama que o pedido está incompleto. Qual das opções demonstra melhor uso de comunicação empática?</p>
                            <div className="space-y-1 text-sm text-gray-600">
                              <p>A) "Sinto muito por esse problema. Entendo sua frustração e vamos resolver isso imediatamente."</p>
                              <p>B) "Você deve verificar melhor o pedido antes de reclamar."</p>
                              <p>C) "O restaurante é responsável pelos itens do pedido, não o entregador."</p>
                            </div>
                          </div>
                          
                          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <h4 className="font-medium text-gray-900 mb-3">Tema: Otimização de Rotas</h4>
                            <p className="text-gray-700 mb-3 text-sm">Em um horário de pico, qual estratégia é mais eficiente para otimizar suas entregas?</p>
                            <div className="space-y-1 text-sm text-gray-600">
                              <p>A) "Aceitar todas as entregas disponíveis, independente da distância"</p>
                              <p>B) "Priorizar entregas em uma mesma região antes de mudar para outra área"</p>
                              <p>C) "Alternar entre regiões diferentes a cada entrega"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          
         
          {/* Adicionando estilo de scrollbar customizado */}
          <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 8px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #ddd;
              border-radius: 8px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #ccc;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
} 