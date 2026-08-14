"use client";
import ContainerLayout from "@/layouts/ContainerLayout";
import { useState } from "react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "JAI KRISHNA ELECTRICALS",
    text: "Excellent product quality and very good support. Our customers are happy with the performance.",
    rating: 5,
    avatar: "👤",
  },
  {
    id: 2,
    name: "SAKTHI & CO",
    text: "Reliable products with consistent quality. We have had a great experience working with them.",
    rating: 5,
    avatar: "👤",
  },
  {
    id: 3,
    name: "AMMAN TRADERS",
    text: "Good quality products and excellent service. Delivery and support have always been reliable.",
    rating: 4,
    avatar: "👤",
  },
  {
    id: 4,
    name: "PKP ELECTRICALS",
    text: "The products offer great value and quality. Our customers have given us very positive feedback.",
    rating: 5,
    avatar: "👤",
  },
  {
    id: 5,
    name: "BHAVANI ELECTRICALS",
    text: "Very satisfied with the product quality and overall service. Definitely a reliable brand to work with.",
    rating: 5,
    avatar: "👤",
  },
  {
    id: 6,
    name: "AMMAN TRADERS",
    text: "Quality products, timely service and good support. We are happy with our association.",
    rating: 4,
    avatar: "👤",
  },
  {
    id: 7,
    name: "ROJA ELECTRICALS",
    text: "Great product range and dependable quality. The support team is also very responsive.",
    rating: 5,
    avatar: "👤",
  },
  {
    id: 8,
    name: "SIVA ELECTRICALS",
    text: "Good quality and excellent customer support. We have received positive feedback from our customers.",
    rating: 5,
    avatar: "👤",
  },
  {
    id: 9,
    name: "M.N. TRADERS",
    text: "A dependable supplier with quality products and professional service. Highly recommended.",
    rating: 4,
    avatar: "👤",
  },
  {
    id: 10,
    name: "SALIHA TRADERS",
    text: "Very good product quality and smooth coordination. We are pleased with the overall experience.",
    rating: 5,
    avatar: "👤",
  },
  {
    id: 11,
    name: "CITY HARDWARES",
    text: "Excellent quality and reliable performance. The products have been well received by our customers.",
    rating: 5,
    avatar: "👤",
  },
  {
    id: 12,
    name: "SENTHIL TRADERS",
    text: "Good products backed by excellent service. We look forward to continuing our association.",
    rating: 4,
    avatar: "👤",
  },
  {
    id: 13,
    name: "KRISHNA ELECTRICALS",
    text: "Consistent quality and dependable service. A great choice for customers looking for reliable products.",
    rating: 5,
    avatar: "👤",
  },
  {
    id: 14,
    name: "PAVAN ELECTRICALS",
    text: "Very happy with the quality and service. The products have performed really well for our customers.",
    rating: 5,
    avatar: "👤",
  },
  {
    id: 15,
    name: "KIRUBAI TRADERS",
    text: "Good quality products, professional service and excellent support. Highly satisfied with the experience.",
    rating: 5,
    avatar: "👤",
  },
];

const TestimonialsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
   <ContainerLayout>
     <section className="md:pt-[80px] pb-[40px]  bg-background overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-1800px);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll.paused {
          animation-play-state: paused;
        }
      `}</style>
      <div className="pb-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <h2 className="text-foreground text-center lg:text-left font-hoves-pro font-regular text-xl md:text-[44px] tracking-tight leading-[24px] md:leading-tight">
              What people are <br className="lg:hidden"/> saying about Aqua Excel
            </h2>
          </div>

          {/* Right Carousel */}
          <div className="lg:col-span-8 relative">
            <div className="relative overflow-hidden">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              {/* Infinite scrolling container */}
              <div
                className={`flex gap-6 animate-scroll ${isHovered ? 'paused' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Duplicate testimonials for seamless loop */}
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-[300px] bg-[#E6E6E6] rounded-[24px] py-6 px-6 flex flex-col justify-between gap-4"
                  >
                    <p className="text-foreground font-hoves-pro font-regular text-[18px] leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#E31E24] flex items-center justify-center text-white text-sm">
                          {testimonial.avatar}
                        </div>
                        <span className="text-foreground font-hoves-pro font-medium text-[13px] truncate max-w-[120px]">
                          {testimonial.name}
                        </span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${ testimonial.rating >0 ? "text-[#E31E24]" : "text-[#00000066]"
                                }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </ContainerLayout>
  );
};

export default TestimonialsSection;
