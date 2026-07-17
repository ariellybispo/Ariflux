"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const services = [
  {
    title: "Landing Pages",
    desc: "Ideal para campanhas, lançamentos e captação de clientes.",
    features: [
      "Página única",
      "WhatsApp integrado",
      "Formulário de contato",
      "Responsivo",
      "SEO básico",
    ],
    price: "A partir de R$ 500",
    monthly: "Manutenção: R$ 50/mês",
  },
  {
    title: "Sites Institucionais",
    desc: "Perfeito para empresas que desejam fortalecer sua presença digital.",
    featured: true,
    features: [
      "Até 10 páginas",
      "Design personalizado",
      "Google Maps",
      "Formulários",
      "Responsivo",
      "SEO básico",
    ],
    price: "A partir de R$ 1.000",
    monthly: "Manutenção: R$ 100/mês",
  },
  {
    title: "E-commerce",
    desc: "Venda seus produtos online com uma loja virtual completa.",
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Pagamento online",
      "Painel administrativo",
      "Gestão de pedidos",
    ],
    price: "Sob orçamento",
    monthly: "Manutenção sob consulta",
  },
];

const steps = [
  {
    number: "01",
    title: "Descoberta",
    desc: "Realizamos uma reunião para entender seu negócio, público e objetivos. A partir disso, planejamos a melhor solução para o seu projeto.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Criamos o protótipo do site com a identidade visual da sua marca e ajustamos todos os detalhes para aprovação.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    desc: "Transformamos o protótipo em um site moderno, rápido e responsivo, realizando revisões para garantir a melhor experiência.",
  },
  {
    number: "04",
    title: "Publicação & Suporte",
    desc: "Colocamos seu site no ar, realizamos os testes finais e continuamos disponíveis para atualizações e suporte.",
  },
];

const benefits = [
  {
    title: "Mais credibilidade",
    desc: "Um site profissional transmite confiança e fortalece a imagem da sua empresa perante novos clientes.",
  },
  {
    title: "Disponível 24 horas",
    desc: "Seu negócio continua recebendo visitas e contatos mesmo fora do horário comercial.",
  },
  {
    title: "Mais oportunidades",
    desc: "Facilite o contato com clientes e transforme visitantes em novas oportunidades de venda.",
  },
  {
    title: "Presença no Google",
    desc: "Seja encontrado quando potenciais clientes pesquisarem pelos produtos ou serviços que você oferece.",
  },
];

const differentials = [
  {
    number: "100%",
    title: "Projetos Personalizados",
    desc: "Cada site é desenvolvido de acordo com as necessidades do seu negócio, sem modelos genéricos.",
  },
  {
    number: "100%",
    title: "Código Próprio",
    desc: "Criamos soluções sob medida utilizando tecnologias modernas e boas práticas de desenvolvimento.",
  },
  {
    number: "100%",
    title: "Sem Intermediários",
    desc: "Você conversa diretamente com quem está desenvolvendo seu projeto, sem intermediários.",
  },
  {
    number: "100%",
    title: "Compromisso com Qualidade",
    desc: "Nosso objetivo é entregar um site rápido, moderno e preparado para acompanhar o crescimento da sua empresa.",
  },
];

