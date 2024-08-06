import { Caveat, Roboto_Mono } from "next/font/google";

export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  variable: "--font-caveat",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
  variable: "--font-roboto_mono",
});
