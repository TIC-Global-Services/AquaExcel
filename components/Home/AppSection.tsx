"use client"
import Image from "next/image";
import Button from "../reuseable/Button";
import SimpleParallax from "simple-parallax-js";
import ContainerLayout from "@/layouts/ContainerLayout";

const AppSection = () => {
  return (
    // <section className="px-[80px] py-[60px] bg-background">
    //   <div className="relative w-full h-[541px] overflow-hidden rounded-[20px]">
    //     {/* Background Image */}
    //     <div className="absolute inset-0">
    //       <Image
    //         src="/bottomsecimg.png"
    //         alt="Aqua Excel App"
    //         fill
    //         className="object-cover"
    //         priority={false}
    //       />
    //       <div className="absolute inset-0 bg-black/30" />
    //     </div>

    //     {/* Content */}
    //     <div className="relative z-10 h-full flex items-center px-12 md:px-16">
    //       <div className="max-w-3xl">
    //         <h2 className="text-white font-hoves-pro font-medium text-[44px] leading-tight mb-4">
    //           Learn how the Aqua Excel App works?
    //         </h2>
    //         <p className="text-white font-hoves-pro font-light text-[20px] mb-8 leading-relaxed">
    //           Explore the essential principles, advanced tools, and powerful advantages crafted specifically for plumbers and dealers.
    //         </p>
    //         <Button variant="primary">Download App</Button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <ContainerLayout>
      <section className="py-[5%] bg-background">
      <div className="relative w-full py-[40%] md:py-[20%] overflow-hidden rounded-[20px]">
        {/* Background Image */}

        <div className="absolute inset-0">
          <SimpleParallax>
            <Image
              src="https://ik.imagekit.io/pgtxr2fmn/Home/AppSection/bottomsecimg.png"
              alt="Aqua Excel App"
              fill
              className="object-cover scale-100 md:scale-110"
              priority={false}
              objectPosition="30% 0%"
            />
          </SimpleParallax>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute bottom-8 left-[5%] right-[5%] md:left-10 md:right-10 xl:bottom-15 xl:left-10 xl:right-5 z-10">
          <h2 className="text-white font-hoves-pro font-medium text-xl xl:text-[44px] tracking-tighter leading-tight mb-1">
            Learn how the Aqua Excel App works?
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
    </ContainerLayout>
  );
};

export default AppSection;
