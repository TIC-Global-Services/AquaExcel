'use client'

import React, { use, useState } from 'react'
import ContainerLayout from '@/layouts/ContainerLayout'
import ProductCard from '../reuseable/ProductCard'
import { Taps } from '@/app/data/taps'
import { bathfitting } from '@/app/data/bathfitting'
import { pipes } from '@/app/data/Pipes'
import { maxion } from '@/app/data/maxion'
import { accessories } from '@/app/data/accesorries'
import Appsection from './appsection'
// Placeholder images - using imports if available or strings
// Ideally replace with actual assets
const placeholderImage = '/assets/logo.png' // Fallback

// Mock Data Structure
const productSections = [
  {
    id: 'taps',
    title: 'Taps & Fittings',
    description: 'Engineered for smooth water flow, strong sealing, and reliable daily use.Made with quality materials and precise craftsmanship to deliver long-lasting performance in any space.',
    products: Taps
  },
  {
    id: 'Bath', // Matching tab ID
    title: 'Bath Fittings',
    description: 'Experience luxury and functionality combined.',
    products: bathfitting
  }, {
    id: 'Pipe',
    title: 'Pipes',
    description: 'Built to withstand pressure, heat, and time.Delivers clean flow, strong joints, and reliable installation across all applications.',
    products: pipes
  },
  {
    id: 'maxion',
    title: 'Maxion',
    description: 'A durable, heavy-duty cover designed to secure underground chambers, ensuring safety, easy maintenance access, and long-lasting protection from external damage.',
    products: maxion
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: 'Essential add-ons that complete your plumbing setup.Each accessory is built for reliable performance, safer water flow, and long-lasting use.',
    products: accessories
  }
]

const ProductList = () => {
  const [activeTab, setActiveTab] = useState('taps')

  const tabs = [
    { id: "taps", label: "Taps & Fittings" },
    { id: "Bath", label: "Bath Fittings" },
    { id: "Pipe", label: "Pipes" },
    { id: "maxion", label: "Maxion" },
    { id: "accessories", label: "Accessories" },
  ]

  // Filter or show all? Design usually implies one section active at a time for tabs
  const activeSection = productSections.find(s => s.id === activeTab)
  console.log("activeSection",activeSection)

  return (
    <ContainerLayout>
      <div className="py-20">
        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-4 mb-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-9 py-3 rounded-xl border transition-all cursor-pointer duration-300 font-inter-tight text-sm md:text-xl ${activeTab === tab.id
                ? 'bg-[#323232] text-white'
                : 'bg-white text-black border-[#AAAAAA] hover:border-gray-400'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section Header */}
        {activeSection && (
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="font-hoves-pro font-medium tracking-tighter leading-[120%] text-3xl md:text-[40px] mb-4">
              {activeSection.title}
            </h2>
            <p className="font-inter-tight text-[#000000] text-center max-w-4xl text-base md:text-xl leading-[120%]">
              {activeSection.description}
            </p>
          </div>
        )}

        {/* Products by Subcategory */}
        {activeSection?.products.map((subcategory, subIndex) => (
          <div key={subIndex} className="col-span-full">
            {/* Subcategory Heading */}
            {subcategory.heading && (
              <h3 className="font-hoves-pro font-medium leading-[120%] tracking-tighter text-2xl md:text-[32px] mb-8 mt-8">
                {subcategory.heading}
              </h3>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {subcategory.products.map((product, productIndex) => (
                <ProductCard
                  key={productIndex}
                  title={product.title}
                  description={product.description}
                  image={product.image || placeholderImage}
                />
              ))}
            </div>
          </div>
        ))}
       
       {(activeSection?.id === "Pipe" || activeSection?.id === "Bath") ? <Appsection/> : null}
        {!activeSection && (
          <div className="text-center py-20 text-gray-400">
            Content coming soon for this category.
          </div>
        )}
      </div>
    </ContainerLayout>
  )
}

export default ProductList