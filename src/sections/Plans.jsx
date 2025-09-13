// src/sections/Plans.jsx
import React from "react";
import ModernCTA from "../components/ModernCTA";
import Slider from "react-slick";
import {
  CurrencyDollarIcon,
  CalendarIcon,
  NewspaperIcon,
  FlagIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Plans() {
  const PRICES = {
    premium: { monthly: "R$ 29,90/mês", annual: "R$ 24,90/mês" },
    basic:   { monthly: "R$ 19,90/mês", annual: "R$ 14,90/mês" },
  };

  const plans = [
    {
      key: "premium",
      title: "Parceiro Premium (Completo)",
      badge: "Mais vantajoso",
      price: PRICES.premium.annual,
      monthly: PRICES.premium.monthly,
      bullets: [
        "Finanças, agenda, metas e notícias.",
        "Nunca mais perca tempo pulando de app em app.",
        "Sua vida inteira no WhatsApp.",
      ],
      cta: "Quero Meu Parceiro completo",
      icon: CheckCircleIcon,
    },
    {
      key: "financas",
      title: "Parceiro Finanças",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      bullets: [
        "Controle seus gastos sem esforço.",
        "Descubra para onde seu dinheiro vai.",
      ],
      cta: "Quero controlar meu dinheiro",
      icon: CurrencyDollarIcon,
    },
    {
      key: "rotina",
      title: "Parceiro Rotina",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      bullets: [
        "Nunca mais esqueça um compromisso.",
        "Alertas no momento certo.",
      ],
      cta: "Quero organizar minha rotina",
      icon: CalendarIcon,
    },
    {
      key: "noticias",
      title: "Parceiro Notícias",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      bullets: [
        "Resumo diário do que importa pra você.",
        "Economize tempo, fique bem informado.",
      ],
      cta: "Quero receber resumos",
      icon: NewspaperIcon,
    },
    {
      key: "metas",
      title: "Parceiro Metas",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      bullets: [
        "Defina metas em linguagem natural.",
        "Acompanhe o progresso sem esforço.",
      ],
      cta: "Quero bater minhas metas",
      icon: FlagIcon,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    swipeToSlide: true,
    adaptiveHeight: true,
    arrows: false,
    mobileFirst: true,      // base = mobile
    slidesToShow: 1,        // mobile = 1 slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,    // ≥768px (tablet)
        settings: { slidesToShow: 2, slidesToScroll: 1, arrows: true },
      },
      {
        breakpoint: 1024,   // ≥1024px (desktop)
        settings: { slidesToShow: 3, slidesToScroll: 1, arrows: true },
      },
    ],
  };

  return (
    <section id="planos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-escuro mb-8 text-center">
          Planos para qualquer momento
        </h2>

        <Slider className="plans-slider" {...settings}>
          {plans.map((p) => (
            <div key={p.key} className="px-2 md:px-3">
              <article className="h-full rounded-2xl border border-emerald-200 bg-white shadow-sm p-5 md:p-6 flex flex-col justify-between">
                <div>
                  {p.badge && (
                    <span className="inline-block mb-3 text-sm font-semibold text-white bg-emerald-700/90 px-3 py-1 rounded-full">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-escuro mb-3">{p.title}</h3>

                  <div className="rounded-xl border border-emerald-100 bg-[#f7f9f7] p-4 mb-4">
                    <p className="text-sm text-escuro/70">A partir de</p>
                    <p className="text-3xl font-extrabold text-escuro leading-tight">
                      {p.price}
                    </p>
                    <p className="text-sm text-escuro/70 mt-1">
                      também disponível por <span className="font-semibold">{p.monthly}</span>
                    </p>
                  </div>

                  <ul className="space-y-2 text-escuro/90 mb-6">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <p className="leading-snug">{b}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <ModernCTA
                  onClick={() =>
                    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {p.cta}
                </ModernCTA>
              </article>
            </div>
          ))}
        </Slider>

        <p className="text-center text-escuro/60 mt-6">
          7 dias de garantia. Sem fidelidade.
        </p>
      </div>
    </section>
  );
}
