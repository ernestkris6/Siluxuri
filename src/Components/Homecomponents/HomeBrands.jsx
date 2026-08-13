import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../assets/BLA.webp";
import image2 from "../../assets/Chums.webp";
import image3 from "../../assets/rtm.webp";
import image4 from "../../assets/spark.webp";
import image5 from "../../assets/vamp.webp";
import image6 from "../../assets/Haru.webp";

const brands = [
  {
    name: "BLA",
    category: "Fashion",
    description: "Meet sophisticated designs that inspire confidence.",
    image: image1,
  },
  {
    name: "Chums Beauty",
    category: "Beauty",
    description: "Hairstyling and Beauty where elegance meets expertise.",
    image: image2,
  },
  {
    name: "RTM Fashion",
    category: "Fashion",
    description:
      "Luxury retail fashion brand specialized in authentic designer fashion.",
    image: image3,
  },
  {
    name: "Dsparkles",
    category: "Jewellery",
    description: "Haven for lovers of handmade beaded jewellery.",
    image: image4,
  },
  {
    name: "Vamp",
    category: "Vape and Smoke",
    description:
      "One stop shop for authentic vapes and somke accessories.",
    image: image5,
  },
  {
    name: "Haru",
    category: "Lifestyle",
    description:
      "Bringing authentic ramen, snacks and cultural experiences to Nigeria and beyond.",
    image: image6,
  },
];

export default function HomeBrands() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + brands.length) % brands.length);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const previous =
    (current - 1 + brands.length) % brands.length;

  const next = (current + 1) % brands.length;

  return (
    <section className="w-full overflow-hidden bg-white px-6 py-24 text-blue sm:px-8 md:px-8 lg:px-12 xl:px-18">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between border-b border-blue/20 pb-4">
          <span className="text-sm font-medium uppercase tracking-[0.2em]">
            Brands we've worked with
          </span>

          <span className="text-sm text-blue/40">
            03
          </span>
        </div>

        {/* Intro */}
        <div className="mb-8">
          <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-5xl lg:text-6xl">
            Good work gets
            <span className="block text-blue/40">
              people talking.
            </span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Desktop Slider */}
          <div className="hidden items-center justify-center gap-4 lg:flex">

            {/* Previous */}
            <motion.div
              key={`prev-${previous}`}
              className="relative h-[400px] w-[22%] shrink-0 overflow-hidden rounded-2xl opacity-40"
            >
              <img
                src={brands[previous].image}
                alt={brands[previous].name}
                className="h-full w-full object-cover object-center"
              />
            </motion.div>

            {/* Main slide */}
            <div className="relative h-[500px] w-[28%] xl:h-[600px] xl:w-[36%] shrink-0 overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={brands[current].image}
                  alt={brands[current].name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue/80 via-blue/10 to-transparent" />

              {/* Slide information */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8 text-white lg:p-10">

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
                    {brands[current].category}
                  </p>

                  <h3 className="text-4xl font-medium tracking-tight lg:text-5xl">
                    {brands[current].name}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                    {brands[current].description}
                  </p>
                </div>

                <span className="hidden text-3xl sm:block">
                  ↗
                </span>

              </div>
            </div>

            {/* Next */}
            <motion.div
              key={`next-${next}`}
              className="relative h-[400px] w-[22%] shrink-0 overflow-hidden rounded-2xl opacity-40"
            >
              <img
                src={brands[next].image}
                alt={brands[next].name}
                className="h-full w-full object-cover object-center"
              />
            </motion.div>

          </div>

          {/* Mobile / Tablet Main Slide */}
          <div className="relative h-[500px] md:h-[900px] overflow-hidden rounded-2xl lg:hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={brands[current].image}
                alt={brands[current].name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 h-full w-full object-cover object-center sm:object-[center_20%]"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-blue/80 via-blue/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">

              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/60">
                {brands[current].category}
              </p>

              <h3 className="text-4xl font-medium tracking-tight">
                {brands[current].name}
              </h3>

              <p className="mt-3 max-w-md text-sm text-white/70">
                {brands[current].description}
              </p>

            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">

            {/* Counter */}
            <div className="text-sm font-medium">
              <span>
                {String(current + 1).padStart(2, "0")}
              </span>

              <span className="mx-2 text-blue/30">
                /
              </span>

              <span className="text-blue/30">
                {String(brands.length).padStart(2, "0")}
              </span>
            </div>

            {/* Arrows */}
            <div className="flex gap-3">

              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-blue/20 text-xl transition-all duration-300 hover:border-blue hover:bg-blue hover:text-white"
                aria-label="Previous brand"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-blue/20 text-xl transition-all duration-300 hover:border-blue hover:bg-blue hover:text-white"
                aria-label="Next brand"
              >
                →
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}












































// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import image1 from "../../assets/BLA.webp";
// import image2 from "../../assets/Chums.webp";
// import image3 from "../../assets/rtm.webp";
// import image4 from "../../assets/spark.webp";
// import image5 from "../../assets/vamp.webp";
// import image6 from "../../assets/Haru.webp";


// const brands = [
//   {
//     name: "BLA",
//     category: "Fashion",
//     description: "Meet sophisticated designs that inspire confidence.",
//     image: image1,
//   },
//   {
//     name: "Chums Beauty",
//     category: "Beauty",
//     description: "Hairstyling and Beauty where elegance meets expertise.",
//     image: image2,
//   },
//   {
//     name: "RTM Fashion",
//     category: "Fashion",
//     description: "Luxury retail fashion brand specialized in authentic designer fashion.",
//     image: image3,
//   },
//   {
//     name: "Dsparkles",
//     category: "Jewellery",
//     description: "Haven for lovers of handmade beaded jewellery.",
//     image: image4,
//   },
//   {
//     name: "Vamp",
//     category: "Vape and Smoke",
//     description: "One stop shop for authentic vapes and somke accessories.",
//     image: image5,
//   },
//   {
//     name: "Haru",
//     category: "Lifestyle",
//     description: "Bringing authentic ramen, snacks and cultural experiences to Nigeria and beyond.",
//     image: image6,
//   },
// ];

// export default function HomeBrands() {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % brands.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + brands.length) % brands.length);
//   };

//   // Autoplay
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const previous =
//     (current - 1 + brands.length) % brands.length;

//   const next = (current + 1) % brands.length;

//   return (
//     <section className="w-full overflow-hidden bg-white px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
//       <div className="mx-auto max-w-7xl">

//         {/* Header */}
//         <div className="mb-16 flex items-center justify-between border-b border-blue/20 pb-4">
//           <span className="text-sm font-medium uppercase tracking-[0.2em]">
//             Brands we've worked with
//           </span>

//           <span className="text-sm text-blue/40">
//             03
//           </span>
//         </div>

//         {/* Intro */}
//         <div className="mb-16">
//           <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
//             Good work gets
//             <span className="block text-blue/40">
//               people talking.
//             </span>
//           </h2>
//         </div>

//         {/* Slider */}
//         <div className="relative">

//           {/* Side slides */}
//           <div className="hidden items-center justify-center gap-6 lg:flex">

//             {/* Previous */}
//             <motion.div
//               key={`prev-${previous}`}
//               className="relative h-[400px] w-[18%] shrink-0 overflow-hidden rounded-2xl opacity-40"
//             >
//               <img
//                 src={brands[previous].image}
//                 alt={brands[previous].name}
//                 className="h-full w-full object-cover"
//               />
//             </motion.div>

//             {/* Main slide */}
//             <div className="relative h-[600px] flex-1 overflow-hidden rounded-2xl">
//               <AnimatePresence mode="wait">
//                 <motion.img
//                   key={current}
//                   src={brands[current].image}
//                   alt={brands[current].name}
//                   initial={{ opacity: 0, scale: 1.05 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.7 }}
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />
//               </AnimatePresence>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-blue/80 via-blue/10 to-transparent" />

//               {/* Slide information */}
//               <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8 text-white lg:p-10">

//                 <div>
//                   <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
//                     {brands[current].category}
//                   </p>

//                   <h3 className="text-4xl font-medium tracking-tight lg:text-5xl">
//                     {brands[current].name}
//                   </h3>

//                   <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
//                     {brands[current].description}
//                   </p>
//                 </div>

//                 <span className="hidden text-3xl sm:block">
//                   ↗
//                 </span>

//               </div>
//             </div>

//             {/* Next */}
//             <motion.div
//               key={`next-${next}`}
//               className="relative h-[400px] w-[18%] shrink-0 overflow-hidden rounded-2xl opacity-40"
//             >
//               <img
//                 src={brands[next].image}
//                 alt={brands[next].name}
//                 className="h-full w-full object-cover"
//               />
//             </motion.div>

//           </div>

//           {/* Mobile / Tablet Main Slide */}
//           <div className="relative h-[500px] overflow-hidden rounded-2xl lg:hidden">

//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={current}
//                 src={brands[current].image}
//                 alt={brands[current].name}
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.7 }}
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//             </AnimatePresence>

