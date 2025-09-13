// src/sections/Features.jsx
import React, { useState } from "react";
import ModernCTA from "../components/ModernCTA";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  FlagIcon,
  NewspaperIcon,
  XMarkIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";

// Estilos de cor por módulo
const accents = {
  lembretes: { text: "text-emerald-700", chipBg: "bg-emerald-50", ring: "ring-emerald-200", icon: "text-emerald-600" },
  financeiro: { text: "text-sky-700", chipBg: "bg-sky-50", ring: "ring-sky-200", icon: "text-sky-600" },
  metas: { text: "text-amber-700", chipBg: "bg-amber-50", ring: "ring-amber-200", icon: "text-amber-600" },
  listas: { text: "text-violet-700", chipBg: "bg-violet-50", ring: "ring-violet-200", icon: "text-violet-600" },
  noticias: { text: "text-cyan-700", chipBg: "bg-cyan-50", ring: "ring-cyan-200", icon: "text-cyan-600" },
};

const modules = [
  {
    id: "lembretes",
    title: "Parceiro Rotina",
    icon: CalendarIcon,
    punchline: "Organize seu dia sem preocupações. Relatórios e lembretes direto no WhatsApp.",
    bullets: [
      "Relatório diário para começar o dia organizado ✅",
      "Lembrete 30min antes nunca mais se atrase ⏰",
      "Resumo semanal para planejar melhor 📊",
      "Datas especiais lembradas para você 🎉",
    ],
    image: "/Lembretes_e_compromissos.png",
    video: "",
    transitionAfter: "Depois de organizar sua rotina, que tal controlar suas finanças?",
  },
  {
    id: "financeiro",
    title: "Parceiro Finanças",
    icon: CurrencyDollarIcon,
    punchline: "Descubra para onde seu dinheiro vai sem planilhas, sem fricção.",
    bullets: [
      "Registre gastos por voz ou texto zero esforço 🗣️",
      "Visão clara por categoria e período 💡",
      "Pergunte quanto gastei este mês? em segundos 🔍",
      "Relatório quinzenal para ajustar o rumo 📈",
    ],
    image: "/Gestao_financeira.png",
    video: "",
    transitionAfter: "Com as finanças sob controle, é hora de avançar nas suas metas.",
  },
  {
    id: "metas",
    title: "Parceiro Metas",
    icon: FlagIcon,
    punchline: "Transforme objetivos em progresso real com lembretes na hora certa.",
    bullets: [
      "Metas claras e acompanhadas no dia a dia 🧭",
      "Feedback conforme seu ritmo sem pressão ⏱️",
      "Celebração quando você conclui motivação de verdade 🎯",
    ],
    image: "/Gestao_de_metas.png",
    video: "",
    transitionAfter: "Quer ficar por dentro do que importa sem perder tempo? Conheça o Parceiro Notícias.",
  },
  {
    id: "noticias",
    title: "Parceiro Notícias",
    icon: NewspaperIcon,
    punchline: "Você escolhe os temas e a frequência. O Parceiro IA entrega só o que importa.",
    bullets: [
      "Personalizado por temas do seu interesse (economia, esportes, tecnologia e +) 📰",
      "No seu ritmo: diário, semanal ou sob demanda 🎯",
      "Resumos rápidos e sem enrolação 💬",
"Pare de perder tempo com excesso de informação ⌛",
    ],
    image: "/Noticias.png",
    video: "",
    transitionAfter: "Depois de se informar com as notícias mais importantes, você também pode gerenciar listas inteligentes.",
  },
  {
    id: "listas",
    title: "Parceiro Listas",
    icon: CheckCircleIcon,
    punchline: "Crie listas inteligentes para tudo: livros, filmes ou até compras do mercado.",
    bullets: [
      "Crie listas de livros e marque o que já leu 📚",
      "Controle filmes e séries assistidos 🎬",
      "Monte listas de compras práticas e risque itens com um toque 🛒",
      "Adicione, remova e conclua itens por voz ou texto ✍️🎙️",
    ],
    image: "/Listas.png",
    video: "",
    transitionAfter: "", // último bloco
  },
];

