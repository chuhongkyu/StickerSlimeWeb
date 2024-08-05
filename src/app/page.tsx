import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by Your Phone
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://litt.ly/mr_chu"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <picture>
            <source srcSet="/assets/images/profile/mrchu.webp" type="image/webp" />
            <img
              src="/assets/images/profile/mrchu.jpeg"
              alt="Mr. Chu"
              className="dark:invert"
              width={40}
              height={40}
            />
          </picture>
        </a>

        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/images/main/main_icon.png"
          alt="sticker slime app"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className="mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <div className="flex justify-center gap-5">
          <a className="btn pulse-hover" href="">
            <img width="230" src="/assets/images/button/button_download_android.png" alt="Google Play에서 무료 다운로드"/>
          </a>
          <a className="btn pulse-hover" href="">
            <img width="230" src="/assets/images/button/button_download_ios.png" alt="앱 스토어에서 무료 다운로드"/>
          </a>
        </div>
      </div>
    </main>
  );
}
