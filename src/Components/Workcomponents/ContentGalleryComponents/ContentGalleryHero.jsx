
import { motion } from "framer-motion";

export default function ContentGalleryHero({ project }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 md:px-12 md:pb-24 md:pt-40 lg:px-20">
      <div className="pointer-events-none absolute right-0 top-20 -z-0 h-72 w-72 rounded-full bg-[#A0CBD2]/20 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#007589]">
            Siluxri Studio / Creative Archive
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            Stories made
            <br />
            <span className="text-[#007589]">to be seen.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md lg:justify-self-end lg:pb-3"
        >
          <span className="mb-4 block h-px w-16 bg-[#EB6F38]" />

          <p className="text-xs uppercase tracking-[0.2em] text-[#007589]">
            A closer look at the work
          </p>

          <p className="mt-4 text-base leading-8 text-[#2F2E41]/65">
            An exploration of the visuals, campaigns and creative
            direction developed for{" "}
            <span className="font-semibold text-[#2F2E41]">
              {project.name}
            </span>.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative mt-14 h-px origin-left bg-[#2F2E41]/15 md:mt-20"
      />
    </section>
  );
}
























// import { motion } from "framer-motion";

// export default function ContentGalleryHero({
//   project,
//   featuredMedia,
//   onOpenMedia,
// }) {
//   const isVideo = ["video", "reel"].includes(featuredMedia?.type);

//   const featuredImage = isVideo
//     ? featuredMedia?.poster
//     : featuredMedia?.src;

//   return (
//     <section className="px-5 pb-10 pt-28 sm:px-8 md:px-12 md:pb-16 md:pt-36 lg:px-20">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, ease: "easeInOut" }}
//         className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between"
//       >
//         <div>
//           <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#007589]">
//             Siluxri / Content Creation
//           </p>

//           <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
//             The art of telling
//             <br />
//             <span className="text-[#007589]">{project.name}</span>
//             ’s story.
//           </h1>
//         </div>

//         <p className="max-w-sm text-sm leading-7 text-[#2F2E41]/65 md:pb-2 md:text-base">
//           Explore the visuals, campaigns, and creative stories crafted
//           to bring {project.name} to life.
//         </p>
//       </motion.div>

//       {featuredMedia && featuredImage ? (
//         <motion.button
//           type="button"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 1.2,
//             delay: 0.15,
//             ease: "easeInOut",
//           }}
//           onClick={() => onOpenMedia(featuredMedia)}
//           aria-label={`View featured content: ${featuredMedia.title || project.name}`}
//           className="group relative block w-full overflow-hidden rounded-tr-[28px] rounded-bl-[28px] bg-[#A0CBD2]/30 text-left md:rounded-tr-[64px] md:rounded-bl-[64px]"
//         >
//           <img
//             src={featuredImage}
//             alt={featuredMedia.alt || `${project.name} featured campaign`}
//             fetchPriority="high"
//             className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:h-[480px] md:h-[580px] lg:h-[680px]"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-[#2F2E41]/65 via-transparent to-black/5" />

//           <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-8 md:p-12">
//             <div>
//               <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/75">
//                 Featured work
//               </p>

//               <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
//                 {featuredMedia.title || project.name}
//               </h2>

//               <p className="mt-2 text-sm text-white/80">
//                 {featuredMedia.category ||
//                   (featuredMedia.type === "reel"
//                     ? "Reel"
//                     : featuredMedia.type === "video"
//                       ? "Video"
//                       : "Creative campaign")}
//               </p>
//             </div>

//             <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/10 text-xl text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[#2F2E41] sm:size-14">
//               {isVideo ? "▶" : "↗"}
//             </span>
//           </div>
//         </motion.button>
//       ) : (
//         <div className="flex min-h-[300px] items-center justify-center rounded-tr-[28px] rounded-bl-[28px] bg-[#A0CBD2]/25 px-6 text-center md:min-h-[440px] md:rounded-tr-[64px] md:rounded-bl-[64px]">
//           <p className="max-w-md text-sm leading-7 text-[#2F2E41]/65">
//             The featured campaign for {project.name} will appear here
//             once its media has been added.
//           </p>
//         </div>
//       )}
//     </section>
//   );
// }












































// import { motion } from "framer-motion";

// export default function ContentGalleryHero({
//   project,
//   featuredMedia,
//   onOpenMedia,
// }) {
//   const featuredImage =
//     featuredMedia?.type === "video"
//       ? featuredMedia.poster
//       : featuredMedia?.src;

//   return (
//     <section className="px-5 pb-10 pt-28 sm:px-8 md:px-12 md:pb-16 md:pt-36 lg:px-20">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.3, ease: "easeInOut" }}
//         className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between"
//       >
//         <div>
//           <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#007589]">
//             Siluxri / Content Creation
//           </p>

//           <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
//             The art of telling
//             <br />
//             <span className="text-[#007589]">
//               {project.name}
//             </span>
//             ’s story.
//           </h1>
//         </div>

//         <p className="max-w-sm text-sm leading-7 text-[#2F2E41]/65 md:pb-2 md:text-base">
//           Explore the visuals, campaigns, and creative stories
//           crafted to bring {project.name} to life.
//         </p>
//       </motion.div>

//       {featuredMedia && featuredImage && (
//         <motion.button
//           type="button"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 2,
//             delay: 0.2,
//             ease: "easeInOut",
//           }}
//           onClick={() => onOpenMedia(featuredMedia)}
//           aria-label={`View featured content: ${featuredMedia.alt || project.name}`}
//           className="group relative block w-full overflow-hidden rounded-tr-[28px] rounded-bl-[28px] bg-[#A0CBD2]/30 text-left md:rounded-tr-[64px] md:rounded-bl-[64px]"
//         >
//           <img
//             src={featuredImage}
//             alt={featuredMedia.alt || `${project.name} featured campaign`}
//             fetchPriority="high"
//             className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:h-[480px] md:h-[580px] lg:h-[680px]"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-[#2F2E41]/65 via-transparent to-black/5" />

//           <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-8 md:p-12">
//             <div>
//               <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/75">
//                 Featured work
//               </p>

//               <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
//                 {featuredMedia.title || project.name}
//               </h2>

//               <p className="mt-2 text-sm text-white/80">
//                 {featuredMedia.category || "Creative campaign"}
//               </p>
//             </div>

//             <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/10 text-xl backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[#2F2E41] sm:size-14">
//               {featuredMedia.type === "video" ? "▶" : "↗"}
//             </span>
//           </div>
//         </motion.button>
//       )}

//       {!featuredMedia && (
//         <div className="flex min-h-[300px] items-center justify-center rounded-tr-[28px] rounded-bl-[28px] bg-[#A0CBD2]/25 px-6 text-center md:min-h-[440px] md:rounded-tr-[64px] md:rounded-bl-[64px]">
//           <p className="max-w-md text-sm leading-7 text-[#2F2E41]/65">
//             The featured campaign for {project.name} will appear here
//             once its media has been added.
//           </p>
//         </div>
//       )}
//     </section>
//   );
// }
