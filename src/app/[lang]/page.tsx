import { getDictionary } from "@/configs/dictionary";
import { Locale } from "@/configs/i18n.config";
import Navbar from "./components/navbar";

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { first } = await getDictionary(lang);
  return (
    <main className="overflow-x-hidden">
      <Navbar lang={lang} />
      <div className="hidden md:block fixed z-[190] h-14 w-3/4 right-0 backdrop-blur-sm bg-gradient-to-l from-black via-black to-transparent rounded-l-full overflow-hidden"></div>
      <h1 className="text-2xl">{first}</h1>
    </main>
  );
};

export default Home;
