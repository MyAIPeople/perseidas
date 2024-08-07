import type { Metadata } from "next";
import "./globals.css";

import { Locale, i18n } from "@/configs/i18n.config";
import DictionaryProvider from "@/providers/DictionaryProvider";
import { getDictionary } from "@/configs/dictionary";
import { caveat, oswald, roboto_mono } from "./fonts";

export const metadata: Metadata = {
  title: "Perseidas",
  description: "Perseidas",
  keywords: ["Perseidas", "GoMA"],
  authors: [{ name: "Karen" }],
  creator: "Karen",
  openGraph: {
    title: "Perseidas",
    description: "Perseidas",
    url: "https://perseidas.vercel.app",
    siteName: "ArtGoMA",
    images: [
      {
        url: "https://perseidas.vercel.app/logo-perseidas.png",
        width: 600,
        height: 600,
        alt: "Perseidas",
      },
    ],
    type: "website",
    locale: "es",
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html className="scroll-smooth" lang={params.lang}>
      <body className={roboto_mono.variable}>
        <DictionaryProvider dictionary={dictionary}>{children}</DictionaryProvider>
      </body>
    </html>
  );
}
