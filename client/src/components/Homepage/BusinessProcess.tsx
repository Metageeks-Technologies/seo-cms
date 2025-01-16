"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const images = [
  {
    src: "/image/Subtract.svg",
    caption:
      "We strive to develop real-world web solutions that are ideal for small to large projects with bespoke",
  },
  {
    src: "/image/carousel2.png",
    caption:
      "We strive to develop real-world web solutions that are ideal for small to large projects with bespoke",
  },
];

export default function BusinessProcess() {
  return (
    <div className="bg-[#FFF3ED] py-6 sm:py-8 md:py-10" id="Service">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:justify-between lg:items-start gap-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex flex-col text-left mb-6 sm:mb-8 lg:mb-10">
              <div className="flex items-center gap-3 mb-3 sm:mb-5">
                <Image
                  src="/image/processicon.svg"
                  width={42}
                  height={42}
                  alt="process icon"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-[42px] md:h-[42px]"
                />
                <p className="text-base sm:text-lg font-medium">
                  Simple 🔎 process
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">
                Understand The Business Process
              </h1>
            </div>
            <div>
              <p className="text-base sm:text-lg text-[#5A5A59]">
                We strive to develop real-world web solutions that are ideal for
                small to large projects with bespoke project requirements.
              </p>
              <button
                className="flex items-center justify-center mt-4 sm:mt-5 mb-6 sm:mb-7 
                               w-[180px] sm:w-[200px] md:w-[215px] 
                               h-[56px] sm:h-[64px] md:h-[72px] 
                               bg-gradient-to-br from-[#844aff] to-[#6015ff] 
                               rounded-full text-white font-medium 
                               text-base sm:text-lg gap-2 
                               cursor-pointer transition-colors ease-in-out
                               hover:opacity-90"
              >
                More projects
                <Image
                  src="/image/whitearrow.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 
                  hidden sm:inline-block"
                />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative w-full">
              <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="w-full h-full"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.caption || "Image"}
                          fill
                          sizes="(max-width: 640px) 100vw, 
                                 (max-width: 1024px) 75vw, 
                                 50vw"
                          className="object-cover object-center rounded-2xl sm:rounded-3xl"
                          priority={index === 0}
                        />
                        {image.caption && (
                          <div
                            className="absolute bottom-0 right-0 z-10 
               max-w-[200px] sm:max-w-[250px] md:max-w-[300px] 
               flex justify-end rounded-3xl"
                          >
                            <p
                              className="text-[8px] sm:text-xs bg-white text-black 
                 p-2 sm:p-3 rounded-xl sm:rounded-2xl text-left 
                 shadow-md"
                            >
                              {image.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
