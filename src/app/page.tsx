"use client";

import React, { useState } from "react";

export default function Home() {
  const [showChallengeModal, setShowChallengeModal] = useState(false);

  const openCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/jerome-leadstudios/call'});
    } else {
      window.open('https://calendly.com/jerome-leadstudios/call', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Castoro']">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light text-white">
              Lead Studios
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="text-white hover:text-red-400 transition-colors text-sm font-medium"
                style={{fontFamily: 'Inter, sans-serif'}}
                onClick={() => setShowChallengeModal(true)}
              >
                Sales Funnel Challenge
              </button>
              <button
                className="px-6 py-2 text-sm font-bold h-10 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                style={{fontFamily: 'Inter, sans-serif'}}
                onClick={openCalendly}
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Challenge Modal */}
      {showChallengeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setShowChallengeModal(false)}
                  className="text-gray-400 hover:text-white text-2xl font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Challenge Content */}
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-red-400" style={{fontFamily: 'Inter, sans-serif'}}>
                  Sales Funnel Challenge
                </h1>

                <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                    We'll Beat Your Best Converting Ad by 10%+ in 14 Days, Guaranteed
                  </h2>
                  <p className="text-lg text-gray-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    For High-Ticket Service Providers, Coaches & Agency Owners
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-red-400 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>10%+</div>
                    <div className="text-gray-300 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>Improvement Guaranteed</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-red-400 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>14</div>
                    <div className="text-gray-300 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>Days Maximum</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-red-400 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>100%</div>
                    <div className="text-gray-300 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>Money Back</div>
                  </div>
                </div>

                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors mb-4"
                  onClick={() => {
                    setShowChallengeModal(false);
                    openCalendly();
                  }}
                  style={{fontFamily: 'Inter, sans-serif'}}
                >
                  Accept the Challenge - Book Call Now
                </button>

                <div className="text-gray-400 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
                  <p>🎯 10%+ improvement guaranteed • 14-day timeline • Full refund if we don't deliver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="pt-20 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-normal leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent max-w-5xl mx-auto mb-6">
          We Scale B2B SaaS Companies Using Hyper-Targeted Marketing.
        </h1>
        <p className="text-sm md:text-base text-gray-400 font-['Inter'] italic max-w-3xl mx-auto mb-8">
          Watch The Video For The Details And Pricing, And Book Your Call On The Next Page.
        </p>

        {/* Video Container */}
        <div className="relative w-full max-w-4xl mx-auto h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden mb-8">
          <iframe
            src="https://www.loom.com/embed/46cdb0fc9fb84f8994bb3c7d63a21e0b?sid=b1716df3-f882-4f59-8842-0670d8d008b5"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-xl"
          />
        </div>

        {/* CTA Button */}
        <button
          className="px-12 py-6 text-lg font-bold h-16 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
          style={{fontFamily: 'Inter, sans-serif'}}
          onClick={openCalendly}
        >
          Book a Call
        </button>
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

      {/* Add Calendly script */}
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
    </div>
  );
}