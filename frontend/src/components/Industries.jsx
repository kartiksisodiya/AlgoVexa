import React from "react";
import { Briefcase, BarChart2, Factory, HeartPulse, GraduationCap } from "lucide-react";

const Industries = () => {
  return (
    <section className="bg-[#0a0a23] text-white py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-[#00c1d4] uppercase">
            Industries We Serve
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 leading-snug">
            Managed IT services customized for your industry
          </h2>
          <p className="text-gray-400 mt-5">
            Our vertical solutions expertise allows your business to streamline workflow,
            and increase productivity. No matter the business, NanoSoft has you covered
            with industry compliant solutions, customized to your company’s specific needs.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-[#151530] p-6 rounded-xl hover:bg-[#1f1f3d] transition">
            <Briefcase className="w-10 h-10 text-[#00c1d4] mb-4" />
            <h3 className="text-lg font-semibold">Banking</h3>
            <p className="text-gray-400 text-sm mt-2">
              Let us show you how our experience.
            </p>
          </div>

          <div className="bg-[#151530] p-6 rounded-xl hover:bg-[#1f1f3d] transition">
            <BarChart2 className="w-10 h-10 text-[#00c1d4] mb-4" />
            <h3 className="text-lg font-semibold">Capital markets</h3>
            <p className="text-gray-400 text-sm mt-2">
              Let us show you how our experience.
            </p>
          </div>

          <div className="bg-[#151530] p-6 rounded-xl hover:bg-[#1f1f3d] transition">
            <Factory className="w-10 h-10 text-[#00c1d4] mb-4" />
            <h3 className="text-lg font-semibold">Manufacturing</h3>
            <p className="text-gray-400 text-sm mt-2">
              Let us show you how our experience.
            </p>
          </div>

          <div className="bg-[#151530] p-6 rounded-xl hover:bg-[#1f1f3d] transition">
            <HeartPulse className="w-10 h-10 text-[#00c1d4] mb-4" />
            <h3 className="text-lg font-semibold">Healthcare</h3>
            <p className="text-gray-400 text-sm mt-2">
              Let us show you how our experience.
            </p>
          </div>

          <div className="bg-[#151530] p-6 rounded-xl hover:bg-[#1f1f3d] transition">
            <GraduationCap className="w-10 h-10 text-[#00c1d4] mb-4" />
            <h3 className="text-lg font-semibold">Higher education</h3>
            <p className="text-gray-400 text-sm mt-2">
              Let us show you how our experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
