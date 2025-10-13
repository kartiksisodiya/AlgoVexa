import React from "react";
import { Award } from "lucide-react";

const ValuesSection = () => {
  return (
    <section className="bg-[#0a0a23] text-white py-20">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <Award className="w-12 h-12 text-[#00c1d4] mx-auto mb-6" />
        <p className="text-sm font-semibold tracking-widest text-[#00c1d4] uppercase">
          Our Values
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold mt-3 leading-snug">
          EXCELLENCE
        </h2>
        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Excellence drives everything we do. From innovative IT solutions to
          dedicated support, we aim to exceed expectations and deliver lasting
          value for our clients worldwide.
        </p>
      </div>
    </section>
  );
};

export default ValuesSection;
