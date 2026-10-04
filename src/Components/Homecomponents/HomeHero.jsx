import { motion } from "framer-motion";
import { Link } from "react-router";
import herovideo from "../../assets/vid2_web.mp4";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";


export default function HeroSection() {
  return (
    <section className="relative h-[88vh] min-h-[620px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        src={herovideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-[#2F2E41]/24" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F2E41]/75 via-[#2F2E41]/35 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-5 pb-12 sm:px-8 sm:pb-16 md:pb-20 lg:px-16 lg:pb-20 xl:px-20">
        <div className="w-full max-w-7xl">
          
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-5 flex items-center gap-3"
          >
            {/* <span className="h-px w-10 bg-[#A0CBD2]" /> */}

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2F2F2]">
              Siluxri — Creative Agency
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-[#F2F2F2] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Vision
            <br />
            <span className="italic text-[#A0CBD2]">
              Brought to life.
            </span>
          </motion.h1>

          {/* Bottom Content */}
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="max-w-md text-sm leading-7 text-[#F2F2F2]/95 sm:text-base"
            >
              Branding, digital marketing and creative solutions
              for individuals and businesses.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-5 border-b border-[#A0CBD2] pb-3 text-sm font-medium text-[#F2F2F2] transition-all duration-300 hover:gap-7"
              >
                Explore our work

                <span className="text-lg text-[#A0CBD2] transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowUpRight />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex items-center justify-between border-t border-[#F2F2F2]/20 pt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F2F2F2]/60"
          >
            <span>Nigeria</span>

            <span className="hidden sm:block">
              Branding · Digital · Creative
            </span>

            <span className="flex items-center gap-2">
              Scroll
              <span className="text-[#A0CBD2]">
                <FiArrowDown />
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}