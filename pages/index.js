import { useDarkMode } from "next-dark-mode";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

// refs
// https://github.com/xeoneux/next-dark-mode

export default function Home() {
  const { switchToDarkMode, switchToLightMode, darkModeActive } = useDarkMode();
  const [isLight, setIsLight] = useState(!darkModeActive);

  useEffect(() => {
    document.body.className = darkModeActive ? "dark" : "";
  }, [darkModeActive]);

  const tes = (event) => {
    event.target.checked ? switchToLightMode() : switchToDarkMode();
    setIsLight(event.target.checked);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Alan Nunes</title>
        <meta name="description" content="My simple resume" />
        <meta
          name="google-site-verification"
          content="aEdmSv4Liad52ujAs70aLu_5IVpNmPWCcRTuAj34SjQ"
        />
        <meta
          name="theme-color"
          content={darkModeActive ? "#252526" : "#ffffff"}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="swicth-container">
          <label id="switch" className="switch">
            <input
              type="checkbox"
              onChange={tes}
              id="slider"
              data-checked={isLight}
              checked={isLight}
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
