import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo + Nome */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-parceiro.PNG"
            alt="Logo Parceiro IA"
            className="w-9 h-9 object-contain"
          />
          <span className="text-xl font-montserrat font-bold text-escuro">
            Parceiro IA
          </span>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#inicio" className="text-menta hover:text-escuro transition">Início</a>
          <a href="#funcionalidades" className="text-menta hover:text-escuro transition">Funcionalidades</a>
          <a href="#planos" className="text-menta hover:text-escuro transition">Planos</a>
          <a href="#contato" className="text-menta hover:text-escuro transition">Contato</a>
        </nav>

        {/* Botão hamburguer / fechar */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-escuro focus:outline-none"
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuAberto ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </button>
      </div>

      {/* Overlay escuro + Drawer menu */}
      <AnimatePresence>
        {menuAberto && (
          <>
            {/* Fundo escurecido */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={fecharMenu}
            />

            {/* Drawer lateral */}
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg p-6 flex flex-col justify-between"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div>
                {/* Botão fechar */}
                <button
                  onClick={fecharMenu}
                  className="self-end mb-4 text-gray-600 hover:text-red-500 transition"
                  aria-label="Fechar menu"
                >
                  ✕
                </button>

                {/* Navegação */}
                <nav className="flex flex-col space-y-4">
                  <a href="#inicio" onClick={fecharMenu} className="text-menta hover:text-escuro transition">Início</a>
                  <a href="#funcionalidades" onClick={fecharMenu} className="text-menta hover:text-escuro transition">Funcionalidades</a>
                  <a href="#planos" onClick={fecharMenu} className="text-menta hover:text-escuro transition">Planos</a>
                  <a href="#contato" onClick={fecharMenu} className="text-menta hover:text-escuro transition">Contato</a>
                </nav>
              </div>

              {/* Redes sociais + WhatsApp */}
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/parceiroia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-menta transition"
                >
                  <FaInstagram className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-center bg-menta text-white px-4 py-2 rounded-md font-medium hover:bg-escuro transition mt-2 mb-20"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Fale no WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
