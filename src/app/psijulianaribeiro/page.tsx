"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  MapPin,
  Monitor,
  Heart,
  ClipboardCheck,
  Award,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
  Laptop,
  AtSign,
} from "lucide-react";
import { FadeUp, Stagger, StaggerItem, CounterUp } from "@/components/animations";

const WHATSAPP =
  "https://wa.me/5585996779228?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20psic%C3%B3loga%20Juliana%20e%20gostaria%20de%20agendar%20uma%20consulta";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const KEYWORDS = [
  "Autoconhecimento",
  "Resiliência",
  "Autoconfiança",
  "Propósito",
  "Relacionamentos",
  "Equilíbrio",
  "Paciência",
  "Coragem",
  "Foco",
  "Gratidão",
  "Adaptação",
];

const WHY_US = [
  {
    icon: Award,
    title: "Experiência Comprovada",
    desc: "Mais de 28 anos de atuação na psicologia, com milhares de atendimentos realizados.",
  },
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    desc: "Cada paciente recebe um acompanhamento individual e humanizado, de acordo com o melhor para cada um.",
  },
  {
    icon: Laptop,
    title: "Terapia Presencial e Online",
    desc: "Escolha a melhor forma de atendimento para sua comodidade, o importante é cuidar de você.",
  },
];

const REVIEWS = [
  {
    nome: "Nayara Rodrigues",
    data: "10/01/2025",
    texto:
      "Amei minhas sessões com a Dra. Juliana, muita atenciosa, orientação ideal para cada situação, muito pontual e profissionalismo. Super indico!! Obrigada pelo acolhimento! Que Deus abençoe sua vida.",
  },
  {
    nome: "Karen Raiany",
    data: "11/10/2024",
    texto:
      "Tentei vários terapeutas, para tratar depressão e ansiedade. Mas foi com a Juliana que vi um grande avanço em pouco tempo! Ela é incrível!",
  },
  {
    nome: "Camila Pinheiro",
    data: "17/09/2024",
    texto:
      "A psicóloga Juliana é incrível! Na minha primeira sessão já tive uma elucidação muito grande sobre os problemas que me afligiam. Ela, com sua fala muito calma, sincera e fofa, conseguiu me passar um acolhimento com segurança e entendimento para eu mesma me entender. Profissional excelente e de muito conhecimento!",
  },
  {
    nome: "Leonardo Moreira",
    data: "19/07/2024",
    texto:
      "Bastante esclarecedora e atenciosa. Esclareceu minhas dúvidas e me deu um plano de ação para que eu possa perseverar. Recomendo a todos que se sentem perdidos na vida ou com dúvidas.",
  },
  {
    nome: "Regina Sales",
    data: "28/08/2024",
    texto:
      "Excelente profissional, solícita, muito educada. De uma mansidão admirável, ouve com atenção e zelo. Já na primeira sessão senti um grande alívio. Obrigada Dra. Juliana!!",
  },
  {
    nome: "Diego Leite",
    data: "08/10/2024",
    texto:
      "A terapia com a Juliana Holanda me ajuda bastante! Excelente profissional!",
  },
];

const PROBLEMS = [
  "Sentimentos constantes de preocupação, medo ou tensão que atrapalham seu dia a dia?",
  "Sensação de tristeza profunda, desânimo e falta de motivação para realizar atividades diárias?",
  "Dificuldade em reconhecer seu próprio valor e insegurança em diversas áreas da vida?",
  "Dificuldade em se conectar emocionalmente com outras pessoas, seja no trabalho, família ou vida amorosa?",
  "Mudanças bruscas de humor, dificuldade em lidar com emoções ou comportamentos que afetam sua rotina?",
  "Experiências passadas que continuam impactando sua vida e dificultam seu bem-estar emocional?",
];

const MODALIDADES = [
  {
    icon: Monitor,
    img: "/psicologa/beneficio-01.jpg",
    title: "Terapia Online",
    sub: "Cuide da sua Mente de Qualquer Lugar",
    desc: "A psicoterapia online é tão eficaz quanto a presencial. Comodidade e flexibilidade para você realizar suas sessões sem precisar se deslocar, bastando estar em um ambiente tranquilo e com boa conexão à internet.",
  },
  {
    icon: Heart,
    img: "/psicologa/sobre-02.jpg",
    title: "Terapia Individual",
    sub: "Encontre Equilíbrio e Bem-Estar",
    desc: "Seja para crianças, adolescentes ou adultos, a terapia ajuda a lidar com questões como ansiedade, depressão, traumas, baixa autoestima, inseguranças e muito mais. Um espaço seguro para você se expressar.",
  },
  {
    icon: ClipboardCheck,
    img: "/psicologa/beneficio-03.jpg",
    title: "Avaliação Psicológica",
    sub: "Para Diversas Necessidades",
    desc: "Realizo avaliações psicológicas para diversas finalidades, incluindo processos cirúrgicos, orientação profissional para ajudar na escolha de carreira e outros contextos que exigem laudos psicológicos.",
  },
];

