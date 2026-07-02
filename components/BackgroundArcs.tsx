type Props = {
  className?: string;
  side?: "left" | "right";
};

/** Linhas concêntricas decorativas, remetem ao estilo das artes da Ariflux. */
export default function BackgroundArcs({ className = "", side = "right" }: Props) {
  const flip = side === "left" ? "scale-x-[-1]" : "";
  return (
    <svg
      className={`pointer-events-none absolute ${flip} ${className}`}
      style={{
        maskImage: "radial-gradient(circle at 100% 0%, black 15%, transparent 65%)",
        WebkitMaskImage: "radial-gradient(circle at 100% 0%, black 15%, transparent 65%)",
      }}
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="arcGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <circle cx="600" cy="0" r="180" stroke="url(#arcGradient)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="600" cy="0" r="300" stroke="url(#arcGradient)" strokeWidth="1.5" opacity="0.35" />
      <circle cx="600" cy="0" r="420" stroke="url(#arcGradient)" strokeWidth="1.5" opacity="0.2" />
    </svg>
  );
}
