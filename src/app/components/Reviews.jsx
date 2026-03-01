// import React from "react";
// import Image from "next/image";
// const BhookMitao = () => {
//   return (
//     <div className='flex items-center justify-center h-full w-[90vw] bg-brand-darkGray mx-auto rounded-md my-20'>
//         <div className='flex flex-col items-center justify-center my-10 mx-2'>
// <Image
// src="/images/cate9.png"
// width={350}
// height={350}
// className="object-cover "
// />
// <p className='text-sm mt-5 text-brand-secondary lg:px-20 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas neque nisi beatae hic numquam, error dolore quos rem eum minus animi ipsum aliquid aliquam omnis obcaecati molestiae cumque alias nam dolores ex ea. Quaerat exercitationem dolores eos. Temporibus consequatur omnis et inventore sunt repellendus ratione perferendis itaque molestiae pariatur.</p>
//         </div>

//     </div>
//   );
// };

// export default BhookMitao;
"use client";
import { useEffect, useState } from "react";

/* Counter inside same component */
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

export default function StatsSection() {
  return (
    <section className="py-24 bg-stone-red text-white">
      <div className="container w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <div>
          <h3 className="text-4xl font-bold text-stone-yellow">
            <Counter target={10000} />+
          </h3>
          <p className="mt-2 text-white/80">Happy Customers</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-stone-yellow">
            <Counter target={25} />+
          </h3>
          <p className="mt-2 text-white/80">Signature Recipes</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-stone-yellow">
            <Counter target={5} />
          </h3>
          <p className="mt-2 text-white/80">Cities Served</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-stone-yellow">
            <Counter target={100} />%
          </h3>
          <p className="mt-2 text-white/80">Fresh Daily</p>
        </div>
      </div>
    </section>
  );
}
