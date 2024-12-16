import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const ExploreMenu = () => {
  const CardSlide = [
    { img: '/images/card5.png', title: 'food' },
    { img: '/images/card2.png', title: 'food' },
    { img: '/images/card3.png', title: 'food' },
    { img: '/images/card6.png', title: 'food' },
    { img: '/images/card5.png', title: 'food' },
    { img: '/images/card6.png', title: 'food' },
    { img: '/images/card2.png', title: 'food' },
  ];

  return (
    <div className='h-full w-[85vw] flex flex-col mx-auto my-10'>
      <div className='text-brand-secondary text-3xl uppercase font-bold'>
        <h2>
        <span className="relative inline-block">
      Explore
      {/* Half underline effect */}
      <span className="absolute bottom-0 left-0 w-full border-b-2 rounded-full border-brand-primary" style={{ width: '70%' }} />
    </span>
    <span className="mx-2">Menu</span>        </h2>
      </div>
      
      <Carousel className="mt-8">
        <CarouselContent className="-ml-1">
          {CardSlide.map((slide, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
              <div className="p-1">
                <Card className="cursor-pointer">
                  <CardContent className="flex flex-col mx-auto aspect-square items-center justify-between h-full p-4">
                    {/* Use Next.js Image component for optimized images */}
                    <div className="flex justify-center mb-4">
                      <Image
                        src={slide.img}
                        alt={`Card ${slide.title}`}
                        width={150} // Set width for the image
                        height={150} // Set height for the image
                        className="object-cover rounded-lg"
                      />
                    </div>
                  
                    {/* Title container */}
                    <div className="flex items-center  justify-center w-full">
                      <div className="text-center relative inline-block text-brand-secondary text-xl font-semibold">{slide.title}
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="bg-brand-primary border-none text-brand-secondary " />
        <CarouselPrevious className="bg-brand-primary border-none text-brand-secondary" />
      </Carousel>
    </div>
  );
};

export default ExploreMenu;
