import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. Camila Torres | Psicóloga | Demo",
  description:
    "Página de demonstração gerada com Pollinations.ai. Psicóloga clínica com atendimento online e presencial.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
