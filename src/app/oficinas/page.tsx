"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Wrench,
  Zap,
  Thermometer,
  Gauge,
  Calendar,
  DollarSign,
  ShieldCheck,
  Search,
  MapPin,
  Clock,
  MessageCircle,
  Star,
  ChevronRight,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import WhatsAppPreview from "./whatsapp-preview";

const SERVICOS = [
  {
    icon: Wrench,
    title: "Mecânica Geral",
    desc: "Troca de óleo, filtros, freios, suspensão, motor e revisão completa.",
  },
  {
    icon: Zap,
    title: "Elétrica Automotiva",
    desc: "Diagnóstico eletrônico, alternador, partida, injetora e fiação elétrica.",
  },
  {
    icon: Thermometer,
    title: "Ar-Condicionado",
    desc: "Higienização, recarga de gás, limpeza do evaporador e manutenção completa.",
  },
  {
    icon: Gauge,
    title: "Alinhamento e Balanceamento",
    desc: "Alinhamento 3D, balanceamento de rodas e cambagem. Equipamento de última geração.",
  },
] as const;

const EQUIPE = [
  {
    nome: "João Pereira",
    funcao: "Fundador & Mecânico Chefe",
    bg: "bg-red-700",
    img: "/oficina/mecanico-01.jpg",
  },
  {
    nome: "Carlos Oliveira",
    funcao: "Eletricista Automotivo",
    bg: "bg-red-600",
    img: "/oficina/mecanico-02.jpg",
  },
  {
    nome: "Pedro Santos",
    funcao: "Mecânico de Suspensão",
    bg: "bg-red-500",
    img: "/oficina/mecanico-03.jpg",
  },
] as const;

const DIFERENCIAIS = [
  {
    icon: Calendar,
    title: "20 anos de estrada",
    desc: "Desde 2005 atendendo a região. Mais de 10 mil carros reparados.",
  },
  {
    icon: DollarSign,
    title: "Orçamento sem surpresa",
    desc: "Você autoriza antes de qualquer serviço. O que combinamos é o que você paga.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia em todo serviço",
    desc: "Se apresentar problema dentro do prazo, a gente resolve sem custo.",
  },
  {
    icon: Search,
    title: "Diagnóstico eletrônico",
    desc: "Scanner profissional que identifica problemas com precisão.",
  },
] as const;

const DEPOIMENTOS = [
  {
    nome: "Marcos Silva",
    carro: "Toyota Corolla 2018",
    texto:
      "Levei o carro com um barulho estranho no motor. O João identificou na hora e resolveu no mesmo dia. Preço justo e confiança total.",
  },
  {
    nome: "Ana Costa",
    carro: "Honda Civic 2020",
    texto:
      "O ar-condicionado parou de gelar no meio do verão. Fizeram a recarga e limpeza em 2 horas. Atendimento nota 10.",
  },
  {
    nome: "Rafael Oliveira",
    carro: "Fiat Toro 2021",
    texto:
      "Sempre troco o óleo aqui. A equipe explica tudo e nunca tenta empurrar serviço desnecessário. Recomendo de olhos fechados.",
  },
] as const;

const HORARIOS = [
  { dia: "Seg a Sex", horario: "07h30 às 18h" },
  { dia: "Sábado", horario: "08h às 12h" },
  { dia: "Dom/Feriados", horario: "Fechado" },
] as const;

const GALERIA = [
  {
    src: "/oficina/hero.jpg",
    alt: "Fachada da oficina",
    legenda: "Fachada da Auto Mecânica São Jorge",
  },
  {
    src: "/oficina/por-dentro.jpg",
    alt: "Área interna",
    legenda: "Área interna ampla e equipada",
  },
  {
    src: "/oficina/carro-elevador.jpg",
    alt: "Carro no elevador",
    legenda: "Carro sendo revisado",
  },
  {
    src: "/oficina/moto.jpg",
    alt: "Moto na oficina",
    legenda: "Atendemos carros e motos",
  },
  {
    src: "/oficina/scanner-automativo.jpg",
    alt: "Scanner automotivo",
    legenda: "Diagnóstico eletrônico de precisão",
  },
  {
    src: "/oficina/equipe.jpg",
    alt: "Equipe da oficina",
    legenda: "Nossa equipe técnica",
  },
] as const;

