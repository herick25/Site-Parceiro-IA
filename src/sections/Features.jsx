// src/sections/Features.jsx
import React from "react";
import ModernCTA from "../components/ModernCTA";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

const modules = [
  {
    id: "lembretes",
    title: "Lembretes e Compromissos",
    icon: CalendarIcon,
    copy:
      "Sua agenda em ordem, sem preocupações. Crie, consulte e receba lembretes direto no WhatsApp.",
    bullets: [
      "Relatório diário às 6h com tarefas do dia",
      "Lembrete 30 min antes de cada compromisso",
      "Relatório semanal no domingo às 18h",
      "Datas especiais (aniversários, datas comemorativas) salvas e lembradas",
    ],
    image: "/Lembretes_e_compromissos.png",
    // quando tiver o vídeo, basta preencher: video: "/videos/lembretes-demo.mp4",
    video: "",
  },
  {
    id: "financeiro",
    title: "Gestão Financeira",
    icon: CurrencyDollarIcon,
    copy:
      "Controle seus gastos e receitas sem planilhas: mande um áudio ou mensagem e pronto, a IA registra, classifica e organiza por você.",
    bullets: [
      "Lançamento por voz ou texto (ex.: “paguei 35 no mercado”)",
      "Descubra para onde está indo o seu dinheiro",
      "Pergunte quanto gastou no período que quiser",
      "Relatório quinzenal por categoria",
    ],
    image: "/Gestao_financeira.png",
    video: "",
  },
  {
    id: "metas",
    title: "Gestão de Metas",
    icon: FlagIcon,
    copy:
      "Defina metas, acompanhe progresso e receba aquela motivação na hora certa.",
    bullets: [
      "Registro e controle de metas",
      "Acompanhamento baseado no seu avanço",
      "Confirmação de meta concluída",
    ],
    image: "/Gestao_de_metas.png",
    video: "",
  },
  {
    id: "listas",
    title: "Listas",
    icon: CheckCircleIcon,
    copy:
      "Organize seus próximos livros, filmes e séries em listas rápidas de criar e fáceis de manter.",
    bullets: [
      "Crie listas de livros, filmes, séries, em segundos",
      "Adicionar, remover e concluir itens",
      "Organize sua lista de compras",
    ],
    image: "/Listas.png",
    video: "",
  },
];

export default function Features() {
  const gotoPlans = () => {
    const el = document.getElementById("planos");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="funcionalidades" className="py-16 px-4 bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Funcionalidades do Parceiro IA
        </h2>
        <p className="text-menta text-center mt-2">
          Veja como cada módulo funciona, de forma objetiva e prática.
        </p>

        <div className="mt-10 space-y-8">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <article
                key={m.id}
                className="rounded-2xl ring-1 ring-black/5 bg-white shadow-sm hover:shadow-md transition grid md:grid-cols-2 gap-6 p-6"
              >
                {/* Texto */}
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-escuro mb-2">
                    <Icon className="w-6 h-6 text-menta" />
                    <h3 className="text-xl font-semibold">{m.title}</h3>
                  </div>
                  <p className="text-escuro/75">{m.copy}</p>

                  <ul className="mt-4 space-y-2">
                    {m.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-escuro/80">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-menta/10 text-menta">
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <ModernCTA onClick={gotoPlans}>Ver planos</ModernCTA>
                  </div>
                </div>

                {/* Mídia: vídeo (quando existir) ou imagem */}
                <div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gelo">
                  {m.video ? (
                    <video
                      src={m.video}
                      controls
                      playsInline
                      className="w-full h-full object-cover"
                      poster={m.image}
                    />
                  ) : (
                    <img
                      src={m.image}
                      alt={m.title}
                      className="w-full h-full max-h-[420px] object-contain bg-white"
                      loading="lazy"
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Nota de vídeo — opcional, pode remover depois */}
        <p className="text-center text-xs text-escuro/50 mt-6">
          Em breve: vídeos curtos mostrando conversas reais no WhatsApp.
        </p>
      </div>
    </section>
  );
}