const FAQ_DATA = [
  {
    q: "Atende por plano de saúde?",
    a: "Realizo atendimento particular e, em muitos casos, é possível solicitar o reembolso ao seu plano. Você verifica com o seu plano a cobertura de psicoterapia e eu te oriento no processo.",
  },
  {
    q: "Como funciona a terapia online?",
    a: "As sessões acontecem por videochamada, com a mesma qualidade e eficácia da presencial. Você só precisa estar em um ambiente tranquilo, com privacidade e boa conexão à internet. O link é enviado por WhatsApp antes de cada sessão.",
  },
  {
    q: "Qual a duração e frequência das sessões?",
    a: "As sessões têm duração média de 50 minutos. A frequência é combinada entre nós e, normalmente, é semanal. No início, definimos juntos os objetivos e o melhor formato para o seu caso.",
  },
  {
    q: "Como faço para agendar uma consulta?",
    a: "É simples: entre em contato pelo WhatsApp (85) 99677-9228 ou pela nossa página de contato. A gente conversa, tira suas dúvidas e agenda o melhor horário para você. Seu bem-estar é a prioridade.",
  },
];

const AVATAR_COLORS = [
  "bg-[#cb997e]",
  "bg-[#24af27]",
  "bg-[#926750]",
  "bg-[#7e5844]",
  "bg-[#614637]",
  "bg-[#d5bdaf]",
];

const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#24af27] px-10 py-4 text-base font-semibold text-white transition-all hover:bg-[#1d9a20] hover:shadow-[0_10px_24px_rgba(7,94,84,0.24)]";
const BTN_OUTLINE =
  "inline-flex items-center justify-center gap-2 rounded-[10px] border-2 border-[#24af27] px-10 py-4 text-base font-semibold text-[#24af27] transition-all hover:bg-[#24af27] hover:text-white";

