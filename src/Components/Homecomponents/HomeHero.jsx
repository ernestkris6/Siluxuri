import { motion } from "framer-motion";
import herovideo from "../../assets/siluxuri-hero-web.mp4";

export default function HeroSection() {
  return (
    <section className="w-full text-blue mb-8 bg-white px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto flex items-center py-24">

        <div className="w-full">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Hello, we are your next{" "}
            <span className="text-orange">
              agency.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 text-2xl font-medium sm:text-3xl md:w-2/3"
          >
            The kind that reimagines what PR, Social Media, Digital Marketing,
            Events, Social Commerce can achieve for you and your brand. The kind
            that dives deep to help your business grow and meet brand results.
          </motion.p>

        </div>
      </div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.1,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mt-[-32px] h-[380px] overflow-hidden md:h-[480px]"
      >
        <video
          className="absolute inset-0 h-full w-full rounded-2xl object-cover"
          src={herovideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
    </section>
  );
}



































// import herovideo from "../../assets/siluxuri-hero-web.mp4"

// export default function HeroSection() {

//   //px-3 sm:px-6
//   return (
//     <section className="w-full text-blue mb-8 bg-white px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-20">
//       <div className="mx-auto flex items-center py-24">
        
//         <div className="w-full">
//           {/* Heading */}
//           <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
//             Hello, we are your next <span className="text-orange">agency.</span>
//           </h1>

//           {/* Description */}
//           <p className="mt-8 text-2xl font-medium sm:text-3xl md:w-2/3">
//             The kind that reimagines what PR, Social Media, Digital Marketing, Events, Social Commerce can achieve for you and your brand. The kind that dives deep to help your business grow and meet brand results.
//           </p>
//         </div>
//       </div>

//     <div className="relative h-[380px] mt-[-32px] overflow-hidden md:h-[480px]">
//             {/* Video */}
//             <video
//                 className="absolute inset-0 w-full h-full rounded-2xl object-cover transition-opacity duration-700"
//                 src={herovideo}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//             />
//         </div>
//     </section>
//   );
// }









// // import { useState } from "react";
// // import herovideo from "../../assets/siluxuri-hero-web.mp4";

// // export default function HeroSection() {
// //   const [loaded, setIsLoaded] = useState(false);
// //   const [videoError, setVideoError] = useState(false);

// //   return (
// //     <section className="w-full text-blue mb-8 bg-white px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-20">
// //       <div className="mx-auto flex items-center py-24">
// //         <div className="w-full">
// //           {/* Heading */}
// //           <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
// //             Hello, we are your next{" "}
// //             <span className="text-orange">agency.</span>
// //           </h1>

// //           {/* Description */}
// //           <p className="mt-8 text-2xl font-medium sm:text-3xl md:w-2/3">
// //             The kind that reimagines what PR, Social Media, Digital Marketing,
// //             Events, Social Commerce can achieve for you and your brand. The
// //             kind that dives deep to help your business grow and meet brand
// //             results.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Video */}
// //       <div className="relative mt-[-32px] h-[380px] overflow-hidden md:h-[480px]">
        
// //         {/* Fallback while video is loading or unavailable */}
// //         {!loaded && (
// //           <div className="absolute inset-0 rounded-2xl bg-blue/60" />
// //         )}

// //         {/* Only show the actual video once it is ready */}
// //         {loaded && !videoError && (
// //           <video
// //             className="absolute inset-0 h-full w-full rounded-2xl object-cover"
// //             src={herovideo}
// //             autoPlay
// //             muted
// //             loop
// //             playsInline
// //             controls={false}
// //           />
// //         )}

// //         {/* Hidden video used only to preload the file */}
// //         {!loaded && !videoError && (
// //           <video
// //             src={herovideo}
// //             autoPlay
// //             muted
// //             playsInline
// //             preload="auto"
// //             onCanPlay={() => setIsLoaded(true)}
// //             onError={() => setVideoError(true)}
// //             className="hidden"
// //           />
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

























































