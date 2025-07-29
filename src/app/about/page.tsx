"use client";

import { NavBarDemo } from "@/components/ui/navbar-demo";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const segments = [
    "Parents",
    "Private Tutors", 
    "Tuition Centres",
    "Educators"
  ];

  const handleNavigation = (segment: string) => {
    const pageName = segment.toLowerCase().replace(/\s+/g, '-');
    router.push(`/${pageName}`);
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Navigation */}
      <NavBarDemo />
      
      {/* Main Content */}
      <div className="relative w-full bg-black pt-32 pb-20 min-h-screen">
        <div className="w-full h-full">
          <div className="h-full flex flex-col justify-center">
            
            
            {/* Belief Statement - Huge and Centered */}
            <div className="text-center mb-12 px-4 md:px-6 lg:px-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight max-w-full mx-auto" style={{ fontFamily: "'Castoro', serif" }}>
                "We Believe That The <br />
                Future Of Education Is <br />
                AI-Native, But Human-Centric."
              </h1>
            </div>

            {/* Mission Header */}
            <div className="pl-8 md:pl-12 lg:pl-16 mb-12 mt-40">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 tracking-tight mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Mission
              </h2>
            </div>

            {/* Mission Statement - Centered */}
            <div className="text-center mb-16 px-8 md:px-12 lg:px-16">
              <p className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-relaxed max-w-5xl mx-auto" style={{ fontFamily: "'Castoro', serif" }}>
                To democratize world-class education by empowering every educator with AI that enhances human teaching, making personalized, expert-level instruction accessible to learners everywhere.
              </p>
            </div>

            {/* Vision Header */}
            <div className="pl-8 md:pl-12 lg:pl-16 mb-12 mt-40">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 tracking-tight mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Vision
              </h2>
            </div>

            {/* Vision Statement - Centered */}
            <div className="text-center mb-16 px-8 md:px-12 lg:px-16">
              <p className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-relaxed max-w-5xl mx-auto" style={{ fontFamily: "'Castoro', serif" }}>
                Personalized, world-class education for every student, everywhere.
              </p>
            </div>

            {/* Hypothesis Header */}
            <div className="pl-8 md:pl-12 lg:pl-16 mb-12 mt-40">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 tracking-tight mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Hypothesis
              </h2>
            </div>

            {/* Hypothesis Statement - Centered */}
            <div className="text-center mb-16 px-8 md:px-12 lg:px-16">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed max-w-5xl mx-auto" style={{ fontFamily: "'Castoro', serif" }}>
                1. The tutoring market exhibits severe supply-demand imbalances with persistent mispricing mechanisms. <br />
                2. Educational systems demonstrate systemic failures at both national and global scales. <br />
                3. Current AI solutions are fundamentally inadequate as they neglect the critical human-in-the-loop paradigm. <br />
                4. Optimal educational outcomes emerge through AI augmentation rather than displacement of human expertise.
              </p>
            </div>

            {/* Research Articles Header */}
            <div className="pl-8 md:pl-12 lg:pl-16 mb-8 mt-40">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 tracking-tight" style={{ fontFamily: "'Castoro', serif" }}>
                Research Articles
              </h2>
            </div>

            {/* Navigation words */}
            <div className="flex flex-col gap-2 pl-8 md:pl-12 lg:pl-16">
              {segments.map((segment, index) => {
                return (
                  <div key={segment} className="relative">
                    <button
                      className="group w-full text-left p-4 cursor-pointer transition-all duration-300"
                      onClick={() => handleNavigation(segment)}
                      onMouseEnter={(e) => {
                        const text = e.currentTarget.querySelector('.text');
                        if (text) {
                          (text as HTMLElement).style.color = '#9CA3AF';
                        }
                      }}
                      onMouseLeave={(e) => {
                        const text = e.currentTarget.querySelector('.text');
                        if (text) {
                          (text as HTMLElement).style.color = '#FFFFFF';
                        }
                      }}
                    >
                      <div className="relative inline-block">
                        <span 
                          className="text text-6xl md:text-7xl lg:text-8xl font-light text-white block transition-colors duration-300"
                          style={{ fontFamily: "'Castoro', serif" }}
                        >
                          {segment}
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}