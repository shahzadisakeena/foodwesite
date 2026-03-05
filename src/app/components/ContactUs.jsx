// import {
//   LetterText,
//   Locate,
//   Mail,
//   Map,
//   MapPin,
//   Phone,
//   Pointer,
//   Text,
// } from "lucide-react";
// import React from "react";

// const ContactUs = () => {
//   return (
//     <div className="flex w-[90vw] flex-col mx-auto my-5">
//       <h1 className="text-brand-secondary text-center lg:text-4xl font-login text-2xl font-bold">
//         Contact Us
//       </h1>
//       <div className="flex lg:flex-row font-ftr flex-col items-center mt-10 justify-between lg:space-x-4">
//         <div className="bg-brand-lgInp lg:h-56 h-64 lg:w-[48vw] w-full p-4 flex flex-col justify-center rounded-lg">
//           <div className="flex items-center">
//             <Phone className="text-brand-primary" />
//             <h3 className="text-xl mx-2 font-bold text-brand-secondary">
//               Head Office
//             </h3>
//           </div>
//           <p className=" text-xl text-brand-secondary mt-2">0213-1234567</p>
//           <div className="flex items-center mt-5">
//             <MapPin className="text-brand-primary" />
//             <h3 className="text-xl font-bold mx-2 text-brand-secondary">
//               Location
//             </h3>
//           </div>
//           <p className=" text-lg text-brand-secondary mt-2">
//            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ullam.
//           </p>
//         </div>
//         <div className="bg-brand-lgInp lg:h-56 lg:w-[48vw] mt-5 lg:mt-0 h-64 w-full p-4 flex flex-col justify-center rounded-lg">
//           <div className="flex items-center">
//             <Phone className="text-brand-primary" />
//             <h3 className="text-xl font-bold mx-2 text-brand-secondary">
//               Regional Office Lahore
//             </h3>
//           </div>
//           <p className=" text-xl text-brand-secondary mt-2">042-1234567</p>
//           <div className="flex items-center mt-5">
//             <MapPin className="text-brand-primary" />
//             <h3 className="text-xl font-bold mx-2 text-brand-secondary">
//               Location
//             </h3>
//           </div>
//           <p className=" text-lg mt-2 text-brand-secondary">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quibusdam?
//           </p>
//         </div>
//         <div className="bg-brand-lgInp justify-center mt-5 lg:mt-0 lg:h-56 h-64 lg:w-[48vw] w-full p-4 flex flex-col rounded-lg">
//           <div className="flex items-center ">
//             <Phone className="text-brand-primary" />
//             <h3 className="text-xl mx-2  font-bold text-brand-secondary">
//               Regional Office Islamabad
//             </h3>
//           </div>
//           <p className=" text-xl text-brand-secondary  mt-2">012345678</p>
//           <div className="flex items-center mt-5">
//             <MapPin className="text-brand-primary" />
//             <h3 className="text-xl mx-2 font-bold text-brand-secondary">
//               Location
//             </h3>
//           </div>
//           <p className=" text-lg mt-2 text-brand-secondary">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo assumenda nihil porro omnis distinctio!
//           </p>
//         </div>
//       </div>
//       <div className="flex lg:flex-row flex-col items-center mt-5 lg:space-x-4 justify-between mx-auto">
//         <div className="bg-brand-lgInp font-ftr p-4 lg:w-[45vw] w-[90vw] flex flex-col justify-center rounded-lg">
//           <div className="flex items-center">
//             <Phone className="text-brand-primary" />
//             <h3 className="text-xl font-bold mx-2 text-brand-secondary">
//               Helpline
//             </h3>
//           </div>
//           <p className="text-lg text-brand-secondary">UAN: 111 444 523</p>
//         </div>
//         <div className="bg-brand-lgInp p-4 lg:w-[44vw] font-ftr mt-5 lg:mt-0 w-[95vw] flex flex-col justify-center rounded-lg">
//           <div className="flex items-center">
//             <Mail className="text-brand-primary" />
//             <h3 className="text-xl font-bold mx-2 text-brand-secondary">
//               Complaints Email
//             </h3>
//           </div>
//           <p className="text-lg text-brand-secondary">
//             Example@gmail.com
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
const ContactUs = () => {
  const office = {
    title: "StoneBake Dina Branch",
    phone: "0325 6120333",
    telephone: "0544 687788",
    whatsapp: "0340 1520333",
    location: "Mangla Road, City Dina, District Jhelum, Pakistan",
    email: "stonebake2001@gmail.com",
  };

  return (
    <section className=" py-14 lg:py-20">
      {" "}
      <div className="container w-[90vw] mx-auto p-4">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-deep">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-stone-red mx-auto mt-4 rounded-full" />
        </div>

        {/* MAIN CONTACT CARD */}
        <div className="max-w-3xl mx-auto">
          <div
            className="
        bg-white/70
        backdrop-blur-xl
        border border-stone-border
        rounded-3xl
        p-8
        shadow-xl
        space-y-6
        "
          >
            {/* BRANCH TITLE */}
            <h3 className="text-2xl font-bold text-stone-deep text-center">
              {office.title}
            </h3>

            {/* LOCATION */}
            <div className="flex items-start gap-3">
              <MapPin className="text-stone-red mt-1" />
              <p className="text-stone-deep/90">{office.location}</p>
            </div>

            {/* MOBILE */}
            <div className="flex items-center gap-3">
              <Phone className="text-stone-red" />
              <p className="text-stone-deep font-semibold">
                Mobile: {office.phone}
              </p>
            </div>

            {/* TELEPHONE */}
            <div className="flex items-center gap-3">
              <Phone className="text-stone-red" />
              <p className="text-stone-deep font-semibold">
                Telephone: {office.telephone}
              </p>
            </div>

            {/* WHATSAPP */}
            <div className="flex items-center gap-3">
              <Phone className="text-stone-red" />
              <p className="text-stone-deep font-semibold">
                WhatsApp: {office.whatsapp}
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3">
              <Mail className="text-stone-red" />
              <p className="text-stone-deep font-semibold">{office.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
