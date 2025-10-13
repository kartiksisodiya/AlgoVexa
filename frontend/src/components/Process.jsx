import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from './animation'

const steps = [
  { title:'Discover', desc:'Research & discovery' },
  { title:'Design', desc:'UX & UI prototypes' },
  { title:'Build', desc:'Engineering sprints' },
  { title:'Operate', desc:'SRE & continuous improvement' },
]

export default function Process(){
  return (
    <section className="py-16 bg-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="text-black section-sub ">Our process</div>
          <h2 className="text-black text-3xl font-extrabold">How we work</h2>
        </div>
        <motion.div className=" grid md:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}>
          {steps.map((s,i)=>(
            <motion.div key={s.title} variants={fadeInUp} className="bg-red-700 card text-center">
              <div className="text-3xl font-bold text-[#1dc9f9]">{i+1}</div>
              <div className="mt-3 text-blue-50 font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-white">{s.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

