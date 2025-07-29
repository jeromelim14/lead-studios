"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatedUnderline } from "@/components/ui/animated-underline";

interface FlipLinksProps {
  className?: string;
  links: string[];
}

export function FlipLinks({ className, links }: FlipLinksProps) {
  const router = useRouter();

  const handleClick = (text: string) => {
    const pageName = text.toLowerCase().replace(/\s+/g, '-');
    router.push(`/${pageName}`);
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {links.map((link, index) => (
        <FlipLink
          key={index}
          text={link}
          onClick={() => handleClick(link)}
        />
      ))}
    </div>
  );
}

interface FlipLinkProps {
  text: string;
  onClick: () => void;
}

function FlipLink({ text, onClick }: FlipLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full py-2 text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="inline-block relative cursor-pointer bg-blue-500/20 border border-blue-500 px-8 py-4">
        <span
          className="text-6xl md:text-7xl lg:text-8xl font-light text-white block"
          style={{ 
            fontFamily: "'Castoro', serif",
            opacity: isHovered ? 0.8 : 1
          }}
        >
          {text}
        </span>
        <div 
          className="absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ease-in-out"
          style={{
            width: isHovered ? '100%' : '0%',
            transformOrigin: 'left'
          }}
        />
      </div>
    </div>
  );
}