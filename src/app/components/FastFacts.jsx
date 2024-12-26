import React from "react";
import Image from "next/image";

const factsData = [
  {
    image: "/images/pk.png",
    year: "1997",
    description:
      "The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi.",
  },
  {
    image: "/images/hut.png",
    year: "128",
    description:
      "The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi.",
  },
  {
    image: "/images/colab.png",
    year: "9",
    description:
      "The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi.",
  },
  {
    image: "/images/chick.png",
    year: "9000+",
    description:
      "The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi.",
  },
];

const FastFacts = () => {
  return (
    <div className="h-full w-full bg-brand-darkGray lg:my-20 my-10">
      <div className="flex items-start justify-start w-[85vw] mx-auto py-10">
        <h2 className="lg:text-3xl text-xl text-brand-secondary font-bold">
          Fast Facts about KFC Pakistan
        </h2>
      </div>

      {/* Facts Rendering */}
      <div className="flex lg:flex-row flex-col items-center justify-between mt-10 w-[90vw] mx-auto gap-4">
        {factsData.map((fact, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={fact.image}
              width={120}
              height={120}
              alt={`fact-${index}`}
              className="object-cover"
            />
            <h3 className="text-4xl text-center text-brand-secondary font-bold mt-5">
              {fact.year}
            </h3>
            <p className="text-xs text-brand-secondary px-6 text-center mt-2 leading-5 mb-10">
              {fact.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FastFacts;
