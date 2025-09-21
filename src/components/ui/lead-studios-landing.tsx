"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { FeaturesSectionWithCardGradient } from "@/components/ui/feature-section-with-card-gradient";
import { Faq1 } from "@/components/ui/faq1";

export function LeadStudiosLanding() {
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
                Book a Call
              </LiquidButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Container Scroll */}
      <div>
        <ContainerScroll
          titleComponent={
            <div className="text-center space-y-4 mb-0">
              <h1 className="text-4xl md:text-6xl font-normal leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                We Scale B2B SaaS Companies Using Hyper-Targeted Marketing.
              </h1>
              <p className="text-sm md:text-base text-gray-400 font-['Inter'] italic max-w-3xl mx-auto">
                Watch The Video For The Details And Pricing, And Book Your Call On The Next Page.
              </p>
            </div>
          }
        >
          {/* Video Container */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden">
            <iframe 
              src="https://www.loom.com/embed/46cdb0fc9fb84f8994bb3c7d63a21e0b?sid=b1716df3-f882-4f59-8842-0670d8d008b5" 
              frameBorder="0" 
              webkitallowfullscreen="true" 
              mozallowfullscreen="true" 
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl"
            />
          </div>
        </ContainerScroll>
      </div>

      {/* Call to Action Button Section */}
      <div className="text-center py-1 -mt-80 relative z-10">
        <LiquidButton 
          className="px-12 py-6 text-lg font-bold h-16" 
          style={{fontFamily: 'Inter, sans-serif'}}
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).Calendly) {
              (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/jerome-leadstudios/call'});
            }
          }}
        >
          Book a Call
        </LiquidButton>
      </div>


      {/* Features Section */}
      <FeaturesSectionWithCardGradient />


      {/* FAQ Section */}
      <Faq1 />

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