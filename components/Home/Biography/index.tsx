import Image from "next/image";
import { Sora, Inter } from "next/font/google";
import clsx from "clsx";
import styles from "./Biography.module.css";

const sora = Sora({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Biography() {
  return (
    <div className={clsx("mt-[69px] flex gap-[35px]", sora.className)}>
      <div className="h-[155px] aspect-square border rounded-full flex relative shrink-0">
        <div className="w-[120px] h-[120px] relative m-auto translate-y-2 -translate-x-2">
          <Image
            fill
            alt=""
            sizes="(max-width: 768px): 100vw, 33vw"
            src="/assets/avatar-man.svg"
            className="inset-0"
          />
        </div>
        <Image
          fill
          alt=""
          sizes="(max-width: 768px): 100vw, 33vw"
          src="/assets/avatar-border.svg"
          className="inset-0"
        />
      </div>
      <div className="w-[50%] shrink-0">
        <h1 className="text-2xl leading-[72px] font-bold">Biography</h1>
        <p className={clsx("text-[#D6D6D6] leading-[32px]", inter.className)}>
          Getting Buff +1 for learning, Buff +2 for documentation and more buff
          on managing team. Exicited on{" "}
          <span className={styles.react}>React</span>,{" "}
          <span className={styles.ux}>UX Research</span> and{" "}
          <span className={styles.agile}>Agile</span>.
        </p>
      </div>
      <div>
        <h1 className="text-2xl leading-[72px] font-bold">{`Let's Connect`}</h1>
        <div className="flex gap-[17px]">
          <div className="h-[32px] aspect-square relative">
            <Image
              fill
              alt=""
              sizes="(max-width: 768px): 100vw, 33vw"
              src="/assets/instagram.svg"
            />
          </div>
          <div className="h-[32px] aspect-square relative">
            <Image
              fill
              alt=""
              sizes="(max-width: 768px): 100vw, 33vw"
              src="/assets/twitter.svg"
            />
          </div>
          <div className="h-[32px] aspect-square relative">
            <Image
              fill
              alt=""
              sizes="(max-width: 768px): 100vw, 33vw"
              src="/assets/facebook.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
