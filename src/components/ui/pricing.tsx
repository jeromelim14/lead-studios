"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-light tracking-tight sm:text-5xl text-white" style={{ fontFamily: "'Castoro', serif" }}>
          {title}
        </h2>
        <p className="text-white/80 text-lg whitespace-pre-line" style={{ fontFamily: "'Inter', sans-serif" }}>
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center mb-10 gap-4">
        <button 
          onClick={() => {
            setIsMonthly(true);
          }}
          className={cn(
            "font-semibold transition-colors cursor-pointer",
            isMonthly ? "text-white" : "text-white/60"
          )}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Monthly
        </button>
        <Label>
          <Switch
            ref={switchRef as any}
            checked={!isMonthly}
            onCheckedChange={(checked) => {
              setIsMonthly(!checked);
              if (checked && switchRef.current) {
                const rect = switchRef.current.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;

                confetti({
                  particleCount: 50,
                  spread: 60,
                  origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                  },
                  colors: [
                    "hsl(var(--primary))",
                    "hsl(var(--accent))",
                    "hsl(var(--secondary))",
                    "hsl(var(--muted))",
                  ],
                  ticks: 200,
                  gravity: 1.2,
                  decay: 0.94,
                  startVelocity: 30,
                  shapes: ["circle"],
                });
              }
            }}
            className="relative"
          />
        </Label>
        <button 
          onClick={() => setIsMonthly(false)}
          className={cn(
            "font-semibold transition-colors cursor-pointer",
            !isMonthly ? "text-white" : "text-white/60"
          )}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Annual <span className="text-blue-400">(Save 20%)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-2xl border-[1px] p-6 bg-white/5 text-center lg:flex lg:flex-col lg:justify-center relative`,
              plan.isPopular ? "border-white" : "border-white/20",
              "flex flex-col",
              !plan.isPopular && "mt-5",
              index === 0 || index === 2
                ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
                : "z-10",
              index === 0 && "origin-right",
              index === 2 && "origin-left"
            )}
          >
            <div className="flex-1 flex flex-col">
              <p className="text-base font-semibold text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                {plan.name}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-white">
                  {plan.name === "ENTERPRISE" ? (
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>Contact Sales</span>
                  ) : (
                    <NumberFlow
                      value={
                        isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                      }
                      format={{
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      formatter={(value) => `${value}`}
                      transformTiming={{
                        duration: 500,
                        easing: "ease-out",
                      }}
                      willChange
                      className="font-variant-numeric: tabular-nums"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  )}
                </span>
                {plan.name !== "ENTERPRISE" && (
                  <span className="text-sm font-semibold leading-6 tracking-wide text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                    / {isMonthly ? "per month" : "per year"}
                  </span>
                )}
              </div>

              {plan.name !== "ENTERPRISE" && (
                <p className="text-xs leading-5 text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {isMonthly ? "billed monthly" : "billed annually"}
                </p>
              )}

              <ul className="mt-5 gap-2 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                    <span className="text-left text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-4 border-white/20" />

              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-gray-900 hover:ring-offset-1 hover:bg-gray-900 hover:text-white",
                  "bg-transparent text-white border-white/20"
                )}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {plan.buttonText}
              </Link>
              <p className="mt-6 text-xs leading-5 text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}