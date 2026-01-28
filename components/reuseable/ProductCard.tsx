import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

interface ProductCardProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    description,
    image,
    className,
}) => {
    return (
        <div className={cn("flex flex-col group cursor-pointer", className)}>
            {/* Image Container */}
            <div className="bg-[#FAF9F5] aspect-3/4 rounded-[20px] p-4 flex items-center justify-center mb-6 relative overflow-hidden transition-all duration-300">
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain object-center"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
                <h3 className="font-inter-tight  font-medium text-lg md:text-[22px] text-black mb-3">
                    {title}
                </h3>

                {/* Divider */}
                <div className="w-full h-px bg-[#000000] mb-3" />

                <p className="font-inter-tight text-sm font-medium md:text-[22px] text-[#646464] leading-relaxed line-clamp-4">
                    {description}
                </p>

                {/* View More - Optional or implicitly whole card */}
                {/* <div className="mt-4 flex items-center gap-2 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="font-inter-tight font-medium text-sm">View more</span>
                    <ArrowDown className="w-4 h-4" />
                </div> */}
            </div>
        </div>
    );
};

export default ProductCard;
