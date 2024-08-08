import { Caveat, Roboto_Mono, Oswald } from "next/font/google";

export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  variable: "--font-caveat",
  adjustFontFallback: false,
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
  variable: "--font-roboto_mono",
  adjustFontFallback: false,
});

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  variable: "--font-oswald",
  adjustFontFallback: false,
});
