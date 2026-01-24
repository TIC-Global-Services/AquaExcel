"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Configuration for route-specific core colors
  const routeColors: { [key: string]: string } = {
    "/why-us": "#274689",
    "/career": "#274689",
    "/carrer": "#274689", // Handling potential typo in route usage
  };

  const activeColor = routeColors[pathname] || "#E31E24"; // Default color

  useEffect(() => {
    const animate = () => {
      if (!isHovering && containerRef.current) {
        const time = Date.now() / 1000;
        // Create a moving spotlight effect (figure-8 pattern or circular)
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Movement radius (adjust as needed)
        const radiusX = rect.width * 0.3;
        const radiusY = rect.height * 0.3;

        const x = centerX + Math.cos(time) * radiusX;
        const y = centerY + Math.sin(time * 1.5) * radiusY;

        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovering]);

  return (
    <footer className="lg:bg-[#2D2D2D] bg-[#000000] text-white pt-5 lg:pt-10 lg:pb-0 relative overflow-hidden">
      <div className="px-6 xl:px-[80px] lg:px-[40px] lg:block hidden relative z-20">
        {/* Top Navigation */}
        <div className="flex flex-wrap gap-8">
          <Link href="/" className="text-white font-hoves-pro font-regular text-sm hover:opacity-80">
            HOME
          </Link>
          <Link href="/products" className="text-white font-hoves-pro font-regular text-sm hover:opacity-80">
            PRODUCTS
          </Link>
          <Link href="/why-us" className="text-white font-hoves-pro font-regular text-sm hover:opacity-80">
            WHY US
          </Link>
          <Link href="/resources" className="text-white font-hoves-pro font-regular text-sm hover:opacity-80">
            RESOURCES
          </Link>
          <Link href="/career" className="text-white font-hoves-pro font-regular text-sm hover:opacity-80">
            CAREER
          </Link>
          <Link href="/contact" className="text-white font-hoves-pro font-regular text-sm hover:opacity-80">
            CONTACT US
          </Link>
        </div>

      </div>

      {/* Large Logo with Radial Gradient Hover Effect - Full Width */}
      <div
        ref={containerRef}
        className="pb-10 justify-center w-full relative cursor-pointer flex z-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={(e) => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          containerRef.current.style.setProperty('--mouse-x', `${x}px`);
          containerRef.current.style.setProperty('--mouse-y', `${y}px`);
        }}>
        <h1 className="font-hoves-pro text-[17vw] font-bold leading-none tracking-[-0.8vw] select-none pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${activeColor}, #363639 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >AQUA EXCEL</h1>
      </div>


      <div className="px-6 xl:px-[80px] lg:px-[40px] relative z-20">

        {/* Footer Content Grid - 3 Columns */}
        <div className="flex flex-col md:flex-row gap-5 lg:gap-12 mb-8">
          {/* Column 1: Products */}
          <div>
            <h3 className="text-white font-hoves-pro font-medium text-[18px] leading-[20  px] mb-4 tracking-wide">PRODUCTS</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ul className="space-y-1.5">
                <li>
                  <Link href="/products" className="text-white font-inter-tight font-light leading-[16px] text-[12px] hover:opacity-80 uppercase">
                    BRASS THREADED TAPS
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-white font-inter-tight font-light leading-[16px] text-[12px] hover:opacity-80 uppercase">
                    MIXING COVERS
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-white font-inter-tight font-light leading-[16px] text-[12px] hover:opacity-80 uppercase">
                    BATH FITTINGS
                  </Link>
                </li>
              </ul>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/products" className="text-white font-inter-tight font-light leading-[16px] text-[12px] hover:opacity-80 uppercase">
                    PIPES & FITTINGS
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-white font-inter-tight font-light leading-[16px] text-[12px] hover:opacity-80 uppercase">
                    ACCESSORIES
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Others */}
          <div>
            <h3 className="text-white font-hoves-pro font-medium text-[18px] mb-4 tracking-wide">OTHERS</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/resources" className="text-white font-inter-tight font-light text-[12px] hover:opacity-80 uppercase">
                  PLUMBER APP (PLAY STORE)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-inter-tight font-light text-[12px] hover:opacity-80 uppercase">
                  FIND A DEALER
                </Link>
              </li>
              <li className="text-white font-inter-tight font-light text-[12px] leading-relaxed uppercase">
                AQUA EXCEL, S.F.NO.774/4, ANNA PRIVATE INDUSTRIAL<br />
                ESTATE, VILANKURICHI ROAD, COIMBATORE - 641035
              </li>
              <li>
                <Link href="https://www.aquaexcel.in" className="text-white font-inter-tight font-light text-[12px] hover:opacity-80 uppercase">
                  WEB: WWW.AQUAEXCEL.IN
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-hoves-pro font-medium text-sm hidden lg:block lg:mb-4 tracking-wide opacity-0">CONTACT</h3>
            <ul className="space-y-1.5">
              <li className="text-white font-inter-tight font-light leading-[16px] text-[12px] uppercase">
                PHONE: +91-422-2666842
              </li>
              <li className="text-white font-inter-tight font-light leading-[16px] text-[12px] uppercase">
                ENQUIRY: +91-87540-14018
              </li>
              <li className="text-white font-inter-tight font-light leading-[16px] text-[12px] uppercase">
                EMAIL: SALESCORPORATE@AQUAEXCEL.IN
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[#FFFFFF] font-hoves-pro font-bold text-xs leading-5 md:text-[18px]">
            © 2025 AQUA EXCEL . ALL RIGHTS RESERVED.
          </p>
          <p className="text-[#FFFFFF] font-hoves-pro font-bold text-xs leading-5 md:text-[18px]">
            DESIGNED & DEVELOPED BY TIC GLOBAL SERVICES
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
