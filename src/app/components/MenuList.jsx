// 'use client'

// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import Image from 'next/image';
// import { Heart, X, Plus,Minus } from 'lucide-react';
// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogAction,
//   AlertDialogCancel,
// } from '@/components/ui/alert-dialog';
// const MenuList = ({ items }) => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [quantity, setQuantity] = useState(1)
// const [initialPrice, setInitialPrice] = useState(0)

// const openDialog = (item) =>{
// setSelectedItem(item)
// setQuantity(1)
// setInitialPrice(item.price)
// setIsDialogOpen(true)
// }
// const closeDialog =()=>{
// setSelectedItem(null)
// setIsDialogOpen(false);
// }
// const incrementQuantity =()=>{
// setQuantity((prev)=>(prev + 1))
// }
// const decrementQuantity = () =>{
// setQuantity((prev)=>(prev > 1 ? prev - 1 : 1))
// }
// const calculateTotalPrice = ()=>{
// return(initialPrice*quantity).toFixed(2)
// }
//   return (
//     <div className="flex flex-wrap gap-6 lg:justify-start justify-center">
//       {items.map((item) => (
//         <div key={item.id} className="p-1 group">
//           <Card className="rounded-md cursor-pointer h-[418px] w-[290px] font-login relative shadow-lg"
//           onClick={()=>openDialog(item)}
//           >
//             <CardContent className="flex flex-col justify-center mx-auto h-full p-4">
//               <div className="flex justify-center items-center">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={300}
//                   height={300}
//                   className="object-cover rounded-lg transition-transform group-hover:scale-110 duration-300"
//                 />
//               </div>
//               <div className="flex flex-col items-start mt-1">
//                 <div className="text-xl font-bold text-brand-secondary">{item.name}</div>
//                 <div className="text-md mt-1 line-clamp-1 text-brand-secondary">{item.description}</div>
//                 <div className="text-xl font-bold text-brand-secondary mt-2">
//                  <span className='text-lg'>RS</span>  {item.price}
//                 </div>
//               </div>
//               <div className="flex justify-center mt-3 ">
//                 <button className="bg-brand-primary hover:bg-brand-secondary text-md text-brand-secondary hover:text-brand-primary font-bold px-4 py-2 rounded-md">
//                   + Add to Bucket
//                 </button>
//               </div>
//               <div className="absolute top-4 right-4">
//                 <Heart className="text-brand-primary" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       ))}
//     {isDialogOpen && (
//     <AlertDialog open={isDialogOpen} onOpenChange={closeDialog}>
//     <AlertDialogContent className="lg:max-w-[800px] font-login max-w-[350px] h-[550px] lg:h-[600px] bg-brand-darkGray border-none !rounded-3xl">
//     <AlertDialogCancel onClick={closeDialog}
//     className="absolute top-4 right-4 bg-brand-primary border-none"
//     >
//     <X strokeWidth={4}/>
//     </AlertDialogCancel>
//     <div className='flex justify-center lg:my-4'>
//     <Image
//     src={selectedItem?.image}
//      alt={selectedItem?.name}
//     width={300}
//     height={300}
//     className="object-cover w-[250px] h-[250px]"

//     />
//     </div>
//     <div>
//     <AlertDialogHeader className='flex flex-col items-center justify-center mx-auto'>
//     <AlertDialogTitle className='lg:text-4xl text-2xl text-brand-secondary text-center lg:-mt-14 -mt-4'>
//     {selectedItem?.name}
//     </AlertDialogTitle>
//        <AlertDialogDescription className="lg:text-lg text-md text-brand-secondary lg:px-36 text-center">
//                   {selectedItem?.description}
//                 </AlertDialogDescription>
//     </AlertDialogHeader>
//        <div className="flex items-center justify-center lg:mt-6 mt-2">
//                 <button
//                   onClick={decrementQuantity}
//                   className=" text-brand-secondary border-2 border-brand-primary p-1 rounded-lg"
//                 >
//                   <Minus />
//                 </button>
//                 <div className=" text-brand-secondary text-2xl px-6 py-2">
//                   {quantity}
//                 </div>
//                 <button
//                   onClick={incrementQuantity}
//                   className="border-2 border-brand-primary text-brand-secondary p-1 rounded-lg"
//                 >
//                   <Plus />
//                 </button>
//               </div>
//     </div>
//      <AlertDialogFooter>
//               <AlertDialogAction className="bg-brand-primary text-xl text-brand-secondary lg:w-[50%] lg:h-14 h-12 flex justify-center lg:mt-2 items-center mx-auto ">
//                 <span className="mr-6">{calculateTotalPrice()} RS</span> Add to
//                 Bucket
//               </AlertDialogAction>
//             </AlertDialogFooter>
//     </AlertDialogContent>
//     </AlertDialog>
//     )}
//     </div>
//   );
// };

// export default MenuList;

"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Heart, X, Plus, Minus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

