import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Carousel3DMarquee from "@/components/Carousel3DMarquee";
import StatsSection from "@/components/StatsSection";
import StackedCardsSection from "@/components/StackedCardsSection";
import AppSection from "@/components/AppSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Carousel3DMarquee />
      <StatsSection />
      <StackedCardsSection />
      <AppSection />
      <TestimonialsSection />
    </>
  );
}
