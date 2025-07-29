"use client";

import { NavBarDemo } from "@/components/ui/navbar-demo";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Parents() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-black min-h-screen">
      {/* Tubelight Navigation */}
      <NavBarDemo />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="h-1 bg-white/10">
          <ScrollProgress 
            className="h-1 bg-white"
            containerRef={containerRef}
            springOptions={{ stiffness: 280, damping: 18, mass: 0.3 }}
          />
        </div>
      </div>

      {/* Blog Content */}
      <div 
        ref={containerRef}
        className="relative w-full bg-black pt-20 pb-20 overflow-auto"
      >
        <article className="max-w-4xl mx-auto px-6 md:px-8">
          {/* Header */}
          <motion.header
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-8" style={{ fontFamily: "'Castoro', serif" }}>
              Rethinking Educational Investment: Why AI-Enhanced Human Tutoring Delivers Superior Outcomes
            </h1>
            <p className="text-lg md:text-xl text-white/70 italic mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              How parents can access expert-level personalized education while reducing costs and improving results
            </p>
          </motion.header>

          {/* Article Content */}
          <motion.div
            className="max-w-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.9)' }}>
              Educational decision-making in Singapore has long operated on a fundamental assumption: quality instruction requires extensive formal qualifications and commands premium pricing. This paradigm has created a market where parents routinely pay $80-100 per hour for tutoring services, often with mixed results, while simultaneously limiting their options to a narrow pool of credentialed specialists.
            </p>

            <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.9)' }}>
              Recent developments in artificial intelligence capabilities, combined with emerging research on personalized learning effectiveness, suggest this assumption may be systematically flawed. The most effective educational support may not come from traditional credential-heavy models, but from intelligent individuals equipped with AI-powered subject expertise and focused on human relationship building.
            </p>

            <p className="text-white/90 leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.9)' }}>
              The implications for educational investment strategies are significant, particularly in Singapore's highly competitive academic environment where 70% of families already rely on private tutoring services.
            </p>

            {/* The Traditional Tutoring Value Proposition Gap */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The Traditional Tutoring Value Proposition Gap
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Credential Premium vs. Teaching Effectiveness
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  The current market assigns substantial pricing premiums to formal qualifications—PhD-level tutors commanding $80-100/hour compared to $25-40/hour for undergraduates—yet research on tutoring effectiveness reveals minimal correlation between advanced degrees and student learning outcomes. Some of the most effective tutoring relationships emerge between bright university students and secondary school learners, suggesting pedagogical ability and rapport building may be more valuable than subject-specific credentials.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Subject Specialization Constraints
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Traditional tutoring models force parents to engage multiple specialists for comprehensive academic support, creating logistical complexity and cost multiplication. A family requiring support across mathematics, sciences, and languages must typically coordinate three separate tutoring relationships, each operating independently without holistic understanding of the student's learning patterns.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Preparation and Personalization Limitations
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Even highly qualified tutors face significant constraints in lesson preparation and personalization. The economic reality of hourly billing creates incentives for efficient content delivery rather than deep customization to individual learning styles. Most tutoring sessions default to standardized explanation approaches rather than adapting to specific student needs and preferences.
                </p>
              </div>
            </section>

            {/* The AI-Enhanced Alternative */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The AI-Enhanced Alternative
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Democratized Expertise Access
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Recent AI models demonstrate PhD-level performance across academic subjects—achieving 93.3% accuracy on advanced mathematics assessments and comparable results in sciences and humanities. This technological capability fundamentally changes the economics of expertise access, enabling any intelligent tutor to provide authoritative subject knowledge while focusing their human attention on relationship building and motivation.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Personalization at Scale
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  AI-enhanced tutoring systems can maintain comprehensive learning profiles for individual students, tracking conceptual gaps, preferred explanation styles, and engagement patterns across sessions. This creates genuine personalization that adapts to learning progression rather than applying generic teaching approaches to diverse learners.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Integrated Academic Support
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Rather than requiring multiple specialized tutors, AI-enhanced instruction enables comprehensive academic support through a single relationship. A university student equipped with AI assistance can confidently provide expert-level support across all academic subjects while maintaining consistent pedagogical approaches and relationship continuity.
                </p>
              </div>
            </section>

            {/* The Dual Implementation Model */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The Dual Implementation Model
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    Direct Family Implementation
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Parents with basic pedagogical instincts can leverage AI assistance to provide direct tutoring support to their children. This model combines the natural care and patience that parents bring to their children's learning with AI-powered content expertise, creating highly personalized educational experiences at minimal cost.
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    The approach requires parents to develop basic facilitation skills while relying on AI for subject matter expertise, problem-solving assistance, and pedagogical suggestions. Early implementations suggest this model can be particularly effective for primary and early secondary education levels.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    AI-Enhanced Tutor Engagement
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Alternatively, parents can engage intelligent tutors—university students or recent graduates—who use AI assistance to provide expert-level instruction. This model preserves the interpersonal benefits of external tutoring relationships while accessing subject expertise that would traditionally require expensive specialists.
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    The economic advantages are significant: AI-enhanced tutors can provide PhD-level subject knowledge at $40-60/hour rather than the $80-100/hour required for traditional experts, while often delivering superior personalization and student engagement.
                  </p>
                </div>
              </div>
            </section>

            {/* Quality Assurance Considerations */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Quality Assurance Considerations
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  AI Reliability and Oversight
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Current AI models achieve higher accuracy rates on academic problems than most human tutors, but implementation requires appropriate oversight mechanisms. Parents should understand AI limitations and ensure tutors maintain verification protocols for critical concepts and calculations.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Tutor Selection Criteria
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  When engaging AI-enhanced tutors, selection criteria should emphasize communication ability, student rapport, and technological competence rather than formal subject credentials. The most effective AI-enhanced tutors tend to be intelligent, empathetic individuals who can integrate technological assistance seamlessly into teaching relationships.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Learning Outcome Measurement
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  AI-enhanced tutoring enables more systematic tracking of learning progression and concept mastery. Parents should expect tutors to provide detailed analytics on student engagement, problem-solving accuracy, and conceptual understanding development rather than relying solely on subjective progress assessments.
                </p>
              </div>
            </section>

            {/* Singapore Market Context */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Singapore Market Context
              </h2>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: "'Castoro', serif" }}>
                      Government Policy Alignment
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Singapore's Education Ministry explicitly supports AI integration that "enables rather than replaces" human educators, creating policy environment conducive to AI-enhanced tutoring adoption.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: "'Castoro', serif" }}>
                      Cultural Readiness
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Singapore's tech-forward population demonstrates high comfort levels with AI integration across professional services. Parents here typically evaluate educational tools based on effectiveness rather than tradition.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: "'Castoro', serif" }}>
                      Economic Accessibility
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      The prevalence of tutoring in Singapore—affecting 70% of families—indicates strong willingness to invest in educational support, but also suggests potential demand for more cost-effective alternatives.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Implementation Framework */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Implementation Framework
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Evaluation Criteria
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Parents considering AI-enhanced tutoring should assess potential tutors based on: communication clarity, student engagement ability, technological integration skills, and demonstrated learning outcome improvement rather than formal academic credentials in specific subjects.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Pilot Approach
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Families might begin with limited AI-enhanced support in one subject area to evaluate effectiveness before expanding to comprehensive academic assistance. This allows assessment of student responsiveness and tutor effectiveness within contained parameters.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Progress Monitoring
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  AI-enhanced tutoring should provide superior progress tracking compared to traditional models. Parents should expect detailed analytics on learning progression, concept mastery, and engagement patterns rather than subjective progress reports.
                </p>
              </div>
            </section>

            {/* Long-term Implications */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Long-term Implications
              </h2>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                This model suggests broader changes in how educational services are structured and priced. As AI capabilities continue advancing, the premium assigned to formal credentials may diminish while emphasis on pedagogical ability and student relationship building increases.
              </p>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                The democratization of subject expertise through AI assistance may significantly expand access to quality educational support while reducing costs for families. This could particularly benefit middle-income families who currently face difficult trade-offs between educational quality and affordability.
              </p>

              <p className="text-white/90 leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                The trend also suggests potential for more integrated, holistic educational support rather than the fragmented specialist model that currently dominates private tutoring markets.
              </p>
            </section>

            {/* Footer/CTA */}
            <footer className="border-t border-white/20 pt-12">
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Request a Demo
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Join the Waitlist
                  </button>
                </div>
              </div>
            </footer>
          </motion.div>
        </article>
      </div>
    </main>
  );
}