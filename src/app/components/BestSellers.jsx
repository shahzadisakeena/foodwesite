"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Heart, X, Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import menuData from "@/data/menuData";

const BestSellers = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [selectedStuffing, setSelectedStuffing] = useState([]);

  const carouselRef = useRef(null);

  const CardSlide = [
    menuData["Starters-Appetizers"][0],
    menuData["Stonebake-pasta"][0],
    menuData["Regular-pizza"][0],
    menuData["Classic-pizza"][0],
    menuData["Burgers-sandwiches"][0],
  ];

  const openDialog = (item) => {
    setSelectedItem(item);
    setQuantity(1);
    setSelectedSizeIndex(0);
    setSelectedStuffing([]);
    const price = item.sizes?.[0]?.price || item.price;
    setCurrentPrice(price);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedItem(null);
    setIsDialogOpen(false);
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
        : [...prev, option]
    );
  };
  const calculateTotalPrice = () => (currentPrice * quantity).toFixed(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full my-16">
      <div className="container w-[90vw] mx-auto relative">
        {/* HEADING */}
        <div className="text-center lg:text-left mb-10">
          <h2 className="text-stone-deep text-6xl font-extrabold uppercase">
            <span className="relative inline-block">
              Best
              <span className="absolute -bottom-1 left-0 w-[70%] border-b-4 border-stone-red rounded-full"></span>
            </span>
            <span className="ml-3 text-stone-red">Sellers</span>
          </h2>
        </div>

        {/* LEFT / RIGHT BUTTONS */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-stone-red text-white p-3 rounded-full z-10 shadow-md"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-stone-red text-white p-3 rounded-full z-10 shadow-md"
        >
          <ChevronRight />
        </button>

        {/* CAROUSEL */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth gap-4 scrollbar-hide pb-10"
        >
          {CardSlide.map((item, index) => (
            <Card
              key={index}
              onClick={() => openDialog(item)}
              className="w-[290px] min-h-[500px] rounded-3xl cursor-pointer bg-[linear-gradient(145deg,#FFF8ED,#FFE7B3)] border border-stone-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-shrink-0"
            >
              <CardContent className="flex flex-col h-full p-5 group relative">
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
                      {item.sizes.map((size, i) => (
                        <div key={i} className="flex justify-between">
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
          ))}
        </div>
      </div>

      {/* PRODUCT DIALOG */}
      {isDialogOpen && selectedItem && (
        <AlertDialog open={isDialogOpen} onOpenChange={closeDialog}>
          <AlertDialogContent className="lg:max-w-[780px] max-w-[360px] rounded-3xl border border-stone-border bg-[linear-gradient(135deg,#FFF8ED,#FFE7B3)] backdrop-blur-xl shadow-2xl">
            <AlertDialogCancel className="absolute top-4 right-4 bg-stone-red text-white border-none">
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

            {/* SIZE */}
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

            {/* STUFFING */}
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
                className="border-2 border-stone-red p-1 rounded-lg"
              >
                <Minus />
              </button>
              <span className="text-2xl font-bold text-stone-deep">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="border-2 border-stone-red p-1 rounded-lg"
              >
                <Plus />
              </button>
            </div>

            <AlertDialogFooter>
              <AlertDialogAction className="bg-stone-red hover:bg-stone-orange text-white font-semibold lg:w-[50%] w-full h-12 rounded-xl mx-auto">
                <span className="mr-4">{calculateTotalPrice()} RS</span> Add to
                Bucket
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </section>
  );
};

export default BestSellers;
