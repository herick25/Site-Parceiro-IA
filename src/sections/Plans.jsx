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

// Importa os estilos do slick
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
      features: [
        "Tudo em um só lugar: finanças, agenda, metas e notícias.",
        "Nunca mais perca tempo pulando de app em app.",
        "Seu parceiro que organiza a vida inteira no WhatsApp.",
      ],
      cta: "Quero meu Parceiro completo",
      highlight: true,
    },
    {
      key: "financas",
      title: "Parceiro Finanças",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      features: [
        "Controle seus gastos sem esforço.",
        "Descubra para onde seu dinheiro vai.",
        "Relatórios claros para decidir melhor.",
      ],
      cta: "Quero controlar meu dinheiro",
      icon: CurrencyDollarIcon,
    },
    {
      key: "rotina",
      title: "Parceiro Rotina",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      features: [
        "Nunca mais esqueça um compromisso.",
        "Receba alertas no momento certo.",
        "Seu dia organizado do começo ao fim.",
      ],
      cta: "Quero organizar meu dia",
      icon: CalendarIcon,
    },
    {
      key: "noticias",
      title: "Parceiro Notícias",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      features: [
        "Receba só as notícias de seu interesse.",
        "Pare de perder tempo com excesso de informação.",
        "Resumos rápidos.",
      ],
      cta: "Quero só o que importa",
      icon: NewspaperIcon,
    },
    {
      key: "metas",
      title: "Parceiro Metas",
      price: PRICES.basic.annual,
      monthly: PRICES.basic.monthly,
      features: [
        "Tire suas metas do papel.",
        "Acompanhe o progresso sem esforço.",
        "Pequenas vitórias que mantêm você no ritmo.",
      ],
      cta: "Quero tirar metas do papel",
      icon: FlagIcon,
    },
  ];

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: false,
    mobileFirst: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: true, centerMode: false } },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          variableWidth: false,
          rows: 1,
          slidesPerRow: 1,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
          draggable: true,
          touchThreshold: 6,
          cssEase: "ease-out",
          speed: 350,
          adaptiveHeight: false,
          initialSlide: 0,
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

  return (
    <section id="planos" className="py-20 bg-white px-4 scroll-mt-24" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-center text-3xl sm:text-5xl font-extrabold font-poppins text-escuro">
            Escolha o Parceiro{" "}
            <span className="bg-gradient-to-r from-menta to-emerald-600 bg-clip-text text-transparent">
              ideal para você!
            </span>
          </h2>
        </div>

        {/* Carrossel */}
        <Slider {...sliderSettings} className="plans-slider" key={plans.length}>
          {plans.map((plan) => (
            <div key={plan.key} className="px-0 sm:px-3 w-full max-w-full md:max-w-none mx-auto">
              <div
                className={`relative overflow-visible rounded-2xl p-8 pt-12 bg-white
                  ${plan.highlight ? "border-2 border-menta shadow-xl" : "border border-gray-200 shadow-md hover:shadow-lg"}
                  grid grid-rows-[auto_auto_1fr_auto_auto] gap-4
                  w-full
                  h-full min-h-[560px] md:min-h-0
                  md:h-[520px]`}
              >
                {plan.highlight && (
                  <span className="absolute left-1/2 -translate-x-1/2 top-3 bg-menta text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                    Mais vantajoso
                  </span>
                )}

                <h3 className="text-xl font-poppins font-semibold text-escuro flex items-center gap-2 justify-center text-center">
                  {plan.icon && <plan.icon className="w-6 h-6 text-escuro/70" />}
                  {plan.title}
                </h3>

                <div className="rounded-2xl border border-menta/30 bg-gelo p-6 text-center min-h-[100px] flex flex-col items-center justify-center">
                  <div className="text-sm text-gray-600 mb-1">A partir de</div>
                  <div className="text-3xl md:text-4xl font-extrabold font-poppins text-escuro whitespace-nowrap leading-tight tracking-tight">
                    {plan.price}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Mensal disponível por{" "}
                    <span className="font-semibold text-escuro">{plan.monthly}</span>
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-menta bg-menta/10 ring-1 ring-menta/20 px-2.5 py-1 rounded-full">
                    Receba de brinde o Parceiro Listas 🎁
                  </span>
                </div>

                <ul className="space-y-2 text-left px-1">
                  {plan.features.map((f, i) => (
                    <Feature key={i}>{f}</Feature>
                  ))}
                </ul>

                <div className="flex justify-center items-end">
                  <ModernCTA>{plan.cta}</ModernCTA>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Mensal disponível por{" "}
                  <span className="font-semibold text-escuro">{plan.monthly}</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-12 text-sm text-gray-500 text-center font-inter">
          7 dias de garantia. Sem fidelidade.
        </div>
      </div>
    </section>
  );
}
