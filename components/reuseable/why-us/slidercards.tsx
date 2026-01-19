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
    <div className="relative w-full sm:w-[90vw] md:w-[85vw] lg:w-full xl:w-[630px]
                    max-w-[630px] h-full max-h-[60.889vh] md:max-h-[90vh]
                    rounded-2xl overflow-hidden bg-white flex flex-col">

      {/* Top Glass Panel - White Section */}
      <div className="relative z-20 bg-white/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 lg:p-10 flex-shrink-0">
        {/* Icon */}
        <div className="mb-3 sm:mb-4 md:mb-5">
          <Image src={icon} alt="icon" width={48} height={48} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[1.5rem] font-semibold text-gray-900 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-2xl xl:text-xl text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
          {description}
        </p>
      </div>

      {/* Bottom Image Section - Fills remaining space */}
      <div className="relative w-full flex-1 min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[380px]">
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