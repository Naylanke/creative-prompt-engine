import { Link } from "@tanstack/react-router";
import mark from "@/assets/nexron-mark.png";

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const img = size === "lg" ? "h-14 w-14" : "h-9 w-9";
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="NEXRON home">
      <img src={mark} alt="NEXRON logo" width={816} height={816} className={`${img} object-contain`} />
      <span className="leading-none">
        <span className={`block font-bold tracking-[0.18em] ${size === "lg" ? "text-2xl" : "text-lg"}`}>NEXRON</span>
        <span className="block font-mono text-[0.55rem] tracking-[0.2em] text-cyan">IT ASSISTANCE & DEBUGGING</span>
      </span>
    </Link>
  );
}
