import React from "react";
import {
  FolderIcon,
  ServerIcon,
  LockClosedIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

// Service Data
const services = [
  {
    icon: FolderIcon,
    title: "Managed IT Services",
    desc: "24/7 maintenance and monitoring that keeps your computers, servers, and systems up and running.",
    link: "Stay up and running →",
  },
  {
    icon: ServerIcon,
    title: "Backup & Recovery",
    desc: "Prevent data loss with encrypted storage and virtualized recovery, then enjoy increased productivity.",
    link: "Defend your data →",
  },
  {
    icon: LockClosedIcon,
    title: "Cyber Security",
    desc: "Protect your business from malware, hackers, viruses, and the most common security threats.",
    link: "Protect your business →",
  },
  {
    icon: CloudIcon,
    title: "Cloud Engineering",
    desc: "Optimize AWS, Azure, or GCP with Infrastructure as Code, autoscaling, and managed services.",
    link: "Scale your cloud →",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Stay Up, Stay Running, Stay Protected
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-[#f3f6f9]  hover:bg-white transition-all duration-300 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl"
            >
              {/* Icon with hover bounce */}
              <s.icon
                className="w-14 h-14 text-[#0e2b5c] mb-5 transition-transform duration-300 group-hover:animate-bounceOnce"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#0e2b5c] mb-3">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-black0 mb-5">{s.desc}</p>

              {/* Link CTA */}
              <a
                href="#"
                className="text-sky-500 font-semibold text-sm hover:underline"
              >
                {s.link}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700">
            IT services built specifically for your business.{" "}
            <a href="#" className="text-sky-600 font-semibold hover:underline">
              Find your solution →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
