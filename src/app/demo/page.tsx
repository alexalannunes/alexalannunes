import Link from "next/link";

const NAV = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Demo() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#3D3D3D]">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 border-b border-[#EDE5DC]/60 bg-[#FAF7F2]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#topo" className="font-serif text-lg font-bold text-[#7A8B6B]">
            Dra. Camila Torres
          </a>
          <nav className="flex items-center gap-5 text-sm font-medium text-[#5C5C5C]">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-[#7A8B6B]">
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="rounded-full bg-[#7A8B6B] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#6B7F5E]"
            >
              Agendar
            </a>
          </nav>
        </div>
      </header>

      {/* ===== 1. HERO ===== */}
      <section id="topo" className="relative flex min-h-[80vh] items-center overflow-hidden">
        <img
          src="/demo/hero.jpg"
          alt="Psicóloga em consultório aconchegante"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/80">
            Psicóloga Clínica · CRP 06/000000
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white drop-shadow sm:text-5xl">
            Um espaço seguro pra você se reencontrar
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Atendimento online e presencial pra quem quer viver com mais leveza e
            autoconhecimento.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-block rounded-full bg-[#C9A96E] px-10 py-4 text-sm font-bold tracking-widest text-white transition-all hover:scale-105 hover:bg-[#B8944A]"
          >
            AGENDE SEU HORÁRIO
          </a>
        </div>
      </section>

      {/* ===== 2. SOBRE ===== */}
      <section id="sobre" className="bg-white px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[20px_300px_20px_400px] md:w-5/12">
            <img
              src="/demo/sobre.jpg"
              alt="Retrato da psicóloga Camila Torres"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="md:w-7/12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#C9A96E]">Sobre mim</p>
            <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
              Dra. Camila Torres
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#5C5C5C]">
              <p>
                Sou psicóloga clínica e atendo adultos e adolescentes há mais de 8
                anos. Acredito que cada pessoa carrega a capacidade de se curar —
                meu papel é criar um espaço acolhedor pra que isso aconteça.
              </p>
              <p>
                Meu trabalho parte do aqui e agora: entender o que você vive, o que
                sente e o que precisa pra seguir. Sem julgamento, no seu ritmo.
              </p>
              <p className="font-semibold text-[#3D3D3D]">
                A terapia é pra quem quer se ouvir. E eu estou aqui pra te ajudar
                nessa escuta.
              </p>
            </div>
            <a
              href="#contato"
              className="mt-6 inline-block rounded-full bg-[#7A8B6B] px-8 py-3 text-sm font-bold tracking-widest text-white transition-all hover:bg-[#6B7F5E]"
            >
              ENTRE EM CONTATO
            </a>
          </div>
        </div>
      </section>

      {/* ===== 3. SERVIÇOS ===== */}
      <section id="servicos" className="bg-[#F3EDE3] px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#C9A96E]">Serviços</p>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Como funciona</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="/demo/sessao.jpg"
                  alt="Sessão de terapia presencial"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-[#7A8B6B]">Atendimento Presencial</h3>
                <p className="text-sm leading-relaxed text-[#5C5C5C]">
                  Sessões em consultório, num ambiente pensado pra você se sentir
                  à vontade. Duração média de 50 minutos, com encontros semanais.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="/demo/online.jpg"
                  alt="Sessão de terapia online por videochamada"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-[#7A8B6B]">Atendimento Online</h3>
                <p className="text-sm leading-relaxed text-[#5C5C5C]">
                  Pra todo o Brasil, por videochamada. Mesmo cuidado, mesma
                  escuta — no conforto de onde você estiver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. CONTATO ===== */}
      <section id="contato" className="bg-white px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#C9A96E]">Contato</p>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Vamos conversar?</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-[#5C5C5C]">
              Me chama no WhatsApp ou preencha o formulário. A primeira conversa é
              sem compromisso.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl md:aspect-auto">
              <img
                src="/demo/consultorio.jpg"
                alt="Recepção do consultório"
                className="h-full w-full object-cover"
              />
            </div>
            <form className="space-y-4 rounded-2xl bg-[#FAF7F2] p-6 sm:p-8">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#5C5C5C]">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-[#EDE5DC] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#7A8B6B]"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#5C5C5C]">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-[#EDE5DC] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#7A8B6B]"
                  placeholder="(88) 99999-9999"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#5C5C5C]">
                  Mensagem
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-[#EDE5DC] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#7A8B6B]"
                  placeholder="Conte um pouco do que te traz até aqui..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#7A8B6B] px-8 py-3 text-sm font-bold tracking-widest text-white transition-all hover:bg-[#6B7F5E]"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[#EDE5DC] bg-[#FAF7F2] px-5 py-8 text-center text-sm text-[#8B7D6B]">
        <p>Dra. Camila Torres · CRP 06/000000 · Página de demonstração gerada com IA</p>
        <Link href="/" className="mt-2 inline-block text-[#7A8B6B] hover:text-[#6B7F5E]">
          ← Voltar para o início
        </Link>
      </footer>
    </main>
  );
}
