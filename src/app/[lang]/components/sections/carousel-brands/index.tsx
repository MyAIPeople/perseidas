import Image from "next/image";
import { useCarouselBrands } from "./useCarouselBrands";

const CarouselBrands = () => {
  const carouselBrands = useCarouselBrands();

  return (
    <section className="bg-slate-950 w-full inline-flex flex-nowrap overflow-x-hidden pb-8 lg:h-64">
      <ul className="flex items-center space-x-4 lg:space-x-16 animate-loop-scroll px-0 lg:px-8 [&_li]:mx-4 [&_img]:max-w-none">
        {carouselBrands.map((item, i) => {
          return (
            <li key={i}>
              <Image src={item.imageUrl} alt={item.alt} width={item.width} height={item.height} />
            </li>
          );
        })}
      </ul>
      <ul
        className="flex items-center space-x-4 lg:space-x-16 animate-loop-scroll px-0 lg:px-8 [&_li]:mx-4 [&_img]:max-w-none"
        aria-hidden="true"
      >
        {carouselBrands.map((item, i) => {
          return (
            <li key={i}>
              <Image src={item.imageUrl} alt={item.alt} width={item.width} height={item.height} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CarouselBrands;
