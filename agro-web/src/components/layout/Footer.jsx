import Image from "next/image";
import Link from "next/link";
import logoImg from "@/imports/home-logo.png";
import { NAV_LINKS } from "@/data/home";

const SERVICES = [
  "Seeds & Seedlings",
  "Pesticides",
  "Fertilizers",
  "Polyhouse Farming",
  "Training Academy",
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1C45] text-blue-100">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Image
              src={logoImg}
              alt="AR Agro logo"
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
            />

            <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
              Empowering Bangladeshi farmers with quality agro products, modern
              farming techniques, and reliable support since 2020.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
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

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>

            <ul className="space-y-2 text-sm text-blue-300">
              {SERVICES.map((service) => (
                <li
                  key={service}
                  className="hover:text-red-300 transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-400">
          <p>© 2024 Agro1 Global Agro Ltd. All rights reserved.</p>

          <p>Made with 🌱 for Bangladesh&apos;s farmers</p>
        </div>
      </div>
    </footer>
  );
}
