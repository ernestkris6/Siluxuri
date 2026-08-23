import BLA from "../../assets/BLA-Logo.jpg";
import Vamp from "../../assets/Vamp-Logo.jpg";
import Chums from "../../assets/Chums-Logo.jpg";
import Sparkles from "../../assets/Sparkles-Logo.jpg";
import RTM from "../../assets/RTM-Logo.jpg";
import Haru from "../../assets/Haru-Logo.jpg";

const brands = [
  { name: "BLA", logo: BLA },
  { name: "VAMP", logo: Vamp },
  { name: "Chums Beauty", logo: Chums },
  { name: "DSparkles", logo: Sparkles },
  { name: "RTM Fashion", logo: RTM },
  { name: "Haru", logo: Haru },
];

const BrandSet = () => (
  <div className="flex shrink-0 items-center">
    {brands.map((brand) => (
      <div
        key={brand.name}
        className="group mx-10 flex shrink-0 items-center md:mx-16"
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="
            h-16
            w-auto
            max-w-[180px]
            shrink-0
            object-contain
            rounded-full
            transition-all
            duration-500
            cursor-pointer
            md:h-24
            md:max-w-[240px]
          "
        />

        <span className="ml-10 shrink-0 text-sm text-blue/20 md:ml-16">
          ✦
        </span>
      </div>
    ))}
  </div>
);

export default function AboutCta() {
  return (
    <section className="relative overflow-hidden border-y border-blue/10 bg-white py-16">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-blue/45">
          Selected Collaborations
        </p>

        <h2 className="font-serif text-2xl tracking-tight text-blue md:text-3xl">
          Brands we’ve had the pleasure of working with
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent md:w-40" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent md:w-40" />

        {/* Infinite scrolling track */}
        <div className="brand-marquee">
          <BrandSet />
          <BrandSet />
          <BrandSet />
          <BrandSet />
        </div>

      </div>
    </section>
  );
}








// import BLA from "../../assets/BLA-Logo.jpg";
// import Vamp from "../../assets/Vamp-Logo.jpg";
// import Chums from "../../assets/Chums-Logo.jpg";
// import Sparkles from "../../assets/Sparkles-Logo.jpg";
// import RTM from "../../assets/RTM-Logo.jpg";
// import Haru from "../../assets/Haru-Logo.jpg";

// const brands = [
//   {
//     name: "BLA",
//     logo: BLA,
//   },
//   {
//     name: "VAMP",
//     logo: Vamp,
//   },
//   {
//     name: "Chums Beauty",
//     logo: Chums,
//   },
//   {
//     name: "DSparkles",
//     logo: Sparkles,
//   },
//   {
//     name: "RTM Fashion",
//     logo: RTM,
//   },
//   {
//     name: "Haru",
//     logo: Haru,
//   },
// ];

// const BrandSet = () => (
//   <div className="flex shrink-0 items-center">
//     {brands.map((brand) => (
//       <div
//         key={brand.name}
//         className="group mx-10 flex shrink-0 items-center md:mx-16"
//       >
//         <img
//           src={brand.logo}
//           alt={brand.name}
//           className="
//             h-16
//             w-auto
//             max-w-[180px]
//             shrink-0
//             object-contain
//             rounded-full
//             transition-all
//             duration-500
//             md:h-24
//             md:max-w-[240px]
//           "
//         />

//         <span className="ml-10 shrink-0 text-sm text-black/20 md:ml-16">
//           ✦
//         </span>
//       </div>
//     ))}
//   </div>
// );

// export default function AboutCta() {
//   return (
//     <section className="relative overflow-hidden border-y border-black/10 bg-white py-16">

//       {/* Heading */}
//       <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
//         <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-blue/45">
//           Selected Collaborations
//         </p>

//         <h2 className="font-serif text-2xl tracking-tight text-blue md:text-3xl">
//           Brands we’ve had the pleasure of working with
//         </h2>
//       </div>

//       {/* Marquee */}
//       <div className="relative w-full overflow-hidden">

//         {/* Left fade */}
//         <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent md:w-40" />

//         {/* Right fade */}
//         <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent md:w-40" />

//         {/* Infinite track */}
//         <div className="brand-marquee">
//           <BrandSet />
//           <BrandSet />
//         </div>
//       </div>
//     </section>
//   );
// }
















// import BLA from "../../assets/BLA-Logo.jpg";
// import Vamp from "../../assets/Vamp-Logo.jpg";
// import Chums from "../../assets/Chums-Logo.jpg";
// import Sparkles from "../../assets/Sparkles-Logo.jpg";
// import RTM from "../../assets/RTM-Logo.jpg";
// import Haru from "../../assets/Haru-Logo.jpg";

