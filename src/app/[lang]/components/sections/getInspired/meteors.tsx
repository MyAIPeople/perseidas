"use client";

import { cn } from "@/lib/utils";

export const Meteors = ({ number, className }: { number?: number; className?: string }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute rounded-[9999px] rotate-180",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[100%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#dceb9e] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
