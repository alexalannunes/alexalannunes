"use client";

import Link from "next/link";
import { useState } from "react";
import { Leaf, Menu, X, ChevronDown, MapPin, Monitor, Send } from "lucide-react";

const NAV_ITEMS = [
  { label: "Psicoterapia", href: "#servicos" },
  { label: "Atendimento Online", href: "#beneficios" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Contatos", href: "#contato" },
];

const FAQ_DATA = [
  {
    q: "Quando devo buscar psicoterapia?",
    a: "Quando você sente que algo não vai bem — seja ansiedade, tristeza profunda, dificuldade nos relacionamentos ou aquela sensação de que a vida perdeu o sentido. Não precisa estar no fundo do poço pra buscar ajuda. Na verdade, quanto antes você começa, mais leve fica o caminho.",
  },
  {
    q: "Qual a duração do tratamento?",
    a: "Não existe um prazo fechado. Cada pessoa tem seu ritmo. Algumas sentem melhora em poucas semanas, outras preferem um acompanhamento mais longo pra se aprofundar. O que importa é que você nunca estará sozinha nessa decisão — a gente avalia juntos.",
  },
  {
    q: "É necessário tomar medicação?",
    a: "Não necessariamente. A psicoterapia não substitui medicação, e nem toda situação exige remédio. Se eu perceber que pode ser o caso, vou conversar com você e, se precisar, encaminho pra um psiquiatra de confiança. Mas a decisão é sempre sua.",
  },
  {
    q: "Como posso agendar um horário?",
    a: "É simples: é só me chamar no WhatsApp ou preencher o formulário de contato. A gente marca uma conversa inicial sem compromisso, tira suas dúvidas e, se sentir que faz sentido, agendamos a primeira sessão.",
  },
];

const BENEFITS = [
  {
    src: "/psicologa/beneficio-01.jpg",
    title: "Flexibilidade de horários",
    desc: "Marque sessões em horários que encaixam na sua rotina, sem precisar se deslocar.",
  },
  {
    src: "/psicologa/beneficio-02.jpg",
    title: "Conforto do lar",
    desc: "Fale do seu próprio sofá, num ambiente que você já conhece e onde se sente segura.",
  },
  {
    src: "/psicologa/beneficio-03.jpg",
    title: "Continuidade e consistência",
    desc: "Mesmo em viagens ou mudanças, seu tratamento continua sem interrupções.",
  },
  {
    src: "/psicologa/beneficio-04.jpg",
    title: "Maior privacidade",
    desc: "Sem salas de espera nem encontros inesperados. Você entra na sessão e sai sem ser vista.",
  },
];

const CRP = "CRP 24/04927";

export default function Psicologos() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FAF8F5] font-sans text-[#3D3D3D]">
      {/* ===== HEADER FIXO ===== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#EDE5DC]/60 bg-[#FAF8F5]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
          <Link href="#hero" className="flex items-center gap-2 font-serif text-lg font-bold tracking-tight text-[#7A8B6B]">
            <Leaf className="h-5 w-5" />
            Ana Fernandes
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#5C5C5C] md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#7A8B6B]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5588999999999?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#7A8B6B] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#6B7F5E] hover:shadow-lg"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex items-center gap-1 text-sm font-medium text-[#7A8B6B] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="border-t border-[#EDE5DC] bg-[#FAF8F5] px-5 pb-5 pt-3 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-[#5C5C5C]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-1 transition-colors hover:text-[#7A8B6B]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5588999999999?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block self-start rounded-full bg-[#7A8B6B] px-5 py-2 text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="relative flex min-h-dvh items-center pt-16">
        <div className="absolute inset-0">
          <img
            src="/psicologa/hero.jpg"
            alt="Ana Fernandes psicóloga"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <h1 className="font-serif text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            A vida leve é aquela que te permite ser o que você é
          </h1>
          <p className="mt-4 text-lg text-white/90 drop-shadow sm:text-xl">
            Eu posso te ajudar a encontrar o caminho juntos
          </p>
          <a
            href="#contato"
            className="mt-8 inline-block rounded-full bg-[#C9A96E] px-10 py-4 text-sm font-bold tracking-widest text-white transition-all hover:bg-[#B8944A] hover:shadow-xl hover:scale-105"
          >
            AGENDE SEU HORÁRIO
          </a>
        </div>
      </section>

      {/* ===== AUTOESTIMA CARDS ===== */}
      <section className="bg-[#FAF8F5] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 font-serif text-xl font-bold text-[#7A8B6B]">Autoestima</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C9A96E]">O QUE É?</p>
              <p className="text-sm leading-relaxed text-[#5C5C5C]">
                Autoestima é a percepção que você tem de si mesma. Não é sobre se achar perfeita, mas sobre se enxergar com carinho, reconhecer seu valor e se tratar com respeito — inclusive quando erra.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 font-serif text-xl font-bold text-[#7A8B6B]">Autoestima e Relacionamentos</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C9A96E]">COMO A AUTOESTIMA IMPACTA A SUA VIDA?</p>
              <p className="text-sm leading-relaxed text-[#5C5C5C]">
                A forma como você se vê influencia tudo: as relações que escolhe, os limites que impõe, o que aceita e o que não aceita. Uma autoestima frágil te coloca em situações que te diminuem.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 font-serif text-xl font-bold text-[#7A8B6B]">Psicoterapia e Autoestima</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C9A96E]">A PSICOTERAPIA É O CAMINHO PARA...</p>
              <p className="text-sm leading-relaxed text-[#5C5C5C]">
                ...ressignificar sua história, silenciar a voz crítica e construir uma relação mais amorosa com você mesma. A terapia te ajuda a descobrir quem você é fora das expectativas dos outros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS — PSICOTERAPIA INDIVIDUAL ===== */}
      <section id="servicos" className="bg-white px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[20px_300px_20px_400px] md:w-5/12">
              <img
                src="/psicologa/servicos.jpg"
                alt="Ana Fernandes psicóloga"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-7/12">
              <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
                Psicoterapia Individual — Adultos a partir dos 18 anos
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#5C5C5C] sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#C9A96E]" />
                  Acolhimento sem julgamento pra você falar o que precisar
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#C9A96E]" />
                  Ferramentas práticas pra lidar com ansiedade, angústia e dúvidas
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#C9A96E]" />
                  Autoconhecimento que transforma a forma como você se enxerga
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#C9A96E]" />
                  Suporte pra tomar decisões e encontrar seu próprio caminho
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="flex-1 rounded-xl border border-[#EDE5DC] bg-[#FAF8F5] p-4 text-center">
                  <Monitor className="mx-auto mb-1 h-5 w-5 text-[#7A8B6B]" />
                  <p className="text-sm font-semibold">Online</p>
                  <p className="text-xs text-[#5C5C5C]">Para todo o Brasil</p>
                </div>
                <div className="flex-1 rounded-xl border border-[#EDE5DC] bg-[#FAF8F5] p-4 text-center">
                  <MapPin className="mx-auto mb-1 h-5 w-5 text-[#7A8B6B]" />
                  <p className="text-sm font-semibold">Presencial</p>
                  <p className="text-xs text-[#5C5C5C]">Pereiro, CE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMO A PSICOTERAPIA PODE TE AJUDAR? ===== */}
      <section className="bg-[#7A8B6B] px-5 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Como a psicoterapia pode te ajudar?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            A psicoterapia não é só pra quem está sofrendo. É pra quem quer se conhecer melhor, sair do automático, melhorar seus relacionamentos e viver com mais sentido. É um espaço que é só seu — pra ouvir o que você realmente sente.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-block rounded-full bg-[#C9A96E] px-10 py-4 text-sm font-bold tracking-widest text-white transition-all hover:bg-[#B8944A] hover:shadow-xl hover:scale-105"
          >
            AGENDE SEU HORÁRIO
          </a>
        </div>
      </section>

      {/* ===== BENEFÍCIOS DO ATENDIMENTO ONLINE ===== */}
      <section id="beneficios" className="bg-[#FAF8F5] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold sm:text-4xl">Benefícios</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <div key={i} className="group text-center">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full transition-shadow group-hover:shadow-md">
                  <img
                    src={b.src}
                    alt={b.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 font-serif text-lg font-bold text-[#7A8B6B]">{b.title}</h3>
                <p className="text-sm leading-relaxed text-[#5C5C5C]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOBRE MIM ===== */}
      <section id="sobre" className="bg-white px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold sm:text-4xl">Sobre Mim</h2>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col gap-4 md:w-5/12">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[300px_20px_400px_20px]">
                <img
                  src="/psicologa/sobre-01.jpg"
                  alt="Ana Fernandes psicóloga"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-[20px_400px_20px_300px]">
                <img
                  src="/psicologa/sobre-02.jpg"
                  alt="Ana Fernandes psicóloga"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-[#5C5C5C] sm:text-base md:w-7/12">
              <p>
                Me chamo Ana Fernandes, sou psicóloga clínica e trabalho com Gestalt-Terapia há mais de 10 anos. Minha jornada começou quando percebi que o que realmente transforma as pessoas não é uma técnica pronta, mas a qualidade da relação que se constrói entre terapeuta e paciente.
              </p>
              <p>
                Acredito que cada pessoa tem dentro de si os recursos pra se curar e crescer — meu papel é criar um espaço seguro pra que isso aconteça. Não estou aqui pra dar respostas prontas, mas pra caminhar com você enquanto encontra as suas.
              </p>
              <p>
                Atendo adultos a partir dos 18 anos, tanto online quanto presencialmente em Pereiro, CE. Se você sente que está na hora de se cuidar, vamos conversar.
              </p>
              <a
                href="#contato"
                className="mt-4 inline-block rounded-full bg-[#7A8B6B] px-8 py-3 text-sm font-bold tracking-widest text-white transition-all hover:bg-[#6B7F5E] hover:shadow-lg hover:scale-105"
              >
                ENTRE EM CONTATO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABORDAGEM ===== */}
      <section id="abordagem" className="bg-[#FAF8F5] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">Gestalt-Terapia</h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#C9A96E]">ABORDAGEM</p>
          <div className="mt-8 space-y-4 text-left text-sm leading-relaxed text-[#5C5C5C] sm:text-base">
            <p>
              Gestalt-Terapia é uma abordagem humanista que enxerga o ser humano como um todo — não como uma soma de sintomas. Em vez de focar apenas no passado ou no diagnóstico, ela olha pra o que está acontecendo <strong>aqui e agora</strong>: como você se sente, o que está vivendo e o que te impede de seguir em frente.
            </p>
            <p>
              O trabalho é vivencial. Não é só falar sobre o que te incomoda, mas experimentar novas formas de estar no mundo. Aos poucos, você aprende a se ouvir mais, a confiar em si mesma e a fazer escolhas mais conscientes — inclusive a de ser quem você realmente é.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <div className="space-y-3">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-[#EDE5DC]">
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold transition-colors hover:bg-[#FAF8F5] sm:text-base"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  {item.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#7A8B6B] transition-transform ${
                      faqOpen === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === i && (
                  <div className="border-t border-[#EDE5DC] px-5 py-4 text-sm leading-relaxed text-[#5C5C5C]">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTATO ===== */}
      <section id="contato" className="bg-[#FAF8F5] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold sm:text-4xl">Contato</h2>
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Form */}
            <form className="flex-1 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#5C5C5C]">Nome</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-[#EDE5DC] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#7A8B6B] focus:ring-1 focus:ring-[#7A8B6B]/30"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#5C5C5C]">Celular / WhatsApp</label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-[#EDE5DC] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#7A8B6B] focus:ring-1 focus:ring-[#7A8B6B]/30"
                  placeholder="(88) 99999-9999"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#5C5C5C]">E-mail</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-[#EDE5DC] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#7A8B6B] focus:ring-1 focus:ring-[#7A8B6B]/30"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#5C5C5C]">Modalidade preferida</label>
                <select className="w-full rounded-xl border border-[#EDE5DC] bg-white px-4 py-3 text-sm text-[#5C5C5C] outline-none transition-colors focus:border-[#7A8B6B] focus:ring-1 focus:ring-[#7A8B6B]/30">
                  <option value="">Selecione</option>
                  <option value="online">Online</option>
                  <option value="presencial">Presencial</option>
                  <option value="indiferente">Indiferente</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#5C5C5C]">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-[#EDE5DC] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#7A8B6B] focus:ring-1 focus:ring-[#7A8B6B]/30"
                  placeholder="Conte um pouco sobre você e o que te traz até aqui..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A8B6B] px-8 py-3 text-sm font-bold tracking-widest text-white transition-all hover:bg-[#6B7F5E] hover:shadow-lg hover:scale-105"
              >
                <Send className="h-4 w-4" />
                ENVIAR
              </button>
            </form>

            {/* Info */}
            <div className="space-y-5 lg:w-4/12">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-serif text-lg font-bold text-[#7A8B6B]">Informações de contato</h3>
                <div className="space-y-3 text-sm text-[#5C5C5C]">
                  <a
                    href="https://wa.me/5588999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-[#7A8B6B]"
                  >
                    <Send className="h-4 w-4 text-[#C9A96E]" />
                    (88) 99999-9999
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-[#7A8B6B]"
                  >
                    <Send className="h-4 w-4 text-[#C9A96E]" />
                    @anafernandespsi
                  </a>
                  <a
                    href="mailto:ana@fernandespsi.com.br"
                    className="flex items-center gap-3 transition-colors hover:text-[#7A8B6B]"
                  >
                    <Send className="h-4 w-4 text-[#C9A96E]" />
                    ana@fernandespsi.com.br
                  </a>
                  <div className="flex items-start gap-3 pt-2 text-xs text-[#8B7D6B]">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A96E]" />
                    <span>Pereiro, CE — Atendimento presencial e online para todo o Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[#EDE5DC] bg-white px-5 py-8">
        <div className="mx-auto max-w-5xl text-center text-sm text-[#8B7D6B]">
          <p>
            Ana Fernandes Psicóloga {CRP} — Todos os Direitos Reservados
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[#7A8B6B] transition-colors hover:text-[#6B7F5E]"
          >
            @anafernandespsi
          </a>
        </div>
      </footer>

      {/* Back link */}
      <div className="bg-[#FAF8F5] px-5 py-6 text-center">
        <Link
          href="/como-posso-te-ajudar"
          className="text-sm text-[#8B7D6B] transition-colors hover:text-[#7A8B6B]"
        >
          ← Voltar para Como posso te ajudar
        </Link>
      </div>
    </main>
  );
}
