import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Como posso te ajudar | Alex Alan Nunes",
  description:
    "Sua presença digital completa no ar em 5 dias. Landing page que aparece no Google e leva cliente direto pro seu WhatsApp.",
};

const BENEFITS = [
  {
    icon: "🔍",
    title: "Aparece no Google",
    description:
      "Quando alguém pesquisar pelo seu serviço na sua região, sua página aparece. Continua trazendo cliente novo mesmo você não fazendo nada.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    icon: "💬",
    title: "Cliente fala com você em 1 clique",
    description:
      "O WhatsApp funciona direto na página. O visitante clica e já cai na conversa com você. Nada de formulário longo nem 'aguarde retorno'.",
    color:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    icon: "🎨",
    title: "Parece um negócio de verdade",
    description:
      "Design profissional, página que carrega em 2 segundos e funciona perfeitamente no celular. Parece que você pagou uma agência.",
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    icon: "📋",
    title: "Dois jeitos do cliente te achar",
    description:
      "Pelo WhatsApp (direto) ou pelo formulário de contato. Nome e telefone chegam organizados pra você, sem perder nenhum contato.",
    color:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  {
    icon: "⚡",
    title: "No ar em 5 dias",
    description:
      "Não é projeto de meses. É conversar, eu montar, você aprovar e pronto. Sua página funcionando no seu domínio em 5 dias úteis.",
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
] as const;

const CASES = [
  {
    title: "Pra oficinas mecânicas",
    description:
      "Página com serviços, horário, localização e WhatsApp. Feita pra quem procura 'oficina perto de mim' no Google.",
    href: "/oficinas",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Pra psicólogos(as)",
    description:
      "Página que transmite confiança, com especialidades e um caminho simples pra agendar a primeira consulta.",
    href: "/psicologos",
    gradient: "from-purple-500 to-pink-600",
  },
] as const;

const STEPS = [
  {
    step: "1",
    title: "Você me conta o que faz",
    description:
      "Em uma conversa rápida, você me fala qual é o seu serviço e o que o cliente precisa saber. Sem reunião longa, sem burocracia.",
    color: "bg-green-500",
  },
  {
    step: "2",
    title: "Eu monto tudo em 5 dias",
    description:
      "Crio a página, texto, WhatsApp, SEO e formulário. Você acompanha e aprova cada parte antes de eu seguir pra próxima.",
    color: "bg-blue-500",
  },
  {
    step: "3",
    title: "Sua página no ar, funcionando sozinha",
    description:
      "A página vai ao ar e você passa a receber contatos pelo WhatsApp. Se precisar de ajuste depois, a gente ajusta sem custo escondido.",
    color: "bg-purple-500",
  },
] as const;

const FAQ = [
  {
    q: "Nunca tive site. Vai ser complicado pra mim?",
    a: "Não. Você não precisa entender nada de tecnologia. Eu cuido de tudo: domínio, hospedagem, configuração. Você só aprova o conteúdo e pronto. Sua página fica no ar funcionando 24h.",
  },
  {
    q: "Quanto custa?",
    a: "Depende do que entra no projeto (quantas seções, integrações, etc). A partir de R$ 500 você tem uma página completa. Você recebe a proposta fechada antes de eu começar, sem surpresa depois.",
  },
  {
    q: "Atende oficinas mecânicas e psicólogos?",
    a: "Sim. Esses são os dois nichos que mais trabalho. Já tenho exemplos de como a página fica pra cada um, pode dar uma olhada na seção acima.",
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
    a: "Você acompanha e aprova cada etapa antes da página ir ao ar: texto, design, estrutura. Ajustes durante o desenvolvimento estão incluídos. Seu gosto final é o que importa.",
  },
  {
    q: "E se eu precisar de alterações depois do lançamento?",
    a: "A gente combina um suporte pós-lançamento. Ajustes simples são rápidos e sem custo extra. Em 5 dias você já está no ar, e o suporte continua depois.",
  },
  {
    q: "Quanto tempo vai demorar até eu ver resultado?",
    a: "A página fica pronta em 5 dias. Assim que vai ao ar, o Google começa a indexar e as pessoas passam a encontrar você. É um trabalho que continua trazendo resultado mesmo você não fazendo nada.",
  },
] as const;

export default function ComoPossoTeAjudar() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 px-5 py-16 text-white sm:px-6 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white sm:text-sm">
            Sua página no ar em 5 dias
          </span>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Se você não está no Google, você não existe pro seu cliente.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Eu crio sua página profissional. Ela aparece na busca, funciona no
            celular e leva quem te procura direto pro seu WhatsApp. Em 5 dias
            está no ar. Depois disso, você só responde o WhatsApp.
          </p>
          <a
            href="https://wa.me/5588982217760?text=Oi%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20p%C3%A1gina%20profissional"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-white px-8 py-4 text-lg font-bold text-green-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Quero ver como fica a minha →
          </a>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-white px-5 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400 sm:text-sm">
              O que acontece hoje
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              Sem página, você depende só de indicação. E isso tem limite.
            </h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:space-y-5 sm:text-lg">
            <p>
              Quando alguém precisa de um mecânico ou de um psicólogo, o primeiro
              lugar que olha é o Google. Se você não aparece lá, existem só duas
              formas dessa pessoa chegar até você: alguém indicar ou ela já te
              conhecer. Fora isso, ela fecha com quem aparece na busca.
            </p>
            <p>
              Todos os dias tem gente perto de você procurando exatamente o seu
              serviço e fechando com outra pessoa. Só porque essa outra pessoa
              tem página e você ainda não tem.
            </p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Não ter página não é sobre estética. É sobre estar invisível pra
              quem já quer te contratar.
            </p>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/5588982217760?text=Oi%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20p%C3%A1gina%20profissional"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-green-700 hover:shadow-xl"
            >
              Quero resolver isso →
            </a>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-gray-50 px-5 py-16 dark:bg-neutral-900 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 sm:text-sm">
              Tudo incluído
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              O que sua página vai ter
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
              Veja exemplos reais
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              Como fica a página do seu negócio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
              Escolha seu nicho e veja como a página fica pronta:
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {CASES.map((c) => (
              <div
                key={c.title}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
              >
                <Link
                  href={c.href}
                  className="block"
                >
                  <div
                    className={`flex h-44 items-center justify-center bg-gradient-to-br ${c.gradient} sm:h-48`}
                  >
                    <span className="rounded-xl bg-white/90 px-5 py-2 text-lg font-bold text-gray-800">
                      {c.title}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="mb-2 text-lg font-bold sm:text-xl">
                      {c.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {c.description}
                    </p>
                    <span className="inline-block rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                      Quero uma página assim →
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            O design e o texto final saem sob medida pro seu negócio, com seu
            nome, suas fotos e o que faz sentido pra seus clientes.
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
              Sua página no ar em 5 dias
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
            Sua página pode estar no ar na semana que vem.
          </h2>
          <p className="mb-8 text-base text-white/90 sm:text-lg">
            Me chama no WhatsApp. A gente conversa, eu te explico como funciona
            e você decide se faz sentido pro seu negócio. Sem compromisso.
          </p>
          <a
            href="https://wa.me/5588982217760?text=Oi%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20p%C3%A1gina%20profissional"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-white px-10 py-4 text-lg font-bold text-green-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
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
