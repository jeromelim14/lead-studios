"use client";

import { NavBarDemo } from "@/components/ui/navbar-demo";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function TuitionCentres() {
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
              Institutional Implementation of Human-AI Collaborative Learning: Evidence from Singapore's Tuition Center Ecosystem
            </h1>
            <p className="text-lg md:text-xl text-white/70 italic mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              How educational institutions are navigating the integration of AI assistance while preserving human-centered pedagogy
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
              The debate surrounding artificial intelligence in education has largely focused on binary choices: AI tutors replacing human teachers, or traditional instruction resisting technological integration entirely. However, emerging evidence from Singapore's private tuition sector suggests a third model may be taking shape—one where AI capabilities enhance rather than substitute human instruction within institutional frameworks.
            </p>

            <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.9)' }}>
              Singapore's tuition centers, serving 70% of the student population, provide a unique laboratory for examining how educational institutions adapt to AI capabilities while maintaining their fundamental pedagogical commitments. Unlike individual tutors or pure AI platforms, these centers must balance technological integration with institutional consistency, regulatory compliance, and established parent expectations.
            </p>

            <p className="text-white/90 leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.9)' }}>
              The patterns emerging from early AI integration attempts reveal both the potential and complexity of implementing human-AI collaborative learning at institutional scale.
            </p>

            {/* The Institutional AI Integration Challenge */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The Institutional AI Integration Challenge
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Preserving Pedagogical Continuity
                </h3>
                <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Educational institutions operate on established pedagogical frameworks that define their identity and effectiveness. Singapore's tuition centers have developed specific approaches to curriculum delivery, student assessment, and parent communication that constitute their competitive advantages. The challenge of AI integration lies not in replacing these systems, but in enhancing them without disrupting institutional coherence.
                </p>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Unlike individual tutors who can adapt their methods fluidly, institutions require systematic approaches that maintain consistency across multiple instructors and student cohorts. This creates unique implementation challenges when integrating AI capabilities that may operate differently from established human teaching patterns.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Quality Control at Scale
                </h3>
                <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Individual tutors using AI assistance can maintain direct oversight of AI-generated content and explanations. Institutional implementation requires systematic quality assurance protocols that ensure AI contributions align with institutional standards across multiple concurrent sessions and different instructor capabilities.
                </p>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  The verification burden becomes more complex when AI assistance is distributed across numerous staff members with varying technological competence and subject expertise. Institutions must develop protocols for ensuring AI accuracy while maintaining the efficiency gains that justify the integration effort.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Regulatory and Parent Acceptance
                </h3>
                <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Tuition centers operate within regulatory frameworks and parent expectations that may not readily accommodate AI integration. Unlike pure AI platforms that position themselves as technological solutions, centers must maintain their identity as human-centered educational institutions while incorporating AI capabilities.
                </p>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  The challenge involves communicating AI's role as instructional enhancement rather than replacement, particularly to parents who selected human-based tutoring over available AI alternatives. This requires careful positioning of AI as supporting rather than defining the educational experience.
                </p>
              </div>
            </section>

            {/* Emerging Integration Models */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Emerging Integration Models
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    AI as Subject Matter Repository
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Some centers are implementing AI as an enhanced knowledge base that instructors can consult for subject-specific information, problem-solving approaches, and explanation alternatives.
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    This approach allows institutions to maintain existing pedagogical frameworks while addressing instructor knowledge limitations in specific subjects.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    Personalization Engine Integration
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    More sophisticated implementations involve AI systems that analyze individual student learning patterns and suggest personalized approaches to human instructors.
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    This model preserves human agency in instruction delivery while leveraging AI's data processing capabilities to enhance personalization.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    Hybrid Workflow Systems
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Advanced implementations create integrated workflows where AI handles specific instructional components while human instructors manage others.
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    These systems require careful coordination between AI capabilities and human instruction to ensure seamless educational experiences.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Infrastructure Considerations */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Technical Infrastructure Considerations
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Platform Integration Requirements
                </h3>
                <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Institutional AI implementation requires technical architecture that supports multiple concurrent users while maintaining response speeds appropriate for live instruction. Unlike individual implementations where single-user performance suffices, institutional systems must handle peak demand periods when numerous instructors simultaneously access AI capabilities.
                </p>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  The technical infrastructure must also support institutional customization, allowing centers to integrate proprietary content, assessment frameworks, and pedagogical approaches into AI responses. This customization requirement distinguishes institutional implementation from generic AI tutoring platforms.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Data Management Protocols
                </h3>
                <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Institutions generate significantly more complex data streams than individual tutors, requiring sophisticated management protocols for student progress tracking, instructor performance monitoring, and parent communication. AI integration adds additional data layers that must be processed, analyzed, and presented through institutional dashboards.
                </p>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Privacy and security considerations become more complex when AI systems process student data across multiple institutional contexts. Centers must develop protocols that protect student information while enabling AI personalization capabilities.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Staff Training and Support
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Unlike individual tutors who self-direct their AI integration learning, institutional implementation requires systematic staff training programs that ensure consistent AI utilization across different instructor capabilities and comfort levels. The training challenge involves not just technical competence but pedagogical integration—helping instructors understand when and how to leverage AI assistance while maintaining their instructional effectiveness and student relationship management.
                </p>
              </div>
            </section>

            {/* Observed Implementation Outcomes */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Observed Implementation Outcomes
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Instructor Role Evolution
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Early evidence suggests that AI integration shifts instructor focus from content expertise toward relationship management and pedagogical facilitation. Instructors report increased confidence teaching subjects outside their formal training while spending more time on student motivation and learning process optimization. This role evolution aligns with broader trends in human-AI collaboration across professional services, where technology handles technical expertise while humans focus on relationship management and strategic thinking.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Student Response Patterns
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Initial student responses to AI-enhanced instruction appear largely positive when the integration remains invisible or minimally intrusive. Students benefit from improved explanation quality and personalization without perceiving significant changes to their human instructor relationships. However, student acceptance varies when AI involvement becomes obvious or when technical difficulties disrupt instruction flow. This suggests that successful implementation requires seamless integration rather than prominent AI positioning.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Parent Communication Challenges
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Centers report mixed parent responses to AI integration disclosure. Some parents appreciate enhanced capabilities and improved learning analytics, while others express concerns about reduced human attention or educational authenticity. Successful parent communication appears to emphasize learning outcome improvements and enhanced personalization rather than technological capabilities. Centers that position AI as enabling better human instruction receive more positive responses than those emphasizing technological innovation.
                </p>
              </div>
            </section>

            {/* Implications for Educational Institution Strategy */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Implications for Educational Institution Strategy
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    Competitive Positioning Considerations
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Centers implementing AI enhancement report improved ability to offer comprehensive subject coverage and personalized instruction compared to traditional competitors. However, the competitive advantage appears sustainable only when AI integration remains relatively unique in local markets.
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    As AI capabilities become more widely available, the competitive advantage may shift from access to technology toward quality of implementation and institutional effectiveness in human-AI collaboration.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    Resource Allocation Patterns
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    AI integration appears to shift institutional resource allocation from instructor recruitment toward technology infrastructure and staff training. Centers report reduced pressure to hire subject specialists while increased investment in technological capabilities and instructor development.
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    This resource reallocation may favor institutions with stronger technological adaptation capabilities over those dependent on traditional instructor recruitment and retention strategies.
                  </p>
                </div>
              </div>
            </section>

            {/* Research and Policy Implications */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Research and Policy Implications
              </h2>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                The emerging patterns in Singapore's tuition centers provide insights into broader questions about AI integration in educational institutions. The evidence suggests that successful implementation requires careful attention to institutional culture, pedagogical consistency, and stakeholder communication rather than simply technological deployment.
              </p>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                The institutional context creates both opportunities and constraints that differ significantly from individual tutor AI adoption or pure AI platform deployment. Understanding these differences may inform broader educational technology policy and institutional development strategies.
              </p>

              <p className="text-white/90 leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                The Singapore experience also demonstrates the importance of regulatory environments that support experimentation while maintaining educational quality standards. The government's explicit support for AI that "enables rather than replaces" human educators appears to facilitate institutional innovation while maintaining stakeholder confidence.
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