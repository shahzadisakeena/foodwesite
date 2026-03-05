"use client"; // important if using Next.js App Router

import React, { useEffect } from "react";
import CategoryBar from "../components/CategoryBar";
import MenuList from "../components/MenuList";
import menuData from "@/data/menuData";
import Footer from "../components/Footer";

const MenuPage = () => {
  const categories = Object.keys(menuData); // Get category names (keys)

  useEffect(() => {
    // Scroll to hash after page loads
    const hash = window.location.hash; // e.g., #Starters-Appetizers
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const yOffset = -170; // adjust this to match your header height
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }); // small delay to allow DOM to render
    }
  }, []);

  return (
    <div className="mt-48">
      <CategoryBar categories={categories} />
      <div className="container w-[90vw] mx-auto px-4">
        {categories.map((category) => (
          <div key={category} id={category} className="my-8">
            <h2 className="lg:text-3xl text-xl text-stone-red font-bold mb-4">
              {category.replace("-", " ").toUpperCase()}
            </h2>
            <MenuList items={menuData[category]} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
