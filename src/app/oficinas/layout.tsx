import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Mecânica São Jorge | Mecânica e Elétrica Automotiva",
  description:
    "Oficina mecânica especializada em manutenção preventiva, correta e eletrônica automotiva em Pereiro, CE. Agende seu serviço pelo WhatsApp.",
};

export default function OficinasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