export default function Oficinas() {
  const [servicoSel, setServicoSel] = useState("");
  const [veiculoSel, setVeiculoSel] = useState("");
  const [diaSel, setDiaSel] = useState("");
  const [galeriaApi, setGaleriaApi] = useState<CarouselApi>();
  const [galeriaSlide, setGaleriaSlide] = useState(0);

  useEffect(() => {
    if (!galeriaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGaleriaSlide(galeriaApi.selectedScrollSnap());
    galeriaApi.on("select", () => {
      setGaleriaSlide(galeriaApi.selectedScrollSnap());
    });
  }, [galeriaApi]);

  return (
    <main>
      {/* WhatsApp flutuante */}
      <a
        href="#"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/oficina/hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>
        <div className="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-6 py-5">
          <span className="text-lg font-bold tracking-tight text-white">
            <span className="text-red-400">Mec.</span>São Jorge
          </span>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#servicos" className="transition-colors hover:text-white">
              Serviços
            </a>
            <a href="#agendar" className="transition-colors hover:text-white">
              Agendar
            </a>
            <a href="#local" className="transition-colors hover:text-white">
              Local
            </a>
          </nav>
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center text-white">
          <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-200">
            Mecânica de confiança desde 2005
          </span>
          <h1 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
            Auto Mecânica
            <br />
            <span className="text-red-400">São Jorge</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base text-white/80 sm:text-lg">
            Mecânica geral e elétrica automotiva em Pereiro, CE. Carros e motos.
            Orçamento sem compromisso. Atendimento rápido e transparente.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-sm bg-red-500 px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-red-400"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <a
              href="#agendar"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-white/10"
            >
              Agendar serviço
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="bg-white px-5 py-20 dark:bg-neutral-950"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Nossos serviços
            </h2>
            <p className="mt-3 max-w-lg text-base text-gray-500 dark:text-gray-400">
              De revisão simples a diagnósticos complexos. Seu carro em boas
              mãos.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {SERVICOS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="border-l-4 border-red-600 bg-gray-50 pl-5 pr-6 py-5 dark:bg-neutral-900"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center bg-red-600 text-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="mb-1.5 text-lg font-bold">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="bg-gray-50 px-5 py-20 dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Conheça nossa equipe
            </h2>
            <p className="mt-3 max-w-lg text-base text-gray-500 dark:text-gray-400">
              Quem cuida do seu carro com experiência e dedicação.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6 sm:gap-8">
            {EQUIPE.slice(0, 2).map((p) => (
              <div key={p.nome} className="text-center">
                <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full">
                  <Avatar className="h-full w-full">
                    <AvatarImage
                      src={p.img}
                      alt={p.nome}
                      className="aspect-square h-full w-full object-cover"
                    />
                    <AvatarFallback className={`text-2xl text-white ${p.bg}`}>
                      {p.nome
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-lg font-bold">{p.nome}</h3>
                <p className="text-sm text-red-600 dark:text-red-400">
                  {p.funcao}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center sm:mt-8">
            {EQUIPE.slice(2, 3).map((p) => (
              <div key={p.nome} className="text-center">
                <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full">
                  <Avatar className="h-full w-full">
                    <AvatarImage
                      src={p.img}
                      alt={p.nome}
                      className="aspect-square h-full w-full object-cover"
                    />
                    <AvatarFallback className={`text-2xl text-white ${p.bg}`}>
                      {p.nome
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-lg font-bold">{p.nome}</h3>
                <p className="text-sm text-red-600 dark:text-red-400">
                  {p.funcao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA DE FOTOS */}
      <section className="bg-white px-5 py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Nosso Espaço
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-gray-500 dark:text-gray-400">
              Veja nossa estrutura e conheça o trabalho da São Jorge.
            </p>
          </div>
          <div className="relative mx-auto max-w-3xl">
            <Carousel setApi={setGaleriaApi} className="w-full">
              <CarouselContent>
                {GALERIA.map((foto) => (
                  <CarouselItem key={foto.alt}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-neutral-900">
                      <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${foto.src})` }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-12">
                        <p className="text-sm font-medium text-white">
                          {foto.legenda}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 h-10 w-10 border-0 bg-white/90 text-gray-900 shadow-md hover:bg-white" />
              <CarouselNext className="right-3 h-10 w-10 border-0 bg-white/90 text-gray-900 shadow-md hover:bg-white" />
            </Carousel>
            <div className="mt-5 flex items-center justify-center gap-2">
              {GALERIA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => galeriaApi?.scrollTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === galeriaSlide
                      ? "w-7 bg-red-600"
                      : "w-2.5 bg-gray-300 dark:bg-neutral-700"
                  }`}
                  aria-label={`Ir para foto ${i + 1}`}
                />
              ))}
            </div>
            <p className="mt-2 text-center text-xs text-gray-400">
              {galeriaSlide + 1} / {GALERIA.length}
            </p>
          </div>
        </div>
      </section>

      {/* VÍDEOS */}
      <section className="bg-gray-50 px-5 py-20 dark:bg-neutral-900">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Mão na massa
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-gray-500 dark:text-gray-400">
              Veja na prática como trabalhamos.
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
            {["jJPu2-ViTeg", "ZZJYFy24ZnE", "-m3EtUHW570", "vt6lMotOjXk"].map(
              (id) => (
                <div key={id} className="shrink-0 snap-center">
                  <iframe
                    width="270"
                    height="480"
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{ borderRadius: 10, border: "3px solid #333" }}
                    allowFullScreen
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-slate-900 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Por que a São Jorge?
            </h2>
            <p className="mt-3 max-w-lg text-base text-red-200/70">
              4 motivos pra confiar seu carro à nossa equipe.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {DIFERENCIAIS.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="border border-white/10 bg-white/5 px-6 py-6 transition-colors hover:bg-white/10"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center bg-red-500 text-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="mb-1.5 text-lg font-bold text-white">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-red-100/70">
                    {d.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AGENDE */}
      <section id="agendar" className="bg-white px-5 py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Agende seu serviço
            </h2>
            <p className="mt-3 max-w-lg text-base text-gray-500 dark:text-gray-400">
              Preencha os dados. A gente confirma o horário por WhatsApp.
            </p>
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            {/* Formulário */}
            <div className="border border-gray-200 bg-white px-6 py-7 dark:border-neutral-800 dark:bg-neutral-950">
              <h3 className="mb-6 text-xl font-bold">Dados do agendamento</h3>
              <div className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Serviço desejado
                  </label>
                  <select
                    value={servicoSel}
                    onChange={(e) => setServicoSel(e.target.value)}
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-red-400"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Troca de óleo">Troca de óleo</option>
                    <option value="Revisão geral">Revisão geral</option>
                    <option value="Ar-Condicionado">Ar-Condicionado</option>
                    <option value="Elétrica">Elétrica</option>
                    <option value="Alinhamento e Balanceamento">
                      Alinhamento e Balanceamento
                    </option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Tipo de veículo
                  </label>
                  <select
                    value={veiculoSel}
                    onChange={(e) => setVeiculoSel(e.target.value)}
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-red-400"
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="Carro de passeio">Carro de passeio</option>
                    <option value="SUV">SUV</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Moto">Moto</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Dia preferido
                  </label>
                  <input
                    type="date"
                    value={diaSel}
                    onChange={(e) => setDiaSel(e.target.value)}
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-red-400"
                  />
                </div>
                <a
                  href="#"
                  className={`flex w-full items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-base font-bold text-white transition-all ${
                    servicoSel && veiculoSel && diaSel
                      ? "bg-red-600 hover:bg-red-500"
                      : "cursor-not-allowed bg-gray-400"
                  }`}
                >
                  <MessageCircle size={18} />
                  Agendar agora
                </a>
              </div>
            </div>

            {/* Preview WhatsApp */}
            <div className="flex flex-col items-center">
              <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                Preview da mensagem:
              </p>
              <WhatsAppPreview
                servico={servicoSel}
                veiculo={veiculoSel}
                dia={diaSel}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-gray-50 px-5 py-20 dark:bg-neutral-900">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Quem já conhece, confia
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-gray-500 dark:text-gray-400">
              O que nossos clientes falam da São Jorge.
            </p>
          </div>
          <div className="space-y-6">
            {DEPOIMENTOS.map((d) => (
              <div
                key={d.nome}
                className="border-l-4 border-red-600 bg-white px-6 py-6 dark:bg-neutral-950"
              >
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;{d.texto}&rdquo;
                </p>
                <div className="text-sm">
                  <span className="font-bold">{d.nome}</span>
                  <span className="text-gray-400"> &middot; </span>
                  <span className="text-gray-500">{d.carro}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONDE ESTAMOS + MAPA */}
      <section id="local" className="bg-white px-5 py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Onde estamos
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center gap-2 text-red-600">
                  <MapPin size={18} />
                  <h3 className="text-base font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                    Endereço
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  Av. Brigadeiro Faria Lima, 3477
                  <br />
                  Itaim Bibi, São Paulo, SP
                  <br />
                  04538-133
                </p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 text-red-600">
                  <Clock size={18} />
                  <h3 className="text-base font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                    Horários
                  </h3>
                </div>
                <div className="space-y-2">
                  {HORARIOS.map((h) => (
                    <div
                      key={h.dia}
                      className="flex items-center justify-between border-b border-gray-100 py-2 dark:border-neutral-800"
                    >
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {h.dia}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {h.horario}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Av.+Brigadeiro+Faria+Lima,+3477,+Itaim+Bibi,+S%C3%A3o+Paulo,+SP/@-23.587516,-46.6832722,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-red-600 px-5 py-3 text-sm font-bold text-red-600 transition-all hover:bg-red-600 hover:text-white"
              >
                <MapPin size={16} />
                Abrir no Google Maps
              </a>
            </div>
            <div className="overflow-hidden border border-gray-200 dark:border-neutral-800">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6932722,-23.597516,-46.6732722,-23.577516&layer=mapnik&marker=-23.587516,-46.6832722"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa da oficina"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-900 px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Seu carro merece um mecânico de confiança
          </h2>
          <p className="mb-10 text-base text-white/70">
            Não deixe seu carro na mão de qualquer um. Fala com a gente no
            WhatsApp e a gente resolve.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-sm bg-red-500 px-8 py-4 text-base font-bold text-white transition-all hover:bg-red-400"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-5 py-8 text-center text-sm text-gray-400 dark:border-neutral-800 dark:bg-neutral-950">
        <p className="mb-2">
          Auto Mecânica São Jorge &middot; CNPJ: 00.000.000/0001-00
        </p>
        <Link
          href="/como-posso-te-ajudar"
          className="inline-flex items-center gap-1 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
        >
          ← Voltar
        </Link>
      </footer>
    </main>
  );
}
