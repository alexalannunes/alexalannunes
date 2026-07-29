import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana Fernandes | Psicóloga | Gestalt-Terapia | Atendimento Online e Presencial",
  description:
    "Psicóloga clínica especializada em Gestalt-Terapia. Atendimento online para todo o Brasil e presencial em Pereiro, CE. Autoestima, relacionamentos e desenvolvimento pessoal.",
  openGraph: {
    title: "Ana Fernandes | Psicóloga",
    description:
      "Atendimento psicológico online e presencial com abordagem Gestalt-Terapia.",
    type: "website",
  },
};

export default function PsicologosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