export default function Home() {
  
const [name, setName] = useState("");
const [company, setCompany] = useState("");
const [project, setProject] = useState("");

const sendWhatsApp = () => {
  const message = `
Olá! Vim através do site da Ariflux e gostaria de solicitar um orçamento.

Meu nome é ${name}

Empresa: ${company}

Projeto:
${project}
`;

  window.open(
    `https://wa.me/5511947290786?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section title="top" className="relative overflow-hidden px-6 pt-20 pb-28 text-center">
        <div className="ambient-glow" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="invisible mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4...">
            Ariflux · Soluções Web
          </span>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl md:text-6xl">
            <span className="block text-white">Leve sua</span>
            <span className="text-gradient block">empresa</span>
            <span className="block text-white">
              para o <span className="text-[#3b82f6]">digital.</span>
            </span>
          </h1>
          <span className="mx-auto mt-5 block h-0.5 w-16 bg-linear-to-r from-purple-500 to-blue-500" />
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
            Um Instagram bonito <span className="text-gradient font-medium">não é mais suficiente</span>.
            Criamos sites modernos, rápidos e com identidade própria que
            transmitem <span className="text-gradient font-medium">autoridade</span> e
            fazem clientes comprarem de verdade.
          </p>

        </div>
      </section>

      {/* SERVIÇOS */}
<section id="servicos" className="relative overflow-hidden px-6 py-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              O que <span className="text-gradient">desenvolvemos ?</span>
            </h2>
            <p className="mt-3 text-gray-400">
              Criamos sites, sistemas e soluções digitais que impulsionam o crescimento da sua empresa.
            </p>
          </div>
          
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              
              <div
                key={service.title}
                className={`card relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  service.featured
                    ? "scale-105 border border-purple-500/50"
                    : "hover:scale-105"
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-purple-500 to-blue-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    Mais procurado
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-gray-400">
                  {service.desc}
                </p>
              
                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-[#3b82f6]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-2xl font-bold text-white">{service.price}</p>
                  <p className="mt-1 text-sm text-gray-400">{service.monthly}</p>
                </div>

                <a
                  href="#contato"
                  className="btn-primary mt-6 flex w-full items-center justify-center rounded-xl py-3 text-sm font-medium text-white"
                >
                  Solicitar orçamento
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
<section id="processo" className="relative overflow-hidden px-6 py-20">

  <div className="mx-auto max-w-6xl">

    <div className="mx-auto max-w-xl text-center">

      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        Nosso <span className="text-gradient">processo</span> de desenvolvimento
      </h2>

      <p className="mt-3 text-gray-400">
        Acompanhamos cada etapa do projeto para garantir uma entrega organizada,
        transparente e de qualidade.
      </p>

    </div>


    <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

      {steps.map((step) => (

        <div key={step.number} className="relative">

          <span className="text-gradient font-display text-4xl font-bold">
            {step.number}
          </span>


          <h3 className="mt-4 font-display text-lg font-semibold">
            {step.title}
          </h3>


          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            {step.desc}
          </p>


        </div>

      ))}

    </div>

  </div>

</section>

{/* POR QUE TER UM SITE */}
<section className="relative overflow-hidden px-6 py-20">
  <div className="relative z-10 mx-auto max-w-6xl">
    <div className="mx-auto max-w-xl text-center">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        Por que sua empresa precisa de um{" "}
        <span className="text-gradient">site?</span>
      </h2>

      <p className="mt-3 text-gray-400">
        Um site profissional fortalece sua marca, gera confiança e cria novas
        oportunidades para o seu negócio crescer.
      </p>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {benefits.map((benefit) => (
        <div key={benefit.title} className="card rounded-2xl p-6">
          <h3 className="font-display text-lg font-semibold">
            {benefit.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            {benefit.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* SOBRE */}
<section id="sobre" className="relative overflow-hidden px-6 py-20">
  <div className="relative z-10 mx-auto max-w-6xl">
    <div className="mx-auto max-w-xl text-center">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        Quem faz a <span className="text-gradient">Ariflux</span>
      </h2>
      <p className="mt-3 text-gray-400">
       
      </p>
    </div>

    {/* NOVO: texto contando a história */}
    <div className="mx-auto mt-8 max-w-2xl text-center">
      <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
       A Ariflux foi fundada em 2026 por dois estudantes apaixonados por tecnologia que 
       decidiram transformar anos de aprendizado e projetos em uma empresa dedicada a 
       impulsionar negócios no ambiente digital.
      </p>
    </div>

    <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:max-w-xl sm:mx-auto">
      {[
        { name: "Arielly Bispo", role: "Co-fundadora", photo: "/team-arielly.jpg" },
        { name: "Felipe Rogerio", role: "Co-fundador", photo: "/team-felipe.jpg" },
      ].map((founder) => (
        <div key={founder.name} className="card rounded-2xl p-6 text-center">
          <div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-purple-500/40">
            <Image
              src={founder.photo}
              alt={founder.name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mt-4 font-display text-lg font-medium">
            {founder.name}
          </h3>
          <p className="text-sm text-gray-400">{founder.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* DIFERENCIAIS */}
<section className="relative overflow-hidden px-6 py-20">
  <div className="relative z-10 mx-auto max-w-6xl">

    <div className="mx-auto max-w-xl text-center">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        Por que escolher a{" "}
        <span className="text-gradient">Ariflux?</span>
      </h2>

      <p className="mt-3 text-gray-400">
        Desenvolvemos cada projeto com foco em qualidade, desempenho e um
        atendimento próximo durante todo o processo.
      </p>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {differentials.map((item) => (
        <div key={item.title} className="card rounded-2xl p-6 text-center">

          <span className="text-gradient font-display text-4xl font-bold">
            {item.number}
          </span>

          <h3 className="mt-4 font-display text-lg font-semibold">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            {item.desc}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* CONTATO */}
<section
  id="contato"
  className="relative overflow-hidden px-6 py-24"
>
  <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

    {/* Lado Esquerdo */}
    <div>

      <span className="text-gradient text-sm font-medium uppercase tracking-widest">
        Vamos conversar
      </span>

      <h2 className="mt-4 font-display text-4xl font-bold leading-tight">
        Vamos criar algo{" "}
        <span className="text-gradient">incrível</span>
        <br />
        para sua empresa?
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-gray-400">
        Conte-nos sobre seu projeto e descubra como podemos ajudar
        sua empresa a construir uma presença digital profissional.
      </p>

      <div className="mt-10 space-y-5">

        <div className="flex items-start gap-3">
          <span className="text-xl text-[#8b5cf6]">✓</span>

          <div>
            <h4 className="font-semibold text-white">
              Orçamento gratuito
            </h4>

            <p className="text-sm text-gray-400">
              Sem compromisso e totalmente personalizado.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-xl text-[#3b82f6]">✓</span>

          <div>
            <h4 className="font-semibold text-white">
              Resposta rápida
            </h4>

            <p className="text-sm text-gray-400">
              Respondemos o mais rápido possível.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-xl text-[#8b5cf6]">✓</span>

          <div>
            <h4 className="font-semibold text-white">
              Atendimento personalizado
            </h4>

            <p className="text-sm text-gray-400">
              Cada projeto é desenvolvido conforme a necessidade da
              sua empresa.
            </p>
          </div>
        </div>

      </div>

    </div>

    {/* Formulário */}
    <div className="card rounded-3xl p-8">

      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-5 w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition focus:border-purple-500"
      />

      <input
        type="text"
        placeholder="Empresa (opcional)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="mb-5 w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition focus:border-purple-500"
      />

      <textarea
        rows={6}
        placeholder="Conte-nos sobre seu projeto..."
        value={project}
        onChange={(e) => setProject(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition focus:border-purple-500"
      />

      <button
        onClick={sendWhatsApp}
        className="btn-primary mt-8 w-full rounded-xl py-4 text-base font-semibold"
      >
        Enviar para WhatsApp
      </button>

    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 px-6 py-10">

  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">


    {/* Logo + Nome */}
    <div className="flex items-center gap-3">

      <Image
        src="/logo-ariflux.png"
        alt="Ariflux"
        width={50}
        height={50}
      />

      <div>
        <h3 className="font-display font-semibold">
          Ariflux
        </h3>

        <p className="text-sm text-gray-400">
          Soluções Web
        </p>
      </div>

    </div>


    {/* Direitos */}
    <p className="text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Ariflux. Todos os direitos reservados.
    </p>


    {/* Redes */}
    <div className="flex gap-5">

      <a
        href="https://www.instagram.com/arifluxdigital/"
        target="_blank"
        className="text-sm text-gray-400 transition hover:text-white"
      >
        Instagram
      </a>

    </div>


  </div>

</footer>
</>
  );
}
