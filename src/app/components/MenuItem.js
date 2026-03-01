// import React from 'react'
// import { Card, CardContent } from "@/components/ui/card";
// import Image from 'next/image';
// import { Heart } from 'lucide-react';
// import menuData from '@/data/menuData';
// const MenuItem = () => {
//   return (
//     <div>
//        <div className="flex items-center justify-center flex-wrap gap-6 mt-8">
//         {menuData.map((item) => (
//           <div key={item.id} className="p-1 group">
//             <Card
//               className="cursor-pointer rounded-md h-[420px] w-[265px] relative shadow-lg"

//             >
//               <CardContent className="flex flex-col justify-center mx-auto h-full p-4">
//                 <div className="flex justify-center items-center">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={300}
//                     height={300}
//                     className="object-cover rounded-lg transition-transform group-hover:scale-110 duration-300"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start justify-start mt-4">
//                   <div className="relative inline-block text-brand-secondary text-xl font-bold">
//                     {item.name}
//                   </div>
//                   <div className="text-sm text-brand-secondary line-clamp-2 mt-2">
//                     {item.description}
//                   </div>
//                   <div className="text-md font-bold mt-4 text-brand-secondary">
//                     <span>RS.</span> {item.price}
//                   </div>
//                 </div>
//                 <div className=" flex items-center justify-center mx-auto w-40 ">
//                   <button className="absolute -bottom-4  bg-brand-primary hover:bg-brand-secondary hover:text-brand-primary duration-500 px-4 py-2 rounded-md text-brand-secondary text-sm font-bold">
//                     + Add to Bucket
//                   </button>
//                 </div>
//                 <div className="absolute top-4 right-4">
//                   <Heart className="text-brand-primary" />
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MenuItem
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Heart } from "lucide-react";
import menuData from "@/data/menuData";

const MenuItem = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10 w-[90vw]">
        {menuData.map((item) => (
          <div key={item.id} className="group">
            <Card
              className="
              relative w-[270px] h-[420px]
              rounded-3xl cursor-pointer
              border border-stone-border
              bg-[linear-gradient(145deg,#FFF8ED,#FFE7B3)]
              shadow-lg hover:shadow-2xl
              transition-all duration-300
              hover:-translate-y-2
            "
            >
              <CardContent className="flex flex-col h-full p-5">
                {/* IMAGE */}
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={260}
                    height={260}
                    className="
                      object-contain
                      transition-transform duration-500
                      group-hover:scale-110
                      drop-shadow-xl
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="mt-3 space-y-1">
                  <h3 className="text-xl font-bold text-stone-deep">
                    {item.name}
                  </h3>

                  <p className="text-sm text-stone-deep/70 line-clamp-2">
                    {item.description}
                  </p>

                  <p className="text-lg font-bold text-stone-red mt-2">
                    RS {item.price}
                  </p>
                </div>

                {/* BUTTON */}
                <div className="mt-auto flex justify-center">
                  <button
                    className="
                    bg-stone-red hover:bg-stone-orange
                    text-white text-sm font-semibold
                    px-5 py-2 rounded-xl
                    shadow-md transition
                  "
                  >
                    + Add to Bucket
                  </button>
                </div>

                {/* HEART ICON */}
                <Heart className="absolute top-5 right-5 text-stone-red opacity-80 hover:scale-110 transition" />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
