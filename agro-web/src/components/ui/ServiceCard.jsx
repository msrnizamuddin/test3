export default function ServiceCard({
  img,
  icon: Icon,
  title,
  subtitle,
  desc,
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#457B9D]/30 bg-white shadow-sm hover:-translate-y-1 hover:border-[#E63946]/50 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Icon */}
        <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md">
          <Icon size={22} className="text-[#457B9D]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-0.5 text-sm font-bold text-black">{title}</h3>

        <p className="mb-2 text-xs font-medium text-[#457B9D]">{subtitle}</p>

        <p className="text-xs leading-relaxed text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
