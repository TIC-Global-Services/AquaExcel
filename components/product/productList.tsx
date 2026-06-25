'use client'

import React, { ReactElement, use, useState } from 'react'
import ContainerLayout from '@/layouts/ContainerLayout'
import ProductCard from '../reuseable/ProductCard'
import { Taps } from '@/app/data/taps'
import { bathfitting } from '@/app/data/bathfitting'
import { pipes } from '@/app/data/Pipes'
import { maxion } from '@/app/data/maxion'
import { accessories } from '@/app/data/accesorries'
import Appsection from './appsection'
import { StaticImageData } from 'next/image'
import { ArrowDown, ArrowUp } from 'lucide-react'
import ProductModal from './ProductModal'
// Placeholder images - using imports if available or strings
// Ideally replace with actual assets
const placeholderImage = '/assets/logo.png' // Fallback

// interface product {
//   id?: string,
//   title?: string
//   description?: string | HTMLDivElement
//   product?: StaticImageData
// }


const productSections = [
  {
    id: 'taps',
    title: 'Taps & Fittings',
    description: <>Engineered for smooth water flow, strong sealing, and reliable daily use. Made with quality materials and precise craftsmanship to deliver long-lasting performance in any space</>,
    products: Taps
  },
  {
    id: 'Bath',
    title: 'Bath Fittings',
    description: <>Engineered for smooth flow and everyday reliability, these fittings enhance comfort with every use. From showers to health faucets, each piece delivers durable performance and consistent operation.</>,
    products: bathfitting
  }, {
    id: 'Pipe',
    title: 'Pipes',
    description: <>Built to withstand pressure, heat, and time.Delivers clean flow, strong joints, and reliable installation across all applications.</>,
    products: pipes
  },
  {
    id: 'maxion',
    title: 'Maxion',
    description: <>A durable, heavy-duty cover designed to secure underground chambers, ensuring safety, easy<br /> maintenance access, and long-lasting protection from external damage.</>,
    products: maxion
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: <>Essential add-ons that complete your plumbing setup.
      Each accessory is built for reliable performance, safer water flow, and long-lasting use.</>,
    products: accessories
  }
]

const ProductList = () => {
  const [activeTab, setActiveTab] = useState('taps')
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const toggleViewMore = (categoryKey: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }))
  }

  const tabs = [
    { id: "taps", label: "Taps & Fittings" },
    { id: "Bath", label: "Bath Fittings" },
    { id: "Pipe", label: "Pipes" },
    { id: "maxion", label: "Maxion" },
    { id: "accessories", label: "Accessories" },
  ]

  // Filter or show all? Design usually implies one section active at a time for tabs
  const activeSection = productSections.find(s => s.id === activeTab)
  console.log("activeSection", activeSection)

  return (
    <ContainerLayout disablePaddingX>
      <div className="py-10">
        {/* Tabs */}
        <div className="flex lg:grid lg:grid-cols-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:justify-center md:gap-4 mb-10 md:mb-20 px-2 md:px-0 lg:px-[50px] xl:px-[80px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 md:px-5 lg:py-3 whitespace-nowrap shrink-0 rounded-xl border transition-all cursor-pointer duration-300 font-inter-tight text-sm md:text-xl ${activeTab === tab.id
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
          <div className="text-center mb-24 max-w-4xl mx-auto px-6 md:px-0">
            <h2 className="font-hoves-pro font-medium tracking-tighter leading-[120%] text-3xl md:text-[40px] mb-4">
              {activeSection.title}
            </h2>
            <p className="font-inter-tight text-[#000000] text-center max-w-4xl text-base md:text-xl leading-[120%]">
              {activeSection.description}
            </p>
          </div>
        )}

        <div className="px-6 md:px-[50px] xl:px-[80px]">
          {/* Products by Subcategory */}
          {activeSection?.products.map((subcategory, subIndex) => {
            const categoryKey = `${activeTab}-${subIndex}`;
            const isExpanded = expandedCategories[categoryKey];
            const productsToShow = isExpanded ? subcategory.products : subcategory.products.slice(0, 3);
            const hasMore = subcategory.products.length > 3;

            return (
              <div key={subIndex} className="col-span-full">
                {/* Subcategory Heading */}
                {subcategory.heading && (
                  <h3 className="font-hoves-pro font-medium leading-[120%] text-2xl md:text-[32px] mb-12 mt-12">
                    {subcategory.heading}
                  </h3>
                )}

                {/* Products Grid */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
                  {productsToShow.map((product, productIndex) => (
                    <div key={productIndex} className={`${activeSection.id === 'maxion' ? 'w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]' : 'w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]'}`}>
                      <ProductCard
                        title={product.title}
                        description={product.description}
                        image={product.image || placeholderImage}
                        price={(product as any).price}
                        onClick={() => setSelectedProduct(product)}
                      />
                    </div>
                  ))}
                </div>

                {/* View More Button */}
                {hasMore && (
                  <div className="flex justify-center mt-12 w-full">
                    <button
                      onClick={() => toggleViewMore(categoryKey)}
                      className="px-8 py-3 rounded-xl border flex flex-row-reverse gap-2 border-none transition-all cursor-pointer duration-300 font-inter-tight text-sm md:text-base"
                    >
                      {isExpanded ? <ArrowUp /> : <ArrowDown />}
                      {isExpanded ? 'View Less' : 'View More'}
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          {!activeSection && (
            <div className="text-center py-20 text-gray-400">
              Content coming soon for this category.
            </div>
          )}
        </div>
        <Appsection />
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </ContainerLayout>
  )
}

export default ProductList