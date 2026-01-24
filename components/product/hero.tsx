import React from "react";
import Image from "next/image";
import productbanner from "@/assets/product/product-banner.png";
import HeroBanner from "../reuseable/heroBanner";

const hero = () => {
  return (
  <div>
     <HeroBanner
      height="h-[460px]"
      backgroundImage={productbanner}
      titleClassName="text-[22px] text-center flex justify-center font-hoves-pro md:text-[40px] xl:text-[60px] xl:leading-[64px] md:leading-[40px] tracking-tighter font-medium mb-4 text-[#E0E0E0] w-full"
      title={
        <>
        Innovative Solutions <br/> Designed for You
        </>
      }
      maxWidth='w-full'
      overlay={true}
      buttonClassName="hidden"
    />
    </div>
  );
};

export default hero;
