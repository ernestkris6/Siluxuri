
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function ContentGalleryCTA({ project }) {
  return (
    <section className="px-5 pb-10 sm:px-8 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative overflow-hidden rounded-tl-[28px] rounded-br-[28px] bg-[#2F2E41] px-6 py-12 text-white sm:px-10 sm:py-16 md:rounded-tl-[60px] md:rounded-br-[60px] md:px-16 md:py-20 lg:px-20"
      >
        <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full border border-white/10 sm:size-80" />

        <div className="pointer-events-none absolute -bottom-32 right-16 size-64 rounded-full bg-[#007589]/25 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A0CBD2]">
            Have a vision?
          </p>

          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
            Let's create something
            <span className="text-[#A0CBD2]"> unforgettable.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            From compelling visuals to thoughtful campaigns, let's
            create content that gives your brand a distinct voice.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#EB6F38] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#2F2E41]"
            >
              Start a project
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              to={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm text-white transition-colors hover:border-[#A0CBD2] hover:text-[#A0CBD2]"
            >
              Explore the case study
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
