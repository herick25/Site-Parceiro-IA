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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Plans() {
  const PRICES = {
    premium: { monthly: "R$ 29,90/mês", annual: "R$ 24,90/mês" },
    basic:   { monthly: "R$ 19,90/mês", annual: "R$ 14,90/mês" },
  };

  const plans = [
    {
      key: "premium",
      title: "Parceiro Premium (Completo)",
      price: PRICES.premium.annual,
      monthly: PRICES.premium.monthly,
      highlight: true,
      icon: CheckCircleIcon,
      bulletsTitle: "Benefícios que você sente no dia a dia",
      features: [
        "Tudo em um só lugar: finanças, agenda, metas e notícias.",
        "Nunca mais perca tempo pulando de app em app.",
        "Seu parceiro que organiza a vida inteira no WhatsApp.",
      ],
      cta: "Quero Meu Parceiro Completo",
    },
    {
      key: "financeiro",
      title: "Parceiro Finanças",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      icon: CurrencyDollarIcon,
      bulletsTitle: "Para quem quer dominar o dinheiro",
      features: [
        "Controle seus gastos sem esforço.",
        "Descubra para onde seu dinheiro vai.",
        "Relatório quinzenal com insights claros.",
      ],
      cta: "Quero controlar meu dinheiro",
    },
    {
      key: "rotina",
      title: "Parceiro Rotina",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      icon: CalendarIcon,
      bulletsTitle: "Para uma rotina sem esquecimentos",
      features: [
        "Nunca mais esqueça um compromisso.",
        "Alertas no momento certo, sem stress.",
        "Relatórios diários/semanais sob medida.",
      ],
      cta: "Quero organizar meus compromissos",
    },
    {
      key: "metas",
      title: "Parceiro Metas",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      icon: FlagIcon,
      bulletsTitle: "Disciplina com leveza",
      features: [
        "Defina objetivos em linguagem natural.",
        "Acompanhe o progresso automaticamente.",
        "Parabéns e reforço quando você evolui.",
      ],
      cta: "Quero bater minhas metas",
    },
    {
      key: "listas",
      title: "Parceiro Listas",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      icon: NewspaperIcon,
      bulletsTitle: "Tudo organizado, sem bagunça",
      features: [
        "Listas de compras, estudos, filmes e mais.",
        "Marque, conclua, delete — simples e rápido.",
        "Crie novas listas quando precisar.",
      ],
      cta: "Quero minhas listas organizadas",
    },
  ];

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,           // desktop
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: false,     // evita “salto” de altura entre slides
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: true, centerMode: false } }, // tablet
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: false, // manter estável no mobile também
        },
      },
    ],
  };

  const Feature = ({ children }) => (
    <li className="flex items-start gap-2 text-sm text-gray-700">
      <CheckCircleIcon className="w-5 h-5 text-menta flex-shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );

  const PlanCard = ({ plan }) => (
    <div className="px-3 w-full max-w-[420px] md:max-w-none mx-auto h-full">
      <article
        className={[
          "relative rounded-2xl bg-white",
          plan.highlight ? "border-2 border-menta/50 shadow-xl" : "border border-gray-200 shadow-md hover:shadow-lg",
          "grid grid-rows-[auto_auto_1fr_auto_auto] gap-4",
          "w-full h-full min-h-[560px] md:min-h-[520px]",
          "p-8 pt-12",
        ].join(" ")}
      >
        {plan.highlight && (
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-menta text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
            Mais vantajoso
          </span>
        )}

        <h3 className="text-lg md:text-xl font-poppins font-semibold text-escuro flex items-center gap-2 justify-center text-center">
          {plan.icon && <plan.icon className="w-6 h-6 text-escuro/70" />}
          {plan.title}
        </h3>

        <div className="rounded-2xl border border-menta/40 bg-gelo p-6 text-center min-h-[96px] flex flex-col items-center justify-center">
          <div className="text-xs md:text-sm text-gray-600 mb-1">A partir de</div>
          <div className="text-2xl md:text-4xl font-extrabold font-montserrat text-escuro whitespace-nowrap leading-tight tracking-tight">
            {plan.price}
          </div>
          <p className="text-[11px] md:text-xs text-gray-500 mt-2">
            Mensal disponível por <span className="font-semibold text-escuro">{plan.monthly}</span>
          </p>
        </div>

        <div className="px-1">
          <div className="text-xs md:text-sm font-semibold text-escuro/80 mb-2 text-center">{plan.bulletsTitle}</div>
          <ul className="space-y-2">
            {plan.features.map((f, i) => (
              <Feature key={i}>{f}</Feature>
            ))}
          </ul>
        </div>

        <div className="text-center text-xs md:text-sm text-gray-500">
          7 dias de garantia • Sem fidelidade • Cancelamento simples
        </div>

        <div className="flex justify-center">
          <ModernCTA as="a" href="#contato">{plan.cta}</ModernCTA>
        </div>
      </article>
    </div>
  );

  return (
    <section id="planos" className="py-20 px-4 bg-white" data-aos="fade-up" aria-label="Planos de assinatura">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-escuro">Planos para cada necessidade</h2>
          <p className="mt-2 text-escuro/70">Escolha o que faz mais sentido para você. No desktop mantemos 3 por vez; no celular, 1 por vez.</p>
        </div>

        <Slider {...sliderSettings}>
          {plans.map((plan) => (
            <PlanCard key={plan.key} plan={plan} />
          ))}
        </Slider>

        <div className="mt-12 text-sm text-gray-500 text-center font-inter">
          7 dias de garantia. Sem fidelidade.
        </div>
      </div>
    </section>
  );
}