const MenuList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [selectedStuffing, setSelectedStuffing] = useState([]);

  const openDialog = (item) => {
    setSelectedItem(item);
    setQuantity(1);
    setSelectedSizeIndex(0);
    setSelectedStuffing([]);

    const price =
      item.sizes && item.sizes.length > 0 ? item.sizes[0].price : item.price;
    setCurrentPrice(price);

    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedItem(null);
    setIsDialogOpen(false);
    setSelectedStuffing([]);
  };

  const incrementQuantity = () => setQuantity((p) => p + 1);
  const decrementQuantity = () => setQuantity((p) => (p > 1 ? p - 1 : 1));

  const handleSizeChange = (index) => {
    setSelectedSizeIndex(index);
    setCurrentPrice(selectedItem.sizes[index].price);
  };

  const handleStuffingToggle = (option) => {
    setSelectedStuffing((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option],
    );
  };

  const calculateTotalPrice = () => (currentPrice * quantity).toFixed(2);

  return (
    <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
      {items.map((item) => (
        <div key={item.id} className="group">
          <Card
            onClick={() => openDialog(item)}
            className="
              w-[290px] min-h-[500px]
              rounded-3xl cursor-pointer
              bg-[linear-gradient(145deg,#FFF8ED,#FFE7B3)]
              border border-stone-border
              shadow-lg hover:shadow-2xl
              transition-all duration-300
              hover:-translate-y-2
            "
          >
            <CardContent className="flex flex-col h-full p-5">
              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={260}
                  height={260}
                  className="object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
                />
              </div>

              <div className="mt-2 space-y-1 flex-1">
                <h3 className="text-xl font-bold text-stone-deep">
                  {item.name}
                </h3>
                <p className="text-sm text-stone-deep/70 line-clamp-1">
                  {item.description}
                </p>
                {item.sizes ? (
                  <div className="flex flex-col gap-2 mt-1">
                    {item.sizes.map((size, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-sm font-semibold text-stone-red">
                          {size.label}
                        </span>
                        <span className="text-sm font-semibold text-stone-red">
                          RS {size.price}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-lg font-bold text-stone-red mt-2">
                    RS {item.price}
                  </p>
                )}
              </div>

              <div className="mt-auto flex justify-center">
                <button className="bg-stone-red hover:bg-stone-orange text-white font-semibold px-5 py-2 rounded-xl shadow-md transition">
                  + Add to Bucket
                </button>
              </div>

              <Heart className="absolute top-5 right-5 text-stone-red opacity-80" />
            </CardContent>
          </Card>
        </div>
      ))}

      {isDialogOpen && selectedItem && (
        <AlertDialog open={isDialogOpen} onOpenChange={closeDialog}>
          <AlertDialogContent className="lg:max-w-[780px] max-w-[360px] rounded-3xl border border-stone-border bg-[linear-gradient(135deg,#FFF8ED,#FFE7B3)] backdrop-blur-xl shadow-2xl">
            <AlertDialogCancel
              onClick={closeDialog}
              className="absolute top-4 right-4 bg-stone-red text-white border-none"
            >
              <X />
            </AlertDialogCancel>

            <div className="flex justify-center mt-2">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                width={300}
                height={300}
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <AlertDialogHeader className="text-center">
              <AlertDialogTitle className="text-3xl font-bold text-stone-deep">
                {selectedItem.name}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-stone-deep/80 px-4">
                {selectedItem.description}
              </AlertDialogDescription>
            </AlertDialogHeader>

            {/* SIZE SELECTION */}
            {selectedItem.sizes && (
              <div className="flex justify-center gap-4 mt-4 flex-wrap">
                {selectedItem.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => handleSizeChange(index)}
                    className={`px-4 py-2 rounded-lg border font-semibold ${
                      selectedSizeIndex === index
                        ? "bg-stone-red text-white border-stone-red"
                        : "bg-white text-stone-deep border-stone-border"
                    }`}
                  >
                    {size.label} - RS {size.price}
                  </button>
                ))}
              </div>
            )}

            {/* STUFFING OPTIONS */}
            {selectedItem.stuffingOptions && (
              <div className="flex justify-center gap-4 mt-4 flex-wrap">
                {selectedItem.stuffingOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleStuffingToggle(option)}
                    className={`px-3 py-1 rounded-lg border font-semibold ${
                      selectedStuffing.includes(option)
                        ? "bg-stone-red text-white border-stone-red"
                        : "bg-white text-stone-deep border-stone-border"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* QUANTITY */}
            <div className="flex justify-center items-center gap-6 mt-4">
              <button
                onClick={decrementQuantity}
                className="stone-qty-btn border-2 border-stone-red p-1 rounded-lg"
              >
                <Minus />
              </button>
              <span className="text-2xl font-bold text-stone-deep">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="stone-qty-btn border-2 border-stone-red p-1 rounded-lg"
              >
                <Plus />
              </button>
            </div>

            {/* TOTAL PRICE + ACTION */}
            <AlertDialogFooter>
              <AlertDialogAction className="bg-stone-red hover:bg-stone-orange text-white font-semibold lg:w-[50%] w-full h-12 rounded-xl mx-auto">
                <span className="mr-4">{calculateTotalPrice()} RS</span> Add to
                Bucket
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default MenuList;
