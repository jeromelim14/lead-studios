"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DemoCalendarModal } from "@/components/ui/demo-calendar-modal";

export function SimpleHero() {
    const [showCalendar, setShowCalendar] = useState(false);
    return (
        <div className="relative h-[90vh] w-full bg-black flex items-center justify-center -mb-96">
            <div className="relative z-10 flex h-full w-full items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
                    <motion.h1
                        className="text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-tight leading-none mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontFamily: "'Castoro', serif" }}
                    >
                        Professional
                        <br />
                        Teaching AI
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl text-white tracking-normal max-w-5xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontFamily: "'Castoro', serif" }}
                    >
                        Leverage Top-of-Class AI Trained on Singapore's Elite Pedagogies
                    </motion.p>
                    <motion.div
                        className="flex justify-center items-center mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button 
                            onClick={() => setShowCalendar(true)}
                            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-gray-900 hover:text-white transition duration-300" 
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Request a Demo
                        </button>
                    </motion.div>
                </div>
            </div>
            
            {/* Calendar Modal */}
            <DemoCalendarModal 
                isOpen={showCalendar} 
                onClose={() => setShowCalendar(false)} 
            />
        </div>
    );
}