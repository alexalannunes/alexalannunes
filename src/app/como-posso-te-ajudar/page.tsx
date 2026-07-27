import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Como posso te ajudar | Alex Alan Nunes",
  description:
    "Presença digital para quem ainda não tem site. Landing page profissional com WhatsApp, SEO e captura de contatos.",
};

const BENEFITS = [
  {
    icon: "🎯",
    title: "Landing page de alta conversão",
    description:
      "Não é 'só uma página'. É uma página desenhada pra fazer uma coisa: transformar quem visita em contato pra você. Cada seção existe pra levar o visitante até o próximo passo.",
    color:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    icon: "🔍",
    title: "SEO: você aparece quando alguém te procura",
    description:
      "Configurado desde o primeiro dia pra você aparecer no Google quando alguém pesquisar pelo seu serviço na sua região. É esse trabalho que continua trazendo cliente novo mesmo você não fazendo nada.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    icon: "💬",
    title: "Botão de WhatsApp direto",
    description:
      "Quem visita clica e cai direto na conversa com você, sem formulário longo, sem enrolação. Do interesse ao contato, um clique.",
    color:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    icon: "🎨",
    title: "Design profissional",
    description:
      "Sua página passa a credibilidade de um negócio estabelecido, não a impressão de 'site feito às pressas'. Isso importa muito pra quem está decidindo confiar em você ou não.",
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    icon: "📋",
    title: "Formulário de captura",
    description:
      "Pra quem prefere deixar os dados em vez de chamar direto no WhatsApp: nome, telefone, o que precisa. Você recebe organizado, sem perder nenhum contato.",
    color:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  {
    icon: "📱",
    title: "Versão mobile perfeita",
    description:
      "A maioria de quem vai te encontrar vai estar no celular. A página funciona impecável nele, sem quebrar layout nem dificultar o clique no WhatsApp.",
    color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  },
  {
    icon: "⚡",
    title: "Entrega rápida",
    description:
      "Sua presença digital no ar em poucos dias. Você não passa meses esperando pra começar a aparecer no Google.",
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
] as const;

const CASES = [
  {
    title: "Oficina mecânica",
    description:
      "Uma página pensada pra quem procura 'oficina perto de mim' no Google: serviços, horário de funcionamento, localização e botão de WhatsApp em destaque.",
    href: "/oficinas",
    gradient: "from-blue-500 to-indigo-600",
    icon: "🔧",
  },
  {
    title: "Psicólogo(a)",
    description:
      "Uma página com tom acolhedor, que transmite confiança logo de cara, com especialidades e um caminho simples pra agendar a primeira conversa.",
    href: "/psicologos",
    gradient: "from-purple-500 to-pink-600",
    icon: "🧠",
  },
] as const;

const STEPS = [
  {
    step: "1",
    title: "Você me conta o negócio",
    description:
      "Uma conversa rápida: qual é o serviço, quem é o cliente ideal, e o que você quer que ele faça na página. Sem reunião longa, sem burocracia.",
    color: "bg-green-500",
  },
  {
    step: "2",
    title: "Eu monto a página",
    description:
      "Design, texto, formulário, WhatsApp e SEO. Tudo entregue pronto. Você acompanha e aprova cada etapa antes de eu seguir pra próxima.",
    color: "bg-blue-500",
  },
  {
    step: "3",
    title: "Lançamento e os contatos começam a chegar",
    description:
      "A página vai ao ar e você passa a receber leads qualificados direto no seu WhatsApp. Precisou de ajuste depois? A gente ajusta, sem custo escondido.",
    color: "bg-purple-500",
  },
] as const;

const FAQ = [
  {
    q: "Eu nunca tive site. Vai ser complicado pra mim?",
    a: "Não. Você não precisa entender nada de tecnologia. Eu cuido de tudo: domínio, hospedagem, configuração. Você só aprova o conteúdo e a página fica pronta e no ar, funcionando 24h.",
  },
  {
    q: "Quanto custa?",
    a: "Depende do escopo do projeto (quantidade de seções, integrações, etc). Você recebe uma proposta clara e fechada antes de eu começar, sem cobrança surpresa depois.",
  },
  {
    q: "Quanto tempo leva pra ficar pronta?",
    a: "Entre 3 e 5 dias úteis, dependendo da complexidade. O prazo é combinado e confirmado antes do início.",
  },
  {
    q: "Preciso ter domínio próprio?",
    a: "Não necessariamente. Posso te ajudar a configurar um do zero. Se você já tiver, a gente usa o seu.",
  },
  {
    q: "A página vai aparecer no Google?",
    a: "Sim. SEO técnico é padrão em todo projeto, da estrutura do código às meta tags. Não é um extra opcional.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Você acompanha e aprova cada etapa antes da página ir ao ar: design, texto, estrutura. Ajustes durante o desenvolvimento estão incluídos.",
  },
  {
    q: "E se eu precisar de alterações depois do lançamento?",
    a: "A gente combina um suporte pós-lançamento. Ajustes simples são rápidos e sem burocracia.",
  },
  {
    q: "Funciona pra qualquer tipo de negócio?",
    a: "Sim. Consultórios, clínicas, escolas, escritórios, prestadores de serviço. Qualquer negócio que queira transformar visitante em contato.",
  },
] as const;

export default function ComoPossoTeAjudar() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 px-5 py-16 text-white sm:px-6 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 sm:flex-row sm:gap-10">
          <Image
            src="/alexalannunes.jpeg"
            alt="Alex Alan Nunes"
            width={180}
            height={180}
            className="shrink-0 rounded-full border-4 border-white/30 shadow-2xl"
            priority
          />
          <div className="text-center sm:text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
              Presença digital para quem ainda não tem site
            </p>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl xl:text-5xl">
              Enquanto você não tem um site, seu concorrente está recebendo os
              clientes que deveriam ser seus.
            </h1>
            <p className="mb-6 text-base leading-relaxed text-white/90 sm:text-lg">
              Eu crio sua presença digital: uma página profissional que aparece
              no Google, mostra que seu negócio existe e leva quem te procura
              direto pro seu WhatsApp. Mesmo enquanto você está ocupado
              atendendo, sem precisar fazer nada.
            </p>
            <a
              href="https://wa.me/5588982217760?text=Oi%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20presen%C3%A7a%20digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-white px-6 py-3 text-base font-bold text-green-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
            >
              Quero minha presença digital →
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-white px-5 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400 sm:text-sm">
              O problema
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              Sem site, você depende só de indicação e isso tem limite
            </h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:space-y-5 sm:text-lg">
            <p>
              Hoje, quando alguém precisa do seu serviço, o primeiro lugar que
              essa pessoa olha é o Google. Se você não aparece lá, existem só
              duas formas dela chegar até você: alguém indicar, ou ela já te
              conhecer. Fora isso, ela vai direto pro concorrente que aparece na
              busca.
            </p>
            <p>
              Isso significa que, todos os dias, tem gente perto de você
              procurando exatamente o que você oferece e fechando com outra
              pessoa, só porque essa outra pessoa tem uma presença digital e
              você ainda não tem.
            </p>
            <p>
              Não ter site não é só &quot;não ter uma página bonita&quot;. É
              estar invisível pra quem já está pronto pra te contratar. E
              diferente de anúncio, que você paga toda vez que quer aparecer,
              uma página bem-feita continua trazendo gente nova pra você mesmo
              nos dias em que você está 100% ocupado atendendo, sem precisar
              fazer nada além de responder o WhatsApp.
            </p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Sem enrolação. Sem jargão técnico. Só o que faz o visitante virar
              contato.
            </p>
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/5588982217760?text=Oi%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20presen%C3%A7a%20digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-green-600 px-6 py-3 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-green-700 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
            >
              Já quero resolver isso →
            </a>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-gray-50 px-5 py-16 dark:bg-neutral-900 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 sm:text-sm">
              Sua presença digital completa
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              O que você recebe pra parar de depender só de indicação
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 sm:p-6"
              >
                <span
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-xl sm:h-12 sm:w-12 ${b.color}`}
                >
                  {b.icon}
                </span>
                <h3 className="mb-2 text-base font-bold sm:text-lg">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PÁGINAS CONCEITO */}
      <section className="bg-white px-5 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 sm:text-sm">
              Veja antes de decidir
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              Veja como ficaria a presença digital do seu negócio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
              Em vez de só te contar o que eu faço, montei exemplos reais de
              como uma página fica pronta, dependendo do seu tipo de negócio. Dá
              uma olhada e imagina o seu:
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {CASES.map((c) => (
              <div
                key={c.title}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
              >
                <div
                  className={`flex h-40 items-center justify-center bg-gradient-to-br ${c.gradient} text-6xl sm:h-48`}
                >
                  {c.icon}
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="mb-2 text-lg font-bold sm:text-xl">
                    {c.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {c.description}
                  </p>
                  <Link
                    href={c.href}
                    className="inline-block rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  >
                    Ver exemplo completo
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Esses são exemplos de como sua página pode ficar. O design e o texto
            final saem sob medida pro seu negócio, com seu nome, suas fotos e o
            que faz sentido pra quem você atende.
          </p>
        </div>
      </section>

      {/* PASSO A PASSO */}
      <section className="bg-gray-50 px-5 py-16 dark:bg-neutral-900 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 sm:text-sm">
              Passo a passo
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              Do primeiro contato até a página no ar
            </h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8">
            {STEPS.map((s) => (
              <div key={s.step} className="flex items-start gap-4 sm:gap-5">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold text-white sm:h-12 sm:w-12 ${s.color}`}
                >
                  {s.step}
                </span>
                <div className="pt-0.5">
                  <h3 className="mb-1 text-base font-bold sm:text-lg">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA PRINCIPAL */}
      <section className="bg-gradient-to-br from-green-500 to-emerald-600 px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            Cada dia sem presença digital é cliente que já passou pro
            concorrente
          </h2>
          <p className="mb-8 text-base text-white/90 sm:text-lg">
            Se você chegou até aqui, é sinal de que sabe que precisa disso. A
            única pergunta é quando você vai resolver. Me chama agora no
            WhatsApp. Eu te respondo em até 1 hora, em horário comercial, e a
            gente já alinha prazo e escopo. Sem compromisso, sem letra miúda.
          </p>
          <a
            href="https://wa.me/5588982217760?text=Oi%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20presen%C3%A7a%20digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-white px-8 py-3 text-base font-bold text-green-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:px-10 sm:py-4 sm:text-lg"
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-5 py-16 dark:bg-neutral-900 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 sm:text-sm">
              Tire suas dúvidas
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Perguntas frequentes
            </h2>
          </div>
          <dl className="space-y-3 sm:space-y-4">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950 sm:p-6"
              >
                <dt className="mb-2 text-base font-bold sm:text-lg">
                  {item.q}
                </dt>
                <dd className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
