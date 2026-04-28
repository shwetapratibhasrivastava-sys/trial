import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StatSection from './components/StatSection'
import Services from './components/Services'
import Priorities from './components/Priorities'
import CommonSymptoms from './components/CommonSymptoms'
import WhyChooseUs from './components/WhyChooseUs'
import PatientJourney from './components/PatientJourney'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import CTA from './components/CTA'

const Homepage = () => {
  return (
    <>
    <div className='w-full"'>
    <HeroSection/>
    <AboutSection/>
    <StatSection/>
    <Services/>
    <Priorities/>
    <CommonSymptoms/>
    <WhyChooseUs/>
    <PatientJourney/>
    <Testimonials/>
    <FAQ/>
    <Gallery/>
    <Blog/>
    <CTA/>
    </div>

    </>
  )
}

export default Homepage