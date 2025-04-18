"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// components
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-30 w-full transition-all
        ${scrolled
          ? "bg-background shadow-lg dark:shadow-md"
          : "bg-transparent dark:bg-transparent"}
        ${pathname === "/" && !scrolled ? "bg-tertiary dark:bg-background" : ""}
      `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
