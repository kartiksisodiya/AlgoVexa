import React from "react";

const Features = () => {
  return (
    
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#1a0f29] text-white p-6 rounded-xl shadow-lg text-center w-full">
          <h3 className="text-xl font-semibold mb-4">What We Do</h3>
          <p className="text-gray-200 mb-4">
            Technology can be complicated, but we’ve seen it all before and can help you with any IT issue.
          </p>
          <a href="#" className="text-red-500 font-semibold hover:text-red-400 transition">
            View Our Services →
          </a>
        </div>

        <div className="bg-[#1a0f29] text-white p-6 rounded-xl shadow-lg text-center w-full">
          <h3 className="text-xl font-semibold mb-4">Who We Help?</h3>
          <p className="text-gray-200 mb-4">
            Our vertical solutions expertise allows your business to streamline workflow and increase productivity.
          </p>
          <a href="#" className="text-red-500 font-semibold hover:text-red-400 transition">
            Industries We Serve →
          </a>
        </div>

        <div className="bg-[#1a0f29] text-white p-6 rounded-xl shadow-lg text-center w-full">
          <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
          <p className="text-gray-200 mb-4">
            We have a proven process to help you move your business forward and we’re with you every step of the way.
          </p>
          <a href="#" className="text-red-500 font-semibold hover:text-red-400 transition">
            Find Out More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
