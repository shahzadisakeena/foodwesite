// "use client";

// import { Button } from "@/components/ui/button"
// import React, { useState } from 'react';
// import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/components/ui/dialog';
// import GeocodingService from "./geocoder";
// import Image from "next/image";

// const CustomDialog = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [coords, setCoords] = useState({
//     lati: "33.027968",
//     long: "73.6010478",
//     add: 'Dina, Jhelum'
//   });

//   const closeDialog = () => setIsOpen(false);

//   const handleCoords = (newCoords) => {
//     setCoords(newCoords);
//   };

//   return (
//     <div className="font-ftr">
//       {/* Trigger Button */}
//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogTrigger asChild>
//           <button className="bg-brand-darkGray focus:border-brand-primary focus:border-[3px] rounded-md px-4 py-2 text-brand-secondary w-36 h-12 flex items-center justify-center space-x-2">
//             <Image
//               src="/images/pickup.svg"
//               alt="Deliver"
//               width={30}
//               height={30}
//             />
//             <span className="font-bold">DELIVERY</span>
//           </button>
//         </DialogTrigger>

//         {/* Dialog Content */}
//         <DialogContent className="rounded-lg font-login bg-brand-darkGray h-[91vh] text-white">

//           <DialogTitle></DialogTitle>
//           {/* Header */}
//           <div className="text-2xl text-center font-bold border-b border-white pb-2">
//             Select Your Delivery Location
//           </div>

//           {/* Body */}
//           <div className="mt-4 mb-4 overflow-y-scroll">
//             <div className="flex flex-col justify-center gap-4">
//               <GeocodingService onMesageChange={handleCoords} />
//               <div className="">
//                 <p className="bg-brand-darkGray text-xl border-brand-secondary border-b-2 text-white">{`${coords.add}`}</p>
//               </div>
//               <Button
//                 disabled={!coords.lati || !coords.long}
//                 className="w-full bg-brand-primary text-lg text-black hover:bg-brand-primary/90"
//               >
//                 Confirm Location
//               </Button>

//               <Button
//                 // onClick={handleStartOrder}
//                 // disabled={!isLocationConfirmed}
//                 className="w-full bg-brand-primary  text-lg text-black hover:bg-brand-secondary/90"
//               >
//                 Start Your Order
//               </Button>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="border-t border-white pt-2 text-right">
//             <div className=" w-full h-10 text-center text-xl flex justify-center items-center ">
//               <span className="text-brand-secondary">Already a user? </span>
//               <a href="/login" className="text-brand-primary hover:underline">
//                 Login
//               </a>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default CustomDialog;
"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import GeocodingService from "./geocoder";
import Image from "next/image";

const CustomDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [coords, setCoords] = useState({
    lati: "33.027968",
    long: "73.6010478",
    add: "Dina, Jhelum",
  });

  const handleCoords = (newCoords) => {
    setCoords(newCoords);
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* ================= TRIGGER BUTTON ================= */}
        <DialogTrigger asChild>
          <button className="bg-stone-red hover:bg-stone-orange transition rounded-md px-4 py-2 text-white w-36 h-11 flex items-center justify-center space-x-2 shadow-sm">
            <Image
              src="/images/pickup.svg"
              alt="Delivery"
              width={26}
              height={26}
            />
            <span className="font-bold">DELIVERY</span>
          </button>
        </DialogTrigger>

        {/* ================= DIALOG ================= */}
        <DialogContent className="rounded-xl bg-stone-bg text-stone-text h-[90vh] max-w-xl">
          <DialogTitle />

          {/* Header */}
          <div className="text-2xl text-center font-bold border-b border-stone-border pb-3">
            Select Your Delivery Location
          </div>

          {/* Body */}
          <div className="mt-4 mb-4 overflow-y-auto pr-1">
            <div className="flex flex-col gap-4">
              {/* Map / Location Picker */}
              <GeocodingService onMesageChange={handleCoords} />

              {/* Selected Address Card */}
              <div className="bg-stone-surface border border-stone-border rounded-md p-4 shadow-sm">
                <p className="text-lg font-medium text-stone-dark">
                  {coords.add}
                </p>
              </div>

              {/* Confirm Location */}
              <Button
                disabled={!coords.lati || !coords.long}
                className="w-full bg-stone-red text-white text-lg hover:bg-stone-btnHover transition"
              >
                Confirm Location
              </Button>

              {/* Start Order */}
              <Button className="w-full bg-stone-yellow text-stone-deep text-lg hover:bg-stone-orange hover:text-white transition">
                Start Your Order
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-stone-border pt-3 text-center">
            <span className="text-stone-textSoft">Already a user?</span>{" "}
            <a
              href="/login"
              className="text-stone-red font-semibold hover:underline"
            >
              Login
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
