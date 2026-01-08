"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 48,suffix:"+", label: "Products Built for\nDaily Reliability" },
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
    <div ref={ref} className="text-[100px] font-hoves-pro font-bold text-foreground leading-none">
      {count}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="pt-5 pb-30 px-6 xl:px-20 lg:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-foreground font-hoves-pro font-medium text-[44px] mb-0">
            Aqua Excel at a glance
          </h2>
          <p className="text-foreground font-hoves-pro font-light text-[24px] max-w-4xl">
            A brief look into the trust, expertise, and innovation shaping Aqua Excel today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#FAF9F5] rounded-[40px] p-10 flex flex-col justify-between w-76.25 h-79.5 relative overflow-hidden"
            >
              {/* Background number in white */}
              <div className="absolute -top-1 left-10 text-[150px] font-hoves-pro font-medium text-white leading-27 select-none pointer-events-none">
                {stat.value}{stat.suffix}
              </div>
              
              {/* Foreground number */}
              <div className="flex-1 flex items-start pt-8 relative z-10">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Label text */}
              <p className="text-foreground font-hoves-pro font-medium text-[24px] whitespace-pre-line leading-tight relative z-10">
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
