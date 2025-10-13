import React from 'react'
import Hero from '../components/Hero'
import CompanyBand from '../components/CompanyBand'
import ServicesGrid from '../components/ServicesGrid'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import ContactForm from '../components/ContactForm'
import Industries from "../components/Industries";
import CaseStudies from "../components/CaseStudies";
import WorldMapSection from "../components/WorldMapSection";
import BlogSection from "../components/BlogSection";
import ValuesSection from "../components/ValuesSection";

export default function Home(){
  return (
    <div>
      <Hero />
      <CompanyBand />
      <ServicesGrid />
      <Process />
       <Industries />        {/* New section */}
  <CaseStudies />       {/* New section */}
  <WorldMapSection />   {/* New section */}
  <BlogSection />       {/* New section */}
  <ValuesSection />     {/* New section */}
  <Testimonials />
      <Portfolio />
      
      
      <ContactForm />
    </div>
  )
}

