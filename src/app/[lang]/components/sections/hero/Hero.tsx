import Image from "next/image";
import Carousel from "./Carousel";
import Link from "next/link";
import Circle from "../../circle";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";
import Date from "./Date";
import Offers from "./Offers";

const Hero = async ({ lang }: { lang: Locale }) => {
  const { home } = await getDictionary(lang);

  return (
    <div id="home" className="relative h-screen">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.instagram.com/aricocaveexperience/"}
        id="box"
        className="fixed top-16 md:top-auto right-8 md:bottom-16 md:right-16 z-[120] cursor-pointer"
      >
        <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-full p-[1px] backdrop-blur-3xl">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fdffe5_0%,#ef9100_50%,#f7ff9e_100%)]" />

          <Image
            className="inline-flex h-full w-full items-center justify-center rounded-full bg-gray-950 p-2 text-sm font-medium text-gray-50 backdrop-blur-3xl"
            src={"/insta-icon.svg"}
            height={100}
            width={100}
            alt="rotate-axis"
          />
        </div>
      </a>

      <Circle
        color="border-yellow-600"
        position="fixed"
        z="z-[100]"
        className={
          "h-28 w-28 md:h-44 md:w-44 border-[25px] md:border-[32px] border-yellow-600 -translate-x-12 -translate-y-12 md:-translate-x-20 md:-translate-y-20"
        }
      />

      <Link href={`/${lang}`}>
        <Image
          className="fixed z-[100] top-4 left-[30px] md:top-6 md:left-32 md:h-40 md:w-36 rounded-2xl"
          src="/perseidas-white-logo.png"
          alt="logo perseida"
          width={80}
          height={100}
          quality={100}
        />
      </Link>
      <div className="fixed z-[55] top-5 left-11 md:top-8 md:left-40 h-20 w-14 md:h-36 md:w-[90px] backdrop-blur-sm bg-black/20 blur-md rounded-xl overflow-hidden"></div>

      <Carousel />

      <div className="absolute z-50 h-screen w-full flex flex-col gap-4 items-center justify-center md:justify-end pb-24">
        <Image
          src={"/perseidas-h1.png"}
          alt="perseidas h1"
          height={200}
          width={650}
          className="h-[200px] w-[350px] md:h-[400px] md:w-[680px]"
        />

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.fourvenues.com/arico-cave-experience1/BFQT"}
          className="shadow-md hover:shadow-[#ef9100] transition-shadow duration-300 relative inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fff8a6_0%,#ef9100_50%,#fff8a6_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
            {home.button.toUpperCase()}
          </span>
        </a>

        <Offers />
        <Date />
      </div>
    </div>
  );
};

export default Hero;
