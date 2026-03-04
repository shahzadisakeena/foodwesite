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
    {
      img: "/images/starter.png",
      title: "Starters Appetizers",
      slug: "/menu#Starters-Appetizers",
    },
    {
      img: "/images/cate2.png",
      title: "Pasta",
      slug: "/menu#Stonebake-pasta",
    },
    {
      img: "/images/cate3.png",
      title: "Pizza Regular flavours",
      slug: "/menu#Regular-pizza",
    },
    {
      img: "/images/cate3.png",
      title: "Pizza Classic flavours",
      slug: "/menu#Classic-pizza",
    },
    {
      img: "/images/cate3.png",
      title: "Pizza Special flavours",
      slug: "/menu#Special-pizza",
    },
    {
      img: "/images/cate4.png",
      title: "Burgers",
      slug: "/menu#Burgers-sandwiches",
    },
    {
      img: "/images/cat5.png",
      title: "Hot Deals",
      slug: "/menu#hotdeals",
    },
    {
      img: "/images/cate5.png",
      title: "Shawarma & Rolls",
      slug: "/menu#Shawarma-Rolls",
    },
    {
      img: "/images/cate2.png",
      title: "Drinks and other",
      slug: "/menu#Stonebake-pasta",
    },
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
                <Link href={slide.slug}>
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
