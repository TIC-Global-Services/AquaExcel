"use client"
import Image from "next/image";
import Button from "../reuseable/Button";
import SimpleParallax from "simple-parallax-js";

const grouplegacy = () => {
  return (
    <section className="px-[5%] py-[5%] bg-background">
      <div className="relative w-full py-[40%] lg:py-[23%] overflow-hidden rounded-[20px]">
        {/* Background Image */}

        <div className="absolute inset-0">
          <SimpleParallax>
            <Image
              src="/bottomsecimg.png"
              alt="Aqua Excel App"
              fill
              className="object-cover"
              priority={false}
            />
          </SimpleParallax>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute bottom-8 left-[5%] right-[5%] md:left-10 md:right-10 xl:bottom-15 xl:left-10 xl:right-5 z-10">
          <h2 className="text-white font-hoves-pro font-medium text-xl xl:text-[44px] xl:tracking-[-2px] leading-tight mb-4">
            Excel Group Legacy
          </h2>
          <p className="text-white max-w-[45rem] font-hoves-pro font-light text-sm xl:text-[20px] mb-4 mt-4 leading-relaxed">
            Excel Plast (25+ years) supplies polymer components to leading
            Indian and global organizations—bringing manufacturing
            discipline and reliability to Aqua Excel’s plumbing solutions.
          </p>
          <div>
            <button className="bg-[#E31E24] text-white xl:px-10 px-5 text-[10px] xl:text-sm py-2 rounded-[10px]">
              Download App
            </button>
          </div>
        </div>

        {/* Content */}
        {/* <div className="relative z-10 h-full mt-20 flex gap-0 items-end px-[5%] md:px-16">
          <div className="max-w-3xl">
            <div className="">
              <h2 className="text-white font-hoves-pro font-medium text-xl xl:text-[44px] tracking-[-2px] leading-tight mb-4">
                Excel Group Legacy
              </h2>
              <p className="text-white font-hoves-pro font-light text-sm xl:text-[20px] mb-4 mt-4 leading-relaxed">
                Excel Plast (25+ years) supplies polymer components to leading
                Indian and global organizations—bringing manufacturing
                discipline and reliability to Aqua Excel’s plumbing solutions.
              </p>
              <div>
                <button className="bg-[#E31E24] text-white xl:px-10 px-5 text-[10px] xl:text-sm py-2 rounded-[10px]">
                Download App
              </button> 
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default grouplegacy;
