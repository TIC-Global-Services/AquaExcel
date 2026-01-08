import React from "react";
import Image from "next/image";
import image1 from "@/assets/why-us/distributionpatnerimg1.jpg";
import image2 from "@/assets/why-us/distributionpatnerimg2.jpg";
import image3 from "@/assets/why-us/distributionpatnerimg3.jpg";
const Distribution = () => {
  const distributors = [
    {
      title: "Higher Margins. Stronger Business.",
      image: image1,
    },
    {
      title: "Reliable Supply. Zero Delays.",
      image: image2,
    },
    {
      title: "Marketing made to boost sales.",
      image: image3,
    },
  ];
  return (
    <div className="flex justify-center">
        <div className="flex flex-col justify-start items-start py-10">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-[2.75rem]">For Distribution Partners</h1>
        <p className="lg:text-xl text-sm font-medium">
          We partner with distributors through dependable supply, strong product
          demand, and responsive service.
        </p>
      </div>
      <div className="flex justify-center gap-5 py-10">
  {distributors.map((card, index) => (
    <div
      key={index}
      className="relative w-[413px] h-[444px] rounded-xl overflow-hidden"
    >
      {/* Image */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Center-bottom single-line text */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 px-4">
        <p
          className="
            text-white
            font-hoves-pro
            font-medium
            text-lg lg:text-xl
            text-center
            whitespace-nowrap
          "
        >
          {card.title}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
    </div>
  );
};

export default Distribution;
