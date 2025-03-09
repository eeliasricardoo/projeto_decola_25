"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faUserBountyHunter, faHydra, faChartTreeMap, faSparkles, faList } from "@fortawesome/pro-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";
import * as Tooltip from "@/components/ui/tooltip";

interface MenuItem {
  icon: IconDefinition;
  label?: string;
  href: string;
  active?: boolean;
}

interface NavMenuProps {
  items?: MenuItem[];
}

const defaultItems: MenuItem[] = [
  {
    icon: faHome,
    label: "Início",
    href: "/",
  },
  {
    icon: faUserBountyHunter,
    label: "Força de Trabalho",
    href: "/decola-os",
  },
  {
    icon: faHydra,
    label: "Experiência 3.0",
    href: "/hub-aprendizagem",
  },
  {
    icon: faChartTreeMap,
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: faSparkles,
    label: "Geração de Conteúdo",
    href: "/geracao-conteudo"
  },
  {
    icon: faList,
    label: "Backlog",
    href: "/backlog"
  }
];

export const NavMenu = memo(function NavMenu({ items = defaultItems }: NavMenuProps) {
  // Usa o hook usePathname para obter o pathname atual de forma segura para SSR
  const pathname = usePathname();

  return (
    <Tooltip.Provider>
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-white rounded-2xl shadow-lg py-6 px-1 flex flex-col items-center">
          {/* Logo */}
          <div className="mb-6">
            <div className="flex flex-col items-center gap-2">
              <Image 
                src="/logo.svg"
                alt="Toolzz Logo"
                width={100}
                height={22}
                className="p-1"
                priority
              />
            </div>
          </div>

          {/* Menu de navegação vertical */}
          <nav className="flex flex-col space-y-5">
            {items.map((item, index) => {
              // Verifica se o item está ativo com base no pathname atual
              const active = item.active || pathname === item.href;
              
              return (
                <Tooltip.Root key={index} delayDuration={300}>
                  <Tooltip.Trigger asChild>
                    <Link 
                      href={item.href} 
                      className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                        active 
                          ? "bg-red-600 text-white" 
                          : "text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors duration-200"
                      }`}
                    >
                      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                    </Link>
                  </Tooltip.Trigger>
                  {item.label && (
                    <Tooltip.Content side="right" sideOffset={8}>
                      {item.label}
                    </Tooltip.Content>
                  )}
                </Tooltip.Root>
              );
            })}
          </nav>
        </div>
      </div>
    </Tooltip.Provider>
  );
}); 