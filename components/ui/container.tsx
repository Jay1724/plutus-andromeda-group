import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: Comp = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Comp className={cn("mx-auto w-full max-w-8xl px-6 md:px-10 lg:px-16", className)}>
      {children}
    </Comp>
  );
}
