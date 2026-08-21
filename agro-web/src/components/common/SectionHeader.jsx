export default function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
  className = "",
}) {
  return (
    <div className={`text-center mb-14 ${className}`}>
      <span
        className={`inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
          dark
            ? "text-green-200 bg-white/10"
            : "text-[#16A34A] bg-[#16A34A]/10 dark:text-green-300 dark:bg-green-500/10"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 tracking-tight ${
          dark ? "text-white" : "text-gray-900 dark:text-white"
        }`}
      >
        {title}
      </h2>

      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-linear-to-r from-[#16A34A] to-[#F97316]" />

      {description && (
        <p
          className={`mt-4 max-w-xl mx-auto leading-relaxed ${
            dark ? "text-green-200" : "text-gray-500 dark:text-green-200"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
