import Image from "next/image";
import Button from "../reuseable/Button";

const grouplegacy = () => {
  return (
    <section className="xl:px-[80px] px-[5%] py-[60px] bg-background">
      <div className="relative w-full xl:h-[541px] overflow-hidden rounded-[20px]">
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
        <div className="relative z-10 h-full flex gap-0 items-end px-[5%] md:px-16">
          <div className="max-w-3xl py-16">
            <h2 className="text-white font-hoves-pro font-medium text-xl xl:text-[44px] leading-tight mb-4">
              Excel Group Legacy
            </h2>
            <p className="text-white font-hoves-pro font-light text-sm xl:text-[20px] mb-4 mt-4 leading-relaxed">
              Excel Plast (25+ years) supplies polymer components to leading Indian and global organizations—bringing manufacturing discipline and reliability to Aqua Excel’s plumbing solutions.
            </p>
            <Button variant="primary">Download App</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default grouplegacy;
