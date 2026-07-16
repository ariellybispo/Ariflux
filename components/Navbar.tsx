"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#servicos", label: "Serviços", id: "servicos" },
  { href: "#processo", label: "Processo", id: "processo" },
  { href: "#sobre", label: "Sobre", id: "sobre" },
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

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050508]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Menu Mobile */}
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

        {/* Logo */}
       <Link href="#top" scroll={true} className="flex items-center gap-3 md:mr-auto transition duration-300 hover:opacity-80">

          <Image
            src="/logo-ariflux.png"
            alt="Ariflux"
            width={185}
            height={52}
            className="h-12 w-auto transition duration-300 hover:scale-105"
            priority
          />

          <span className="font-display text-2xl font-bold tracking-wide">
            Ariflux
          </span>

        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-gradient font-medium"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contato"
            className="btn-primary rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
          >
            Solicitar orçamento
          </a>
        </div>

      </nav>

      {/* Mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 border-t border-white/5 px-6 py-4">

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

          <a
            href="#contato"
            onClick={handleLinkClick}
            className="btn-primary mt-3 rounded-full py-3 text-center text-sm font-medium text-white"
          >
            Solicitar orçamento
          </a>

        </div>
      </div>
    </header>
  );
}