// export default function AboutCta() {
//   const brands = [
//     {
//       name: "BLA",
//       logo: BLA,
//     },
//     {
//       name: "VAMP",
//       logo: Vamp,
//     },
//     {
//       name: "Chums Beauty",
//       logo: Chums,
//     },
//     {
//       name: "DSparkles",
//       logo: Sparkles,
//     },
//     {
//       name: "RTM Fashion",
//       logo: RTM,
//     },
//     {
//       name: "Haru",
//       logo: Haru,
//     },
//   ];

//   // Duplicate the logos for a seamless infinite loop
//   // const marqueeBrands = [...brands, ...brands];

//   return (
//     <section className="relative overflow-hidden border-y border-black/10 bg-white py-16">
      
//       {/* Section heading */}
//       <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
//         <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-blue/45">
//           Selected Collaborations
//         </p>

//         <h2 className="font-serif text-2xl tracking-tight text-blue md:text-3xl">
//           Brands we’ve had the pleasure of working with
//         </h2>
//       </div>

//       {/* Marquee */}
//       <div className="relative flex w-full overflow-hidden">

//         {/* Left fade */}
//         <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent md:w-36" />

//         {/* Right fade */}
//         <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent md:w-36" />

//         {/* Moving track */}
//         <div className="flex w-max animate-marquee-linear items-center">
//           {brands.map((brand, index) => (
//             <div
//               key={`${brand.name}-${index}`}
//               className="group mx-10 flex items-center md:mx-16"
//             >
//               <img
//                 src={brand.logo}
//                 alt={brand.name}
//                 className="
//                   h-16
//                   w-auto
//                   max-w-[180px]
//                   rounded-full
//                   object-contain
//                   transition-all
//                   duration-500
//                   group-hover:opacity-100
//                   group-hover:grayscale-0
//                   md:h-24
//                   md:max-w-[240px]
//                 "
//               />

//               {/* Separator */}
//               <span className="ml-10 text-sm text-black/20 md:ml-16">
//                 ✦
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




















// import BLA from "../../assets/BLA-Logo.jpg";
// import Vamp from "../../assets/Vamp-Logo.jpg";
// import Chums from "../../assets/Chums-Logo.jpg";
// import Sparkles from "../../assets/Sparkles-Logo.jpg";
// import RTM from "../../assets/RTM-Logo.jpg";
// import Haru from "../../assets/Haru-Logo.jpg";



// export default function AboutCta() {
//   // Duplicate the list so the animation can loop seamlessly
//   // const marqueeBrands = [...brands, ...brands];

//   const brands = [
//   {
//     name: "BLA",
//     logo: BLA,
//   },
//   {
//     name: "VAMP",
//     logo: Vamp,
//   },
//   {
//     name: "Chums Beauty",
//     logo: Chums,
//   },
//   {
//     name: "DSparkles",
//     logo: Sparkles,
//   },
//   {
//     name: "RTM Fashion",
//     logo: RTM,
//   },
//   {
//     name: "Haru",
//     logo: Haru,
//   },
// ];

//   return (
//     <section className="relative overflow-hidden border-y border-black/10 bg-white py-16">
//       {/* Section heading */}
//       <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
//         <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-blue/45">
//           Selected Collaborations
//         </p>

//         <h2 className="font-serif text-2xl tracking-tight text-blue md:text-3xl">
//           Brands we’ve had the pleasure of working with
//         </h2>
//       </div>

//       {/* Marquee */}
//       <div className="relative flex w-full overflow-hidden">
//         {/* Left fade */}
//         <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f7f5f0] to-transparent md:w-40" />

//         {/* Right fade */}
//         <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f7f5f0] to-transparent md:w-40" />

//         <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
//           {brands.map((brand, index) => (
//             <div
//               key={`${brand}-${index}`}
//               className="group mx-8 flex items-center md:mx-14"
//             >
//               <img
//                 src={brand.logo}
//                 alt={brand.name}
//                 className="h-full w-auto object-contain transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 md:h-9"
//               />
//               {/* <span className="whitespace-nowrap font-serif text-2xl tracking-tight text-black/55 transition-all duration-500 group-hover:text-black md:text-4xl">
//                 {brand}
//               </span> */}

//               {/* Decorative separator */}
//               <span className="ml-8 text-sm text-black/20 md:ml-14">
//                 ✦
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }