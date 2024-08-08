import { Locale } from "@/configs/i18n.config";
import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";
import Carousel1 from "./components/sections/carousel1";
import GetInspired from "./components/sections/getInspired";
import Footer from "./components/sections/footer";
import CarouselBrands from "./components/sections/carousel-brands";

const Home = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="overflow-x-hidden">
      <Navbar lang={lang} />
      <div className="hidden md:block fixed z-[190] h-14 w-3/4 right-0 backdrop-blur-sm bg-gradient-to-l from-black via-black to-transparent rounded-l-full overflow-hidden"></div>
      <Hero lang={lang} />
      <Carousel1 />
      <GetInspired lang={lang} />
      <CarouselBrands />
      <Footer />
    </main>
  );
};

export default Home;
