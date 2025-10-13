import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from './animation'

const items = [
  { name:'Asha K.', role:'CTO', quote:'They rebuilt our platform and cut latency by 70%.' },
  { name:'Ravi M.', role:'Product Lead', quote:'Outstanding design + engineering partnership.' },
  { name:'Lena O.', role:'CEO', quote:'Secure, reliable, and fast delivery.' },
  { name:'Sam P.', role:'Head IT', quote:'Our SLA has never been better.' },
]

export default function Testimonials(){
  return (
    <section className="py-16 bg-[#f0f0f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <div className="section-sub">Trusted by teams</div>
          <h2 className="text-3xl font-extrabold">What customers say</h2>
        </div>
        <motion.div className="grid  md:grid-cols-4 gap-6 p-7 bg-[#0a0a23] " initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}>
          {items.map((t,i)=> (
            <motion.div key={t.name} className="test-card rounded-lg p-3 bg-gray-300 shadow-lg shadow-slate-700" variants={fadeInUp}>
              <div className="text-gray-900">"{t.quote}"</div>
              <div className="mt-4 font-semibold text-red-600">{t.name}</div>
              <div className="text-sm text-gray-700">{t.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
