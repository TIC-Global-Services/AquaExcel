"use client";
import ContainerLayout from "@/layouts/ContainerLayout";
import { useState } from "react";

interface Testimonial {
  id: number;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { id: 1, text: "No Leaks after two years.", rating: 0, avatar: "👤" },
  { id: 2, text: "Higher margins fewer returns.", rating: 0, avatar: "👤" },
  { id: 3, text: "Looks great.", rating: 0, avatar: "👤" },
  { id: 4, text: "Best quality products.", rating: 0, avatar: "👤" },
  { id: 5, text: "Excellent service.", rating: 0, avatar: "👤" },
  { id: 6, text: "Highly recommended.", rating: 0, avatar: "👤" },
];

const TestimonialsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
   <ContainerLayout>
     <section className="pt-[80px] pb-[80px]  bg-background overflow-hidden">
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
            <h2 className="text-foreground font-hoves-pro font-regular text-xl md:text-[44px] tracking-tight leading-[24px] md:leading-tight">
              What people are <br className="md:hidden"/> saying about Aqua Excel
            </h2>
          </div>

          {/* Right Carousel */}
          <div className="lg:col-span-8 relative">
            <div className="relative h-[180px] overflow-hidden">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              {/* Infinite scrolling container */}
              <div
                className={`flex gap-6 absolute animate-scroll ${isHovered ? 'paused' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Duplicate testimonials for seamless loop */}
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-[300px] h-[150px] bg-[#E6E6E6] rounded-[24px] py-9 px-6 flex flex-col justify-between"
                  >
                    <p className="text-foreground font-hoves-pro font-regular text-[18px] leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#E31E24] flex items-center justify-center text-white text-sm">
                          {testimonial.avatar}
                        </div>
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
