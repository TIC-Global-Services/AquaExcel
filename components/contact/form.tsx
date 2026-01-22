"use client";
import ContainerLayout from '@/layouts/ContainerLayout';
import React, { useState } from 'react';

const ContactForm = () => {
    const [activeTab, setActiveTab] = useState<'contact' | 'dealer'>('contact');

    return (
      <ContainerLayout>
          <section className="py-10 lg:py-5 bg-background">
            <div className="max-w-5xl mx-auto">
                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-10">
                    <button
                        onClick={() => setActiveTab('contact')}
                        className={`px-6 py-3 rounded-full font-hoves-pro font-medium text-base transition-all ${activeTab === 'contact'
                                ? 'bg-[#E31E24] text-white'
                                : 'bg-[#FAF9F5] text-foreground hover:bg-[#f0ede8]'
                            }`}
                    >
                        Contact Form
                    </button>
                    <button
                        onClick={() => setActiveTab('dealer')}
                        className={`px-6 py-3 rounded-full font-hoves-pro font-medium text-base transition-all ${activeTab === 'dealer'
                                ? 'bg-[#E31E24] text-white'
                                : 'bg-[#FAF9F5] text-foreground hover:bg-[#f0ede8]'
                            }`}
                    >
                        Dealer Form
                    </button>
                </div>

                {/* Contact Form */}
                {activeTab === 'contact' && (
                    <div className="rounded-[20px] lg:rounded-[40px] py-2 lg:py-2">
                        <div className="text-center mb-10">
                            <h2 className="font-hoves-pro font-medium text-2xl lg:text-4xl text-foreground mb-4">
                                Let's Connect
                            </h2>
                            <p className="font-hoves-pro font-light text-sm lg:text-base text-foreground/80 max-w-2xl mx-auto">
                                We're Here To Answer Your Questions And Discuss Your Ideas. Whether It's Project Support, Product Info,
                                Or Just To Get In Touch, We'd Love To Hear From You And Will Respond Promptly.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="City / State"
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
                                />
                            </div>

                            <textarea
                                placeholder="Message / Description"
                                rows={4}
                                className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors resize-none"
                            />

                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="bg-[#E31E24] text-white px-8 py-3 rounded-xl font-hoves-pro font-medium text-base hover:bg-[#c91a1f] transition-colors"
                                >
                                    Submit Customer Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Dealer Form */}
                {activeTab === 'dealer' && (
                    <div className="rounded-[20px] lg:rounded-[40px] py-2 lg:py-2">
                        <div className="text-center mb-10">
                            <h2 className="font-hoves-pro font-medium text-2xl lg:text-4xl text-foreground mb-4">
                                Become a Dealer
                            </h2>
                            <p className="font-hoves-pro font-light text-sm lg:text-base text-foreground/80 max-w-2xl mx-auto">
                                Interested In Becoming A Dealer? Share Your Details With Us, And Our Team Will Connect With You To Discuss
                                Partnership Opportunities And Requirements.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Business Type(Dealer/Distributor/Retail)"
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <input
                                    type="email"
                                    placeholder="Email ID"
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="City/State"
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
                                />
                            </div>

                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-hoves-pro text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors resize-none"
                            />

                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="bg-[#E31E24] text-white px-8 py-3 rounded-xl font-hoves-pro font-medium text-base hover:bg-[#c91a1f] transition-colors"
                                >
                                    Connect With Us
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </section>
      </ContainerLayout>
    );
};

export default ContactForm;
