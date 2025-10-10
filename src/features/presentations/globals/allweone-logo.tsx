import { cn } from "@/lib/utils";
import type React from "react";


export default function AllweoneText(
  props: React.ButtonHTMLAttributes<HTMLDivElement> & { className?: string },
) {
  return (
    <div className={cn("h-7 w-24", props.className)} {...props}>
      <svg viewBox="0 0 70 15" className="h-full w-full">
        <text
          x="1"
          y="12"
          className={cn(
            "fill-dbi tracking-wide",
          )}
          fontSize="11.5"
        >
          ALLWEONE
        </text>
      </svg>
    </div>
  );
}
