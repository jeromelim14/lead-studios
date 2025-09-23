"use client";

import React from "react";

export default function Home() {
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
                onClick={() => {
                  window.open('/challenge.html', '_blank');
                }}
              >
                Sales Funnel Challenge
              </button>
              <button
                className="px-6 py-2 text-sm font-bold h-10 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                style={{fontFamily: 'Inter, sans-serif'}}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).Calendly) {
                    (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/jerome-leadstudios/call'});
                  }
                }}
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </nav>

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
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).Calendly) {
              (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/jerome-leadstudios/call'});
            }
          }}
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
    </div>
  );
}