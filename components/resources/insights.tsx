"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import insight1 from '@/assets/resource/inspire-1.png'
import insight2 from '@/assets/resource/inspire-2.png'
import insight3 from '@/assets/resource/inspire-3.png'
import ContainerLayout from '@/layouts/ContainerLayout'
import SimpleParallax from 'simple-parallax-js'
import { useLocation } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const insights = () => {
 useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    
    if (hash) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
    }
  }, []);
    // Utility function to generate URL-friendly slugs from titles
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
            .trim()
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
    }

    const insightsData = [
        {
            title: "Why Brass Threading  matters",
            subtitle: "Read the Article",
            image: insight1,
            slug: "brass-threading" // Matches blogData slug
        },
        {
            title: "Water-saving aerators explained",
            subtitle: "Read the Article",
            image: insight2,
            slug: "water-saving-aerators-explained" // Matches blogData slug
        },
        {
            title: "Fixing common bathroom leaks",
            subtitle: "Read the Article",
            image: insight3,
            slug: "fixing-common-bathroom-leaks" // Matches blogData slug
        }
    ]
    return (
        <ContainerLayout>
            <div id='blogs'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-medium text-xl md:text-[44px] tracking-tighter font-hoves-pro'>Insights That Inspire</h1>
                    <p className='font-regular text-sm  text-center w-full md:text-xl leading-[120%] font-inter-tight py-2'>
                        Stay updated on the latest in piping materials, systems, techniques,<br className='hidden md:block' /> and industry standards.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
                    {insightsData.map((item, index) => {
                        const isTall = index === 2;
                        // Mobile: Base height 300px. Desktop: Tall item spans 2 rows and is full height. Others 350px.
                        const gridClass = isTall
                            ? 'md:row-span-2 md:col-start-2 md:row-start-1 h-[300px] md:h-full'
                            : 'md:row-span-1 h-[300px] md:h-[300px]';

                        return (
                            <Link
                                key={index}
                                href={`/resources/blogs/${item.slug}`}
                                className={`relative w-full overflow-hidden rounded-[20px] shadow-lg ${gridClass} group`}
                            >
                                <SimpleParallax>
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </SimpleParallax>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                                <div className="absolute inset-0 flex flex-col cursor-pointer justify-end p-6 z-10">
                                    <h2 className="text-white text-xl md:text-[28px] leading-[24px] md:leading-[30px] tracking-tighter  font-hoves-pro font-medium mb-1 uppercase text-left">{item.title}</h2>
                                    <div className="flex items-center gap-2 text-white/90 cursor-pointer group-hover:text-white transition-colors">
                                        <span className="md:text-xl text-base font-inter-tight font-medium">Read the Article</span>
                                        <MoveRight className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </ContainerLayout>
    )
}

export default insights