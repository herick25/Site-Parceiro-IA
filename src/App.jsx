import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gelo text-escuro min-h-screen font-sans scroll-smooth">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />

              {/* Início */}
              <div id="inicio" className="pt-24 scroll-mt-24 bg-white" data-aos="fade-up">
                <header className="shadow-md py-10 px-4 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-2">Parceiro IA</h1>
                  <p className="text-lg text-gray-700">
                    Seu assistente pessoal com inteligência artificial
                  </p>
                  <div className="mt-6">
                    <a
                      href="#planos"
                      className="inline-block bg-menta text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-transform hover:scale-105"
                    >
                      Comece agora mesmo
                    </a>
                  </div>
                </header>

                <section className="max-w-4xl mx-auto px-4 py-12">
                  <h2 className="text-2xl font-semibold font-montserrat mb-4">O que é o Parceiro IA?</h2>
                  <p className="text-gray-800 mb-4">
                    O Parceiro IA é um assistente pessoal inteligente que te ajuda no dia a dia com lembretes,
                    controle financeiro, acompanhamento de metas e organização de listas. Tudo isso por voz,
                    direto no seu WhatsApp.
                  </p>
                  <p className="text-gray-800 mb-6">
                    Ideal para quem busca praticidade e quer manter a vida em ordem com a ajuda da tecnologia.
                  </p>
                  <div className="text-center">
                    <a
                      href="#contato"
                      className="inline-block bg-menta text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-transform hover:scale-105"
                    >
                      Quero experimentar
                    </a>
                  </div>
                </section>
              </div>

              {/* Funcionalidades */}
              <section id="funcionalidades" className="py-16 px-4 bg-gelo scroll-mt-24" data-aos="fade-up">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-2xl font-semibold font-montserrat mb-10 text-center">
                    Funcionalidades por Módulo
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
                      <h3 className="text-xl font-bold font-montserrat flex items-center gap-2 mb-3">
                        <CalendarIcon className="w-6 h-6 text-menta" />
                        Módulo 1 – Lembretes e Compromissos
                      </h3>
                      <ul className="list-disc pl-5 text-gray-800 space-y-1">
                        <li>Relatório diário com tarefas e frase motivacional</li>
                        <li>Lembrete antes de compromissos</li>
                        <li>Relatório semanal aos domingos</li>
                        <li>Datas especiais (aniversários)</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
                      <h3 className="text-xl font-bold font-montserrat flex items-center gap-2 mb-3">
                        <CurrencyDollarIcon className="w-6 h-6 text-menta" />
                        Módulo 2 – Gestão Financeira
                      </h3>
                      <ul className="list-disc pl-5 text-gray-800 space-y-1">
                        <li>Registro de gastos por linguagem natural</li>
                        <li>Classificação automática por categoria</li>
                        <li>Relatórios quinzenais e sob demanda</li>
                        <li>Consultas por período</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
                      <h3 className="text-xl font-bold font-montserrat flex items-center gap-2 mb-3">
                        <FlagIcon className="w-6 h-6 text-menta" />
                        Módulo 3 – Gestão de Metas
                      </h3>
                      <ul className="list-disc pl-5 text-gray-800 space-y-1">
                        <li>Registro de metas por comando de voz</li>
                        <li>Acompanhamento do progresso</li>
                        <li>Parabenização automática ao atingir metas</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
                      <h3 className="text-xl font-bold font-montserrat flex items-center gap-2 mb-3">
                        <CheckCircleIcon className="w-6 h-6 text-menta" />
                        Módulo 4 – Listas
                      </h3>
                      <ul className="list-disc pl-5 text-gray-800 space-y-1">
                        <li>Listas temáticas: livros, filmes, séries, etc.</li>
                        <li>Lista de compras</li>
                        <li>Adicionar, remover, marcar como concluído</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center mt-10">
                    <a
                      href="#planos"
                      className="inline-block bg-menta text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-transform hover:scale-105"
                    >
                      Veja os planos disponíveis
                    </a>
                  </div>
                </div>
              </section>

              {/* Planos */}
              <section id="planos" className="py-16 bg-white px-4 scroll-mt-24" data-aos="fade-up">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl font-semibold font-montserrat mb-6">Planos e Preços</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-6 bg-gelo shadow-sm hover:shadow-md transition">
                      <h3 className="text-xl font-bold font-montserrat mb-2">Plano Mensal</h3>
                      <p className="text-3xl font-semibold mb-4">R$ 29,99</p>
                      <p className="text-gray-600">Pagamento recorrente mês a mês.</p>
                    </div>
                    <div className="relative border-2 border-menta rounded-lg p-6 bg-gelo shadow-md hover:scale-[1.02] transition-transform">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-menta text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                        Garanta já!
                      </span>
                      <h3 className="text-xl font-bold font-montserrat mb-2">Plano Anual</h3>
                      <p className="text-3xl font-semibold mb-4">R$ 24,99/mês</p>
                      <p className="text-gray-600">Pagamento único com desconto anual.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contato */}
              <section id="contato" className="py-16 px-4 text-center scroll-mt-24 bg-gelo" data-aos="fade-up">
                <h2 className="text-2xl font-semibold font-montserrat mb-4">Fale conosco</h2>
                <p className="text-gray-800 mb-6">
                  Quer tirar dúvidas ou contratar agora mesmo?
                </p>
                <a
                  href="https://wa.me/5581999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-menta text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-transform hover:scale-105 font-semibold text-lg"
                >
                  <FaWhatsapp className="w-6 h-6 animate-pulse" />
                  Falar no WhatsApp
                </a>
              </section>

              {/* Rodapé */}
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
            </>
          }
        />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
    </div>
  );
}
