"use client";
import Image from "next/image";

const MarqueeSection = () => {
  const cards = [
    { id: 1, title: "Pipes & Fittings", image: "/card1.jpg" },
    { id: 2, title: "Pipes & Fittings", image: "/card2.jpg" },
    { id: 3, title: "Bath Fittings\n& Accessories", image: "/card3.jpg" },
    { id: 4, title: "Taps & Fittings", image: "/card4.jpg" },
    { id: 5, title: "Accessories", image: "/card5.jpg" },
  ];

  return (
    <section className="pt-[120px] pb-[120px] px-[80px] bg-background overflow-hidden">
      {/* Heading and Description */}
      <div className="text-center mb-16">
        <h2 className="text-foreground font-hoves-pro font-medium text-5xl mb-4">
          Product Universe
        </h2>
        <p className="text-foreground font-hoves-pro font-light text-base max-w-2xl mx-auto">
          Offering Forward-Thinking Products Paired With Complete, Reliable Solutions For Every Need.
        </p>
      </div>

      {/* Marquee Cards */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee">
          {[...cards, ...cards].map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="relative flex-shrink-0 w-[280px] h-[380px] rounded-[32px] overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white font-hoves-pro font-medium text-xl leading-tight whitespace-pre-line">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
