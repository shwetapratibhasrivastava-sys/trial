import React from 'react'
import doctor from '../../../assets/doctor.jpg'

const AboutSection = () => {
  return (
    <section className='w-full py-2 px-8'>
    <div className='wrapper max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>

    <div className='image rounded-xl overflow-hidden'>
    <img src={doctor}alt="Doctor" className="w-[500px] h-[600px] object-cover rounded-xl"/>

    </div>
    <div className='content'></div>
    </div>
    </section>
    
    
  )
}

export default AboutSection