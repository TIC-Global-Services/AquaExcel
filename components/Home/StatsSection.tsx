"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 48, suffix: "+", label: "Products Built for\nDaily Reliability" },
  { value: 1, suffix: "L+", label: "Customers Trust Us\nNationwide" },
  { value: 48, suffix: "+", label: "Years of Proven\nExpertise" },
  { value: 2, label: "Patents Filed for\nInnovation" },
];

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-[50px] sm:text-[70px] lg:text-[100px] font-inter-tight font-medium xl:font-bold text-foreground leading-none">
      {count}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="lg:pt-5 pb-30 px-6 xl:px-20 lg:px-10 bg-background pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-foreground font-hoves-pro font-medium text-[20px] leading-[46px] tracking-[-4%]  lg:text-[44px] mb-1">
            Aqua Excel at a glance
          </h2>
          <p className="text-foreground font-hoves-pro font-regular text-base lg:text-[24px] max-w-4xl">
            A brief look into the trust, expertise, and innovation shaping Aqua Excel today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#FAF9F5] rounded-[24px] lg:rounded-[20px] px-2 lg:px-5 py-10  flex flex-col items-start justify-center lg:items-start md:gap-20 gap-6 text-left h-[120px] sm:h-[250px] lg:h-[318px] w-full relative overflow-hidden"
            >
              {/* Background number - repositioned for mobile */}
              <div className={`absolute font-inter-tight  ${stat.value==2?'md:-top-[7%] -top-[17%] left-[55%] md:left-[10%]':'md:-top-[12%] -top-[5%] left-[40%] md:left-[20%]'} text-[60px]  sm:text-[120px] lg:text-[150px] font-hoves-pro font-medium text-white/80 lg:text-white leading-none select-none pointer-events-none`}>
                {stat.value}{stat.suffix}
              </div>

              {/* Foreground number container */}
              <div className=" relative z-10 lg:flex-1 flex items-center lg:items-start lg:pt-8 w-full justify-center lg:justify-start">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label text */}
              <p className="text-foreground leading-[100%] font-hoves-pro font-medium text-xs sm:text-lg lg:text-[24px] whitespace-pre-line leading-tight relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
