import ContactDetails from '@/components/contact/contactDetails'
import ContactForm from '@/components/contact/form'
import Hero from '@/components/contact/Hero'
import GroupLegacy from '@/components/contact/GroupLegacy'
import React from 'react'
import Faq from '@/components/contact/faq'
import Map from '@/components/contact/DealerLocation'
import Contactdetailscp from '@/components/contact/contactdetailscp'
import Headofficemap from '@/components/contact/headofficemap'

const page = () => {
  return (
    <div>
      <Hero/>
      <Contactdetailscp/>
      <ContactForm/>
      <GroupLegacy/>
      <Map/>
      <Faq/>
      <Headofficemap/>
    </div>
  )
}

export default page