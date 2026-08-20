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
      "bg-[#CC2229] text-white hover:bg-[#9e1a1f] dark:bg-[#CC2229] dark:hover:bg-[#e52b32]",
    secondary:
      "bg-[#1B5CA8] text-white hover:bg-[#0d3d75] dark:bg-[#2874c7] dark:hover:bg-[#1B5CA8]",
    outline:
      "border-2 border-[#CC2229] text-[#CC2229] hover:bg-red-50 dark:border-[#ef4444] dark:text-red-400 dark:hover:bg-red-950/40",
  };

  const classes = `
    inline-flex items-center justify-center
    px-6 py-3 font-semibold rounded-lg
    transition-colors shadow-sm
    disabled:opacity-50 disabled:cursor-not-allowed
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
