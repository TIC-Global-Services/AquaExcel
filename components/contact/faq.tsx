"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import ContainerLayout from "@/layouts/ContainerLayout";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: "What materials are Aqua Excel products made of?",
        answer:
            "Yes. Aqua Excel products are specifically designed to withstand hard-water usage. We use anti-corrosive alloys, advanced surface coatings, and limescale-resistant aerators to minimize mineral buildup. This ensures smoother water flow, better hygiene, and a longer lifespan even in regions with extremely hard water. Regular rinsing is usually enough to keep the fittings looking and functioning like new.",
    },
    {
        id: 2,
        question: "Are your products suitable for hard water?",
        answer:
            "Yes. Aqua Excel products are specifically designed to withstand hard-water usage. We use anti-corrosive alloys, advanced surface coatings, and limescale-resistant aerators to minimize mineral buildup. This ensures smoother water flow, better hygiene, and a longer lifespan even in regions with extremely hard water. Regular rinsing is usually enough to keep the fittings looking and functioning like new.",
    },
    {
        id: 3,
        question: "Do you offer warranty on your products?",
        answer:
            "Yes. Aqua Excel products are specifically designed to withstand hard-water usage. We use anti-corrosive alloys, advanced surface coatings, and limescale-resistant aerators to minimize mineral buildup. This ensures smoother water flow, better hygiene, and a longer lifespan even in regions with extremely hard water. Regular rinsing is usually enough to keep the fittings looking and functioning like new.",
    },
    {
        id: 4,
        question: "Do you offer installation support or replacement parts?",
        answer:
            "Yes. Aqua Excel products are specifically designed to withstand hard-water usage. We use anti-corrosive alloys, advanced surface coatings, and limescale-resistant aerators to minimize mineral buildup. This ensures smoother water flow, better hygiene, and a longer lifespan even in regions with extremely hard water. Regular rinsing is usually enough to keep the fittings looking and functioning like new.",
    },
    {
        id: 5,
        question: "Are your water tanks safe for drinking water storage?",
        answer:
            "Yes. Aqua Excel products are specifically designed to withstand hard-water usage. We use anti-corrosive alloys, advanced surface coatings, and limescale-resistant aerators to minimize mineral buildup. This ensures smoother water flow, better hygiene, and a longer lifespan even in regions with extremely hard water. Regular rinsing is usually enough to keep the fittings looking and functioning like new.",
    },
];

const Faq = () => {
    const [activeId, setActiveId] = useState<number | null>(2);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setActiveId(null);
        }
    }, []);

    const activeFAQ = faqData.find((item) => item.id === activeId);

    return (
        <ContainerLayout>
            <div className="w-full bg-white md:py-16">
                <div className="md:max-w-7xl mx-auto">
                    <h2 className="text-xl md:text-[44px] text-center md:text-left font-medium text-black mb-0 md:mb-10">
                        Frequently Asked Questions
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center relative px-4 lg:px-0">
                        {/* Question List */}
                        <div className="flex flex-col bg-[#FFFFFF] rounded-[8px] shadow-sm space-y-4 lg:space-y-3 relative z-10">
                            {faqData.map((item) => (
                                <div key={item.id} className="border-b border-gray-100 last:border-0 lg:border-0">
                                    <button
                                        onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                                        className={`group flex items-center w-full py-4 text-left px-2 gap-2 transition-all duration-300 ${activeId === item.id ? "opacity-100 bg-[#FFFEFA]" : "opacity-100 lg:opacity-60 lg:hover:opacity-100"
                                            }`}
                                    >
                                        {/* Custom Radio Circle - Desktop Only */}
                                        <div
                                            className={`block flex-shrink-0 md:w-5 md:h-5 h-4 w-4 rounded-full transition-colors  duration-300 ${activeId === item.id ? "bg-black" : "bg-gray-300"
                                                }`}
                                        />

                                        <span className="text-xs md:text-base font-inter-tight text-black font-regular flex-grow">
                                            {item.question}
                                        </span>

                                        <ChevronRight
                                            className={`w-6 h-6 text-gray-400 transition-transform duration-300 ml-auto flex-shrink-0 ${activeId === item.id ? "text-black rotate-90" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Mobile Answer - Accordion Style */}
                                    <div
                                        className={`lg:hidden overflow-hidden px-3 md:px-0 transition-[max-height,opacity] duration-300 ease-in-out ${activeId === item.id ? "max-h-96 opacity-100 pb-4 bg-[#FAF9F5]" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-gray-600 font-inter-tight leading-relaxed text-xs md:text-base pl-1">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Answer Section - Hidden on Mobile */}
                        <div className="hidden lg:block shadow-sm rounded-[16px] relative z-0 lg:-ml-20 w-full lg:w-[110%] ">
                            <div className="bg-[#FAF9F6] rounded-[16px] p-8 md:p-12 lg:p-12 lg:pl-32 h-full min-h-[500px] flex flex-col justify-start transition-all duration-500 ease-in-out ">
                                <h3 className="text-xl md:text-2xl font-hoves-pro font-medium text-black mb-6">
                                    {activeFAQ?.question}
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-base font-inter-tight">
                                    {activeFAQ?.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerLayout>
    );
};

export default Faq;
