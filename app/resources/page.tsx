import React from 'react'
import Hero from '@/components/resources/hero'
import Gallary from '@/components/resources/gallary'
import Insights from '@/components/resources/insights'
import Downloads from '@/components/resources/downloads'
import Appsection from '@/components/resources/Appsection'
import Videovalt from '@/components/resources/videovalt'
const page = () => {
  return (
    <div>
      <Hero/>
      <Videovalt/>
      <Gallary/>
      <Insights/>
      <Downloads/>
      <Appsection/>
    </div>
  )
}

export default page