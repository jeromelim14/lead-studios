"use client";

export default function ChallengePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-red-400">
          Sales Funnel Challenge
        </h1>

        <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">
            We'll Beat Your Best Converting Ad by 10%+ in 14 Days, Guaranteed
          </h2>
          <p className="text-xl text-gray-300">
            For High-Ticket Service Providers, Coaches & Agency Owners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-red-400 mb-2">10%+</div>
            <div className="text-gray-300">Improvement Guaranteed</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-red-400 mb-2">14</div>
            <div className="text-gray-300">Days Maximum</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-red-400 mb-2">100%</div>
            <div className="text-gray-300">Money Back</div>
          </div>
        </div>

        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).Calendly) {
              (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/jerome-leadstudios/call'});
            } else {
              window.open('https://calendly.com/jerome-leadstudios/call', '_blank');
            }
          }}
        >
          Book Your Call Now
        </button>

        <div className="mt-8 text-gray-400">
          <p>🎯 10%+ improvement guaranteed • 14-day timeline • Full refund if we don't deliver</p>
        </div>
      </div>
    </div>
  );
}