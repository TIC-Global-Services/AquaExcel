import React from 'react'
import HeroBanner from '@/components/carrer/hero'
import Workwithus from '@/components/carrer/workwithus'
import LifeAt from '@/components/carrer/lifeat'
import Careeropportunities from '@/components/carrer/Careeropportunities'
import Grouplegacy from '@/components/carrer/grouplegacy'

const page = () => {
  return (
    <div>
      <HeroBanner/>
      <Workwithus/>
      <LifeAt/>
      <Careeropportunities/>
      <Grouplegacy/>
    </div>
  )
}

export default page