// import React from "react";

// export default function CompanyBand() {
//   const cards = [
//     {
//       eyebrow: "Our services",
//       title: "How we can help",
//       linkText: "Discover now →",
//       image: "public/images/card1.jpg",
//       link: "#services",
//     },
//     {
//       eyebrow: "Our expertise",
//       title: "Why partner with us",
//       linkText: "Discover now →",
//       image: "public/images/card2.jpg",
//       link: "#expertise",
//     },
//     {
//       eyebrow: "Our customers",
//       title: "Client success stories",
//       linkText: "Discover now →",
//       image: "public/images/card3.jpg",
//       link: "#customers",
//     },
//   ];

//   return (
//     <section className="relative w-full">
//       {/* Violet background up to mid of images */}
//       <div className="absolute inset-0 bg-[#1a0f29] h-[65%] md:h-[60%] z-0" />

//       {/* Content */}
//       <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
//         {/* Top Section */}
//         <div className="py-20 grid md:grid-cols-2 gap-12 items-center text-white">
//           <div>
//             <p className="uppercase tracking-widest text-sky-400 text-sm font-semibold mb-3">
//               Our company
//             </p>
//             <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
//               AlgoVexa is your trusted source in IT services and support
//             </h2>
//           </div>
//           <div>
//             <p className="text-lg text-white/80 leading-relaxed">
//               AlgoVexa is a privately owned IT Support and IT Services business
//               formed in 1988. Today we’re proud to boast a strong team of IT
//               engineers who thrive on solving your IT problems and meeting your
//               business needs.
//             </p>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="mt-10 grid md:grid-cols-3 gap-8">
//           {cards.map((card, i) => (
//             <div
//               key={i}
//               className="relative group rounded-lg shadow-lg overflow-visible"
//             >
//               {/* Image */}
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
//               />

//               {/* White floating card */}
//               <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 bg-white shadow-md px-6 py-3 text-center w-[85%] rounded-lg overflow-hidden h-20">
//                 <div className="flex flex-col items-center justify-start h-full overflow-hidden">
//                   {/* Eyebrow */}
//                   <p className="text-sky-700 font-semibold text-base mb-1 transition-all duration-300 delay-0 group-hover:-translate-y-full group-hover:opacity-0">
//                     {card.eyebrow}
//                   </p>

//                   {/* Title */}
//                   <h3 className="text-gray-900 text-lg font-bold mb-0 transition-all duration-300 delay-150 group-hover:-translate-y-6">
//                     {card.title}
//                   </h3>

//                   {/* CTA link */}
//                   <a
//                     href={card.link}
//                     className="text-sky-500 text-sm font-semibold inline-block mt-1 opacity-0 translate-y-4 transition-all duration-300 delay-300 group-hover:opacity-100 group-hover:translate-y-0"
//                   >
//                     {card.linkText}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Line */}
//         <div className="mt-20 text-center text-gray-700 text-lg">
//           Stop wasting time and money on technology.{" "}
//           <a
//             href="#explore"
//             className="text-sky-500 font-semibold hover:underline"
//           >
//             Explore our company
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";

export default function CompanyBand() {
  const cards = [
    {
      eyebrow: "Our services",
      title: "How we can help",
      linkText: "Discover now →",
      image: "/images/card1.jpg",
      link: "#services",
    },
    {
      eyebrow: "Our expertise",
      title: "Why partner with us",
      linkText: "Discover now →",
      image: "/images/card2.jpg",
      link: "#expertise",
    },
    {
      eyebrow: "Our customers",
      title: "Client success stories",
      linkText: "Discover now →",
      image: "/images/card3.jpg",
      link: "#customers",
    },
  ];

  return (
    <section className="relative w-full bg-[#eceff3]">
      {/* Violet background */}
      <div className="absolute inset-0 bg-[#1a0f29] h-[65%] md:h-[60%] z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="py-20 grid md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <p className="uppercase tracking-widest text-sky-400 text-sm font-semibold mb-3">
              Our company
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
              AlgoVexa is your trusted source in IT services and support
            </h2>
          </div>
          <div>
            <p className="text-lg text-white/80 leading-relaxed">
              AlgoVexa is a privately owned IT Support and IT Services business
              formed in 1988. Today we’re proud to boast a strong team of IT
              engineers who thrive on solving your IT problems and meeting your
              business needs.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-0
       grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative group rounded-lg shadow-lg overflow-visible"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="bg-[#0e2b5c] w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
              />

              {/* White floating card */}
              <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-white shadow-md text-center w-[85%] rounded-lg overflow-hidden h-20">
                {/* Inner scroll container (3 lines stacked) */}
                <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-5">
                  {/* Line 1 (hidden on hover) */}
                  <p className="text-sky-700 font-semibold text-base mb-1">
                    {card.eyebrow}
                  </p>

                  {/* Line 2 (always visible, shifts up) */}
                  <h3 className="text-gray-900 text-lg font-bold mb-1">
                    {card.title}
                  </h3>

                  {/* Line 3 (hidden at first, visible on hover) */}
                  <a
                    href={card.link}
                    className="text-sky-500 text-sm font-semibold inline-block"
                  >
                    {card.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-20 pb-6- text-center text-gray-700 text-lg">
          Stop wasting time and money on technology.{" "}
          <a
            href="#explore"
            className="text-sky-500 font-semibold hover:underline"
          >
            Explore our company
          </a>
        </div>
      </div>
    </section>
  );
}
