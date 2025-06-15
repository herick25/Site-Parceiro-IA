import React from "react";
import { Link } from "react-router-dom";

export default function Privacidade() {
  return (
    <div className="bg-gelo text-escuro min-h-screen font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold font-montserrat mb-6">Política de Privacidade</h1>

        <p className="mb-4">
          Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações dos usuários do Parceiro IA.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Informações Coletadas</h2>
        <p className="mb-4">
          Coletamos apenas as informações necessárias para executar os serviços oferecidos — como lembretes, registros de gastos, metas e listas. Não vendemos nem compartilhamos seus dados com terceiros.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso das Informações</h2>
        <p className="mb-4">
          As informações são utilizadas exclusivamente para personalizar o atendimento, responder comandos, gerar relatórios e melhorar a experiência do usuário.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Armazenamento e Segurança</h2>
        <p className="mb-4">
          Os dados são armazenados com segurança em servidores protegidos. A equipe Parceiro IA adota boas práticas para evitar vazamentos e acessos não autorizados.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Direitos do Usuário</h2>
        <p className="mb-4">
          O usuário pode solicitar a exclusão dos dados a qualquer momento. Basta entrar em contato pelo nosso canal oficial de atendimento.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Alterações</h2>
        <p className="mb-4">
          Esta política pode ser modificada periodicamente. A versão mais recente estará sempre disponível no site.
        </p>

        <div className="text-sm text-gray-500 mt-10">
          Última atualização: 14 de junho de 2025
        </div>

        <div className="mt-6">
          <Link to="/" className="text-blue-600 underline hover:text-blue-800">
            Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  );
}
