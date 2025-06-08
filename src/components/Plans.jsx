import React from 'react';

const plans = [
  {
    name: 'Assinatura Mensal',
    price: 'R$19,90/mês',
    features: [
      'Acesso completo aos 4 módulos',
      'Atualizações contínuas',
      'Suporte dedicado'
    ]
  }
];

export default function Plans() {
  return (
    <section className="my-12 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-6">Planos e Valores</h2>
      {plans.map(({ name, price, features }, idx) => (
        <div key={idx} className="border p-6 rounded shadow-sm">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-green-600 font-semibold mb-4">{price}</p>
          <ul className="mb-4 list-disc list-inside">
            {features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Contratar Agora
          </button>
        </div>
      ))}
    </section>
  );
}
