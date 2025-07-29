"use client";

import { SimpleHero } from "@/components/ui/simple-hero";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { Pricing } from "@/components/ui/pricing";
import { PricingTable, type PricingFeature, type PricingPlan } from "@/components/ui/pricing-table";
import { Input } from "@/components/ui/input";

export default function Home() {
  // Eduly.ai Pricing Plans
  const edulyFeatures: PricingFeature[] = [
    { name: "Real-time AI Assistance", included: "basic" },
    { name: "Student Strength/Weakness Analysis", included: "basic" },
    { name: "Self-Study Mode", included: "basic" },
    { name: "Student Databases (up to 3)", included: "basic" },
    { name: "Quiz/Homework Generation", included: "advanced" },
    { name: "Extended Database Capacity (up to 5)", included: "advanced" },
    { name: "Chat Integration", included: "plus" },
    { name: "Zoom Integration", included: "plus" },
    { name: "Booking System", included: "plus" },
    { name: "Interactive Whiteboard", included: "plus" },
    { name: "Extended Database Capacity (up to 10)", included: "plus" },
    { name: "White-label Branding", included: "enterprise" },
    { name: "Custom Quiz Builder", included: "enterprise" },
    { name: "Stripe Payment Integration", included: "enterprise" },
    { name: "Custom Instructions & Content", included: "enterprise" },
    { name: "Video Hosting", included: "enterprise" },
    { name: "Student Dashboard with AI", included: "enterprise" },
  ];

  const edulyPlans: PricingPlan[] = [
    {
      name: "Basic",
      level: "basic",
      price: { monthly: 30, yearly: 300 },
    },
    {
      name: "Advanced",
      level: "advanced", 
      price: { monthly: 50, yearly: 500 },
      popular: true,
    },
    {
      name: "Plus",
      level: "plus",
      price: { monthly: 100, yearly: 1000 },
    },
    {
      name: "Enterprise",
      level: "enterprise",
      price: { monthly: 0, yearly: 0 },
    },
  ];

  // Enhanced Pricing Plans for new component
  const enhancedPlans = [
    {
      name: "BASIC",
      price: "30",
      yearlyPrice: "300",
      period: "per month",
      features: [
        "Real-time AI Assistance",
        "Student Strength/Weakness Analysis", 
        "Self-Study Mode",
        "Up to 3 Student Databases",
        "Basic Support"
      ],
      description: "Perfect for individual tutors starting out",
      buttonText: "Get Started",
      href: "/waitlist",
      isPopular: false,
    },
    {
      name: "ADVANCED",
      price: "50", 
      yearlyPrice: "500",
      period: "per month",
      features: [
        "Everything in Basic",
        "Quiz/Homework Generation",
        "Up to 5 Student Databases",
        "Priority Support",
        "Advanced Analytics"
      ],
      description: "Ideal for growing tutoring practices",
      buttonText: "Get Started",
      href: "/waitlist",
      isPopular: true,
    },
    {
      name: "PLUS",
      price: "100",
      yearlyPrice: "1000", 
      period: "per month",
      features: [
        "Everything in Advanced",
        "Chat Integration",
        "Zoom Integration", 
        "Booking System",
        "Interactive Whiteboard",
        "Up to 10 Student Databases"
      ],
      description: "Complete online tuition toolkit",
      buttonText: "Get Started",
      href: "/waitlist",
      isPopular: false,
    }
  ];

  return (
    <main className="bg-black min-h-screen">
      {/* Tubelight Navigation */}
      <NavBarDemo />
      
      {/* Hero Section */}
      <SimpleHero />
      
      {/* Scroll Animation Section */}
      <div className="bg-black">
        <HeroScrollDemo />
      </div>

      {/* Section 1: Keeping Education Human-Driven */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <WordPullUp
              words="Education Rooted in Human Connection"
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-8"
              wrapperFramerProps={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Guidance */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                Guidance
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Tailored support via AI-backed explanations that adapt to each student's learning style and pace.
              </p>
            </div>

            {/* Supervision */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                Supervision
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Human oversight via video/chat ensuring quality teaching moments and meaningful connections.
              </p>
            </div>

            {/* Accountability */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                Accountability
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Progress analytics tracking measurable improvements, e.g., 20% grade improvement.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Leveraging AI 10x Smarter */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <WordPullUp
              words="Teach with Unmatched Expertise"
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-8"
              wrapperFramerProps={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* PhD-Level Everything */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                PhD-Level Everything
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Grok 4's multi-subject answers provide expert-level knowledge across all academic disciplines.
              </p>
            </div>

            {/* 10x Fewer Mistakes */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                10x Fewer Mistakes
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                98% accuracy vs. 80% for top tutors - unprecedented precision in educational content delivery.
              </p>
            </div>

            {/* No Wasted Time */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                No Wasted Time
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                &lt;0.5s solutions - instant responses that keep learning momentum flowing seamlessly.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Pedagogical Best Practices */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <WordPullUp
              words="Teach Smarter with Proven Methods"
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-8"
              wrapperFramerProps={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Remembers Weak Points */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                Remembers Weak Points
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Tracks student data intelligently, e.g., "struggles with quadratics" for targeted improvement.
              </p>
            </div>

            {/* Personalized Teaching */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                Personalized Teaching
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                AI tips tailored to each student, e.g., "think of derivatives like speed" for intuitive understanding.
              </p>
            </div>

            {/* Engaging Methods */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                Engaging Methods
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Gamified learning with achievement badges like "Algebra Ace" to motivate continuous progress.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Best of All Worlds */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <WordPullUp
              words="Human Touch, AI Power, Pedagogical Precision"
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-8"
              wrapperFramerProps={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            />
          </div>


        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="bg-black">
        <Pricing 
          plans={enhancedPlans}
          title="Choose Your Perfect Plan"
          description="From individual tutors to growing practices, we have a plan that scales with your teaching needs."
        />
      </section>

      {/* Detailed Pricing Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <WordPullUp
              words="Compare All Features"
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-8"
              wrapperFramerProps={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            />
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Castoro', serif" }}>
              Detailed feature comparison including Enterprise solutions for tuition centres.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <PricingTable 
              features={edulyFeatures}
              plans={edulyPlans}
              defaultPlan="basic"
              defaultInterval="monthly"
              onPlanSelect={(plan) => console.log("Selected plan:", plan)}
              containerClassName="bg-transparent px-0"
              buttonClassName="border-2 border-white text-white bg-transparent hover:bg-gray-900 hover:text-white"
            />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="bg-black py-20">
        <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-5xl mx-auto p-4">
            <h1 className="relative z-10 text-4xl md:text-6xl lg:text-8xl text-white text-center font-light mb-8" style={{ fontFamily: "'Castoro', serif" }}>
              Join the Waitlist
            </h1>
            <p className="text-white/80 max-w-lg mx-auto my-2 text-base md:text-lg text-center relative z-10 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Be among the first to experience Eduly.ai's revolutionary AI-powered tutoring platform. 
              Get early access to our professional teaching tools that combine human expertise with 
              cutting-edge artificial intelligence for unmatched educational outcomes.
            </p>
            <div className="flex flex-row gap-4 items-center justify-center mt-8 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 text-base relative z-10 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/60 focus:ring-white/30 focus-visible:ring-white/30"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <button className="flex-shrink-0 whitespace-nowrap px-6 py-3 h-12 text-base bg-white text-black font-semibold rounded-md hover:bg-gray-900 hover:text-white transition duration-300 relative z-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                Join Waitlist
              </button>
            </div>
            <p className="text-white/50 text-xs text-center mt-4 relative z-10" style={{ fontFamily: "'Inter', sans-serif" }}>
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}