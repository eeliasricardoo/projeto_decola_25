"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faUserBountyHunter, faHydra, faChartTreeMap, faSparkles } from "@fortawesome/pro-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

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

export function NavMenu({ items = defaultItems }: NavMenuProps) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 relative py-8 flex justify-center">
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
          {items.map((item, index) => (
            item.active ? (
              <Link key={index} href={item.href} className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm">
                <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                {item.label && <span>{item.label}</span>}
              </Link>
            ) : (
              <Link key={index} href={item.href} className="p-2">
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5 text-gray-500" />
              </Link>
            )
          ))}
        </nav>
      </header>
    </div>
  );
} 