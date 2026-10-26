export default function ProductImage({ product, className = "" }) {
  return (
    <div
      className={`relative flex aspect-square w-full items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${product.tone[0]}, ${product.tone[1]})`,
      }}
    >
      <svg width="42%" viewBox="0 0 64 80" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2">
        <rect x="8" y="6" width="48" height="68" rx="3" />
        <path d="M8 28h48M8 50h48M32 6v68" />
      </svg>
      <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
        Sample image
      </span>
    </div>
  );
}
