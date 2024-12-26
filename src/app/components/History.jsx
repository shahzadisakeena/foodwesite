import React from "react";
import Image from "next/image";
const History = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-[85vw] mx-auto">
      <div className="flex lg:flex-row flex-col bg-brand-darkGray mt-10 p-5 rounded-md items-center  w-[85vw]">
        <Image
          src="/images/history.png"
          width={400}
          height={400}
          alt="history img"
          className="object-cover lg:h-[400px] lg:w-[400px]"
        />
        <div>
          <h2 className="lg:text-2xl text-xl font-bold text-brand-secondary lg:mx-10 text-center lg:text-left mt-5 lg:mt-0">
            History
          </h2>
          <p className="text-brand-secondary text-sm lg:mx-10 mt-5 font-bold text-center lg:text-left">
            It all started with Colonel Harland Sanders, the man who convinced
            the world by saying “We do chicken right!” Sanders took a great deal
            of time perfecting his iconic secret recipe of 11 herbs and spices,
            a legacy he’s brought to the world through KFC’s 10,000+
            restaurants. Starting from outside of his gas station in Korbin,
            Kentucky to being a globally recognized face, we owe our success to
            the Colonel’s hard work and passion for sharing his love for chicken
            with the world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
