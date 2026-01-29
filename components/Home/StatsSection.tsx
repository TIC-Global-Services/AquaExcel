"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ContainerLayout from "@/layouts/ContainerLayout";

interface Stat {
  id: number;
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { id: 1, value: 48, suffix: "", label: "Products Built for\nDaily Reliability" },
  { id: 2, value: 1, suffix: "L+", label: "Customers Trust Us\nNationwide" },
  { id: 3, value: 48, suffix: "+", label: "Years of Proven\nExpertise" },
  { id: 4, value: 2, label: "Patents Filed for\nInnovation" },
];

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 1500; // 1.5 seconds for better mobile performance

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
    <div ref={ref} key={`${count}-${suffix}`} className="text-[28px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-inter-tight font-medium xl:font-bold text-foreground leading-none">
      {count}{suffix || "\u00A0"}
    </div>
  );
};

const StatsSection = () => {
  return (
   <ContainerLayout>
     <section className="lg:pt-5 pb-30 bg-background pt-20">
      <div className="">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-foreground font-hoves-pro font-medium text-[20px] leading-[46px] tracking-tighter  lg:text-[44px] mb-1">
            Aqua Excel at a glance
          </h2>
          <p className="text-foreground font-inter-tight font-regular tracking-tight text-base lg:text-[24px] max-w-4xl">
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
              <div className={`absolute font-inter-tight ${stat.id == 3 ? '' : ''}  ${stat.value == 2 ? 'md:top-[0%] -top-[30%] left-[15%] md:left-[10%]' : 'md:top-[0%] -top-[30%] left-[15%] md:left-[17%]'} text-[60px]  sm:text-[120px] lg:text-[150px] font-hoves-pro font-medium text-white/80 lg:text-white leading-[108px] select-none pointer-events-none tracking-[-4%]`}>
                {stat.value}<span className={`${stat.id === 3 ? '-ml-2 lg:-ml-3   ' : ''}`}>{stat.suffix}</span>
              </div>

              {/* Foreground number container */}
              <div className="relative z-10 lg:flex-1 flex items-start lg:items-start lg:pt-8 w-full justify-start lg:justify-start">
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
   </ContainerLayout>
  );
};

export default StatsSection;
