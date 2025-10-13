import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[33vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/AboutHero.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content Wrapper */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
          About Algovexa
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-200 mb-6">
          Algovexa is a cutting-edge technology company committed to delivering innovative solutions
          that empower businesses and enhance user experiences.
        </p>
        <a
          href="#learn-more"
          className="inline-block mt-4 px-5 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutHero;
