// import React from 'react'

// const Values = () => {
//   const data = [
//     { image: '/images/slide1.jpg', title: "Believe in All People", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." },
//     { image: '/images/slide3.jpg', title: "Recognize", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." },
//     { image: '/images/slide2.jpg', title: "Run Great Restaurants", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." },
//     { image: '/images/slide3.jpg', title: "Go for Breakthrough", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." },
//     { image: '/images/slide1.jpg', title: "Build Know How", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." },
//     { image: '/images/slide3.jpg', title: "Work as a Team", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." }
//   ]
//   return (
//     <div className=' container flex flex-col items-center w-[81vw] justify-center h-full mx-auto'>
//       <h2 className='text-[41px] text-brand-secondary font-bold lg:mt-28 mt-32'>Our Values</h2>
//       <div className=' w-full grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 mx-auto mt-10'>
//         {data.map((d, index) => (
//           <div key={index} className={`value text-brand-secondary w-full flex flex-col flex-shrink gap-5 mb-12`}>
//             <img src={d.image} className='w-full object-contain' />
//             <p className=' text-[32px] w-full' >{d.title}</p>
//             <p className='text-[16px] font-ftr'>{d.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Values

"use client";

import Image from "next/image";
import React from "react";

const Values = () => {
  const data = [
    {
      image: "/images/slide1.jpg",
      title: "Believe in All People",
      desc: "We value respect, growth, and opportunity for everyone who joins our journey.",
    },
    {
      image: "/images/slide3.jpg",
      title: "Recognize Excellence",
      desc: "Celebrating achievements and rewarding dedication drives our culture forward.",
    },
    {
      image: "/images/slide2.jpg",
      title: "Run Great Restaurants",
      desc: "Every experience is crafted with quality, passion, and consistency.",
    },
    {
      image: "/images/slide3.jpg",
      title: "Go for Breakthrough",
      desc: "Innovation and creativity help us redefine modern dining experiences.",
    },
    {
      image: "/images/slide1.jpg",
      title: "Build Know-How",
      desc: "Learning never stops — we grow through collaboration and experience.",
    },
    {
      image: "/images/slide3.jpg",
      title: "Work as a Team",
      desc: "Success happens when passion, teamwork, and trust come together.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-stone-bg">
      <div className="container w-[90vw] mx-auto">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-deep">
            Our Values
          </h2>

          <div className="w-24 h-1 bg-stone-red mx-auto mt-4 rounded-full" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((d, index) => (
            <div
              key={index}
              className="
              group
              bg-white/70
              backdrop-blur-xl
              border border-stone-border
              rounded-3xl
              overflow-hidden
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl font-bold text-stone-red">{d.title}</h3>

                <p className="text-stone-deep/80 text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
