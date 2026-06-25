'use client'

import React, { useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface ProductModalProps {
    isOpen: boolean
    onClose: () => void
    product: {
        title: string
        description: string | React.ReactNode
        image: string | StaticImageData
        // Optional fields that we might add to data later
        colors?: { name: string, colorCode: string }[]
        specs?: string[]
        price?: string
    } | null
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
    // Prevent scrolling on body when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    if (!isOpen || !product) return null



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/40 backdrop-blur-sm transition-opacity">
            <div
                className="relative w-full max-w-6xl max-h-full bg-[#F4F3F0] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-sm"
                >
                    <X className="w-5 h-5 text-black" />
                </button>

                <div className="p-6 sm:p-8 md:p-12 overflow-y-hidden w-full">
                    {/* Image Gallery Section */}
                    <div className="relative w-full flex items-center justify-center mb-8 md:mb-10 mt-4 md:mt-0">
                        {/* Left Arrow */}
                        <button className="absolute left-0 md:-left-4 p-2 text-black hover:text-gray-600 transition-colors z-10 hidden md:block">
                            {/* <ChevronLeft className="w-10 h-10" strokeWidth={1} /> */}
                        </button>

                        {/* Main Image Container */}
                        <div className="w-full max-w-sm sm:max-w-md md:max-w-3xl aspect-[4/3] md:aspect-auto md:h-[40vh] md:w-[50vh] bg-[#0F0F0F] rounded-3xl relative flex justify-center items-center overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="p-6 md:p-10"
                            />
                        </div>

                        {/* Right Arrow */}
                        {/* <button className="absolute right-0 md:-right-4 p-2 text-black hover:text-gray-600 transition-colors z-10 hidden md:block">
                            <ChevronRight className="w-10 h-10" strokeWidth={1} />
                        </button> */}
                    </div>

                    {/* Details Section */}
                    <div className="max-w-5xl mx-auto flex flex-col items-start w-full">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mb-6 gap-2">
                            {/* Title */}
                            <h2 className="text-4xl md:text-3xl font-hoves-pro font-medium tracking-tight">
                                {product.title}
                            </h2>

                            {/* Price */}
                            {product.price && (
                                <div className="text-2xl md:text-3xl font-medium text-[#1e1e1e]">
                                    {product.price}
                                </div>
                            )}
                        </div>

                        {/* Colors */}
                        {product.colors && product.colors.length > 0 && (
                            <div className="flex items-center gap-4 mb-10">
                                <span className="text-xl md:text-xl font-hoves-pro font-medium">Colors:</span>
                                <div className="flex gap-4">
                                    {product.colors.map((color, idx) => (
                                        <div key={idx} className="flex flex-col items-center gap-1">
                                            <div
                                                className={`w-8 h-8 rounded-full border border-gray-300 shadow-sm cursor-pointer hover:scale-110 transition-transform`}
                                                style={{ backgroundColor: color.colorCode }}
                                            />
                                            <span className="text-[10px] font-inter-tight text-gray-600">{color.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Specs Layout - Two Columns to prevent cutoff */}
                        <div className="w-full mt-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 font-inter-tight text-sm md:text-base">
                                {product.specs?.map((spec, idx) => (
                                    <div key={idx} className="flex gap-3 items-start text-black font-medium leading-relaxed">
                                        <span className="text-xl leading-none mt-0.5">•</span>
                                        <span className="flex-1">{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Click outside to close (handled by background) */}
            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    )
}

export default ProductModal
