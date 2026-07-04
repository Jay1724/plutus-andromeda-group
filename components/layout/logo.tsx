import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <circle
          cx="13"
          cy="13"
          r="12"
          stroke="currentColor"
          strokeOpacity="0.25"
        />
        <ellipse
          cx="13"
          cy="13"
          rx="12"
          ry="4.5"
          stroke="currentColor"
          strokeOpacity="0.4"
          transform="rotate(-28 13 13)"
        />
        <circle cx="13" cy="13" r="3.2" fill="currentColor" />
      </svg>
      <span className="font-display text-lg font-medium tracking-tight">
        Plutus <span className="text-accent">Andromeda</span>
      </span>
    </span>
  );
}
