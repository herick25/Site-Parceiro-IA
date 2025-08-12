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
          Tenha um parceiro trabalhando para você dia e noite!
        </h1>
        <p className="text-lg text-menta">
          Deixe a inteligência artificial organizar sua rotina e facilitar sua vida!
        </p>
        <div className="mt-6">
          <ModernCTA onClick={scrollToPlans}>Contrate Já!</ModernCTA>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-escuro mb-2 bg-gradient-to-r from-menta to-emerald-600 text-white py-2 px-4 rounded-lg shadow-md inline-block">
          O que é o Parceiro IA?
        </h2>
        <p className="text-gray-800 mb-4">
          Imagine ter um assistente pessoal digital que organiza suas tarefas, controla seus gastos,
          acompanha suas metas e gerencia suas listas, tudo diretamente no seu WhatsApp!
        </p>
        <p className="text-gray-800">
          Se você busca praticidade, controle e mais organização no seu dia, o Parceiro IA é a solução
          inteligente que você estava procurando.
        </p>
      </section>
    </div>
  );
}
