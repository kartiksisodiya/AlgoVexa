import React from "react";

const caseStudies = [
  {
    id: 1,
    company: "Uni",
    logo: "https://via.placeholder.com/120x60.png?text=Uni+Logo",
    bg: "bg-purple",
    title: "University IT Revamp",
    description: "Upgraded infrastructure for a global university network.",
  },
  {
    id: 2,
    company: "Jaguar",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/Jaguar_logo.png",
    bg: "bg-accent",
    title: "Jaguar Cloud Migration",
    description: "Seamless move of mission-critical workloads to the cloud.",
  },
  {
    id: 3,
    company: "TicketBox",
    logo: "https://via.placeholder.com/120x60.png?text=TicketBox",
    bg: "bg-coral",
    title: "TicketBox Security Overhaul",
    description: "Enhanced cybersecurity for a global ticketing platform.",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Case Studies</h2>
          <p className="text-gray-500 mt-2">Real results from trusted brands</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`card text-white ${study.bg} hover:scale-105 transition`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={study.logo} alt={`${study.company} logo`} className="h-10 object-contain" />
                <h3 className="text-xl font-semibold">{study.company}</h3>
              </div>
              <h4 className="text-lg font-medium mb-2">{study.title}</h4>
              <p className="text-white/80">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
