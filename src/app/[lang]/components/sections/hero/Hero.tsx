import Image from "next/image";
import Carousel from "./Carousel";
import H1hero from "./H1hero";
import Link from "next/link";
import Circle from "../../circle";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";
import Subh1 from "./Subh1";
import Date from "./Date";
import Offers from "./Offers";

const Hero = async ({ lang }: { lang: Locale }) => {
  const { home } = await getDictionary(lang);

  return (
    <div id="home" className="relative h-screen">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.koala360.com/tour?id=10226"}
        id="box"
        className="fixed top-16 md:top-auto right-8 md:bottom-16 md:right-16 z-[120] cursor-pointer"
      >
        <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-2xl p-[1px] backdrop-blur-3xl">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f7ff9e_0%,#847e05_50%,#f7ff9e_100%)]" />

          <Image
            className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-gray-950 p-2 text-sm font-medium text-gray-50 backdrop-blur-3xl"
            src={"/rotate-axis.svg"}
            height={100}
            width={100}
            alt="rotate-axis"
          />
        </div>
      </a>

      <Circle
        color="border-red-600"
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
      <div className="fixed z-[55] top-4 left-[68px] md:top-8 md:left-32 h-12 w-14 md:h-16 md:w-[90px] backdrop-blur-sm bg-black/20 blur-md rounded-2xl overflow-hidden"></div>

      <Carousel />

      <div className="absolute z-50 h-screen w-full flex flex-col gap-4 items-center justify-center md:justify-end pb-24">
        {/* <div className="flex flex-col items-center relative">
          <H1hero text={home.h1} />
          <Subh1 />
        </div> */}

        <Image
          src={"/perseidas-h1.png"}
          alt="perseidas h1"
          height={200}
          width={650}
          className="h-[200px] w-[350px] md:h-[400px] md:w-[650px]"
        />

        <Link
          href={`/${lang}/confirm`}
          className="shadow-md hover:shadow-yellow-600 transition-shadow duration-300 relative inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fff8a6_0%,#b3b520_50%,#fff8a6_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
            {home.button.toUpperCase()}
          </span>
        </Link>

        <Offers />
        <Date />
      </div>
    </div>
  );
};

export default Hero;
