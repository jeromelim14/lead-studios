"use client";
import React, { useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function ChallengePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What if my current ads are already performing well?",
      answer: "That's exactly who this challenge is designed for. We specialize in taking already-performing ads and making them 10%+ better. If your ads are converting well, we can make them convert even better by installing our proven sales letter framework."
    },
    {
      question: "How do you guarantee a 10%+ improvement?",
      answer: "We've tested this framework with hundreds of high-ticket service providers. Our sales letter approach pre-qualifies prospects better and shortens sales cycles. If we don't improve your cost per appointment by at least 10%, you get a full refund."
    },
    {
      question: "What exactly do you install in 14 days?",
      answer: "We create and install a high-converting sales letter that replaces or enhances your current landing page. This pre-qualifies prospects before they book, meaning you get higher-quality appointments that are more likely to close."
    },
    {
      question: "Do I need to pause my current advertising?",
      answer: "No. We work alongside your existing campaigns. We'll set up A/B tests to prove the improvement before fully transitioning to the new sales letter approach."
    },
    {
      question: "What if I'm not in coaching/agency/high-ticket services?",
      answer: "This challenge is specifically designed for high-ticket service providers, coaches, and agency owners. If that's not you, this might not be the right fit. We focus on businesses where improving appointment quality has massive ROI."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Castoro']">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light text-white">
              Lead Studios
            </div>
            <LiquidButton
              className="px-6 py-2 text-sm font-bold h-10"
              borderWidth="2px"
              style={{fontFamily: 'Inter, sans-serif'}}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/jerome-leadstudios/call'});
                }
              }}
            >
              Accept Challenge
            </LiquidButton>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16 px-6 py-20">
          {/* Challenge Badge */}
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-red-400 font-medium text-sm" style={{fontFamily: 'Inter, sans-serif'}}>🎯 14-Day Challenge</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-normal leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent max-w-5xl mx-auto">
            We'll Beat Your Best Converting Ad by{' '}
            <span className="text-red-400 font-bold">10%+</span> in{' '}
            <span className="underline decoration-red-400 decoration-2 underline-offset-4">14 Days</span>, Guaranteed.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-['Inter'] max-w-4xl mx-auto font-medium">
            For High-Ticket Service Providers, Coaches & Agency Owners Who Want More Booked Appointments
          </p>

          <p className="text-sm md:text-base text-gray-500 font-['Inter'] italic max-w-4xl mx-auto">
            We'll install a high-converting Sales Letter that pre-qualifies prospects and shortens your sales cycle—guaranteed to improve your cost per appointment by 10%+ or full refund.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <LiquidButton
              className="px-12 py-6 text-lg font-bold h-16"
              borderWidth="2px"
              style={{fontFamily: 'Inter, sans-serif'}}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/jerome-leadstudios/call'});
                }
              }}
            >
              Accept the Challenge - Book Call
            </LiquidButton>

            <p className="text-xs text-gray-500 font-['Inter'] mt-4">
              🎯 10%+ improvement guaranteed • 14-day timeline • Full refund if we don't deliver
            </p>
          </div>
        </div>

        {/* Challenge Details Section */}
        <div className="max-w-6xl mx-auto px-6 space-y-20 py-20">

          {/* The Challenge */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-normal bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Challenge
            </h2>
            <div className="space-y-6 text-gray-400 font-['Inter'] max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed">
                You're spending money on ads. They're working. But you know they could work better.
              </p>
              <p className="text-lg leading-relaxed">
                The problem isn't your targeting. It's not your budget. It's what happens after someone clicks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-700/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h4 className="text-red-400 font-semibold text-xl mb-4 font-['Inter']">Here's Our Bold Claim:</h4>
              <p className="text-white text-lg leading-relaxed font-medium font-['Inter']">
                We'll take your best performing ad and improve your cost per appointment by at least 10% in just 14 days using our proven sales letter framework—or you get your money back.
              </p>
            </div>
          </section>

          {/* How We Do It */}
          <section className="text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-normal bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How We Beat Your Best Ad
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl font-['Inter']">1</span>
                </div>
                <h3 className="text-xl text-white mb-3 font-medium">Pre-Qualification</h3>
                <p className="text-gray-400 font-['Inter']">Our sales letters filter out tire-kickers before they book, meaning every appointment is with a qualified prospect.</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl font-['Inter']">2</span>
                </div>
                <h3 className="text-xl text-white mb-3 font-medium">Sales Cycle Compression</h3>
                <p className="text-gray-400 font-['Inter']">Prospects arrive pre-sold on your value proposition, cutting your average sales call time and increasing close rates.</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl font-['Inter']">3</span>
                </div>
                <h3 className="text-xl text-white mb-3 font-medium">Proven Framework</h3>
                <p className="text-gray-400 font-['Inter']">We use the exact same sales letter framework that's generated millions in revenue for high-ticket service providers.</p>
              </div>
            </div>
          </section>

          {/* Guarantee Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/20 border border-red-700/50 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                Iron-Clad Guarantee
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-['Inter'] max-w-3xl mx-auto">
                If we don't improve your cost per appointment by at least 10% within 14 days, you get every penny back. No questions asked.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2 font-['Inter']">10%+</div>
                  <div className="text-gray-400 font-['Inter']">Improvement Guaranteed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2 font-['Inter']">14</div>
                  <div className="text-gray-400 font-['Inter']">Days Maximum</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2 font-['Inter']">100%</div>
                  <div className="text-gray-400 font-['Inter']">Money Back</div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-normal bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Beat Your Best Ad?
            </h2>
            <div className="space-y-6 text-gray-400 font-['Inter'] max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed">
                Every day you wait is money left on the table.
              </p>
              <p className="text-lg leading-relaxed">
                Book your call now and let's prove we can beat your best converting ad.
              </p>
            </div>

            <div className="pt-4">
              <LiquidButton
                className="px-12 py-6 text-lg font-bold h-16"
                borderWidth="2px"
                style={{fontFamily: 'Inter, sans-serif'}}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).Calendly) {
                    (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/jerome-leadstudios/call'});
                  }
                }}
              >
                Accept the Challenge - Book Call Now
              </LiquidButton>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-normal bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-12 text-center">
            Challenge Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800/30 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-white font-medium text-lg pr-4 font-['Inter']">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-red-400 flex-shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed font-['Inter']">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-4 text-white">Lead Studios</h4>
              <p className="text-gray-400 font-['Inter']">jerome@leadstudios.io</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}