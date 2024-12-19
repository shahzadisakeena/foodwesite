import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import {Heart} from 'lucide-react'
const TopDeals = () => {
  const CardData = [
    { img: '/images/card3.png', title: 'Krunch Combo', price: "RS 950", desc:"1 Zinger Stacker + 1 Regular fries + 1 Regular drink" },
    { img: '/images/card2.png', title: 'Krunch Burger', price: "RS 1350" , desc:"Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks"},
    { img: '/images/card5.png', title: 'Chicken & Chips', price: "RS 2590", desc:"An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink" },
  ];

  return (
    <div className="h-full w-[85vw] flex flex-col mx-auto my-10">
      <div className="text-brand-secondary text-3xl uppercase font-bold">
        <h2>
          <span className="relative inline-block">
            Top
            <span
              className="absolute bottom-0 left-0 w-full border-b-2 rounded-full border-brand-primary"
              style={{ width: '100%' }}
            />
          </span>
          <span className="mx-2">Deals</span>
        </h2>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-6 mt-8 ">
        {CardData.map((deal, index) => (
          <div key={index} className="p-1 group">
            <Card className="cursor-pointer rounded-md h-[460px] w-[295px] relative shadow-lg">
              <CardContent className="flex flex-col justify-center mx-auto h-full p-4">
               

                <div className="flex justify-center items-center">
                  <Image
                    src={deal.img}
                    alt={`Card ${deal.title}`}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-4">
                  <div className="relative inline-block text-brand-secondary text-xl font-bold">
                    {deal.title}
                  </div>
                  <div className='text-sm text-brand-secondary line-clamp-2 mt-2'>{deal.desc}</div>
                  <div className='text-md font-bold mt-4 text-brand-secondary'>
                    {deal.price}
                  </div>
      
                </div>
                <div className=' flex items-center justify-center mx-auto w-40'>
                  <button className='absolute -bottom-4  bg-brand-primary hover:bg-brand-secondary hover:text-brand-primary duration-500 px-4 py-2 rounded-md text-brand-secondary text-sm font-bold'>+ Add to Bucket</button>

                  </div>
                  <div className='absolute top-4 right-4'>
                    <Heart className="text-brand-primary"/>
                  </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
