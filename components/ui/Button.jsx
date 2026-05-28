export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105";

  const variants = {
    primary:
      "bg-white text-black hover:bg-gray-200 shadow-lg",
    dark:
      "bg-black text-white border border-white/20 hover:bg-white hover:text-black",
    glass:
      "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}