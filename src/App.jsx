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
import { FaWhatsapp, FaInstagram, FaEnvelope, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollToPlans = () => {
    const section = document.getElementById("planos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const ModernCTA = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-menta to-emerald-600 rounded-xl shadow-md hover:scale-105 hover:brightness-110 transition-transform"
    >
      {children}
    </button>
  );

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
                  <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-2">Tenha um parceiro trabalhando para você dia e noite!</h1>
                  <p className="text-lg text-menta">
                    Deixe a inteligência artificial organizar sua rotina e facilitar sua vida!
                  </p>
                  <div className="mt-6">
                    {/* Botão direcionando para Planos */}
                    <ModernCTA onClick={scrollToPlans}>
                      Contrate Já!
                    </ModernCTA>
                  </div>
                </header>

                <section className="max-w-4xl mx-auto px-4 py-12">
                  <h2 className="text-3xl font-semibold text-escuro mb-2 bg-gradient-to-r from-menta to-emerald-600 text-white py-2 px-4 rounded-lg shadow-md inline-block">O que é o Parceiro IA?</h2>
                  <p className="text-gray-800 mb-4">
                    Imagine ter um assistente pessoal digital que organiza suas tarefas, controla seus gastos, acompanha suas metas e gerencia suas listas, tudo diretamente no seu WhatsApp!
                  </p>
                  <p className="text-gray-800">
                    Se você busca praticidade, controle e mais organização no seu dia, o Parceiro IA é a solução inteligente que você estava procurando.
                  </p>
                </section>
              </div>

              {/* Seção sobre Funcionalidade do App com Fotos */}
              <section id="funcionalidade" className="py-16 px-4 bg-white text-center" data-aos="fade-up">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-2xl font-semibold mb-6">Funcionalidades do Parceiro IA</h2>
                  <p className="text-menta mb-6">Descubra as funcionalidades poderosas que vão te ajudar a organizar e melhorar a sua rotina.</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Funcionalidade 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-semibold text-escuro mb-4">Lembretes e Compromissos</h3>
                      <p className="text-gray-800 mb-4">Organize seus dias com clareza! Veja sua agenda, crie compromissos e receba lembretes no momento certo.</p>
                      <img src="/Lembretes_e_compromissos.png" alt="Simulação de Conversa de Lembretes e Compromissos" className="w-full max-h-[650px] object-contain rounded-lg shadow-md" />
                    </div>

                    {/* Funcionalidade 2 */}
                   <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <h3 className="text-xl font-semibold text-escuro mb-4">Gestão Financeira</h3>
        <p className="text-gray-800 mb-4">Controle seus gastos de forma pratica! O Parceiro IA acompanha suas despesas e mostra onde seu dinheiro está indo.</p>
        {/* Aqui está a imagem da gestão financeira */}
        <img src="/Gestao_financeira.png" alt="Gestão Financeira" className="w-full max-h-[650px] object-contain rounded-lg shadow-md" />
      </div>

                    {/* Funcionalidade 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-semibold text-escuro mb-4">Gestão de Metas</h3>
                      <p className="text-gray-800 mb-4">O Parceiro IA registra o progresso de suas metas, envia lembretes inteligentes e te ajuda a manter o foco, até você antigir seus objetivos.</p>
                      <img src="/Gestao_de_metas.png" alt="Gestão de Metas" className="w-full max-h-[650px] object-contain rounded-lg shadow-md" />
                    </div>

                    {/* Funcionalidade 4 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-semibold text-escuro mb-4">Listas</h3>
                      <p className="text-gray-800 mb-4">Com o Parceiro IA, você organiza listas de livros, filmes, compras, tarefas e o que mais precisar, de forma simples e sem complicações.</p>
                      <img src="\Listas.png" alt="Listas" className="w-full max-h-[650px] object-contain rounded-lg shadow-md" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Seção de Avaliações de Clientes */}
              <section id="avaliacoes" className="py-16 px-4 bg-gradient-to-b from-menta to-[#4c8c6d] text-white" data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-2xl font-semibold mb-6 text-white">O que nossos clientes dizem:</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Depoimento 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-gray-800 mb-4">"O Parceiro IA tem sido um verdadeiro assistente! Ele me ajuda a organizar todos os meus compromissos e finanças de forma simples e eficiente."</p>
                      <div className="flex justify-center gap-1 text-menta">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p className="text-right font-semibold text-escuro mb-0">- João Silva</p>
                    </div>

                    {/* Depoimento 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-gray-800 mb-4">"A praticidade de usar o app no WhatsApp me surpreendeu. Agora, consigo controlar minha rotina financeira de forma descomplicada."</p>
                      <div className="flex justify-center gap-1 text-menta">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p className="text-right font-semibold text-escuro mb-0">- Maria Costa</p>
                    </div>

                    {/* Depoimento 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-gray-800 mb-4">"Adoro como o Parceiro IA me ajuda a alcançar minhas metas pessoais. A funcionalidade de voz é incrível! Eu posso verificar meus dados a qualquer hora."</p>
                      <div className="flex justify-center gap-1 text-menta">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p className="text-right font-semibold text-escuro mb-0">- Lucas Pereira</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Planos */}
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
                      <ModernCTA>
                        Assinar Mensal
                      </ModernCTA>
                    </div>
                    <div className="relative border-2 border-menta rounded-lg p-6 bg-gelo shadow-md hover:scale-[1.02] transition-transform">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-menta text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                        Garanta já!
                      </span>
                      <h3 className="text-xl font-bold font-montserrat mb-2">Plano Anual</h3>
                      <p className="text-3xl font-semibold mb-4">R$ 24,99/mês</p>
                      <p className="text-gray-600 mb-4">Pagamento único com desconto anual.</p>
                      <ModernCTA>
                        Assinar Anual
                      </ModernCTA>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contato */}
              <section id="contato" className="py-16 px-4 text-center scroll-mt-24 bg-gradient-to-b from-menta to-[#4c8c6d]" data-aos="fade-up">
                <h2 className="text-2xl font-semibold font-montserrat mb-4 text-white">Fale conosco</h2>
                <p className="text-white mb-6">
                  Quer tirar dúvidas ou contratar agora mesmo?
                </p>
                <ModernCTA>
                  <FaWhatsapp className="w-6 h-6 animate-pulse" />
                  Falar no WhatsApp
                </ModernCTA>
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
