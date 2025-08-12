import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold text-escuro mb-2">Parceiro IA</h3>
          <p>Seu assistente pessoal inteligente por WhatsApp.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-escuro mb-2">Navegação</h3>
          <ul className="space-y-1">
            <li><a href="#inicio" className="hover:underline">Início</a></li>
            <li><a href="#funcionalidades" className="hover:underline">Funcionalidades</a></li>
            <li><a href="#planos" className="hover:underline">Planos</a></li>
            <li><a href="#contato" className="hover:underline">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-escuro mb-2">Legal</h3>
          <ul className="space-y-1">
            <li><Link to="/termos" className="hover:underline">Termos de Uso</Link></li>
            <li><Link to="/privacidade" className="hover:underline">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-gelo py-4 text-center text-xs text-gray-500">
        <div className="flex justify-center gap-4 mb-2 text-lg">
          <a href="mailto:contato@parceiroia.com" title="Email">
            <FaEnvelope className="hover:text-menta transition" />
          </a>
          <a href="https://www.instagram.com/parceiroia" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram className="hover:text-menta transition" />
          </a>
        </div>
        &copy; {new Date().getFullYear()} Parceiro IA. Todos os direitos reservados.
      </div>
    </footer>
  );
}
