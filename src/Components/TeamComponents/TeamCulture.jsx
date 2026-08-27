import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function TeamCulture() {
  return (
    <section className="relative overflow-hidden bg-blue px-6 py-24 text-white sm:px-8 md:px-12 lg:px-16 lg:py-32">

      {/* Decorative circle */}
      <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full border border-white/15" />
       <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full border border-white/15" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/50">
              How we work
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Good work starts
              <span className="block text-white/40">
                with good people.
              </span>
            </h2>
          </motion.div>


          {/* Content */}
          <div className="space-y-8">

            <p className="max-w-2xl text-xl leading-8 text-white/80 sm:text-2xl">
              We believe the best creative work happens when people
              challenge ideas, share perspectives and trust each other
              enough to experiment.
            </p>

            <div className="grid gap-5 border-t border-white/20 pt-8 sm:grid-cols-2">

              <div>
                <span className="mb-3 block text-xs text-orange">
                  01
                </span>

                <h3 className="mb-2 text-lg font-medium">
                  Think together
                </h3>

                <p className="text-sm leading-6 text-white/50">
                  Strategy, creativity and execution work better when
                  they happen together.
                </p>
              </div>


              <div>
                <span className="mb-3 block text-xs text-orange">
                  02
                </span>

                <h3 className="mb-2 text-lg font-medium">
                  Make boldly
                </h3>

                <p className="text-sm leading-6 text-white/50">
                  We are not afraid to explore ideas that make people
                  stop, look and remember.
                </p>
              </div>

            </div>

            <a
              href="/contact"
              className="group inline-flex items-center gap-3 border-b border-white/40 pb-2 text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:gap-6"
            >
              Work with us

              <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}