import React from "react";
import ModernCTA from "../components/ModernCTA";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaRegClock, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-escuro">Fale com nossa equipe</h2>
          <p className="mt-2 text-escuro/70">Tire dúvidas ou comece agora. Resposta rápida.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Benefícios/selos (contraste suave) */}
          <div className="rounded-2xl bg-gelo p-8 ring-1 ring-black/5 shadow-sm">
            <ul className="space-y-3 text-escuro/80">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 text-menta" />
                <span>Atendimento 100% Humano pelo WhatsApp</span>
              </li>
              <li className="flex items-start gap-3">
                <FaShieldAlt className="mt-1 text-menta" />
                <span>Dados protegidos</span>
              </li>
              <li className="flex items-start gap-3">
                <FaRegClock className="mt-1 text-menta" />
                <span>Tempo médio de resposta: 5-10 min</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 text-menta" />
                <span>Cancelamento fácil a qualquer momento</span>
              </li>
            </ul>
          </div>

          {/* Card principal com CTA em destaque */}
          <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-md flex flex-col items-center justify-center text-center">
            <div className="text-sm text-escuro/60 mb-2">Canal principal</div>
            <ModernCTA as="a" href="https://wa.me">
              <FaWhatsapp className="w-6 h-6" />
              Falar no WhatsApp
            </ModernCTA>
            <div className="mt-6 text-xs text-escuro/50">Sem compromisso.</div>

            {/* Canais alternativos (botões outline para não competir com o CTA verde) */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:contato@parceiroia.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-menta text-menta hover:bg-menta hover:text-white transition"
                title="Email"
              >
                <FaEnvelope /> Email
              </a>
              <a
                href="https://www.instagram.com/parceiroia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-menta text-menta hover:bg-menta hover:text-white transition"
                title="Instagram"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
