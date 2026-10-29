
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function ContentGalleryCTA({ project }) {
  return (
    <section className="relative overflow-hidden border-t border-[#2F2E41]/10 bg-[#A0CBD2]/20 px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-20">
      <div className="pointer-events-none absolute -right-24 top-1/2 size-80 -translate-y-1/2 rounded-full border border-[#007589]/15 md:size-[500px]" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.28em] text-[#007589]">
            Your brand deserves more
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            Let's make your
            <br />
            next big idea
            <br />
            <span className="text-[#007589]">impossible to ignore.</span>
          </h2>

          <p className="mt-7 max-w-lg text-sm leading-7 text-[#2F2E41]/65 md:text-base">
            Inspired by what we created for {project.name}?
            Let's explore what thoughtful creativity can do for your brand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-start gap-5 lg:items-end"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-8 rounded-full bg-[#007589] px-7 py-5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2F2E41]"
          >
            Start a conversation

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>

          <Link
            to="/work"
            className="text-xs uppercase tracking-[0.17em] text-[#2F2E41]/60 transition-colors hover:text-[#007589]"
          >
            Explore more projects →
          </Link>
        </motion.div>
      </div>

      <div className="relative mt-16 flex items-center justify-between border-t border-[#2F2E41]/15 pt-5">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#2F2E41]/50">
          Siluxri Creative Studio
        </span>

        <span className="text-[10px] uppercase tracking-[0.2em] text-[#2F2E41]/50">
          Ideas into impact.
        </span>
      </div>
    </section>
  );
}




































// import { Link } from "react-router";
// import { motion } from "framer-motion";

// export default function ContentGalleryCTA({ project }) {
//   return (
//     <section className="px-5 pb-10 sm:px-8 md:px-12 lg:px-20">
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="relative overflow-hidden rounded-tl-[28px] rounded-br-[28px] bg-[#2F2E41] px-6 py-12 text-white sm:px-10 sm:py-16 md:rounded-tl-[60px] md:rounded-br-[60px] md:px-16 md:py-20 lg:px-20"
//       >
//         <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full border border-white/10 sm:size-80" />

//         <div className="pointer-events-none absolute -bottom-32 right-16 size-64 rounded-full bg-[#007589]/25 blur-3xl" />

//         <div className="relative z-10 max-w-3xl">
//           <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A0CBD2]">
//             Have a vision?
//           </p>

//           <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
//             Let's create something
//             <span className="text-[#A0CBD2]"> unforgettable.</span>
//           </h2>

//           <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
//             From compelling visuals to thoughtful campaigns, let's
//             create content that gives your brand a distinct voice.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-3 rounded-full bg-[#EB6F38] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#2F2E41]"
//             >
//               Start a project
//               <span aria-hidden="true">↗</span>
//             </Link>

//             <Link
//               to={`/work/${project.slug}`}
//               className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm text-white transition-colors hover:border-[#A0CBD2] hover:text-[#A0CBD2]"
//             >
//               Explore the case study
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