export default function Features() {
  const [lightbox, setLightbox] = useState({ open: false, src: "", poster: "" });

  const gotoPlans = () => {
    const el = document.getElementById("planos");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openLightbox = (src, poster) => {
    setLightbox({ open: true, src, poster });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, src: "", poster: "" });
  };

  return (
    <section id="funcionalidades" className="py-20 px-4 bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Funcionalidades do Parceiro IA
          </h2>
          <p className="text-escuro/70 mt-3">
            Veja como cada módulo funciona na prática com benefícios claros e demonstrações curtas.
          </p>
        </header>

        <div className="mt-10 space-y-12">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            const isEven = idx % 2 === 0;
            const accent = accents[m.id] ?? { text: "text-escuro", chipBg: "bg-gelo", ring: "ring-black/5", icon: "text-menta" };

            return (
              <div key={m.id}>
                <article
                  className={[
                    "rounded-3xl ring-1 bg-white shadow-sm hover:shadow-md transition grid md:grid-cols-2 gap-6 p-6",
                    "ring-black/5",
                  ].join(" ")}
                >
                  {/* Texto */}
                  <div className={[ "flex flex-col justify-center", isEven ? "order-1" : "md:order-2" ].join(" ")}>

                    {/* Badge de brinde (apenas no módulo Listas) */}
                    {m.id === "listas" && (
                      <div className="flex justify-start mb-7 -mt-2">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                                         bg-violet-100 text-violet-700 text-base font-semibold
                                         ring-1 ring-violet-200 shadow-sm">
                          🎁 Brinde incluso em todos os planos
                        </span>
                      </div>
                    )}

                    {/* Cabeçalho com ícone e título */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`inline-flex items-center justify-center rounded-xl p-2 ${accent.chipBg} ring-1 ${accent.ring}`}>
                        <Icon className={`w-6 h-6 ${accent.icon}`} />
                      </span>
                      <h3 className="text-xl font-semibold text-escuro">{m.title}</h3>
                    </div>

                    <p className={`mt-1 ${accent.text} font-medium`}>{m.punchline}</p>
                    <ul className="mt-4 space-y-2">
                      {m.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-escuro/85">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-menta/10 text-menta">
                            ✓
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-3 flex-wrap">
                      <button
                        type="button"
                        onClick={() => openLightbox(m.video || m.image, m.image)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg ring-1 ring-black/5 bg-white hover:bg-gelo transition text-escuro"
                        aria-label={`Ver em ação: ${m.title}`}
                      >
                        <PlayCircleIcon className="w-5 h-5" />
                        Ver em ação
                      </button>
                      <ModernCTA onClick={gotoPlans}>Ver planos</ModernCTA>
                    </div>
                  </div>

                  {/* Mídia */}
                  <div className={[ "rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white group", isEven ? "order-2" : "md:order-1" ].join(" ")}>
                    {m.video ? (
                      <button
                        type="button"
                        onClick={() => openLightbox(m.video, m.image)}
                        className="relative w-full h-full"
                        aria-label={`Abrir vídeo do módulo ${m.title}`}
                      >
                        <video
                          src={m.video}
                          playsInline
                          muted
                          loop
                          className="w-full h-full max-h-[420px] object-cover opacity-90 group-hover:opacity-100"
                          poster={m.image}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <PlayCircleIcon className="w-16 h-16 text-white drop-shadow-lg" />
                        </div>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => openLightbox(m.video || m.image, m.image)}
                        className="relative w-full"
                        aria-label={`Abrir prévia do módulo ${m.title}`}
                      >
                        <img
                          src={m.image}
                          alt={m.title}
                          className="w-full h-full max-h-[420px] object-contain bg-white transition-transform duration-300 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                        <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-black/50 text-white">
                          <PlayCircleIcon className="w-4 h-4" />
                          Ver em ação
                        </div>
                      </button>
                    )}
                  </div>
                </article>
                {m.transitionAfter && (
                  <p className="text-center text-escuro/60 mt-6">
                    {m.transitionAfter}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {lightbox.open && (
        <Lightbox onClose={closeLightbox}>
          {lightbox.src && lightbox.src.endsWith(".mp4") ? (
            <video
              src={lightbox.src}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[70vh] object-contain bg-black"
              poster={lightbox.poster}
            />
          ) : (
            <img
              src={lightbox.poster || lightbox.src}
              alt="Prévia"
              className="w-full max-h-[70vh] object-contain bg-black"
              loading="lazy"
            />
          )}
        </Lightbox>
      )}
    </section>
  );
}

function Lightbox({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl">
        <button
          aria-label="Fechar"
          onClick={onClose}
          className="absolute -top-10 right-0 md:-top-12 md:-right-12 text-white/90 hover:text-white"
        >
          <XMarkIcon className="w-8 h-8" />
        </button>
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black">
          {children}
        </div>
      </div>
    </div>
  );
}
