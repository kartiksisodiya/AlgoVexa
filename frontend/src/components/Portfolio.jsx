import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { title:'Fintech Dashboard' },
  { title:'Healthcare App' },
  { title:'E-commerce Platform' },
]

export default function Portfolio(){
  return (
    <section className="py-16 bg-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <div className="section-sub">Selected work</div>
          <h2 className="text-3xl font-extrabold">Portfolio</h2>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map((p,i)=> (
            <motion.div key={p.title} className="rounded-2xl overflow-hidden shadow" initial={{scale:0.98,opacity:0}} whileInView={{scale:1,opacity:1}} viewport={{once:true}} transition={{delay:i*0.06}}>
              <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">{p.title} (image)</div>
              <div className="p-4 bg-white">
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-gray-500 mt-2">React • Node • AWS</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

