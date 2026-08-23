import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router";

export default function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-blue px-6 py-28 text-white sm:px-8 md:px-12 lg:px-16 lg:py-36">

      {/* Decorative shapes */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-magenta/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-orange/10 blur-3xl" />


      <div className="relative mx-auto max-w-[1400px]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >

          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/40">
            05 / Let's work together
          </p>

          <h2 className="text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Have an idea?
            <span className="block text-white/30">
              Let's make it real.
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-8 text-white/55">
            Tell us what you're building, what you're trying to solve,
            or simply where you want to go next.
          </p>


          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-4 border-b border-white/60 pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-7"
          >
            Start a conversation

            <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </motion.div>

      </div>

    </section>
  );
}