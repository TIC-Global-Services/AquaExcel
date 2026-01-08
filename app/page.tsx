import Navbar from "@/components/reuseable/Navbar";
import HeroBanner from "@/components/Home/HeroBanner";
import Carousel3DMarquee from "@/components/Home/Carousel3DMarquee";
import StatsSection from "@/components/Home/StatsSection";
import StackedCardsSection from "@/components/Home/StackedCardsSection";
import AppSection from "@/components/Home/AppSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

export default function Home() {
  return (
    <>
     
      <HeroBanner />
      <Carousel3DMarquee />
      <StatsSection />
      <StackedCardsSection />
      <AppSection />
      <TestimonialsSection />
    </>
  );
}
