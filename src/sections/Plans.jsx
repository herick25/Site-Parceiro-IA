import React from "react";
import ModernCTA from "../components/ModernCTA";

export default function Plans() {
  return (
    <section id="planos" className="py-16 bg-white px-4 scroll-mt-24" data-aos="fade-up">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold font-montserrat mb-6 text-escuro relative inline-block">
          <span className="absolute inset-x-0 bottom-0 border-b-4 border-menta"></span>
          Planos e Preços
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 bg-gelo shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold font-montserrat mb-2">Plano Mensal</h3>
            <p className="text-3xl font-semibold mb-4">R$ 29,99</p>
            <p className="text-gray-600 mb-4">Pagamento recorrente mês a mês.</p>
            <ModernCTA>Assinar Mensal</ModernCTA>
          </div>

          <div className="relative border-2 border-menta rounded-lg p-6 bg-gelo shadow-md hover:scale-[1.02] transition-transform">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-menta text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
              Garanta já!
            </span>
            <h3 className="text-xl font-bold font-montserrat mb-2">Plano Anual</h3>
            <p className="text-3xl font-semibold mb-4">R$ 24,99/mês</p>
            <p className="text-gray-600 mb-4">Pagamento único com desconto anual.</p>
            <ModernCTA>Assinar Anual</ModernCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
