"use client";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { id: 1, text: "No Leaks after two years.", rating: 5, avatar: "👤" },
  { id: 2, text: "Higher margins fewer returns.", rating: 5, avatar: "👤" },
  { id: 3, text: "Looks great.", rating: 4, avatar: "👤" },
  { id: 4, text: "Best quality products.", rating: 5, avatar: "👤" },
  { id: 5, text: "Excellent service.", rating: 5, avatar: "👤" },
  { id: 6, text: "Highly recommended.", rating: 5, avatar: "👤" },
];

const TestimonialsSection = () => {
  return (
    <section className="pt-[80px] pb-[80px] px-6 xl:px-[80px] lg:px-[40px] bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <h2 className="text-foreground font-hoves-pro font-medium text-[44px] leading-tight">
              What people are saying about Aqua Excel
            </h2>
          </div>

          {/* Right Carousel */}
          <div className="lg:col-span-8 relative">
            <div className="relative h-[180px] overflow-hidden">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              {/* Infinite scrolling container */}
              <motion.div
                className="flex gap-6 absolute"
                animate={{
                  x: [0, -1800],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate testimonials for seamless loop */}
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-[350px] h-[150px] bg-[#FAF9F5] rounded-[24px] p-6 flex flex-col justify-between"
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
                              className={`text-sm ${
                                i < testimonial.rating ? "text-[#E31E24]" : "text-gray-300"
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
