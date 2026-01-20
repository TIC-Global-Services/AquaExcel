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
      <div className="relative z-20 bg-[#D9D9D9]/80 backdrop-blur-md p-6 sm:p-8 md:p-10 flex-none min-h-[40%] flex flex-col justify-center rounded-t-2xl">
        {/* Icon */}
        <div className="mb-4">
          <Image src={icon} alt="icon" width={64} height={64} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0" />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-black leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-lg md:text-xl text-black/80 font-normal leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Image Section */}
      <div className="relative w-full grow min-h-[30%] rounded-b-2xl overflow-hidden">
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