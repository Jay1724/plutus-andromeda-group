import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
