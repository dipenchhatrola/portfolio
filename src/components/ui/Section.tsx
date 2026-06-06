import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  full?: boolean;
}

// Standard section wrapper with consistent vertical rhythm + scroll anchor.
export function Section({ id, children, className, containerClassName, full }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative w-full scroll-mt-24", !full && "py-24 md:py-36", className)}
    >
      <div
        className={cn(
          !full && "mx-auto w-full max-w-7xl px-6 md:px-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
