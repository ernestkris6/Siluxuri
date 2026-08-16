import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-blue sm:px-4">

      <div className="w-full max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Error number */}
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-magenta">
            Error 404:
          </p>

          {/* Heading */}
          <h1 className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[110px]">
            Oops!! Looks like
            <span className="block text-blue/30">
              you're lost.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-blue/60 sm:text-xl">
            The page you're looking for doesn't exist, has moved,
            or may have taken a little creative detour.
          </p>

          {/* CTA */}
          <Link
            to="/"
            className="group mt-10 inline-flex items-center gap-4 border-b border-blue pb-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:gap-6"
          >
            Back to homepage

            <FiArrowUpRight
              className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </motion.div>

        {/* Bottom decoration */}
        <div className="mt-24 flex items-center justify-between border-t border-blue/15 pt-5 text-xs uppercase tracking-[0.2em] text-blue/40">
          <span>SILUXRI</span>
          <span>Creative Studio</span>
        </div>

      </div>

    </main>
  );
}