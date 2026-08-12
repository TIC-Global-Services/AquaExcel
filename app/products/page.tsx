import Hero from '@/components/product/hero'
import React, { Suspense } from 'react'
import ProductList from '@/components/product/productList'

const page = () => {
  return (
    <div>
       <Hero />
       <Suspense fallback={null}>
         <ProductList/>
       </Suspense>
    </div>
  )
}

export default page