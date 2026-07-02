import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050508]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/ariflux.gif"
            alt="Ariflux"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-wide">
            ARIFLUX
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

      </nav>
    </header>
  );
}
