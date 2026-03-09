"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if we already showed the loader in this session
        const hasLoaded = sessionStorage.getItem("hasLoaded");
        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        // Lock scroll initially
        document.body.style.overflow = "hidden";

        // Simulate loading percentage
        const duration = 2500; // 2.5 seconds matching the vibe
        const intervalTime = 30; // 30ms per tick
        const totalSteps = duration / intervalTime;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            // Custom easing effect for numbers: fast then slow
            const easeOutQuart = 1 - Math.pow(1 - currentStep / totalSteps, 4);
            const currentProgress = Math.min(100, Math.floor(easeOutQuart * 100));
            setProgress(currentProgress);

            if (currentStep >= totalSteps) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                    sessionStorage.setItem("hasLoaded", "true");
                }, 400); // Wait a bit at 100%
            }
        }, intervalTime);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (!isLoading) {
            document.body.style.overflow = ""; // Reset scroll
        }
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white"
                >
                    <div className="text-5xl md:text-7xl font-light tracking-wide">
                        {progress}%
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
