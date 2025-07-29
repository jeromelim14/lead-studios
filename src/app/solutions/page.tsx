"use client";

import { NavBarDemo } from "@/components/ui/navbar-demo";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { DemoCalendarModal } from "@/components/ui/demo-calendar-modal";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  GraduationCap,
  Users,
  Heart,
  Building2,
  TrendingUp,
  Clock,
  Star,
  Award,
  BookOpen,
  Target
} from "lucide-react";

export default function Solutions() {
  const [showCalendar, setShowCalendar] = useState(false);
  
  const bentoFeatures = [
    {
      name: "Parents Looking to Self Tutor",
      description: "Transform into a confident teacher for your own children. Get instant subject expertise, lesson planning guidance, and teaching strategies tailored to your child's learning style.",
      Icon: Heart,
      href: "/waitlist",
      cta: "Join the Waitlist",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    },
    {
      name: "Parents Looking for Tutors",
      description: "Find and evaluate the best tutors for your child. Use AI insights to match learning styles, track progress, and ensure quality instruction.",
      Icon: Users,
      href: "/waitlist",
      cta: "Join the Waitlist",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-gray-800 to-black" />
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      name: "Private Tutors (Part-Time)",
      description: "Maximize your impact in limited hours. AI helps you prepare lessons quickly, adapt to different students, and deliver professional-quality tutoring sessions.",
      Icon: Clock,
      href: "/waitlist",
      cta: "Join the Waitlist",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-black" />
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      name: "Private Tutors (Full-Time)",
      description: "Scale your tutoring business with AI-powered efficiency. Handle more students, deliver consistent quality, and expand your subject expertise effortlessly.",
      Icon: GraduationCap,
      href: "/waitlist",
      cta: "Join the Waitlist",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-gray-800 to-black" />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    },
    {
      name: "Aspiring Tutors",
      description: "Launch your tutoring career with confidence. Learn pedagogical best practices, master different subjects, and build your reputation with AI guidance.",
      Icon: Star,
      href: "/waitlist",
      cta: "Join the Waitlist",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-gray-800 to-black" />
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
      name: "Tuition Centres",
      description: "Standardize excellence across your institution. Train teachers, ensure consistent quality, and scale your operations with AI-powered teaching intelligence.",
      Icon: Building2,
      href: "/waitlist",
      cta: "Join the Waitlist",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-stone-800 to-black" />
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
  ];

  return (
    <main className="bg-black min-h-screen">
      {/* Tubelight Navigation */}
      <NavBarDemo />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Castoro', serif" }}
          >
            Solutions for Every Teaching Journey
          </motion.h1>
        </div>
      </div>


      {/* Use Cases Section */}
      <div className="bg-gradient-to-b from-black to-gray-900/20 py-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* Use Case 1: Parents Looking to Self Tutor */}
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-16 mb-32"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-sm">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white mb-6" style={{ fontFamily: "'Castoro', serif" }}>
                  Parents Looking to Self Tutor
                </h3>
                <p className="text-white/80 leading-relaxed mb-8 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Transform into a confident teacher for your own children. Get instant subject expertise, lesson planning guidance, and teaching strategies tailored to your child's learning style.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Instant subject expertise on demand</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Personalized lesson planning guidance</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Teaching strategies for your child's learning style</span>
                  </div>
                </div>
                <button className="bg-white text-black px-12 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Join the Waitlist
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/50 border border-white/20 rounded-3xl p-12 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    95%
                  </div>
                  <p className="text-white/80 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Parent confidence increase
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Case 2: Parents Looking for Tutors */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-sm">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white mb-6" style={{ fontFamily: "'Castoro', serif" }}>
                  Parents Looking for Tutors
                </h3>
                <p className="text-white/80 leading-relaxed mb-8 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Find and evaluate the best tutors for your child. Use AI insights to match learning styles, track progress, and ensure quality instruction.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>AI-powered tutor matching</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Learning style compatibility analysis</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Real-time progress tracking</span>
                  </div>
                </div>
                <button className="bg-white text-black px-12 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Join the Waitlist
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/50 border border-white/20 rounded-3xl p-12 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    90%
                  </div>
                  <p className="text-white/80 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Better tutor matches
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Case 3: Private Tutors Part-Time */}
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-16 mb-32"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-sm">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white mb-6" style={{ fontFamily: "'Castoro', serif" }}>
                  Private Tutors (Part-Time)
                </h3>
                <p className="text-white/80 leading-relaxed mb-8 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Maximize your impact in limited hours. AI helps you prepare lessons quickly, adapt to different students, and deliver professional-quality tutoring sessions.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Quick lesson preparation tools</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Adaptive student response strategies</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Professional session delivery</span>
                  </div>
                </div>
                <button className="bg-white text-black px-12 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Join the Waitlist
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/50 border border-white/20 rounded-3xl p-12 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    70%
                  </div>
                  <p className="text-white/80 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Less prep time needed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Case 4: Private Tutors Full-Time */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-sm">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white mb-6" style={{ fontFamily: "'Castoro', serif" }}>
                  Private Tutors (Full-Time)
                </h3>
                <p className="text-white/80 leading-relaxed mb-8 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Scale your tutoring business with AI-powered efficiency. Handle more students, deliver consistent quality, and expand your subject expertise effortlessly.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Business scaling and efficiency tools</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Consistent quality across all sessions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Subject expertise expansion</span>
                  </div>
                </div>
                <button className="bg-white text-black px-12 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Join the Waitlist
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-900/50 to-neutral-900/50 border border-white/20 rounded-3xl p-12 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    3x
                  </div>
                  <p className="text-white/80 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Student capacity increase
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Case 5: Aspiring Tutors */}
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-16 mb-32"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-sm">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white mb-6" style={{ fontFamily: "'Castoro', serif" }}>
                  Aspiring Tutors
                </h3>
                <p className="text-white/80 leading-relaxed mb-8 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Launch your tutoring career with confidence. Learn pedagogical best practices, master different subjects, and build your reputation with AI guidance.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Pedagogical best practices training</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Subject mastery acceleration</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Career development and reputation building</span>
                  </div>
                </div>
                <button className="bg-white text-black px-12 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Join the Waitlist
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-900/50 to-stone-900/50 border border-white/20 rounded-3xl p-12 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    80%
                  </div>
                  <p className="text-white/80 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Faster career launch
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Case 6: Tuition Centres */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-sm">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white mb-6" style={{ fontFamily: "'Castoro', serif" }}>
                  Tuition Centres
                </h3>
                <p className="text-white/80 leading-relaxed mb-8 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Standardize excellence across your institution. Train teachers, ensure consistent quality, and scale your operations with AI-powered teaching intelligence.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Standardized teaching excellence</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Teacher training and development</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Scalable operational intelligence</span>
                  </div>
                </div>
                <button className="bg-white text-black px-12 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Join the Waitlist
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-900/50 to-stone-900/50 border border-white/20 rounded-3xl p-12 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
                    50%
                  </div>
                  <p className="text-white/80 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Quality standardization improvement
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-t from-black to-gray-900/20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Castoro', serif" }}
          >
            Ready to Transform Your Teaching?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-white/70 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join thousands of educators who are already experiencing the future of teaching with Eduly.ai.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => setShowCalendar(true)}
              className="bg-white text-black px-12 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-xl min-w-[200px]" 
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Request a Demo
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition duration-300 min-w-[200px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Join the Waitlist
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Calendar Modal */}
      <DemoCalendarModal 
        isOpen={showCalendar} 
        onClose={() => setShowCalendar(false)} 
      />
    </main>
  );
}