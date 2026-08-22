"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#8B1E2D] px-4 py-2 text-sm text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <a
            href="tel:+8801700000000"
            className="flex items-center gap-1.5 transition-colors hover:text-[#F4D35E]"
          >
            <Phone size={14} />
            <span>+880 1700-000000</span>
          </a>

          <a
            href="mailto:info@aragro.com"
            className="hidden items-center gap-1.5 transition-colors hover:text-[#F4D35E] sm:flex"
          >
            <Mail size={14} />
            <span>info@aragro.com</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link href="#" className="transition-colors hover:text-[#F4D35E]">
            Facebook
          </Link>

          <span className="text-white/40">|</span>

          <Link href="#" className="transition-colors hover:text-[#F4D35E]">
            YouTube
          </Link>

          <span className="text-white/40">|</span>

          <Link href="#" className="transition-colors hover:text-[#F4D35E]">
            Hotline: 16XXX
          </Link>
        </div>
      </div>
    </div>
  );
}
