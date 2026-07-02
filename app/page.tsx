import Image from "next/image";
import Navbar from "@/components/Navbar";
import BackgroundArcs from "@/components/BackgroundArcs";

const services = [
  {
    title: "Sites institucionais",
    desc: "Um site que apresenta sua empresa com credibilidade e transmite profissionalismo desde o primeiro clique.",
  },
  {
    title: "Landing pages de conversão",
    desc: "Páginas focadas em transformar visitantes em clientes, com copy e design pensados para vender.",
  },
  {
    title: "Design responsivo",
    desc: "Layout adaptado para celular, tablet e desktop — a maioria dos seus clientes vai te encontrar pelo Instagram.",
  },
  {
    title: "Performance e velocidade",
    desc: "Sites rápidos, otimizados e construídos com tecnologia moderna (Next.js), sem enrolação.",
  },
  {
    title: "SEO básico",
    desc: "Estrutura pensada para o Google te encontrar, com títulos, descrições e imagens otimizadas.",
  },
  {
    title: "Suporte contínuo",
    desc: "Depois da entrega, seguimos disponíveis para ajustes, atualizações e dúvidas.",
  },
];

const steps = [
  {
    number: "01",
    title: "Briefing",
    desc: "Entendemos seu negócio, seu público e o que o site precisa comunicar.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Criamos o layout com a identidade visual da sua marca — para sua aprovação.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    desc: "Construímos o site de verdade, rápido e responsivo, pronto para publicar.",
  },
  {
    number: "04",
    title: "Lançamento",
    desc: "Publicamos, testamos tudo e te entregamos o site no ar.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-20 pb-28 text-center">
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
          <span className="mx-auto mt-5 block h-[2px] w-16 bg-gradient-to-r from-purple-500 to-blue-500" />
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
              O que <span className="text-gradient">fazemos ?</span>
            </h2>
            <p className="mt-3 text-gray-400">
              Criamos sites, sistemas e soluções digitais que impulsionam o crescimento da sua empresa.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="card rounded-2xl p-6">
                <h3 className="font-display text-lg font-medium">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{service.desc}</p>
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
              Como funciona?
            </h2>
            <p className="mt-3 text-gray-400">
              Quatro etapas para tirar seu projeto do papel.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-gradient font-display text-3xl font-bold">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-lg font-medium">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{step.desc}</p>
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
       A Ariflux nasceu de um sonho que compartilhamos desde o início da faculdade:
        criar uma empresa na área de tecnologia. Com a experiência adquirida em projetos, 
        estudos e desafios ao longo dessa jornada, decidimos transformar esse objetivo em realidade.

        Hoje, desenvolvemos sites modernos, rápidos e estratégicos, unindo design e tecnologia para ajudar
       empresas a fortalecer sua presença digital e alcançar melhores resultados.
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

      {/* CONTATO */}
<section id="contato" className="relative overflow-hidden px-6 py-20">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Vamos criar o <span className="text-gradient">site</span> da sua
            empresa?
          </h2>
          <p className="mt-4 text-gray-400">
            Fale com a gente e receba um orçamento sem compromisso.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/11947290786"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-full px-7 py-3 text-sm font-medium text-white"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://instagram.com/arifluxdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline rounded-full px-7 py-3 text-sm font-medium text-gray-200"
            >
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

    </>
  );
}