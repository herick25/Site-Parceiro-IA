import React from "react";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <header className="bg-white shadow-md py-10 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Parceiro IA</h1>
        <p className="text-lg text-gray-600">Seu assistente pessoal com inteligência artificial</p>
      </header>

      {/* Apresentação */}
      <section className="max-w-4xl mx-auto px-4 py-12 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-4">O que é o Parceiro IA?</h2>
        <p className="text-gray-700 mb-4">
          O Parceiro IA é um assistente pessoal inteligente que te ajuda no dia a dia com lembretes,
          controle financeiro, acompanhamento de metas e organização de listas. Tudo isso por voz,
          direto no seu WhatsApp.
        </p>
        <p className="text-gray-700">
          Ideal para quem busca praticidade e quer manter a vida em ordem com a ajuda da tecnologia.
        </p>
      </section>

      {/* Funcionalidades */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Funcionalidades por Módulo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">✅ Módulo 1 – Lembretes e Compromissos</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Relatório diário com tarefas e frase motivacional</li>
                <li>Lembrete antes de compromissos</li>
                <li>Relatório semanal aos domingos</li>
                <li>Datas especiais (aniversários)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">✅ Módulo 2 – Gestão Financeira</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Registro de gastos por linguagem natural</li>
                <li>Classificação automática por categoria</li>
                <li>Relatórios quinzenais e sob demanda</li>
                <li>Consultas por período</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">✅ Módulo 3 – Gestão de Metas</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Registro de metas por comando de voz</li>
                <li>Acompanhamento do progresso</li>
                <li>Parabenização automática ao atingir metas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">✅ Módulo 4 – Listas</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Listas temáticas: livros, filmes, séries, etc.</li>
                <li>Lista de compras</li>
                <li>Adicionar, remover, marcar como concluído</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-12 bg-gray-100 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Planos e Preços</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-2">Plano Mensal</h3>
              <p className="text-3xl font-semibold mb-4">R$ 29,99</p>
              <p className="text-gray-600">Pagamento recorrente mês a mês.</p>
            </div>
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-2">Plano Anual</h3>
              <p className="text-3xl font-semibold mb-4">R$ 24,99/mês</p>
              <p className="text-gray-600">Pagamento único com desconto anual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Fale conosco</h2>
        <p className="text-gray-700 mb-6">
          Quer tirar dúvidas ou contratar agora mesmo?
        </p>
        <a
          href="" // Insira aqui o link do WhatsApp quando tiver o número
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Falar no WhatsApp
        </a>
      </section>

      <footer className="bg-gray-200 text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Parceiro IA. Todos os direitos reservados.
      </footer>
    </div>
  );
}
