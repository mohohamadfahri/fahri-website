import React from "react";
import styles from "./HeroText.module.css";
import { Sora } from "next/font/google";
import clsx from "clsx";

const sora = Sora({ subsets: ["latin"] });

export default function HeroText() {
  return (
    <h1
      className={clsx(
        styles.text,
        sora.className,
        "font-bold text-[56px] leading-[72px] mt-[94px]"
      )}
    >
      Hi Im Mohamad Fahri Kurniawan, a human with some ability to love Web
      Development and working on teamwork.
    </h1>
  );
}
