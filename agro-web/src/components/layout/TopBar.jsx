export default function TopBar() {
  return (
    <div className="bg-[#0D1C45] text-white text-sm py-2 px-4 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-4">
        <span>📞 +880 1700-000000</span>

        <span className="hidden sm:inline">✉ info@aragro.com</span>
      </div>

      <div className="flex items-center gap-3">
        <a href="#" className="hover:text-red-300 transition-colors">
          Facebook
        </a>

        <span className="opacity-40">|</span>

        <a href="#" className="hover:text-red-300 transition-colors">
          YouTube
        </a>

        <span className="opacity-40">|</span>

        <a href="#" className="hover:text-red-300 transition-colors">
          Hotline: 16XXX
        </a>
      </div>
    </div>
  );
}
