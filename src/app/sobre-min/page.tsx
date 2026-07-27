import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mim | Alex Alan Nunes",
  description:
    "Desenvolvedor Front-end especializado em React, performance e escalabilidade.",
};

const EXPERIENCE = [
  {
    role: "Desenvolvedor Front-end PL",
    company: "Avantsoft",
    period: "1 ano e 4 meses",
    location: "Home Office / Salvador, BA",
    items: [
      "Lazy loading e code splitting em dashboards React, reduzindo tempo de carregamento inicial",
      "Debounce na sincronização de tabelas editáveis, permitindo edição contínua via teclado sem perda de dados",
      "Dashboards interativos para análise de dados de alto volume",
      "Gerenciamento de estado baseado em URL com persistência de filtros",
      "Tabelas dinâmicas com navegação via teclado e renderização otimizada",
      "Otimização de cache e redução de chamadas redundantes à API",
    ],
  },
  {
    role: "Desenvolvedor Front-end PL",
    company: "Venturus",
    period: "1 ano e 6 meses",
    location: "Home Office / Campinas, SP",
    items: [
      "Componentes reutilizáveis em React com arquitetura modular",
      "Otimização de consumo de dados com React Query e gerenciamento de cache",
      "Code splitting e renderização eficiente com TanStack (React Table e React Virtual)",
      "Comunicação entre componentes via Context API e hooks customizados",
      "Testes automatizados com Jest e React Testing Library",
      "Code reviews e mentoria de desenvolvedores juniores",
    ],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "Brisanet Telecomunicações S.A.",
    period: "6 anos",
    location: "Presencial / Pereiro, CE",
    items: [
      "Sistemas internos para operações de call center, substituindo planilhas e ferramentas externas",
      "Integrações em tempo real com Node.js e Socket.io, utilizadas por mais de 10 setores",
      "Soluções integradas com PABX, URA e Asterisk em ambiente de call center",
      "Sistemas de gestão de vendas e comissionamento",
      "Interfaces e dashboards operacionais com foco em produtividade",
    ],
  },
] as const;

const SKILLS = {
  "Front-end": "React, Next.js, Angular, Svelte, TypeScript, HTML5, CSS3, SASS/SCSS",
  "Gerenciamento de Estado & Dados":
    "Zustand, React Query, Context API, APIs REST, otimização de cache",
  "Performance & Escalabilidade":
    "Code Splitting, Lazy Loading, Virtualização de listas (React Virtual)",
  "Backend & Integrações": "Node.js, PHP, APIs RESTful, WebSockets (Socket.io)",
  "Banco de Dados": "PostgreSQL, MySQL, NoSQL",
  "Ferramentas & Ecossistema": "Docker, Vite, Webpack, Git, Figma, Firebase, Supabase",
  Testes: "Jest, React Testing Library, Cypress",
} as const;

export default function SobreMin() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="mb-10 inline-block text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      >
        &larr; Voltar
      </Link>

      <header className="mb-14">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Alex Alan Nunes de Lima</h1>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Pereiro, Ceará &bull; (88) 9 8113-1510 &bull;{" "}
          <a
            href="mailto:alexalannunes@gmail.com"
            className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
          >
            alexalannunes@gmail.com
          </a>
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/alexalannunes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 underline-offset-2 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/alexalannunes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 underline-offset-2 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section className="mb-14">
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Desenvolvedor Front-end com experiência na construção de aplicações orientadas a dados,
          com foco em performance, escalabilidade e produtividade do usuário. Especializado em
          React e gerenciamento de estado, atuo na implementação de dashboards complexos,
          otimização de requisições e manipulação eficiente de grandes volumes de dados. Experiência
          em integrações com APIs e sistemas em tempo real, além de forte atuação na melhoria de UX
          em fluxos operacionais críticos.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-xl font-semibold">Experiência Profissional</h2>
        <div className="space-y-10">
          {EXPERIENCE.map((job) => (
            <article key={job.company + job.role}>
              <div className="mb-3">
                <h3 className="font-semibold">{job.role}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {job.company} &bull; {job.period} &bull; {job.location}
                </p>
              </div>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {job.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-xl font-semibold">Habilidades Técnicas</h2>
        <dl className="grid gap-4 text-sm sm:grid-cols-[10rem_1fr]">
          {Object.entries(SKILLS).map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="font-medium text-gray-900 dark:text-gray-100">{label}</dt>
              <dd className="text-gray-600 dark:text-gray-400">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-xl font-semibold">Cursos e Certificações</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Docker e containers aplicados ao desenvolvimento</li>
          <li>Fundamentos e arquitetura com React e Redux</li>
          <li>Design de interfaces e experiência do usuário</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Idiomas</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Inglês: Intermediário (leitura técnica e documentação)</li>
          <li>Espanhol: Básico</li>
        </ul>
      </section>
    </main>
  );
}
