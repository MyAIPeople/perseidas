import Image from "next/image";
import Link from "next/link";
import React from "react";

const Offers = () => {
  return (
    <div className="absolute left-4 md:left-40 bottom-24 md:bottom-16 text-center">
      <p className="text-white text-xs md:text-xl font-semibold">Gastro</p>
      <p className="text-white text-xs md:text-xl font-semibold">Cata de vinos</p>
      <p className="text-white text-xs md:text-xl font-semibold">Experiencia Perseidas</p>
      <p className="text-white text-xs md:text-xl font-semibold">Muchas más sorpresas</p>

      <div className="flex flex-col justify-center items-center mt-4">
        <p className="text-white text-xs md:text-sm font-light">RESERVAS EN:</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.fourvenues.com/arico-cave-experience1/BFQT"}
          className="flex"
        >
          <Image src={"/bolt.svg"} width={25} height={25} alt="bolt icon" />
          <p className="text-white font-roboto_mono italic text-xl md:text-2xl">fourvenues</p>
        </a>
      </div>
    </div>
  );
};

export default Offers;
