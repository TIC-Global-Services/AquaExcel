"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const aquaRef = useRef<HTMLSpanElement>(null);
  const excelRef = useRef<HTMLSpanElement>(null);
  const [hoveredWord, setHoveredWord] = useState<'aqua' | 'excel' | null>(null);
  const hoveredWordRef = useRef<'aqua' | 'excel' | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    hoveredWordRef.current = hoveredWord;
  }, [hoveredWord]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = (time: number) => {
      if (hoveredWordRef.current !== 'aqua' && aquaRef.current) {
        const x = 50 + 40 * Math.sin(time * 0.001);
        const y = 50 + 30 * Math.cos(time * 0.0013);
        aquaRef.current.style.setProperty('--mx', `${x}%`);
        aquaRef.current.style.setProperty('--my', `${y}%`);
      }
      if (hoveredWordRef.current !== 'excel' && excelRef.current) {
        const x = 50 + 40 * Math.cos(time * 0.0011);
        const y = 50 + 30 * Math.sin(time * 0.0009);
        excelRef.current.style.setProperty('--mx', `${x}%`);
        excelRef.current.style.setProperty('--my', `${y}%`);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

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

      {/* Large Logo */}
      <div
        ref={isMobile ? null : containerRef}
        className={`pb-10 justify-center w-full relative flex z-10 ${isMobile ? '' : 'cursor-pointer'}`}
        onMouseLeave={isMobile ? undefined : () => setHoveredWord(null)}
        onMouseMove={isMobile ? undefined : (e) => {
          [aquaRef, excelRef].forEach((ref) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            ref.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
            ref.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
          });
        }}>
        <h1 className={`font-uber-move text-[17.5vw] font-bold leading-none select-none ${isMobile ? 'tracking-[-1vw]' : 'tracking-[-0.9vw]'}`}>
          <span
            ref={aquaRef}
            className="relative inline-block pl-[2vw] pr-[2vw] -ml-[2vw] -mr-[2vw] mr-[2vw]"
            onMouseEnter={isMobile ? undefined : () => setHoveredWord('aqua')}
          >
            <span className="text-[#777]">AQUA</span>
            <span
              className="absolute inset-0 pointer-events-none pl-[2vw] pr-[2vw]"
              style={{
                opacity: 1,
                transition: 'opacity 0.3s ease',
                backgroundImage: `radial-gradient(circle ${isMobile ? '10vw' : '250px'} at var(--mx, 50%) var(--my, 50%), #8AB8E8, #274689 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                WebkitMaskImage: `radial-gradient(circle ${isMobile ? '15vw' : '400px'} at var(--mx, 50%) var(--my, 50%), black 30%, transparent 100%)`,
                maskImage: `radial-gradient(circle ${isMobile ? '15vw' : '400px'} at var(--mx, 50%) var(--my, 50%), black 30%, transparent 100%)`,
              }}
            >
              AQUA
            </span>
          </span>
          <span
            ref={excelRef}
            className="relative inline-block pl-[0.5vw] pr-[2vw] -ml-[2vw] -mr-[2vw]"
            onMouseEnter={isMobile ? undefined : () => setHoveredWord('excel')}
          >
            <span className="text-[#777]">EXCEL</span>
            <span
              className="absolute inset-0 pointer-events-none pl-[0.5vw] pr-[2vw]"
              style={{
                opacity: 1,
                transition: 'opacity 0.3s ease',
                backgroundImage: `radial-gradient(circle ${isMobile ? '10vw' : '250px'} at var(--mx, 50%) var(--my, 50%), #FF6B6B, #E31E24 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                WebkitMaskImage: `radial-gradient(circle ${isMobile ? '15vw' : '400px'} at var(--mx, 50%) var(--my, 50%), black 30%, transparent 100%)`,
                maskImage: `radial-gradient(circle ${isMobile ? '15vw' : '400px'} at var(--mx, 50%) var(--my, 50%), black 30%, transparent 100%)`,
              }}
            >
              EXCEL
            </span>
          </span>
        </h1>
      </div>


      <div className="px-6 xl:px-[80px] lg:px-[40px] relative z-20">

        {/* Footer Content Grid - 3 Columns */}
        <div className="flex flex-col md:flex-row gap-5 lg:gap-12 mb-8">
          {/* Column 1: Products */}
          <div>
            <h3 className="text-white font-hoves-pro font-medium text-[18px] leading-[20  px] mb-4 tracking-wide">PRODUCTS</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-5">
              <ul className="md:space-y-1.5">
                <li>
                  <Link href="/products" className="text-white font-inter-tight font-light leading-[16px] text-[12px] hover:opacity-80 uppercase">
                    BRASS THREADED TAPS
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-white font-inter-tight font-light leading-[16px] text-[12px] hover:opacity-80 uppercase">
                    MAXION COVERS
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-white font-inter-tight font-light leading-[16px] text-[12px] hover:opacity-80 uppercase">
                    BATH FITTINGS
                  </Link>
                </li>
              </ul>
              <ul className="md:space-y-1.5">
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
                Aqua Excel, S/F.No.339/1B, THANNEER panthal-<br />moripalayam road, moripalayam village, sulur<br />taluk, coimbatore-  641 659
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
                PHONE: +91-422-2986842
              </li>
              <li className="text-white font-inter-tight font-light leading-[16px] text-[12px] uppercase">
                ENQUIRY: +91-87540 10016
              </li>
              <li className="text-white font-inter-tight font-light leading-[16px] text-[12px] uppercase">
                <a href="mailto:customercare@aquaexcel.in">EMAIL: customercare@aquaexcel.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[#FFFFFF] font-hoves-pro font-[500] text-xs leading-5 md:text-[18px]">
            © 2025 AQUA EXCEL . ALL RIGHTS RESERVED.
          </p>
          <Link href={'https://www.theinternetcompany.one/contact'} target="_blank" ><p className="text-[#FFFFFF] font-hoves-pro font-[500] text-xs leading-5 md:text-[18px]">
            DESIGNED & DEVELOPED BY TIC GLOBAL SERVICES
          </p></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
