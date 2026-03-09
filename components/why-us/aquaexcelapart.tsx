import React from 'react'
import ScrollOverlappingCards from '../reuseable/ScrollOverlappingCards'
import sliderimg1 from '@/assets/why-us/whyusslider1.png'
import sliderimg2 from '@/assets/why-us/whyusslider2.png'
import sliderimg3 from '@/assets/why-us/whyusslider3.png'
import sliderimg4 from '@/assets/why-us/whyusslider4.png'
import sliderimg5 from '@/assets/why-us/whyusslider5.png'
import ContainerLayout from '@/layouts/ContainerLayout'

const aquaexcelapart = () => {
    const cards = [
        {
            title: "Hassle-free fittings that last",
            image: "https://ik.imagekit.io/pgtxr2fmn/WhyUs/AquaExcelApart/whyusslider1.png" // Use .src for string path if needed, but imported images work directly
        },
        {
            title: "Crafted for Durability",
            image: "https://ik.imagekit.io/pgtxr2fmn/WhyUs/AquaExcelApart/whyusslider2.png"
        },
        {
            title: "Elegant yet practical.",
            image: "https://ik.imagekit.io/pgtxr2fmn/WhyUs/AquaExcelApart/whyusslider3.png"
        },
        {
            title: "Precision-Engineered Quality",
            image: "https://ik.imagekit.io/pgtxr2fmn/WhyUs/AquaExcelApart/whyusslider4.png"
        },
        {
            title: "Trusted by Professionals",
            image: "https://ik.imagekit.io/pgtxr2fmn/WhyUs/AquaExcelApart/whyusslider5.png"
        },
    ]

    return (
        <ContainerLayout className=''>
            <ScrollOverlappingCards
            heading="What Sets Aqua Excel Apart"
            paragraph="Premium quality, thoughtful design, and reliable performance come together to create products that truly stand out."
            cards={cards}
        />
        </ContainerLayout>
    )
}

export default aquaexcelapart