"use client";

import { CalendarWithTimePresets } from "@/components/ui/calendar-with-time-presets";
import { X } from "lucide-react";

interface DemoCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoCalendarModal({ isOpen, onClose }: DemoCalendarModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-auto">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="bg-white rounded-xl p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-black mb-2" style={{ fontFamily: "'Castoro', serif" }}>
              Schedule Your Demo
            </h2>
            <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
              Choose a date and time that works for you
            </p>
          </div>
          <CalendarWithTimePresets />
        </div>
      </div>
    </div>
  );
}