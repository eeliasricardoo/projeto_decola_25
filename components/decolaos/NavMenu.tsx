"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faUserBountyHunter, faHydra, faChartTreeMap, faSparkles } from "@fortawesome/pro-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

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
    icon: faUserBountyHunter,
    label: "Força de Trabalho",
    href: "#",
    active: true
  },
  {
    icon: faHydra,
    href: "#"
  },
  {
    icon: faChartTreeMap,
    href: "#"
  },
  {
    icon: faSparkles,
    href: "#"
  },
  {
    icon: faList,
    href: "#"
  }
];

export const NavMenu = memo(function NavMenu({ items = defaultItems }: NavMenuProps) {
  return (
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
          {items.map((item, index) => (
            item.active ? (
              <Link 
                key={index} 
                href={item.href} 
                className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-black text-white text-xs"
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                {item.label && <span className="text-center">{item.label}</span>}
              </Link>
            ) : (
              <Link 
                key={index} 
                href={item.href} 
                className="flex flex-col items-center p-3 text-gray-500 hover:text-gray-800 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">&nbsp;</span>
              </Link>
            )
          ))}
        </nav>
      </div>
    </div>
  );
}); 