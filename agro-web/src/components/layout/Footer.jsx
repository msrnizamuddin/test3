import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import logoImg from "@/imports/home-logo.png";
import { QUICK_LINKS, ABOUT } from "@/data/home";

export default function Footer() {
  return (
    <footer className="bg-[#0D1C45] text-blue-100 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company */}
          <div className="lg:col-span-2">
            <Image
              src={logoImg}
              alt="AR Agro logo"
              className="h-10 w-auto object-contain brightness-0 invert mb-5"
            />

            <p className="text-blue-200 text-sm leading-relaxed max-w-md mb-6">
              Empowering Bangladeshi farmers with quality agro products, modern
              farming techniques, and reliable agricultural support since 2020.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-blue-200">
                <Phone size={17} className="text-red-400 shrink-0" />
                <span>+880 1700-000000</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-blue-200">
                <Mail size={17} className="text-red-400 shrink-0" />
                <span>info@aragro.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-blue-200">
                <MapPin size={17} className="text-red-400 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-blue-200">
                <Clock size={17} className="text-red-400 shrink-0" />
                <span>Sat–Thu, 9am–6pm</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>

            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-300 text-sm hover:text-red-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-5">About</h4>

            <ul className="space-y-3">
              {ABOUT.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-300 text-sm hover:text-red-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-blue-900 pt-6 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm text-blue-300 mr-2">Follow us:</span>

            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1877F2] flex items-center justify-center text-sm font-bold transition-colors"
            >
              f
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#FF0000] flex items-center justify-center text-xs font-bold transition-colors"
            >
              ▶
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0A66C2] flex items-center justify-center text-sm font-bold transition-colors"
            >
              in
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-400">
          <p>© 2024 Agro1 Global Agro Ltd. All rights reserved.</p>

          <p>Made with 🌱 for Bangladesh&apos;s farmers</p>
        </div>
      </div>
    </footer>
  );
}
