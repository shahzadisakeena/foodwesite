import { Octagon } from "lucide-react";
import React from "react";

const KfcStory = () => {
  const octagonsData = [
    { year: "1890", text: "Harland Sanders was born" },
    {
      year: "1930",
      text: "Sanders Court & Cafe was opened in front of his gas station in Corbin, Kentucky",
    },
    {
      year: "1940",
      text: "Colonel Sanders develops the Original Recipe from 11 secret herbs and spices",
    },
    {
      year: "1952",
      text: "The Colonel begins franchising his business traveling from town to town",
    },
    { year: "1957", text: "Kentucky Fried Chicken is first sold in buckets" },
    {
      year: "1964",
      text: "More than 600 franchised outlets in the USA, Canada, and UK",
    },
    { year: "1974", text: "KFC first launches in Kuwait" },
    {
      year: "1980",
      text: "Colonel Sanders passes away at the age of 90. His legacy lives on",
    },
    {
      year: "Today",
      text: "Today we have more than 25,000 KFC restaurants in over 145 countries and territories around the world.",
    },
  ];

  return (
    <div className="flex flex-col lg:mt-20 mt-10 h-full w-[85vw] mx-auto">
      {/* Heading */}
      <div className="flex items-start justify-start">
        <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-brand-secondary font-bold">
          The Story of World’s Best Chicken
        </h2>
      </div>

      {/* Top Row - First 5 Octagons */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
        {octagonsData.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] flex-shrink-0"
          >
            {/* Octagon Shape */}
            <Octagon
              className="text-brand-primary"
              strokeWidth={0.3}
              size="100%"
            />
            {/* Octagon Content */}
            <span className="absolute inset-0 flex flex-col items-center justify-center text-brand-secondary text-center px-4">
              <h1 className="text-4xl font-bold sm:text-3xl">{item.year}</h1>
              <p className="text-sm mt-3 sm:text-xs px-4">{item.text}</p>
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Row - Remaining 4 Octagons */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
        {octagonsData.slice(5).map((item, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] flex-shrink-0"
          >
            {/* Octagon Shape */}
            <Octagon
              className="text-brand-primary"
              strokeWidth={0.3}
              size="100%"
            />
            {/* Octagon Content */}
            <span className="absolute inset-0 flex flex-col items-center justify-center text-brand-secondary text-center px-4">
              <h1 className="text-4xl font-bold sm:text-3xl">{item.year}</h1>
              <p className="text-sm mt-3 sm:text-xs px-4">{item.text}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KfcStory;
