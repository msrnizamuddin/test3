import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/imports/home-logo.png";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.06h2.7l.4-3.14h-3.1V7.9c0-.91.25-1.53 1.56-1.53h1.66V3.56C15.9 3.44 15.02 3.4 13.98 3.4c-2.4 0-4.05 1.47-4.05 4.15v2.35H7.2v3.14h2.73V21h3.57z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2s-.21-1.5-.87-2.16c-.83-.87-1.76-.87-2.19-.92C15.44 4 12 4 12 4h-.01s-3.43 0-6.53.12c-.43.05-1.36.05-2.19.92-.66.66-.87 2.16-.87 2.16S2.2 8.94 2.2 10.68v1.63c0 1.74.2 3.48.2 3.48s.21 1.5.87 2.16c.83.87 1.92.84 2.4.94 1.74.17 7.33.22 7.33.22s3.44 0 6.54-.13c.43-.06 1.36-.06 2.19-.93.66-.66.87-2.16.87-2.16s.2-1.74.2-3.48v-1.63c0-1.74-.2-3.48-.2-3.48zM9.94 14.6V8.9l5.6 2.86-5.6 2.85z" />
    </svg>
  );
}

import { QUICK_LINKS } from "@/data/home";
import { ABOUT } from "@/data/home";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-[#0D1C45] to-[#050b1c] text-blue-100 border-t border-white/5">
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1B5CA8]/20 blur-3xl"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#CC2229]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Image
              src={logoImg}
              alt="AR Agro logo"
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
            />

            <p className="text-blue-200 text-sm leading-relaxed max-w-sm mb-6">
              Empowering Bangladeshi farmers with quality agro products, modern
              farming techniques, and reliable support since 2020.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#CC2229] text-blue-200 hover:text-white transition-colors"
              >
                <FacebookIcon width={16} height={16} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#CC2229] text-blue-200 hover:text-white transition-colors"
              >
                <YoutubeIcon width={16} height={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-300 text-sm hover:text-red-300 hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {ABOUT.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-300 text-sm hover:text-red-300 hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide">
              Get In Touch
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-blue-300">
                <Phone size={15} className="text-red-300 shrink-0" />
                +880 1700-000000
              </li>

              <li className="flex items-center gap-2.5 text-blue-300">
                <Mail size={15} className="text-red-300 shrink-0" />
                info@agro1bd.com
              </li>

              <li className="flex items-center gap-2.5 text-blue-300">
                <MapPin size={15} className="text-red-300 shrink-0" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-400">
          <p>© 2024 Agro1 Global Agro Ltd. All rights reserved.</p>

          <p>Made with 🌱 for Bangladesh&apos;s farmers</p>
        </div>
      </div>
    </footer>
  );
}
