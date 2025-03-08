"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faUserBountyHunter, faChartTreeMap } from "@fortawesome/pro-solid-svg-icons";
import { faHydra } from "@fortawesome/pro-solid-svg-icons";
import { faSparkles } from "@fortawesome/pro-solid-svg-icons";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/home/HeroBanner";

// Links para as diferentes seções
const sections = [
  {
    title: "Decola OS",
    description: "Força de Trabalho com Agentes de IA",
    icon: faUserBountyHunter,
    href: "/decola-os",
    iconBg: "bg-gray-100"
  },
  {
    title: "Geração de Conteúdo com Clones de IA",
    description: "Ferramenta para construção de vídeos e outras mídias",
    icon: faSparkles,
    href: "#",
    iconBg: "bg-gray-100"
  },
  {
    title: "Experiência 3.0 do Hub de Conhecimento",
    description: "Conexão direta com banco do LMS para aprendizado de estruturas",
    icon: faHydra,
    href: "/hub-aprendizagem",
    iconBg: "bg-gray-100"
  },
  {
    title: "Dashboards para Governança e Análises",
    description: "Adaptação dos conteúdos de vídeo e outros materiais para tunning da IA",
    icon: faChartTreeMap,
    href: "#",
    iconBg: "bg-gray-100"
  }
];

export default function Home() {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Logo */}
            <div className="mb-8">
              <Image 
                src="/logo.svg" 
                alt="Toolzz"
                width={132}
                height={40}
                priority
              />
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Projeto <span className="text-[#F01624]">Decola</span> 25<span className="text-black">,</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-12">
              Solução Integrada de Gestão, Criação e Aprendizado
              para Entregadores e Restaurantes
            </p>
            
            {/* Botão de ação */}
            <button 
              onClick={scrollToContent}
              className="bg-white border border-gray-300 rounded-full px-6 py-2 flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Conferir <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
            </button>
          </div>
        </div>
        
        {/* Imagens de personagens - lado esquerdo */}
        <div className="absolute bottom-0 left-0 w-1/4 pointer-events-none hidden md:block">
          <Image
            src="/images/professor.png"
            alt="Professor"
            width={400}
            height={400}
            priority
          />
        </div>
        
        {/* Imagens de personagens - lado direito */}
        <div className="absolute bottom-0 right-0 w-1/4 pointer-events-none hidden md:block">
          <Image
            src="/images/entregador.png"
            alt="Entregador"
            width={400}
            height={400}
            priority
          />
        </div>
      </section>
      
      {/* Seção de conteúdo com cards */}
      <section id="content-section" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Link href={section.href} key={index} className="no-underline">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className={`${section.iconBg} p-4 rounded-xl mr-4`}>
                      <FontAwesomeIcon icon={section.icon} className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                      <p className="text-gray-600 text-sm">{section.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* Link para ver backlog completo */}
          <div className="flex justify-center mt-12">
            <Link 
              href="#" 
              className="inline-flex items-center justify-center text-gray-700 hover:text-gray-900"
            >
              Ver backlog completo &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
