// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-full lg:w-[90vw] mx-auto">
//       <h2 className="text-3xl text-brand-secondary font-bold font-login lg:mt-28 mt-32">
//         ABOUT US
//       </h2>

//       <div className="flex lg:flex-row flex-col mx-auto bg-brand-darkGray mt-10 lg:p-5 p-2 rounded-md items-center justify-between">
//         <p className="text-sm text-brand-secondary text-center lg:text-left lg:mx-5 w-full lg:w-[50%] ">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit neque, veritatis mollitia tempore nam exercitationem minus dolor dolorum est magnam reiciendis alias doloribus sunt. Fugit a doloremque odit commodi ipsam eveniet facilis temporibus nobis mollitia reprehenderit porro asperiores, cupiditate molestias deserunt, autem ratione corporis provident veniam tempore quae. Delectus labore vel, sit a facere adipisci? Architecto cupiditate corporis, consequatur tempore accusamus, saepe nulla delectus animi modi libero dolorum odit non fugit minima reprehenderit veniam quasi ipsa aliquid perferendis esse neque ducimus ullam magni! Pariatur impedit tempora quibusdam maxime, eaque eos voluptatem illum, quae odit dolorum iste, sapiente quas voluptatum.
//         </p>
//         <div className="flex items-center justify-center bg-brand-primary mx-5 rounded-md lg:w-[480px] mt-4 lg:mt-0 w-[300px] h-[170px] lg:h-[197px]">
//           <p className="text-md text-brand-secondary text-center p-2 font-bold">
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, delectus!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center overflow-hidden">
      {/* ===== BACKGROUND IMAGE ===== */}
      <Image
        src="/images/about.jpeg"
        alt="StoneBake Kitchen"
        fill
        priority
        className="object-cover object-center"
      />

      {/* ===== DARK PREMIUM OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10 container w-[90vw] mx-auto flex justify-center lg:justify-end">
        {/* TEXT CONTENT */}
        <div className="max-w-2xl text-white space-y-6 text-center lg:text-left">
          {/* Label */}
          <span className="tracking-[4px] uppercase text-stone-yellow text-sm font-semibold">
            Our Story
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Crafted With Fire,
            <br />
            Served With Passion
          </h1>

          {/* Description */}
          <p className="text-lg text-white/80 leading-relaxed">
            StoneBake is more than pizza — it's a tradition of flavor. From
            handcrafted dough to stone-oven perfection, every bite reflects
            dedication, quality, and love for food.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center ">
            <Link href="/menu">
              <button className="bg-stone-red hover:bg-stone-orange text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition">
                Discover Our Menu
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM FADE EFFECT ===== */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-bg to-transparent" />
    </section>
  );
}
