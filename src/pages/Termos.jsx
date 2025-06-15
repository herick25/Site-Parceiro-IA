import React from "react";
import { Link } from "react-router-dom";

export default function Termos() {
  return (
    <div className="bg-gelo text-escuro min-h-screen font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold font-montserrat mb-6">Termos de Uso</h1>

        <p className="mb-4">
          Ao utilizar o Parceiro IA, você concorda com os termos descritos nesta página. O serviço é fornecido “como está” e pode ser atualizado a qualquer momento.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Uso do Serviço</h2>
        <p className="mb-4">
          O Parceiro IA é um assistente virtual que oferece funcionalidades como lembretes, controle financeiro, gerenciamento de metas e listas. O uso é pessoal e intransferível.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Dados Pessoais</h2>
        <p className="mb-4">
          Nós respeitamos a sua privacidade. Seus dados são utilizados exclusivamente para fornecer os serviços contratados, conforme descrito na nossa Política de Privacidade.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Cancelamento</h2>
        <p className="mb-4">
          O usuário pode cancelar sua assinatura a qualquer momento. Não há reembolso proporcional, mas o acesso continuará válido até o fim do ciclo contratado.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Alterações</h2>
        <p className="mb-4">
          Os termos podem ser atualizados a qualquer momento. Ao continuar utilizando o serviço, você concorda com as novas condições.
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
