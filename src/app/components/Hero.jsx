// "use client";

// import React, { useRef } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";

// const Hero = () => {
//   const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     autoplay.current,
//   ]);

//   const slides = [
//     { id: 1, url: "/images/stone1.jpg", alt: "Stone Bake Pizza" },
//     { id: 2, url: "/images/stone2.jpg", alt: "Stone Bake Pasta" },
//     { id: 3, url: "/images/stone3.jpg", alt: "Stone Bake Specials" },
//   ];

//   const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
//   const scrollNext = () => emblaApi && emblaApi.scrollNext();

//   return (
//     <section className="relative w-full  overflow-hidden mt-20">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {slides.map((slide) => (
//             <div
//               key={slide.id}
//               className="relative flex-[0_0_100%] w-full lg:h-[100vh] h-[60vh]"
//             >
//               {/* ✅ FULL WIDTH IMAGE */}
//               <Image
//                 src={slide.url}
//                 alt={slide.alt}
//                 fill
//                 priority
//                 sizes="100vw"
//                 className="object-fill"
//               />

//               {/* Optional dark overlay */}
//               <div className="absolute inset-0 bg-black/20" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation */}
//       <button
//         onClick={scrollPrev}
//         className="absolute top-1/2 left-5 -translate-y-1/2 bg-stone-red text-white p-3 rounded-full shadow-lg"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={scrollNext}
//         className="absolute top-1/2 right-5 -translate-y-1/2 bg-stone-red text-white p-3 rounded-full shadow-lg"
//       >
//         <ChevronRight />
//       </button>
//     </section>
//   );
// };

// export default Hero;
"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full lg:min-h-[100vh] flex items-center overflow-hidden  pt-20 lg:pt-0 pb-20 lg:pb-0">
      {/* Background Glow */}

      <div className="container w-[92vw] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-5 text-center lg:text-left lg:mt-0 mt-10">
          {/* Tagline */}
          <span className="bg-stone-yellow/20 text-stone-deep px-4 py-3 rounded-full text-sm sm:text-sm font-semibold">
            🔥 Fresh From Stone Oven
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-deep py-4 leading-tight">
            Fresh Stone-Baked <br />
            <span className="text-stone-red">Pizza Made With Passion</span>
          </h1>

          {/* Description */}
          <p className="text-base lg:text-lg text-stone-deep/80 max-w-xl mx-auto lg:mx-0 ">
            Experience authentic flavors crafted with premium ingredients,
            melted cheese, and perfectly baked crust straight from our stone
            oven.
          </p>

          {/* Desktop Buttons */}
          <div className="lg:flex hidden flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/menu">
              <button className="bg-stone-red hover:bg-stone-orange text-white px-7 py-3 rounded-lg font-semibold shadow-lg transition duration-300">
                Explore Menu
              </button>
            </Link>

            <Link href="/trackorder">
              <button className="border border-stone-deep text-stone-deep px-7 py-3 rounded-lg font-semibold hover:bg-stone-deep hover:text-white transition duration-300">
                Track Order
              </button>
            </Link>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center items-center mt-2 lg:mt-0">
          {/* Glow Behind Pizza (responsive size) */}
          <div className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] bg-stone-yellow/40 blur-3xl rounded-full"></div>

          {/* Pizza Image */}
          <div className="relative w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[580px] h-[260px] sm:h-[340px] lg:h-[460px] animate-float">
            <Image
              src="/images/hero.png"
              alt="Stone Bake Pizza"
              fill
              priority
              sizes="(max-width:768px) 90vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* ================= MOBILE BUTTONS ================= */}
        <div className="flex lg:hidden flex-wrap gap-3 justify-center mt-4">
          <Link href="/menu">
            <button className="bg-stone-red hover:bg-stone-orange text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300">
              Explore Menu
            </button>
          </Link>

          <Link href="/trackorder">
            <button className="border border-stone-deep text-stone-deep px-6 py-3 rounded-lg font-semibold hover:bg-stone-deep hover:text-white transition duration-300">
              Track Order
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
