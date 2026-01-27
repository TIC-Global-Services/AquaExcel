import Navbar from "@/components/reuseable/Navbar";
import Hero from "@/components/Home/HeroBanner";
import Carousel3DMarquee from "@/components/Home/Carousel3DMarquee";
import StatsSection from "@/components/Home/StatsSection";
import StackedCardsSection from "@/components/Home/StackedCardsSection";
import AppSection from "@/components/Home/AppSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
     
      <Hero />
      <Carousel3DMarquee />
      <TestimonialsSection />
      <StackedCardsSection />
      <AppSection />
       <StatsSection />
      
    </div>
  );
}
