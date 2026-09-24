import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block"
    >
      <article>
        {/* Project image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#e8e8e8]">
          <img
            src={project.cover}
            alt={`${project.name} project`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#2F2E41]/0 transition-colors duration-500 group-hover:bg-[#2F2E41]/35" />

          {/* Arrow */}
          <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#2F2E41] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <FiArrowUpRight />
          </span>

          {/* Explore project */}
          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#2F2E41] opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
            Explore project
          </span>
        </div>

        {/* Project information */}
        <div className="mt-3 flex max-w-[360px] items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#007589]">
              {project.category}
            </p>

            <h3 className="font-serif text-xl text-[#2F2E41] transition-colors duration-300 group-hover:text-[#007589]">
              {project.name}
            </h3>
          </div>

        </div>

        {/* Services */}
        <p className="mt-1 max-w-[360px] text-xs leading-5 text-[#555568]">
          {project.services.slice(0, 3).join(" · ")}
        </p>
      </article>
    </Link>
  );
}













// import { Link } from "react-router";

// export default function ProjectCard ({ project, featured = false }) {
//   return (
//     <Link
//       to={`/work/${project.slug}`}
//       className={`group block ${
//         featured ? "md:col-span-2" : ""
//       }`}
//     >
//       <article>
//         {/* Project image */}
//         <div
//           className={`relative overflow-hidden rounded-2xl bg-[#e8e8e8] ${
//             featured ? "aspect-[16/9]" : "aspect-[4/5]"
//           }`}
//         >
//           <img
//             src={project.cover}
//             alt={`${project.name} project`}
//             loading="lazy"
//             className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//           />

//           {/* Hover overlay */}
//           <div className="absolute inset-0 bg-[#2F2E41]/0 transition-colors duration-500 group-hover:bg-[#2F2E41]/35" />

//           <span className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-[#2F2E41] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//             ↗
//           </span>

//           <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#2F2E41] opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
//             Explore project
//           </span>
//         </div>

//         {/* Project information */}
//         <div className="mt-4 flex items-start justify-between gap-4">
//           <div>
//             <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-[#007589]">
//               {project.category}
//             </p>

//             <h3 className="font-serif text-2xl text-[#2F2E41] transition-colors duration-300 group-hover:text-[#007589]">
//               {project.name}
//             </h3>
//           </div>

//           <span className="mt-1 text-lg text-[#2F2E41] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
//             ↗
//           </span>
//         </div>

//         <p className="mt-2 text-sm leading-6 text-[#555568]">
//           {project.services.slice(0, 3).join(" · ")}
//         </p>
//       </article>
//     </Link>
//   );
// };

















// import { Link } from "react-router";

// export default function ProjectCard({ project, featured = false }) {
//   return (
//     <Link
//       to={`/work/${project.slug}`}
//       className="group block"
//     >
//       <article>
//         {/* Project image */}
//         <div
//           className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-2xl"
//           style={{
//             backgroundColor: project.background || "#e8e8e8",
//           }}
//         >
//           <img
//             src={project.cover}
//             alt={`${project.name} project`}
//             loading="lazy"
//             className="h-full w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105 sm:p-8 lg:p-10"
//           />

//           {/* Hover overlay */}
//           <div className="absolute inset-0 bg-[#2F2E41]/0 transition-colors duration-500 group-hover:bg-[#2F2E41]/35" />

//           {/* Hover arrow */}
//           <span className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-[#2F2E41] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//             ↗
//           </span>

//           {/* Explore project */}
//           <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#2F2E41] opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
//             Explore project
//           </span>
//         </div>

//         {/* Project information */}
//         <div className="mx-auto mt-4 max-w-[420px]">
//           <div className="flex items-start justify-between gap-4">
//             <div>
//               <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-[#007589]">
//                 {project.category}
//               </p>

//               <h3 className="font-serif text-2xl text-[#2F2E41] transition-colors duration-300 group-hover:text-[#007589]">
//                 {project.name}
//               </h3>
//             </div>

//             <span className="mt-1 text-lg text-[#2F2E41] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
//               ↗
//             </span>
//           </div>

//           <p className="mt-2 text-sm leading-6 text-[#555568]">
//             {project.services.slice(0, 3).join(" · ")}
//           </p>
//         </div>
//       </article>
//     </Link>
//   );
// }






















