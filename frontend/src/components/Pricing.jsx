import React from 'react'

const plans = [
  { name:'Startup', price:'$1,999', bullets:['MVP build','3 months support'] },
  { name:'Scale', price:'$7,499', bullets:['Product team','6 months support'] },
  { name:'Enterprise', price:'Custom', bullets:['Dedicated team','SLA & audits'] },
]

export default function Pricing(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="section-sub">Pricing</div>
          <h2 className="text-3xl font-extrabold">Plans that scale with you</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(p=> (
            <div className="card text-center" key={p.name}>
              <div className="text-xl font-semibold">{p.name}</div>
              <div className="mt-4 text-3xl font-bold">{p.price}</div>
              <ul className="mt-4 text-gray-600 space-y-2">
                {p.bullets.map(b=> <li key={b}>• {b}</li>)}
              </ul>
              <div className="mt-6"><button className="btn-primary">Choose</button></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
