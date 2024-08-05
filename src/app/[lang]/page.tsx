import { getDictionary } from "@/configs/dictionary";
import { Locale } from "@/configs/i18n.config";

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { first } = await getDictionary(lang);
  return (
    <main className="overflow-x-hidden">
      <h1 className="text-2xl">{first}</h1>
    </main>
  );
};

export default Home;
