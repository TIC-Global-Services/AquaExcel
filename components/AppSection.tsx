import Image from "next/image";
import Button from "./Button";

const AppSection = () => {
  return (
    <section className="px-[80px] py-[60px] bg-background">
      <div className="relative w-full h-[450px] overflow-hidden rounded-[40px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bottomsecimg.png"
            alt="Aqua Excel App"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-12 md:px-16">
          <div className="max-w-3xl">
            <h2 className="text-white font-hoves-pro font-medium text-[44px] leading-tight mb-4">
              Learn how the Aqua Excel App works?
            </h2>
            <p className="text-white font-hoves-pro font-light text-[20px] mb-8 leading-relaxed">
              Explore the essential principles, advanced tools, and powerful advantages crafted specifically for plumbers and dealers.
            </p>
            <Button variant="primary">Download App</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
