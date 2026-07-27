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
    <div>
      <div className="hidden md:block">
        <HeroBanner
          height="h-screen"
          backgroundVideo="https://ik.imagekit.io/pgtxr2fmn/Home/hero_banner_video.mp4"
          titleClassName="text-[22px] font-hoves-pro md:text-[40px] xl:text-[60px] xl:leading-[64px] md:leading-[40px] tracking-tighter font-medium mb-4 text-white w-full"
          title={<>Elevating water usage <br className="hidden md:block" /> with <br className="md:hidden block" /> future-ready design.</>}
          backgroundClassName="object-cover scale-[0.95] overflow-hidden relative"
          maxWidth='md:max-w-6xl'
          subtitleClassName="mb-5"
          subtitle={
            <span className="font-light font-inter-tight text-white text-sm md:text-base xl:text-[20px] xl:leading-[120%] text-base text-left  mb-6">
              Trusted By Thousands Of Plumbers, Built On Patent-Applied Technology, Every Aqua Excel <br className="hidden md:block"></br>Product Is Made To Last, Leak-Free And Worry-Free.
            </span>
          }
          primaryButtonClassName='text-[12px] py-2  md:text-sm md:px-10 w-full'
          secondaryButtonClassName="text-[12px] py-2 md:text-sm md:px-10 w-full"
          buttonClassName='flex gap-4 '
          overlay={true}
          primaryButtonText="Explore Innovations"
          secondaryButtonText="Customer Enquiry"
        />
      </div>
      <div className="md:hidden">
        <HeroBanner
          height="h-screen"
          backgroundVideo="https://ik.imagekit.io/pgtxr2fmn/Home/home_banner_mobile-processed.mp4"
          titleClassName="text-[22px] font-hoves-pro md:text-[40px] xl:text-[60px] xl:leading-[64px] md:leading-[40px] tracking-tighter font-medium mb-4 text-white w-full"
          title={
            <>
              Elevating water usage <br className="hidden md:block" /> with <br className="md:hidden block" /> future-ready design.
            </>
          }
          overlay={true}
          backgroundClassName="object-cover scale-[0.95] overflow-hidden relative"
          maxWidth='md:max-w-6xl'
          subtitleClassName="mb-5"
          subtitle={
            <span className="font-[300] font-inter-tight text-[#E0E0E0] text-sm md:text-base xl:text-[20px] xl:leading-[120%] text-base text-left  mb-6">
              Trusted By Thousands Of Plumbers, Built On Patent-Applied Technology, Every Aqua Excel..
            </span>
          }
          primaryButtonClassName='text-[12px] py-2  md:text-sm md:px-10 w-full'
          secondaryButtonClassName="text-[12px] py-2 md:text-sm md:px-10 w-full"
          buttonClassName='flex gap-4 '
          primaryButtonText="Explore Innovations"
          secondaryButtonText="Customer Enquiry"
        />
      </div>
    </div>
  );
};

export default Hero;
