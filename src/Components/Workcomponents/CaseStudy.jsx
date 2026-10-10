import { Link, useParams } from "react-router";
import { project } from "../../data";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function CaseStudy() {
  const { slug } = useParams();

  // Find the selected project from the URL
  const selectedProject = project.find(
    (item) => item.slug === slug
  );

  // Simple fallback for an invalid project URL
  if (!selectedProject) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
        <div>
          <h1 className="text-5xl text-blue">
            Project not found.
          </h1>

          <Link
            to="/work"
            className="mt-6 inline-block text-magenta underline"
          >
            Back to Works
          </Link>
        </div>
      </main>
    );
  }

  // Brand theme
  // The fallback prevents the page from crashing if a project
  // doesn't have a theme yet.
  const theme = selectedProject.theme || {
    background: "#F2F2F2",
    foreground: "#2F2E41",
    accent: "#007589",
    secondary: "#EB6F38",
    displayFont: "Roboto",
  };

  // CHANGED: Check whether this project actually has metrics.
  const hasMetrics = selectedProject.metrics?.length > 0;

  return (
    <main
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
      className="overflow-hidden"
    >
      {/* =========================
          CASE STUDY HERO
      ========================== */}
      <section className="pb-16 sm:pb-20 md:pb-24">

        {/* =========================
            FULL-WIDTH HERO IMAGE
        ========================== */}
        <div className="w-full overflow-hidden">

          <motion.img
            src={selectedProject.cover}
            alt={`${selectedProject.name} project cover`}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-[35vh] min-h-[320px] w-full object-cover md:h-[45vh] md:min-h-[450px]"
          />

        </div>

        {/* =========================
            PROJECT DETAILS
        ========================== */}
        <div className="px-5 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to="/work"
                className="my-8 inline-flex items-center gap-2 border-b pb-2 text-xs font-semibold uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
              >
                <FiArrowLeft /> Back to Works
              </Link>
            </motion.div>

            <div className="mt-6">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-8 flex items-center gap-3"
              >
                <span
                  className="h-px w-10"
                  style={{
                    backgroundColor: theme.accent,
                  }}
                />

                <p
                  className="text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{
                    color: theme.accent,
                  }}
                >
                  Selected Project
                </p>
              </motion.div>

              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">

                <motion.h1
                  initial={{ opacity: 0, y: 45 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    fontFamily: theme.displayFont,
                  }}
                  className="text-5xl leading-[1] tracking-tight sm:text-6xl md:text-7xl"
                >
                  {selectedProject.name}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="max-w-md"
                >
                  <p className="text-sm leading-7 opacity-75">
                    {selectedProject.description}
                  </p>

                  {/* <div className="mt-6 flex flex-wrap gap-2">
                    {selectedProject.services?.map((service, index) => (
                      <motion.span
                        key={service}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.75 + index * 0.06,
                          ease: "easeOut",
                        }}
                        className="rounded-full border px-3 py-2 text-xs"
                        style={{
                          borderColor: `${theme.foreground}35`,
                        }}
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div> */}
                </motion.div>
              </div>

              {/* Project metadata */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                }}
                className="mt-8 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.15em]"
              >
                <span>{selectedProject.category}</span>
                <span>{selectedProject.location}</span>
              </motion.div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================
          ABOUT THE BRAND
      ========================== */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]"
        >

          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              color: theme.accent,
            }}
          >
            01 / The Brand
          </p>

          <div>
            <h2
              style={{
                fontFamily: theme.displayFont,
              }}
              className="text-3xl leading-tight sm:text-4xl"
            >
              Building a brand with intention.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 opacity-75">
              {selectedProject.description}
            </p>
          </div>

        </motion.div>
      </section>


      {/* =========================
          SERVICES
      ========================== */}
      <section
        className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
        style={{
          backgroundColor: `${theme.secondary}`,
        }}
      >
        <div className="mx-auto max-w-7xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              color: theme.foreground,
            }}
          >
            02 / Our Contribution
          </motion.p>

          <div
            className="divide-y"
            style={{
              borderColor: `${theme.foreground}20`,
            }}
          >
            {selectedProject.services?.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 6 }}
                className="flex items-center justify-between gap-5 py-6"
              >

                <div className="flex items-center gap-6">

                  <span className="text-xs opacity-50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    style={{
                      fontFamily: theme.displayFont,
                    }}
                    className="text-2xl sm:text-3xl"
                  >
                    {service}
                  </h3>

                </div>

                <motion.span
                  whileHover={{ x: 4, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl"
                  style={{
                    color: theme.accent,
                  }}
                >
                  <FiArrowUpRight />
                </motion.span>

              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================
          METRICS
      ========================== */}
      {hasMetrics && (
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{
                color: theme.accent,
              }}
            >
              03 / The Impact
            </motion.p>

            <div className="grid gap-8 sm:grid-cols-3">

              {selectedProject.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-t pt-6"
                  style={{
                    borderColor: `${theme.foreground}30`,
                  }}
                >

                  <p
                    style={{
                      fontFamily: theme.displayFont,
                    }}
                    className="text-4xl sm:text-4xl lg:text-5xl"
                  >
                    {metric.value}
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
                    {metric.label}
                  </p>

                </motion.div>
              ))}

            </div>
          </div>
        </section>
      )}


      {/* =========================
          RESULTS
      ========================== */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]"
        >

          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              color: theme.accent,
            }}
          >
            {/* CHANGED: Results becomes 03 without metrics, 04 with metrics */}
            {hasMetrics ? "04" : "03"} / The Outcome
          </p>

          <div>

            <h2
              style={{
                fontFamily: theme.displayFont,
              }}
              className="text-3xl leading-tight sm:text-4xl"
            >
              What we helped achieve.
            </h2>

            <div
              className="mt-8 divide-y"
              style={{
                borderColor: `${theme.foreground}20`,
              }}
            >
              {selectedProject.results?.map((result, index) => (
                <motion.div
                  key={result}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex gap-5 py-5"
                >

                  <span
                    className="text-xs"
                    style={{
                      color: theme.accent,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-base leading-7 opacity-80">
                    {result}
                  </p>

                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </section>


      {/* =========================
          GALLERY
      ========================== */}



      {/* =========================
          NEXT PROJECT
      ========================== */}
      <section
        className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
        style={{
          backgroundColor: theme.foreground,
          color: theme.background,
        }}
      >

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-7xl"
        >

          <p className="text-xs uppercase tracking-[0.2em] opacity-60">
            Continue Exploring
          </p>

          <h2
            style={{
              fontFamily: theme.displayFont,
            }}
            className="mt-5 text-4xl sm:text-5xl"
          >
            More of our work.
          </h2>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            <Link
              to="/work"
              className="mt-8 inline-flex items-center gap-4 border-b pb-2 text-sm"
              style={{
                borderColor: theme.secondary,
              }}
            >
              Back to all projects
              <span>
                <FiArrowUpRight />
              </span>
            </Link>
          </motion.div>

        </motion.div>
      </section>

    </main>
  );
}



      // {selectedProject.gallery?.length > 0 && (
      //   <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">

      //     <div className="mx-auto max-w-7xl">

      //       <motion.p
      //         initial={{ opacity: 0, y: 20 }}
      //         whileInView={{ opacity: 1, y: 0 }}
      //         viewport={{ once: true }}
      //         transition={{
      //           duration: 0.7,
      //           ease: [0.22, 1, 0.36, 1],
      //         }}
      //         className="mb-8 text-xs font-semibold uppercase tracking-[0.2em]"
      //         style={{
      //           color: theme.accent,
      //         }}
      //       >
      //         {/* CHANGED: Gallery becomes 04 without metrics, 05 with metrics */}
      //         {hasMetrics ? "05" : "04"} / The Work
      //       </motion.p>

      //       {/* =========================
      //           TILE GALLERY
      //       ========================== */}
      //       <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">
      //         <div className="mx-auto max-w-7xl">

      //           {selectedProject.gallery?.length > 0 && (
      //             <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
      //               {selectedProject.gallery.map((image, index) => {
      //                 const imageSizes = [
      //                   "aspect-[4/5]",
      //                   "aspect-square",
      //                   "aspect-[3/4]",
      //                   "aspect-[4/5]",
      //                   "aspect-square",
      //                   "aspect-[3/4]",
      //                   "aspect-[4/5]",
      //                   "aspect-square",
      //                 ];

      //                 return (
      //                   <motion.div
      //                     key={image}
      //                     initial={{ opacity: 0, y: 35 }}
      //                     whileInView={{ opacity: 1, y: 0 }}
      //                     viewport={{
      //                       once: true,
      //                       amount: 0.08,
      //                     }}
      //                     transition={{
      //                       duration: 0.7,
      //                       delay: (index % 4) * 0.06,
      //                       ease: [0.22, 1, 0.36, 1],
      //                     }}
      //                     className="group mb-3 w-full break-inside-avoid overflow-hidden rounded-xl"
      //                   >
      //                     <div
      //                       className={`w-full ${
      //                         imageSizes[index % imageSizes.length]
      //                       }`}
      //                     >
      //                       <img
      //                         src={image}
      //                         alt={`${selectedProject.name} project image ${index + 1}`}
      //                         loading="lazy"
      //                         className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      //                       />
      //                     </div>
      //                   </motion.div>
      //                 );
      //               })}
      //             </div>
      //           )}

      //         </div>
      //       </section>

      //     </div>
      //   </section>
      // )}


















































































// import { Link, useParams } from "react-router";
// import { project } from "../../data";
// import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

// export default function CaseStudy() {
//   const { slug } = useParams();

//   // Find the selected project from the URL
//   const selectedProject = project.find(
//     (item) => item.slug === slug
//   );

//   // Simple fallback for an invalid project URL
//   if (!selectedProject) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
//         <div>
//           <h1 className="font-serif text-5xl text-blue">
//             Project not found.
//           </h1>

//           <Link
//             to="/work"
//             className="mt-6 inline-block text-magenta underline"
//           >
//             Back to Works
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   // Brand theme
//   // The fallback prevents the page from crashing if a project
//   // doesn't have a theme yet.
//   const theme = selectedProject.theme || {
//     background: "#F2F2F2",
//     foreground: "#2F2E41",
//     accent: "#007589",
//     secondary: "#EB6F38",
//     displayFont: "Georgia, serif",
//   };

//   // CHANGED: Check whether this project actually has metrics.
//   const hasMetrics = selectedProject.metrics?.length > 0;

//   return (
//     <main
//       style={{
//         backgroundColor: theme.background,
//         color: theme.foreground,
//       }}
//       className="overflow-hidden"
//     >
//       {/* =========================
//           CASE STUDY HERO
//       ========================== */}
//       <section className="pb-16 sm:pb-20 md:pb-24">

//         {/* =========================
//             FULL-WIDTH HERO IMAGE
//         ========================== */}
//         <div className="w-full overflow-hidden">
            
//           <img
//             src={selectedProject.cover}
//             alt={`${selectedProject.name} project cover`}
//             className="h-[35vh] min-h-[320px] w-full object-cover md:h-[45vh] md:min-h-[450px]"
//           />

          
//         </div>

//         {/* =========================
//             PROJECT DETAILS
//         ========================== */}
//         <div className="px-5 sm:px-8 lg:px-16">
//           <div className="mx-auto max-w-7xl">
            
//             <Link
//               to="/work"
//               className="my-8 inline-flex items-center gap-2 text-xs font-semibold uppercase border-b pb-2 tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
//             >
//                <FiArrowLeft /> Back to Works
//             </Link>

//             <div className="mt-6">

//               <div className="mb-8 flex items-center gap-3">
//                 <span
//                   className="h-px w-10"
//                   style={{
//                     backgroundColor: theme.accent,
//                   }}
//                 />

//                 <p
//                   className="text-xs font-semibold uppercase tracking-[0.25em]"
//                   style={{
//                     color: theme.accent,
//                   }}
//                 >
//                   Selected Project
//                 </p>
//               </div>

//               <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">

//                 <h1
//                   style={{
//                     fontFamily: theme.displayFont,
//                   }}
//                   className="text-5xl leading-[1] tracking-tight sm:text-6xl md:text-7xl"
//                 >
//                   {selectedProject.name}
//                 </h1>

//                 <div className="max-w-md">
//                   <p className="text-sm leading-7 opacity-75">
//                     {selectedProject.description}
//                   </p>

//                   <div className="mt-6 flex flex-wrap gap-2">
//                     {selectedProject.services?.map((service) => (
//                       <span
//                         key={service}
//                         className="rounded-full border px-3 py-2 text-xs"
//                         style={{
//                           borderColor: `${theme.foreground}35`,
//                         }}
//                       >
//                         {service}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Project metadata */}
//               <div className="mt-8 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.15em] opacity-60">
//                 <span>{selectedProject.category}</span>
//                 <span>{selectedProject.location}</span>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>


//       {/* =========================
//           ABOUT THE BRAND
//       ========================== */}
//       <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
//         <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">

//           <p
//             className="text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.accent,
//             }}
//           >
//             01 / The Brand
//           </p>

//           <div>
//             <h2
//               style={{
//                 fontFamily: theme.displayFont,
//               }}
//               className="text-3xl leading-tight sm:text-4xl"
//             >
//               Building a brand with intention.
//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-8 opacity-75">
//               {selectedProject.description}
//             </p>
//           </div>

//         </div>
//       </section>


//       {/* =========================
//           SERVICES
//       ========================== */}
//       <section
//         className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
//         style={{
//           backgroundColor: `${theme.secondary}`,
//         }}
//       >
//         <div className="mx-auto max-w-7xl">

//           <p
//             className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.foreground,
//             }}
//           >
//             02 / Our Contribution
//           </p>

//           <div
//             className="divide-y"
//             style={{
//               borderColor: `${theme.foreground}20`,
//             }}
//           >
//             {selectedProject.services?.map((service, index) => (
//               <div
//                 key={service}
//                 className="flex items-center justify-between gap-5 py-6"
//               >

//                 <div className="flex items-center gap-6">

//                   <span className="text-xs opacity-50">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <h3
//                     style={{
//                       fontFamily: theme.displayFont,
//                     }}
//                     className="text-2xl sm:text-3xl"
//                   >
//                     {service}
//                   </h3>

//                 </div>

//                 <span
//                   className="text-xl"
//                   style={{
//                     color: theme.accent,
//                   }}
//                 >
//                   <FiArrowUpRight />
//                 </span>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>


//       {/* =========================
//           METRICS
//       ========================== */}
//       {hasMetrics && (
//         <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">

//           <div className="mx-auto max-w-7xl">

//             <p
//               className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//               style={{
//                 color: theme.accent,
//               }}
//             >
//               03 / The Impact
//             </p>

//             <div className="grid gap-8 sm:grid-cols-3">

//               {selectedProject.metrics.map((metric) => (
//                 <div
//                   key={metric.label}
//                   className="border-t pt-6"
//                   style={{
//                     borderColor: `${theme.foreground}30`,
//                   }}
//                 >

//                   <p
//                     style={{
//                       fontFamily: theme.displayFont,
//                     }}
//                     className="text-4xl sm:text-5xl"
//                   >
//                     {metric.value}
//                   </p>

//                   <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
//                     {metric.label}
//                   </p>

//                 </div>
//               ))}

//             </div>
//           </div>
//         </section>
//       )}


//       {/* =========================
//           RESULTS
//       ========================== */}
//       <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">

//         <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">

//           <p
//             className="text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.accent,
//             }}
//           >
//             {/* CHANGED: Results becomes 03 without metrics, 04 with metrics */}
//             {hasMetrics ? "04" : "03"} / The Outcome
//           </p>

//           <div>

//             <h2
//               style={{
//                 fontFamily: theme.displayFont,
//               }}
//               className="text-3xl leading-tight sm:text-4xl"
//             >
//               What we helped achieve.
//             </h2>

//             <div
//               className="mt-8 divide-y"
//               style={{
//                 borderColor: `${theme.foreground}20`,
//               }}
//             >
//               {selectedProject.results?.map((result, index) => (
//                 <div
//                   key={result}
//                   className="flex gap-5 py-5"
//                 >

//                   <span
//                     className="text-xs"
//                     style={{
//                       color: theme.accent,
//                     }}
//                   >
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <p className="text-base leading-7 opacity-80">
//                     {result}
//                   </p>

//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================
//           GALLERY
//       ========================== */}
//       {selectedProject.gallery?.length > 0 && (
//         <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">

//           <div className="mx-auto max-w-7xl">

//             <p
//               className="mb-8 text-xs font-semibold uppercase tracking-[0.2em]"
//               style={{
//                 color: theme.accent,
//               }}
//             >
//               {/* CHANGED: Gallery becomes 04 without metrics, 05 with metrics */}
//               {hasMetrics ? "05" : "04"} / The Work
//             </p>

//             {/* =========================
//                 TILE GALLERY
//             ========================== */}
//             <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">
//               <div className="mx-auto max-w-7xl">

//                 {selectedProject.gallery?.length > 0 && (
//                   <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
//                     {selectedProject.gallery.map((image, index) => {
//                       const imageSizes = [
//                         "aspect-[4/5]",
//                         "aspect-square",
//                         "aspect-[3/4]",
//                         "aspect-[4/5]",
//                         "aspect-square",
//                         "aspect-[3/4]",
//                         "aspect-[4/5]",
//                         "aspect-square",
//                       ];

//                       return (
//                         <div
//                           key={image}
//                           className="group mb-3 w-full break-inside-avoid overflow-hidden rounded-xl"
//                         >
//                           <div
//                             className={`w-full ${
//                               imageSizes[index % imageSizes.length]
//                             }`}
//                           >
//                             <img
//                               src={image}
//                               alt={`${selectedProject.name} project image ${index + 1}`}
//                               loading="lazy"
//                               className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//                             />
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}

//               </div>
//             </section>

//           </div>
//         </section>
//       )}


//       {/* =========================
//           NEXT PROJECT
//       ========================== */}
//       <section
//         className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
//         style={{
//           backgroundColor: theme.foreground,
//           color: theme.background,
//         }}
//       >

//         <div className="mx-auto max-w-7xl">

//           <p className="text-xs uppercase tracking-[0.2em] opacity-60">
//             Continue Exploring
//           </p>

//           <h2
//             style={{
//               fontFamily: theme.displayFont,
//             }}
//             className="mt-5 text-4xl sm:text-5xl"
//           >
//             More of our work.
//           </h2>

//           <Link
//             to="/work"
//             className="mt-8 inline-flex items-center gap-4 border-b pb-2 text-sm"
//             style={{
//               borderColor: theme.secondary,
//             }}
//           >
//             Back to all projects
//             <span><FiArrowUpRight /></span>
//           </Link>

//         </div>
//       </section>

//     </main>
//   );
// }



































