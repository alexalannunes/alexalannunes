import { ThemeProvider } from "@emotion/react"; // or styled-components

import withDarkMode from "next-dark-mode";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, darkMode, pageProps }) {
  const { darkModeActive } = darkMode;

  return (
    <>
      <ThemeProvider theme={{ darkMode: darkModeActive }}>
        <Component {...pageProps} {...darkMode} />
      </ThemeProvider>
      <Script
        id="gtag_src"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-69JW2S14P2"
      />
      <Script
        id="gtag_init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-69JW2S14P2');
          `,
        }}
      />
    </>
  );
}

export default withDarkMode(MyApp);
