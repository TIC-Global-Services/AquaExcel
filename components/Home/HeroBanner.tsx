import Image from "next/image";
import Button from "../reuseable/Button";
import HeroBanner from "../reuseable/heroBanner";

const Hero = () => {
  return (
    // <section className="relative h-[860px] w-full bg-hero-bg overflow-hidden">
    //   {/* Background Image */}
    //   <div className="absolute inset-0">
    //     <Image
    //       src="/hero-banner.jpg"
    //       alt="AquaExcel Product"
    //       fill
    //       className="object-cover scale-110"
    //       priority
    //       quality={90}
    //     />

    //   </div>

    //   {/* Content */}
    //   <div className="relative h-[860px] flex items-end pb-8">
    //     <div className="px-6 xl:px-[80px] lg:px-[40px] w-full">
    //       <div className="max-w-5xl">
    //         <h1 className="text-hero-text font-hoves-pro font-medium text-[60px] leading-[64px] tracking-[-0.04em] mb-4">
    //           Elevating water usage with future-ready design.
    //         </h1>

    //         <p className="text-hero-text font-hoves-pro font-light text-[20px] text-base max-w-4xl mb-4">
    //           Trusted By Thousands Of Plumbers, Built On Patent-Applied Technology, Every Aqua Excel <br></br>Product Is Made To Last, Leak-Free And Worry-Free.
    //         </p>

    //         <div className="flex flex-wrap gap-4">
    //           <Button variant="primary">Explore Innovations</Button>
    //           <Button variant="secondary">Customer Enquiry</Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <HeroBanner
      height="h-screen"
      
      backgroundImage="/hero-banner.jpg"
      titleClassName="text-[22px] font-hoves-pro md:text-[40px] xl:text-[60px] xl:leading-[64px] md:leading-[40px] tracking-[-4%] font-medium mb-4 text-[#E0E0E0] w-full"
      title={
        <>
          Elevating water usage with <br className="md:hidden block" /> future-ready<br className="hidden md:block" /> design.
        </>
      }
      maxWidth='md:max-w-6xl'
      subtitleClassName="mb-5"
      subtitle={
        <span className="text-white font-[400] font-inter-tight text-sm md:text-base xl:text-[20px] xl:leading-[100%] text-base text-left  mb-6">
          Trusted By Thousands Of Plumbers, Built On Patent-Applied Technology, Every Aqua Excel <br className="hidden md:block"></br>Product Is Made To Last, Leak-Free And Worry-Free.
        </span>
      }
      primaryButtonClassName='text-[10px] md:text-sm'
      secondaryButtonClassName="text-[10px] md:text-sm"
      buttonClassName='flex gap-4 '
      primaryButtonText="Explore Innovations"
      secondaryButtonText="Customer Enquiry"
    />
  );
};

export default Hero;
