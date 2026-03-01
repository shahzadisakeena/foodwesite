// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// const ExploreMenu = () => {
//   const CardSlide = [
//     { img: "/images/cat1.png", title: "Everyday Value" },
//     { img: "/images/cate2.png", title: "Ala-Carte-&-Combos" },
//     { img: "/images/cate3.png", title: "Promotion" },
//     { img: "/images/cate4.png", title: "Signature-Boxes" },
//     { img: "/images/cat5.png", title: "Sharing" },
//     { img: "/images/cate5.png", title: "Snacks-&-Beverages" },
//     { img: "/images/cate2.png", title: "Midnight(start at 12am)" },
//   ];

//   return (
//     <div className="h-full container w-[90vw] flex flex-col mx-auto my-10 font-login tracking-wider">
//       <div className="text-brand-secondary text-4xl uppercase font-bold font-login">
//         <h2>
//           <span className="relative inline-block">
//             Explore
//             {/* Half underline effect */}
//             <span
//               className="absolute bottom-0 left-0 w-full border-b-2 rounded-full border-brand-primary"
//               style={{ width: "70%" }}
//             />
//           </span>
//           <span className="mx-2">Menu</span>{" "}
//         </h2>
//       </div>

//       <Carousel className="mt-8">
//         <CarouselContent className="-ml-1 ">
//           {CardSlide.map((slide, index) => (
//             <CarouselItem
//               key={index}
//               className="flex items-center container justify-center w-[90vw] pl-1 sm:basis-1/2 lg:basis-1/5"
//             >
//               <div className="p-1">
//                 <Link href="/menu">
//                   <Card className="cursor-pointer rounded-full w-[220px] h-[220px]">
//                     <CardContent className="flex flex-col mx-auto aspect-square items-center justify-center h-full ">
//                       {/* Use Next.js Image component for optimized images */}
//                       <div className="flex justify-center ">
//                         <Image
//                           src={slide.img}
//                           alt={`Card ${slide.title}`}
//                           width={150} // Set width for the image
//                           height={150} // Set height for the image
//                           className="object-cover rounded-lg"
//                         />
//                       </div>

//                       {/* Title container */}
//                       <div className="flex items-center  justify-center w-full">
//                         <div className="text-center relative inline-block text-brand-secondary text-lg ">
//                           {slide.title}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselNext className="bg-brand-primary border-none text-brand-secondary " />
//         <CarouselPrevious className="bg-brand-primary border-none text-brand-secondary" />
//       </Carousel>
//     </div>
//   );
// };

// export default ExploreMenu;
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ExploreMenu = () => {
  const CardSlide = [
    { img: "/images/cat1.png", title: "Everyday Value" },
    { img: "/images/cate2.png", title: "Ala-Carte & Combos" },
    { img: "/images/cate3.png", title: "Promotion" },
    { img: "/images/cate4.png", title: "Signature Boxes" },
    { img: "/images/cat5.png", title: "Sharing" },
    { img: "/images/cate5.png", title: "Snacks & Beverages" },
    { img: "/images/cate2.png", title: "Midnight Deals" },
  ];

  return (
    <section className="relative w-full  overflow-hidden">
      {/* subtle theme glow */}

      <div className="relative container w-[90vw] mx-auto font-login tracking-wider">
        {/* ================= HEADING ================= */}
        <div className="text-center lg:text-left mb-10">
          <h2 className="text-stone-deep text-6xl font-extrabold uppercase">
            <span className="relative inline-block">
              Explore
              <span className="absolute -bottom-1 left-0 w-[70%] border-b-4 border-stone-red rounded-full"></span>
            </span>
            <span className="ml-3 text-stone-red">Menu</span>
          </h2>
        </div>

        {/* ================= CAROUSEL ================= */}
        <Carousel>
          <CarouselContent className="-ml-2">
            {CardSlide.map((slide, index) => (
              <CarouselItem
                key={index}
                className="
                pl-2
                basis-full
                sm:basis-1/3
                md:basis-1/4
                lg:basis-1/5
              "
              >
                <Link href="/menu">
                  {/* CARD */}
                  <Card
                    className="
                    group cursor-pointer
                    rounded-full
                    w-[200px] h-[200px]
                    md:w-[220px] md:h-[220px]
                    mx-auto
                    border border-stone-border
                    bg-stone-red backdrop-blur-md
                   
                    
                  "
                  >
                    <CardContent className="flex flex-col items-center justify-center h-full">
                      {/* IMAGE */}
                      <div className="relative flex justify-center items-center">
                        <div className="absolute w-20 h-20 bg-stone-yellow/90 blur-xl rounded-full group-hover:scale-125 transition" />

                        <Image
                          src={slide.img}
                          alt={slide.title}
                          width={140}
                          height={140}
                          className="
                          object-contain
                          relative z-10
                          group-hover:scale-110
                          transition duration-500
                          "
                        />
                      </div>

                      {/* TITLE */}
                      <p
                        className="
                        mt-3 text-center
                        text-white
                        font-semibold
                        text-sm md:text-base
                        
                        transition
                      "
                      >
                        {slide.title}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* NAV BUTTONS */}
          <CarouselPrevious className="bg-stone-red text-white border-none hover:bg-stone-orange" />
          <CarouselNext className="bg-stone-red text-white border-none hover:bg-stone-orange" />
        </Carousel>
      </div>
    </section>
  );
};

export default ExploreMenu;
