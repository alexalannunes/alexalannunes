import { useDarkMode } from "next-dark-mode";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { switchToDarkMode, switchToLightMode, darkModeActive } = useDarkMode();

  const toogleMode = (event) => {
    gtag("event", "toggle_theme", {
      event_label: "Toggle Theme",
      event_category: "theme",
    });
    event.target.checked ? switchToLightMode() : switchToDarkMode();
  };

  const isDarkClass = darkModeActive ? "dark" : "";

  return (
    <div className={`${styles.container} __app ${isDarkClass}`}>
      <Head>
        <title>Alex Alan Nunes</title>
        <meta name="description" content="Alex Alan Nunes' resume" />
        <meta
          name="google-site-verification"
          content="aEdmSv4Liad52ujAs70aLu_5IVpNmPWCcRTuAj34SjQ"
        />
        <meta
          name="theme-color"
          content={darkModeActive ? "#252526" : "#ffffff"}
        />
        <meta property="og:title" content="Alex Alan Nunes" />
        <meta property="og:type" content="image/jpeg" />
        <meta property="og:image:width" content="1563" />
        <meta property="og:image:height" content="1600" />
        <meta
          property="og:image"
          content="https://alexalannunes.vercel.app/images/eu-square.jpeg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="swicth-container">
          <label id="switch" className="switch">
            <input
              type="checkbox"
              onChange={toogleMode}
              id="slider"
              data-checked={!darkModeActive}
              checked={!darkModeActive}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className={styles.myImageContainer}>
          <Image
            className={styles.myImage}
            src="/images/eu-square.jpeg"
            alt="Alex Alan Nunes"
            width={100}
            height={100}
          />
        </div>

        <h1 className={styles.title}>Alex Alan Nunes</h1>

        <div className={styles.description}>
          Web Developer
          <p>
            <code className={styles.code}>
              <span className={styles.codeFunctionName}>welcome</span>
              <span className={styles.codeParentheses}>(</span>
              <span className={styles.codeString}>&quot;</span>
              <span>👋</span>
              <span className={styles.codeString}>&quot;</span>
              <span className={styles.codeParentheses}>)</span>
              <span className={styles.codeWhite}>;</span>
            </code>
          </p>
        </div>
      </main>
    </div>
  );
}
