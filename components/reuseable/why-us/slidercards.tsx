import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, image }) => {
  return (
    <div className="relative w-full h-full rounded-2xl bg-white/10 backdrop-blur-md flex flex-col shadow-2xl border border-white/10 overflow-hidden">

      {/* Top Header - Gray Translucent Section (Flexible height with fixed corners) */}
      <div className="relative z-20 bg-[#D9D9D9]/80 backdrop-blur-md p-[3vh] sm:p-[4vh] md:p-[5vh] flex-none min-h-[40%] flex flex-col justify-center rounded-t-2xl">
        {/* Icon */}
        <div className="mb-[2vh]">
          <Image src={icon} alt="icon" width={64} height={64} className="w-[6vh] h-[6vh] sm:w-[7vh] sm:h-[7vh] md:w-[8vh] md:h-[8vh] shrink-0" />
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-[2.5vh] md:text-[3vh] font-medium text-black leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm sm:text-[2vh] md:text-[2.2vh] text-black font-normal leading-tight">
          {description}
        </p>
      </div>

      {/* Bottom Image Section */}
      <div className="relative w-full grow min-h-0 rounded-b-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
};

export default Card;