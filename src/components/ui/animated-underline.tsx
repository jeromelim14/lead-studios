"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedUnderlineProps {
  children: ReactNode;
  className?: string;
  underlineColor?: string;
}
 
export const AnimatedUnderline = ({ 
  children, 
  className,
  underlineColor = "after:bg-white"
}: AnimatedUnderlineProps) => {
  return (
    <div className={cn(
      "relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
      underlineColor,
      className
    )}>
      {children}
    </div>
  );
}