"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import NumberFlow from "@number-flow/react"

export type PlanLevel = "starter" | "pro" | "all" | string

export interface PricingFeature {
  name: string
  included: PlanLevel | null
}

export interface PricingPlan {
  name: string
  level: PlanLevel
  price: {
    monthly: number
    yearly: number
  }
  popular?: boolean
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: PricingFeature[]
  plans: PricingPlan[]
  onPlanSelect?: (plan: PlanLevel) => void
  defaultPlan?: PlanLevel
  defaultInterval?: "monthly" | "yearly"
  containerClassName?: string
  buttonClassName?: string
}

export function PricingTable({
  features,
  plans,
  onPlanSelect,
  defaultPlan = "basic",
  defaultInterval = "monthly",
  className,
  containerClassName,
  buttonClassName,
  ...props
}: PricingTableProps) {
  const [isYearly, setIsYearly] = React.useState(defaultInterval === "yearly")
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>(defaultPlan)

  const handlePlanSelect = (plan: PlanLevel) => {
    console.log("Selecting plan:", plan)
    setSelectedPlan(plan)
    onPlanSelect?.(plan)
  }

  return (
    <section
      className={cn(
        "text-white",
        "py-4",
        className,
      )}
    >
      <div
        className={cn("w-full max-w-3xl mx-auto px-4", containerClassName)}
        {...props}
      >


        <div className="border border-white/20 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-white/20">
              <div className="flex items-center p-4 bg-white/5">
                <div className="flex-1 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Features</div>
                <div className="flex items-center gap-8 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {plans.map((plan) => (
                    <div
                      key={plan.level}
                      className="w-16 text-center font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-4 transition-colors",
                    feature.included === selectedPlan &&
                      "bg-blue-500/10",
                  )}
                >
                  <div className="flex-1 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{feature.name}</div>
                  <div className="flex items-center gap-8 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {plans.map((plan) => (
                      <div
                        key={plan.level}
                        className={cn(
                          "w-16 flex justify-center",
                          plan.level === selectedPlan && "font-medium",
                        )}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <CheckIcon className="w-5 h-5 text-white" />
                        ) : (
                          <span className="text-white/30">
                            -
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            className={cn(
              "w-full sm:w-auto px-8 py-2 rounded-xl",
              buttonClassName,
            )}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {selectedPlan === "enterprise" 
              ? "Contact Sales" 
              : `Get started with ${plans.find((p) => p.level === selectedPlan)?.name}`
            }
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function shouldShowCheck(
  included: PricingFeature["included"],
  level: string,
): boolean {
  if (included === "all") return true
  if (included === "enterprise" && level === "enterprise") return true
  if (included === "plus" && (level === "plus" || level === "enterprise")) return true
  if (included === "advanced" && (level === "advanced" || level === "plus" || level === "enterprise")) return true
  if (included === "basic" && (level === "basic" || level === "advanced" || level === "plus" || level === "enterprise")) return true
  // Legacy support
  if (included === "pro" && (level === "pro" || level === "all")) return true
  if (included === "starter" && (level === "starter" || level === "pro" || level === "all")) return true
  return false
}