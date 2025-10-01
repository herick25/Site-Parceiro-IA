import React from "react";
import ModernCTA from "../components/ModernCTA";

export default function Hero() {
  const scrollToPlans = () => {
    const section = document.getElementById("planos");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="inicio" className="pt-24 scroll-mt-24 bg-white" data-aos="fade-up">
      <header className="shadow-md py-10 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-2">
          Seu Parceiro pessoal no WhatsApp, trabalhando para você dia e noite!
        </h1>
        <p className="text-lg text-menta">
          Organize tarefas, finanças e metas sem complicação
        </p>
        <div className="mt-6">
          <ModernCTA onClick={scrollToPlans}>
            Quero meu parceiro no WhatsApp!
          </ModernCTA>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-escuro mb-6">
          O que é o Parceiro <span className="text-menta">IA?</span>
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Imagine ter um assistente pessoal digital que organiza suas tarefas,
          controla seus gastos, acompanha suas metas e gerencia suas listas,
          tudo diretamente no seu WhatsApp!
        </p>
        <p className="text-lg text-gray-700">
          Se você busca praticidade, controle e mais organização no seu dia,
          o Parceiro IA é a solução inteligente que você estava procurando.
        </p>
      </section>
    </div>
  );
}

