// src/pages/Checkout.jsx
import React, { useState, useMemo } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

// Tabela dos planos (por enquanto fixa)
const PLANOS = {
  premium: { nome: "Parceiro IA Premium", valor: 29.9 },
  financas: { nome: "Parceiro IA Finanças", valor: 19.9 },
  rotina: { nome: "Parceiro IA Rotina", valor: 14.9 },
};

// Tabela dos extras
const EXTRAS = {
  ebook_disciplina: { nome: "E-book Disciplina em 30 dias", valor: 19.9 },
  ebook_financas: { nome: "E-book Organização Financeira", valor: 27.9 },
};

export default function Checkout() {
  // Por enquanto plano fixo (depois vamos puxar da URL ?plano=)
  const [planoKey] = useState("premium");

  // ---------------------------
  // ESTADOS DO FORMULÁRIO
  // ---------------------------
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("PIX");

  // Campos do cartão (UI apenas)
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardInstallments, setCardInstallments] = useState("1");

  // Extras
  const [extras, setExtras] = useState({
    ebook_disciplina: true,
    ebook_financas: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [debugResponse, setDebugResponse] = useState(null);

  const planoSelecionado = PLANOS[planoKey];

  // ---------------------------
  // CÁLCULO DOS VALORES
  // ---------------------------
  const resumoValores = useMemo(() => {
    const totalExtras = Object.entries(extras).reduce((acc, [key, ativo]) => {
      if (!ativo) return acc;
      const extraInfo = EXTRAS[key];
      return extraInfo ? acc + extraInfo.valor : acc;
    }, 0);

    const totalGeral = planoSelecionado.valor + totalExtras;

    return { totalExtras, totalGeral };
  }, [extras, planoSelecionado]);

  // ---------------------------
  // FORMATAR MOEDA
  // ---------------------------
  function formatarMoeda(v) {
    return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  // ---------------------------
  // ALTERNAR EXTRA
  // ---------------------------
  const handleToggleExtra = (key) => {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ---------------------------
  // VALIDAR CAMPOS
  // ---------------------------
  const validarCampos = () => {
    if (!email.trim()) return "Por favor, informe seu e-mail.";
    if (!confirmEmail.trim()) return "Por favor, confirme seu e-mail.";
    if (email.trim() !== confirmEmail.trim()) return "Os e-mails não conferem.";

    if (!nome.trim()) return "Informe seu nome completo.";
    if (!cpf.trim()) return "Informe seu CPF/CNPJ.";
    if (!whatsapp.trim()) return "Informe seu celular.";

    if (paymentMethod === "CREDIT_CARD") {
      return "Pagamento por cartão ainda não está habilitado. Utilize PIX.";
    }

    return "";
  };

  // ---------------------------
  // SUBMIT DO CHECKOUT
  // ---------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setDebugResponse(null);

    const erroVal = validarCampos();
    if (erroVal) {
      setErro(erroVal);
      return;
    }

    if (paymentMethod === "CREDIT_CARD") {
      setErro(
        "Pagamento com cartão estará disponível em breve. Hoje, utilize o PIX."
      );
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        plano: planoKey,
        nome,
        email,
        cpf: cpf.replace(/\D/g, ""),
        whatsapp: whatsapp.replace(/\D/g, ""),
        extras,
        forma_pagamento: "PIX",
      };

      const resp = await fetch(`${API_BASE_URL}/checkout/criar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data?.detail?.mensagem || "Erro ao gerar checkout.");
      }

      const data = await resp.json();
      setDebugResponse(data);

      if (data.unifiedPaymentInvoiceUrl) {
        window.location.href = data.unifiedPaymentInvoiceUrl;
      } else {
        throw new Error("Não foi possível obter o link de pagamento.");
      }
    } catch (err) {
      setErro(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // =========================================
  // LAYOUT DO CHECKOUT
  // =========================================

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 md:p-8">

        {/* HEADER COM LOGO */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo-parceiro.PNG"
              alt="Parceiro IA"
              className="h-12 w-auto"
            />

            <div>
              <p className="text-sm font-semibold text-[#1f2f2b]">
                Parceiro IA • Assinatura Mensal
              </p>
              <p className="text-xs text-gray-500">
                Pagamento 100% seguro, processado via Asaas.
              </p>
            </div>
          </div>

          <div className="text-right text-xs text-gray-500 hidden sm:block">
            <p>CNPJ: 00.000.000/0000-00</p>
            <p>Suporte: contato@parceiroia.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ---------------------------------------------------
               COLUNA 1 E 2 — FORMULÁRIO PRINCIPAL
          ---------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* --- DADOS DO CLIENTE --- */}
            <section>
              <h2 className="text-base font-semibold text-[#1f2f2b] mb-3">
                Dados do cliente
              </h2>

              <div className="space-y-3">
                {/* Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-gray-700">E-mail</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-700">Confirmar e-mail</label>
                    <input
                      type="email"
                      value={confirmEmail}
                      onChange={(e) => setConfirmEmail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                      placeholder="repita seu e-mail"
                    />
                  </div>
                </div>

                {/* Nome */}
                <div>
                  <label className="text-xs font-medium text-gray-700">Nome completo</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Seu nome"
                  />
                </div>

                {/* CPF + TELEFONE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-gray-700">CPF/CNPJ</label>
                    <input
                      type="text"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Apenas números"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-700">WhatsApp</label>
                    <input
                      type="text"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                      placeholder="DDD + número"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* --- FORMA DE PAGAMENTO --- */}
            <section>
              <h2 className="text-base font-semibold text-[#1f2f2b] mb-3">
                Forma de pagamento
              </h2>

              {/* Tabs */}
              <div className="flex gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("CREDIT_CARD")}
                  className={`flex-1 py-2 rounded-full text-xs md:text-sm border ${
                    paymentMethod === "CREDIT_CARD"
                      ? "bg-[#58b179] text-white border-[#58b179]"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  Cartão de crédito
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("PIX")}
                  className={`flex-1 py-2 rounded-full text-xs md:text-sm border ${
                    paymentMethod === "PIX"
                      ? "bg-[#58b179] text-white border-[#58b179]"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  PIX
                </button>
              </div>

              {/* Cartão de crédito — UI */}
              {paymentMethod === "CREDIT_CARD" && (
                <div className="space-y-3 border border-gray-300 rounded-xl p-4 bg-gray-50">
                  <p className="text-xs text-gray-600 mb-2">
                    Seus dados serão processados via Asaas, com certificação PCI-DSS.
                    Nenhuma informação do cartão fica armazenada no Parceiro IA.
                  </p>

                  {/* Número */}
                  <div>
                    <label className="text-xs font-medium text-gray-700">Número do cartão</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                      placeholder="16 dígitos"
                    />
                  </div>

                  {/* Titular */}
                  <div>
                    <label className="text-xs font-medium text-gray-700">
                      Nome impresso no cartão
                    </label>
                    <input
                      type="text"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Como aparece no cartão"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {/* Validade */}
                    <div>
                      <label className="text-xs font-medium text-gray-700">Validade (MM/AA)</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        placeholder="MM/AA"
                      />
                    </div>

                    {/* CVV */}
                    <div>
                      <label className="text-xs font-medium text-gray-700">CVV</label>
                      <input
                        type="password"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        placeholder="3 dígitos"
                      />
                    </div>

                    {/* Parcelas */}
                    <div>
                      <label className="text-xs font-medium text-gray-700">Parcelas</label>
                      <select
                        value={cardInstallments}
                        onChange={(e) => setCardInstallments(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                      >
                        <option value="1">1x sem juros</option>
                        <option value="2">2x sem juros</option>
                        <option value="3">3x sem juros</option>
                      </select>
                    </div>
                  </div>

                  <p className="text-xs text-orange-600 bg-orange-50 border border-orange-100 px-3 py-2 rounded-lg">
                    Pagamento por cartão estará disponível em breve.  
                    No momento, utilize o PIX.
                  </p>
                </div>
              )}

              {/* PIX */}
              {paymentMethod === "PIX" && (
                <div className="space-y-2 border border-gray-200 rounded-xl p-4 bg-gray-50">
                  <p className="text-xs text-gray-700">
                    O pagamento via PIX é rápido, seguro e confirmado pelo Asaas.
                    Você será redirecionado automaticamente para a página oficial.
                  </p>
                  <p className="text-xs text-gray-600">
                    Após o pagamento, sua assinatura do Parceiro IA é liberada automaticamente
                    via confirmação do Asaas.
                  </p>
                </div>
              )}
            </section>

            {/* --- EXTRAS --- */}
            <section>
              <h2 className="text-base font-semibold text-[#1f2f2b] mb-3">
                Aproveite e leve junto
              </h2>

              <div className="space-y-2">
                {Object.entries(EXTRAS).map(([key, extra]) => (
                  <label
                    key={key}
                    className="flex items-start gap-3 text-sm cursor-pointer border border-gray-200 hover:border-[#58b179] rounded-xl px-3 py-2 transition select-none"
                  >
                    <input
                      type="checkbox"
                      checked={extras[key]}
                      onChange={() => handleToggleExtra(key)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#58b179]"
                    />

                    <div>
                      <span className="font-medium text-gray-800">{extra.nome}</span>
                      <span className="block text-gray-600">
                        + {formatarMoeda(extra.valor)}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            {/* MENSAGEM DE ERRO */}
            {erro && (
              <div className="text-sm text-red-700 bg-red-100 border border-red-200 rounded-lg px-3 py-2">
                {erro}
              </div>
            )}

            {/* BOTÃO */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full md:w-auto mt-3 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#58b179] hover:bg-[#4aa06b] disabled:opacity-60 transition"
            >
              {isLoading
                ? "Gerando pagamento..."
                : paymentMethod === "PIX"
                ? "Finalizar e gerar PIX"
                : "Pagamento por cartão (em breve)"}
            </button>
          </div>

          {/* ---------------------------------------------------
               COLUNA 3 — RESUMO
          ---------------------------------------------------- */}
          <div className="bg-[#1f2f2b] text-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold mb-4 text-white">
                Resumo da assinatura
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-white/90">
                  <span>{planoSelecionado.nome}</span>
                  <span>{formatarMoeda(planoSelecionado.valor)}</span>
                </div>

                {Object.entries(extras)
                  .filter(([, ativo]) => ativo)
                  .map(([key]) => {
                    const extra = EXTRAS[key];
                    return (
                      <div key={key} className="flex justify-between text-white/80">
                        <span>{extra.nome}</span>
                        <span>{formatarMoeda(extra.valor)}</span>
                      </div>
                    );
                  })}

                <div className="border-t border-white/20 my-3" />

                <div className="flex justify-between text-white">
                  <span>Total do primeiro pagamento</span>
                  <span className="font-bold">
                    {formatarMoeda(resumoValores.totalGeral)}
                  </span>
                </div>

                <p className="mt-3 text-xs text-white/70">
                  💡 Você paga agora o 1º mês + extras.  
                  A partir do próximo mês, renova automaticamente apenas a assinatura.
                </p>

                <p className="mt-2 text-[11px] text-white/50">
                  Pagamentos protegidos pela infraestrutura Asaas com protocolo PCI-DSS.
                  Seus dados são criptografados e não ficam armazenados no Parceiro IA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DEBUG */}
        {debugResponse && (
          <pre className="mt-6 w-full text-xs bg-gray-900 text-green-200 p-4 rounded-lg overflow-x-auto">
{JSON.stringify(debugResponse, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
