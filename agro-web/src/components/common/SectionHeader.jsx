export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <span className="font-semibold text-sm uppercase tracking-widest text-[#1B5CA8] dark:text-[#1B5CA8]">
        {eyebrow}
      </span>

      <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-xl mx-auto text-gray-500 dark:text-blue-200">
          {description}
        </p>
      )}
    </div>
  );
}
