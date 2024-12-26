import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Heart } from 'lucide-react';

const MenuList = ({ items }) => {
  
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {items.map((item) => (
        <div key={item.id} className="p-1 group">
          <Card className="rounded-md h-[420px] w-[265px] relative shadow-lg">
            <CardContent className="flex flex-col justify-center mx-auto h-full p-4">
              <div className="flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="object-cover rounded-lg transition-transform group-hover:scale-110 duration-300"
                />
              </div>
              <div className="flex flex-col items-start mt-1">
                <div className="text-xl font-bold text-brand-secondary">{item.name}</div>
                <div className="text-md mt-1 line-clamp-1 text-brand-secondary">{item.description}</div>
                <div className="text-xl font-bold text-brand-secondary mt-2">
                   {item.price}
                </div>
              </div>
              <div className="flex justify-center mt-3 ">
                <button className="bg-brand-primary hover:bg-brand-secondary text-md text-brand-secondary hover:text-brand-primary font-bold px-4 py-2 rounded-md">
                  + Add to Bucket
                </button>
              </div>
              <div className="absolute top-4 right-4">
                <Heart className="text-brand-primary" />
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
