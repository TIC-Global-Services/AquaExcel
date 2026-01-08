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
    <div className="relative w-[630px] h-[700px]  rounded-2xl overflow-hidden bg-black">
      
      {/* Background Image */}
      <div>
        <Image
        src={image}
        alt={title}
        fill
        className="object-cover w-[360px] h-[420px]"
      />
      </div>

      {/* Top Glass Panel */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-md p-5 rounded-t-2xl h-[40%]">
        
        {/* Icon */}
       <div className="absolute bottom-10 px-6">
         <div className="mb-3 text-gray-800">
          <Image src={icon} alt="icon" width={24} height={24} />
        </div>

        {/* Title */}
        <h3 className="lg:text-2xl text-base font-semibold text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm lg:text-xl text-gray-600 leading-relaxed">
          {description}
        </p>
       </div>
      </div>

    </div>
  );
};

export default Card;

