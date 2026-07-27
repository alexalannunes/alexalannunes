import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auto Mecânica São Jorge | Mecânica e Elétrica Automotiva",
  description:
    "Oficina mecânica especializada em manutenção preventiva, correta e eletrônica automotiva. Atendemos pela região.",
};

const SERVICES = [
  {
    icon: "🔧",
    title: "Mecânica Geral",
    description: "Troca de óleo, filtros, freios, suspensão e motor.",
  },
  {
    icon: "⚡",
    title: "Elétrica Automotiva",
    description:
      "Diagnóstico eletrônico, injetora, alternador, partida e fiação.",
  },
  {
    icon: "🛞",
    title: "Alinhamento e Balanceamento",
    description:
      "Equipamento de última geração para rodas e pneus em perfeito estado.",
  },
  {
    icon: "❄️",
    title: "Ar-Condicionado",
    description:
      "Higienização, recarga de gás e manutenção completa do sistema.",
  },
] as const;

const HOURS = [
  { day: "Segunda a Sexta", time: "08h às 18h" },
  { day: "Sábado", time: "08h às 12h" },
  { day: "Domingo e Feriados", time: "Fechado" },
] as const;

export default function Oficinas() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 px-5 py-16 text-white sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
            Exemplo de página conceito
          </p>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Auto Mecânica São Jorge
          </h1>
          <p className="mb-8 text-lg text-white/90">
            Mecânica e elétrica automotiva. Atendemos pela região com
            profissionalidade e transparência.
          </p>
          <a
            href="https://wa.me/5588999999999?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20servi%C3%A7o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Agendar meu serviço
          </a>
        </div>
      </section>

      <section className="bg-white px-5 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-600 sm:text-sm">
              Nossos serviços
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              O que a gente faz de melhor
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-shadow hover:shadow-md"
              >
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-700">
                  {s.icon}
                </span>
                <h3 className="mb-1 text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl sm:flex sm:gap-8">
          <div className="mb-10 sm:mb-0 sm:flex-1">
            <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">
              Horário de funcionamento
            </h2>
            <dl className="space-y-3">
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm"
                >
                  <dt className="font-semibold text-gray-900">{h.day}</dt>
                  <dd className="text-sm font-medium text-gray-600">
                    {h.time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="sm:flex-1">
            <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">
              Localização
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="mb-2 font-semibold text-gray-900">
                Rua Example, 123
              </p>
              <p className="text-sm text-gray-600">
                Centro, Pereiro - CE, 63460-000
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 px-5 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          Precisa de um mecânico de confiança?
        </h2>
        <p className="mb-8 text-lg text-white/90">
          Fale com a gente pelo WhatsApp e agende seu serviço.
        </p>
        <a
          href="https://wa.me/5588999999999?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20servi%C3%A7o"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-2xl bg-white px-10 py-4 text-lg font-bold text-blue-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Falar no WhatsApp
        </a>
      </section>

      <div className="bg-white px-5 py-8 text-center dark:bg-neutral-950">
        <Link
          href="/como-posso-te-ajudar"
          className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          ← Voltar para Como posso te ajudar
        </Link>
      </div>
    </main>
  );
}
