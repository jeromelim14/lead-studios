"use client";

import { NavBarDemo } from "@/components/ui/navbar-demo";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', { email });
  };

  if (submitted) {
    return (
      <main className="bg-black min-h-screen">
        <NavBarDemo />
        <div className="relative min-h-screen w-full bg-black flex items-center justify-center pt-20">
          <div className="max-w-lg mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight mb-6" style={{ fontFamily: "'Castoro', serif" }}>
                You're In
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Thank you for joining our waitlist. We'll notify you when Eduly.ai is ready.
              </p>
              <p className="text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                Keep an eye on your inbox for updates.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen">
      <NavBarDemo />
      
      <div className="relative min-h-screen w-full bg-black flex items-center justify-center pt-20">
        <div className="max-w-2xl mx-auto px-6 w-full">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight mb-8" style={{ fontFamily: "'Castoro', serif" }}>
              Join the Waitlist
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
              Be the first to experience AI-powered teaching excellence.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <strong className="text-white">Get exclusive early access</strong> with your first month free, exclusive affiliate deals, and personalized onboarding experiences tailored to your teaching style.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full px-8 py-6 bg-black/50 border border-white/20 rounded-lg text-xl text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-black/80 transition duration-300 relative z-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
                autoComplete="email"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-6 rounded-lg font-medium text-xl hover:bg-white/90 transition duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join Waitlist
            </button>
          </motion.form>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              No spam. We'll only notify you when we launch.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}