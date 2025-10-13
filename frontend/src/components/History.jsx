import React from "react";

const History = () => {
  return (
    
    <section class="bg-gray-50 py-16">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-extrabold font-garamond text-center text-gray-800 mb-12">Our Journey</h2>
    <ul class="space-y-8 relative before:absolute before:top-0 before:left-6 before:h-full before:w-1 before:bg-primary">
      <li class="relative pl-12">
        <span class="absolute left-0 top-1.5 w-4 h-4 bg-[#ff6b6b] rounded-full"></span>
        <h3 class="text-xl font-semibold text-[#151530]">College Days</h3>
        <p class="text-gray-700 mt-2">We were two individual college graduates passionate about technology and innovation.</p>
      </li>
      <li class="relative pl-12">
        <span class="absolute left-0 top-1.5 w-4 h-4 bg-[#ff6b6b] rounded-full"></span>
        <h3 class="text-xl font-semibold text-[#151530]">Freelancing Beginnings</h3>
        <p class="text-gray-700 mt-2">We started our journey as freelance IT professionals, working on projects to build our expertise and reputation.</p>
      </li>
      <li class="relative pl-12">
        <span class="absolute left-0 top-1.5 w-4 h-4 bg-[#ff6b6b] rounded-full"></span>
        <h3 class="text-xl font-semibold text-[#151530]">Founding Algovexa</h3>
        <p class="text-gray-700 mt-2">Our experience led us to start <strong>Algovexa</strong>, a company dedicated to providing top-notch IT services and solutions to clients worldwide.</p>
      </li>
      <li class="relative pl-12">
        <span class="absolute left-0 top-1.5 w-4 h-4 bg-[#ff6b6b] rounded-full"></span>
        <h3 class="text-xl font-semibold text-[hsl(240,39%,14%)]">Future Vision</h3>
        <p class="text-gray-700 mt-2">We are committed to innovation, quality, and delivering IT services that empower businesses to thrive in the digital age.</p>
      </li>
    </ul>
  </div>
</section>

  );
};

export default History;
