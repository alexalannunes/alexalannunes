import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title:
    "Psicóloga Juliana Ribeiro | Fortaleza | Atendimento Online e Presencial",
  description:
    "Mais de 28 anos de experiência ajudando crianças, adolescentes e adultos a superarem desafios emocionais. Terapia online e presencial em Fortaleza. Agende sua consulta: (85) 99677-9228.",
  keywords: [
    "psicóloga fortaleza",
    "psicóloga online",
    "terapia fortaleza",
    "psicóloga juliana ribeiro",
    "terapia online e presencial",
    "psicólogo cocó fortaleza",
    "consulta psicóloga",
    "avaliação psicológica fortaleza",
  ],
  alternates: {
    canonical: "https://alexalannunes.com/psijulianaribeiro",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Psicóloga Juliana Ribeiro | Fortaleza",
    description:
      "Atendimento psicológico humanizado para crianças, adolescentes e adultos. Online e presencial em Fortaleza. Mais de 28 anos de experiência.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Juliana Fernandes Ribeiro Holanda",
      jobTitle: "Psicóloga Clínica",
      telephone: "+55 85 99677-9228",
      url: "https://alexalannunes.com/psijulianaribeiro",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Santos Dumont, 6740, andar M1, Cocó",
        addressLocality: "Fortaleza",
        addressRegion: "CE",
        addressCountry: "BR",
      },
      knowsAbout: [
        "Terapia Online",
        "Terapia Individual",
        "Avaliação Psicológica",
        "Ansiedade",
        "Depressão",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Atende por plano de saúde?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Realizo atendimento particular e, em muitos casos, é possível solicitar reembolso ao plano. Você verifica com o seu plano a cobertura e eu te oriento no processo.",
          },
        },
        {
          "@type": "Question",
          name: "Como funciona a terapia online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As sessões acontecem por videochamada, com a mesma qualidade da presencial. Basta estar em um ambiente tranquilo e com boa conexão à internet.",
          },
        },
        {
          "@type": "Question",
          name: "Qual a duração e frequência das sessões?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As sessões duram em média 50 minutos e a frequência habitual é semanal, combinada entre nós de acordo com o seu caso.",
          },
        },
        {
          "@type": "Question",
          name: "Como faço para agendar uma consulta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basta entrar em contato pelo WhatsApp (85) 99677-9228. A gente conversa, tira suas dúvidas e agenda o melhor horário para você.",
          },
        },
      ],
    },
  ],
};

export default function JulianaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="juliana-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={poppins.variable}>{children}</div>
    </>
  );
}
