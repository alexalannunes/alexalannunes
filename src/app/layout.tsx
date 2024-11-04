import type { Metadata } from "next";
import { Inter } from "next/font/google";
import banner from "../../public/banner.png";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Alan Nunes",
  description: "Alex Alan Nunes' resume",
  openGraph: {
    type: "profile",
    title: "Alex Alan Nunes",
    description: "Alex Alan Nunes' resume",
    images: [
      {
        url: banner.src,
        width: banner.width,
        height: banner.height,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "google-site-verification": "Vnht8PbV56vUqh0YJU6J-XFIMkV8ddx6jltej9uGsXo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="gtag_src"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-69JW2S14P2"
        />
        <Script
          id="gtag_init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-69JW2S14P2');
          `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
