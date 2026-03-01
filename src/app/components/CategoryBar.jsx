// 'use client';

// import React, { useState, useEffect } from "react";

// // Throttle or debounce utility function for performance
// const debounce = (fn, delay) => {
//   let timeoutId;
//   return (...args) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => fn(...args), delay);
//   };
// };

// const CategoryBar = ({ categories }) => {
//   const [activeCategory, setActiveCategory] = useState("");

//   // Adjust navbar height based on your design
//   const navbarHeight = 200; // Change this to the height of your navbar (e.g., `top-24` in your example)

//   // Smooth scroll adjustment when a category link is clicked
//   const handleCategoryClick = (e, category) => {
//     e.preventDefault();
//     const section = document.getElementById(category);

//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop - navbarHeight, // Adjusting scroll position to avoid overlap with the navbar
//         behavior: "smooth", // Smooth scrolling
//       });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       categories.forEach((category) => {
//         const section = document.getElementById(category);
//         if (section) {
//           const { top, bottom } = section.getBoundingClientRect();

//           // Adjust this to make the section active when it's visible in the viewport
//           if (top <= navbarHeight && bottom >= navbarHeight) {
//             setActiveCategory(category);
//           }
//         }
//       });
//     };

//     const debouncedHandleScroll = debounce(handleScroll, 100); // 100ms debounce delay

//     window.addEventListener("scroll", debouncedHandleScroll);
//     return () => {
//       window.removeEventListener("scroll", debouncedHandleScroll);
//     };
//   }, [categories]);

//   return (
//     <div className="fixed z-10 lg:top-24 top-24 left-0 w-full bg-brand-accent p-4">
//       <div
//         className="flex items-center lg:justify-center justify-start gap-4 overflow-x-auto whitespace-nowrap px-4"
//         style={{
//           scrollbarWidth: "none", // For Firefox
//           msOverflowStyle: "none", // For IE and Edge
//         }}
//       >
//         <style jsx>{`
//           /* Hide scrollbar for WebKit-based browsers */
//           div::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//         {categories.map((category) => (
//           <a
//             key={category}
//             href={`#${category}`}
//             onClick={(e) => handleCategoryClick(e, category)} // Handle click with smooth scroll
//             className={`lg:px-3 lg:py-3 px-2 py-2 rounded-lg font-bold text-xs lg:text-sm ${
//               activeCategory === category
//                 ? "bg-brand-primary text-white"
//                 : "text-brand-secondary bg-brand-lgInp"
//             }`}
//           >
//             {category.replace("-", " ").toUpperCase()}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryBar;
"use client";

import React, { useState, useEffect } from "react";

/* ================= DEBOUNCE FUNCTION ================= */
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const CategoryBar = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState("");

  /* ===== NAVBAR HEIGHT OFFSET ===== */
  const navbarHeight = 200; // adjust if navbar height changes

  /* ================= CLICK SCROLL ================= */
  const handleCategoryClick = (e, category) => {
    e.preventDefault();

    const section = document.getElementById(category);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  /* ================= ACTIVE CATEGORY ON SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => {
      categories.forEach((category) => {
        const section = document.getElementById(category);

        if (section) {
          const { top, bottom } = section.getBoundingClientRect();

          if (top <= navbarHeight && bottom >= navbarHeight) {
            setActiveCategory(category);
          }
        }
      });
    };

    const debouncedScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [categories]);

  /* ================= UI ================= */
  return (
    <div
      className="
        fixed left-0 w-full z-40
        lg:top-24 top-20
        backdrop-blur-xl
        bg-[linear-gradient(110deg,rgba(255,248,237,0.9),rgba(255,231,179,0.85))]
        border-b border-stone-border
        shadow-md
      "
    >
      <div
        className="
          flex items-center
          lg:justify-center justify-start
          gap-3
          overflow-x-auto whitespace-nowrap
          px-4 py-3
          scrollbar-hide
        "
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <a
              key={category}
              href={`#${category}`}
              onClick={(e) => handleCategoryClick(e, category)}
              className={`
                flex-shrink-0
                px-5 py-2 rounded-full
                text-xs lg:text-sm font-semibold
                transition-all duration-300
                ${
                  isActive
                    ? "bg-stone-red text-white shadow-lg scale-105"
                    : "bg-white/70 text-stone-deep border border-stone-border hover:bg-stone-yellow/40"
                }
              `}
            >
              {category.replace("-", " ").toUpperCase()}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBar;
