import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full lg:w-[85vw] mx-auto">
      <h2 className="text-3xl text-brand-secondary font-bold lg:mt-28 mt-32">
        ABOUT US
      </h2>

      <div className="flex lg:flex-row flex-col mx-auto bg-brand-darkGray mt-10 lg:p-5 p-2 rounded-md items-center justify-between">
        <p className="text-sm text-brand-secondary text-center lg:text-left lg:mx-5 w-full lg:w-[50%] ">
          KFC entered Pakistan in 1997 and since then, it’s been a journey full
          of excitement and Finger Lickin’ goodness! The first KFC restaurant
          opened in Pakistan opened in Gulshan Iqbal, Karachi and now our Finger
          Lickin’ Chicken is available in 37 cities withover 128 restaurants!
          Being the most loved fast food chain in Pakistan, KFC leaves no stone
          unturned to provide its customers the most delicious chicken and an
          excellent dining experience.
        </p>
        <div className="flex items-center justify-center bg-brand-primary mx-5 rounded-md lg:w-[480px] mt-4 lg:mt-0 w-[300px] h-[170px] lg:h-[197px]">
          <p className="text-md text-brand-secondary text-center p-2 font-bold">
            WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL
            INGREDIENTS FROM TRUSTED SUPPLIERS
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
