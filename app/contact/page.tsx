import ContactDetails from '@/components/contact/contactDetails'
import ContactForm from '@/components/contact/form'
import Hero from '@/components/contact/Hero'
import GroupLegacy from '@/components/carrer/grouplegacy'
import React from 'react'
import Faq from '@/components/contact/faq'
import Map from '@/components/contact/map'
import Contactdetailscp from '@/components/contact/contactdetailscp'

const page = () => {
  return (
    <div>
      <Hero/>
      <Contactdetailscp/>
      <ContactForm/>
      {/* <GroupLegacy/> */}
      <Map/>
      <Faq/>
    </div>
  )
}

export default page