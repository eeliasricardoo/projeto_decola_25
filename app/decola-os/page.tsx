"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faUserBountyHunter, faHydra, faChartTreeMap, faSparkles, faUserAstronaut, faTableColumns } from "@fortawesome/pro-solid-svg-icons";

export default function DecolaOS() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Container para posicionar o menu flutuante */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative py-8 flex justify-center">
        {/* Menu de navegação flutuante conforme a imagem */}
        <header className="bg-white rounded-full shadow-md py-3 px-6 flex items-center justify-between mx-auto" style={{ width: "600px" }}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 font-semibold">
              <div className="bg-white border border-gray-100 rounded-md p-1.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#000"/>
                  <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10px" fontWeight="bold">TZ</text>
                </svg>
              </div>
              <span className="text-base">Toolzz</span>
            </div>
          </div>

          {/* Menu de navegação central */}
          <nav className="flex items-center space-x-5">
            <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm">
              <FontAwesomeIcon icon={faUserBountyHunter} className="w-4 h-4" />
              <span>Força de Trabalho</span>
            </Link>
            
            <Link href="#" className="p-2">
              <FontAwesomeIcon icon={faHydra} className="w-5 h-5 text-gray-500" />
            </Link>
            
            <Link href="#" className="p-2">
              <FontAwesomeIcon icon={faChartTreeMap} className="w-5 h-5 text-gray-500" />
            </Link>
            
            <Link href="#" className="p-2">
              <FontAwesomeIcon icon={faSparkles} className="w-5 h-5 text-gray-500" />
            </Link>
            
            <Link href="#" className="p-2">
              <FontAwesomeIcon icon={faList} className="w-5 h-5 text-gray-500" />
            </Link>
          </nav>
        </header>
      </div>

      {/* Hero com texto */}
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h1 className="text-[96px] font-bold leading-tight">Decola OS,</h1>
        <h2 className="text-[96px] font-medium leading-tight mb-8">Força de Trabalho com IA</h2>
        <p className="text-[36px] text-gray-600 max-w-4xl mx-auto">
          Agentes treinadas com conteúdos e preparada para servir 
          ao time de gestão, criação e alunos
        </p>
      </div>

      {/* Conteúdo principal - apenas imagens */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid de imagens - primeira linha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 justify-center">
          {/* Finicius */}
          <div className="rounded-2xl overflow-hidden relative" style={{ width: "268.13px", height: "402px" }}>
            <Image 
              src="/agentes/Finicius.png" 
              alt="Finicius" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Logilson */}
          <div className="rounded-2xl overflow-hidden relative" style={{ width: "268.13px", height: "402px" }}>
            <Image 
              src="/agentes/Logilson.png" 
              alt="Logilson" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Marketina */}
          <div className="rounded-2xl overflow-hidden relative" style={{ width: "268.13px", height: "402px" }}>
            <Image 
              src="/agentes/Marketina.png" 
              alt="Marketina" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Suportana */}
          <div className="rounded-2xl overflow-hidden relative" style={{ width: "268.13px", height: "402px" }}>
            <Image 
              src="/agentes/Suportana.png" 
              alt="Suportana" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Edu - Imagem central */}
        <div className="flex justify-center mb-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ width: "1144px", height: "260px", maxWidth: "100%" }}>
            <Image 
              src="/agentes/Edu.png" 
              alt="Edu" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Grid de imagens - segunda linha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {/* Advanusa */}
          <div className="rounded-2xl overflow-hidden relative" style={{ width: "268.13px", height: "402px" }}>
            <Image 
              src="/agentes/Advanusa.png" 
              alt="Advanusa" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Ateneudes */}
          <div className="rounded-2xl overflow-hidden relative" style={{ width: "268.13px", height: "402px" }}>
            <Image 
              src="/agentes/Ateneudes.png" 
              alt="Ateneudes" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Precifinelson */}
          <div className="rounded-2xl overflow-hidden relative" style={{ width: "268.13px", height: "402px" }}>
            <Image 
              src="/agentes/Precifinelson.png" 
              alt="Precifinelson" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Arthutor */}
          <div className="rounded-2xl overflow-hidden relative" style={{ width: "268.13px", height: "402px" }}>
            <Image 
              src="/agentes/Arthutor.png" 
              alt="Arthutor" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </main>

      {/* Cards adicionais */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col justify-end" style={{ 
            width: "359px", 
            height: "360px",
            borderRadius: "17px",
            border: "1px solid #CDCDCD",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 69%)"
          }}>
            <div className="flex flex-col justify-end items-start gap-[16px] p-8" style={{ width: "299px", height: "302px" }}>
              <FontAwesomeIcon icon={faUserAstronaut} style={{ color: "#B0B0B0", fontSize: "48px" }} />
              <div className="flex flex-col gap-2">
                <h3 style={{ 
                  color: "#0D0D0D",
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "normal"
                }}>
                  Avatar Digital
                </h3>
                <p style={{ 
                  color: "#838383",
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>
                  Representação visual do consultor, aulas e tutoriais personalizados, presença no Portal e WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-end" style={{ 
            width: "359px", 
            height: "360px",
            borderRadius: "17px",
            border: "1px solid #CDCDCD",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 69%)"
          }}>
            <div className="flex flex-col justify-end items-start gap-[16px] p-8" style={{ width: "299px", height: "302px" }}>
              {/* Ícone do WhatsApp do FontAwesome */}
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#B0B0B0", fontSize: "48px" }} />
              <div className="flex flex-col gap-2">
                <h3 style={{ 
                  color: "#0D0D0D",
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "normal"
                }}>
                  Integração Whatsapp
                </h3>
                <p style={{ 
                  color: "#838383",
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>
                  Assistente Inteligente, atendimento 24/7, notificações e alertas, comandos Simples.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-end" style={{ 
            width: "359px", 
            height: "360px",
            borderRadius: "17px",
            border: "1px solid #CDCDCD",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 69%)"
          }}>
            <div className="flex flex-col justify-end items-start gap-[16px] p-8" style={{ width: "299px", height: "302px" }}>
              <FontAwesomeIcon icon={faTableColumns} style={{ color: "#B0B0B0", fontSize: "48px" }} />
              <div className="flex flex-col gap-2">
                <h3 style={{ 
                  color: "#0D0D0D",
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "normal"
                }}>
                  Dashboard Web
                </h3>
                <p style={{ 
                  color: "#838383",
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>
                  Dashboard Personalizado, histórico de Interações, materiais de apoio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé simples */}
      <footer className="w-full border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Toolzz. Projeto Decola 25.
          </p>
        </div>
      </footer>
    </div>
  );
} 