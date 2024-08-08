"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import * as imagesObj from "./imgsCarousel.json";
import VideoCarousel from "./VideoCarousel";

const Carousel1 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { images } = imagesObj;

  useEffect(() => {
    if (!images) {
      return;
    }
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentImage, images]);

  const changeImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div>
      <div className="absolute items-center overflow-hidden z-10">
        {images &&
          images.map((media, index) => (
            <div
              key={media.key}
              className={`h-screen w-screen object-cover ${
                index === currentImage ? "opacity-100" : "opacity-0 absolute"
              } transition-opacity duration-700`}
            >
              {media.video ? (
                <VideoCarousel key={media.key} slide={media} />
              ) : (
                <Image
                  src={media.url}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          ))}
      </div>
      <div className="absolute z-[60] flex justify-center items-center space-x-4 bottom-4 w-full">
        {images &&
          images.map((_, index) => (
            <button
              key={index}
              onClick={() => changeImage(index)}
              className={`h-2 w-2 md:w-3 md:h-3 bg-white rounded-full cursor-pointer hover:scale-110 ${
                index === currentImage ? "opacity-100" : "opacity-50"
              }`}
            ></button>
          ))}
      </div>
      <div
        style={{
          background: `linear-gradient(to top, #000000, #00000080 , transparent, transparent)`,
        }}
        className="absolute z-50 h-5/6 w-screen bottom-0"
      ></div>
    </div>
  );
};

export default Carousel1;
