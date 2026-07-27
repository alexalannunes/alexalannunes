import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dra. Marina Alves | Psicóloga e Terapeuta Cognitivo-Comportamental",
  description:
    "Psicóloga especializada em ansiedade, autoestima e relacionamentos. Atendimento online e presencial.",
};

const SPECIALTIES = [
  {
    icon: "🧠",
    title: "Ansiedade e Estresse",
      description:
      "Técnicas comprovadas pra te ajudar a lidar com pensamentos acelerados e recuperar a sensação de controle.",
  },
  {
    icon: "💛",
    title: "Autoestima",
    description:
      "Trabalho focado em reconhecer seu valor e construir uma relação mais saudável consigo mesmo.",
  },
  {
    icon: "💑",
    title: "Relacionamentos",
    description:
      "Comunicação assertiva, limites saudáveis e resolução de conflitos no relacionamento amoroso e familiar.",
  },
  {
    icon: "🌱",
    title: "Desenvolvimento pessoal",
    description:
      "Acompanhamento pra quem busca autoconhecimento, novos hábitos e crescimento pessoal.",
  },
] as const;

export default function Psicologos() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-500 to-pink-600 px-5 py-16 text-white sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
            Exemplo de página conceito
          </p>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Dra. Marina Alves
          </h1>
          <p className="mb-2 text-lg text-white/90">
            Psicóloga e Terapeuta Cognitivo-Comportamental
          </p>
          <p className="mb-8 text-base text-white/80">
            CRP 06/123456
          </p>
          <a
            href="https://wa.me/5588999999999?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-white px-8 py-4 text-lg font-bold text-purple-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Agendar consulta
          </a>
        </div>
      </section>

      <section className="bg-white px-5 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold text-purple-600 sm:text-sm">
              Sobre mim
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Um espaço seguro pra você se cuidar
            </h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            <p>
              Acredito que cuidar da saúde mental é um ato de coragem. Meu
              objetivo é oferecer um ambiente acolhedor e sem julgamento, onde
              você possa se expressar livremente e encontrar caminhos pra uma
              vida mais leve.
            </p>
            <p>
              Trabalho com Terapia Cognitivo-Comportamental, uma abordagem
              baseada em evidências científicas, que te ajuda a identificar
              padrões de pensamento e desenvolver estratégias práticas pra
              lidar com os desafios do dia a dia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-600 sm:text-sm">
              Especialidades
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Áreas de atuação
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {SPECIALTIES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-700">
                  {s.icon}
                </span>
                <h3 className="mb-1 text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl sm:flex sm:gap-8">
          <div className="mb-10 sm:mb-0 sm:flex-1">
            <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">
              Como funciona
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-purple-500 text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <h3 className="font-bold">Agendamento</h3>
                  <p className="text-sm text-gray-600">
                    Me chama no WhatsApp e a gente combina o melhor horário.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-pink-500 text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <h3 className="font-bold">Primeira sessão</h3>
                  <p className="text-sm text-gray-600">
                    A gente se conhece, você conta o que te traz e a gente
                    define juntos os objetivos do tratamento.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-purple-500 text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <h3 className="font-bold">Acompanhamento</h3>
                  <p className="text-sm text-gray-600">
                    Sessões regulares com foco no que realmente importa pra você,
                    com ferramentas práticas pro dia a dia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex-1">
            <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">
              Atendimento
            </h2>
            <div className="space-y-3">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="font-semibold text-gray-900">Online</p>
                <p className="text-sm text-gray-600">
                  Para qualquer lugar do Brasil, por videochamada.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="font-semibold text-gray-900">Presencial</p>
                <p className="text-sm text-gray-600">
                  Pereiro, CE. Atendimento sob agendamento.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="font-semibold text-gray-900">Valores</p>
                <p className="text-sm text-gray-600">
                  Sessão a partir de R$ 120. Converse comigo pra mais
                  informações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-500 to-pink-600 px-5 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          Cuide da sua saúde mental
        </h2>
        <p className="mb-8 text-lg text-white/90">
          O primeiro passo é o mais difícil. Me chama no WhatsApp e a gente
          começa juntos.
        </p>
        <a
          href="https://wa.me/5588999999999?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-2xl bg-white px-10 py-4 text-lg font-bold text-purple-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
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
