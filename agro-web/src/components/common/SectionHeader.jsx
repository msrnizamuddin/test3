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
            ? "text-blue-200 bg-white/10"
            : "text-[#1B5CA8] bg-[#1B5CA8]/10 dark:text-blue-300 dark:bg-blue-500/10"
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

      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-linear-to-r from-[#1B5CA8] to-[#CC2229]" />

      {description && (
        <p
          className={`mt-4 max-w-xl mx-auto leading-relaxed ${
            dark ? "text-blue-200" : "text-gray-500 dark:text-blue-200"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
