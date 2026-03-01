// import Link from "next/link";
// import React from "react";
// import { RiYoutubeFill, RiInstagramLine, RiFacebookFill } from "react-icons/ri";

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-brand-darkGray font-ftr py-14">
//         <div className="container mx-auto px-4">
//           {/* Logo and Social Links */}
//           <div className="flex justify-center items-center space-x-14">
//            <Link href="/">
//            <span className="text-brand-primary font-extrabold !font-logo text-4xl ">
//               YUM'S
//             </span>
//            </Link>

//             <div className="flex gap-3">
//               <Link
//                 href="/"
//                 className="bg-white p-2 rounded-full text-brand-primary"
//               >
//                 <RiYoutubeFill className="text-3xl" />
//               </Link>
//               <Link href="/" className="bg-white p-2 rounded-full">
//                 <RiInstagramLine className="text-3xl" />
//               </Link>
//               <Link
//                 href="/"
//                 className="bg-white p-2 rounded-full text-blue-600"
//               >
//                 <RiFacebookFill className="text-3xl" />
//               </Link>
//             </div>
//           </div>

//           {/* Footer Links */}
//           <div className="grid p-3 text-lg grid-cols-1 md:grid-cols-4 mt-6">
//             <div className=" flex flex-col lg:items-center ">
//               <ul className="space-y-2 text-white">
//                 <li>
//                   <Link href="/aboutus" className="hover:underline">
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="hover:underline">
//                     Mitao Bhook
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/privacypolicy" className="hover:underline">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="hover:underline">
//                     Careers
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div className=" flex flex-col lg:items-center align-top ">
//               <ul className="space-y-2 text-white">
//                 <li>
//                   <Link href="/contactus" className="hover:underline">
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="hover:underline">
//                     Store Locator
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/trackorder" className="hover:underline">
//                     Track Order
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div className=" flex flex-col lg:items-center ">
//               <ul className="space-y-2 text-white">
//                 <li>
//                   <Link href="/termscon" className="hover:underline">
//                     Terms &amp; Conditions
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div className=" flex flex-col ">
//               <Link href="/">
//                 <img
//                   src="/images/appstore.png"
//                   alt="app-store"
//                   className="mt-3 w-32 h-auto"
//                 />
//               </Link>
//               <Link href="/">
//                 <img
//                   src="/images/playstore.png"
//                   alt="play-store"
//                   className="mt-3 w-32 h-auto"
//                 />
//               </Link>
//             </div>
//           </div>
//           <div className="mt-2 text-white text-md lg:px-12 flex justify-between flex-col lg:flex-row md:flex-row ">
//             <p className="m-0">2025 YUM'S. All rights reserved</p>
//             <div>
//               <h1 className="text-brand-primary font-logo font-semibold">
//                 Powered by
//               </h1>
//               <Link href="https://www.webaura.site/" className="  underline">
//                 WebAura
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
import Link from "next/link";
import React from "react";
import { RiYoutubeFill, RiInstagramLine, RiFacebookFill } from "react-icons/ri";
import Image from "next/image";
const Footer = () => {
  return (
    <footer
      className="
      relative
      font-ftr
      pt-5 pb-5
      mt-24
      bg-stone-red/80
      text-white
      overflow-hidden
    "
    >
      {/* 🔥 TOP GLOW STRIP */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-stone-red via-stone-yellow to-stone-orange"></div>

      {/* subtle glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,210,63,0.5),transparent_60%)] pointer-events-none"></div>

      <div className="relative container mx-auto px-4">
        {/* ================= LOGO + SOCIAL ================= */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/images/stonebake.png"
              alt="Stone Bake Pizza"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[160px] md:w-[200px] lg:w-[240px] h-auto object-contain transition hover:scale-105"
              priority
            />
          </Link>

          <div className="flex gap-4">
            <Link
              href="/"
              className="bg-stone-yellow p-3 rounded-full hover:scale-110 hover:bg-stone-white transition duration-300 shadow-lg"
            >
              <RiYoutubeFill className="text-2xl text-stone-red" />
            </Link>

            <Link
              href="/"
              className="bg-stone-yellow p-3 rounded-full hover:scale-110 hover:bg-stone-white transition duration-300 shadow-lg"
            >
              <RiInstagramLine className="text-2xl text-stone-red" />
            </Link>

            <Link
              href="/"
              className="bg-stone-yellow p-3 rounded-full hover:scale-110 hover:bg-stone-white transition duration-300 shadow-lg"
            >
              <RiFacebookFill className="text-2xl text-stone-red" />
            </Link>
          </div>
        </div>

        {/* ================= LINKS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-lg mt-8">
          <ul className="space-y-3 text-center md:text-left">
            <li>
              <Link
                href="/aboutus"
                className="hover:text-stone-yellow transition"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/privacypolicy"
                className="hover:text-stone-yellow transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/careers-page"
                className="hover:text-stone-yellow transition"
              >
                Careers
              </Link>
            </li>
          </ul>

          <ul className="space-y-3 text-center md:text-left">
            <li>
              <Link
                href="/contactus"
                className="hover:text-stone-yellow transition"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                href="/trackorder"
                className="hover:text-stone-yellow transition"
              >
                Track Order
              </Link>
            </li>
            <li>
              <Link
                href="/termscon"
                className="hover:text-stone-yellow transition"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>

          <ul className="space-y-3 text-center md:text-left"></ul>

          {/* APP BUTTONS */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <img
                src="/images/appstore.png"
                alt="app-store"
                className="w-36 hover:scale-105 transition"
              />
            </Link>
            <Link href="/">
              <img
                src="/images/playstore.png"
                alt="play-store"
                className="mt-3 w-36 hover:scale-105 transition"
              />
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-14 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-center items-center text-sm gap-4">
          <p className="text-white/80 text-center">All rights reserved</p>

          <div className="flex items-center gap-2">
            <span className="text-stone-yellow font-semibold">Powered by</span>
            <Link
              href="https://www.webaura.site/"
              className="underline hover:text-stone-yellow"
            >
              WebAura
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
