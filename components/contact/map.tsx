import React from "react";
import Image from "next/image";
import filter from "@/assets/contact/icon/mynaui_filter-solid.svg";
import ContainerLayout from "@/layouts/ContainerLayout";

const map = () => {
  return (
    <ContainerLayout>
      <div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-[20px] md:text-[44px] tracking-tighter font-hoves-pro font-medium tracking-[-4%]">
            Find a Dealer
          </h1>
          <p className="font-inter-tight font-regular text-sm lg:text-xl leading-[120%] text-black text-center max-w-3xl">
            Find the closest Aqua Excel dealer with ease. Search nearby
            locations and connect with verified partners instantly.
          </p>
        </div>
        <div className="flex w-full max-w-xl mx-auto gap-3 justify-center items-center mt-4 px-4">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search Postal code / City"
              className="w-full px-4 py-2 md:py-3.5 bg-[#FAF9F5] border border-[#646464] rounded-lg font-inter-tight placeholder:text-[12px] placeholder:md:text-base placeholder:font-medium text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
            />
          </div>
          <div className="shrink-0">
            <button className="border border-[#646464] rounded-lg p-2 md:p-3.5 bg-[#FAF9F5] hover:bg-gray-50 transition-colors h-full flex items-center justify-center">
              <Image src={filter} alt="Filter" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="w-full mt-8 px-[5%] md:px-[8%]">
          {/* <iframe
            src="https://maps.google.com/maps?q=11.0455885,77.0083056&z=21&output=embed"
            
            
          ></iframe> */}
          <iframe className="w-full h-[400px] border border-gray-300 rounded-lg rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.02006353472382!2d77.0083052748863!3d11.045588538052536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8581da4b687d5%3A0x9dcaa512c0ba925a!2sAQUA%20EXCEL!5e0!3m2!1sen!2sin!4v1781334369768!5m2!1sen!2sin"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default map;
