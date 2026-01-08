"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Why us", href: "/why-us" },
    { name: "Resources", href: "/resources" },
    { name: "Career", href: "/career" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
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
              className="text-nav-text font-hoves-pro font-regular text-[16px] px-4 py-3 rounded-full hover:bg-white hover:text-foreground transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="bg-white text-foreground px-8 py-3 rounded-lg font-hoves-pro font-medium text-sm hover:opacity-90 transition-opacity">
          For Enquiries
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
