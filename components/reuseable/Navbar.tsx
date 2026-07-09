"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let [shouldHideNavbar]=useState(false)
  const pathname = usePathname();
  const hiddenRoutes = ['/resources/blogs/'];
  shouldHideNavbar = hiddenRoutes.some(route => pathname.includes(route));
  console.log("shouldHideNavbarshouldHideNavbar",shouldHideNavbar);
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
    // { name: "Contact us", href: "/contact" },
  ];
  const mobileNavLinks = [
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
      <div className="px-6 xl:px-[80px] lg:px-[50px] flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 mt-3 lg:mt-0">
          <Image
            src="/AE-logo-w-wordmark.png"
            alt="AquaExcel Logo"
            width={200}
            height={80}
            className="h-14 w-auto"
          />
        </Link>
        
        <div className={`${shouldHideNavbar==true || undefined  ? 'hidden' : 'hidden lg:flex items-center gap-2'}`}>
        
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-hoves-pro font-regular text-[16px] px-6 py-2 rounded-full transition-all duration-300 ${isActive(pathname, link.href)
                ? 'bg-white font-medium text-black'
                : 'text-nav-text hover:bg-white hover:text-black'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link href='/contact' className={`${shouldHideNavbar==true ? 'hidden' : 'lg:block hidden'}`}>
          <div className="bg-white text-foreground px-8 py-3 cursor-pointer rounded-lg font-hoves-pro font-medium text-sm hover:opacity-90 transition-opacity inline-block text-center">
            For Enquiries
          </div>
        </Link>
      </div>
      {/*Mobile Navbar*/}
      <div className="lg:hidden">
        <div className="fixed top-[36px] right-6 z-[10000] flex items-center h-14">
          <motion.button
            onClick={toggleMenu}
            className={`${isMenuOpen ? 'text-gray-600' : 'text-white'} p-2 z-[10001] hover:bg-black/30 touch-manipulation border-none outline-none`}
            style={{ appearance: 'none', WebkitAppearance: 'none' }}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.9 }}
            suppressHydrationWarning
          >
            {isMenuOpen ? (
              <X className="z-5" />
            ) : (
              <Menu className="z-5" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[9999] flex flex-col pt-24 px-6 h-screen justify-start overflow-y-auto"
          >
            <div className="flex flex-col justify-start items-center mt-10  gap-6">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`text-2xl font-hoves-pro font-medium ${isActive(pathname, link.href) ? 'text-[#E31E24]' : 'text-black'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
