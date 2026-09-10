import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import digi from "../../assets/vid2_web.mp4";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <video
          src={digi}
          alt=""
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />

        {/* Dark luxury overlay */}
        <div className="absolute inset-0 bg-blue/50" />

        {/* Subtle brand-colour gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue/80 via-blue/45 to-magenta/30" />
      </div>


      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1400px] flex-col justify-between px-6 py-10 sm:px-8 md:px-12 lg:px-16">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-white/60">
            OUR SERVICES
          </span>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-white/40 sm:block">
            Creative Studio
          </span>
        </motion.div>


        {/* Main */}
        <div className="max-w-5xl pb-12">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 max-w-md text-sm leading-7 text-white/60"
          >
           From strategy and identity to digital experiences and
           development, we turn ideas into brands that feel clear,
           distinctive and built to last.
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-4xl text-5xl font-medium leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            We Make Your Ideas
            <span className="block text-white/40">
              Come to Life.
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
            01 / Services
          </span>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
            <FiArrowDown className="animate-bounce" />
            Explore
          </div>

        </motion.div>

      </div>

    </section>
  );
}

















































