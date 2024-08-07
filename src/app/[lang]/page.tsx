import { getDictionary } from "@/configs/dictionary";
import { Locale } from "@/configs/i18n.config";
import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";
import Carousel1 from "./components/sections/carousel1";

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { first } = await getDictionary(lang);
  return (
    <main className="overflow-x-hidden">
      <Navbar lang={lang} />
      <div className="hidden md:block fixed z-[190] h-14 w-3/4 right-0 backdrop-blur-sm bg-gradient-to-l from-black via-black to-transparent rounded-l-full overflow-hidden"></div>
      <Hero lang={lang} />
      <Carousel1 />
      <h1 className="text-2xl font-caveat">{first}</h1>
    </main>
  );
};

export default Home;
