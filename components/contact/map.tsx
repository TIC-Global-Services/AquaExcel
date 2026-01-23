import React from "react";
import Image from "next/image";
import filter from "@/assets/contact/icon/mynaui_filter-solid.svg";
import ContainerLayout from "@/layouts/ContainerLayout";

const map = () => {
  return (
    <ContainerLayout>
      <div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-[44px] font-hoves-pro font-medium tracking-[-4%]">
            Find a Dealer
          </h1>
          <p className="font-inter-tight font-light text-sm lg:text-xl text-black text-center max-w-2xl">
            Find the closest Aqua Excel dealer with ease. Search nearby
            locations and connect with verified partners instantly.
          </p>
        </div>
        <div className="flex w-full max-w-xl mx-auto gap-3 justify-center items-center mt-4 px-4">
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
            />
          </div>
          <div className="shrink-0">
            <button className="border border-gray-200 rounded-lg p-3.5 hover:bg-gray-50 transition-colors h-full flex items-center justify-center">
              <Image src={filter} alt="Filter" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="w-full mt-8 px-[8%]">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=76.99909687042238%2C11.035412260567426%2C77.0191812515259%2C11.052618511481354&layer=mapnik"
            className="w-full h-[400px] border border-gray-300 rounded-lg rounded-2xl"
          ></iframe>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default map;
