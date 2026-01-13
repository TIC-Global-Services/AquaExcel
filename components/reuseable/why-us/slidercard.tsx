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
    <div className="relative  xl:w-[70dvh] w-[39.222dvh] md:w-[55.556dvh] h-[37.222dvh] sm:h-[35.556dvh] md:h-[77.778dvh] lg:h-[77.778dvh] xl:h-[70.778dvh] rounded-2xl overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Glass Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Top Glass Panel */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-md p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-t-2xl h-[45%] sm:h-[42%] md:h-[40%] lg:h-[38%] xl:h-[40%] flex flex-col justify-center">
        {/* Icon */}
        <div className="mb-2 sm:mb-3">
          <Image src={icon} alt="icon" width={20} height={20} className="sm:w-6 sm:h-6" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[2.222dvh] font-semibold text-gray-900 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[2.222dvh] text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
          {description}
        </p>
      </div>

    </div>
  );
};

export default Card;

