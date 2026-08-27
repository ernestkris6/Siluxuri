import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import image1 from "../../assets/rentals.webp";


export default function TeamHero() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-blue text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image1}
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue/40" />

        {/* Brand gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue/80 via-blue/50 to-magenta/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-between px-6 py-10 sm:px-8 md:px-12 lg:px-16">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-white/60">
            Our Team
          </span>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-white/40 sm:block">
            Siluxri Creative Studio
          </span>
        </motion.div>


        {/* Main */}
        <div className="max-w-4xl pb-12">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 max-w-md text-sm leading-7 text-white/60"
          >
            Strategists, creatives, storytellers and problem-solvers
            united by one thing — making brands matter.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            The people
            <span className="block py-2 text-white/40">
              behind the work.
            </span>
          </motion.h1>

        </div>


        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-between border-t border-white/20 pt-5"
        >

          <span className="text-xs uppercase tracking-[0.2em] text-white/40">
            01 / Team
          </span>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
            <FiArrowDown className="animate-bounce" />
            Meet the team
          </div>

        </motion.div>

      </div>
    </section>
  );
}