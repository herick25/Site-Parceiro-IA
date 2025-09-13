// src/sections/FAQ.jsx
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    pergunta: "Preciso instalar algum aplicativo para usar o Parceiro IA?",
    resposta:
      "Não! O Parceiro IA funciona direto no seu WhatsApp. Basta assinar, salvar o número e começar a conversar.",
  },
  {
    pergunta: "O Parceiro IA entende mensagens de voz?",
    resposta:
      "Sim! Você pode mandar comandos por voz ou por texto. O Parceiro IA entende ambos e registra as informações automaticamente.",
  },
  {
    pergunta: "Posso cancelar a assinatura quando quiser?",
    resposta:
      "Claro! Você pode cancelar a qualquer momento, sem fidelidade. Se não gostar, devolvemos seu dinheiro em até 7 dias.",
  },
  {
    pergunta: "Meus dados ficam seguros?",
    resposta:
      "Sim. Suas informações são armazenadas de forma protegida e nunca são compartilhadas com terceiros.",
  },
  {
    pergunta: "Qual a diferença do plano Premium?",
    resposta:
      "No Premium você tem acesso a todos os módulos juntos: finanças, rotina, metas, listas e notícias. Nos planos individuais você escolhe apenas um.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-gelo scroll-mt-24" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-escuro">
          Dúvidas Frequentes
        </h2>
        <p className="text-center text-escuro/70 mt-2 mb-10">
          Confira as respostas para as principais perguntas antes de assinar.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-escuro">{faq.pergunta}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-escuro/70 transform transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-escuro/80 text-sm leading-relaxed">
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