export default function Psijulianaribeiro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white font-sans text-[#333333] [font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif]">
      {/* ===== HEADER FIXO ===== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f4f4f4] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 sm:px-6">
          <Link href="#inicio" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#24af27] font-heading text-lg font-semibold text-white">
              J
            </span>
            <span className="font-heading text-lg font-semibold tracking-tight text-[#333333]">
              Juliana Ribeiro
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#666666] lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#24af27]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#24af27] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1d9a20] hover:shadow-[0_10px_24px_rgba(7,94,84,0.24)]"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex items-center text-[#24af27] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="border-t border-[#f4f4f4] bg-white px-5 pb-5 pt-3 lg:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-[#666666]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-1 transition-colors hover:text-[#24af27]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#24af27] px-5 py-3 text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                Agendar consulta
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-white px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:pt-36"
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h1 className="font-heading text-4xl font-medium leading-[1.18] tracking-[-0.04em] text-[#333333] sm:text-5xl lg:text-[50px] lg:leading-[1.15]">
              Cuidar da sua saúde mental pode revolucionar sua vida e suas
              relações.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#666666] sm:text-xl">
              Mais de{" "}
              <strong className="font-semibold text-[#24af27]">
                <CounterUp to={28} />
              </strong>{" "}
              anos de experiência ajudando crianças, adolescentes e adultos a
              superarem desafios emocionais com um atendimento humanizado e
              eficaz.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN_PRIMARY}
              >
                <MessageCircle className="h-5 w-5" />
                Agendar minha consulta
              </a>
              <a href="#sobre" className={BTN_OUTLINE}>
                Conhecer o atendimento
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#666666]">
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#24af27] text-[#24af27]"
                  />
                ))}
              </span>
              <span>
                <CounterUp to={73} /> avaliações no Google
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[20px] shadow-[0_14px_10px_rgba(0,0,0,0.15)]">
              <img
                src="/psicologa/hero.jpg"
                alt="Psicóloga Juliana Ribeiro — atendimento em Fortaleza"
                className="aspect-[4/5] w-full object-cover object-[position:center_30%]"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-[10px] bg-[#24af27] px-6 py-4 text-white shadow-[0_10px_24px_rgba(7,94,84,0.24)]">
              <p className="font-heading text-3xl font-semibold leading-none">
                <CounterUp to={28} />
                <span className="text-xl">+</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/90">
                anos de experiência
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== MARQUEE DE PALAVRAS-CHAVE ===== */}
      <div className="overflow-hidden bg-[#24af27] py-4">
        <div className="flex w-max animate-[marquee_35s_linear_infinite]">
          {[...KEYWORDS, ...KEYWORDS].map((word, i) => (
            <span
              key={i}
              className="mx-5 inline-flex items-center gap-5 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              {word}
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            </span>
          ))}
        </div>
      </div>

      {/* ===== SOBRE MIM ===== */}
      <section id="sobre" className="bg-[#f5ebe0] px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp className="relative">
              <div className="overflow-hidden rounded-[20px] shadow-[0_14px_10px_rgba(0,0,0,0.15)]">
                <img
                  src="/psicologa/sobre-01.jpg"
                  alt="Psicóloga Juliana Ribeiro em seu consultório em Fortaleza"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 right-5 rounded-[10px] bg-[#cb997e] px-6 py-4 text-white shadow-[5px_5px_10px_rgba(0,0,0,0.18)]">
                <p className="font-heading text-3xl font-semibold leading-none">
                  <CounterUp to={28} />
                  <span className="text-xl">+</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/90">
                  anos de experiência
                </p>
              </div>
            </FadeUp>

            <div>
              <FadeUp>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#24af27]">
                  Sobre Mim
                </p>
                <h2 className="mt-3 font-heading text-3xl font-medium tracking-[-0.04em] text-[#333333] sm:text-[40px] sm:leading-[48px]">
                  Transformando Vidas com Cuidado e Profissionalismo
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-[#666666]">
                  <p>
                    Se você está enfrentando ansiedade, depressão, dificuldades
                    de relacionamento ou qualquer outro problema emocional, posso
                    te ajudar. Meu compromisso é te proporcionar um espaço
                    seguro, acolhedor e te oferecer o melhor suporte possível
                    para lidar com suas dores emocionais, para que você encontre
                    equilíbrio e bem-estar.
                  </p>
                  <p>
                    Não se trata apenas de desabafar, trata-se de construir um
                    caminho sólido e realista para que você aprenda a lidar com
                    suas emoções, pensamentos e comportamentos de maneira mais
                    saudável, equilibrada e assertiva.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 ${BTN_PRIMARY}`}
                >
                  <MessageCircle className="h-5 w-5" />
                  Agende agora a sua consulta
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POR QUE ESCOLHER ===== */}
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-medium tracking-[-0.04em] text-[#333333] sm:text-[40px] sm:leading-[48px]">
                Por que escolher a Psicóloga Juliana Ribeiro?
              </h2>
              <p className="mt-3 text-lg text-[#666666]">
                Cuidado humanizado, experiência e resultados reais.
              </p>
            </div>
          </FadeUp>
          <Stagger className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {WHY_US.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title} className="h-full">
                  <div className="flex h-full flex-col rounded-[20px] border border-[#f4f4f4] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(7,94,84,0.15)]">
                    <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#24af27]/10 text-[#24af27]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mb-2 font-heading text-xl font-medium tracking-[-0.02em] text-[#333333]">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#666666]">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
          <FadeUp delay={0.2}>
            <div className="mt-12 text-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN_PRIMARY}
              >
                <MessageCircle className="h-5 w-5" />
                Clique aqui para falar comigo
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section id="depoimentos" className="bg-[#f5ebe0] px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-medium tracking-[-0.04em] text-[#333333] sm:text-[40px] sm:leading-[48px]">
                O que meus pacientes dizem
              </h2>
              <p className="mt-3 text-lg text-[#666666]">
                Histórias Reais de Superação e Transformação
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-[#24af27]">
                Psicólogo Fortaleza | Juliana Fernandes Ribeiro Holanda | Online
                e Presencial
              </p>
            </div>
          </FadeUp>

          {/* Google rating */}
          <FadeUp delay={0.1}>
            <div className="mx-auto mb-12 flex max-w-lg flex-col items-center gap-4 rounded-[20px] border border-[#f4f4f4] bg-white p-6 shadow-[0_4px_10px_rgba(0,0,0,0.05)] sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#4285f4] font-heading font-semibold text-white">
                  G
                </span>
                <div>
                  <p className="flex items-center gap-1 font-semibold text-[#333333]">
                    <CounterUp to={4.9} />{" "}
                    <span className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#24af27] text-[#24af27]"
                        />
                      ))}
                    </span>
                  </p>
                  <p className="text-sm text-[#666666]">
                    <CounterUp to={73} /> avaliações no Google
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/search?q=psicologa+juliana+fernandes+ribeiro+holanda+fortaleza+avaliações"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] border-2 border-[#24af27] px-5 py-2 text-sm font-semibold text-[#24af27] transition-colors hover:bg-[#24af27] hover:text-white"
              >
                Escreva sua avaliação
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeUp>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <StaggerItem key={r.nome} className="h-full">
                <figure className="flex h-full flex-col rounded-[20px] border border-[#f4f4f4] bg-white p-6 shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(7,94,84,0.15)]">
                  <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-[#24af27] text-[#24af27]"
                      />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-base leading-relaxed text-[#666666]">
                    &ldquo;{r.texto}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-[#f4f4f4] pt-4">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                    >
                      {r.nome
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#333333]">
                        {r.nome}
                      </p>
                      <p className="text-xs text-[#666666]">{r.data}</p>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== PROBLEMAS TRABALHADOS ===== */}
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#24af27]">
                Sinais de alerta
              </p>
              <h2 className="mt-3 font-heading text-3xl font-medium tracking-[-0.04em] text-[#333333] sm:text-[40px] sm:leading-[48px]">
                Saiba identificar os sinais para dar o primeiro passo
              </h2>
              <p className="mt-3 text-lg text-[#666666]">
                Você passa por alguns desses problemas?
              </p>
            </div>
          </FadeUp>
          <Stagger className="mt-10 space-y-3">
            {PROBLEMS.map((p, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 rounded-[10px] border border-[#f4f4f4] bg-[#f5ebe0] px-6 py-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#24af27]" />
                  <p className="text-base leading-relaxed text-[#333333]">
                    {p}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.2}>
            <div className="mt-10 rounded-[20px] bg-[#24af27] p-8 text-center text-white shadow-[0_10px_24px_rgba(7,94,84,0.24)] sm:p-10">
              <h3 className="font-heading text-2xl font-medium tracking-[-0.02em]">
                Se identificou com algum desses pontos?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                Saiba que você não está sozinho(a) e que a terapia pode te ajudar
                a encontrar equilíbrio e bem-estar.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-10 py-4 text-base font-semibold text-[#24af27] transition-all hover:bg-[#f5ebe0] hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Clique aqui e fale comigo
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== MODALIDADES DE ATENDIMENTO ===== */}
      <section id="modalidades" className="bg-[#f5ebe0] px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-medium tracking-[-0.04em] text-[#333333] sm:text-[40px] sm:leading-[48px]">
                Comece sua jornada de mudança com terapia
              </h2>
              <p className="mt-3 text-lg text-[#666666]">
                Modalidades de Atendimento
              </p>
            </div>
          </FadeUp>
          <Stagger className="grid gap-8 md:grid-cols-3">
            {MODALIDADES.map((m) => {
              const Icon = m.icon;
              return (
                <StaggerItem key={m.title} className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-[#f4f4f4] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(7,94,84,0.15)]">
                    <div className="relative">
                      <img
                        src={m.img}
                        alt={`${m.title} — psicóloga Juliana Ribeiro`}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#24af27] text-white shadow-lg">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-heading text-xl font-medium tracking-[-0.02em] text-[#333333]">
                        {m.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[#24af27]">
                        {m.sub}
                      </p>
                      <p className="mt-3 flex-1 text-base leading-relaxed text-[#666666]">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
          <FadeUp delay={0.2}>
            <div className="mt-12 text-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN_PRIMARY}
              >
                <Phone className="h-5 w-5" />
                Quero marcar uma consulta
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-white px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <h2 className="mb-10 text-center font-heading text-3xl font-medium tracking-[-0.04em] text-[#333333] sm:text-[40px] sm:leading-[48px]">
              Dúvidas Frequentes
            </h2>
          </FadeUp>
          <Stagger className="space-y-3">
            {FAQ_DATA.map((item, i) => (
              <StaggerItem
                key={item.q}
                className="overflow-hidden rounded-[10px] border border-[#f4f4f4] bg-white"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-[#333333] transition-colors hover:bg-[#f5ebe0]/50 sm:text-lg"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                >
                  {item.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#24af27] transition-transform ${
                      faqOpen === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === i && (
                  <div className="border-t border-[#f4f4f4] px-6 py-4 text-base leading-relaxed text-[#666666]">
                    {item.a}
                  </div>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="bg-[#24af27] px-5 py-16 text-center sm:px-6 sm:py-24">
        <FadeUp>
          <div className="mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-[40px] sm:leading-[48px]">
              Entre em contato e dê o primeiro passo para sua transformação
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
              Se você sente que é hora de cuidar da sua saúde mental e encontrar
              mais equilíbrio na sua vida, estou aqui para te ajudar. Entre em
              contato e agende sua consulta agora mesmo!
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-10 py-4 text-base font-semibold text-[#24af27] transition-all hover:bg-[#f5ebe0] hover:shadow-2xl"
            >
              <MessageCircle className="h-5 w-5" />
              Clique aqui e agende sua consulta
            </a>
          </div>
        </FadeUp>
      </section>

      {/* ===== ENDEREÇO / CONTATO ===== */}
      <section id="contato" className="bg-[#f5ebe0] px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <h2 className="mb-12 text-center font-heading text-3xl font-medium tracking-[-0.04em] text-[#333333] sm:text-[40px] sm:leading-[48px]">
              Onde Atender
            </h2>
          </FadeUp>
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeUp delay={0.1}>
              <div className="h-full rounded-[20px] border border-[#f4f4f4] bg-white p-8 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#24af27]/10 text-[#24af27]">
                  <MapPin className="h-7 w-7" />
                </span>
                <h3 className="font-heading text-xl font-medium tracking-[-0.02em] text-[#333333]">
                  Atendimento Presencial em Fortaleza
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#666666]">
                  Av. Santos Dumont, 6740, andar M1, Cocó — Fortaleza
                </p>
                <div className="mt-6 overflow-hidden rounded-[10px] border border-[#f4f4f4]">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-38.4936%2C-3.7519%2C-38.4636%2C-3.7319&layer=mapnik&marker=-3.7419%2C-38.4786"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Mapa — Av. Santos Dumont, 6740, Cocó, Fortaleza"
                  />
                </div>
              </div>
            </FadeUp>

            <div className="flex flex-col gap-8">
              <FadeUp delay={0.15}>
                <div className="rounded-[20px] border border-[#f4f4f4] bg-white p-8 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#24af27]/10 text-[#24af27]">
                    <Monitor className="h-7 w-7" />
                  </span>
                  <h3 className="font-heading text-xl font-medium tracking-[-0.02em] text-[#333333]">
                    Atendimento Online
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#666666]">
                    Faça sua terapia de onde estiver, com a mesma qualidade e
                    acolhimento do presencial.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="rounded-[20px] bg-[#25d366] p-8 text-white shadow-[0_10px_24px_rgba(7,94,84,0.24)]">
                  <h3 className="font-heading text-xl font-medium tracking-[-0.02em]">
                    Agende sua consulta agora mesmo!
                  </h3>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-white/85"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp: (85) 99677-9228
                  </a>
                  <p className="mt-4 text-base text-white/90">
                    Resposta rápida e atendimento acolhedor.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[#f4f4f4] bg-white px-5 py-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#24af27] font-heading text-xl font-semibold text-white">
              J
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da psicóloga Juliana Ribeiro"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4f4f4] text-[#24af27] transition-colors hover:bg-[#24af27] hover:text-white"
              >
                <AtSign className="h-5 w-5" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da psicóloga Juliana Ribeiro"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4f4f4] text-[#24af27] transition-colors hover:bg-[#24af27] hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#contato"
                aria-label="Localização da psicóloga Juliana Ribeiro"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4f4f4] text-[#24af27] transition-colors hover:bg-[#24af27] hover:text-white"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-[#666666]">
              Copyright 2026 © Juliana F.R.Holanda — Todos os Direitos
              Reservados
            </p>
            <Link
              href="/como-posso-te-ajudar"
              className="text-sm text-[#666666] transition-colors hover:text-[#24af27]"
            >
              ← Voltar
            </Link>
          </div>
        </div>
      </footer>

      {/* ===== WHATSAPP FLUTUANTE ===== */}
      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_24px_rgba(7,94,84,0.24)] transition-all hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={26} />
      </motion.a>
    </main>
  );
}
