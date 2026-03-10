"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoaderStore } from "@/store/loaderStore";
import { usePathname } from "next/navigation";

export default function Loader() {
    const { progress, isLoading, setIsLoading, setProgress } = useLoaderStore();
    const pathname = usePathname();

    useEffect(() => {
        // Only run check on mount
        const hasLoaded = sessionStorage.getItem("hasLoaded");
        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        if (pathname !== "/") {
            let currentProgress = 0;
            const interval = setInterval(() => {
                currentProgress += 15;
                if (currentProgress >= 100) {
                    currentProgress = 100;
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 400);
                }
                setProgress(currentProgress);
            }, 50);
            return () => clearInterval(interval);
        }
    }, [pathname, setIsLoading, setProgress]);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("hasLoaded");
        if (hasLoaded) return;

        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            sessionStorage.setItem("hasLoaded", "true");
        }
    }, [isLoading]);

    // Cleanup scrolling when Loader mounts/unmounts essentially
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
                    className="fixed inset-0 z-99999 flex items-center justify-center bg-black text-white"
                >
                    <div className="text-5xl md:text-7xl font-light tracking-wide">
                        {progress}%
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
