import React from "react";
import Image from "next/image";
const Donate = () => {
  return (
    <div className="flex items-center flex-col justify-center w-[85vw] mx-auto my-20">
      <div className="flex lg:flex-row flex-col items-center justify-center lg:space-x-10">
        <div className="bg-brand-darkGray lg:h-[260px] lg:w-[620px] h-[200px] w-[320px] rounded-md p-6 flex flex-col items-center justify-center">
          <Image
            src="/images/citizen.png"
            width={250}
            height={250}
            alt="citizen"
            className="object-cover"
          />
          <p className="text-sm mt-10 text-brand-secondary text-center">
            Adopted 6 TCF schools since 2014 in Gadaap West, Muzaffargarh,
            Faisalabad, and Quetta, educating 1700+ students
          </p>
        </div>
        <div className="bg-brand-darkGray mt-5 lg:mt-0 lg:h-[260px] lg:w-[620px] h-[200px] w-[320px] rounded-md p-6 flex flex-col items-center justify-center">
          <Image
            src="/images/deaf.jpeg"
            width={250}
            height={250}
            alt="citizen"
            className="object-cover"
          />
          <p className="text-sm mt-10 text-brand-secondary text-center">
            Adopted 6 TCF schools since 2014 in Gadaap West, Muzaffargarh,
            Faisalabad, and Quetta, educating 1700+ students
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row flex-col lg:space-x-10 lg:mt-10 mt-5">
        <div className="bg-brand-darkGray lg:h-[260px] lg:w-[620px] h-[200px] w-[320px] rounded-md p-6 flex flex-col items-center justify-center">
          <Image
            src="/images/orange.png"
            width={150}
            height={150}
            alt="citizen"
            className="object-cover"
          />
          <p className="text-sm mt-10 text-brand-secondary text-center">
            Sponsoring higher education of 200+ students across HEC recognized
            universities in Pakistan
          </p>
        </div>
        <div className="bg-brand-darkGray h-[200px] w-[320px] lg:h-[260px] lg:w-[620px] rounded-md p-6 flex flex-col items-center justify-center mt-5 lg:mt-0">
          <Image
            src="/images/cyte.png"
            width={150}
            height={150}
            alt="citizen"
            className="object-cover"
          />
          <p className="text-sm mt-10 text-brand-secondary text-center">
            Supporting TEGS – KFC Campus to provide quality education to
            students in Lahore
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
