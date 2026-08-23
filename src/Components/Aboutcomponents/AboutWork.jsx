import { motion } from "framer-motion";
import digi from "../../assets/digital1.webp";

export default function AboutWork() {
  return (
    <section className="bg-white px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 lg:py-32">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-magenta">
              04 / The Process
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Good work starts
              <span className="block text-blue/35">
                with a good process.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-lg leading-8 text-blue/60">
              We listen first, understand the challenge, build the strategy,
              then create. The result is work that looks good because it
              works well.
            </p>

            <div className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-6 border-t border-blue/15 pt-6">

              <div>
                <span className="text-xs text-orange">01</span>
                <p className="mt-2 font-medium">Discover</p>
              </div>

              <div>
                <span className="text-xs text-orange">02</span>
                <p className="mt-2 font-medium">Strategise</p>
              </div>

              <div>
                <span className="text-xs text-orange">03</span>
                <p className="mt-2 font-medium">Create</p>
              </div>

              <div>
                <span className="text-xs text-orange">04</span>
                <p className="mt-2 font-medium">Deliver</p>
              </div>

            </div>
          </motion.div>


          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-2xl">
              <img
                src={digi}
                alt="Siluxuri creative process"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 left-6 rounded-full bg-orange px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white shadow-lg sm:left-10">
              Strategy × Creativity
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}