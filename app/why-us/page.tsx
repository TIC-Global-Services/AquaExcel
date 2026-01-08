import React from 'react'
import Hero from '@/components/why-us/hero'
import Identity from '@/components/why-us/Identity'
import Aquaexcelapart from '@/components/why-us/aquaexcelapart'
import Downloadapp from '@/components/why-us/downloadapp'
import Distribution from '@/components/why-us/Distribution'
import Quality from '@/components/why-us/quality'
import Sustainableinnovation from '@/components/why-us/Sustainableinnovation'
const page = () => {
  return (
    <div>
        <Hero/>
        <Identity/>
        <Aquaexcelapart/>
        <Downloadapp/>
        <Distribution/>
        <Quality/>
        <Sustainableinnovation/>
    </div>
  )
}

export default page