"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingCart, Moon, Sun, ChevronDown } from "lucide-react";

import logoImg from "@/imports/home-logo.png";
import { NAV_LINKS } from "@/data/home";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  const { cartCount } = useCart();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;

    document.documentElement.classList.toggle("dark", nextDarkMode);
    localStorage.setItem("theme", nextDarkMode ? "dark" : "light");
    setDarkMode(nextDarkMode);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-brand-700/20 bg-white/95 shadow-[0_8px_30px_rgba(69,12,63,0.15)] backdrop-blur-xl dark:border-navy-400/30 dark:bg-navy-900/95 dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          : "border-gray-200 bg-white dark:border-navy-400/30 dark:bg-navy-900"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/home"
          className="flex shrink-0 items-center"
          onClick={closeMobileMenu}
        >
          <Image
            src={logoImg}
            alt="AR Agro"
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative rounded-lg px-3.5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-brand-600 dark:text-gray-200 dark:hover:text-sand-400"
            >
              {link.label}

              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-brand-600 transition-all duration-300 group-hover:w-5" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {themeReady && (
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-300/30 text-navy-700 transition-all hover:scale-105 hover:bg-sand-300/50 dark:bg-sand-400/15 dark:text-sand-400 dark:hover:bg-sand-400/25"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>
          )}

          <Link
            href="/cart"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-navy-500/10 text-navy-600 transition-all hover:scale-105 hover:bg-navy-500/20 dark:bg-navy-500/20 dark:text-sand-400 dark:hover:bg-navy-500/30"
            aria-label="Shopping Cart"
          >
            <ShoppingCart
              size={19}
              className="transition-transform group-hover:scale-105"
            />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1 text-[10px] font-bold text-white shadow-sm">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-700/10 dark:text-sand-400 dark:hover:bg-navy-700/30"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-white shadow-[0_5px_18px_rgba(137,159,71,0.35)] transition-all hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(137,159,71,0.45)]"
          >
            Signup
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {themeReady && (
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-300/30 text-navy-700 transition-colors hover:bg-sand-300/50 dark:bg-sand-400/15 dark:text-sand-400 dark:hover:bg-sand-400/25"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>
          )}

          <Link
            href="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-navy-500/10 text-navy-600 dark:bg-navy-500/20 dark:text-sand-400"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={19} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1 text-[10px] font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-navy-700 transition-colors hover:bg-navy-700/10 dark:text-sand-400 dark:hover:bg-navy-500/20"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[600px] border-t border-gray-200 opacity-100 dark:border-navy-400/30"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 py-4 dark:bg-navy-900 sm:px-6">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-navy-700/10 hover:text-brand-600 dark:text-gray-200 dark:hover:bg-navy-500/15 dark:hover:text-sand-400"
              >
                <span>{link.label}</span>

                <ChevronDown size={15} className="-rotate-90 text-navy-500" />
              </Link>
            ))}
          </nav>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4 dark:border-navy-400/30">
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="rounded-xl border-2 border-navy-500 px-4 py-3 text-center text-sm font-bold text-navy-600 transition-colors hover:bg-navy-500/10 dark:border-sand-400 dark:text-sand-400 dark:hover:bg-sand-400/10"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={closeMobileMenu}
              className="rounded-xl bg-gradient-brand px-4 py-3 text-center text-sm font-bold text-white shadow-md transition-colors"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
