"use client";

import { oswald } from "@/app/[lang]/fonts";
import { cn } from "@/lib/utils";
import { useDictionary } from "@/providers/DictionaryProvider";

const H1Carousel = () => {
  const { enjoy } = useDictionary();

  return (
    <h1 className={cn(oswald.variable, "font-oswald text-center text-3xl md:text-5xl font-semibold text-white")}>
      {enjoy.h1.span1} <span className="text-[#ef9100]">{enjoy.h1.span2}</span> {enjoy.h1.span3}
    </h1>
  );
};

export default H1Carousel;
