// Reusable button component with a few style variants.
// variant: "primary" | "outline" | "ghost"
function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  className = "",
  fullWidth = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm tracking-wide uppercase font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brown text-cream hover:bg-ink dark:bg-olive dark:hover:bg-olive-light",
    outline:
      "border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-cream dark:border-cream/40 dark:text-cream dark:hover:bg-cream dark:hover:text-ink",
    ghost:
      "text-ink hover:text-brown dark:text-cream dark:hover:text-olive-light underline-offset-4 hover:underline",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
