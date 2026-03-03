"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
import { X, Minus, Plus } from "lucide-react";

const BestSellers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [initialPrice, setInitialPrice] = useState(0);

  /* ================= PRODUCTS ================= */
  const CardSlide = [
    {
      img: "/images/cate3.png",
      title: "Krunch Combo",
      price: 570,
      description:
        "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    },
    {
      img: "/images/cate4.png",
      title: "Krunch Burger",
      price: 490,
      description: "1 Krunch burger + fries + regular drink",
    },
    {
      img: "/images/BS3.png",
      title: "Chicken & Chips",
      price: 340,
      description:
        "2 pieces Hot & Crispy Chicken + Fries + Dinner roll + signature sauce",
    },
    {
      img: "/images/cat1.png",
      title: "Hot Wings Bucket",
      price: 770,
      description: "10 pcs Signature Hot & Crispy Wings",
    },
    {
      img: "/images/cate5.png",
      title: "Mighty Zinger",
      price: 650,
      description:
        "Double zinger fillet with spicy & plain mayo, lettuce and cheese",
    },
  ];

  /* ================= FUNCTIONS ================= */

  const openDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
    setQuantity(1);
    setInitialPrice(product.price);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsDialogOpen(false);
  };

  const incrementQuantity = () => setQuantity((p) => p + 1);
  const decrementQuantity = () => setQuantity((p) => (p > 1 ? p - 1 : 1));

  const calculateTotalPrice = () => (initialPrice * quantity).toFixed(0);

  return (
    <section className="w-full my-16  font-login">
      <div className="container w-[90vw] mx-auto">
        {/* ================= HEADING ================= */}
        <div className="text-center lg:text-left mb-10">
          <h2 className="text-stone-deep text-6xl font-extrabold uppercase">
            <span className="relative inline-block">
              Best
              <span className="absolute -bottom-1 left-0 w-[70%] border-b-4 border-stone-red rounded-full"></span>
            </span>
            <span className="ml-3 text-stone-red">Sellers</span>
          </h2>
        </div>

        {/* ================= CAROUSEL ================= */}
        <Carousel>
          <CarouselContent className="-ml-2">
            {CardSlide.map((slide, index) => (
              <CarouselItem
                key={index}
                className="
                  flex justify-center
                  pl-2
                  basis-full
                  sm:basis-1/2
                  md:basis-1/3
                  lg:basis-1/4
                "
              >
                <Card
                  onClick={() => openDialog(slide)}
                  className="
                    w-[270px] h-[370px]
                    rounded-2xl
                    cursor-pointer
                    bg-stone-yellow/20
                    backdrop-blur-md
                    border border-stone-red
                    
                  "
                >
                  <CardContent className="flex flex-col h-full p-5">
                    {/* TITLE */}
                    <h3 className="text-xl font-semibold text-stone-red ">
                      {slide.title}
                    </h3>

                    {/* PRICE BADGE */}
                    <div className="mt-2 flex justify-end">
                      <span className="bg-stone-red text-white text-sm font-bold px-4 py-1 rounded-full shadow">
                        RS. {slide.price}
                      </span>
                    </div>

                    {/* IMAGE */}
                    <div className="flex flex-1 items-center justify-center">
                      <Image
                        src={slide.img}
                        alt={slide.title}
                        width={320}
                        height={320}
                        className="object-contain drop-shadow-xl"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* ================= PRODUCT DIALOG ================= */}
      {isDialogOpen && (
        <AlertDialog open={isDialogOpen} onOpenChange={closeDialog}>
          <AlertDialogContent
            className=" border-none rounded-3xl max-w-[360px] lg:max-w-[800px]   bg-[linear-gradient(135deg,#FFF8ED,#FFE7B3)]
            backdrop-blur-xl shadow-2xl text-stone-red "
          >
            {/* CLOSE */}
            <AlertDialogCancel className="absolute top-4 right-4 bg-stone-red border-none">
              <X className="text-white" />
            </AlertDialogCancel>

            {/* IMAGE */}
            <div className="flex justify-center">
              <Image
                src={selectedProduct?.img}
                alt=""
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            <AlertDialogHeader className="text-center">
              <AlertDialogTitle className="text-3xl text-center font-bold">
                {selectedProduct?.title}
              </AlertDialogTitle>

              <AlertDialogDescription className="text-black/70 text-center">
                {selectedProduct?.description}
              </AlertDialogDescription>
            </AlertDialogHeader>

            {/* QUANTITY */}
            <div className="flex justify-center items-center gap-4 mt-3">
              <button
                onClick={decrementQuantity}
                className="border-2 border-stone-red p-2 rounded-lg"
              >
                <Minus />
              </button>

              <span className="text-2xl">{quantity}</span>

              <button
                onClick={incrementQuantity}
                className="border-2 border-stone-red p-2 rounded-lg"
              >
                <Plus />
              </button>
            </div>

            {/* ADD BUTTON */}
            <AlertDialogFooter>
              <AlertDialogAction className="w-full h-12 bg-stone-red text-white text-lg font-semibold rounded-xl">
                {calculateTotalPrice()} RS — Add to Bucket
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </section>
  );
};

export default BestSellers;
