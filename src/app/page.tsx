import { MainRepositories } from "@/components/main-repositories";
import Image from "next/image";
import { ConfettiDemo } from "./confetti";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 pb-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">(Alex Alan Nunes).tsx</code>
        </p>
      </div>

      <ConfettiDemo />

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative  rounded-full border-4 p-1 border-cyan-500 drop-shadow-md dark:border-white dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/alexalannunes.jpg"
          alt="Alex Alan Nunes"
          width={180}
          height={180}
          priority
        />
      </div>

      <MainRepositories />
    </main>
  );
}