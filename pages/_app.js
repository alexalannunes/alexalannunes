import { ThemeProvider } from "@emotion/react"; // or styled-components

import withDarkMode from "next-dark-mode";
import "../styles/globals.css";

function MyApp({ Component, darkMode, pageProps }) {
  const { darkModeActive } = darkMode;

  return (
    <ThemeProvider theme={{ darkMode: darkModeActive }}>
      <Component {...pageProps} {...darkMode} />
    </ThemeProvider>
  );
}

export default withDarkMode(MyApp);
