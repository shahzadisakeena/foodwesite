// "use client";
// import Image from "next/image";
// import React from "react";
// import {
//   FilledInput,
//   FormControl,
//   InputLabel,
//   Typography,
//   InputAdornment,
// } from "@mui/material";
// import { useState } from "react";
// import { FaGoogle } from "react-icons/fa";
// import { ChevronLeft } from "lucide-react";
// import Link from "next/link";

// const Login = () => {
//   const [number, setNumber] = useState("");

//   return (
//     <>
//       <div className="relative h-full w-[70vw] mx-auto">
//         <Link href="/">
//           <div className="absolute top-4 left-4 bg-brand-primary text-brand-secondary p-1 rounded-full">
//             <ChevronLeft />
//           </div>
//         </Link>
//         <h2 className="text-3xl text-brand-secondary font-bold lg:mt-[10.5rem] mt-[11.5rem]"></h2>
//         <div className="grid lg:grid-cols-2 place-items-center gap-3 grid-cols-1 pb-4 bg-brand-darkGray mt-10 rounded-md">
//           <div className="flex items-center justify-center mx-5">
//             <Image
//               // src="/animation/login-animation.gif"
//               src="/images/fastfood.png"
//               className="max-w-[500px]:w-[200px] w-[200] max-w-[500px]:h-[200px] object-cover"
//               width={350}
//               height={350}
//               objectFit="cover"
//               loading="eager"
//               alt="login-animation.gif"
//             />
//           </div>
//           <div className="font-login w-[80%] ">
//             <h3 className="text-[40px] text-white mb-5 mt-[30px]">
//               Welcome<span className="font-sym font-extrabold">!</span>
//             </h3>

//             <FormControl
//               variant="filled"
//               error
//               fullWidth
//               className="bg-brand-lgInp rounded-t-lg"
//             >
//               <InputLabel
//                 className="!text-brand-secondary"
//                 shrink
//                 htmlFor="outlined-number"
//               >
//                 Phone Number (3XXXXXXXXX)
//               </InputLabel>
//               <FilledInput
//                 id="outlined-number"
//                 name="input1"
//                 type="tel"
//                 autoComplete="mobile tel"
//                 value={number}
//                 disableUnderline
//                 onChange={(e) => {
//                   const inputValue = e.target.value; // Remove non-numeric characters
//                   if (
//                     !isNaN(inputValue) &&
//                     inputValue.startsWith("3") &&
//                     inputValue.length <= 10
//                   ) {
//                     setNumber(inputValue);
//                   } else if (!isNaN(inputValue) && inputValue == 3) {
//                     setNumber(inputValue);
//                   }
//                 }}
//                 // onClick={this.borderColor = "#b91c1c"}
//                 startAdornment={
//                   <InputAdornment position="start">
//                     <Typography
//                       className="text-brand-secondary border-e-2 font-semibold ms-1"
//                       variant="body1"
//                     >
//                       +92&nbsp;&nbsp;
//                     </Typography>
//                   </InputAdornment>
//                 }
//                 tabIndex={0}
//                 className = "text-brand-secondary border-b-[0.1rem] ps-[0.5rem] mt-3 border-white  !focus:border-red-700 hover:border-brand-inpred"
//               />
//             </FormControl>

//             <div className="mt-3"></div>

//             <div>
//               <button
//                 className={` text-white py-[10px] text-sm font-lgbtn px-4 rounded w-full m-auto mt-6 ${
//                   number.length == 10
//                     ? " bg-brand-inpred"
//                     : " bg-brand-inpnot cursor-not-allowed"
//                 } `}
//                 type="button"
//                 disabled={number.length !== 10}
//               >
//                 LOGIN
//               </button>
//             </div>

//             <button
//               className=" relative bg-brand-inpred font-lgbtn text-white text-sm py-3 px-4 rounded w-full mt-2 flex items-center justify-center"
//               type="button"
//             >
//               <FaGoogle className="absolute font-bold left-4 text-lg " /> LOGIN
//               WITH GOOGLE
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FilledInput,
  FormControl,
  InputLabel,
  Typography,
  InputAdornment,
} from "@mui/material";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [number, setNumber] = useState("");

  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-bg px-4 relative overflow-hidden">
      {/* BACK BUTTON */}

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-stone-yellow/30 blur-3xl rounded-full -top-32 -left-32"></div>
      <div className="absolute w-[500px] h-[500px] bg-stone-red/20 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* CARD */}
      <div className="relative z-10 grid lg:grid-cols-2 grid-cols-1 items-center bg-stone-deep rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">
        {/* LEFT IMAGE */}
        <div className="flex justify-center items-center p-10 bg-gradient-to-br from-stone-yellow/20 to-transparent">
          <Image
            src="/images/fastfood.png"
            width={350}
            height={350}
            alt="login"
            className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.4)]"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10 font-login">
          <h2 className="text-4xl font-extrabold text-white mb-2">
            Welcome Back
          </h2>

          <p className="text-white/70 mb-8">
            Login to continue your StoneBake experience 🍕
          </p>

          {/* PHONE INPUT */}
          <FormControl
            variant="filled"
            fullWidth
            className="bg-[#2a2421] rounded-xl"
          >
            <InputLabel shrink className="!text-white/70" htmlFor="phone">
              Phone Number (3XXXXXXXXX)
            </InputLabel>

            <FilledInput
              id="phone"
              type="tel"
              value={number}
              disableUnderline
              onChange={(e) => {
                const inputValue = e.target.value;

                if (
                  !isNaN(inputValue) &&
                  inputValue.startsWith("3") &&
                  inputValue.length <= 10
                ) {
                  setNumber(inputValue);
                } else if (!isNaN(inputValue) && inputValue === "3") {
                  setNumber(inputValue);
                }
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Typography className="text-white border-r pr-2 mr-2 font-semibold">
                    +92
                  </Typography>
                </InputAdornment>
              }
              className="text-white px-2 py-2"
            />
          </FormControl>

          {/* LOGIN BUTTON */}
          <button
            disabled={number.length !== 10}
            className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all duration-300
              ${
                number.length === 10
                  ? "bg-stone-red hover:bg-stone-orange text-white shadow-lg"
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"
              }`}
          >
            LOGIN
          </button>

          {/* GOOGLE LOGIN */}
          <button className="relative w-full mt-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 bg-white text-black hover:scale-[1.02] transition">
            <FaGoogle className="text-lg" />
            Login with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
