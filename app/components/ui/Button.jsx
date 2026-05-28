export default function Button({
  children,
  variant = "primary",
}) {
  const base =
    "px-6 py-3 rounded-full transition-all duration-300 font-medium";

  const styles = {
    primary:
      "bg-[#D4A762] text-black hover:scale-105 hover:shadow-2xl",
    secondary:
      "border border-[#D4A762] text-[#D4A762] hover:bg-[#D4A762] hover:text-black",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}