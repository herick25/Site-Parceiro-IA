import React from 'react';
import { CheckCircleIcon, WalletIcon, FlagIcon, Bars3Icon } from '@heroicons/react/24/solid';

const modules = [
  {
    title: 'Lembretes',
    description: 'Agenda seus lembretes e compromissos',
    icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />
  },
  {
    title: 'Finanças',
    description: 'Gerencie suas finanças pessoais',
    icon: <WalletIcon className="h-8 w-8 text-green-500" />
  },
  {
    title: 'Metas',
    description: 'Acompanhe seu progresso de metas',
    icon: <FlagIcon className="h-8 w-8 text-green-500" />
  },
  {
    title: 'Listas',
    description: 'Crie listas inteligentes',
    icon: <Bars3Icon className="h-8 w-8 text-green-500" />
  }
];

export default function Modules() {
  return (
    <section className="my-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-8">Módulos do Parceiro IA</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {modules.map(({ title, description, icon }, idx) => (
          <div key={idx} className="flex items-center space-x-4 border p-4 rounded shadow-sm hover:shadow-md transition">
            {icon}
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
