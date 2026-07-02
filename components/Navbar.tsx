"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#servicos", label: "Serviços", id: "servicos" },
  { href: "#processo", label: "Como funciona", id: "processo" },
  { href: "#sobre", label: "Sobre", id: "sobre" },
  { href: "#contato", label: "Contato", id: "contato" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Quando a seção ocupar o centro/maior parte da tela visível, ativa ela
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Ajusta o gatilho para ativar quando a seção estiver bem visível no meio da tela
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050508]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <span className="font-display text-2xl font-bold tracking-wide">
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                activeSection === link.id
                  ? "text-gradient font-medium"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
