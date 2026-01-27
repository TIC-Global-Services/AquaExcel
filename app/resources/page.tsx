import React from 'react'
import Hero from '@/components/resources/hero'
import Gallary from '@/components/resources/gallary'
import Insights from '@/components/resources/insights'
import Downloads from '@/components/resources/downloads'
import AppSection from '@/components/carrer/Appsection'
import Videovalt from '@/components/resources/videovalt'
const page = () => {
  return (
    <div>
      <Hero/>
      <Videovalt/>
      <Gallary/>
      <Insights/>
      <Downloads/>
     <AppSection/>
    </div>
  )
}

export default page