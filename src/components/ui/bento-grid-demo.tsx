import {
  FileTextIcon,
  GlobeIcon,
  CalendarIcon,
} from "@radix-ui/react-icons";
import { 
  Search,
  Bell,
  BookOpen,
  Users,
  GraduationCap,
  Target
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid-new";

const features = [
  {
    Icon: GraduationCap,
    name: "AI-Enhanced Tutoring",
    description: "Combine human expertise with AI-powered subject knowledge for superior learning outcomes.",
    href: "/solutions",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Search,
    name: "Personalized Learning",
    description: "Adaptive teaching strategies that adjust to each student's unique learning style and pace.",
    href: "/solutions",
    cta: "Explore",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: BookOpen,
    name: "Multi-Subject Support",
    description: "Expert-level assistance across all academic subjects from mathematics to humanities.",
    href: "/solutions",
    cta: "Discover",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Progress Tracking",
    description: "Real-time analytics and insights into student learning progression and achievement.",
    href: "/solutions",
    cta: "View metrics",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Users,
    name: "Community Learning",
    description: "Connect with educators worldwide and share best practices for AI-enhanced teaching.",
    href: "/solutions",
    cta: "Join now",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export { BentoDemo };