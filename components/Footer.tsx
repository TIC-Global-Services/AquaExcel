"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2D2D2D] text-white pt-16 pb-8">
      <div className="px-6 xl:px-[80px] lg:px-[40px]">
        {/* Top Navigation */}
        <div className="flex flex-wrap gap-8 mb-12">
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
        className="mb-16 relative cursor-pointer px-6 xl:px-[40px] lg:px-[30px]"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        <h1 
          className="font-hoves-pro font-bold text-[120px] sm:text-[150px] md:text-[180px] lg:text-[200px] xl:text-[220px] leading-none w-full whitespace-nowrap"
          style={{
            background: 'radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), #E31E24, #4A4A4A 50%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          AQUA EXCEL
        </h1>
      </div>
      
      <div className="px-6 xl:px-[80px] lg:px-[40px]">

        {/* Footer Content Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-8">
          {/* Column 1: Products */}
          <div>
            <h3 className="text-white font-hoves-pro font-medium text-[18px] mb-4 tracking-wide">PRODUCTS</h3>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-[12px]">
                <li>
                  <Link href="#" className="text-white font-hoves-pro font-light text-[12px] hover:opacity-80 uppercase">
                    BRASS THREADED TAPS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white font-hoves-pro font-light text-[12px] hover:opacity-80 uppercase">
                    MIXING COVERS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white font-hoves-pro font-light text-[12px] hover:opacity-80 uppercase">
                    BATH FITTINGS
                  </Link>
                </li>
              </ul>
              <ul className="space-y-[12px]">
                <li>
                  <Link href="#" className="text-white font-hoves-pro font-light text-[12px] hover:opacity-80 uppercase">
                    PIPES & FITTINGS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white font-hoves-pro font-light text-[12px] hover:opacity-80 uppercase">
                    ACCESSORIES
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Others */}
          <div>
            <h3 className="text-white font-hoves-pro font-medium text-[18px] mb-4 tracking-wide">OTHERS</h3>
            <ul className="space-y-[12px]">
              <li>
                <Link href="#" className="text-white font-hoves-pro font-light text-[12px] hover:opacity-80 uppercase">
                  PLUMBER APP (PLAY STORE)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white font-hoves-pro font-light text-[12px] hover:opacity-80 uppercase">
                  FIND A DEALER
                </Link>
              </li>
              <li className="text-white font-hoves-pro font-light text-[12px] leading-relaxed uppercase">
                AQUA EXCEL, S.F.NO.774/4, ANNA PRIVATE INDUSTRIAL<br />
                ESTATE, VILANKURICHI ROAD, COIMBATORE - 641035
              </li>
              <li>
                <Link href="https://www.aquaexcel.in" className="text-white font-hoves-pro font-light text-[12px] hover:opacity-80 uppercase">
                  WEB: WWW.AQUAEXCEL.IN
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-hoves-pro font-medium text-sm mb-4 tracking-wide opacity-0">CONTACT</h3>
            <ul className="space-y-[12px]">
              <li className="text-white font-hoves-pro font-light text-[12px] uppercase">
                PHONE: +91-422-2666842
              </li>
              <li className="text-white font-hoves-pro font-light text-[12px] uppercase">
                ENQUIRY: +91-87540-14018
              </li>
              <li className="text-white font-hoves-pro font-light text-[12px] uppercase">
                EMAIL: SALESCORPORATE@AQUAEXCEL.IN
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white font-hoves-pro font-bold text-[18px]">
            © 2025 AQUA EXCEL . ALL RIGHTS RESERVED.
          </p>
          <p className="text-white font-hoves-pro font-bold text-[18px]">
            DESIGNED & DEVELOPED BY TIC GLOBAL SERVICES
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
