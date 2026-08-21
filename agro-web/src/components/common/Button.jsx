import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  const variants = {
    primary:
      "bg-linear-to-r from-[#CC2229] to-[#a3191f] text-white hover:brightness-110 shadow-lg shadow-red-900/20 dark:shadow-red-950/40",
    secondary:
      "bg-linear-to-r from-[#1B5CA8] to-[#123f73] text-white hover:brightness-110 shadow-lg shadow-blue-900/20 dark:shadow-blue-950/40",
    outline:
      "border-2 border-[#CC2229] text-[#CC2229] hover:bg-red-50 dark:border-[#ef4444] dark:text-red-400 dark:hover:bg-red-950/40",
  };

  const classes = `
    inline-flex items-center justify-center
    px-6 py-3 font-semibold rounded-xl
    transition-all duration-300 ease-out
    hover:-translate-y-0.5 active:translate-y-0
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B5CA8] dark:focus-visible:ring-offset-gray-950
    disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
