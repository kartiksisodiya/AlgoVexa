import React from 'react'
import ServicesGrid from '../components/ServicesGrid'

export default function ServicesPage(){
  return (
    <div>
      <header className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6"><h1 className="text-3xl font-bold">Our Services</h1></div>
      </header>
      <ServicesGrid />
    </div>
  )
}

