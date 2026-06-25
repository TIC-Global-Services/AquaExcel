"use client";
import Image from "next/image";

const MarqueeSection = () => {
  const cards = [
    { id: 1, title: "Swan Neck", image: "/bt-swan-neck.jpg" },
    { id: 2, title: "Two-Way\nAngle Valve", image: "/bt-two-way.jpg" },
    { id: 3, title: "Sink Tap", image: "/bt-sink-tap.jpg" },
    { id: 4, title: "Bib Tap\nShort Body", image: "/bt-bib-tap.jpg" },
    { id: 5, title: "Angle Valve", image: "/bt-angle.jpg" },
  ];

  return (
    <section className="pt-[120px] pb-[120px] px-[80px] bg-background overflow-hidden">
      {/* Heading and Description */}
      <div className="text-center mb-[2%]">
        <h2 className="text-foreground font-hoves-pro font-medium text-5xl">
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
                style={{ objectPosition: "80% center" }}
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
