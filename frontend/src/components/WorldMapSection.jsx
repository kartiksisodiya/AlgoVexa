import React from "react";
import { motion } from "framer-motion";

const avatars = [
  { id: 1, top: "55%", left: "52%", img: "https://i.pravatar.cc/80?img=11" }, // India
  { id: 2, top: "50%", left: "55%", img: "https://i.pravatar.cc/80?img=12" }, // Bangladesh
  { id: 3, top: "58%", left: "50%", img: "https://i.pravatar.cc/80?img=13" }, // Pakistan
  { id: 4, top: "60%", left: "57%", img: "https://i.pravatar.cc/80?img=14" }, // Thailand
  { id: 5, top: "65%", left: "54%", img: "https://i.pravatar.cc/80?img=15" }, // Indonesia
  { id: 6, top: "40%", left: "30%", img: "https://i.pravatar.cc/80?img=16" }, // Europe
  { id: 7, top: "35%", left: "15%", img: "https://i.pravatar.cc/80?img=17" }, // US
];

export default function WorldMapSection() {
  return (
    <section className="relative bg-secondary text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          IT Departments Across the Globe
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Businesses with and without IT support teams across regions
        </p>

        <div className="relative w-full h-[500px] bg-[#e8e8e8] rounded-2xl overflow-hidden">
          {/* Dark world map background */}
          <img
            src="images/worldmap.png"
            alt="World Map"
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />

          {/* Animated avatars */}
          {avatars.map((a) => (
            <div
              key={a.id}
              className="absolute"
              style={{ top: a.top, left: a.left }}
            >
              {/* Glowing pulse */}
              <motion.span
                className="absolute -inset-3 rounded-full bg-accent/70 blur-lg"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.8, 0, 0.8] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Avatar */}
              <img
                src={a.img}
                alt="avatar"
                className="relative w-12 h-12 rounded-full border-2 border-white shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
