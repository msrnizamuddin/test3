import { Phone, Mail } from "lucide-react";

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

export default function TopBar() {
  return (
    <div className="bg-linear-to-r from-[#052e1f] via-[#0a3d26] to-[#052e1f] text-green-100 text-xs sm:text-sm py-2 px-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/5">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <Phone size={13} className="text-orange-300" /> +880 1700-000000
        </span>

        <span className="hidden sm:flex items-center gap-1.5">
          <Mail size={13} className="text-orange-300" /> info@aragro.com
        </span>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="#"
          aria-label="Facebook"
          className="p-1.5 rounded-full hover:bg-white/10 hover:text-orange-300 transition-colors"
        >
          <FacebookIcon width={14} height={14} />
        </a>

        <a
          href="#"
          aria-label="YouTube"
          className="p-1.5 rounded-full hover:bg-white/10 hover:text-orange-300 transition-colors"
        >
          <YoutubeIcon width={14} height={14} />
        </a>

        <span className="opacity-30">|</span>

        <a href="#" className="hover:text-orange-300 transition-colors font-medium">
          Hotline: 16XXX
        </a>
      </div>
    </div>
  );
}
