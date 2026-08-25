import logo from "@/assets/dada-logo.jpg.asset.json";
import mark from "@/assets/dada-mark-full.jpg.asset.json";

type Props = {
  className?: string;
  alt?: string;
  /** Only the aerialist symbol, without the wordmark. */
  variant?: "full" | "mark";
};

/**
 * Original logo (white bg, black silhouette+text, azure ribbons).
 * In dark mode we swap bg↔silhouette with `invert(1) hue-rotate(180deg)`,
 * which preserves the azure ribbons (b↔w flipped, hues largely preserved).
 * Light mode shows the logo untouched.
 */
export function Logo({ className = "", alt = "Officina Dadà — Discipline artistiche", variant = "full" }: Props) {
  return (
    <img
      src={variant === "mark" ? mark.url : logo.url}
      alt={alt}
      className={`object-contain dada-logo ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
