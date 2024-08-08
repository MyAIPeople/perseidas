import H2GetInspired from "./H2GetInspired";
import GetInspiredText from "./GetInspiredText";
import GetInspiredCallToAction from "./GetInspiredCallToAction";
import Circle from "../../circle";
import Image from "next/image";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";
import { cn } from "@/lib/utils";
import { oswald } from "@/app/[lang]/fonts";
import { Meteors } from "./meteors";

const GetInspired = async ({ lang }: { lang: Locale }) => {
  const { inspire } = await getDictionary(lang);

  return (
    <div
      id="about"
      className={cn(oswald.variable, "relative flex flex-col justify-center overflow-x-hidden bg-gray-900")}
    >
      <div className="absolute overflow-hidden h-full w-screen z-0 backdrop-blur-sm bg-black/40 shadow-lg">
        <Meteors number={20} />
      </div>

      <Circle
        color="border-yellow-600"
        position="absolute"
        z="z-40"
        className={"h-28 w-28 md:h-52 md:w-52 border-[25px] md:border-[32px] border-yellow-600 -translate-x-10"}
      />
      <Circle
        color="border-yellow-600"
        position="absolute"
        z="z-40"
        className={
          "h-16 w-16 md:h-20 md:w-20 border-[18px] md:border-[20px] border-yellow-600 translate-x-20 md:translate-x-64 opacity-35"
        }
      />

      <div className="relative z-20 text-center pt-16 md:pt-32 pb-8 md:pb-16">
        <H2GetInspired text={inspire.h1} />
      </div>
      <div className="relative z-40 flex flex-wrap px-4 md:px-16 lg:px-32">
        <GetInspiredText text={inspire.text} />
        <GetInspiredCallToAction text={inspire.caption} />
      </div>
    </div>
  );
};

export default GetInspired;
