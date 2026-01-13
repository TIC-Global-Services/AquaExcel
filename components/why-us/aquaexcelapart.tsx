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
            image: sliderimg1.src // Use .src for string path if needed, but imported images work directly
        },
        {
            title: "Crafted for Durability",
            image: sliderimg2.src
        },
        {
            title: "Elegant yet practical.",
            image: sliderimg3.src
        },
        {
            title: "Precision-Engineered Quality",
            image: sliderimg4.src
        },
        {
            title: "Trusted by Professionals",
            image: sliderimg5.src
        },
    ]

    return (
        <ContainerLayout className='mb-5'>
            <ScrollOverlappingCards
            heading="What Sets Aqua Excel Apart"
            paragraph="Premium quality, thoughtful design, and reliable performance come together to create products that truly stand out."
            cards={cards}
        />
        </ContainerLayout>
    )
}

export default aquaexcelapart