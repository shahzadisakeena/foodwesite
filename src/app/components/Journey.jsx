// import React from "react";
// import Image from "next/image";
// const History = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-full w-[90vw] mx-auto">
//       <div className="flex lg:flex-row flex-col bg-brand-darkGray mt-10 p-5 rounded-md items-center  w-[90vw]">
//         <Image
//           src="/images/cate4.png"
//           width={400}
//           height={400}
//           alt="history img"
//           className="object-cover lg:h-[400px] lg:w-[400px]"
//         />
//         <div>
//           <h2 className="lg:text-2xl text-xl font-bold text-brand-secondary lg:mx-10 text-center lg:text-left mt-5 lg:mt-0">
//             History
//           </h2>
//           <p className="text-brand-secondary text-sm lg:mx-10 mt-5 font-bold text-center lg:text-left">
//        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem omnis in ipsa perspiciatis delectus unde dicta accusantium temporibus error, eligendi quisquam maxime voluptates qui a reiciendis incidunt distinctio? Provident ea omnis quae ipsam quia maiores consectetur dolor excepturi natus blanditiis repellendus eius beatae, amet velit quaerat corrupti autem? Adipisci.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default History;
export default function StorySection() {
  return (
    <section className="py-20 ">
      <div className="max-w-3xl mx-auto text-center px-6">
        <div className="text-center mb-10">
          <h2 className="text-stone-deep lg:text-6xl text-4xl font-extrabold uppercase">
            <span className="relative inline-block">
              Our
              <span className="absolute -bottom-1 left-0 w-[70%] border-b-4 border-stone-red rounded-full"></span>
            </span>
            <span className="ml-3 text-stone-red">Journey</span>
          </h2>
        </div>

        <p className="text-lg text-stone-deep/80">
          StoneBake was created to deliver authentic stone-baked pizza through
          craftsmanship and passion.
        </p>
      </div>
    </section>
  );
}
