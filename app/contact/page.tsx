import ContactDetails from '@/components/contact/contactDetails'
import ContactForm from '@/components/contact/form'
import Hero from '@/components/contact/Hero'
import GroupLegacy from '@/components/carrer/grouplegacy'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <ContactDetails/>
      <ContactForm/>
      <GroupLegacy/>
    </div>
  )
}

export default page