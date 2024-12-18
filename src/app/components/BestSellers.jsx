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

const BestSellers = () => {
  const CardSlide = [
    { img: '/images/card5.png', title: 'Krunch Combo', price:"RS 570" },
    { img: '/images/card2.png', title: 'Krunch Burger', price:"RS 490" },
    { img: '/images/card3.png', title: 'Chicken & Chips', price:"RS 340" },
    { img: '/images/card6.png', title: 'Hot Wings Bucket', price:"RS 770" },
    { img: '/images/card5.png', title: 'Mighty Zinger', price:"RS 650" },
   
  ];

  return (
    <div className='h-full w-[85vw] flex flex-col mx-auto my-10'>
      <div className='text-brand-secondary text-3xl uppercase font-bold'>
        <h2>
        <span className="relative inline-block">
      Best
      {/* Half underline effect */}
      <span className="absolute bottom-0 left-0 w-full border-b-2 rounded-full border-brand-primary" style={{ width: '100%' }} />
    </span>
    <span className="mx-2">Sellers</span></h2>
      </div>
      
      <Carousel className="mt-8 ">
        <CarouselContent className="-ml-1">
          {CardSlide.map((slide, index) => (
            <CarouselItem key={index} className="flex items-center justify-center pl-1 sm:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card className="cursor-pointer rounded-md h-[365px] w-[260px] relative shadow-lg">
                  <CardContent className="flex flex-col justify-center mx-auto h-full p-4">
                <div className='flex flex-col items-start justify-start mt-4'>
                <div className=" relative inline-block text-brand-secondary text-xl font-semibold ">{slide.title}
                        
                        </div>
                        <div className='flex flex-col mt-2 mx-2'>
                        <div className='  bg-brand-primary text-brand-secondary text-sm font-bold px-4 py-1 rounded-full shadow ml-32'>
                          {slide.price}
                        </div>
                        </div>
                     
                
                </div>
                 
                    <div className="flex justify-center items-center mt-8">
                  
                      <Image
                        src={slide.img}
                        alt={`Card ${slide.title}`}
                        width={300} 
                        height={300} 
                        className="object-cover rounded-lg "
                      />
                    </div>
                  
                    {/* Title container */}
                    <div className="flex items-center  justify-center w-full">
                     
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

export default BestSellers;
