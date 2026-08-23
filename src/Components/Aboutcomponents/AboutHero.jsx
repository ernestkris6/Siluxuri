import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import digi from "../../assets/digital2.webp";

export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-blue text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={digi}
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Dark luxury overlay */}
        <div className="absolute inset-0 bg-blue/40" />

        {/* Subtle brand-colour gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue/80 via-blue/45 to-magenta/30" />
      </div>


      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1400px] flex-col justify-between px-6 py-10 sm:px-8 md:px-12 lg:px-16">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-white/60">
            About Siluxuri
          </span>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-white/40 sm:block">
            Creative Studio
          </span>
        </motion.div>


        {/* Main */}
        <div className="max-w-5xl pb-12">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 max-w-md text-sm leading-7 text-white/60"
          >
            We build brands, digital experiences and creative
            solutions designed to make businesses impossible to ignore.
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-4xl text-5xl font-medium leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            We make
            <span className="block text-white/40">
              brands matter.
            </span>
          </motion.h1>

        </div>


        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-between border-t border-white/20 pt-5"
        >

          <span className="text-xs uppercase tracking-[0.2em] text-white/40">
            01 / About
          </span>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
            <FiArrowDown className="animate-bounce" />
            Explore
          </div>

        </motion.div>

      </div>

    </section>
  );
}



















































// import { motion } from "framer-motion";
// import { FiArrowDown } from "react-icons/fi";

// export default function AboutHero() {
//   return (
//     <section className="relative min-h-[85vh] overflow-hidden bg-blue text-white">

//       {/* Decorative shape */}
//       <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-magenta/20 blur-3xl" />

//       <div className="relative mx-auto flex min-h-[85vh] max-w-[1400px] flex-col justify-between px-6 py-10 sm:px-8 md:px-12 lg:px-16">

//         {/* Top label */}
//         <motion.div
//           initial={{ opacity: 0, y: -15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex items-center justify-between"
//         >
//           <span className="text-xs uppercase tracking-[0.25em] text-white/50">
//             About Siluxuri
//           </span>

//           <span className="hidden text-xs uppercase tracking-[0.2em] text-white/40 sm:block">
//             Creative Studio
//           </span>
//         </motion.div>


//         {/* Main content */}
//         <div className="grid gap-12 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.15 }}
//           >
//             <p className="mb-6 max-w-md text-sm leading-relaxed text-white/50">
//               We build brands, digital experiences and creative
//               solutions designed to make businesses impossible to ignore.
//             </p>

//             <h1 className="text-5xl font-medium leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
//               We make
//               <span className="block text-white/35">
//                 brands matter.
//               </span>
//             </h1>
//           </motion.div>


//           {/* Hero visual */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.96 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.9, delay: 0.3 }}
//             className="relative ml-auto w-full max-w-lg"
//           >
//             <div className="aspect-[4/3] overflow-hidden rounded-[2rem]">
//               <img
//                 src="/images/about-hero.jpg"
//                 alt="Siluxuri creative studio"
//                 className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//               />
//             </div>

//             {/* Image caption */}
//             <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/35">
//               <span>01 / About</span>
//               <span>Scroll to explore</span>
//             </div>
//           </motion.div>

//         </div>


//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-6 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/40 sm:flex md:left-12">
//           <FiArrowDown className="animate-bounce" />
//           Discover
//         </div>

//       </div>
//     </section>
//   );
// }