import React from "react";

const CTA = () => {
  return (
    
    <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="relative z-10 flex flex-col items-center justify-center text-center bg-[#0a0a23] rounded-xl shadow-2xl">
        <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 px-6 sm:px-8 md:px-10 py-10 sm:py-12 rounded-3xl shadow-2xl w-full max-w-md sm:max-w-xl md:max-w-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
            Are you ready for a better, more productive business?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8">
            Stop worrying about technology problems. Focus on your business. Let us provide the support you deserve.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-red-500 font-semibold text-lg hover:text-red-400 transition"
          >
            Contact Us
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
