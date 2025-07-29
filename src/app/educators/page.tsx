"use client";

import { NavBarDemo } from "@/components/ui/navbar-demo";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Educators() {
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
              The Future of Education: Why AI + Human Teaching is the Only Path Forward
            </h1>
            <p className="text-lg md:text-xl text-white/70 italic mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              How Singapore's education crisis reveals the solution to scaling quality learning worldwide
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
              The education world is facing a false choice. On one side, EdTech companies are pushing pure AI tutoring solutions, promising to replace human teachers entirely. On the other, traditional educators are pushing back against AI integration, highlighting its limitations and advocating for purely human approaches.
            </p>

            <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.9)' }}>
              Both sides are missing the point entirely.
            </p>

            <p className="text-white/90 leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.9)' }}>
              Having researched Singapore's education system extensively—where 70% of students require private tutoring due to the competitive academic environment—I've discovered that the real solution isn't choosing between AI and humans. It's understanding how to combine them effectively.
            </p>

            {/* The Three Pillars Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The Three Pillars of Effective Teaching
              </h2>
              
              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.9)' }}>
                Through conversations with educators and analysis of Singapore's tutoring landscape, I've identified three essential components that make teaching truly effective:
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    1. Pedagogy Mastery
                  </h3>
                  <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Understanding how to break down complex concepts, adapt explanations to different learning styles, and guide students through the learning process.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    2. Subject Expertise and Content Retrieval
                  </h3>
                  <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Deep knowledge of the material and the ability to instantly access and explain concepts, solve problems, and provide accurate information.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    3. The Human Touch
                  </h3>
                  <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Guidance, encouragement, accountability, supervision, and emotional support—especially critical in early stages of education.
                  </p>
                </div>
              </div>
            </section>

            {/* Where Current Solutions Fall Short */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Where Current Solutions Fall Short
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  The AI-Only Approach
                </h3>
                <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Companies building pure AI tutors excel at subject expertise. Recent AI models like Claude and GPT-4 achieve 93.3% accuracy on advanced mathematics problems—PhD-level performance. They can generate explanations, solve complex problems, and provide instant feedback at scale.
                </p>
                <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  But they fail completely at the human element. Students abandon AI-only platforms because they lack motivation, accountability, and emotional connection. Parents don't trust AI-only solutions with their children's education.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                  The Human-Only Approach
                </h3>
                <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Traditional tutoring provides excellent human connection and personalized guidance. But it faces insurmountable scaling challenges:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-3 mb-8 ml-4" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 255, 255, 0.8)' }}>
                  <li><strong className="text-white" style={{ color: 'white' }}>Supply shortage:</strong> UNESCO reports we need 69 million new teachers globally by 2030</li>
                  <li><strong className="text-white" style={{ color: 'white' }}>Cost barriers:</strong> Expert tutors charge $80-100/hour, making quality education a luxury</li>
                  <li><strong className="text-white" style={{ color: 'white' }}>Geographic limitations:</strong> Access to quality educators varies dramatically by location</li>
                  <li><strong className="text-white" style={{ color: 'white' }}>Knowledge gaps:</strong> Even excellent teachers have subject-area limitations</li>
                </ul>
              </div>
            </section>

            {/* The Third Way */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The Third Way: Human-in-the-Loop Education
              </h2>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                The solution isn't choosing between AI and humans—it's combining them strategically. We've seen this pattern succeed across industries:
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
                <ul className="space-y-4 text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <li><strong className="text-white">Legal:</strong> Harvey AI assists lawyers with research and document review while preserving human judgment</li>
                  <li><strong className="text-white">Coding:</strong> GitHub Copilot enhances developer productivity while maintaining human creativity and oversight</li>
                  <li><strong className="text-white">Writing:</strong> Grammarly improves writing quality while preserving human voice and intent</li>
                </ul>
              </div>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Education should follow the same pattern.
              </p>
            </section>

            {/* What Human-in-the-Loop Education Looks Like */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                What Human-in-the-Loop Education Looks Like
              </h2>

              <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Imagine a tutoring session where:
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 mb-8">
                <ul className="space-y-3 text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <li>• The AI provides instant, PhD-level subject expertise for any question</li>
                  <li>• The AI catches computational errors before they confuse students</li>
                  <li>• The AI suggests multiple explanation approaches based on the student's learning style</li>
                  <li>• The AI tracks individual student progress and identifies weak areas</li>
                  <li><strong className="text-white">• The human provides motivation, encouragement, and emotional support</strong></li>
                  <li><strong className="text-white">• The human adapts the teaching approach based on student personality and needs</strong></li>
                  <li><strong className="text-white">• The human maintains accountability and creates genuine learning relationships</strong></li>
                </ul>
              </div>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                This isn't theoretical—it's technically achievable today.
              </p>
            </section>

            {/* Two Pathways to Implementation */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                Two Pathways to Implementation
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    Path 1: Empowering Professional Educators
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    AI can handle the heavy lifting of subject expertise, allowing teachers to focus on what they do best—building relationships, providing motivation, and ensuring holistic student development.
                  </p>
                  <ul className="text-white/70 text-sm space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <li>• Reduces technical barriers to effective teaching</li>
                    <li>• Enables confident multi-subject instruction</li>
                    <li>• Provides perfect student learning history recall</li>
                    <li>• Frees bandwidth for creative teaching aspects</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    Path 2: Democratizing Teaching Capability
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    AI can enable any intelligent person to become an effective tutor by providing the subject expertise they lack.
                  </p>
                  <ul className="text-white/70 text-sm space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <li>• Students earning income through tutoring</li>
                    <li>• Parents teaching their own children</li>
                    <li>• Career changers entering education</li>
                    <li>• Geographic expansion of quality tutoring</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Singapore Proof Point */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The Singapore Proof Point
              </h2>

              <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Singapore provides the perfect testing ground for this approach:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <ul className="space-y-3 text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <li><strong className="text-white">High tutoring adoption:</strong> 70% of students already use private tutoring</li>
                    <li><strong className="text-white">Quality consciousness:</strong> Parents prioritize educational excellence and are willing to pay for it</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <ul className="space-y-3 text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <li><strong className="text-white">Tech-forward population:</strong> Early adopters of educational technology</li>
                    <li><strong className="text-white">Cultural fit:</strong> Strong tradition of supplementary education and learning support</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                The market validation is clear: parents are already paying $60-80/hour for quality tutoring. They would gladly pay $40-60/hour for AI-enhanced human tutoring that provides the same expertise at lower cost.
              </p>
            </section>

            {/* The Path Forward */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: "'Castoro', serif" }}>
                The Path Forward
              </h2>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                The false choice between quality and affordability in education disappears when we stop viewing AI and humans as competitors and start seeing them as collaborators.
              </p>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-8 mb-8">
                <p className="text-white/90 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We have the technology today to:
                </p>
                <ul className="space-y-2 text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <li>• Provide every student with access to PhD-level subject expertise</li>
                  <li>• Enable any intelligent person to become an effective tutor</li>
                  <li>• Scale quality education globally without sacrificing human elements</li>
                  <li>• Create economic opportunities while solving educational access problems</li>
                </ul>
              </div>

              <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                The question isn't whether AI will transform education—it's whether we'll do it thoughtfully, preserving what makes human teaching irreplaceable while leveraging what makes AI invaluable.
              </p>

              <p className="text-white/90 leading-relaxed mb-12 text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                The future of education is neither purely human nor purely artificial. It's intelligently hybrid.
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