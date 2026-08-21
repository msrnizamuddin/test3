"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import logoImg from "@/imports/home-logo.png";
import { NAV_LINKS } from "@/data/home";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useCart } from "@/context/CartContext";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
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
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-green-900/10 border-b border-gray-200/60 dark:border-white/10"
          : "bg-white/60 dark:bg-gray-950/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/home" className="shrink-0">
          <Image
            src={logoImg}
            alt="AR Agro logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#F97316] dark:hover:text-orange-400 rounded-lg transition-all group"
            >
              {link.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-linear-to-r from-[#16A34A] to-[#F97316] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}

          <div className="ml-3 flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="/login"
              className="px-4 py-2 text-sm font-semibold text-[#16A34A] dark:text-green-400 border border-[#16A34A]/40 dark:border-green-400/40 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/40 hover:border-[#16A34A] transition-colors"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-semibold text-white bg-linear-to-r from-[#F97316] to-[#c2410c] hover:brightness-110 rounded-lg shadow-md shadow-orange-900/20 transition-all hover:-translate-y-0.5"
            >
              Signup
            </Link>
          </div>
          <Link
            href="/cart"
            className="relative ml-1 p-2.5 rounded-xl text-gray-600 dark:text-gray-200 hover:text-[#F97316] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/5 transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-[#F97316] text-white text-[10px] font-bold shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />

          <button
            className="p-2 rounded-lg text-gray-600 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-white/5"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-gray-100 dark:border-white/10 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#F97316] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/5 rounded-lg"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-2 px-4 pt-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center px-4 py-2.5 text-sm font-semibold text-[#16A34A] dark:text-green-400 border border-[#16A34A] dark:border-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/40 transition-colors"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center px-4 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-[#F97316] to-[#c2410c] rounded-lg shadow-sm transition-colors"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
