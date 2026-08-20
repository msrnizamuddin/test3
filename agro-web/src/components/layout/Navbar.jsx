"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logoImg from "@/imports/home-logo.png";
import { NAV_LINKS } from "@/data/home";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-950 shadow-lg shadow-blue-900/10"
          : "bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/home">
          <Image
            src={logoImg}
            alt="AR Agro logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#CC2229] dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="ml-2 px-5 py-2 bg-[#CC2229] hover:bg-[#9e1a1f] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
          >
            Get Quote
          </Link>

          <div className="ml-2 flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-gray-800"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#CC2229] dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-800 rounded-lg"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center justify-between px-4 py-3 mt-2 border-t border-gray-100 dark:border-gray-800">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Theme
            </span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