//             <div className="absolute inset-0 bg-gradient-to-t from-blue/80 via-blue/10 to-transparent" />

//             <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">

//               <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/60">
//                 {brands[current].category}
//               </p>

//               <h3 className="text-4xl font-medium tracking-tight">
//                 {brands[current].name}
//               </h3>

//               <p className="mt-3 max-w-md text-sm text-white/70">
//                 {brands[current].description}
//               </p>

//             </div>
//           </div>

//           {/* Controls */}
//           <div className="mt-6 flex items-center justify-between">

//             {/* Counter */}
//             <div className="text-sm font-medium">
//               <span>
//                 {String(current + 1).padStart(2, "0")}
//               </span>

//               <span className="mx-2 text-blue/30">
//                 /
//               </span>

//               <span className="text-blue/30">
//                 {String(brands.length).padStart(2, "0")}
//               </span>
//             </div>

//             {/* Arrows */}
//             <div className="flex gap-3">

//               <button
//                 onClick={prevSlide}
//                 className="flex h-12 w-12 items-center justify-center rounded-full border border-blue/20 text-xl transition-all duration-300 hover:border-blue hover:bg-blue hover:text-white"
//                 aria-label="Previous brand"
//               >
//                 ←
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="flex h-12 w-12 items-center justify-center rounded-full border border-blue/20 text-xl transition-all duration-300 hover:border-blue hover:bg-blue hover:text-white"
//                 aria-label="Next brand"
//               >
//                 →
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }