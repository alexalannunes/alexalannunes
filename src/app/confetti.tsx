"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const GAP = 20;

export function ConfettiDemo() {
  const [size, setSize] = useState({ width: 500, height: 500 });

  const updateSize = () => {
    setSize({
      width: window.innerWidth - GAP,
      height: window.innerHeight - GAP,
    });
  };
  useEffect(() => {
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const { width, height } = size;

  return <Confetti width={width} height={height} recycle={false} />;
}
