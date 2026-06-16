"use client"
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";
import ContainerLayout from "@/layouts/ContainerLayout";

const GroupLegacy = () => {
  return (
    <ContainerLayout>
      <section className="py-[2%] bg-background">
        <div className="relative w-full min-h-[300px] md:min-h-0 py-[45%] md:py-[20%] overflow-hidden rounded-[20px] mb-16">
          {/* Background Image */}
          <div className="absolute inset-0">
            <SimpleParallax>
              <Image
                src="/bottomsecimg.png"
                alt="Excel group legacy"
                fill
                className="object-cover scale-100 md:scale-110"
                objectPosition="30% 0%"
                priority={false}
              />
            </SimpleParallax>
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="absolute bottom-8 left-[5%] right-[5%] md:left-10 md:right-10 xl:bottom-15 xl:left-10 xl:right-5 z-10">
            <h2 className="text-white font-hoves-pro font-medium text-xl xl:text-[44px] tracking-tighter leading-tight mb-1">
              Excel group legacy
            </h2>
            <p className="text-white max-w-[45rem] font-hoves-pro font-light text-sm xl:text-[20px] mb-4 mt-1 leading-[120%]">
              Explore the essential principles, advanced tools, and powerful advantages crafted specifically for plumbers and dealers.
            </p>
            <div>
              <button className="bg-[#E31E24] cursor-pointer text-white xl:px-10 px-5 text-[10px] xl:text-sm py-2 md:py-3 font-inter-tight rounded-[12px]">
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>
    </ContainerLayout>
  );
};

export default GroupLegacy;
