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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Fecha o menu mobile automaticamente ao clicar em um link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050508]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        {/* Botão hambúrguer - fica à esquerda, só aparece em mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        <Link href="#" className="flex items-center gap-2 md:mr-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <span className="font-display text-2xl font-bold tracking-wide"></span>
        </Link>

        {/* Links desktop */}
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

      {/* Menu mobile - dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-white/5 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`py-2 text-sm transition-colors ${
                activeSection === link.id
                  ? "text-gradient font-medium"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
