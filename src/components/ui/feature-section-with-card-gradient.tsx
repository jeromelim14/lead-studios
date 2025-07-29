import React from "react";
import { useId } from "react";
import { Trophy, Target, Zap, Shield, Focus } from "lucide-react";

export function FeaturesSectionWithCardGradient() {
  return (
    <div className="py-20 lg:py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white font-['Castoro']">
            Stop Renting Results. Start Owning Your Lead Generation System.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your B2B SaaS from unpredictable lead flow to predictable pipeline through complete system ownership, not agency dependency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leadStudiosFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-[1.02] ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <Grid size={20} />
              <div className="relative z-20">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Inter']">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-blue-400 mb-4 font-['Inter']">
                  {feature.subtitle}
                </p>
                <p className="text-gray-300 text-base leading-relaxed font-['Inter']">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const leadStudiosFeatures = [
  {
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
    title: "You Own Everything - Forever",
    subtitle: "Build equity in your lead generation, don't rent it",
    description: "Unlike agencies that disappear when you stop paying, you own domains, emails, scripts, and processes forever. One $3,500 investment vs. $8K+ monthly agency fees that never end.",
    keyBenefit: "Save $96K+ annually vs. traditional agency costs"
  },
  {
    icon: <Target className="w-10 h-10 text-blue-400" />,
    title: "Find Your TRUE Ideal Customers",
    subtitle: "Most founders are wrong about their ICP - your data tells the truth",
    description: "We analyze your existing customer base to identify actual patterns, not assumptions. Discover which customer segments generate 80% of your revenue.",
    keyBenefit: "3-5x improvement in response rates when targeting true ICP"
  },
  {
    icon: <Zap className="w-10 h-10 text-purple-400" />,
    title: "Complete System in 14 Days",
    subtitle: "Why wait 6+ months when you can have a working system in 2 weeks?",
    description: "Proven framework that delivers working systems in 14 days, not months. Skip 6+ months of trial and error, deliverability issues, and technical headaches.",
    keyBenefit: "Start booking calls in week 3, not quarter 2"
  },
  {
    icon: <Shield className="w-10 h-10 text-green-400" />,
    title: "Enterprise-Grade Email Infrastructure",  
    subtitle: "Built for deliverability, designed for scale",
    description: "30+ domains with proper DNS configuration, SPF, DKIM, DMARC setup. Send 1,000+ emails daily without hitting spam folders.",
    keyBenefit: "Maximum deliverability with 60+ email accounts across multiple providers"
  },
  {
    icon: <Focus className="w-10 h-10 text-cyan-400" />,
    title: "Built Specifically for B2B SaaS",
    subtitle: "Not generic email marketing - specialized for SaaS founders", 
    description: "Scripts, strategies, and examples tailored for B2B SaaS. Built by someone who's scaled SaaS companies with industry-specific best practices.",
    keyBenefit: "50+ B2B SaaS clients successfully implemented"
  }
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  // Use fixed pattern to avoid hydration mismatch
  const p = pattern ?? [
    [8, 2],
    [9, 4], 
    [7, 3],
    [10, 1],
    [8, 5],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-800/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/5 stroke-white/5"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={`square-${index}-${squareX}-${squareY}`}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}