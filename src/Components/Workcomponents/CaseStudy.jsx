import { Link, useParams } from "react-router";
import { project } from "../../data";

export default function CaseStudy() {
  const { slug } = useParams();

  // Find the selected project from the URL
  const selectedProject = project.find(
    (item) => item.slug === slug
  );

  // Simple fallback for an invalid project URL
  if (!selectedProject) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F2F2F2] px-6 text-center">
        <div>
          <h1 className="font-serif text-5xl text-[#2F2E41]">
            Project not found.
          </h1>

          <Link
            to="/work"
            className="mt-6 inline-block text-[#007589] underline"
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
    displayFont: "Georgia, serif",
  };

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
            
          <img
            src={selectedProject.cover}
            alt={`${selectedProject.name} project cover`}
            className="h-[35vh] min-h-[320px] w-full object-cover md:h-[45vh] md:min-h-[450px]"
          />

          
        </div>

        {/* =========================
            PROJECT DETAILS
        ========================== */}
        <div className="px-5 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">

            <Link
              to="/work"
              className="my-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
            >
              ← Back to Works
            </Link>

            <div className="mt-6">

              <div className="mb-8 flex items-center gap-3">
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
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">

                <h1
                  style={{
                    fontFamily: theme.displayFont,
                  }}
                  className="text-5xl leading-[1] tracking-tight sm:text-6xl md:text-7xl"
                >
                  {selectedProject.name}
                </h1>

                <div className="max-w-md">
                  <p className="text-sm leading-7 opacity-75">
                    {selectedProject.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedProject.services?.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border px-3 py-2 text-xs"
                        style={{
                          borderColor: `${theme.foreground}35`,
                        }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project metadata */}
              <div className="mt-8 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.15em] opacity-60">
                <span>{selectedProject.category}</span>
                <span>{selectedProject.location}</span>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================
          ABOUT THE BRAND
      ========================== */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">

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

        </div>
      </section>


      {/* =========================
          SERVICES
      ========================== */}
      <section
        className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
        style={{
          backgroundColor: `${theme.accent}12`,
        }}
      >
        <div className="mx-auto max-w-7xl">

          <p
            className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              color: theme.accent,
            }}
          >
            02 / Our Contribution
          </p>

          <div
            className="divide-y"
            style={{
              borderColor: `${theme.foreground}20`,
            }}
          >
            {selectedProject.services?.map((service, index) => (
              <div
                key={service}
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

                <span
                  className="text-xl"
                  style={{
                    color: theme.accent,
                  }}
                >
                  ↗
                </span>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================
          METRICS
      ========================== */}
      {selectedProject.metrics?.length > 0 && (
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <p
              className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{
                color: theme.accent,
              }}
            >
              03 / The Impact
            </p>

            <div className="grid gap-8 sm:grid-cols-3">

              {selectedProject.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-t pt-6"
                  style={{
                    borderColor: `${theme.foreground}30`,
                  }}
                >

                  <p
                    style={{
                      fontFamily: theme.displayFont,
                    }}
                    className="text-4xl sm:text-5xl"
                  >
                    {metric.value}
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
                    {metric.label}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>
      )}


      {/* =========================
          RESULTS
      ========================== */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">

          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              color: theme.accent,
            }}
          >
            04 / The Outcome
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
                <div
                  key={result}
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

                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          GALLERY
      ========================== */}
      {selectedProject.gallery?.length > 0 && (
        <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <p
              className="mb-8 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{
                color: theme.accent,
              }}
            >
              05 / The Work
            </p>

            {/* =========================
                TILE GALLERY
            ========================== */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">

              {selectedProject.gallery?.map((image, index) => {

                // Different tile sizes create the editorial / masonry feel
                const tileSizes = [
                  "col-span-2 row-span-2",
                  "row-span-1",
                  "row-span-2",
                  "row-span-1",
                  "row-span-2",
                  "col-span-2 row-span-1",
                  "row-span-1",
                  "row-span-2",
                ];

                return (
                  <div
                    key={image}
                    className={`group overflow-hidden rounded-xl ${
                      tileSizes[index % tileSizes.length]
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.name} project image ${
                        index + 1
                      }`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                );
              })}

            </div>

          </div>
        </section>
      )}


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

        <div className="mx-auto max-w-7xl">

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

          <Link
            to="/work"
            className="mt-8 inline-flex items-center gap-4 border-b pb-2 text-sm"
            style={{
              borderColor: theme.secondary,
            }}
          >
            Back to all projects
            <span>↗</span>
          </Link>

        </div>
      </section>

    </main>
  );
}
























































// import { Link, useParams } from "react-router";
// import { project } from "../../data";

// export default function CaseStudy() {
//   const { slug } = useParams();

//   // Find the selected project from the URL
//   const selectedProject = project.find(
//     (item) => item.slug === slug
//   );

//   // Simple fallback for an invalid project URL
//   if (!selectedProject) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-[#F2F2F2] px-6 text-center">
//         <div>
//           <h1 className="font-serif text-5xl text-[#2F2E41]">
//             Project not found.
//           </h1>

//           <Link
//             to="/work"
//             className="mt-6 inline-block text-[#007589] underline"
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
//               className="my-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
//             >
//               ← Back to Works
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
//           backgroundColor: `${theme.accent}12`,
//         }}
//       >
//         <div className="mx-auto max-w-7xl">

//           <p
//             className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.accent,
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
//                   ↗
//                 </span>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>


//       {/* =========================
//           METRICS
//       ========================== */}
//       {selectedProject.metrics?.length > 0 && (
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
//             04 / The Outcome
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
//       <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">

//         <div className="mx-auto max-w-7xl">

//           <p
//             className="mb-8 text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.accent,
//             }}
//           >
//             05 / The Work
//           </p>

//           {/* =========================
//               TILE GALLERY
//           ========================== */}
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">

//             {selectedProject.gallery?.map((image, index) => {

//               // Different tile sizes create the editorial / masonry feel
//               const tileSizes = [
//                 "col-span-2 row-span-2",
//                 "row-span-1",
//                 "row-span-2",
//                 "row-span-1",
//                 "row-span-2",
//                 "col-span-2 row-span-1",
//                 "row-span-1",
//                 "row-span-2",
//               ];

//               return (
//                 <div
//                   key={image}
//                   className={`group overflow-hidden rounded-xl ${
//                     tileSizes[index % tileSizes.length]
//                   }`}
//                 >
//                   <img
//                     src={image}
//                     alt={`${selectedProject.name} project image ${
//                       index + 1
//                     }`}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//                   />
//                 </div>
//               );
//             })}

//           </div>

//         </div>
//       </section>


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
//             <span>↗</span>
//           </Link>

//         </div>
//       </section>

//     </main>
//   );
// }





















































































