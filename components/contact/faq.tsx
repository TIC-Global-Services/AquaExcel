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
            <div className="w-full bg-white py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-medium text-black mb-16">
                        Frequently Asked Questions
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start relative px-4 lg:px-0">
                        {/* Question List */}
                        <div className="flex flex-col bg-[#FFFFFF] rounded-2xl shadow-sm space-y-4 lg:space-y-6 relative z-10 p-5 lg:p-0 lg:bg-transparent lg:shadow-none lg:rounded-none">
                            {faqData.map((item) => (
                                <div key={item.id} className="border-b border-gray-100 last:border-0 lg:border-0">
                                    <button
                                        onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                                        className={`group flex items-center w-full py-4 text-left transition-all duration-300 ${activeId === item.id ? "opacity-100" : "opacity-100 lg:opacity-60 lg:hover:opacity-100"
                                            }`}
                                    >
                                        {/* Custom Radio Circle - Desktop Only */}
                                        <div
                                            className={`hidden lg:block flex-shrink-0 w-5 h-5 rounded-full mr-6 transition-colors duration-300 ${activeId === item.id ? "bg-black" : "bg-gray-300"
                                                }`}
                                        />

                                        <span className="text-lg md:text-xl text-black font-medium flex-grow pr-4">
                                            {item.question}
                                        </span>

                                        <ChevronRight
                                            className={`w-6 h-6 text-gray-400 transition-transform duration-300 ml-auto flex-shrink-0 ${activeId === item.id ? "text-black rotate-90" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Mobile Answer - Accordion Style */}
                                    <div
                                        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${activeId === item.id ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-gray-600 leading-relaxed text-base pl-1">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Answer Section - Hidden on Mobile */}
                        <div className="hidden lg:block relative z-0 lg:-ml-20 w-full lg:w-[110%]">
                            <div className="bg-[#FAF9F6] rounded-[2rem] p-8 md:p-12 lg:p-16 lg:pl-32 h-full min-h-[550px] flex flex-col justify-center transition-all duration-500 ease-in-out">
                                <h3 className="text-2xl md:text-3xl font-medium text-black mb-6">
                                    {activeFAQ?.question}
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
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
