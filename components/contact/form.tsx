"use client";
import ContainerLayout from '@/layouts/ContainerLayout';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generalEnquirySchema, GeneralEnquiryFormData, dealerEnquirySchema, DealerEnquiryFormData } from './schema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [activeTab, setActiveTab] = useState<'contact' | 'dealer'>('contact');

    // General Enquiry Form Hook
    const {
        register: registerGeneral,
        handleSubmit: handleSubmitGeneral,
        formState: { errors: errorsGeneral, isSubmitting: isSubmittingGeneral },
        reset: resetGeneral
    } = useForm<GeneralEnquiryFormData>({
        resolver: zodResolver(generalEnquirySchema)
    });

    // Dealer Enquiry Form Hook
    const {
        register: registerDealer,
        handleSubmit: handleSubmitDealer,
        formState: { errors: errorsDealer, isSubmitting: isSubmittingDealer },
        reset: resetDealer
    } = useForm<DealerEnquiryFormData>({
        resolver: zodResolver(dealerEnquirySchema)
    });

    const onSubmitGeneral = async (data: GeneralEnquiryFormData) => {
        try {
            // Prepare App Script Payload
            const payload = {
                formType: 'enquiry',
                ...data
            };

            
            await fetch('https://script.google.com/macros/s/AKfycbyVx3wt3wwkP_j90A1odjBPIHcpTWcPkZfD6ThdDsfre4gfIiLt-FUcUwovQaOnsS8t/exec', {
                method: 'POST',
                body: JSON.stringify(payload)
            });

            console.log('General Enquiry Submitted', payload);
            toast.success('Enquiry submitted successfully!');
            resetGeneral();
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Failed to submit. Please try again later.');
        }
    };

    const onSubmitDealer = async (data: DealerEnquiryFormData) => {
        try {
            // Prepare App Script Payload
            const payload = {
                formType: 'dealer',
                ...data
            };

            await fetch('https://script.google.com/macros/s/AKfycbyVx3wt3wwkP_j90A1odjBPIHcpTWcPkZfD6ThdDsfre4gfIiLt-FUcUwovQaOnsS8t/exec', {
                method: 'POST',
                body: JSON.stringify(payload)
            });

            console.log('Dealer Enquiry Submitted', payload);
            toast.success('Enquiry submitted successfully!');
            resetDealer();
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Failed to submit. Please try again later.');
        }
    };

    return (
      <ContainerLayout>
          <ToastContainer position="bottom-right" />
          <section className="py-15 lg:py-5 bg-background">
            <div className="max-w-5xl mx-auto">
                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-10">
                    <button
                        onClick={() => {
                            setActiveTab('contact');
                            resetGeneral();
                            resetDealer();
                        }}
                        className={`md:px-4 px-3 py-3 rounded-full cursor-pointer font-hoves-pro font-medium text-sm md:text-base transition-all ${activeTab === 'contact'
                                ? 'bg-[#E31E24] text-white'
                                : 'bg-[#FAF9F5] text-foreground hover:bg-[#f0ede8]'
                            }`}>
                       General Enquiry
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab('dealer');
                            resetGeneral();
                            resetDealer();
                        }}
                        className={`px-4 md:px-6 py-3 rounded-full cursor-pointer font-hoves-pro font-medium text-sm md:text-base transition-all ${activeTab === 'dealer'
                                ? 'bg-[#E31E24] text-white'
                                : 'bg-[#FAF9F5] text-foreground hover:bg-[#f0ede8]'
                            }`}>
                        Dealers Enquiry
                    </button>
                </div>

                {/* Contact Form */}
                {activeTab === 'contact' && (
                    <div className="rounded-[20px] lg:rounded-[40px] py-2 lg:py-2">
                        <div className="text-center mb-8">
                            <h2 className="font-hoves-pro font-medium text-xl lg:text-[44px] md:leading-[46px] tracking-tighter text-foreground md:mb-4 mb-2">
                                Let's Connect
                            </h2>
                            <p className="font-inter-tight font-regular text-sm lg:text-xl text-black   leading-[120%]  px-6 md:px-0 md:max-w-5xl md:mx-auto">
                                We're here to answer your questions and discuss your ideas. Whether it's project support, product info,
                                or <br className='md:block hidden'/> just to get in touch, we'd love to hear from you and will respond promptly.
                            </p>
                        </div>

                        <form onSubmit={handleSubmitGeneral(onSubmitGeneral)} className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        {...registerGeneral('name')}
                                        className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] placeholder:font-medium  focus:outline-none focus:border-[#E31E24] transition-colors"
                                    />
                                    {errorsGeneral.name && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsGeneral.name.message}</p>}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="City / State"
                                        {...registerGeneral('city')}
                                        className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] placeholder:font-medium focus:outline-none focus:border-[#E31E24] transition-colors"
                                    />
                                    {errorsGeneral.city && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsGeneral.city.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        {...registerGeneral('phoneNumber')}
                                        className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] placeholder:font-medium focus:outline-none focus:border-[#E31E24] transition-colors"
                                    />
                                    {errorsGeneral.phoneNumber && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsGeneral.phoneNumber.message}</p>}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        {...registerGeneral('email')}
                                        className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] placeholder:font-medium focus:outline-none focus:border-[#E31E24] transition-colors"
                                    />
                                    {errorsGeneral.email && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsGeneral.email.message}</p>}
                                </div>
                            </div>

                            <div>
                                <textarea
                                    placeholder="Message / Description"
                                    rows={4}
                                    {...registerGeneral('message')}
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] focus:outline-none placeholder:font-medium  focus:border-[#E31E24] transition-colors resize-none"
                                />
                                {errorsGeneral.message && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsGeneral.message.message}</p>}
                            </div>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmittingGeneral}
                                    className="bg-[#E31E24] cursor-pointer text-white cursor-pointer px-4 md:px-8 py-3 rounded-[10px] md:rounded-xl font-hoves-pro font-medium text-sm md:text-base hover:bg-[#c91a1f] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isSubmittingGeneral ? 'Submitting...' : 'Submit Customer Enquiry'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Dealer Form */}
                {activeTab === 'dealer' && (
                    <div className="rounded-[20px] lg:rounded-[40px] py-2 lg:py-2">
                        <div className="text-center mb-8">
                            <h2 className="font-hoves-pro font-medium text-2xl tracking-tighter lg:text-4xl text-foreground md:mb-4 mb-2">
                                Become a Dealer
                            </h2>
                            <p className="font-inter-tight font-regular text-sm lg:text-xl tracking-[0%] leading-[120%] px-6 md:px-0  text-black max-w-5xl mx-auto">
                                Interested in becoming a dealer? Share your details with us, and our team will connect with you to discuss<br className='md:block hidden'/>
                                partnership opportunities and requirements.
                            </p>
                        </div>

                        <form onSubmit={handleSubmitDealer(onSubmitDealer)} className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        {...registerDealer('name')}
                                        className="w-full px-4 py-4 bg-[#FAF9F5] border placeholder:font-medium  border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] focus:outline-none focus:border-[#E31E24] transition-colors"
                                    />
                                    {errorsDealer.name && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsDealer.name.message}</p>}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Company"
                                        {...registerDealer('company')}
                                        className="w-full px-4 py-4 bg-[#FAF9F5] border placeholder:font-medium  border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] focus:outline-none focus:border-[#E31E24] transition-colors"
                                    />
                                    {errorsDealer.company && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsDealer.company.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Business Type(Dealer/Distributor/Retail)"
                                        {...registerDealer('businessType')}
                                        className="w-full px-4 py-4 bg-[#FAF9F5] border placeholder:font-medium  border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] focus:outline-none focus:border-[#E31E24] transition-colors"
                                    />
                                    {errorsDealer.businessType && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsDealer.businessType.message}</p>}
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        {...registerDealer('phoneNumber')}
                                        className="w-full px-4 py-4 bg-[#FAF9F5] border placeholder:font-medium  border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] focus:outline-none focus:border-[#E31E24] transition-colors"
                                    />
                                    {errorsDealer.phoneNumber && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsDealer.phoneNumber.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email ID"
                                        {...registerDealer('email')}
                                        className="w-full px-4 py-4 bg-[#FAF9F5] border placeholder:font-medium  border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] focus:outline-none focus:border-[#E31E24] transition-colors"
                                    />
                                    {errorsDealer.email && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsDealer.email.message}</p>}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="City"
                                        {...registerDealer('city')}
                                        className="w-full px-4 py-4 bg-[#FAF9F5] border placeholder:font-medium  border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] focus:outline-none focus:border-[#E31E24] transition-colors"
                                    />
                                    {errorsDealer.city && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsDealer.city.message}</p>}
                                </div>
                            </div>

                            <div>
                                <textarea
                                    placeholder="Write your message here"
                                    rows={4}
                                    {...registerDealer('message')}
                                    className="w-full px-4 py-4 bg-[#FAF9F5] border  placeholder:font-medium  border-[#646464] rounded-lg font-inter-tight text-foreground placeholder:text-[#757575] focus:outline-none focus:border-[#E31E24] transition-colors resize-none"
                                />
                                {errorsDealer.message && <p className="text-[#E31E24] text-sm mt-1 px-1">{errorsDealer.message.message}</p>}
                            </div>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmittingDealer}
                                    className="bg-[#E31E24] cursor-pointer text-white px-4 md:px-8 py-3 rounded-[10px] md:rounded-xl font-hoves-pro font-medium text-sm md:text-base hover:bg-[#c91a1f] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isSubmittingDealer ? 'Connecting...' : 'Connect With Us'}
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
