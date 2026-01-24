"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cleanup effect to restore body scroll
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Why us", href: "/why-us" },
    { name: "Resources", href: "/resources" },
    { name: "Career", href: "/career" },
    { name: "Contact us", href: "/contact" },
  ];

  const isActive = (currentPath: string, itemLink: string) => {
    if (itemLink === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(itemLink);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      {/*Desktop Navbar*/}
      <div className="px-6 xl:px-[105px] lg:px-[50px] flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/AE-logo.png"
            alt="AquaExcel Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-hoves-pro font-regular text-[16px] px-4 py-3 rounded-full transition-all duration-300 ${isActive(pathname, link.href)
                ? 'bg-white font-medium text-black'
                : 'text-nav-text hover:bg-white hover:text-black'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link href='/contact' className="hidden lg:block">
          <button className="bg-white text-foreground px-8 py-3 rounded-lg font-hoves-pro font-medium text-sm hover:opacity-90 transition-opacity">
            For Enquiries
          </button></Link>
      </div>
      {/*Mobile Navbar*/}
      <div className="lg:hidden">
        <div className="fixed w-full px-3 sm:px-4 -mt-2 pt-0 pb-2 z-[10000] flex justify-end">
          <motion.button
            onClick={toggleMenu}
            className={`${isMenuOpen ? 'text-gray-600 bg-white/90' : 'text-white bg-black/20'} backdrop-blur-sm rounded-lg p-2 sm:p-3 z-[10001] hover:bg-black/30 transition-colors touch-manipulation border-none outline-none -mt-3`}
            style={{ appearance: 'none', WebkitAppearance: 'none' }}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
