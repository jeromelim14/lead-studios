"use client";

import { NavBarDemo } from "@/components/ui/navbar-demo";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PrivateTutors() {
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
              The Future of Private Tutoring: Why Intelligence Matters More Than Credentials
            </h1>
            <p className="text-lg md:text-xl text-white/70 italic mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              How AI assistance is reshaping what it means to be qualified to teach
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
              The emergence of artificial intelligence in educational support systems presents a critical juncture for reconsidering the relationship between formal qualifications and teaching effectiveness in private tutoring. Singapore's tutoring ecosystem—characterized by 70% student participation rates and a $2 billion annual market—provides a compelling case study for examining how technological capabilities might disrupt traditional credentialing requirements.
            </p>

            <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.9)' }}>
              Current market dynamics reveal a structural inefficiency: intelligent individuals with strong pedagogical instincts are systematically excluded from tutoring opportunities outside their formal academic specializations. This credentialing constraint operates independently of actual teaching ability, creating artificial scarcity in subject areas where demand consistently exceeds supply.
            </p>

            <p className="text-white/90 leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.9)' }}>
              The convergence of advanced AI capabilities with established tutoring demand suggests we may be approaching a fundamental reconfiguration of how educational expertise is defined and delivered in private markets.
            </p>

            {/* The Private Tutor's Constraint Problem */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The Private Tutor's Constraint Problem
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Subject Imprisonment
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  The current model locks tutors into their degree subjects. Your earning potential is determined not by your intelligence or teaching ability, but by what you happened to study in university. This creates obvious inefficiencies: brilliant tutors turning away students they could help, simply because they lack formal credentials in that subject.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  The Knowledge Anxiety
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Every experienced tutor knows the feeling: a student asks a question just beyond your expertise. You fumble, deflect, or worse—give an incorrect answer. Your credibility crumbles in real-time. This isn't a reflection of your teaching ability; it's a limitation of human memory and the breadth of knowledge any individual can maintain.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Economic Ceiling
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Without advanced degrees, most tutors are stuck in the $25-40/hour range while PhD-level experts command $80-100/hour. The price difference isn't about teaching ability—it's about perceived expertise. Some of the most effective tutors I know studied completely different subjects from what they teach.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  Preparation Overhead
                </h3>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Hours of unpaid research for every paid tutoring hour. Looking up concepts, creating explanations, anticipating questions. Your effective hourly rate plummets when you account for preparation time, especially for subjects outside your formal training.
                </p>
              </div>
            </section>

            {/* What's Changed */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                What's Changed
              </h2>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Recent AI models like Claude and GPT-4 achieve 93.3% accuracy on advanced mathematics problems—PhD-level performance across virtually all academic subjects. For the first time in history, subject expertise is becoming democratized.
              </p>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                But here's the crucial insight I've discovered through conversations with parents and students: they don't want AI tutors. They want human tutors with AI capabilities.
              </p>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                The value tutors provide isn't primarily knowing facts—it's understanding how individual students learn, providing motivation and accountability, and creating genuine learning relationships. These fundamentally human skills become more valuable, not less, when combined with AI-powered subject expertise.
              </p>
            </section>

            {/* The Integration Model */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The Integration Model
              </h2>

              <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Consider how this might work in practice:
              </p>

              <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                You're tutoring a Secondary 4 student in Chemistry. You studied business, haven't touched chemistry since O-Levels. Previously, this would be impossible. Now:
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 mb-8">
                <ul className="space-y-3 text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <li>• Student asks about catalysts and reaction rates</li>
                  <li>• You quickly consult your AI assistant (invisible to the student)</li>
                  <li>• AI provides: detailed explanation, multiple analogies, common misconceptions, visual representations</li>
                  <li>• You explain the concept using AI insights, adapted to your student's learning style</li>
                  <li>• Student receives expert-level instruction delivered through genuine human connection</li>
                </ul>
              </div>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                The AI handles subject expertise; you handle everything that makes tutoring effective.
              </p>
            </section>

            {/* Three Transformations */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Three Transformations
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    From Subject Specialist to Learning Facilitator
                  </h3>
                  <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Your value shifts from knowing facts to facilitating understanding. AI provides the content foundation—you provide the pedagogical insight, motivation, and relationship building that actually drives learning outcomes.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    From Credentialed to Capable
                  </h3>
                  <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Parents care about results, not certificates. When AI-enhanced tutoring consistently delivers grade improvements and student engagement, your formal background becomes secondary to your demonstrated effectiveness.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    From Limited to Scalable
                  </h3>
                  <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Instead of being constrained to 2-3 subjects, you can confidently tutor across the entire academic spectrum. Your earning potential becomes limited by time and energy, not by what you happened to study years ago.
                  </p>
                </div>
              </div>
            </section>

            {/* Universal Application */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Universal Application Across Tutor Categories
              </h2>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                This technological integration offers distinct value propositions across the tutoring spectrum: full-time private tutors can expand their service offerings beyond degree-limited subjects, enabling them to serve broader student populations and command premium rates previously reserved for specialized experts; part-time tutors benefit from dramatically reduced preparation overhead and the confidence to accept students in previously intimidating subject areas, effectively increasing their earning potential per hour invested; while university students and other intelligent individuals who lack formal teaching credentials gain unprecedented access to tutoring opportunities, transforming latent pedagogical ability into viable income streams without the traditional barriers of subject-specific expertise or teaching qualifications.
              </p>
            </section>

            {/* The Singapore Context */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The Singapore Context
              </h2>

              <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Singapore provides an ideal environment for this transition:
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
                <ul className="space-y-4 text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <li><strong className="text-white">Market Validation:</strong> The 70% tutoring adoption rate demonstrates proven demand and willingness to pay for quality instruction.</li>
                  <li><strong className="text-white">Quality Expectations:</strong> Parents here prioritize educational excellence and understand the value of personalized learning support.</li>
                  <li><strong className="text-white">Government Alignment:</strong> Education Minister Desmond Lee explicitly supports AI that "enables learning, not supplants it"—precisely this model.</li>
                  <li><strong className="text-white">Cultural Readiness:</strong> Tech-forward population comfortable with AI integration when it enhances rather than replaces human judgment.</li>
                </ul>
              </div>
            </section>

            {/* Implementation Considerations */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Implementation Considerations
              </h2>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                The transition won't be immediate or universal. Early adopters will likely be tutors who already demonstrate strong relationship-building skills and can integrate technology seamlessly into their teaching approach.
              </p>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Success will depend on maintaining the human elements that make tutoring effective while leveraging AI to eliminate knowledge constraints. The most effective implementations will be nearly invisible to students—enhanced human teaching rather than obvious human-AI collaboration.
              </p>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Quality control becomes crucial. AI assistance needs to be reliable enough to trust, but tutors need sufficient oversight to catch and correct errors. The balance between AI capability and human verification will determine adoption rates.
              </p>
            </section>

            {/* Looking Forward */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Looking Forward
              </h2>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                We're observing what appears to be a fundamental shift in how we conceptualize educational qualification. Rather than asking "What did you study?" the question becomes "Can you help students understand and improve?"
              </p>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                This democratization of subject expertise could significantly expand the pool of effective tutors while improving accessibility for students who need support. The constraint has never been the availability of intelligent, caring people willing to help students learn—it's been the artificial boundary between intelligence and perceived expertise.
              </p>

              <p className="text-white/90 leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                The implications extend beyond individual tutoring to questions about how we structure educational support systems and what qualifications we consider essential for effective teaching.
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